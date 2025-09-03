goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___21509 = arguments.length;
var i__5750__auto___21510 = (0);
while(true){
if((i__5750__auto___21510 < len__5749__auto___21509)){
args__5755__auto__.push((arguments[i__5750__auto___21510]));

var G__21511 = (i__5750__auto___21510 + (1));
i__5750__auto___21510 = G__21511;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21078){
var G__21079 = cljs.core.first(seq21078);
var seq21078__$1 = cljs.core.next(seq21078);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21079,seq21078__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21090 = cljs.core.seq(sources);
var chunk__21091 = null;
var count__21092 = (0);
var i__21093 = (0);
while(true){
if((i__21093 < count__21092)){
var map__21106 = chunk__21091.cljs$core$IIndexed$_nth$arity$2(null,i__21093);
var map__21106__$1 = cljs.core.__destructure_map(map__21106);
var src = map__21106__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21107){var e_21516 = e21107;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21516);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21516.message)].join('')));
}

var G__21517 = seq__21090;
var G__21518 = chunk__21091;
var G__21519 = count__21092;
var G__21520 = (i__21093 + (1));
seq__21090 = G__21517;
chunk__21091 = G__21518;
count__21092 = G__21519;
i__21093 = G__21520;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21090);
if(temp__5823__auto__){
var seq__21090__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21090__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21090__$1);
var G__21521 = cljs.core.chunk_rest(seq__21090__$1);
var G__21522 = c__5548__auto__;
var G__21523 = cljs.core.count(c__5548__auto__);
var G__21524 = (0);
seq__21090 = G__21521;
chunk__21091 = G__21522;
count__21092 = G__21523;
i__21093 = G__21524;
continue;
} else {
var map__21114 = cljs.core.first(seq__21090__$1);
var map__21114__$1 = cljs.core.__destructure_map(map__21114);
var src = map__21114__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21115){var e_21525 = e21115;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21525);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21525.message)].join('')));
}

var G__21526 = cljs.core.next(seq__21090__$1);
var G__21527 = null;
var G__21528 = (0);
var G__21529 = (0);
seq__21090 = G__21526;
chunk__21091 = G__21527;
count__21092 = G__21528;
i__21093 = G__21529;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21120 = cljs.core.seq(js_requires);
var chunk__21121 = null;
var count__21122 = (0);
var i__21123 = (0);
while(true){
if((i__21123 < count__21122)){
var js_ns = chunk__21121.cljs$core$IIndexed$_nth$arity$2(null,i__21123);
var require_str_21531 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21531);


var G__21532 = seq__21120;
var G__21533 = chunk__21121;
var G__21534 = count__21122;
var G__21535 = (i__21123 + (1));
seq__21120 = G__21532;
chunk__21121 = G__21533;
count__21122 = G__21534;
i__21123 = G__21535;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21120);
if(temp__5823__auto__){
var seq__21120__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21120__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21120__$1);
var G__21536 = cljs.core.chunk_rest(seq__21120__$1);
var G__21537 = c__5548__auto__;
var G__21538 = cljs.core.count(c__5548__auto__);
var G__21539 = (0);
seq__21120 = G__21536;
chunk__21121 = G__21537;
count__21122 = G__21538;
i__21123 = G__21539;
continue;
} else {
var js_ns = cljs.core.first(seq__21120__$1);
var require_str_21542 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21542);


