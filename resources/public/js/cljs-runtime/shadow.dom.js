goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12462 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12462(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12467 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12467(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11769 = coll;
var G__11770 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11769,G__11770) : shadow.dom.lazy_native_coll_seq.call(null,G__11769,G__11770));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11784 = arguments.length;
switch (G__11784) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11787 = arguments.length;
switch (G__11787) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11806 = arguments.length;
switch (G__11806) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11836 = arguments.length;
switch (G__11836) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11843 = arguments.length;
switch (G__11843) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11852 = arguments.length;
switch (G__11852) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11867){if((e11867 instanceof Object)){
var e = e11867;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11867;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11876 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11877 = null;
var count__11878 = (0);
var i__11879 = (0);
while(true){
if((i__11879 < count__11878)){
var el = chunk__11877.cljs$core$IIndexed$_nth$arity$2(null,i__11879);
var handler_12669__$1 = ((function (seq__11876,chunk__11877,count__11878,i__11879,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11876,chunk__11877,count__11878,i__11879,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12669__$1);


var G__12671 = seq__11876;
var G__12672 = chunk__11877;
var G__12673 = count__11878;
var G__12674 = (i__11879 + (1));
seq__11876 = G__12671;
chunk__11877 = G__12672;
count__11878 = G__12673;
i__11879 = G__12674;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11876);
if(temp__5823__auto__){
var seq__11876__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11876__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11876__$1);
var G__12675 = cljs.core.chunk_rest(seq__11876__$1);
var G__12676 = c__5548__auto__;
var G__12677 = cljs.core.count(c__5548__auto__);
var G__12678 = (0);
seq__11876 = G__12675;
chunk__11877 = G__12676;
count__11878 = G__12677;
i__11879 = G__12678;
continue;
} else {
var el = cljs.core.first(seq__11876__$1);
var handler_12679__$1 = ((function (seq__11876,chunk__11877,count__11878,i__11879,el,seq__11876__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11876,chunk__11877,count__11878,i__11879,el,seq__11876__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12679__$1);


var G__12680 = cljs.core.next(seq__11876__$1);
var G__12681 = null;
var G__12682 = (0);
var G__12683 = (0);
seq__11876 = G__12680;
chunk__11877 = G__12681;
count__11878 = G__12682;
i__11879 = G__12683;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11901 = arguments.length;
switch (G__11901) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11922 = cljs.core.seq(events);
var chunk__11923 = null;
var count__11924 = (0);
var i__11925 = (0);
while(true){
if((i__11925 < count__11924)){
var vec__11934 = chunk__11923.cljs$core$IIndexed$_nth$arity$2(null,i__11925);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12690 = seq__11922;
var G__12691 = chunk__11923;
var G__12692 = count__11924;
var G__12693 = (i__11925 + (1));
seq__11922 = G__12690;
chunk__11923 = G__12691;
count__11924 = G__12692;
i__11925 = G__12693;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11922);
if(temp__5823__auto__){
var seq__11922__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11922__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11922__$1);
var G__12694 = cljs.core.chunk_rest(seq__11922__$1);
var G__12695 = c__5548__auto__;
var G__12696 = cljs.core.count(c__5548__auto__);
var G__12697 = (0);
seq__11922 = G__12694;
chunk__11923 = G__12695;
count__11924 = G__12696;
i__11925 = G__12697;
continue;
} else {
var vec__11938 = cljs.core.first(seq__11922__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11938,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12698 = cljs.core.next(seq__11922__$1);
var G__12699 = null;
var G__12700 = (0);
var G__12701 = (0);
seq__11922 = G__12698;
chunk__11923 = G__12699;
count__11924 = G__12700;
i__11925 = G__12701;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11941 = cljs.core.seq(styles);
var chunk__11942 = null;
var count__11943 = (0);
var i__11944 = (0);
while(true){
if((i__11944 < count__11943)){
var vec__11954 = chunk__11942.cljs$core$IIndexed$_nth$arity$2(null,i__11944);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11954,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11954,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12702 = seq__11941;
var G__12703 = chunk__11942;
var G__12704 = count__11943;
var G__12705 = (i__11944 + (1));
seq__11941 = G__12702;
chunk__11942 = G__12703;
count__11943 = G__12704;
i__11944 = G__12705;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11941);
if(temp__5823__auto__){
var seq__11941__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11941__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11941__$1);
var G__12706 = cljs.core.chunk_rest(seq__11941__$1);
var G__12707 = c__5548__auto__;
var G__12708 = cljs.core.count(c__5548__auto__);
var G__12709 = (0);
seq__11941 = G__12706;
chunk__11942 = G__12707;
count__11943 = G__12708;
i__11944 = G__12709;
continue;
} else {
var vec__11958 = cljs.core.first(seq__11941__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11958,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12710 = cljs.core.next(seq__11941__$1);
var G__12711 = null;
var G__12712 = (0);
var G__12713 = (0);
seq__11941 = G__12710;
chunk__11942 = G__12711;
count__11943 = G__12712;
i__11944 = G__12713;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11962_12720 = key;
var G__11962_12721__$1 = (((G__11962_12720 instanceof cljs.core.Keyword))?G__11962_12720.fqn:null);
switch (G__11962_12721__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12724 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_12724,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_12724,"aria-");
}
})())){
el.setAttribute(ks_12724,value);
} else {
(el[ks_12724] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11989){
var map__11990 = p__11989;
var map__11990__$1 = cljs.core.__destructure_map(map__11990);
var props = map__11990__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11990__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11991 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11991,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11991,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11991,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11995 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11995,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11995;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11999 = arguments.length;
switch (G__11999) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12023){
var vec__12024 = p__12023;
var seq__12025 = cljs.core.seq(vec__12024);
var first__12026 = cljs.core.first(seq__12025);
var seq__12025__$1 = cljs.core.next(seq__12025);
var nn = first__12026;
var first__12026__$1 = cljs.core.first(seq__12025__$1);
var seq__12025__$2 = cljs.core.next(seq__12025__$1);
var np = first__12026__$1;
var nc = seq__12025__$2;
var node = vec__12024;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12031 = nn;
var G__12032 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12031,G__12032) : create_fn.call(null,G__12031,G__12032));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12033 = nn;
var G__12034 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12033,G__12034) : create_fn.call(null,G__12033,G__12034));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12037 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12037,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12037,(1),null);
var seq__12041_12734 = cljs.core.seq(node_children);
var chunk__12042_12735 = null;
var count__12043_12736 = (0);
var i__12044_12737 = (0);
while(true){
if((i__12044_12737 < count__12043_12736)){
var child_struct_12738 = chunk__12042_12735.cljs$core$IIndexed$_nth$arity$2(null,i__12044_12737);
var children_12739 = shadow.dom.dom_node(child_struct_12738);
if(cljs.core.seq_QMARK_(children_12739)){
var seq__12067_12740 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12739));
var chunk__12069_12741 = null;
var count__12070_12742 = (0);
var i__12071_12743 = (0);
while(true){
if((i__12071_12743 < count__12070_12742)){
var child_12744 = chunk__12069_12741.cljs$core$IIndexed$_nth$arity$2(null,i__12071_12743);
if(cljs.core.truth_(child_12744)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12744);


var G__12745 = seq__12067_12740;
var G__12746 = chunk__12069_12741;
var G__12747 = count__12070_12742;
var G__12748 = (i__12071_12743 + (1));
seq__12067_12740 = G__12745;
chunk__12069_12741 = G__12746;
count__12070_12742 = G__12747;
i__12071_12743 = G__12748;
continue;
} else {
var G__12749 = seq__12067_12740;
var G__12750 = chunk__12069_12741;
var G__12751 = count__12070_12742;
var G__12752 = (i__12071_12743 + (1));
seq__12067_12740 = G__12749;
chunk__12069_12741 = G__12750;
count__12070_12742 = G__12751;
i__12071_12743 = G__12752;
continue;
}
} else {
var temp__5823__auto___12753 = cljs.core.seq(seq__12067_12740);
if(temp__5823__auto___12753){
var seq__12067_12754__$1 = temp__5823__auto___12753;
if(cljs.core.chunked_seq_QMARK_(seq__12067_12754__$1)){
var c__5548__auto___12755 = cljs.core.chunk_first(seq__12067_12754__$1);
var G__12757 = cljs.core.chunk_rest(seq__12067_12754__$1);
var G__12758 = c__5548__auto___12755;
var G__12759 = cljs.core.count(c__5548__auto___12755);
var G__12760 = (0);
seq__12067_12740 = G__12757;
chunk__12069_12741 = G__12758;
count__12070_12742 = G__12759;
i__12071_12743 = G__12760;
continue;
} else {
var child_12761 = cljs.core.first(seq__12067_12754__$1);
if(cljs.core.truth_(child_12761)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12761);


var G__12763 = cljs.core.next(seq__12067_12754__$1);
var G__12764 = null;
var G__12765 = (0);
var G__12766 = (0);
seq__12067_12740 = G__12763;
chunk__12069_12741 = G__12764;
count__12070_12742 = G__12765;
i__12071_12743 = G__12766;
continue;
} else {
var G__12767 = cljs.core.next(seq__12067_12754__$1);
var G__12768 = null;
var G__12769 = (0);
var G__12770 = (0);
seq__12067_12740 = G__12767;
chunk__12069_12741 = G__12768;
count__12070_12742 = G__12769;
i__12071_12743 = G__12770;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12739);
}


var G__12771 = seq__12041_12734;
var G__12772 = chunk__12042_12735;
var G__12773 = count__12043_12736;
var G__12774 = (i__12044_12737 + (1));
seq__12041_12734 = G__12771;
chunk__12042_12735 = G__12772;
count__12043_12736 = G__12773;
i__12044_12737 = G__12774;
continue;
} else {
var temp__5823__auto___12775 = cljs.core.seq(seq__12041_12734);
if(temp__5823__auto___12775){
var seq__12041_12776__$1 = temp__5823__auto___12775;
if(cljs.core.chunked_seq_QMARK_(seq__12041_12776__$1)){
var c__5548__auto___12777 = cljs.core.chunk_first(seq__12041_12776__$1);
var G__12778 = cljs.core.chunk_rest(seq__12041_12776__$1);
var G__12779 = c__5548__auto___12777;
var G__12780 = cljs.core.count(c__5548__auto___12777);
var G__12781 = (0);
seq__12041_12734 = G__12778;
chunk__12042_12735 = G__12779;
count__12043_12736 = G__12780;
i__12044_12737 = G__12781;
continue;
} else {
var child_struct_12782 = cljs.core.first(seq__12041_12776__$1);
var children_12783 = shadow.dom.dom_node(child_struct_12782);
if(cljs.core.seq_QMARK_(children_12783)){
var seq__12076_12784 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12783));
var chunk__12078_12785 = null;
var count__12079_12786 = (0);
var i__12080_12787 = (0);
while(true){
if((i__12080_12787 < count__12079_12786)){
var child_12788 = chunk__12078_12785.cljs$core$IIndexed$_nth$arity$2(null,i__12080_12787);
if(cljs.core.truth_(child_12788)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12788);


var G__12789 = seq__12076_12784;
var G__12790 = chunk__12078_12785;
var G__12791 = count__12079_12786;
var G__12792 = (i__12080_12787 + (1));
seq__12076_12784 = G__12789;
chunk__12078_12785 = G__12790;
count__12079_12786 = G__12791;
i__12080_12787 = G__12792;
continue;
} else {
var G__12793 = seq__12076_12784;
var G__12794 = chunk__12078_12785;
var G__12795 = count__12079_12786;
var G__12796 = (i__12080_12787 + (1));
seq__12076_12784 = G__12793;
chunk__12078_12785 = G__12794;
count__12079_12786 = G__12795;
i__12080_12787 = G__12796;
continue;
}
} else {
var temp__5823__auto___12797__$1 = cljs.core.seq(seq__12076_12784);
if(temp__5823__auto___12797__$1){
var seq__12076_12798__$1 = temp__5823__auto___12797__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12076_12798__$1)){
var c__5548__auto___12799 = cljs.core.chunk_first(seq__12076_12798__$1);
var G__12800 = cljs.core.chunk_rest(seq__12076_12798__$1);
var G__12801 = c__5548__auto___12799;
var G__12802 = cljs.core.count(c__5548__auto___12799);
var G__12803 = (0);
seq__12076_12784 = G__12800;
chunk__12078_12785 = G__12801;
count__12079_12786 = G__12802;
i__12080_12787 = G__12803;
continue;
} else {
var child_12804 = cljs.core.first(seq__12076_12798__$1);
if(cljs.core.truth_(child_12804)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12804);


var G__12805 = cljs.core.next(seq__12076_12798__$1);
var G__12806 = null;
var G__12807 = (0);
var G__12808 = (0);
seq__12076_12784 = G__12805;
chunk__12078_12785 = G__12806;
count__12079_12786 = G__12807;
i__12080_12787 = G__12808;
continue;
} else {
var G__12810 = cljs.core.next(seq__12076_12798__$1);
var G__12811 = null;
var G__12812 = (0);
var G__12813 = (0);
seq__12076_12784 = G__12810;
chunk__12078_12785 = G__12811;
count__12079_12786 = G__12812;
i__12080_12787 = G__12813;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12783);
}


var G__12815 = cljs.core.next(seq__12041_12776__$1);
var G__12817 = null;
var G__12818 = (0);
var G__12819 = (0);
seq__12041_12734 = G__12815;
chunk__12042_12735 = G__12817;
count__12043_12736 = G__12818;
i__12044_12737 = G__12819;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12083 = cljs.core.seq(node);
var chunk__12084 = null;
var count__12085 = (0);
var i__12086 = (0);
while(true){
if((i__12086 < count__12085)){
var n = chunk__12084.cljs$core$IIndexed$_nth$arity$2(null,i__12086);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12824 = seq__12083;
var G__12825 = chunk__12084;
var G__12826 = count__12085;
var G__12827 = (i__12086 + (1));
seq__12083 = G__12824;
chunk__12084 = G__12825;
count__12085 = G__12826;
i__12086 = G__12827;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12083);
if(temp__5823__auto__){
var seq__12083__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12083__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__12083__$1);
var G__12828 = cljs.core.chunk_rest(seq__12083__$1);
var G__12829 = c__5548__auto__;
var G__12830 = cljs.core.count(c__5548__auto__);
var G__12831 = (0);
seq__12083 = G__12828;
chunk__12084 = G__12829;
count__12085 = G__12830;
i__12086 = G__12831;
continue;
} else {
var n = cljs.core.first(seq__12083__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12832 = cljs.core.next(seq__12083__$1);
var G__12833 = null;
var G__12834 = (0);
var G__12835 = (0);
seq__12083 = G__12832;
chunk__12084 = G__12833;
count__12085 = G__12834;
i__12086 = G__12835;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12088 = arguments.length;
switch (G__12088) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12091 = arguments.length;
switch (G__12091) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12102 = arguments.length;
switch (G__12102) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___12843 = arguments.length;
var i__5750__auto___12844 = (0);
while(true){
if((i__5750__auto___12844 < len__5749__auto___12843)){
args__5755__auto__.push((arguments[i__5750__auto___12844]));

var G__12845 = (i__5750__auto___12844 + (1));
i__5750__auto___12844 = G__12845;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12120_12846 = cljs.core.seq(nodes);
var chunk__12121_12847 = null;
var count__12122_12848 = (0);
var i__12123_12849 = (0);
while(true){
if((i__12123_12849 < count__12122_12848)){
var node_12852 = chunk__12121_12847.cljs$core$IIndexed$_nth$arity$2(null,i__12123_12849);
fragment.appendChild(shadow.dom._to_dom(node_12852));


var G__12853 = seq__12120_12846;
var G__12854 = chunk__12121_12847;
var G__12855 = count__12122_12848;
var G__12856 = (i__12123_12849 + (1));
seq__12120_12846 = G__12853;
chunk__12121_12847 = G__12854;
count__12122_12848 = G__12855;
i__12123_12849 = G__12856;
continue;
} else {
var temp__5823__auto___12857 = cljs.core.seq(seq__12120_12846);
if(temp__5823__auto___12857){
var seq__12120_12858__$1 = temp__5823__auto___12857;
if(cljs.core.chunked_seq_QMARK_(seq__12120_12858__$1)){
var c__5548__auto___12859 = cljs.core.chunk_first(seq__12120_12858__$1);
var G__12861 = cljs.core.chunk_rest(seq__12120_12858__$1);
var G__12862 = c__5548__auto___12859;
var G__12863 = cljs.core.count(c__5548__auto___12859);
var G__12864 = (0);
seq__12120_12846 = G__12861;
chunk__12121_12847 = G__12862;
count__12122_12848 = G__12863;
i__12123_12849 = G__12864;
continue;
} else {
var node_12865 = cljs.core.first(seq__12120_12858__$1);
fragment.appendChild(shadow.dom._to_dom(node_12865));


var G__12866 = cljs.core.next(seq__12120_12858__$1);
var G__12867 = null;
var G__12868 = (0);
var G__12869 = (0);
seq__12120_12846 = G__12866;
chunk__12121_12847 = G__12867;
count__12122_12848 = G__12868;
i__12123_12849 = G__12869;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12110){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12110));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12136_12870 = cljs.core.seq(scripts);
var chunk__12137_12871 = null;
var count__12138_12872 = (0);
var i__12139_12873 = (0);
while(true){
if((i__12139_12873 < count__12138_12872)){
var vec__12146_12874 = chunk__12137_12871.cljs$core$IIndexed$_nth$arity$2(null,i__12139_12873);
var script_tag_12875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146_12874,(0),null);
var script_body_12876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146_12874,(1),null);
eval(script_body_12876);


var G__12877 = seq__12136_12870;
var G__12878 = chunk__12137_12871;
var G__12879 = count__12138_12872;
var G__12880 = (i__12139_12873 + (1));
seq__12136_12870 = G__12877;
chunk__12137_12871 = G__12878;
count__12138_12872 = G__12879;
i__12139_12873 = G__12880;
continue;
} else {
var temp__5823__auto___12881 = cljs.core.seq(seq__12136_12870);
if(temp__5823__auto___12881){
var seq__12136_12882__$1 = temp__5823__auto___12881;
if(cljs.core.chunked_seq_QMARK_(seq__12136_12882__$1)){
var c__5548__auto___12884 = cljs.core.chunk_first(seq__12136_12882__$1);
var G__12885 = cljs.core.chunk_rest(seq__12136_12882__$1);
var G__12886 = c__5548__auto___12884;
var G__12887 = cljs.core.count(c__5548__auto___12884);
var G__12888 = (0);
seq__12136_12870 = G__12885;
chunk__12137_12871 = G__12886;
count__12138_12872 = G__12887;
i__12139_12873 = G__12888;
continue;
} else {
var vec__12149_12889 = cljs.core.first(seq__12136_12882__$1);
var script_tag_12890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12149_12889,(0),null);
var script_body_12891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12149_12889,(1),null);
eval(script_body_12891);


var G__12893 = cljs.core.next(seq__12136_12882__$1);
var G__12894 = null;
var G__12895 = (0);
var G__12896 = (0);
seq__12136_12870 = G__12893;
chunk__12137_12871 = G__12894;
count__12138_12872 = G__12895;
i__12139_12873 = G__12896;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12152){
var vec__12155 = p__12152;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12155,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12155,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12164 = arguments.length;
switch (G__12164) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12165 = cljs.core.seq(style_keys);
var chunk__12166 = null;
var count__12167 = (0);
var i__12168 = (0);
while(true){
if((i__12168 < count__12167)){
var it = chunk__12166.cljs$core$IIndexed$_nth$arity$2(null,i__12168);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12905 = seq__12165;
var G__12906 = chunk__12166;
var G__12907 = count__12167;
var G__12908 = (i__12168 + (1));
seq__12165 = G__12905;
chunk__12166 = G__12906;
count__12167 = G__12907;
i__12168 = G__12908;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12165);
if(temp__5823__auto__){
var seq__12165__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12165__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__12165__$1);
var G__12910 = cljs.core.chunk_rest(seq__12165__$1);
var G__12911 = c__5548__auto__;
var G__12912 = cljs.core.count(c__5548__auto__);
var G__12913 = (0);
seq__12165 = G__12910;
chunk__12166 = G__12911;
count__12167 = G__12912;
i__12168 = G__12913;
continue;
} else {
var it = cljs.core.first(seq__12165__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12914 = cljs.core.next(seq__12165__$1);
var G__12915 = null;
var G__12916 = (0);
var G__12917 = (0);
seq__12165 = G__12914;
chunk__12166 = G__12915;
count__12167 = G__12916;
i__12168 = G__12917;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k12174,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__12178 = k12174;
var G__12178__$1 = (((G__12178 instanceof cljs.core.Keyword))?G__12178.fqn:null);
switch (G__12178__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12174,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__12182){
var vec__12183 = p__12182;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12183,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12183,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12173){
var self__ = this;
var G__12173__$1 = this;
return (new cljs.core.RecordIter((0),G__12173__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12175,other12176){
var self__ = this;
var this12175__$1 = this;
return (((!((other12176 == null)))) && ((((this12175__$1.constructor === other12176.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12175__$1.x,other12176.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12175__$1.y,other12176.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12175__$1.__extmap,other12176.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k12174){
var self__ = this;
var this__5330__auto____$1 = this;
var G__12195 = k12174;
var G__12195__$1 = (((G__12195 instanceof cljs.core.Keyword))?G__12195.fqn:null);
switch (G__12195__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12174);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__12173){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__12196 = cljs.core.keyword_identical_QMARK_;
var expr__12197 = k__5332__auto__;
if(cljs.core.truth_((pred__12196.cljs$core$IFn$_invoke$arity$2 ? pred__12196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12197) : pred__12196.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12197)))){
return (new shadow.dom.Coordinate(G__12173,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12196.cljs$core$IFn$_invoke$arity$2 ? pred__12196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12197) : pred__12196.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12197)))){
return (new shadow.dom.Coordinate(self__.x,G__12173,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__12173),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__12173){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12173,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12177){
var extmap__5365__auto__ = (function (){var G__12203 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12177,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12177)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12203);
} else {
return G__12203;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12177),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12177),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k12209,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__12214 = k12209;
var G__12214__$1 = (((G__12214 instanceof cljs.core.Keyword))?G__12214.fqn:null);
switch (G__12214__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12209,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__12217){
var vec__12218 = p__12217;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12218,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12218,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12208){
var self__ = this;
var G__12208__$1 = this;
return (new cljs.core.RecordIter((0),G__12208__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12210,other12211){
var self__ = this;
var this12210__$1 = this;
return (((!((other12211 == null)))) && ((((this12210__$1.constructor === other12211.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12210__$1.w,other12211.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12210__$1.h,other12211.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12210__$1.__extmap,other12211.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k12209){
var self__ = this;
var this__5330__auto____$1 = this;
var G__12228 = k12209;
var G__12228__$1 = (((G__12228 instanceof cljs.core.Keyword))?G__12228.fqn:null);
switch (G__12228__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12209);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__12208){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__12233 = cljs.core.keyword_identical_QMARK_;
var expr__12234 = k__5332__auto__;
if(cljs.core.truth_((pred__12233.cljs$core$IFn$_invoke$arity$2 ? pred__12233.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12234) : pred__12233.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12234)))){
return (new shadow.dom.Size(G__12208,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12233.cljs$core$IFn$_invoke$arity$2 ? pred__12233.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12234) : pred__12233.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12234)))){
return (new shadow.dom.Size(self__.w,G__12208,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__12208),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__12208){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12208,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12213){
var extmap__5365__auto__ = (function (){var G__12238 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12213,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12213)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12238);
} else {
return G__12238;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12213),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12213),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__12963 = (i + (1));
var G__12964 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12963;
ret = G__12964;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12266){
var vec__12267 = p__12266;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12267,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12267,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12277 = arguments.length;
switch (G__12277) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12972 = ps;
var G__12973 = (i + (1));
el__$1 = G__12972;
i = G__12973;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12315 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12315,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12315,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12315,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12319_12982 = cljs.core.seq(props);
var chunk__12320_12983 = null;
var count__12321_12984 = (0);
var i__12322_12985 = (0);
while(true){
if((i__12322_12985 < count__12321_12984)){
var vec__12334_12986 = chunk__12320_12983.cljs$core$IIndexed$_nth$arity$2(null,i__12322_12985);
var k_12987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12334_12986,(0),null);
var v_12988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12334_12986,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_12987);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12987),v_12988);


var G__12992 = seq__12319_12982;
var G__12993 = chunk__12320_12983;
var G__12994 = count__12321_12984;
var G__12995 = (i__12322_12985 + (1));
seq__12319_12982 = G__12992;
chunk__12320_12983 = G__12993;
count__12321_12984 = G__12994;
i__12322_12985 = G__12995;
continue;
} else {
var temp__5823__auto___12996 = cljs.core.seq(seq__12319_12982);
if(temp__5823__auto___12996){
var seq__12319_12998__$1 = temp__5823__auto___12996;
if(cljs.core.chunked_seq_QMARK_(seq__12319_12998__$1)){
var c__5548__auto___13000 = cljs.core.chunk_first(seq__12319_12998__$1);
var G__13001 = cljs.core.chunk_rest(seq__12319_12998__$1);
var G__13002 = c__5548__auto___13000;
var G__13003 = cljs.core.count(c__5548__auto___13000);
var G__13004 = (0);
seq__12319_12982 = G__13001;
chunk__12320_12983 = G__13002;
count__12321_12984 = G__13003;
i__12322_12985 = G__13004;
continue;
} else {
var vec__12337_13007 = cljs.core.first(seq__12319_12998__$1);
var k_13008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12337_13007,(0),null);
var v_13009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12337_13007,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_13008);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13008),v_13009);


var G__13018 = cljs.core.next(seq__12319_12998__$1);
var G__13019 = null;
var G__13020 = (0);
var G__13021 = (0);
seq__12319_12982 = G__13018;
chunk__12320_12983 = G__13019;
count__12321_12984 = G__13020;
i__12322_12985 = G__13021;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12342 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12342,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12342,(1),null);
var seq__12345_13022 = cljs.core.seq(node_children);
var chunk__12347_13023 = null;
var count__12348_13024 = (0);
var i__12349_13025 = (0);
while(true){
if((i__12349_13025 < count__12348_13024)){
var child_struct_13026 = chunk__12347_13023.cljs$core$IIndexed$_nth$arity$2(null,i__12349_13025);
if((!((child_struct_13026 == null)))){
if(typeof child_struct_13026 === 'string'){
var text_13027 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13027),child_struct_13026].join(''));
} else {
var children_13028 = shadow.dom.svg_node(child_struct_13026);
if(cljs.core.seq_QMARK_(children_13028)){
var seq__12369_13029 = cljs.core.seq(children_13028);
var chunk__12371_13030 = null;
var count__12372_13031 = (0);
var i__12373_13032 = (0);
while(true){
if((i__12373_13032 < count__12372_13031)){
var child_13033 = chunk__12371_13030.cljs$core$IIndexed$_nth$arity$2(null,i__12373_13032);
if(cljs.core.truth_(child_13033)){
node.appendChild(child_13033);


var G__13034 = seq__12369_13029;
var G__13035 = chunk__12371_13030;
var G__13036 = count__12372_13031;
var G__13037 = (i__12373_13032 + (1));
seq__12369_13029 = G__13034;
chunk__12371_13030 = G__13035;
count__12372_13031 = G__13036;
i__12373_13032 = G__13037;
continue;
} else {
var G__13038 = seq__12369_13029;
var G__13039 = chunk__12371_13030;
var G__13040 = count__12372_13031;
var G__13041 = (i__12373_13032 + (1));
seq__12369_13029 = G__13038;
chunk__12371_13030 = G__13039;
count__12372_13031 = G__13040;
i__12373_13032 = G__13041;
continue;
}
} else {
var temp__5823__auto___13042 = cljs.core.seq(seq__12369_13029);
if(temp__5823__auto___13042){
var seq__12369_13043__$1 = temp__5823__auto___13042;
if(cljs.core.chunked_seq_QMARK_(seq__12369_13043__$1)){
var c__5548__auto___13044 = cljs.core.chunk_first(seq__12369_13043__$1);
var G__13045 = cljs.core.chunk_rest(seq__12369_13043__$1);
var G__13046 = c__5548__auto___13044;
var G__13047 = cljs.core.count(c__5548__auto___13044);
var G__13048 = (0);
seq__12369_13029 = G__13045;
chunk__12371_13030 = G__13046;
count__12372_13031 = G__13047;
i__12373_13032 = G__13048;
continue;
} else {
var child_13049 = cljs.core.first(seq__12369_13043__$1);
if(cljs.core.truth_(child_13049)){
node.appendChild(child_13049);


var G__13050 = cljs.core.next(seq__12369_13043__$1);
var G__13051 = null;
var G__13052 = (0);
var G__13053 = (0);
seq__12369_13029 = G__13050;
chunk__12371_13030 = G__13051;
count__12372_13031 = G__13052;
i__12373_13032 = G__13053;
continue;
} else {
var G__13054 = cljs.core.next(seq__12369_13043__$1);
var G__13055 = null;
var G__13056 = (0);
var G__13057 = (0);
seq__12369_13029 = G__13054;
chunk__12371_13030 = G__13055;
count__12372_13031 = G__13056;
i__12373_13032 = G__13057;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13028);
}
}


var G__13058 = seq__12345_13022;
var G__13059 = chunk__12347_13023;
var G__13060 = count__12348_13024;
var G__13061 = (i__12349_13025 + (1));
seq__12345_13022 = G__13058;
chunk__12347_13023 = G__13059;
count__12348_13024 = G__13060;
i__12349_13025 = G__13061;
continue;
} else {
var G__13062 = seq__12345_13022;
var G__13063 = chunk__12347_13023;
var G__13064 = count__12348_13024;
var G__13065 = (i__12349_13025 + (1));
seq__12345_13022 = G__13062;
chunk__12347_13023 = G__13063;
count__12348_13024 = G__13064;
i__12349_13025 = G__13065;
continue;
}
} else {
var temp__5823__auto___13067 = cljs.core.seq(seq__12345_13022);
if(temp__5823__auto___13067){
var seq__12345_13068__$1 = temp__5823__auto___13067;
if(cljs.core.chunked_seq_QMARK_(seq__12345_13068__$1)){
var c__5548__auto___13069 = cljs.core.chunk_first(seq__12345_13068__$1);
var G__13070 = cljs.core.chunk_rest(seq__12345_13068__$1);
var G__13071 = c__5548__auto___13069;
var G__13072 = cljs.core.count(c__5548__auto___13069);
var G__13073 = (0);
seq__12345_13022 = G__13070;
chunk__12347_13023 = G__13071;
count__12348_13024 = G__13072;
i__12349_13025 = G__13073;
continue;
} else {
var child_struct_13074 = cljs.core.first(seq__12345_13068__$1);
if((!((child_struct_13074 == null)))){
if(typeof child_struct_13074 === 'string'){
var text_13075 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13075),child_struct_13074].join(''));
} else {
var children_13076 = shadow.dom.svg_node(child_struct_13074);
if(cljs.core.seq_QMARK_(children_13076)){
var seq__12391_13077 = cljs.core.seq(children_13076);
var chunk__12393_13078 = null;
var count__12394_13079 = (0);
var i__12395_13080 = (0);
while(true){
if((i__12395_13080 < count__12394_13079)){
var child_13081 = chunk__12393_13078.cljs$core$IIndexed$_nth$arity$2(null,i__12395_13080);
if(cljs.core.truth_(child_13081)){
node.appendChild(child_13081);


var G__13082 = seq__12391_13077;
var G__13083 = chunk__12393_13078;
var G__13084 = count__12394_13079;
var G__13085 = (i__12395_13080 + (1));
seq__12391_13077 = G__13082;
chunk__12393_13078 = G__13083;
count__12394_13079 = G__13084;
i__12395_13080 = G__13085;
continue;
} else {
var G__13086 = seq__12391_13077;
var G__13087 = chunk__12393_13078;
var G__13088 = count__12394_13079;
var G__13089 = (i__12395_13080 + (1));
seq__12391_13077 = G__13086;
chunk__12393_13078 = G__13087;
count__12394_13079 = G__13088;
i__12395_13080 = G__13089;
continue;
}
} else {
var temp__5823__auto___13090__$1 = cljs.core.seq(seq__12391_13077);
if(temp__5823__auto___13090__$1){
var seq__12391_13091__$1 = temp__5823__auto___13090__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12391_13091__$1)){
var c__5548__auto___13092 = cljs.core.chunk_first(seq__12391_13091__$1);
var G__13094 = cljs.core.chunk_rest(seq__12391_13091__$1);
var G__13095 = c__5548__auto___13092;
var G__13096 = cljs.core.count(c__5548__auto___13092);
var G__13097 = (0);
seq__12391_13077 = G__13094;
chunk__12393_13078 = G__13095;
count__12394_13079 = G__13096;
i__12395_13080 = G__13097;
continue;
} else {
var child_13098 = cljs.core.first(seq__12391_13091__$1);
if(cljs.core.truth_(child_13098)){
node.appendChild(child_13098);


var G__13100 = cljs.core.next(seq__12391_13091__$1);
var G__13101 = null;
var G__13102 = (0);
var G__13103 = (0);
seq__12391_13077 = G__13100;
chunk__12393_13078 = G__13101;
count__12394_13079 = G__13102;
i__12395_13080 = G__13103;
continue;
} else {
var G__13104 = cljs.core.next(seq__12391_13091__$1);
var G__13105 = null;
var G__13106 = (0);
var G__13107 = (0);
seq__12391_13077 = G__13104;
chunk__12393_13078 = G__13105;
count__12394_13079 = G__13106;
i__12395_13080 = G__13107;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13076);
}
}


var G__13109 = cljs.core.next(seq__12345_13068__$1);
var G__13111 = null;
var G__13112 = (0);
var G__13113 = (0);
seq__12345_13022 = G__13109;
chunk__12347_13023 = G__13111;
count__12348_13024 = G__13112;
i__12349_13025 = G__13113;
continue;
} else {
var G__13114 = cljs.core.next(seq__12345_13068__$1);
var G__13115 = null;
var G__13116 = (0);
var G__13117 = (0);
seq__12345_13022 = G__13114;
chunk__12347_13023 = G__13115;
count__12348_13024 = G__13116;
i__12349_13025 = G__13117;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13121 = arguments.length;
var i__5750__auto___13123 = (0);
while(true){
if((i__5750__auto___13123 < len__5749__auto___13121)){
args__5755__auto__.push((arguments[i__5750__auto___13123]));

var G__13124 = (i__5750__auto___13123 + (1));
i__5750__auto___13123 = G__13124;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12420){
var G__12424 = cljs.core.first(seq12420);
var seq12420__$1 = cljs.core.next(seq12420);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12424,seq12420__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
