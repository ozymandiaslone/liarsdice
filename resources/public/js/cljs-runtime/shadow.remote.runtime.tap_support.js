goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20419,p__20420){
var map__20421 = p__20419;
var map__20421__$1 = cljs.core.__destructure_map(map__20421);
var svc = map__20421__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20421__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20421__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20421__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20422 = p__20420;
var map__20422__$1 = cljs.core.__destructure_map(map__20422);
var msg = map__20422__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20422__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20422__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20422__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20422__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20433,p__20434){
var map__20435 = p__20433;
var map__20435__$1 = cljs.core.__destructure_map(map__20435);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20435__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20436 = p__20434;
var map__20436__$1 = cljs.core.__destructure_map(map__20436);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20436__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20439,p__20440){
var map__20444 = p__20439;
var map__20444__$1 = cljs.core.__destructure_map(map__20444);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20444__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20445 = p__20440;
var map__20445__$1 = cljs.core.__destructure_map(map__20445);
var msg = map__20445__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20445__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20446,tid){
var map__20447 = p__20446;
var map__20447__$1 = cljs.core.__destructure_map(map__20447);
var svc = map__20447__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20459 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20460 = null;
var count__20461 = (0);
var i__20462 = (0);
while(true){
if((i__20462 < count__20461)){
var vec__20475 = chunk__20460.cljs$core$IIndexed$_nth$arity$2(null,i__20462);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20475,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20485 = seq__20459;
var G__20486 = chunk__20460;
var G__20487 = count__20461;
var G__20488 = (i__20462 + (1));
seq__20459 = G__20485;
chunk__20460 = G__20486;
count__20461 = G__20487;
i__20462 = G__20488;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20459);
if(temp__5823__auto__){
var seq__20459__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20459__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__20459__$1);
var G__20489 = cljs.core.chunk_rest(seq__20459__$1);
var G__20490 = c__5548__auto__;
var G__20491 = cljs.core.count(c__5548__auto__);
var G__20492 = (0);
seq__20459 = G__20489;
chunk__20460 = G__20490;
count__20461 = G__20491;
i__20462 = G__20492;
continue;
} else {
var vec__20478 = cljs.core.first(seq__20459__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20478,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20478,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20493 = cljs.core.next(seq__20459__$1);
var G__20494 = null;
var G__20495 = (0);
var G__20496 = (0);
seq__20459 = G__20493;
chunk__20460 = G__20494;
count__20461 = G__20495;
i__20462 = G__20496;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20451_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20451_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20452_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20452_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20453_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20453_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20454_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20454_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20481){
var map__20482 = p__20481;
var map__20482__$1 = cljs.core.__destructure_map(map__20482);
var svc = map__20482__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20482__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20482__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