var G__21543 = cljs.core.next(seq__21120__$1);
var G__21544 = null;
var G__21545 = (0);
var G__21546 = (0);
seq__21120 = G__21543;
chunk__21121 = G__21544;
count__21122 = G__21545;
i__21123 = G__21546;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21133){
var map__21134 = p__21133;
var map__21134__$1 = cljs.core.__destructure_map(map__21134);
var msg = map__21134__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21134__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21134__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21138(s__21139){
return (new cljs.core.LazySeq(null,(function (){
var s__21139__$1 = s__21139;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21139__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21147 = cljs.core.first(xs__6383__auto__);
var map__21147__$1 = cljs.core.__destructure_map(map__21147);
var src = map__21147__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21147__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__21139__$1,map__21147,map__21147__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21134,map__21134__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21138_$_iter__21140(s__21141){
return (new cljs.core.LazySeq(null,((function (s__21139__$1,map__21147,map__21147__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21134,map__21134__$1,msg,info,reload_info){
return (function (){
var s__21141__$1 = s__21141;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21141__$1);
if(temp__5823__auto____$1){
var s__21141__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21141__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__21141__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__21143 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__21142 = (0);
while(true){
if((i__21142 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__21142);
cljs.core.chunk_append(b__21143,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21547 = (i__21142 + (1));
i__21142 = G__21547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21143),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21138_$_iter__21140(cljs.core.chunk_rest(s__21141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21143),null);
}
} else {
var warning = cljs.core.first(s__21141__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21138_$_iter__21140(cljs.core.rest(s__21141__$2)));
}
} else {
return null;
}
break;
}
});})(s__21139__$1,map__21147,map__21147__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21134,map__21134__$1,msg,info,reload_info))
,null,null));
});})(s__21139__$1,map__21147,map__21147__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21134,map__21134__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21138(cljs.core.rest(s__21139__$1)));
} else {
var G__21548 = cljs.core.rest(s__21139__$1);
s__21139__$1 = G__21548;
continue;
}
} else {
var G__21549 = cljs.core.rest(s__21139__$1);
s__21139__$1 = G__21549;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21148_21550 = cljs.core.seq(warnings);
var chunk__21149_21551 = null;
var count__21150_21552 = (0);
var i__21151_21553 = (0);
while(true){
if((i__21151_21553 < count__21150_21552)){
var map__21154_21554 = chunk__21149_21551.cljs$core$IIndexed$_nth$arity$2(null,i__21151_21553);
var map__21154_21555__$1 = cljs.core.__destructure_map(map__21154_21554);
var w_21556 = map__21154_21555__$1;
var msg_21557__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154_21555__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154_21555__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154_21555__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154_21555__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21560)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21558),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21559),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21557__$1)].join(''));


var G__21561 = seq__21148_21550;
var G__21562 = chunk__21149_21551;
var G__21563 = count__21150_21552;
var G__21564 = (i__21151_21553 + (1));
seq__21148_21550 = G__21561;
chunk__21149_21551 = G__21562;
count__21150_21552 = G__21563;
i__21151_21553 = G__21564;
continue;
} else {
var temp__5823__auto___21565 = cljs.core.seq(seq__21148_21550);
if(temp__5823__auto___21565){
var seq__21148_21566__$1 = temp__5823__auto___21565;
if(cljs.core.chunked_seq_QMARK_(seq__21148_21566__$1)){
var c__5548__auto___21567 = cljs.core.chunk_first(seq__21148_21566__$1);
var G__21568 = cljs.core.chunk_rest(seq__21148_21566__$1);
var G__21569 = c__5548__auto___21567;
var G__21570 = cljs.core.count(c__5548__auto___21567);
var G__21571 = (0);
seq__21148_21550 = G__21568;
chunk__21149_21551 = G__21569;
count__21150_21552 = G__21570;
i__21151_21553 = G__21571;
continue;
} else {
var map__21161_21572 = cljs.core.first(seq__21148_21566__$1);
var map__21161_21573__$1 = cljs.core.__destructure_map(map__21161_21572);
var w_21574 = map__21161_21573__$1;
var msg_21575__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21161_21573__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21161_21573__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21161_21573__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21161_21573__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21578)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21576),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21577),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21575__$1)].join(''));


var G__21579 = cljs.core.next(seq__21148_21566__$1);
var G__21580 = null;
var G__21581 = (0);
var G__21582 = (0);
seq__21148_21550 = G__21579;
chunk__21149_21551 = G__21580;
count__21150_21552 = G__21581;
i__21151_21553 = G__21582;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21132_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21132_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21163 = node_uri;
G__21163.setQuery(null);

G__21163.setPath(new$);

