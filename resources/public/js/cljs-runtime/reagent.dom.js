goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__11973 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11974 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11974);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__11975 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11976 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11976);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11975);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11973);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__12003 = arguments.length;
switch (G__12003) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__12020 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12020,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12020,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__12049_12070 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__12050_12071 = null;
var count__12051_12072 = (0);
var i__12052_12073 = (0);
while(true){
if((i__12052_12073 < count__12051_12072)){
var vec__12063_12074 = chunk__12050_12071.cljs$core$IIndexed$_nth$arity$2(null,i__12052_12073);
var container_12075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12063_12074,(0),null);
var comp_12076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12063_12074,(1),null);
reagent.dom.re_render_component(comp_12076,container_12075);


var G__12077 = seq__12049_12070;
var G__12078 = chunk__12050_12071;
var G__12079 = count__12051_12072;
var G__12080 = (i__12052_12073 + (1));
seq__12049_12070 = G__12077;
chunk__12050_12071 = G__12078;
count__12051_12072 = G__12079;
i__12052_12073 = G__12080;
continue;
} else {
var temp__5823__auto___12081 = cljs.core.seq(seq__12049_12070);
if(temp__5823__auto___12081){
var seq__12049_12082__$1 = temp__5823__auto___12081;
if(cljs.core.chunked_seq_QMARK_(seq__12049_12082__$1)){
var c__5548__auto___12083 = cljs.core.chunk_first(seq__12049_12082__$1);
var G__12084 = cljs.core.chunk_rest(seq__12049_12082__$1);
var G__12085 = c__5548__auto___12083;
var G__12086 = cljs.core.count(c__5548__auto___12083);
var G__12087 = (0);
seq__12049_12070 = G__12084;
chunk__12050_12071 = G__12085;
count__12051_12072 = G__12086;
i__12052_12073 = G__12087;
continue;
} else {
var vec__12066_12088 = cljs.core.first(seq__12049_12082__$1);
var container_12089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12066_12088,(0),null);
var comp_12090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12066_12088,(1),null);
reagent.dom.re_render_component(comp_12090,container_12089);


var G__12092 = cljs.core.next(seq__12049_12082__$1);
var G__12093 = null;
var G__12094 = (0);
var G__12095 = (0);
seq__12049_12070 = G__12092;
chunk__12050_12071 = G__12093;
count__12051_12072 = G__12094;
i__12052_12073 = G__12095;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
