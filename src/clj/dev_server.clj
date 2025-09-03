(ns dev-server
  (:require [org.httpkit.server :as server]
            [ring.util.response :as resp]
            [bidi.bidi :as bidi]
            [cheshire.core :as json]
            [hiccup.core :refer [html]]
            [clojure.java.io :as io]))

(defn page-handler
  [_req]
  (resp/response
   (str "<!DOCTYPE html>"
        (html
        [:html
          [:head
           [:title "Clojure/ClojureScript Project"]
           [:meta {:charset "UTF-8"}]]
          [:body
           [:div#app]
           ;; so :src needs to be "liarsdice/js/main.js"
           ;; when we are proxying to our ozlabs.dev 
           ;; because otherwise it would try to grab js
           ;; from ozlabs.dev/js/main.js whereas it needs
           ;; to look in ozlabs.dev/liarsdice/js/main.js
           ;;
           ;; but if one wanted to do work locally
           ;; on localhost:3000 without spinning up
           ;; the reverse proxy it would need to be
           ;; just "/js/main.js"
           [:script {:src "liarsdice/js/main.js"}]
           [:script "liarsdice.core.init_fn();"]]]))))

(defn poll-handler
  [_req]
  (-> {:message "Hello from the backend!"
       :timestamp (System/currentTimeMillis)}
      cheshire.core/generate-string  ; make it JSON
      resp/response
      (resp/header "Content-Type" "application/json")))

(def routes
  ["/" {""           page-handler
        "index.html" page-handler  
        "api/poll"   poll-handler
        ["js/" :path] (fn [req] 
                        (let [path (get-in req [:route-params :path])]
                          (when-let [resource (io/resource (str "public/js/" path))]
                            (-> resource
                                slurp
                                resp/response
                                (resp/header "Content-Type" "application/javascript")))))}])

(defn handler [req]
  (let [match (bidi/match-route routes (:uri req))]
    (if match
      ((:handler match) (assoc req :route-params (:route-params match)))
      (resp/not-found "Not found"))))

(defn -main
  [& args]
  (println "Starting server on port 3000...")
  (server/run-server handler {:port 3000}))