return G__21163;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21164){
var map__21165 = p__21164;
var map__21165__$1 = cljs.core.__destructure_map(map__21165);
var msg = map__21165__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21165__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21165__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21166 = cljs.core.seq(updates);
var chunk__21168 = null;
var count__21169 = (0);
var i__21170 = (0);
while(true){
if((i__21170 < count__21169)){
var path = chunk__21168.cljs$core$IIndexed$_nth$arity$2(null,i__21170);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21346_21587 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21350_21588 = null;
var count__21351_21589 = (0);
var i__21352_21590 = (0);
while(true){
if((i__21352_21590 < count__21351_21589)){
var node_21591 = chunk__21350_21588.cljs$core$IIndexed$_nth$arity$2(null,i__21352_21590);
if(cljs.core.not(node_21591.shadow$old)){
var path_match_21592 = shadow.cljs.devtools.client.browser.match_paths(node_21591.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21592)){
var new_link_21593 = (function (){var G__21387 = node_21591.cloneNode(true);
G__21387.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21592),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21387;
})();
(node_21591.shadow$old = true);

(new_link_21593.onload = ((function (seq__21346_21587,chunk__21350_21588,count__21351_21589,i__21352_21590,seq__21166,chunk__21168,count__21169,i__21170,new_link_21593,path_match_21592,node_21591,path,map__21165,map__21165__$1,msg,updates,reload_info){
return (function (e){
var seq__21388_21594 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21390_21595 = null;
var count__21391_21596 = (0);
var i__21392_21597 = (0);
while(true){
if((i__21392_21597 < count__21391_21596)){
var map__21396_21598 = chunk__21390_21595.cljs$core$IIndexed$_nth$arity$2(null,i__21392_21597);
var map__21396_21599__$1 = cljs.core.__destructure_map(map__21396_21598);
var task_21600 = map__21396_21599__$1;
var fn_str_21601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21396_21599__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21396_21599__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21603 = goog.getObjectByName(fn_str_21601,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21602)].join(''));

(fn_obj_21603.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21603.cljs$core$IFn$_invoke$arity$2(path,new_link_21593) : fn_obj_21603.call(null,path,new_link_21593));


var G__21604 = seq__21388_21594;
var G__21605 = chunk__21390_21595;
var G__21606 = count__21391_21596;
var G__21607 = (i__21392_21597 + (1));
seq__21388_21594 = G__21604;
chunk__21390_21595 = G__21605;
count__21391_21596 = G__21606;
i__21392_21597 = G__21607;
continue;
} else {
var temp__5823__auto___21608 = cljs.core.seq(seq__21388_21594);
if(temp__5823__auto___21608){
var seq__21388_21609__$1 = temp__5823__auto___21608;
if(cljs.core.chunked_seq_QMARK_(seq__21388_21609__$1)){
var c__5548__auto___21610 = cljs.core.chunk_first(seq__21388_21609__$1);
var G__21611 = cljs.core.chunk_rest(seq__21388_21609__$1);
var G__21612 = c__5548__auto___21610;
var G__21613 = cljs.core.count(c__5548__auto___21610);
var G__21614 = (0);
seq__21388_21594 = G__21611;
chunk__21390_21595 = G__21612;
count__21391_21596 = G__21613;
i__21392_21597 = G__21614;
continue;
} else {
var map__21397_21615 = cljs.core.first(seq__21388_21609__$1);
var map__21397_21616__$1 = cljs.core.__destructure_map(map__21397_21615);
var task_21617 = map__21397_21616__$1;
var fn_str_21618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21397_21616__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21397_21616__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21620 = goog.getObjectByName(fn_str_21618,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21619)].join(''));

(fn_obj_21620.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21620.cljs$core$IFn$_invoke$arity$2(path,new_link_21593) : fn_obj_21620.call(null,path,new_link_21593));


var G__21621 = cljs.core.next(seq__21388_21609__$1);
var G__21622 = null;
var G__21623 = (0);
var G__21624 = (0);
seq__21388_21594 = G__21621;
chunk__21390_21595 = G__21622;
count__21391_21596 = G__21623;
i__21392_21597 = G__21624;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21591);
});})(seq__21346_21587,chunk__21350_21588,count__21351_21589,i__21352_21590,seq__21166,chunk__21168,count__21169,i__21170,new_link_21593,path_match_21592,node_21591,path,map__21165,map__21165__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21592], 0));

goog.dom.insertSiblingAfter(new_link_21593,node_21591);


var G__21625 = seq__21346_21587;
var G__21626 = chunk__21350_21588;
var G__21627 = count__21351_21589;
var G__21628 = (i__21352_21590 + (1));
seq__21346_21587 = G__21625;
chunk__21350_21588 = G__21626;
count__21351_21589 = G__21627;
i__21352_21590 = G__21628;
continue;
} else {
var G__21629 = seq__21346_21587;
var G__21630 = chunk__21350_21588;
var G__21631 = count__21351_21589;
var G__21632 = (i__21352_21590 + (1));
seq__21346_21587 = G__21629;
chunk__21350_21588 = G__21630;
count__21351_21589 = G__21631;
i__21352_21590 = G__21632;
continue;
}
} else {
var G__21633 = seq__21346_21587;
var G__21634 = chunk__21350_21588;
var G__21635 = count__21351_21589;
var G__21636 = (i__21352_21590 + (1));
seq__21346_21587 = G__21633;
chunk__21350_21588 = G__21634;
count__21351_21589 = G__21635;
i__21352_21590 = G__21636;
continue;
}
} else {
var temp__5823__auto___21637 = cljs.core.seq(seq__21346_21587);
if(temp__5823__auto___21637){
var seq__21346_21638__$1 = temp__5823__auto___21637;
if(cljs.core.chunked_seq_QMARK_(seq__21346_21638__$1)){
var c__5548__auto___21639 = cljs.core.chunk_first(seq__21346_21638__$1);
var G__21641 = cljs.core.chunk_rest(seq__21346_21638__$1);
var G__21642 = c__5548__auto___21639;
var G__21643 = cljs.core.count(c__5548__auto___21639);
var G__21644 = (0);
seq__21346_21587 = G__21641;
chunk__21350_21588 = G__21642;
count__21351_21589 = G__21643;
i__21352_21590 = G__21644;
continue;
} else {
var node_21645 = cljs.core.first(seq__21346_21638__$1);
if(cljs.core.not(node_21645.shadow$old)){
var path_match_21646 = shadow.cljs.devtools.client.browser.match_paths(node_21645.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21646)){
var new_link_21647 = (function (){var G__21398 = node_21645.cloneNode(true);
G__21398.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21646),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21398;
})();
(node_21645.shadow$old = true);

(new_link_21647.onload = ((function (seq__21346_21587,chunk__21350_21588,count__21351_21589,i__21352_21590,seq__21166,chunk__21168,count__21169,i__21170,new_link_21647,path_match_21646,node_21645,seq__21346_21638__$1,temp__5823__auto___21637,path,map__21165,map__21165__$1,msg,updates,reload_info){
return (function (e){
var seq__21402_21648 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21404_21649 = null;
var count__21405_21650 = (0);
var i__21406_21651 = (0);
while(true){
if((i__21406_21651 < count__21405_21650)){
var map__21412_21652 = chunk__21404_21649.cljs$core$IIndexed$_nth$arity$2(null,i__21406_21651);
var map__21412_21653__$1 = cljs.core.__destructure_map(map__21412_21652);
var task_21654 = map__21412_21653__$1;
var fn_str_21655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21412_21653__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21412_21653__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21657 = goog.getObjectByName(fn_str_21655,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21656)].join(''));

(fn_obj_21657.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21657.cljs$core$IFn$_invoke$arity$2(path,new_link_21647) : fn_obj_21657.call(null,path,new_link_21647));


var G__21658 = seq__21402_21648;
var G__21659 = chunk__21404_21649;
var G__21660 = count__21405_21650;
var G__21661 = (i__21406_21651 + (1));
seq__21402_21648 = G__21658;
chunk__21404_21649 = G__21659;
count__21405_21650 = G__21660;
i__21406_21651 = G__21661;
continue;
} else {
var temp__5823__auto___21662__$1 = cljs.core.seq(seq__21402_21648);
if(temp__5823__auto___21662__$1){
var seq__21402_21663__$1 = temp__5823__auto___21662__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21402_21663__$1)){
var c__5548__auto___21664 = cljs.core.chunk_first(seq__21402_21663__$1);
var G__21665 = cljs.core.chunk_rest(seq__21402_21663__$1);
var G__21666 = c__5548__auto___21664;
var G__21667 = cljs.core.count(c__5548__auto___21664);
var G__21668 = (0);
seq__21402_21648 = G__21665;
chunk__21404_21649 = G__21666;
count__21405_21650 = G__21667;
i__21406_21651 = G__21668;
continue;
} else {
var map__21415_21669 = cljs.core.first(seq__21402_21663__$1);
var map__21415_21670__$1 = cljs.core.__destructure_map(map__21415_21669);
var task_21671 = map__21415_21670__$1;
var fn_str_21672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415_21670__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21415_21670__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21674 = goog.getObjectByName(fn_str_21672,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21673)].join(''));

(fn_obj_21674.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21674.cljs$core$IFn$_invoke$arity$2(path,new_link_21647) : fn_obj_21674.call(null,path,new_link_21647));


var G__21675 = cljs.core.next(seq__21402_21663__$1);
var G__21676 = null;
var G__21677 = (0);
var G__21678 = (0);
seq__21402_21648 = G__21675;
chunk__21404_21649 = G__21676;
count__21405_21650 = G__21677;
i__21406_21651 = G__21678;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21645);
});})(seq__21346_21587,chunk__21350_21588,count__21351_21589,i__21352_21590,seq__21166,chunk__21168,count__21169,i__21170,new_link_21647,path_match_21646,node_21645,seq__21346_21638__$1,temp__5823__auto___21637,path,map__21165,map__21165__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21646], 0));

goog.dom.insertSiblingAfter(new_link_21647,node_21645);


var G__21679 = cljs.core.next(seq__21346_21638__$1);
var G__21680 = null;
var G__21681 = (0);
var G__21682 = (0);
seq__21346_21587 = G__21679;
chunk__21350_21588 = G__21680;
count__21351_21589 = G__21681;
i__21352_21590 = G__21682;
continue;
} else {
var G__21683 = cljs.core.next(seq__21346_21638__$1);
var G__21684 = null;
var G__21685 = (0);
var G__21686 = (0);
seq__21346_21587 = G__21683;
chunk__21350_21588 = G__21684;
count__21351_21589 = G__21685;
i__21352_21590 = G__21686;
continue;
}
} else {
var G__21688 = cljs.core.next(seq__21346_21638__$1);
var G__21689 = null;
var G__21690 = (0);
var G__21691 = (0);
seq__21346_21587 = G__21688;
chunk__21350_21588 = G__21689;
count__21351_21589 = G__21690;
i__21352_21590 = G__21691;
continue;
}
}
} else {
}
}
break;
}


