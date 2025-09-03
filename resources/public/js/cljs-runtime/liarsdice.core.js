goog.provide('liarsdice.core');
liarsdice.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Waiting for backend..."], null));
liarsdice.core.poll_backend = (function liarsdice$core$poll_backend(){
return goog.net.XhrIo.send("liarsdice/api/poll",(function (e){
var xhr_io = e.target;
var response_text = xhr_io.getResponseText();
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(goog.json.parse(response_text),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return cljs.core.reset_BANG_(liarsdice.core.app_state,data);
}));
});
liarsdice.core.app_component = (function liarsdice$core$app_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Minimal Clojure/ClojureScript App"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is the frontend talking to the backend."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(liarsdice.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Timestamp: ",new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(liarsdice.core.app_state))], null)], null);
});
liarsdice.core.init_fn = (function liarsdice$core$init_fn(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [liarsdice.core.app_component], null),document.getElementById("app"));

return setInterval(liarsdice.core.poll_backend,(500));
});

//# sourceMappingURL=liarsdice.core.js.map
