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
           [:script {:src "/js/main.js"}]
           [:script "liarsdice.core.init_fn();"]]]))))

(defn poll-handler
  [_req]
  (-> {:message "Hello from the backend!"
       :timestamp (System/currentTimeMillis)}
      cheshire.core/generate-string  ; Convert to JSON
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