var G__21692 = seq__21166;
var G__21693 = chunk__21168;
var G__21694 = count__21169;
var G__21695 = (i__21170 + (1));
seq__21166 = G__21692;
chunk__21168 = G__21693;
count__21169 = G__21694;
i__21170 = G__21695;
continue;
} else {
var G__21696 = seq__21166;
var G__21697 = chunk__21168;
var G__21698 = count__21169;
var G__21699 = (i__21170 + (1));
seq__21166 = G__21696;
chunk__21168 = G__21697;
count__21169 = G__21698;
i__21170 = G__21699;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21166);
if(temp__5823__auto__){
var seq__21166__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21166__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__21166__$1);
var G__21700 = cljs.core.chunk_rest(seq__21166__$1);
var G__21701 = c__5548__auto__;
var G__21702 = cljs.core.count(c__5548__auto__);
var G__21703 = (0);
seq__21166 = G__21700;
chunk__21168 = G__21701;
count__21169 = G__21702;
i__21170 = G__21703;
continue;
} else {
var path = cljs.core.first(seq__21166__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21416_21704 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21420_21705 = null;
var count__21421_21706 = (0);
var i__21422_21707 = (0);
while(true){
if((i__21422_21707 < count__21421_21706)){
var node_21708 = chunk__21420_21705.cljs$core$IIndexed$_nth$arity$2(null,i__21422_21707);
if(cljs.core.not(node_21708.shadow$old)){
var path_match_21711 = shadow.cljs.devtools.client.browser.match_paths(node_21708.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21711)){
var new_link_21712 = (function (){var G__21457 = node_21708.cloneNode(true);
G__21457.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21711),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21457;
})();
(node_21708.shadow$old = true);

(new_link_21712.onload = ((function (seq__21416_21704,chunk__21420_21705,count__21421_21706,i__21422_21707,seq__21166,chunk__21168,count__21169,i__21170,new_link_21712,path_match_21711,node_21708,path,seq__21166__$1,temp__5823__auto__,map__21165,map__21165__$1,msg,updates,reload_info){
return (function (e){
var seq__21458_21713 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21460_21714 = null;
var count__21461_21715 = (0);
var i__21462_21716 = (0);
while(true){
if((i__21462_21716 < count__21461_21715)){
var map__21466_21720 = chunk__21460_21714.cljs$core$IIndexed$_nth$arity$2(null,i__21462_21716);
var map__21466_21721__$1 = cljs.core.__destructure_map(map__21466_21720);
var task_21722 = map__21466_21721__$1;
var fn_str_21723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21466_21721__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21466_21721__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21725 = goog.getObjectByName(fn_str_21723,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21724)].join(''));

(fn_obj_21725.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21725.cljs$core$IFn$_invoke$arity$2(path,new_link_21712) : fn_obj_21725.call(null,path,new_link_21712));


var G__21726 = seq__21458_21713;
var G__21727 = chunk__21460_21714;
var G__21728 = count__21461_21715;
var G__21729 = (i__21462_21716 + (1));
seq__21458_21713 = G__21726;
chunk__21460_21714 = G__21727;
count__21461_21715 = G__21728;
i__21462_21716 = G__21729;
continue;
} else {
var temp__5823__auto___21730__$1 = cljs.core.seq(seq__21458_21713);
if(temp__5823__auto___21730__$1){
var seq__21458_21731__$1 = temp__5823__auto___21730__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21458_21731__$1)){
var c__5548__auto___21732 = cljs.core.chunk_first(seq__21458_21731__$1);
var G__21733 = cljs.core.chunk_rest(seq__21458_21731__$1);
var G__21734 = c__5548__auto___21732;
var G__21735 = cljs.core.count(c__5548__auto___21732);
var G__21736 = (0);
seq__21458_21713 = G__21733;
chunk__21460_21714 = G__21734;
count__21461_21715 = G__21735;
i__21462_21716 = G__21736;
continue;
} else {
var map__21467_21737 = cljs.core.first(seq__21458_21731__$1);
var map__21467_21738__$1 = cljs.core.__destructure_map(map__21467_21737);
var task_21739 = map__21467_21738__$1;
var fn_str_21740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467_21738__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21467_21738__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21742 = goog.getObjectByName(fn_str_21740,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21741)].join(''));

(fn_obj_21742.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21742.cljs$core$IFn$_invoke$arity$2(path,new_link_21712) : fn_obj_21742.call(null,path,new_link_21712));


var G__21743 = cljs.core.next(seq__21458_21731__$1);
var G__21744 = null;
var G__21745 = (0);
var G__21746 = (0);
seq__21458_21713 = G__21743;
chunk__21460_21714 = G__21744;
count__21461_21715 = G__21745;
i__21462_21716 = G__21746;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21708);
});})(seq__21416_21704,chunk__21420_21705,count__21421_21706,i__21422_21707,seq__21166,chunk__21168,count__21169,i__21170,new_link_21712,path_match_21711,node_21708,path,seq__21166__$1,temp__5823__auto__,map__21165,map__21165__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21711], 0));

goog.dom.insertSiblingAfter(new_link_21712,node_21708);


var G__21747 = seq__21416_21704;
var G__21748 = chunk__21420_21705;
var G__21749 = count__21421_21706;
var G__21750 = (i__21422_21707 + (1));
seq__21416_21704 = G__21747;
chunk__21420_21705 = G__21748;
count__21421_21706 = G__21749;
i__21422_21707 = G__21750;
continue;
} else {
var G__21751 = seq__21416_21704;
var G__21752 = chunk__21420_21705;
var G__21753 = count__21421_21706;
var G__21754 = (i__21422_21707 + (1));
seq__21416_21704 = G__21751;
chunk__21420_21705 = G__21752;
count__21421_21706 = G__21753;
i__21422_21707 = G__21754;
continue;
}
} else {
var G__21755 = seq__21416_21704;
var G__21756 = chunk__21420_21705;
var G__21757 = count__21421_21706;
var G__21758 = (i__21422_21707 + (1));
seq__21416_21704 = G__21755;
chunk__21420_21705 = G__21756;
count__21421_21706 = G__21757;
i__21422_21707 = G__21758;
continue;
}
} else {
var temp__5823__auto___21759__$1 = cljs.core.seq(seq__21416_21704);
if(temp__5823__auto___21759__$1){
var seq__21416_21760__$1 = temp__5823__auto___21759__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21416_21760__$1)){
var c__5548__auto___21761 = cljs.core.chunk_first(seq__21416_21760__$1);
var G__21762 = cljs.core.chunk_rest(seq__21416_21760__$1);
var G__21763 = c__5548__auto___21761;
var G__21764 = cljs.core.count(c__5548__auto___21761);
var G__21765 = (0);
seq__21416_21704 = G__21762;
chunk__21420_21705 = G__21763;
count__21421_21706 = G__21764;
i__21422_21707 = G__21765;
continue;
} else {
var node_21766 = cljs.core.first(seq__21416_21760__$1);
if(cljs.core.not(node_21766.shadow$old)){
var path_match_21767 = shadow.cljs.devtools.client.browser.match_paths(node_21766.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21767)){
var new_link_21768 = (function (){var G__21468 = node_21766.cloneNode(true);
G__21468.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21767),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21468;
})();
(node_21766.shadow$old = true);

(new_link_21768.onload = ((function (seq__21416_21704,chunk__21420_21705,count__21421_21706,i__21422_21707,seq__21166,chunk__21168,count__21169,i__21170,new_link_21768,path_match_21767,node_21766,seq__21416_21760__$1,temp__5823__auto___21759__$1,path,seq__21166__$1,temp__5823__auto__,map__21165,map__21165__$1,msg,updates,reload_info){
return (function (e){
var seq__21469_21769 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21471_21770 = null;
var count__21472_21771 = (0);
var i__21473_21772 = (0);
while(true){
if((i__21473_21772 < count__21472_21771)){
var map__21478_21773 = chunk__21471_21770.cljs$core$IIndexed$_nth$arity$2(null,i__21473_21772);
var map__21478_21774__$1 = cljs.core.__destructure_map(map__21478_21773);
var task_21775 = map__21478_21774__$1;
var fn_str_21776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21478_21774__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21478_21774__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21778 = goog.getObjectByName(fn_str_21776,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21777)].join(''));

(fn_obj_21778.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21778.cljs$core$IFn$_invoke$arity$2(path,new_link_21768) : fn_obj_21778.call(null,path,new_link_21768));


var G__21779 = seq__21469_21769;
var G__21780 = chunk__21471_21770;
var G__21781 = count__21472_21771;
var G__21782 = (i__21473_21772 + (1));
seq__21469_21769 = G__21779;
chunk__21471_21770 = G__21780;
count__21472_21771 = G__21781;
i__21473_21772 = G__21782;
continue;
} else {
var temp__5823__auto___21783__$2 = cljs.core.seq(seq__21469_21769);
if(temp__5823__auto___21783__$2){
var seq__21469_21784__$1 = temp__5823__auto___21783__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21469_21784__$1)){
var c__5548__auto___21785 = cljs.core.chunk_first(seq__21469_21784__$1);
var G__21786 = cljs.core.chunk_rest(seq__21469_21784__$1);
var G__21787 = c__5548__auto___21785;
var G__21788 = cljs.core.count(c__5548__auto___21785);
var G__21789 = (0);
seq__21469_21769 = G__21786;
chunk__21471_21770 = G__21787;
count__21472_21771 = G__21788;
i__21473_21772 = G__21789;
continue;
} else {
var map__21480_21790 = cljs.core.first(seq__21469_21784__$1);
var map__21480_21791__$1 = cljs.core.__destructure_map(map__21480_21790);
var task_21792 = map__21480_21791__$1;
var fn_str_21793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21480_21791__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21480_21791__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21795 = goog.getObjectByName(fn_str_21793,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21794)].join(''));

(fn_obj_21795.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21795.cljs$core$IFn$_invoke$arity$2(path,new_link_21768) : fn_obj_21795.call(null,path,new_link_21768));


var G__21796 = cljs.core.next(seq__21469_21784__$1);
var G__21797 = null;
var G__21798 = (0);
var G__21799 = (0);
seq__21469_21769 = G__21796;
chunk__21471_21770 = G__21797;
count__21472_21771 = G__21798;
i__21473_21772 = G__21799;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21766);
});})(seq__21416_21704,chunk__21420_21705,count__21421_21706,i__21422_21707,seq__21166,chunk__21168,count__21169,i__21170,new_link_21768,path_match_21767,node_21766,seq__21416_21760__$1,temp__5823__auto___21759__$1,path,seq__21166__$1,temp__5823__auto__,map__21165,map__21165__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21767], 0));

