;;;; Optimization
(declaim (optimize (speed 3) (debug 0) (safety 0) (space 0)))

(ql:quickload :hunchentoot)
(ql:quickload "drakma")


(defpackage :liars-dice-server
  (:use :cl :hunchentoot))
(in-package :liars-dice-server)



(define-easy-handler (root :uri "/") ()
  (with-open-file (f "index.html")
    (setf (content-type*) "text/html")
    (let ((content (make-string (file-length f))))
      (read-sequence content f)
      content)))

(defparameter *server* (make-instance 'easy-acceptor :port 8090))

(format t "~&Starting Hunchentoot server on port 8090...~%")
(start *server*)
