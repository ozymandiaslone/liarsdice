goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18037){
var map__18071 = p__18037;
var map__18071__$1 = cljs.core.__destructure_map(map__18071);
var runtime = map__18071__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18071__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18179 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18179)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18083 = runtime;
var G__18084 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18179);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18083,G__18084) : shadow.remote.runtime.shared.process.call(null,G__18083,G__18084));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18090,res){
var map__18091 = p__18090;
var map__18091__$1 = cljs.core.__destructure_map(map__18091);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18091__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18091__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18092 = res;
var G__18092__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18092,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18092);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18092__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18092__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18094 = arguments.length;
switch (G__18094) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18095,msg,handlers,timeout_after_ms){
var map__18096 = p__18095;
var map__18096__$1 = cljs.core.__destructure_map(map__18096);
var runtime = map__18096__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___18185 = arguments.length;
var i__5750__auto___18186 = (0);
while(true){
if((i__5750__auto___18186 < len__5749__auto___18185)){
args__5755__auto__.push((arguments[i__5750__auto___18186]));

var G__18188 = (i__5750__auto___18186 + (1));
i__5750__auto___18186 = G__18188;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18100,ev,args){
var map__18101 = p__18100;
var map__18101__$1 = cljs.core.__destructure_map(map__18101);
var runtime = map__18101__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18101__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18102 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18105 = null;
var count__18106 = (0);
var i__18107 = (0);
while(true){
if((i__18107 < count__18106)){
var ext = chunk__18105.cljs$core$IIndexed$_nth$arity$2(null,i__18107);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18189 = seq__18102;
var G__18190 = chunk__18105;
var G__18191 = count__18106;
var G__18192 = (i__18107 + (1));
seq__18102 = G__18189;
chunk__18105 = G__18190;
count__18106 = G__18191;
i__18107 = G__18192;
continue;
} else {
var G__18193 = seq__18102;
var G__18194 = chunk__18105;
var G__18195 = count__18106;
var G__18196 = (i__18107 + (1));
seq__18102 = G__18193;
chunk__18105 = G__18194;
count__18106 = G__18195;
i__18107 = G__18196;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18102);
if(temp__5823__auto__){
var seq__18102__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18102__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18102__$1);
var G__18197 = cljs.core.chunk_rest(seq__18102__$1);
var G__18198 = c__5548__auto__;
var G__18199 = cljs.core.count(c__5548__auto__);
var G__18200 = (0);
seq__18102 = G__18197;
chunk__18105 = G__18198;
count__18106 = G__18199;
i__18107 = G__18200;
continue;
} else {
var ext = cljs.core.first(seq__18102__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18201 = cljs.core.next(seq__18102__$1);
var G__18202 = null;
var G__18203 = (0);
var G__18204 = (0);
seq__18102 = G__18201;
chunk__18105 = G__18202;
count__18106 = G__18203;
i__18107 = G__18204;
continue;
} else {
var G__18205 = cljs.core.next(seq__18102__$1);
var G__18206 = null;
var G__18207 = (0);
var G__18208 = (0);
seq__18102 = G__18205;
chunk__18105 = G__18206;
count__18106 = G__18207;
i__18107 = G__18208;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18097){
var G__18098 = cljs.core.first(seq18097);
var seq18097__$1 = cljs.core.next(seq18097);
var G__18099 = cljs.core.first(seq18097__$1);
var seq18097__$2 = cljs.core.next(seq18097__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18098,G__18099,seq18097__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18112,p__18113){
var map__18114 = p__18112;
var map__18114__$1 = cljs.core.__destructure_map(map__18114);
var runtime = map__18114__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18114__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18115 = p__18113;
var map__18115__$1 = cljs.core.__destructure_map(map__18115);
var msg = map__18115__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18115__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18116 = cljs.core.deref(state_ref);
var map__18116__$1 = cljs.core.__destructure_map(map__18116);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18116__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18116__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18118,msg){
var map__18119 = p__18118;
var map__18119__$1 = cljs.core.__destructure_map(map__18119);
var runtime = map__18119__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18119__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18120,key,p__18121){
var map__18124 = p__18120;
var map__18124__$1 = cljs.core.__destructure_map(map__18124);
var state = map__18124__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18124__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18125 = p__18121;
var map__18125__$1 = cljs.core.__destructure_map(map__18125);
var spec = map__18125__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18125__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18142,key,spec){
var map__18143 = p__18142;
var map__18143__$1 = cljs.core.__destructure_map(map__18143);
var runtime = map__18143__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18143__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___18212 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___18212 == null)){
} else {
var on_welcome_18213 = temp__5827__auto___18212;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18213.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18213.cljs$core$IFn$_invoke$arity$0() : on_welcome_18213.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18149_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18149_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18150_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18150_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18151_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18151_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18152_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18152_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18153_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18153_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18157,key){
var map__18158 = p__18157;
var map__18158__$1 = cljs.core.__destructure_map(map__18158);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18159,msg){
var map__18160 = p__18159;
var map__18160__$1 = cljs.core.__destructure_map(map__18160);
var runtime = map__18160__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18160__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18161,p__18162){
var map__18163 = p__18161;
var map__18163__$1 = cljs.core.__destructure_map(map__18163);
var runtime = map__18163__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18163__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18164 = p__18162;
var map__18164__$1 = cljs.core.__destructure_map(map__18164);
var msg = map__18164__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18164__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18164__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18167 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18169 = null;
var count__18170 = (0);
var i__18171 = (0);
while(true){
if((i__18171 < count__18170)){
var map__18176 = chunk__18169.cljs$core$IIndexed$_nth$arity$2(null,i__18171);
var map__18176__$1 = cljs.core.__destructure_map(map__18176);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18176__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18215 = seq__18167;
var G__18216 = chunk__18169;
var G__18217 = count__18170;
var G__18218 = (i__18171 + (1));
seq__18167 = G__18215;
chunk__18169 = G__18216;
count__18170 = G__18217;
i__18171 = G__18218;
continue;
} else {
var G__18219 = seq__18167;
var G__18220 = chunk__18169;
var G__18221 = count__18170;
var G__18222 = (i__18171 + (1));
seq__18167 = G__18219;
chunk__18169 = G__18220;
count__18170 = G__18221;
i__18171 = G__18222;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18167);
if(temp__5823__auto__){
var seq__18167__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18167__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18167__$1);
var G__18223 = cljs.core.chunk_rest(seq__18167__$1);
var G__18224 = c__5548__auto__;
var G__18225 = cljs.core.count(c__5548__auto__);
var G__18226 = (0);
seq__18167 = G__18223;
chunk__18169 = G__18224;
count__18170 = G__18225;
i__18171 = G__18226;
continue;
} else {
var map__18178 = cljs.core.first(seq__18167__$1);
var map__18178__$1 = cljs.core.__destructure_map(map__18178);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18178__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18227 = cljs.core.next(seq__18167__$1);
var G__18228 = null;
var G__18229 = (0);
var G__18230 = (0);
seq__18167 = G__18227;
chunk__18169 = G__18228;
count__18170 = G__18229;
i__18171 = G__18230;
continue;
} else {
var G__18231 = cljs.core.next(seq__18167__$1);
var G__18232 = null;
var G__18233 = (0);
var G__18234 = (0);
seq__18167 = G__18231;
chunk__18169 = G__18232;
count__18170 = G__18233;
i__18171 = G__18234;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