goog.dom.insertSiblingAfter(new_link_21768,node_21766);


var G__21800 = cljs.core.next(seq__21416_21760__$1);
var G__21801 = null;
var G__21802 = (0);
var G__21803 = (0);
seq__21416_21704 = G__21800;
chunk__21420_21705 = G__21801;
count__21421_21706 = G__21802;
i__21422_21707 = G__21803;
continue;
} else {
var G__21804 = cljs.core.next(seq__21416_21760__$1);
var G__21805 = null;
var G__21806 = (0);
var G__21807 = (0);
seq__21416_21704 = G__21804;
chunk__21420_21705 = G__21805;
count__21421_21706 = G__21806;
i__21422_21707 = G__21807;
continue;
}
} else {
var G__21808 = cljs.core.next(seq__21416_21760__$1);
var G__21809 = null;
var G__21810 = (0);
var G__21811 = (0);
seq__21416_21704 = G__21808;
chunk__21420_21705 = G__21809;
count__21421_21706 = G__21810;
i__21422_21707 = G__21811;
continue;
}
}
} else {
}
}
break;
}


var G__21812 = cljs.core.next(seq__21166__$1);
var G__21813 = null;
var G__21814 = (0);
var G__21815 = (0);
seq__21166 = G__21812;
chunk__21168 = G__21813;
count__21169 = G__21814;
i__21170 = G__21815;
continue;
} else {
var G__21816 = cljs.core.next(seq__21166__$1);
var G__21817 = null;
var G__21818 = (0);
var G__21819 = (0);
seq__21166 = G__21816;
chunk__21168 = G__21817;
count__21169 = G__21818;
i__21170 = G__21819;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21482 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21482) : success.call(null,G__21482));
}catch (e21481){var e = e21481;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21483,success,fail){
var map__21484 = p__21483;
var map__21484__$1 = cljs.core.__destructure_map(map__21484);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21484__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21486 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21486) : success.call(null,G__21486));
}catch (e21485){var e = e21485;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21487,done,error){
var map__21488 = p__21487;
var map__21488__$1 = cljs.core.__destructure_map(map__21488);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21488__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21489,done,error){
var map__21490 = p__21489;
var map__21490__$1 = cljs.core.__destructure_map(map__21490);
var msg = map__21490__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21490__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21490__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21490__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21491){
var map__21492 = p__21491;
var map__21492__$1 = cljs.core.__destructure_map(map__21492);
var src = map__21492__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21492__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21493 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21493) : done.call(null,G__21493));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21494){
var map__21495 = p__21494;
var map__21495__$1 = cljs.core.__destructure_map(map__21495);
var msg__$1 = map__21495__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21498){var ex = e21498;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21499){
var map__21500 = p__21499;
var map__21500__$1 = cljs.core.__destructure_map(map__21500);
var env = map__21500__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21500__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21501){
var map__21506 = p__21501;
var map__21506__$1 = cljs.core.__destructure_map(map__21506);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21506__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21506__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21507){
var map__21508 = p__21507;
var map__21508__$1 = cljs.core.__destructure_map(map__21508);
var svc = map__21508__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21508__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
