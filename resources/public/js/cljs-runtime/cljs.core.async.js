goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14835 = (function (f,blockable,meta14836){
this.f = f;
this.blockable = blockable;
this.meta14836 = meta14836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14837,meta14836__$1){
var self__ = this;
var _14837__$1 = this;
return (new cljs.core.async.t_cljs$core$async14835(self__.f,self__.blockable,meta14836__$1));
}));

(cljs.core.async.t_cljs$core$async14835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14837){
var self__ = this;
var _14837__$1 = this;
return self__.meta14836;
}));

(cljs.core.async.t_cljs$core$async14835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14836","meta14836",-1510372674,null)], null);
}));

(cljs.core.async.t_cljs$core$async14835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14835");

(cljs.core.async.t_cljs$core$async14835.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14835.
 */
cljs.core.async.__GT_t_cljs$core$async14835 = (function cljs$core$async$__GT_t_cljs$core$async14835(f,blockable,meta14836){
return (new cljs.core.async.t_cljs$core$async14835(f,blockable,meta14836));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14814 = arguments.length;
switch (G__14814) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14835(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14872 = arguments.length;
switch (G__14872) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14880 = arguments.length;
switch (G__14880) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14888 = arguments.length;
switch (G__14888) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16826 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16826) : fn1.call(null,val_16826));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16826) : fn1.call(null,val_16826));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14890 = arguments.length;
switch (G__14890) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___16832 = n;
var x_16833 = (0);
while(true){
if((x_16833 < n__5616__auto___16832)){
(a[x_16833] = x_16833);

var G__16835 = (x_16833 + (1));
x_16833 = G__16835;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14906 = (function (flag,meta14907){
this.flag = flag;
this.meta14907 = meta14907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14908,meta14907__$1){
var self__ = this;
var _14908__$1 = this;
return (new cljs.core.async.t_cljs$core$async14906(self__.flag,meta14907__$1));
}));

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14908){
var self__ = this;
var _14908__$1 = this;
return self__.meta14907;
}));

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14907","meta14907",-435648962,null)], null);
}));

(cljs.core.async.t_cljs$core$async14906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14906");

(cljs.core.async.t_cljs$core$async14906.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14906.
 */
cljs.core.async.__GT_t_cljs$core$async14906 = (function cljs$core$async$__GT_t_cljs$core$async14906(flag,meta14907){
return (new cljs.core.async.t_cljs$core$async14906(flag,meta14907));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14906(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14910 = (function (flag,cb,meta14911){
this.flag = flag;
this.cb = cb;
this.meta14911 = meta14911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14912,meta14911__$1){
var self__ = this;
var _14912__$1 = this;
return (new cljs.core.async.t_cljs$core$async14910(self__.flag,self__.cb,meta14911__$1));
}));

(cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14912){
var self__ = this;
var _14912__$1 = this;
return self__.meta14911;
}));

(cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14911","meta14911",1619611780,null)], null);
}));

(cljs.core.async.t_cljs$core$async14910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14910");

(cljs.core.async.t_cljs$core$async14910.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14910.
 */
cljs.core.async.__GT_t_cljs$core$async14910 = (function cljs$core$async$__GT_t_cljs$core$async14910(flag,cb,meta14911){
return (new cljs.core.async.t_cljs$core$async14910(flag,cb,meta14911));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14910(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_16839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_16839)){
if((!(((port_16839.cljs$core$IFn$_invoke$arity$1 ? port_16839.cljs$core$IFn$_invoke$arity$1((1)) : port_16839.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__16840 = (i + (1));
i = G__16840;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14913_SHARP_){
var G__14917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14913_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14917) : fret.call(null,G__14917));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14914_SHARP_){
var G__14918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14914_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14918) : fret.call(null,G__14918));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16844 = (i + (1));
i = G__16844;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___16850 = arguments.length;
var i__5750__auto___16851 = (0);
while(true){
if((i__5750__auto___16851 < len__5749__auto___16850)){
args__5755__auto__.push((arguments[i__5750__auto___16851]));

var G__16852 = (i__5750__auto___16851 + (1));
i__5750__auto___16851 = G__16852;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14925){
var map__14926 = p__14925;
var map__14926__$1 = cljs.core.__destructure_map(map__14926);
var opts = map__14926__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14923){
var G__14924 = cljs.core.first(seq14923);
var seq14923__$1 = cljs.core.next(seq14923);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14924,seq14923__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14930 = arguments.length;
switch (G__14930) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14708__auto___16856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_14955){
var state_val_14956 = (state_14955[(1)]);
if((state_val_14956 === (7))){
var inst_14951 = (state_14955[(2)]);
var state_14955__$1 = state_14955;
var statearr_14957_16857 = state_14955__$1;
(statearr_14957_16857[(2)] = inst_14951);

(statearr_14957_16857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (1))){
var state_14955__$1 = state_14955;
var statearr_14958_16858 = state_14955__$1;
(statearr_14958_16858[(2)] = null);

(statearr_14958_16858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (4))){
var inst_14934 = (state_14955[(7)]);
var inst_14934__$1 = (state_14955[(2)]);
var inst_14935 = (inst_14934__$1 == null);
var state_14955__$1 = (function (){var statearr_14960 = state_14955;
(statearr_14960[(7)] = inst_14934__$1);

return statearr_14960;
})();
if(cljs.core.truth_(inst_14935)){
var statearr_14962_16859 = state_14955__$1;
(statearr_14962_16859[(1)] = (5));

} else {
var statearr_14963_16860 = state_14955__$1;
(statearr_14963_16860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (13))){
var state_14955__$1 = state_14955;
var statearr_14964_16861 = state_14955__$1;
(statearr_14964_16861[(2)] = null);

(statearr_14964_16861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (6))){
var inst_14934 = (state_14955[(7)]);
var state_14955__$1 = state_14955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14955__$1,(11),to,inst_14934);
} else {
if((state_val_14956 === (3))){
var inst_14953 = (state_14955[(2)]);
var state_14955__$1 = state_14955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14955__$1,inst_14953);
} else {
if((state_val_14956 === (12))){
var state_14955__$1 = state_14955;
var statearr_14966_16862 = state_14955__$1;
(statearr_14966_16862[(2)] = null);

(statearr_14966_16862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (2))){
var state_14955__$1 = state_14955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14955__$1,(4),from);
} else {
if((state_val_14956 === (11))){
var inst_14944 = (state_14955[(2)]);
var state_14955__$1 = state_14955;
if(cljs.core.truth_(inst_14944)){
var statearr_14967_16864 = state_14955__$1;
(statearr_14967_16864[(1)] = (12));

} else {
var statearr_14968_16865 = state_14955__$1;
(statearr_14968_16865[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (9))){
var state_14955__$1 = state_14955;
var statearr_14969_16866 = state_14955__$1;
(statearr_14969_16866[(2)] = null);

(statearr_14969_16866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (5))){
var state_14955__$1 = state_14955;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14970_16867 = state_14955__$1;
(statearr_14970_16867[(1)] = (8));

} else {
var statearr_14971_16868 = state_14955__$1;
(statearr_14971_16868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (14))){
var inst_14949 = (state_14955[(2)]);
var state_14955__$1 = state_14955;
var statearr_14972_16869 = state_14955__$1;
(statearr_14972_16869[(2)] = inst_14949);

(statearr_14972_16869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (10))){
var inst_14941 = (state_14955[(2)]);
var state_14955__$1 = state_14955;
var statearr_14974_16870 = state_14955__$1;
(statearr_14974_16870[(2)] = inst_14941);

(statearr_14974_16870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14956 === (8))){
var inst_14938 = cljs.core.async.close_BANG_(to);
var state_14955__$1 = state_14955;
var statearr_14975_16871 = state_14955__$1;
(statearr_14975_16871[(2)] = inst_14938);

(statearr_14975_16871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14638__auto__ = null;
var cljs$core$async$state_machine__14638__auto____0 = (function (){
var statearr_14976 = [null,null,null,null,null,null,null,null];
(statearr_14976[(0)] = cljs$core$async$state_machine__14638__auto__);

(statearr_14976[(1)] = (1));

return statearr_14976;
});
var cljs$core$async$state_machine__14638__auto____1 = (function (state_14955){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_14955);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e14980){var ex__14641__auto__ = e14980;
var statearr_14981_16872 = state_14955;
(statearr_14981_16872[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_14955[(4)]))){
var statearr_14982_16873 = state_14955;
(statearr_14982_16873[(1)] = cljs.core.first((state_14955[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16874 = state_14955;
state_14955 = G__16874;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$state_machine__14638__auto__ = function(state_14955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14638__auto____1.call(this,state_14955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14638__auto____0;
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14638__auto____1;
return cljs$core$async$state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_14984 = f__14709__auto__();
(statearr_14984[(6)] = c__14708__auto___16856);

return statearr_14984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14986){
var vec__14987 = p__14986;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14987,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14987,(1),null);
var job = vec__14987;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14708__auto___16877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_14995){
var state_val_14996 = (state_14995[(1)]);
if((state_val_14996 === (1))){
var state_14995__$1 = state_14995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14995__$1,(2),res,v);
} else {
if((state_val_14996 === (2))){
var inst_14992 = (state_14995[(2)]);
var inst_14993 = cljs.core.async.close_BANG_(res);
var state_14995__$1 = (function (){var statearr_15002 = state_14995;
(statearr_15002[(7)] = inst_14992);

return statearr_15002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14995__$1,inst_14993);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0 = (function (){
var statearr_15003 = [null,null,null,null,null,null,null,null];
(statearr_15003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__);

(statearr_15003[(1)] = (1));

return statearr_15003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1 = (function (state_14995){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_14995);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15004){var ex__14641__auto__ = e15004;
var statearr_15005_16878 = state_14995;
(statearr_15005_16878[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_14995[(4)]))){
var statearr_15006_16879 = state_14995;
(statearr_15006_16879[(1)] = cljs.core.first((state_14995[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16880 = state_14995;
state_14995 = G__16880;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__ = function(state_14995){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1.call(this,state_14995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_15007 = f__14709__auto__();
(statearr_15007[(6)] = c__14708__auto___16877);

return statearr_15007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15008){
var vec__15009 = p__15008;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009,(1),null);
var job = vec__15009;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___16882 = n;
var __16883 = (0);
while(true){
if((__16883 < n__5616__auto___16882)){
var G__15012_16884 = type;
var G__15012_16885__$1 = (((G__15012_16884 instanceof cljs.core.Keyword))?G__15012_16884.fqn:null);
switch (G__15012_16885__$1) {
case "compute":
var c__14708__auto___16888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16883,c__14708__auto___16888,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async){
return (function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = ((function (__16883,c__14708__auto___16888,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async){
return (function (state_15025){
var state_val_15026 = (state_15025[(1)]);
if((state_val_15026 === (1))){
var state_15025__$1 = state_15025;
var statearr_15027_16889 = state_15025__$1;
(statearr_15027_16889[(2)] = null);

(statearr_15027_16889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (2))){
var state_15025__$1 = state_15025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15025__$1,(4),jobs);
} else {
if((state_val_15026 === (3))){
var inst_15023 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15025__$1,inst_15023);
} else {
if((state_val_15026 === (4))){
var inst_15015 = (state_15025[(2)]);
var inst_15016 = process__$1(inst_15015);
var state_15025__$1 = state_15025;
if(cljs.core.truth_(inst_15016)){
var statearr_15028_16891 = state_15025__$1;
(statearr_15028_16891[(1)] = (5));

} else {
var statearr_15029_16892 = state_15025__$1;
(statearr_15029_16892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (5))){
var state_15025__$1 = state_15025;
var statearr_15030_16893 = state_15025__$1;
(statearr_15030_16893[(2)] = null);

(statearr_15030_16893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (6))){
var state_15025__$1 = state_15025;
var statearr_15031_16894 = state_15025__$1;
(statearr_15031_16894[(2)] = null);

(statearr_15031_16894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (7))){
var inst_15021 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
var statearr_15032_16896 = state_15025__$1;
(statearr_15032_16896[(2)] = inst_15021);

(statearr_15032_16896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16883,c__14708__auto___16888,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async))
;
return ((function (__16883,switch__14637__auto__,c__14708__auto___16888,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0 = (function (){
var statearr_15033 = [null,null,null,null,null,null,null];
(statearr_15033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__);

(statearr_15033[(1)] = (1));

return statearr_15033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1 = (function (state_15025){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_15025);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15034){var ex__14641__auto__ = e15034;
var statearr_15035_16897 = state_15025;
(statearr_15035_16897[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_15025[(4)]))){
var statearr_15036_16898 = state_15025;
(statearr_15036_16898[(1)] = cljs.core.first((state_15025[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16900 = state_15025;
state_15025 = G__16900;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__ = function(state_15025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1.call(this,state_15025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__;
})()
;})(__16883,switch__14637__auto__,c__14708__auto___16888,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async))
})();
var state__14710__auto__ = (function (){var statearr_15039 = f__14709__auto__();
(statearr_15039[(6)] = c__14708__auto___16888);

return statearr_15039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
});})(__16883,c__14708__auto___16888,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async))
);


break;
case "async":
var c__14708__auto___16901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16883,c__14708__auto___16901,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async){
return (function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = ((function (__16883,c__14708__auto___16901,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async){
return (function (state_15052){
var state_val_15053 = (state_15052[(1)]);
if((state_val_15053 === (1))){
var state_15052__$1 = state_15052;
var statearr_15055_16902 = state_15052__$1;
(statearr_15055_16902[(2)] = null);

(statearr_15055_16902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15053 === (2))){
var state_15052__$1 = state_15052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15052__$1,(4),jobs);
} else {
if((state_val_15053 === (3))){
var inst_15050 = (state_15052[(2)]);
var state_15052__$1 = state_15052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15052__$1,inst_15050);
} else {
if((state_val_15053 === (4))){
var inst_15042 = (state_15052[(2)]);
var inst_15043 = async(inst_15042);
var state_15052__$1 = state_15052;
if(cljs.core.truth_(inst_15043)){
var statearr_15056_16904 = state_15052__$1;
(statearr_15056_16904[(1)] = (5));

} else {
var statearr_15057_16905 = state_15052__$1;
(statearr_15057_16905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15053 === (5))){
var state_15052__$1 = state_15052;
var statearr_15058_16906 = state_15052__$1;
(statearr_15058_16906[(2)] = null);

(statearr_15058_16906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15053 === (6))){
var state_15052__$1 = state_15052;
var statearr_15059_16908 = state_15052__$1;
(statearr_15059_16908[(2)] = null);

(statearr_15059_16908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15053 === (7))){
var inst_15048 = (state_15052[(2)]);
var state_15052__$1 = state_15052;
var statearr_15060_16909 = state_15052__$1;
(statearr_15060_16909[(2)] = inst_15048);

(statearr_15060_16909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16883,c__14708__auto___16901,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async))
;
return ((function (__16883,switch__14637__auto__,c__14708__auto___16901,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0 = (function (){
var statearr_15061 = [null,null,null,null,null,null,null];
(statearr_15061[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__);

(statearr_15061[(1)] = (1));

return statearr_15061;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1 = (function (state_15052){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_15052);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15062){var ex__14641__auto__ = e15062;
var statearr_15063_16911 = state_15052;
(statearr_15063_16911[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_15052[(4)]))){
var statearr_15064_16912 = state_15052;
(statearr_15064_16912[(1)] = cljs.core.first((state_15052[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16914 = state_15052;
state_15052 = G__16914;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__ = function(state_15052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1.call(this,state_15052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__;
})()
;})(__16883,switch__14637__auto__,c__14708__auto___16901,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async))
})();
var state__14710__auto__ = (function (){var statearr_15065 = f__14709__auto__();
(statearr_15065[(6)] = c__14708__auto___16901);

return statearr_15065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
});})(__16883,c__14708__auto___16901,G__15012_16884,G__15012_16885__$1,n__5616__auto___16882,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15012_16885__$1)].join('')));

}

var G__16915 = (__16883 + (1));
__16883 = G__16915;
continue;
} else {
}
break;
}

var c__14708__auto___16916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_15087){
var state_val_15088 = (state_15087[(1)]);
if((state_val_15088 === (7))){
var inst_15083 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
var statearr_15090_16917 = state_15087__$1;
(statearr_15090_16917[(2)] = inst_15083);

(statearr_15090_16917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (1))){
var state_15087__$1 = state_15087;
var statearr_15091_16918 = state_15087__$1;
(statearr_15091_16918[(2)] = null);

(statearr_15091_16918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (4))){
var inst_15068 = (state_15087[(7)]);
var inst_15068__$1 = (state_15087[(2)]);
var inst_15069 = (inst_15068__$1 == null);
var state_15087__$1 = (function (){var statearr_15093 = state_15087;
(statearr_15093[(7)] = inst_15068__$1);

return statearr_15093;
})();
if(cljs.core.truth_(inst_15069)){
var statearr_15094_16920 = state_15087__$1;
(statearr_15094_16920[(1)] = (5));

} else {
var statearr_15095_16921 = state_15087__$1;
(statearr_15095_16921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (6))){
var inst_15068 = (state_15087[(7)]);
var inst_15073 = (state_15087[(8)]);
var inst_15073__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15075 = [inst_15068,inst_15073__$1];
var inst_15076 = (new cljs.core.PersistentVector(null,2,(5),inst_15074,inst_15075,null));
var state_15087__$1 = (function (){var statearr_15098 = state_15087;
(statearr_15098[(8)] = inst_15073__$1);

return statearr_15098;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15087__$1,(8),jobs,inst_15076);
} else {
if((state_val_15088 === (3))){
var inst_15085 = (state_15087[(2)]);
var state_15087__$1 = state_15087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15087__$1,inst_15085);
} else {
if((state_val_15088 === (2))){
var state_15087__$1 = state_15087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15087__$1,(4),from);
} else {
if((state_val_15088 === (9))){
var inst_15080 = (state_15087[(2)]);
var state_15087__$1 = (function (){var statearr_15105 = state_15087;
(statearr_15105[(9)] = inst_15080);

return statearr_15105;
})();
var statearr_15106_16922 = state_15087__$1;
(statearr_15106_16922[(2)] = null);

(statearr_15106_16922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (5))){
var inst_15071 = cljs.core.async.close_BANG_(jobs);
var state_15087__$1 = state_15087;
var statearr_15107_16923 = state_15087__$1;
(statearr_15107_16923[(2)] = inst_15071);

(statearr_15107_16923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15088 === (8))){
var inst_15073 = (state_15087[(8)]);
var inst_15078 = (state_15087[(2)]);
var state_15087__$1 = (function (){var statearr_15108 = state_15087;
(statearr_15108[(10)] = inst_15078);

return statearr_15108;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15087__$1,(9),results,inst_15073);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0 = (function (){
var statearr_15109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15109[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__);

(statearr_15109[(1)] = (1));

return statearr_15109;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1 = (function (state_15087){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_15087);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15110){var ex__14641__auto__ = e15110;
var statearr_15111_16924 = state_15087;
(statearr_15111_16924[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_15087[(4)]))){
var statearr_15112_16925 = state_15087;
(statearr_15112_16925[(1)] = cljs.core.first((state_15087[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16926 = state_15087;
state_15087 = G__16926;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__ = function(state_15087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1.call(this,state_15087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_15113 = f__14709__auto__();
(statearr_15113[(6)] = c__14708__auto___16916);

return statearr_15113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


var c__14708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_15152){
var state_val_15153 = (state_15152[(1)]);
if((state_val_15153 === (7))){
var inst_15148 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
var statearr_15154_16927 = state_15152__$1;
(statearr_15154_16927[(2)] = inst_15148);

(statearr_15154_16927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (20))){
var state_15152__$1 = state_15152;
var statearr_15155_16928 = state_15152__$1;
(statearr_15155_16928[(2)] = null);

(statearr_15155_16928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (1))){
var state_15152__$1 = state_15152;
var statearr_15156_16929 = state_15152__$1;
(statearr_15156_16929[(2)] = null);

(statearr_15156_16929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (4))){
var inst_15116 = (state_15152[(7)]);
var inst_15116__$1 = (state_15152[(2)]);
var inst_15117 = (inst_15116__$1 == null);
var state_15152__$1 = (function (){var statearr_15157 = state_15152;
(statearr_15157[(7)] = inst_15116__$1);

return statearr_15157;
})();
if(cljs.core.truth_(inst_15117)){
var statearr_15158_16930 = state_15152__$1;
(statearr_15158_16930[(1)] = (5));

} else {
var statearr_15159_16931 = state_15152__$1;
(statearr_15159_16931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (15))){
var inst_15130 = (state_15152[(8)]);
var state_15152__$1 = state_15152;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15152__$1,(18),to,inst_15130);
} else {
if((state_val_15153 === (21))){
var inst_15143 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
var statearr_15160_16932 = state_15152__$1;
(statearr_15160_16932[(2)] = inst_15143);

(statearr_15160_16932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (13))){
var inst_15145 = (state_15152[(2)]);
var state_15152__$1 = (function (){var statearr_15161 = state_15152;
(statearr_15161[(9)] = inst_15145);

return statearr_15161;
})();
var statearr_15162_16933 = state_15152__$1;
(statearr_15162_16933[(2)] = null);

(statearr_15162_16933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (6))){
var inst_15116 = (state_15152[(7)]);
var state_15152__$1 = state_15152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15152__$1,(11),inst_15116);
} else {
if((state_val_15153 === (17))){
var inst_15138 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
if(cljs.core.truth_(inst_15138)){
var statearr_15163_16934 = state_15152__$1;
(statearr_15163_16934[(1)] = (19));

} else {
var statearr_15165_16935 = state_15152__$1;
(statearr_15165_16935[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (3))){
var inst_15150 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15152__$1,inst_15150);
} else {
if((state_val_15153 === (12))){
var inst_15127 = (state_15152[(10)]);
var state_15152__$1 = state_15152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15152__$1,(14),inst_15127);
} else {
if((state_val_15153 === (2))){
var state_15152__$1 = state_15152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15152__$1,(4),results);
} else {
if((state_val_15153 === (19))){
var state_15152__$1 = state_15152;
var statearr_15167_16936 = state_15152__$1;
(statearr_15167_16936[(2)] = null);

(statearr_15167_16936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (11))){
var inst_15127 = (state_15152[(2)]);
var state_15152__$1 = (function (){var statearr_15168 = state_15152;
(statearr_15168[(10)] = inst_15127);

return statearr_15168;
})();
var statearr_15169_16937 = state_15152__$1;
(statearr_15169_16937[(2)] = null);

(statearr_15169_16937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (9))){
var state_15152__$1 = state_15152;
var statearr_15170_16939 = state_15152__$1;
(statearr_15170_16939[(2)] = null);

(statearr_15170_16939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (5))){
var state_15152__$1 = state_15152;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15171_16940 = state_15152__$1;
(statearr_15171_16940[(1)] = (8));

} else {
var statearr_15172_16942 = state_15152__$1;
(statearr_15172_16942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (14))){
var inst_15130 = (state_15152[(8)]);
var inst_15132 = (state_15152[(11)]);
var inst_15130__$1 = (state_15152[(2)]);
var inst_15131 = (inst_15130__$1 == null);
var inst_15132__$1 = cljs.core.not(inst_15131);
var state_15152__$1 = (function (){var statearr_15173 = state_15152;
(statearr_15173[(8)] = inst_15130__$1);

(statearr_15173[(11)] = inst_15132__$1);

return statearr_15173;
})();
if(inst_15132__$1){
var statearr_15174_16943 = state_15152__$1;
(statearr_15174_16943[(1)] = (15));

} else {
var statearr_15175_16944 = state_15152__$1;
(statearr_15175_16944[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (16))){
var inst_15132 = (state_15152[(11)]);
var state_15152__$1 = state_15152;
var statearr_15176_16945 = state_15152__$1;
(statearr_15176_16945[(2)] = inst_15132);

(statearr_15176_16945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (10))){
var inst_15123 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
var statearr_15177_16946 = state_15152__$1;
(statearr_15177_16946[(2)] = inst_15123);

(statearr_15177_16946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (18))){
var inst_15135 = (state_15152[(2)]);
var state_15152__$1 = state_15152;
var statearr_15178_16947 = state_15152__$1;
(statearr_15178_16947[(2)] = inst_15135);

(statearr_15178_16947[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15153 === (8))){
var inst_15120 = cljs.core.async.close_BANG_(to);
var state_15152__$1 = state_15152;
var statearr_15179_16948 = state_15152__$1;
(statearr_15179_16948[(2)] = inst_15120);

(statearr_15179_16948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0 = (function (){
var statearr_15180 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15180[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__);

(statearr_15180[(1)] = (1));

return statearr_15180;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1 = (function (state_15152){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_15152);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15181){var ex__14641__auto__ = e15181;
var statearr_15182_16949 = state_15152;
(statearr_15182_16949[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_15152[(4)]))){
var statearr_15183_16950 = state_15152;
(statearr_15183_16950[(1)] = cljs.core.first((state_15152[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16951 = state_15152;
state_15152 = G__16951;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__ = function(state_15152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1.call(this,state_15152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14638__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_15184 = f__14709__auto__();
(statearr_15184[(6)] = c__14708__auto__);

return statearr_15184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));

return c__14708__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15186 = arguments.length;
switch (G__15186) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15188 = arguments.length;
switch (G__15188) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15202 = arguments.length;
switch (G__15202) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14708__auto___16955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_15230){
var state_val_15231 = (state_15230[(1)]);
if((state_val_15231 === (7))){
var inst_15226 = (state_15230[(2)]);
var state_15230__$1 = state_15230;
var statearr_15232_16956 = state_15230__$1;
(statearr_15232_16956[(2)] = inst_15226);

(statearr_15232_16956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (1))){
var state_15230__$1 = state_15230;
var statearr_15233_16957 = state_15230__$1;
(statearr_15233_16957[(2)] = null);

(statearr_15233_16957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (4))){
var inst_15207 = (state_15230[(7)]);
var inst_15207__$1 = (state_15230[(2)]);
var inst_15208 = (inst_15207__$1 == null);
var state_15230__$1 = (function (){var statearr_15234 = state_15230;
(statearr_15234[(7)] = inst_15207__$1);

return statearr_15234;
})();
if(cljs.core.truth_(inst_15208)){
var statearr_15235_16958 = state_15230__$1;
(statearr_15235_16958[(1)] = (5));

} else {
var statearr_15236_16959 = state_15230__$1;
(statearr_15236_16959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (13))){
var state_15230__$1 = state_15230;
var statearr_15237_16960 = state_15230__$1;
(statearr_15237_16960[(2)] = null);

(statearr_15237_16960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (6))){
var inst_15207 = (state_15230[(7)]);
var inst_15213 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15207) : p.call(null,inst_15207));
var state_15230__$1 = state_15230;
if(cljs.core.truth_(inst_15213)){
var statearr_15238_16961 = state_15230__$1;
(statearr_15238_16961[(1)] = (9));

} else {
var statearr_15239_16962 = state_15230__$1;
(statearr_15239_16962[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (3))){
var inst_15228 = (state_15230[(2)]);
var state_15230__$1 = state_15230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15230__$1,inst_15228);
} else {
if((state_val_15231 === (12))){
var state_15230__$1 = state_15230;
var statearr_15240_16963 = state_15230__$1;
(statearr_15240_16963[(2)] = null);

(statearr_15240_16963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (2))){
var state_15230__$1 = state_15230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15230__$1,(4),ch);
} else {
if((state_val_15231 === (11))){
var inst_15207 = (state_15230[(7)]);
var inst_15217 = (state_15230[(2)]);
var state_15230__$1 = state_15230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15230__$1,(8),inst_15217,inst_15207);
} else {
if((state_val_15231 === (9))){
var state_15230__$1 = state_15230;
var statearr_15241_16964 = state_15230__$1;
(statearr_15241_16964[(2)] = tc);

(statearr_15241_16964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (5))){
var inst_15210 = cljs.core.async.close_BANG_(tc);
var inst_15211 = cljs.core.async.close_BANG_(fc);
var state_15230__$1 = (function (){var statearr_15242 = state_15230;
(statearr_15242[(8)] = inst_15210);

return statearr_15242;
})();
var statearr_15243_16965 = state_15230__$1;
(statearr_15243_16965[(2)] = inst_15211);

(statearr_15243_16965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (14))){
var inst_15224 = (state_15230[(2)]);
var state_15230__$1 = state_15230;
var statearr_15245_16966 = state_15230__$1;
(statearr_15245_16966[(2)] = inst_15224);

(statearr_15245_16966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (10))){
var state_15230__$1 = state_15230;
var statearr_15246_16967 = state_15230__$1;
(statearr_15246_16967[(2)] = fc);

(statearr_15246_16967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (8))){
var inst_15219 = (state_15230[(2)]);
var state_15230__$1 = state_15230;
if(cljs.core.truth_(inst_15219)){
var statearr_15247_16968 = state_15230__$1;
(statearr_15247_16968[(1)] = (12));

} else {
var statearr_15250_16969 = state_15230__$1;
(statearr_15250_16969[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14638__auto__ = null;
var cljs$core$async$state_machine__14638__auto____0 = (function (){
var statearr_15253 = [null,null,null,null,null,null,null,null,null];
(statearr_15253[(0)] = cljs$core$async$state_machine__14638__auto__);

(statearr_15253[(1)] = (1));

return statearr_15253;
});
var cljs$core$async$state_machine__14638__auto____1 = (function (state_15230){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_15230);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15254){var ex__14641__auto__ = e15254;
var statearr_15255_16970 = state_15230;
(statearr_15255_16970[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_15230[(4)]))){
var statearr_15256_16971 = state_15230;
(statearr_15256_16971[(1)] = cljs.core.first((state_15230[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16972 = state_15230;
state_15230 = G__16972;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$state_machine__14638__auto__ = function(state_15230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14638__auto____1.call(this,state_15230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14638__auto____0;
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14638__auto____1;
return cljs$core$async$state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_15260 = f__14709__auto__();
(statearr_15260[(6)] = c__14708__auto___16955);

return statearr_15260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_15291){
var state_val_15292 = (state_15291[(1)]);
if((state_val_15292 === (7))){
var inst_15284 = (state_15291[(2)]);
var state_15291__$1 = state_15291;
var statearr_15295_16974 = state_15291__$1;
(statearr_15295_16974[(2)] = inst_15284);

(statearr_15295_16974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15292 === (1))){
var inst_15261 = init;
var inst_15263 = inst_15261;
var state_15291__$1 = (function (){var statearr_15296 = state_15291;
(statearr_15296[(7)] = inst_15263);

return statearr_15296;
})();
var statearr_15298_16975 = state_15291__$1;
(statearr_15298_16975[(2)] = null);

(statearr_15298_16975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15292 === (4))){
var inst_15269 = (state_15291[(8)]);
var inst_15269__$1 = (state_15291[(2)]);
var inst_15270 = (inst_15269__$1 == null);
var state_15291__$1 = (function (){var statearr_15300 = state_15291;
(statearr_15300[(8)] = inst_15269__$1);

return statearr_15300;
})();
if(cljs.core.truth_(inst_15270)){
var statearr_15301_16976 = state_15291__$1;
(statearr_15301_16976[(1)] = (5));

} else {
var statearr_15305_16977 = state_15291__$1;
(statearr_15305_16977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15292 === (6))){
var inst_15263 = (state_15291[(7)]);
var inst_15269 = (state_15291[(8)]);
var inst_15274 = (state_15291[(9)]);
var inst_15274__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15263,inst_15269) : f.call(null,inst_15263,inst_15269));
var inst_15275 = cljs.core.reduced_QMARK_(inst_15274__$1);
var state_15291__$1 = (function (){var statearr_15306 = state_15291;
(statearr_15306[(9)] = inst_15274__$1);

return statearr_15306;
})();
if(inst_15275){
var statearr_15309_16978 = state_15291__$1;
(statearr_15309_16978[(1)] = (8));

} else {
var statearr_15310_16979 = state_15291__$1;
(statearr_15310_16979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15292 === (3))){
var inst_15286 = (state_15291[(2)]);
var state_15291__$1 = state_15291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15291__$1,inst_15286);
} else {
if((state_val_15292 === (2))){
var state_15291__$1 = state_15291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15291__$1,(4),ch);
} else {
if((state_val_15292 === (9))){
var inst_15274 = (state_15291[(9)]);
var inst_15263 = inst_15274;
var state_15291__$1 = (function (){var statearr_15317 = state_15291;
(statearr_15317[(7)] = inst_15263);

return statearr_15317;
})();
var statearr_15320_16980 = state_15291__$1;
(statearr_15320_16980[(2)] = null);

(statearr_15320_16980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15292 === (5))){
var inst_15263 = (state_15291[(7)]);
var state_15291__$1 = state_15291;
var statearr_15323_16981 = state_15291__$1;
(statearr_15323_16981[(2)] = inst_15263);

(statearr_15323_16981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15292 === (10))){
var inst_15282 = (state_15291[(2)]);
var state_15291__$1 = state_15291;
var statearr_15324_16982 = state_15291__$1;
(statearr_15324_16982[(2)] = inst_15282);

(statearr_15324_16982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15292 === (8))){
var inst_15274 = (state_15291[(9)]);
var inst_15277 = cljs.core.deref(inst_15274);
var state_15291__$1 = state_15291;
var statearr_15325_16983 = state_15291__$1;
(statearr_15325_16983[(2)] = inst_15277);

(statearr_15325_16983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14638__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14638__auto____0 = (function (){
var statearr_15326 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15326[(0)] = cljs$core$async$reduce_$_state_machine__14638__auto__);

(statearr_15326[(1)] = (1));

return statearr_15326;
});
var cljs$core$async$reduce_$_state_machine__14638__auto____1 = (function (state_15291){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_15291);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15327){var ex__14641__auto__ = e15327;
var statearr_15328_16985 = state_15291;
(statearr_15328_16985[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_15291[(4)]))){
var statearr_15329_16986 = state_15291;
(statearr_15329_16986[(1)] = cljs.core.first((state_15291[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16987 = state_15291;
state_15291 = G__16987;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14638__auto__ = function(state_15291){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14638__auto____1.call(this,state_15291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14638__auto____0;
cljs$core$async$reduce_$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14638__auto____1;
return cljs$core$async$reduce_$_state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_15330 = f__14709__auto__();
(statearr_15330[(6)] = c__14708__auto__);

return statearr_15330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));

return c__14708__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_15336){
var state_val_15337 = (state_15336[(1)]);
if((state_val_15337 === (1))){
var inst_15331 = cljs.core.async.reduce(f__$1,init,ch);
var state_15336__$1 = state_15336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15336__$1,(2),inst_15331);
} else {
if((state_val_15337 === (2))){
var inst_15333 = (state_15336[(2)]);
var inst_15334 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15333) : f__$1.call(null,inst_15333));
var state_15336__$1 = state_15336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15336__$1,inst_15334);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14638__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14638__auto____0 = (function (){
var statearr_15338 = [null,null,null,null,null,null,null];
(statearr_15338[(0)] = cljs$core$async$transduce_$_state_machine__14638__auto__);

(statearr_15338[(1)] = (1));

return statearr_15338;
});
var cljs$core$async$transduce_$_state_machine__14638__auto____1 = (function (state_15336){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_15336);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15339){var ex__14641__auto__ = e15339;
var statearr_15340_16988 = state_15336;
(statearr_15340_16988[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_15336[(4)]))){
var statearr_15341_16989 = state_15336;
(statearr_15341_16989[(1)] = cljs.core.first((state_15336[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16990 = state_15336;
state_15336 = G__16990;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14638__auto__ = function(state_15336){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14638__auto____1.call(this,state_15336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14638__auto____0;
cljs$core$async$transduce_$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14638__auto____1;
return cljs$core$async$transduce_$_state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_15342 = f__14709__auto__();
(statearr_15342[(6)] = c__14708__auto__);

return statearr_15342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));

return c__14708__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15344 = arguments.length;
switch (G__15344) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_15371){
var state_val_15372 = (state_15371[(1)]);
if((state_val_15372 === (7))){
var inst_15353 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
var statearr_15373_16993 = state_15371__$1;
(statearr_15373_16993[(2)] = inst_15353);

(statearr_15373_16993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (1))){
var inst_15345 = cljs.core.seq(coll);
var inst_15346 = inst_15345;
var state_15371__$1 = (function (){var statearr_15374 = state_15371;
(statearr_15374[(7)] = inst_15346);

return statearr_15374;
})();
var statearr_15375_16994 = state_15371__$1;
(statearr_15375_16994[(2)] = null);

(statearr_15375_16994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (4))){
var inst_15346 = (state_15371[(7)]);
var inst_15351 = cljs.core.first(inst_15346);
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15371__$1,(7),ch,inst_15351);
} else {
if((state_val_15372 === (13))){
var inst_15365 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
var statearr_15378_16995 = state_15371__$1;
(statearr_15378_16995[(2)] = inst_15365);

(statearr_15378_16995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (6))){
var inst_15356 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
if(cljs.core.truth_(inst_15356)){
var statearr_15379_16996 = state_15371__$1;
(statearr_15379_16996[(1)] = (8));

} else {
var statearr_15380_16997 = state_15371__$1;
(statearr_15380_16997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (3))){
var inst_15369 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15371__$1,inst_15369);
} else {
if((state_val_15372 === (12))){
var state_15371__$1 = state_15371;
var statearr_15381_16998 = state_15371__$1;
(statearr_15381_16998[(2)] = null);

(statearr_15381_16998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (2))){
var inst_15346 = (state_15371[(7)]);
var state_15371__$1 = state_15371;
if(cljs.core.truth_(inst_15346)){
var statearr_15384_16999 = state_15371__$1;
(statearr_15384_16999[(1)] = (4));

} else {
var statearr_15385_17000 = state_15371__$1;
(statearr_15385_17000[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (11))){
var inst_15362 = cljs.core.async.close_BANG_(ch);
var state_15371__$1 = state_15371;
var statearr_15386_17001 = state_15371__$1;
(statearr_15386_17001[(2)] = inst_15362);

(statearr_15386_17001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (9))){
var state_15371__$1 = state_15371;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15387_17003 = state_15371__$1;
(statearr_15387_17003[(1)] = (11));

} else {
var statearr_15388_17004 = state_15371__$1;
(statearr_15388_17004[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (5))){
var inst_15346 = (state_15371[(7)]);
var state_15371__$1 = state_15371;
var statearr_15390_17005 = state_15371__$1;
(statearr_15390_17005[(2)] = inst_15346);

(statearr_15390_17005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (10))){
var inst_15367 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
var statearr_15391_17006 = state_15371__$1;
(statearr_15391_17006[(2)] = inst_15367);

(statearr_15391_17006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (8))){
var inst_15346 = (state_15371[(7)]);
var inst_15358 = cljs.core.next(inst_15346);
var inst_15346__$1 = inst_15358;
var state_15371__$1 = (function (){var statearr_15392 = state_15371;
(statearr_15392[(7)] = inst_15346__$1);

return statearr_15392;
})();
var statearr_15393_17007 = state_15371__$1;
(statearr_15393_17007[(2)] = null);

(statearr_15393_17007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14638__auto__ = null;
var cljs$core$async$state_machine__14638__auto____0 = (function (){
var statearr_15395 = [null,null,null,null,null,null,null,null];
(statearr_15395[(0)] = cljs$core$async$state_machine__14638__auto__);

(statearr_15395[(1)] = (1));

return statearr_15395;
});
var cljs$core$async$state_machine__14638__auto____1 = (function (state_15371){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_15371);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15396){var ex__14641__auto__ = e15396;
var statearr_15397_17008 = state_15371;
(statearr_15397_17008[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_15371[(4)]))){
var statearr_15398_17009 = state_15371;
(statearr_15398_17009[(1)] = cljs.core.first((state_15371[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17010 = state_15371;
state_15371 = G__17010;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$state_machine__14638__auto__ = function(state_15371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14638__auto____1.call(this,state_15371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14638__auto____0;
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14638__auto____1;
return cljs$core$async$state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_15399 = f__14709__auto__();
(statearr_15399[(6)] = c__14708__auto__);

return statearr_15399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));

return c__14708__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15403 = arguments.length;
switch (G__15403) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17013 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17013(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17015 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17015(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17016 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17016(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17019 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17019(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15410 = (function (ch,cs,meta15411){
this.ch = ch;
this.cs = cs;
this.meta15411 = meta15411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15412,meta15411__$1){
var self__ = this;
var _15412__$1 = this;
return (new cljs.core.async.t_cljs$core$async15410(self__.ch,self__.cs,meta15411__$1));
}));

(cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15412){
var self__ = this;
var _15412__$1 = this;
return self__.meta15411;
}));

(cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15410.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15411","meta15411",-656234058,null)], null);
}));

(cljs.core.async.t_cljs$core$async15410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15410");

(cljs.core.async.t_cljs$core$async15410.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async15410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15410.
 */
cljs.core.async.__GT_t_cljs$core$async15410 = (function cljs$core$async$__GT_t_cljs$core$async15410(ch,cs,meta15411){
return (new cljs.core.async.t_cljs$core$async15410(ch,cs,meta15411));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15410(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14708__auto___17025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_15551){
var state_val_15552 = (state_15551[(1)]);
if((state_val_15552 === (7))){
var inst_15547 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
var statearr_15553_17029 = state_15551__$1;
(statearr_15553_17029[(2)] = inst_15547);

(statearr_15553_17029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (20))){
var inst_15446 = (state_15551[(7)]);
var inst_15458 = cljs.core.first(inst_15446);
var inst_15459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15458,(0),null);
var inst_15460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15458,(1),null);
var state_15551__$1 = (function (){var statearr_15554 = state_15551;
(statearr_15554[(8)] = inst_15459);

return statearr_15554;
})();
if(cljs.core.truth_(inst_15460)){
var statearr_15555_17031 = state_15551__$1;
(statearr_15555_17031[(1)] = (22));

} else {
var statearr_15556_17032 = state_15551__$1;
(statearr_15556_17032[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (27))){
var inst_15488 = (state_15551[(9)]);
var inst_15490 = (state_15551[(10)]);
var inst_15495 = (state_15551[(11)]);
var inst_15415 = (state_15551[(12)]);
var inst_15495__$1 = cljs.core._nth(inst_15488,inst_15490);
var inst_15496 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15495__$1,inst_15415,done);
var state_15551__$1 = (function (){var statearr_15563 = state_15551;
(statearr_15563[(11)] = inst_15495__$1);

return statearr_15563;
})();
if(cljs.core.truth_(inst_15496)){
var statearr_15564_17035 = state_15551__$1;
(statearr_15564_17035[(1)] = (30));

} else {
var statearr_15565_17036 = state_15551__$1;
(statearr_15565_17036[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (1))){
var state_15551__$1 = state_15551;
var statearr_15566_17037 = state_15551__$1;
(statearr_15566_17037[(2)] = null);

(statearr_15566_17037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (24))){
var inst_15446 = (state_15551[(7)]);
var inst_15465 = (state_15551[(2)]);
var inst_15466 = cljs.core.next(inst_15446);
var inst_15424 = inst_15466;
var inst_15425 = null;
var inst_15426 = (0);
var inst_15427 = (0);
var state_15551__$1 = (function (){var statearr_15567 = state_15551;
(statearr_15567[(13)] = inst_15465);

(statearr_15567[(14)] = inst_15424);

(statearr_15567[(15)] = inst_15425);

(statearr_15567[(16)] = inst_15426);

(statearr_15567[(17)] = inst_15427);

return statearr_15567;
})();
var statearr_15568_17038 = state_15551__$1;
(statearr_15568_17038[(2)] = null);

(statearr_15568_17038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (39))){
var state_15551__$1 = state_15551;
var statearr_15572_17039 = state_15551__$1;
(statearr_15572_17039[(2)] = null);

(statearr_15572_17039[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (4))){
var inst_15415 = (state_15551[(12)]);
var inst_15415__$1 = (state_15551[(2)]);
var inst_15416 = (inst_15415__$1 == null);
var state_15551__$1 = (function (){var statearr_15573 = state_15551;
(statearr_15573[(12)] = inst_15415__$1);

return statearr_15573;
})();
if(cljs.core.truth_(inst_15416)){
var statearr_15574_17040 = state_15551__$1;
(statearr_15574_17040[(1)] = (5));

} else {
var statearr_15575_17041 = state_15551__$1;
(statearr_15575_17041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (15))){
var inst_15427 = (state_15551[(17)]);
var inst_15424 = (state_15551[(14)]);
var inst_15425 = (state_15551[(15)]);
var inst_15426 = (state_15551[(16)]);
var inst_15442 = (state_15551[(2)]);
var inst_15443 = (inst_15427 + (1));
var tmp15569 = inst_15426;
var tmp15570 = inst_15425;
var tmp15571 = inst_15424;
var inst_15424__$1 = tmp15571;
var inst_15425__$1 = tmp15570;
var inst_15426__$1 = tmp15569;
var inst_15427__$1 = inst_15443;
var state_15551__$1 = (function (){var statearr_15576 = state_15551;
(statearr_15576[(18)] = inst_15442);

(statearr_15576[(14)] = inst_15424__$1);

(statearr_15576[(15)] = inst_15425__$1);

(statearr_15576[(16)] = inst_15426__$1);

(statearr_15576[(17)] = inst_15427__$1);

return statearr_15576;
})();
var statearr_15577_17047 = state_15551__$1;
(statearr_15577_17047[(2)] = null);

(statearr_15577_17047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (21))){
var inst_15469 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
var statearr_15581_17052 = state_15551__$1;
(statearr_15581_17052[(2)] = inst_15469);

(statearr_15581_17052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (31))){
var inst_15495 = (state_15551[(11)]);
var inst_15499 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15495);
var state_15551__$1 = state_15551;
var statearr_15582_17058 = state_15551__$1;
(statearr_15582_17058[(2)] = inst_15499);

(statearr_15582_17058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (32))){
var inst_15490 = (state_15551[(10)]);
var inst_15487 = (state_15551[(19)]);
var inst_15488 = (state_15551[(9)]);
var inst_15489 = (state_15551[(20)]);
var inst_15501 = (state_15551[(2)]);
var inst_15502 = (inst_15490 + (1));
var tmp15578 = inst_15488;
var tmp15579 = inst_15489;
var tmp15580 = inst_15487;
var inst_15487__$1 = tmp15580;
var inst_15488__$1 = tmp15578;
var inst_15489__$1 = tmp15579;
var inst_15490__$1 = inst_15502;
var state_15551__$1 = (function (){var statearr_15583 = state_15551;
(statearr_15583[(21)] = inst_15501);

(statearr_15583[(19)] = inst_15487__$1);

(statearr_15583[(9)] = inst_15488__$1);

(statearr_15583[(20)] = inst_15489__$1);

(statearr_15583[(10)] = inst_15490__$1);

return statearr_15583;
})();
var statearr_15584_17059 = state_15551__$1;
(statearr_15584_17059[(2)] = null);

(statearr_15584_17059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (40))){
var inst_15514 = (state_15551[(22)]);
var inst_15518 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15514);
var state_15551__$1 = state_15551;
var statearr_15585_17061 = state_15551__$1;
(statearr_15585_17061[(2)] = inst_15518);

(statearr_15585_17061[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (33))){
var inst_15505 = (state_15551[(23)]);
var inst_15507 = cljs.core.chunked_seq_QMARK_(inst_15505);
var state_15551__$1 = state_15551;
if(inst_15507){
var statearr_15586_17062 = state_15551__$1;
(statearr_15586_17062[(1)] = (36));

} else {
var statearr_15587_17063 = state_15551__$1;
(statearr_15587_17063[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (13))){
var inst_15436 = (state_15551[(24)]);
var inst_15439 = cljs.core.async.close_BANG_(inst_15436);
var state_15551__$1 = state_15551;
var statearr_15588_17064 = state_15551__$1;
(statearr_15588_17064[(2)] = inst_15439);

(statearr_15588_17064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (22))){
var inst_15459 = (state_15551[(8)]);
var inst_15462 = cljs.core.async.close_BANG_(inst_15459);
var state_15551__$1 = state_15551;
var statearr_15589_17065 = state_15551__$1;
(statearr_15589_17065[(2)] = inst_15462);

(statearr_15589_17065[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (36))){
var inst_15505 = (state_15551[(23)]);
var inst_15509 = cljs.core.chunk_first(inst_15505);
var inst_15510 = cljs.core.chunk_rest(inst_15505);
var inst_15511 = cljs.core.count(inst_15509);
var inst_15487 = inst_15510;
var inst_15488 = inst_15509;
var inst_15489 = inst_15511;
var inst_15490 = (0);
var state_15551__$1 = (function (){var statearr_15594 = state_15551;
(statearr_15594[(19)] = inst_15487);

(statearr_15594[(9)] = inst_15488);

(statearr_15594[(20)] = inst_15489);

(statearr_15594[(10)] = inst_15490);

return statearr_15594;
})();
var statearr_15595_17067 = state_15551__$1;
(statearr_15595_17067[(2)] = null);

(statearr_15595_17067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (41))){
var inst_15505 = (state_15551[(23)]);
var inst_15520 = (state_15551[(2)]);
var inst_15521 = cljs.core.next(inst_15505);
var inst_15487 = inst_15521;
var inst_15488 = null;
var inst_15489 = (0);
var inst_15490 = (0);
var state_15551__$1 = (function (){var statearr_15596 = state_15551;
(statearr_15596[(25)] = inst_15520);

(statearr_15596[(19)] = inst_15487);

(statearr_15596[(9)] = inst_15488);

(statearr_15596[(20)] = inst_15489);

(statearr_15596[(10)] = inst_15490);

return statearr_15596;
})();
var statearr_15597_17069 = state_15551__$1;
(statearr_15597_17069[(2)] = null);

(statearr_15597_17069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (43))){
var state_15551__$1 = state_15551;
var statearr_15598_17070 = state_15551__$1;
(statearr_15598_17070[(2)] = null);

(statearr_15598_17070[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (29))){
var inst_15531 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
var statearr_15599_17071 = state_15551__$1;
(statearr_15599_17071[(2)] = inst_15531);

(statearr_15599_17071[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (44))){
var inst_15544 = (state_15551[(2)]);
var state_15551__$1 = (function (){var statearr_15600 = state_15551;
(statearr_15600[(26)] = inst_15544);

return statearr_15600;
})();
var statearr_15601_17072 = state_15551__$1;
(statearr_15601_17072[(2)] = null);

(statearr_15601_17072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (6))){
var inst_15479 = (state_15551[(27)]);
var inst_15478 = cljs.core.deref(cs);
var inst_15479__$1 = cljs.core.keys(inst_15478);
var inst_15480 = cljs.core.count(inst_15479__$1);
var inst_15481 = cljs.core.reset_BANG_(dctr,inst_15480);
var inst_15486 = cljs.core.seq(inst_15479__$1);
var inst_15487 = inst_15486;
var inst_15488 = null;
var inst_15489 = (0);
var inst_15490 = (0);
var state_15551__$1 = (function (){var statearr_15602 = state_15551;
(statearr_15602[(27)] = inst_15479__$1);

(statearr_15602[(28)] = inst_15481);

(statearr_15602[(19)] = inst_15487);

(statearr_15602[(9)] = inst_15488);

(statearr_15602[(20)] = inst_15489);

(statearr_15602[(10)] = inst_15490);

return statearr_15602;
})();
var statearr_15603_17076 = state_15551__$1;
(statearr_15603_17076[(2)] = null);

(statearr_15603_17076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (28))){
var inst_15487 = (state_15551[(19)]);
var inst_15505 = (state_15551[(23)]);
var inst_15505__$1 = cljs.core.seq(inst_15487);
var state_15551__$1 = (function (){var statearr_15604 = state_15551;
(statearr_15604[(23)] = inst_15505__$1);

return statearr_15604;
})();
if(inst_15505__$1){
var statearr_15605_17077 = state_15551__$1;
(statearr_15605_17077[(1)] = (33));

} else {
var statearr_15606_17078 = state_15551__$1;
(statearr_15606_17078[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (25))){
var inst_15490 = (state_15551[(10)]);
var inst_15489 = (state_15551[(20)]);
var inst_15492 = (inst_15490 < inst_15489);
var inst_15493 = inst_15492;
var state_15551__$1 = state_15551;
if(cljs.core.truth_(inst_15493)){
var statearr_15607_17079 = state_15551__$1;
(statearr_15607_17079[(1)] = (27));

} else {
var statearr_15608_17080 = state_15551__$1;
(statearr_15608_17080[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (34))){
var state_15551__$1 = state_15551;
var statearr_15609_17081 = state_15551__$1;
(statearr_15609_17081[(2)] = null);

(statearr_15609_17081[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (17))){
var state_15551__$1 = state_15551;
var statearr_15610_17082 = state_15551__$1;
(statearr_15610_17082[(2)] = null);

(statearr_15610_17082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (3))){
var inst_15549 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15551__$1,inst_15549);
} else {
if((state_val_15552 === (12))){
var inst_15474 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
var statearr_15612_17084 = state_15551__$1;
(statearr_15612_17084[(2)] = inst_15474);

(statearr_15612_17084[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (2))){
var state_15551__$1 = state_15551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15551__$1,(4),ch);
} else {
if((state_val_15552 === (23))){
var state_15551__$1 = state_15551;
var statearr_15613_17085 = state_15551__$1;
(statearr_15613_17085[(2)] = null);

(statearr_15613_17085[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (35))){
var inst_15529 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
var statearr_15614_17087 = state_15551__$1;
(statearr_15614_17087[(2)] = inst_15529);

(statearr_15614_17087[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (19))){
var inst_15446 = (state_15551[(7)]);
var inst_15450 = cljs.core.chunk_first(inst_15446);
var inst_15451 = cljs.core.chunk_rest(inst_15446);
var inst_15452 = cljs.core.count(inst_15450);
var inst_15424 = inst_15451;
var inst_15425 = inst_15450;
var inst_15426 = inst_15452;
var inst_15427 = (0);
var state_15551__$1 = (function (){var statearr_15615 = state_15551;
(statearr_15615[(14)] = inst_15424);

(statearr_15615[(15)] = inst_15425);

(statearr_15615[(16)] = inst_15426);

(statearr_15615[(17)] = inst_15427);

return statearr_15615;
})();
var statearr_15616_17090 = state_15551__$1;
(statearr_15616_17090[(2)] = null);

(statearr_15616_17090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (11))){
var inst_15424 = (state_15551[(14)]);
var inst_15446 = (state_15551[(7)]);
var inst_15446__$1 = cljs.core.seq(inst_15424);
var state_15551__$1 = (function (){var statearr_15617 = state_15551;
(statearr_15617[(7)] = inst_15446__$1);

return statearr_15617;
})();
if(inst_15446__$1){
var statearr_15618_17091 = state_15551__$1;
(statearr_15618_17091[(1)] = (16));

} else {
var statearr_15619_17092 = state_15551__$1;
(statearr_15619_17092[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (9))){
var inst_15476 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
var statearr_15620_17093 = state_15551__$1;
(statearr_15620_17093[(2)] = inst_15476);

(statearr_15620_17093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (5))){
var inst_15422 = cljs.core.deref(cs);
var inst_15423 = cljs.core.seq(inst_15422);
var inst_15424 = inst_15423;
var inst_15425 = null;
var inst_15426 = (0);
var inst_15427 = (0);
var state_15551__$1 = (function (){var statearr_15621 = state_15551;
(statearr_15621[(14)] = inst_15424);

(statearr_15621[(15)] = inst_15425);

(statearr_15621[(16)] = inst_15426);

(statearr_15621[(17)] = inst_15427);

return statearr_15621;
})();
var statearr_15622_17094 = state_15551__$1;
(statearr_15622_17094[(2)] = null);

(statearr_15622_17094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (14))){
var state_15551__$1 = state_15551;
var statearr_15623_17095 = state_15551__$1;
(statearr_15623_17095[(2)] = null);

(statearr_15623_17095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (45))){
var inst_15541 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
var statearr_15625_17096 = state_15551__$1;
(statearr_15625_17096[(2)] = inst_15541);

(statearr_15625_17096[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (26))){
var inst_15479 = (state_15551[(27)]);
var inst_15533 = (state_15551[(2)]);
var inst_15538 = cljs.core.seq(inst_15479);
var state_15551__$1 = (function (){var statearr_15626 = state_15551;
(statearr_15626[(29)] = inst_15533);

return statearr_15626;
})();
if(inst_15538){
var statearr_15627_17097 = state_15551__$1;
(statearr_15627_17097[(1)] = (42));

} else {
var statearr_15628_17098 = state_15551__$1;
(statearr_15628_17098[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (16))){
var inst_15446 = (state_15551[(7)]);
var inst_15448 = cljs.core.chunked_seq_QMARK_(inst_15446);
var state_15551__$1 = state_15551;
if(inst_15448){
var statearr_15629_17099 = state_15551__$1;
(statearr_15629_17099[(1)] = (19));

} else {
var statearr_15630_17100 = state_15551__$1;
(statearr_15630_17100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (38))){
var inst_15526 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
var statearr_15631_17101 = state_15551__$1;
(statearr_15631_17101[(2)] = inst_15526);

(statearr_15631_17101[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (30))){
var state_15551__$1 = state_15551;
var statearr_15633_17103 = state_15551__$1;
(statearr_15633_17103[(2)] = null);

(statearr_15633_17103[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (10))){
var inst_15425 = (state_15551[(15)]);
var inst_15427 = (state_15551[(17)]);
var inst_15435 = cljs.core._nth(inst_15425,inst_15427);
var inst_15436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15435,(0),null);
var inst_15437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15435,(1),null);
var state_15551__$1 = (function (){var statearr_15635 = state_15551;
(statearr_15635[(24)] = inst_15436);

return statearr_15635;
})();
if(cljs.core.truth_(inst_15437)){
var statearr_15636_17104 = state_15551__$1;
(statearr_15636_17104[(1)] = (13));

} else {
var statearr_15637_17105 = state_15551__$1;
(statearr_15637_17105[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (18))){
var inst_15472 = (state_15551[(2)]);
var state_15551__$1 = state_15551;
var statearr_15638_17106 = state_15551__$1;
(statearr_15638_17106[(2)] = inst_15472);

(statearr_15638_17106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (42))){
var state_15551__$1 = state_15551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15551__$1,(45),dchan);
} else {
if((state_val_15552 === (37))){
var inst_15505 = (state_15551[(23)]);
var inst_15514 = (state_15551[(22)]);
var inst_15415 = (state_15551[(12)]);
var inst_15514__$1 = cljs.core.first(inst_15505);
var inst_15515 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15514__$1,inst_15415,done);
var state_15551__$1 = (function (){var statearr_15639 = state_15551;
(statearr_15639[(22)] = inst_15514__$1);

return statearr_15639;
})();
if(cljs.core.truth_(inst_15515)){
var statearr_15640_17107 = state_15551__$1;
(statearr_15640_17107[(1)] = (39));

} else {
var statearr_15641_17108 = state_15551__$1;
(statearr_15641_17108[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15552 === (8))){
var inst_15427 = (state_15551[(17)]);
var inst_15426 = (state_15551[(16)]);
var inst_15429 = (inst_15427 < inst_15426);
var inst_15430 = inst_15429;
var state_15551__$1 = state_15551;
if(cljs.core.truth_(inst_15430)){
var statearr_15642_17109 = state_15551__$1;
(statearr_15642_17109[(1)] = (10));

} else {
var statearr_15643_17110 = state_15551__$1;
(statearr_15643_17110[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14638__auto__ = null;
var cljs$core$async$mult_$_state_machine__14638__auto____0 = (function (){
var statearr_15644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15644[(0)] = cljs$core$async$mult_$_state_machine__14638__auto__);

(statearr_15644[(1)] = (1));

return statearr_15644;
});
var cljs$core$async$mult_$_state_machine__14638__auto____1 = (function (state_15551){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_15551);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15646){var ex__14641__auto__ = e15646;
var statearr_15647_17111 = state_15551;
(statearr_15647_17111[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_15551[(4)]))){
var statearr_15648_17112 = state_15551;
(statearr_15648_17112[(1)] = cljs.core.first((state_15551[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17113 = state_15551;
state_15551 = G__17113;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14638__auto__ = function(state_15551){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14638__auto____1.call(this,state_15551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14638__auto____0;
cljs$core$async$mult_$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14638__auto____1;
return cljs$core$async$mult_$_state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_15651 = f__14709__auto__();
(statearr_15651[(6)] = c__14708__auto___17025);

return statearr_15651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15655 = arguments.length;
switch (G__15655) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17115 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17115(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17116 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17116(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17117 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17117(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17118 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17118(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17119 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17119(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___17120 = arguments.length;
var i__5750__auto___17121 = (0);
while(true){
if((i__5750__auto___17121 < len__5749__auto___17120)){
args__5755__auto__.push((arguments[i__5750__auto___17121]));

var G__17122 = (i__5750__auto___17121 + (1));
i__5750__auto___17121 = G__17122;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15680){
var map__15683 = p__15680;
var map__15683__$1 = cljs.core.__destructure_map(map__15683);
var opts = map__15683__$1;
var statearr_15684_17123 = state;
(statearr_15684_17123[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15686_17124 = state;
(statearr_15686_17124[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_15688_17125 = state;
(statearr_15688_17125[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15674){
var G__15675 = cljs.core.first(seq15674);
var seq15674__$1 = cljs.core.next(seq15674);
var G__15676 = cljs.core.first(seq15674__$1);
var seq15674__$2 = cljs.core.next(seq15674__$1);
var G__15677 = cljs.core.first(seq15674__$2);
var seq15674__$3 = cljs.core.next(seq15674__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15675,G__15676,G__15677,seq15674__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15692 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15693){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15693 = meta15693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15694,meta15693__$1){
var self__ = this;
var _15694__$1 = this;
return (new cljs.core.async.t_cljs$core$async15692(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15693__$1));
}));

(cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15694){
var self__ = this;
var _15694__$1 = this;
return self__.meta15693;
}));

(cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15692.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15693","meta15693",187191577,null)], null);
}));

(cljs.core.async.t_cljs$core$async15692.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15692");

(cljs.core.async.t_cljs$core$async15692.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async15692");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15692.
 */
cljs.core.async.__GT_t_cljs$core$async15692 = (function cljs$core$async$__GT_t_cljs$core$async15692(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15693){
return (new cljs.core.async.t_cljs$core$async15692(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15693));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15692(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14708__auto___17137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_15766){
var state_val_15767 = (state_15766[(1)]);
if((state_val_15767 === (7))){
var inst_15726 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
if(cljs.core.truth_(inst_15726)){
var statearr_15768_17138 = state_15766__$1;
(statearr_15768_17138[(1)] = (8));

} else {
var statearr_15769_17139 = state_15766__$1;
(statearr_15769_17139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (20))){
var inst_15719 = (state_15766[(7)]);
var state_15766__$1 = state_15766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15766__$1,(23),out,inst_15719);
} else {
if((state_val_15767 === (1))){
var inst_15702 = calc_state();
var inst_15703 = cljs.core.__destructure_map(inst_15702);
var inst_15704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15703,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15703,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15703,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15707 = inst_15702;
var state_15766__$1 = (function (){var statearr_15773 = state_15766;
(statearr_15773[(8)] = inst_15704);

(statearr_15773[(9)] = inst_15705);

(statearr_15773[(10)] = inst_15706);

(statearr_15773[(11)] = inst_15707);

return statearr_15773;
})();
var statearr_15774_17140 = state_15766__$1;
(statearr_15774_17140[(2)] = null);

(statearr_15774_17140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (24))){
var inst_15710 = (state_15766[(12)]);
var inst_15707 = inst_15710;
var state_15766__$1 = (function (){var statearr_15775 = state_15766;
(statearr_15775[(11)] = inst_15707);

return statearr_15775;
})();
var statearr_15776_17141 = state_15766__$1;
(statearr_15776_17141[(2)] = null);

(statearr_15776_17141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (4))){
var inst_15719 = (state_15766[(7)]);
var inst_15721 = (state_15766[(13)]);
var inst_15718 = (state_15766[(2)]);
var inst_15719__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15718,(0),null);
var inst_15720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15718,(1),null);
var inst_15721__$1 = (inst_15719__$1 == null);
var state_15766__$1 = (function (){var statearr_15777 = state_15766;
(statearr_15777[(7)] = inst_15719__$1);

(statearr_15777[(14)] = inst_15720);

(statearr_15777[(13)] = inst_15721__$1);

return statearr_15777;
})();
if(cljs.core.truth_(inst_15721__$1)){
var statearr_15778_17142 = state_15766__$1;
(statearr_15778_17142[(1)] = (5));

} else {
var statearr_15779_17143 = state_15766__$1;
(statearr_15779_17143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (15))){
var inst_15711 = (state_15766[(15)]);
var inst_15740 = (state_15766[(16)]);
var inst_15740__$1 = cljs.core.empty_QMARK_(inst_15711);
var state_15766__$1 = (function (){var statearr_15780 = state_15766;
(statearr_15780[(16)] = inst_15740__$1);

return statearr_15780;
})();
if(inst_15740__$1){
var statearr_15781_17144 = state_15766__$1;
(statearr_15781_17144[(1)] = (17));

} else {
var statearr_15782_17145 = state_15766__$1;
(statearr_15782_17145[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (21))){
var inst_15710 = (state_15766[(12)]);
var inst_15707 = inst_15710;
var state_15766__$1 = (function (){var statearr_15783 = state_15766;
(statearr_15783[(11)] = inst_15707);

return statearr_15783;
})();
var statearr_15784_17146 = state_15766__$1;
(statearr_15784_17146[(2)] = null);

(statearr_15784_17146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (13))){
var inst_15733 = (state_15766[(2)]);
var inst_15734 = calc_state();
var inst_15707 = inst_15734;
var state_15766__$1 = (function (){var statearr_15785 = state_15766;
(statearr_15785[(17)] = inst_15733);

(statearr_15785[(11)] = inst_15707);

return statearr_15785;
})();
var statearr_15786_17147 = state_15766__$1;
(statearr_15786_17147[(2)] = null);

(statearr_15786_17147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (22))){
var inst_15760 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15787_17148 = state_15766__$1;
(statearr_15787_17148[(2)] = inst_15760);

(statearr_15787_17148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (6))){
var inst_15720 = (state_15766[(14)]);
var inst_15724 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15720,change);
var state_15766__$1 = state_15766;
var statearr_15788_17149 = state_15766__$1;
(statearr_15788_17149[(2)] = inst_15724);

(statearr_15788_17149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (25))){
var state_15766__$1 = state_15766;
var statearr_15789_17150 = state_15766__$1;
(statearr_15789_17150[(2)] = null);

(statearr_15789_17150[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (17))){
var inst_15712 = (state_15766[(18)]);
var inst_15720 = (state_15766[(14)]);
var inst_15742 = (inst_15712.cljs$core$IFn$_invoke$arity$1 ? inst_15712.cljs$core$IFn$_invoke$arity$1(inst_15720) : inst_15712.call(null,inst_15720));
var inst_15743 = cljs.core.not(inst_15742);
var state_15766__$1 = state_15766;
var statearr_15791_17154 = state_15766__$1;
(statearr_15791_17154[(2)] = inst_15743);

(statearr_15791_17154[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (3))){
var inst_15764 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15766__$1,inst_15764);
} else {
if((state_val_15767 === (12))){
var state_15766__$1 = state_15766;
var statearr_15792_17155 = state_15766__$1;
(statearr_15792_17155[(2)] = null);

(statearr_15792_17155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (2))){
var inst_15707 = (state_15766[(11)]);
var inst_15710 = (state_15766[(12)]);
var inst_15710__$1 = cljs.core.__destructure_map(inst_15707);
var inst_15711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15710__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15710__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15710__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15766__$1 = (function (){var statearr_15796 = state_15766;
(statearr_15796[(12)] = inst_15710__$1);

(statearr_15796[(15)] = inst_15711);

(statearr_15796[(18)] = inst_15712);

return statearr_15796;
})();
return cljs.core.async.ioc_alts_BANG_(state_15766__$1,(4),inst_15713);
} else {
if((state_val_15767 === (23))){
var inst_15751 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
if(cljs.core.truth_(inst_15751)){
var statearr_15797_17159 = state_15766__$1;
(statearr_15797_17159[(1)] = (24));

} else {
var statearr_15798_17160 = state_15766__$1;
(statearr_15798_17160[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (19))){
var inst_15746 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15799_17161 = state_15766__$1;
(statearr_15799_17161[(2)] = inst_15746);

(statearr_15799_17161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (11))){
var inst_15720 = (state_15766[(14)]);
var inst_15730 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15720);
var state_15766__$1 = state_15766;
var statearr_15800_17162 = state_15766__$1;
(statearr_15800_17162[(2)] = inst_15730);

(statearr_15800_17162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (9))){
var inst_15711 = (state_15766[(15)]);
var inst_15720 = (state_15766[(14)]);
var inst_15737 = (state_15766[(19)]);
var inst_15737__$1 = (inst_15711.cljs$core$IFn$_invoke$arity$1 ? inst_15711.cljs$core$IFn$_invoke$arity$1(inst_15720) : inst_15711.call(null,inst_15720));
var state_15766__$1 = (function (){var statearr_15801 = state_15766;
(statearr_15801[(19)] = inst_15737__$1);

return statearr_15801;
})();
if(cljs.core.truth_(inst_15737__$1)){
var statearr_15802_17163 = state_15766__$1;
(statearr_15802_17163[(1)] = (14));

} else {
var statearr_15803_17164 = state_15766__$1;
(statearr_15803_17164[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (5))){
var inst_15721 = (state_15766[(13)]);
var state_15766__$1 = state_15766;
var statearr_15804_17165 = state_15766__$1;
(statearr_15804_17165[(2)] = inst_15721);

(statearr_15804_17165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (14))){
var inst_15737 = (state_15766[(19)]);
var state_15766__$1 = state_15766;
var statearr_15805_17166 = state_15766__$1;
(statearr_15805_17166[(2)] = inst_15737);

(statearr_15805_17166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (26))){
var inst_15756 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15806_17167 = state_15766__$1;
(statearr_15806_17167[(2)] = inst_15756);

(statearr_15806_17167[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (16))){
var inst_15748 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
if(cljs.core.truth_(inst_15748)){
var statearr_15807_17168 = state_15766__$1;
(statearr_15807_17168[(1)] = (20));

} else {
var statearr_15808_17169 = state_15766__$1;
(statearr_15808_17169[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (10))){
var inst_15762 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15809_17170 = state_15766__$1;
(statearr_15809_17170[(2)] = inst_15762);

(statearr_15809_17170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (18))){
var inst_15740 = (state_15766[(16)]);
var state_15766__$1 = state_15766;
var statearr_15810_17171 = state_15766__$1;
(statearr_15810_17171[(2)] = inst_15740);

(statearr_15810_17171[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (8))){
var inst_15719 = (state_15766[(7)]);
var inst_15728 = (inst_15719 == null);
var state_15766__$1 = state_15766;
if(cljs.core.truth_(inst_15728)){
var statearr_15811_17172 = state_15766__$1;
(statearr_15811_17172[(1)] = (11));

} else {
var statearr_15812_17173 = state_15766__$1;
(statearr_15812_17173[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14638__auto__ = null;
var cljs$core$async$mix_$_state_machine__14638__auto____0 = (function (){
var statearr_15813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15813[(0)] = cljs$core$async$mix_$_state_machine__14638__auto__);

(statearr_15813[(1)] = (1));

return statearr_15813;
});
var cljs$core$async$mix_$_state_machine__14638__auto____1 = (function (state_15766){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_15766);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15814){var ex__14641__auto__ = e15814;
var statearr_15815_17174 = state_15766;
(statearr_15815_17174[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_15766[(4)]))){
var statearr_15816_17175 = state_15766;
(statearr_15816_17175[(1)] = cljs.core.first((state_15766[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17176 = state_15766;
state_15766 = G__17176;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14638__auto__ = function(state_15766){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14638__auto____1.call(this,state_15766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14638__auto____0;
cljs$core$async$mix_$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14638__auto____1;
return cljs$core$async$mix_$_state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_15818 = f__14709__auto__();
(statearr_15818[(6)] = c__14708__auto___17137);

return statearr_15818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17177 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17177(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17178 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17178(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17179 = (function() {
var G__17180 = null;
var G__17180__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17180__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17180 = function(p,v){
switch(arguments.length){
case 1:
return G__17180__1.call(this,p);
case 2:
return G__17180__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17180.cljs$core$IFn$_invoke$arity$1 = G__17180__1;
G__17180.cljs$core$IFn$_invoke$arity$2 = G__17180__2;
return G__17180;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15832 = arguments.length;
switch (G__15832) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17179(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17179(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15841 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15842){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15842 = meta15842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15843,meta15842__$1){
var self__ = this;
var _15843__$1 = this;
return (new cljs.core.async.t_cljs$core$async15841(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15842__$1));
}));

(cljs.core.async.t_cljs$core$async15841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15843){
var self__ = this;
var _15843__$1 = this;
return self__.meta15842;
}));

(cljs.core.async.t_cljs$core$async15841.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15841.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15841.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15841.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15841.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15841.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15841.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15842","meta15842",1041659350,null)], null);
}));

(cljs.core.async.t_cljs$core$async15841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15841");

(cljs.core.async.t_cljs$core$async15841.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async15841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15841.
 */
cljs.core.async.__GT_t_cljs$core$async15841 = (function cljs$core$async$__GT_t_cljs$core$async15841(ch,topic_fn,buf_fn,mults,ensure_mult,meta15842){
return (new cljs.core.async.t_cljs$core$async15841(ch,topic_fn,buf_fn,mults,ensure_mult,meta15842));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15837 = arguments.length;
switch (G__15837) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15835_SHARP_){
if(cljs.core.truth_((p1__15835_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15835_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15835_SHARP_.call(null,topic)))){
return p1__15835_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15835_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15841(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14708__auto___17186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_15938){
var state_val_15939 = (state_15938[(1)]);
if((state_val_15939 === (7))){
var inst_15931 = (state_15938[(2)]);
var state_15938__$1 = state_15938;
var statearr_15944_17187 = state_15938__$1;
(statearr_15944_17187[(2)] = inst_15931);

(statearr_15944_17187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (20))){
var state_15938__$1 = state_15938;
var statearr_15946_17188 = state_15938__$1;
(statearr_15946_17188[(2)] = null);

(statearr_15946_17188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (1))){
var state_15938__$1 = state_15938;
var statearr_15947_17189 = state_15938__$1;
(statearr_15947_17189[(2)] = null);

(statearr_15947_17189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (24))){
var inst_15914 = (state_15938[(7)]);
var inst_15923 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15914);
var state_15938__$1 = state_15938;
var statearr_15950_17190 = state_15938__$1;
(statearr_15950_17190[(2)] = inst_15923);

(statearr_15950_17190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (4))){
var inst_15862 = (state_15938[(8)]);
var inst_15862__$1 = (state_15938[(2)]);
var inst_15863 = (inst_15862__$1 == null);
var state_15938__$1 = (function (){var statearr_15952 = state_15938;
(statearr_15952[(8)] = inst_15862__$1);

return statearr_15952;
})();
if(cljs.core.truth_(inst_15863)){
var statearr_15953_17191 = state_15938__$1;
(statearr_15953_17191[(1)] = (5));

} else {
var statearr_15954_17192 = state_15938__$1;
(statearr_15954_17192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (15))){
var inst_15907 = (state_15938[(2)]);
var state_15938__$1 = state_15938;
var statearr_15956_17193 = state_15938__$1;
(statearr_15956_17193[(2)] = inst_15907);

(statearr_15956_17193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (21))){
var inst_15928 = (state_15938[(2)]);
var state_15938__$1 = (function (){var statearr_15957 = state_15938;
(statearr_15957[(9)] = inst_15928);

return statearr_15957;
})();
var statearr_15958_17194 = state_15938__$1;
(statearr_15958_17194[(2)] = null);

(statearr_15958_17194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (13))){
var inst_15886 = (state_15938[(10)]);
var inst_15890 = cljs.core.chunked_seq_QMARK_(inst_15886);
var state_15938__$1 = state_15938;
if(inst_15890){
var statearr_15959_17195 = state_15938__$1;
(statearr_15959_17195[(1)] = (16));

} else {
var statearr_15960_17196 = state_15938__$1;
(statearr_15960_17196[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (22))){
var inst_15920 = (state_15938[(2)]);
var state_15938__$1 = state_15938;
if(cljs.core.truth_(inst_15920)){
var statearr_15961_17197 = state_15938__$1;
(statearr_15961_17197[(1)] = (23));

} else {
var statearr_15962_17198 = state_15938__$1;
(statearr_15962_17198[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (6))){
var inst_15862 = (state_15938[(8)]);
var inst_15914 = (state_15938[(7)]);
var inst_15916 = (state_15938[(11)]);
var inst_15914__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15862) : topic_fn.call(null,inst_15862));
var inst_15915 = cljs.core.deref(mults);
var inst_15916__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15915,inst_15914__$1);
var state_15938__$1 = (function (){var statearr_15963 = state_15938;
(statearr_15963[(7)] = inst_15914__$1);

(statearr_15963[(11)] = inst_15916__$1);

return statearr_15963;
})();
if(cljs.core.truth_(inst_15916__$1)){
var statearr_15964_17199 = state_15938__$1;
(statearr_15964_17199[(1)] = (19));

} else {
var statearr_15965_17200 = state_15938__$1;
(statearr_15965_17200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (25))){
var inst_15925 = (state_15938[(2)]);
var state_15938__$1 = state_15938;
var statearr_15966_17201 = state_15938__$1;
(statearr_15966_17201[(2)] = inst_15925);

(statearr_15966_17201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (17))){
var inst_15886 = (state_15938[(10)]);
var inst_15898 = cljs.core.first(inst_15886);
var inst_15899 = cljs.core.async.muxch_STAR_(inst_15898);
var inst_15900 = cljs.core.async.close_BANG_(inst_15899);
var inst_15901 = cljs.core.next(inst_15886);
var inst_15872 = inst_15901;
var inst_15873 = null;
var inst_15874 = (0);
var inst_15875 = (0);
var state_15938__$1 = (function (){var statearr_15967 = state_15938;
(statearr_15967[(12)] = inst_15900);

(statearr_15967[(13)] = inst_15872);

(statearr_15967[(14)] = inst_15873);

(statearr_15967[(15)] = inst_15874);

(statearr_15967[(16)] = inst_15875);

return statearr_15967;
})();
var statearr_15968_17202 = state_15938__$1;
(statearr_15968_17202[(2)] = null);

(statearr_15968_17202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (3))){
var inst_15933 = (state_15938[(2)]);
var state_15938__$1 = state_15938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15938__$1,inst_15933);
} else {
if((state_val_15939 === (12))){
var inst_15909 = (state_15938[(2)]);
var state_15938__$1 = state_15938;
var statearr_15969_17203 = state_15938__$1;
(statearr_15969_17203[(2)] = inst_15909);

(statearr_15969_17203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (2))){
var state_15938__$1 = state_15938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15938__$1,(4),ch);
} else {
if((state_val_15939 === (23))){
var state_15938__$1 = state_15938;
var statearr_15972_17204 = state_15938__$1;
(statearr_15972_17204[(2)] = null);

(statearr_15972_17204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (19))){
var inst_15916 = (state_15938[(11)]);
var inst_15862 = (state_15938[(8)]);
var inst_15918 = cljs.core.async.muxch_STAR_(inst_15916);
var state_15938__$1 = state_15938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15938__$1,(22),inst_15918,inst_15862);
} else {
if((state_val_15939 === (11))){
var inst_15872 = (state_15938[(13)]);
var inst_15886 = (state_15938[(10)]);
var inst_15886__$1 = cljs.core.seq(inst_15872);
var state_15938__$1 = (function (){var statearr_15973 = state_15938;
(statearr_15973[(10)] = inst_15886__$1);

return statearr_15973;
})();
if(inst_15886__$1){
var statearr_15974_17205 = state_15938__$1;
(statearr_15974_17205[(1)] = (13));

} else {
var statearr_15975_17206 = state_15938__$1;
(statearr_15975_17206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (9))){
var inst_15911 = (state_15938[(2)]);
var state_15938__$1 = state_15938;
var statearr_15976_17207 = state_15938__$1;
(statearr_15976_17207[(2)] = inst_15911);

(statearr_15976_17207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (5))){
var inst_15869 = cljs.core.deref(mults);
var inst_15870 = cljs.core.vals(inst_15869);
var inst_15871 = cljs.core.seq(inst_15870);
var inst_15872 = inst_15871;
var inst_15873 = null;
var inst_15874 = (0);
var inst_15875 = (0);
var state_15938__$1 = (function (){var statearr_15977 = state_15938;
(statearr_15977[(13)] = inst_15872);

(statearr_15977[(14)] = inst_15873);

(statearr_15977[(15)] = inst_15874);

(statearr_15977[(16)] = inst_15875);

return statearr_15977;
})();
var statearr_15978_17208 = state_15938__$1;
(statearr_15978_17208[(2)] = null);

(statearr_15978_17208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (14))){
var state_15938__$1 = state_15938;
var statearr_15982_17209 = state_15938__$1;
(statearr_15982_17209[(2)] = null);

(statearr_15982_17209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (16))){
var inst_15886 = (state_15938[(10)]);
var inst_15893 = cljs.core.chunk_first(inst_15886);
var inst_15894 = cljs.core.chunk_rest(inst_15886);
var inst_15895 = cljs.core.count(inst_15893);
var inst_15872 = inst_15894;
var inst_15873 = inst_15893;
var inst_15874 = inst_15895;
var inst_15875 = (0);
var state_15938__$1 = (function (){var statearr_15983 = state_15938;
(statearr_15983[(13)] = inst_15872);

(statearr_15983[(14)] = inst_15873);

(statearr_15983[(15)] = inst_15874);

(statearr_15983[(16)] = inst_15875);

return statearr_15983;
})();
var statearr_15984_17210 = state_15938__$1;
(statearr_15984_17210[(2)] = null);

(statearr_15984_17210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (10))){
var inst_15873 = (state_15938[(14)]);
var inst_15875 = (state_15938[(16)]);
var inst_15872 = (state_15938[(13)]);
var inst_15874 = (state_15938[(15)]);
var inst_15880 = cljs.core._nth(inst_15873,inst_15875);
var inst_15881 = cljs.core.async.muxch_STAR_(inst_15880);
var inst_15882 = cljs.core.async.close_BANG_(inst_15881);
var inst_15883 = (inst_15875 + (1));
var tmp15979 = inst_15872;
var tmp15980 = inst_15873;
var tmp15981 = inst_15874;
var inst_15872__$1 = tmp15979;
var inst_15873__$1 = tmp15980;
var inst_15874__$1 = tmp15981;
var inst_15875__$1 = inst_15883;
var state_15938__$1 = (function (){var statearr_15987 = state_15938;
(statearr_15987[(17)] = inst_15882);

(statearr_15987[(13)] = inst_15872__$1);

(statearr_15987[(14)] = inst_15873__$1);

(statearr_15987[(15)] = inst_15874__$1);

(statearr_15987[(16)] = inst_15875__$1);

return statearr_15987;
})();
var statearr_15989_17211 = state_15938__$1;
(statearr_15989_17211[(2)] = null);

(statearr_15989_17211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (18))){
var inst_15904 = (state_15938[(2)]);
var state_15938__$1 = state_15938;
var statearr_15990_17212 = state_15938__$1;
(statearr_15990_17212[(2)] = inst_15904);

(statearr_15990_17212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15939 === (8))){
var inst_15875 = (state_15938[(16)]);
var inst_15874 = (state_15938[(15)]);
var inst_15877 = (inst_15875 < inst_15874);
var inst_15878 = inst_15877;
var state_15938__$1 = state_15938;
if(cljs.core.truth_(inst_15878)){
var statearr_15991_17215 = state_15938__$1;
(statearr_15991_17215[(1)] = (10));

} else {
var statearr_15992_17216 = state_15938__$1;
(statearr_15992_17216[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14638__auto__ = null;
var cljs$core$async$state_machine__14638__auto____0 = (function (){
var statearr_15996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15996[(0)] = cljs$core$async$state_machine__14638__auto__);

(statearr_15996[(1)] = (1));

return statearr_15996;
});
var cljs$core$async$state_machine__14638__auto____1 = (function (state_15938){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_15938);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e15997){var ex__14641__auto__ = e15997;
var statearr_15998_17219 = state_15938;
(statearr_15998_17219[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_15938[(4)]))){
var statearr_15999_17220 = state_15938;
(statearr_15999_17220[(1)] = cljs.core.first((state_15938[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17221 = state_15938;
state_15938 = G__17221;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$state_machine__14638__auto__ = function(state_15938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14638__auto____1.call(this,state_15938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14638__auto____0;
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14638__auto____1;
return cljs$core$async$state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_16002 = f__14709__auto__();
(statearr_16002[(6)] = c__14708__auto___17186);

return statearr_16002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16004 = arguments.length;
switch (G__16004) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16018 = arguments.length;
switch (G__16018) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16020 = arguments.length;
switch (G__16020) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14708__auto___17235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_16075){
var state_val_16076 = (state_16075[(1)]);
if((state_val_16076 === (7))){
var state_16075__$1 = state_16075;
var statearr_16077_17236 = state_16075__$1;
(statearr_16077_17236[(2)] = null);

(statearr_16077_17236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (1))){
var state_16075__$1 = state_16075;
var statearr_16078_17237 = state_16075__$1;
(statearr_16078_17237[(2)] = null);

(statearr_16078_17237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (4))){
var inst_16031 = (state_16075[(7)]);
var inst_16030 = (state_16075[(8)]);
var inst_16033 = (inst_16031 < inst_16030);
var state_16075__$1 = state_16075;
if(cljs.core.truth_(inst_16033)){
var statearr_16079_17241 = state_16075__$1;
(statearr_16079_17241[(1)] = (6));

} else {
var statearr_16080_17242 = state_16075__$1;
(statearr_16080_17242[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (15))){
var inst_16060 = (state_16075[(9)]);
var inst_16065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16060);
var state_16075__$1 = state_16075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16075__$1,(17),out,inst_16065);
} else {
if((state_val_16076 === (13))){
var inst_16060 = (state_16075[(9)]);
var inst_16060__$1 = (state_16075[(2)]);
var inst_16061 = cljs.core.some(cljs.core.nil_QMARK_,inst_16060__$1);
var state_16075__$1 = (function (){var statearr_16093 = state_16075;
(statearr_16093[(9)] = inst_16060__$1);

return statearr_16093;
})();
if(cljs.core.truth_(inst_16061)){
var statearr_16094_17243 = state_16075__$1;
(statearr_16094_17243[(1)] = (14));

} else {
var statearr_16095_17244 = state_16075__$1;
(statearr_16095_17244[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (6))){
var state_16075__$1 = state_16075;
var statearr_16096_17245 = state_16075__$1;
(statearr_16096_17245[(2)] = null);

(statearr_16096_17245[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (17))){
var inst_16067 = (state_16075[(2)]);
var state_16075__$1 = (function (){var statearr_16098 = state_16075;
(statearr_16098[(10)] = inst_16067);

return statearr_16098;
})();
var statearr_16099_17246 = state_16075__$1;
(statearr_16099_17246[(2)] = null);

(statearr_16099_17246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (3))){
var inst_16072 = (state_16075[(2)]);
var state_16075__$1 = state_16075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16075__$1,inst_16072);
} else {
if((state_val_16076 === (12))){
var _ = (function (){var statearr_16100 = state_16075;
(statearr_16100[(4)] = cljs.core.rest((state_16075[(4)])));

return statearr_16100;
})();
var state_16075__$1 = state_16075;
var ex16097 = (state_16075__$1[(2)]);
var statearr_16101_17250 = state_16075__$1;
(statearr_16101_17250[(5)] = ex16097);


if((ex16097 instanceof Object)){
var statearr_16103_17251 = state_16075__$1;
(statearr_16103_17251[(1)] = (11));

(statearr_16103_17251[(5)] = null);

} else {
throw ex16097;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (2))){
var inst_16027 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16030 = cnt;
var inst_16031 = (0);
var state_16075__$1 = (function (){var statearr_16104 = state_16075;
(statearr_16104[(11)] = inst_16027);

(statearr_16104[(8)] = inst_16030);

(statearr_16104[(7)] = inst_16031);

return statearr_16104;
})();
var statearr_16105_17252 = state_16075__$1;
(statearr_16105_17252[(2)] = null);

(statearr_16105_17252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (11))){
var inst_16039 = (state_16075[(2)]);
var inst_16040 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16075__$1 = (function (){var statearr_16106 = state_16075;
(statearr_16106[(12)] = inst_16039);

return statearr_16106;
})();
var statearr_16107_17254 = state_16075__$1;
(statearr_16107_17254[(2)] = inst_16040);

(statearr_16107_17254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (9))){
var inst_16031 = (state_16075[(7)]);
var _ = (function (){var statearr_16110 = state_16075;
(statearr_16110[(4)] = cljs.core.cons((12),(state_16075[(4)])));

return statearr_16110;
})();
var inst_16046 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16031) : chs__$1.call(null,inst_16031));
var inst_16047 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16031) : done.call(null,inst_16031));
var inst_16048 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16046,inst_16047);
var ___$1 = (function (){var statearr_16111 = state_16075;
(statearr_16111[(4)] = cljs.core.rest((state_16075[(4)])));

return statearr_16111;
})();
var state_16075__$1 = state_16075;
var statearr_16112_17255 = state_16075__$1;
(statearr_16112_17255[(2)] = inst_16048);

(statearr_16112_17255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (5))){
var inst_16058 = (state_16075[(2)]);
var state_16075__$1 = (function (){var statearr_16115 = state_16075;
(statearr_16115[(13)] = inst_16058);

return statearr_16115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16075__$1,(13),dchan);
} else {
if((state_val_16076 === (14))){
var inst_16063 = cljs.core.async.close_BANG_(out);
var state_16075__$1 = state_16075;
var statearr_16120_17256 = state_16075__$1;
(statearr_16120_17256[(2)] = inst_16063);

(statearr_16120_17256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (16))){
var inst_16070 = (state_16075[(2)]);
var state_16075__$1 = state_16075;
var statearr_16122_17257 = state_16075__$1;
(statearr_16122_17257[(2)] = inst_16070);

(statearr_16122_17257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (10))){
var inst_16031 = (state_16075[(7)]);
var inst_16051 = (state_16075[(2)]);
var inst_16052 = (inst_16031 + (1));
var inst_16031__$1 = inst_16052;
var state_16075__$1 = (function (){var statearr_16125 = state_16075;
(statearr_16125[(14)] = inst_16051);

(statearr_16125[(7)] = inst_16031__$1);

return statearr_16125;
})();
var statearr_16126_17258 = state_16075__$1;
(statearr_16126_17258[(2)] = null);

(statearr_16126_17258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16076 === (8))){
var inst_16056 = (state_16075[(2)]);
var state_16075__$1 = state_16075;
var statearr_16127_17262 = state_16075__$1;
(statearr_16127_17262[(2)] = inst_16056);

(statearr_16127_17262[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14638__auto__ = null;
var cljs$core$async$state_machine__14638__auto____0 = (function (){
var statearr_16131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16131[(0)] = cljs$core$async$state_machine__14638__auto__);

(statearr_16131[(1)] = (1));

return statearr_16131;
});
var cljs$core$async$state_machine__14638__auto____1 = (function (state_16075){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_16075);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e16132){var ex__14641__auto__ = e16132;
var statearr_16133_17263 = state_16075;
(statearr_16133_17263[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_16075[(4)]))){
var statearr_16135_17264 = state_16075;
(statearr_16135_17264[(1)] = cljs.core.first((state_16075[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17265 = state_16075;
state_16075 = G__17265;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$state_machine__14638__auto__ = function(state_16075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14638__auto____1.call(this,state_16075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14638__auto____0;
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14638__auto____1;
return cljs$core$async$state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_16136 = f__14709__auto__();
(statearr_16136[(6)] = c__14708__auto___17235);

return statearr_16136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16141 = arguments.length;
switch (G__16141) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14708__auto___17267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_16184){
var state_val_16185 = (state_16184[(1)]);
if((state_val_16185 === (7))){
var inst_16156 = (state_16184[(7)]);
var inst_16157 = (state_16184[(8)]);
var inst_16156__$1 = (state_16184[(2)]);
var inst_16157__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16156__$1,(0),null);
var inst_16158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16156__$1,(1),null);
var inst_16162 = (inst_16157__$1 == null);
var state_16184__$1 = (function (){var statearr_16190 = state_16184;
(statearr_16190[(7)] = inst_16156__$1);

(statearr_16190[(8)] = inst_16157__$1);

(statearr_16190[(9)] = inst_16158);

return statearr_16190;
})();
if(cljs.core.truth_(inst_16162)){
var statearr_16191_17268 = state_16184__$1;
(statearr_16191_17268[(1)] = (8));

} else {
var statearr_16192_17269 = state_16184__$1;
(statearr_16192_17269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (1))){
var inst_16144 = cljs.core.vec(chs);
var inst_16145 = inst_16144;
var state_16184__$1 = (function (){var statearr_16193 = state_16184;
(statearr_16193[(10)] = inst_16145);

return statearr_16193;
})();
var statearr_16194_17270 = state_16184__$1;
(statearr_16194_17270[(2)] = null);

(statearr_16194_17270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (4))){
var inst_16145 = (state_16184[(10)]);
var state_16184__$1 = state_16184;
return cljs.core.async.ioc_alts_BANG_(state_16184__$1,(7),inst_16145);
} else {
if((state_val_16185 === (6))){
var inst_16180 = (state_16184[(2)]);
var state_16184__$1 = state_16184;
var statearr_16195_17271 = state_16184__$1;
(statearr_16195_17271[(2)] = inst_16180);

(statearr_16195_17271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (3))){
var inst_16182 = (state_16184[(2)]);
var state_16184__$1 = state_16184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16184__$1,inst_16182);
} else {
if((state_val_16185 === (2))){
var inst_16145 = (state_16184[(10)]);
var inst_16149 = cljs.core.count(inst_16145);
var inst_16150 = (inst_16149 > (0));
var state_16184__$1 = state_16184;
if(cljs.core.truth_(inst_16150)){
var statearr_16198_17274 = state_16184__$1;
(statearr_16198_17274[(1)] = (4));

} else {
var statearr_16199_17275 = state_16184__$1;
(statearr_16199_17275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (11))){
var inst_16145 = (state_16184[(10)]);
var inst_16173 = (state_16184[(2)]);
var tmp16196 = inst_16145;
var inst_16145__$1 = tmp16196;
var state_16184__$1 = (function (){var statearr_16201 = state_16184;
(statearr_16201[(11)] = inst_16173);

(statearr_16201[(10)] = inst_16145__$1);

return statearr_16201;
})();
var statearr_16202_17276 = state_16184__$1;
(statearr_16202_17276[(2)] = null);

(statearr_16202_17276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (9))){
var inst_16157 = (state_16184[(8)]);
var state_16184__$1 = state_16184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16184__$1,(11),out,inst_16157);
} else {
if((state_val_16185 === (5))){
var inst_16178 = cljs.core.async.close_BANG_(out);
var state_16184__$1 = state_16184;
var statearr_16204_17277 = state_16184__$1;
(statearr_16204_17277[(2)] = inst_16178);

(statearr_16204_17277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (10))){
var inst_16176 = (state_16184[(2)]);
var state_16184__$1 = state_16184;
var statearr_16205_17278 = state_16184__$1;
(statearr_16205_17278[(2)] = inst_16176);

(statearr_16205_17278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16185 === (8))){
var inst_16145 = (state_16184[(10)]);
var inst_16156 = (state_16184[(7)]);
var inst_16157 = (state_16184[(8)]);
var inst_16158 = (state_16184[(9)]);
var inst_16165 = (function (){var cs = inst_16145;
var vec__16152 = inst_16156;
var v = inst_16157;
var c = inst_16158;
return (function (p1__16138_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16138_SHARP_);
});
})();
var inst_16168 = cljs.core.filterv(inst_16165,inst_16145);
var inst_16145__$1 = inst_16168;
var state_16184__$1 = (function (){var statearr_16206 = state_16184;
(statearr_16206[(10)] = inst_16145__$1);

return statearr_16206;
})();
var statearr_16207_17279 = state_16184__$1;
(statearr_16207_17279[(2)] = null);

(statearr_16207_17279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14638__auto__ = null;
var cljs$core$async$state_machine__14638__auto____0 = (function (){
var statearr_16208 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16208[(0)] = cljs$core$async$state_machine__14638__auto__);

(statearr_16208[(1)] = (1));

return statearr_16208;
});
var cljs$core$async$state_machine__14638__auto____1 = (function (state_16184){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_16184);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e16209){var ex__14641__auto__ = e16209;
var statearr_16210_17280 = state_16184;
(statearr_16210_17280[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_16184[(4)]))){
var statearr_16211_17281 = state_16184;
(statearr_16211_17281[(1)] = cljs.core.first((state_16184[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17282 = state_16184;
state_16184 = G__17282;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$state_machine__14638__auto__ = function(state_16184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14638__auto____1.call(this,state_16184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14638__auto____0;
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14638__auto____1;
return cljs$core$async$state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_16213 = f__14709__auto__();
(statearr_16213[(6)] = c__14708__auto___17267);

return statearr_16213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16216 = arguments.length;
switch (G__16216) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14708__auto___17284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_16242){
var state_val_16243 = (state_16242[(1)]);
if((state_val_16243 === (7))){
var inst_16224 = (state_16242[(7)]);
var inst_16224__$1 = (state_16242[(2)]);
var inst_16225 = (inst_16224__$1 == null);
var inst_16226 = cljs.core.not(inst_16225);
var state_16242__$1 = (function (){var statearr_16245 = state_16242;
(statearr_16245[(7)] = inst_16224__$1);

return statearr_16245;
})();
if(inst_16226){
var statearr_16246_17285 = state_16242__$1;
(statearr_16246_17285[(1)] = (8));

} else {
var statearr_16247_17286 = state_16242__$1;
(statearr_16247_17286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16243 === (1))){
var inst_16218 = (0);
var state_16242__$1 = (function (){var statearr_16248 = state_16242;
(statearr_16248[(8)] = inst_16218);

return statearr_16248;
})();
var statearr_16249_17287 = state_16242__$1;
(statearr_16249_17287[(2)] = null);

(statearr_16249_17287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16243 === (4))){
var state_16242__$1 = state_16242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16242__$1,(7),ch);
} else {
if((state_val_16243 === (6))){
var inst_16237 = (state_16242[(2)]);
var state_16242__$1 = state_16242;
var statearr_16250_17288 = state_16242__$1;
(statearr_16250_17288[(2)] = inst_16237);

(statearr_16250_17288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16243 === (3))){
var inst_16239 = (state_16242[(2)]);
var inst_16240 = cljs.core.async.close_BANG_(out);
var state_16242__$1 = (function (){var statearr_16251 = state_16242;
(statearr_16251[(9)] = inst_16239);

return statearr_16251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16242__$1,inst_16240);
} else {
if((state_val_16243 === (2))){
var inst_16218 = (state_16242[(8)]);
var inst_16220 = (inst_16218 < n);
var state_16242__$1 = state_16242;
if(cljs.core.truth_(inst_16220)){
var statearr_16252_17289 = state_16242__$1;
(statearr_16252_17289[(1)] = (4));

} else {
var statearr_16253_17290 = state_16242__$1;
(statearr_16253_17290[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16243 === (11))){
var inst_16218 = (state_16242[(8)]);
var inst_16229 = (state_16242[(2)]);
var inst_16230 = (inst_16218 + (1));
var inst_16218__$1 = inst_16230;
var state_16242__$1 = (function (){var statearr_16254 = state_16242;
(statearr_16254[(10)] = inst_16229);

(statearr_16254[(8)] = inst_16218__$1);

return statearr_16254;
})();
var statearr_16255_17291 = state_16242__$1;
(statearr_16255_17291[(2)] = null);

(statearr_16255_17291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16243 === (9))){
var state_16242__$1 = state_16242;
var statearr_16256_17292 = state_16242__$1;
(statearr_16256_17292[(2)] = null);

(statearr_16256_17292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16243 === (5))){
var state_16242__$1 = state_16242;
var statearr_16257_17293 = state_16242__$1;
(statearr_16257_17293[(2)] = null);

(statearr_16257_17293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16243 === (10))){
var inst_16234 = (state_16242[(2)]);
var state_16242__$1 = state_16242;
var statearr_16259_17294 = state_16242__$1;
(statearr_16259_17294[(2)] = inst_16234);

(statearr_16259_17294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16243 === (8))){
var inst_16224 = (state_16242[(7)]);
var state_16242__$1 = state_16242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16242__$1,(11),out,inst_16224);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14638__auto__ = null;
var cljs$core$async$state_machine__14638__auto____0 = (function (){
var statearr_16261 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16261[(0)] = cljs$core$async$state_machine__14638__auto__);

(statearr_16261[(1)] = (1));

return statearr_16261;
});
var cljs$core$async$state_machine__14638__auto____1 = (function (state_16242){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_16242);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e16262){var ex__14641__auto__ = e16262;
var statearr_16263_17295 = state_16242;
(statearr_16263_17295[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_16242[(4)]))){
var statearr_16264_17296 = state_16242;
(statearr_16264_17296[(1)] = cljs.core.first((state_16242[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17297 = state_16242;
state_16242 = G__17297;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$state_machine__14638__auto__ = function(state_16242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14638__auto____1.call(this,state_16242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14638__auto____0;
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14638__auto____1;
return cljs$core$async$state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_16265 = f__14709__auto__();
(statearr_16265[(6)] = c__14708__auto___17284);

return statearr_16265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16270 = (function (f,ch,meta16268,_,fn1,meta16271){
this.f = f;
this.ch = ch;
this.meta16268 = meta16268;
this._ = _;
this.fn1 = fn1;
this.meta16271 = meta16271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16272,meta16271__$1){
var self__ = this;
var _16272__$1 = this;
return (new cljs.core.async.t_cljs$core$async16270(self__.f,self__.ch,self__.meta16268,self__._,self__.fn1,meta16271__$1));
}));

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16272){
var self__ = this;
var _16272__$1 = this;
return self__.meta16271;
}));

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16266_SHARP_){
var G__16275 = (((p1__16266_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16266_SHARP_) : self__.f.call(null,p1__16266_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16275) : f1.call(null,G__16275));
});
}));

(cljs.core.async.t_cljs$core$async16270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16268","meta16268",1328083851,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16267","cljs.core.async/t_cljs$core$async16267",1105060999,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16271","meta16271",1663436169,null)], null);
}));

(cljs.core.async.t_cljs$core$async16270.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16270");

(cljs.core.async.t_cljs$core$async16270.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16270");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16270.
 */
cljs.core.async.__GT_t_cljs$core$async16270 = (function cljs$core$async$__GT_t_cljs$core$async16270(f,ch,meta16268,_,fn1,meta16271){
return (new cljs.core.async.t_cljs$core$async16270(f,ch,meta16268,_,fn1,meta16271));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16267 = (function (f,ch,meta16268){
this.f = f;
this.ch = ch;
this.meta16268 = meta16268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16269,meta16268__$1){
var self__ = this;
var _16269__$1 = this;
return (new cljs.core.async.t_cljs$core$async16267(self__.f,self__.ch,meta16268__$1));
}));

(cljs.core.async.t_cljs$core$async16267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16269){
var self__ = this;
var _16269__$1 = this;
return self__.meta16268;
}));

(cljs.core.async.t_cljs$core$async16267.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16267.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16267.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16267.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16267.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16270(self__.f,self__.ch,self__.meta16268,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16276 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16276) : self__.f.call(null,G__16276));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16267.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16267.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16268","meta16268",1328083851,null)], null);
}));

(cljs.core.async.t_cljs$core$async16267.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16267");

(cljs.core.async.t_cljs$core$async16267.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16267");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16267.
 */
cljs.core.async.__GT_t_cljs$core$async16267 = (function cljs$core$async$__GT_t_cljs$core$async16267(f,ch,meta16268){
return (new cljs.core.async.t_cljs$core$async16267(f,ch,meta16268));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16267(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16281 = (function (f,ch,meta16282){
this.f = f;
this.ch = ch;
this.meta16282 = meta16282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16283,meta16282__$1){
var self__ = this;
var _16283__$1 = this;
return (new cljs.core.async.t_cljs$core$async16281(self__.f,self__.ch,meta16282__$1));
}));

(cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16283){
var self__ = this;
var _16283__$1 = this;
return self__.meta16282;
}));

(cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16282","meta16282",-1775097429,null)], null);
}));

(cljs.core.async.t_cljs$core$async16281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16281");

(cljs.core.async.t_cljs$core$async16281.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16281.
 */
cljs.core.async.__GT_t_cljs$core$async16281 = (function cljs$core$async$__GT_t_cljs$core$async16281(f,ch,meta16282){
return (new cljs.core.async.t_cljs$core$async16281(f,ch,meta16282));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16281(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16287 = (function (p,ch,meta16288){
this.p = p;
this.ch = ch;
this.meta16288 = meta16288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16289,meta16288__$1){
var self__ = this;
var _16289__$1 = this;
return (new cljs.core.async.t_cljs$core$async16287(self__.p,self__.ch,meta16288__$1));
}));

(cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16289){
var self__ = this;
var _16289__$1 = this;
return self__.meta16288;
}));

(cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16288","meta16288",1241431705,null)], null);
}));

(cljs.core.async.t_cljs$core$async16287.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16287");

(cljs.core.async.t_cljs$core$async16287.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async16287");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16287.
 */
cljs.core.async.__GT_t_cljs$core$async16287 = (function cljs$core$async$__GT_t_cljs$core$async16287(p,ch,meta16288){
return (new cljs.core.async.t_cljs$core$async16287(p,ch,meta16288));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16287(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16293 = arguments.length;
switch (G__16293) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14708__auto___17300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_16316){
var state_val_16317 = (state_16316[(1)]);
if((state_val_16317 === (7))){
var inst_16312 = (state_16316[(2)]);
var state_16316__$1 = state_16316;
var statearr_16318_17301 = state_16316__$1;
(statearr_16318_17301[(2)] = inst_16312);

(statearr_16318_17301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (1))){
var state_16316__$1 = state_16316;
var statearr_16320_17302 = state_16316__$1;
(statearr_16320_17302[(2)] = null);

(statearr_16320_17302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (4))){
var inst_16298 = (state_16316[(7)]);
var inst_16298__$1 = (state_16316[(2)]);
var inst_16299 = (inst_16298__$1 == null);
var state_16316__$1 = (function (){var statearr_16321 = state_16316;
(statearr_16321[(7)] = inst_16298__$1);

return statearr_16321;
})();
if(cljs.core.truth_(inst_16299)){
var statearr_16322_17303 = state_16316__$1;
(statearr_16322_17303[(1)] = (5));

} else {
var statearr_16323_17304 = state_16316__$1;
(statearr_16323_17304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (6))){
var inst_16298 = (state_16316[(7)]);
var inst_16303 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16298) : p.call(null,inst_16298));
var state_16316__$1 = state_16316;
if(cljs.core.truth_(inst_16303)){
var statearr_16324_17305 = state_16316__$1;
(statearr_16324_17305[(1)] = (8));

} else {
var statearr_16325_17306 = state_16316__$1;
(statearr_16325_17306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (3))){
var inst_16314 = (state_16316[(2)]);
var state_16316__$1 = state_16316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16316__$1,inst_16314);
} else {
if((state_val_16317 === (2))){
var state_16316__$1 = state_16316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16316__$1,(4),ch);
} else {
if((state_val_16317 === (11))){
var inst_16306 = (state_16316[(2)]);
var state_16316__$1 = state_16316;
var statearr_16331_17307 = state_16316__$1;
(statearr_16331_17307[(2)] = inst_16306);

(statearr_16331_17307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (9))){
var state_16316__$1 = state_16316;
var statearr_16332_17308 = state_16316__$1;
(statearr_16332_17308[(2)] = null);

(statearr_16332_17308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (5))){
var inst_16301 = cljs.core.async.close_BANG_(out);
var state_16316__$1 = state_16316;
var statearr_16334_17309 = state_16316__$1;
(statearr_16334_17309[(2)] = inst_16301);

(statearr_16334_17309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (10))){
var inst_16309 = (state_16316[(2)]);
var state_16316__$1 = (function (){var statearr_16337 = state_16316;
(statearr_16337[(8)] = inst_16309);

return statearr_16337;
})();
var statearr_16340_17310 = state_16316__$1;
(statearr_16340_17310[(2)] = null);

(statearr_16340_17310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16317 === (8))){
var inst_16298 = (state_16316[(7)]);
var state_16316__$1 = state_16316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16316__$1,(11),out,inst_16298);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14638__auto__ = null;
var cljs$core$async$state_machine__14638__auto____0 = (function (){
var statearr_16342 = [null,null,null,null,null,null,null,null,null];
(statearr_16342[(0)] = cljs$core$async$state_machine__14638__auto__);

(statearr_16342[(1)] = (1));

return statearr_16342;
});
var cljs$core$async$state_machine__14638__auto____1 = (function (state_16316){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_16316);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e16343){var ex__14641__auto__ = e16343;
var statearr_16345_17311 = state_16316;
(statearr_16345_17311[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_16316[(4)]))){
var statearr_16346_17312 = state_16316;
(statearr_16346_17312[(1)] = cljs.core.first((state_16316[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17313 = state_16316;
state_16316 = G__17313;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$state_machine__14638__auto__ = function(state_16316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14638__auto____1.call(this,state_16316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14638__auto____0;
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14638__auto____1;
return cljs$core$async$state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_16347 = f__14709__auto__();
(statearr_16347[(6)] = c__14708__auto___17300);

return statearr_16347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16349 = arguments.length;
switch (G__16349) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_16422){
var state_val_16423 = (state_16422[(1)]);
if((state_val_16423 === (7))){
var inst_16418 = (state_16422[(2)]);
var state_16422__$1 = state_16422;
var statearr_16429_17315 = state_16422__$1;
(statearr_16429_17315[(2)] = inst_16418);

(statearr_16429_17315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (20))){
var inst_16383 = (state_16422[(7)]);
var inst_16399 = (state_16422[(2)]);
var inst_16400 = cljs.core.next(inst_16383);
var inst_16368 = inst_16400;
var inst_16369 = null;
var inst_16370 = (0);
var inst_16371 = (0);
var state_16422__$1 = (function (){var statearr_16431 = state_16422;
(statearr_16431[(8)] = inst_16399);

(statearr_16431[(9)] = inst_16368);

(statearr_16431[(10)] = inst_16369);

(statearr_16431[(11)] = inst_16370);

(statearr_16431[(12)] = inst_16371);

return statearr_16431;
})();
var statearr_16435_17316 = state_16422__$1;
(statearr_16435_17316[(2)] = null);

(statearr_16435_17316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (1))){
var state_16422__$1 = state_16422;
var statearr_16437_17317 = state_16422__$1;
(statearr_16437_17317[(2)] = null);

(statearr_16437_17317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (4))){
var inst_16357 = (state_16422[(13)]);
var inst_16357__$1 = (state_16422[(2)]);
var inst_16358 = (inst_16357__$1 == null);
var state_16422__$1 = (function (){var statearr_16438 = state_16422;
(statearr_16438[(13)] = inst_16357__$1);

return statearr_16438;
})();
if(cljs.core.truth_(inst_16358)){
var statearr_16439_17320 = state_16422__$1;
(statearr_16439_17320[(1)] = (5));

} else {
var statearr_16440_17321 = state_16422__$1;
(statearr_16440_17321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (15))){
var state_16422__$1 = state_16422;
var statearr_16444_17322 = state_16422__$1;
(statearr_16444_17322[(2)] = null);

(statearr_16444_17322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (21))){
var state_16422__$1 = state_16422;
var statearr_16445_17323 = state_16422__$1;
(statearr_16445_17323[(2)] = null);

(statearr_16445_17323[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (13))){
var inst_16371 = (state_16422[(12)]);
var inst_16368 = (state_16422[(9)]);
var inst_16369 = (state_16422[(10)]);
var inst_16370 = (state_16422[(11)]);
var inst_16379 = (state_16422[(2)]);
var inst_16380 = (inst_16371 + (1));
var tmp16441 = inst_16369;
var tmp16442 = inst_16368;
var tmp16443 = inst_16370;
var inst_16368__$1 = tmp16442;
var inst_16369__$1 = tmp16441;
var inst_16370__$1 = tmp16443;
var inst_16371__$1 = inst_16380;
var state_16422__$1 = (function (){var statearr_16446 = state_16422;
(statearr_16446[(14)] = inst_16379);

(statearr_16446[(9)] = inst_16368__$1);

(statearr_16446[(10)] = inst_16369__$1);

(statearr_16446[(11)] = inst_16370__$1);

(statearr_16446[(12)] = inst_16371__$1);

return statearr_16446;
})();
var statearr_16447_17324 = state_16422__$1;
(statearr_16447_17324[(2)] = null);

(statearr_16447_17324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (22))){
var state_16422__$1 = state_16422;
var statearr_16448_17325 = state_16422__$1;
(statearr_16448_17325[(2)] = null);

(statearr_16448_17325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (6))){
var inst_16357 = (state_16422[(13)]);
var inst_16366 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16357) : f.call(null,inst_16357));
var inst_16367 = cljs.core.seq(inst_16366);
var inst_16368 = inst_16367;
var inst_16369 = null;
var inst_16370 = (0);
var inst_16371 = (0);
var state_16422__$1 = (function (){var statearr_16452 = state_16422;
(statearr_16452[(9)] = inst_16368);

(statearr_16452[(10)] = inst_16369);

(statearr_16452[(11)] = inst_16370);

(statearr_16452[(12)] = inst_16371);

return statearr_16452;
})();
var statearr_16455_17326 = state_16422__$1;
(statearr_16455_17326[(2)] = null);

(statearr_16455_17326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (17))){
var inst_16383 = (state_16422[(7)]);
var inst_16391 = cljs.core.chunk_first(inst_16383);
var inst_16392 = cljs.core.chunk_rest(inst_16383);
var inst_16393 = cljs.core.count(inst_16391);
var inst_16368 = inst_16392;
var inst_16369 = inst_16391;
var inst_16370 = inst_16393;
var inst_16371 = (0);
var state_16422__$1 = (function (){var statearr_16461 = state_16422;
(statearr_16461[(9)] = inst_16368);

(statearr_16461[(10)] = inst_16369);

(statearr_16461[(11)] = inst_16370);

(statearr_16461[(12)] = inst_16371);

return statearr_16461;
})();
var statearr_16464_17328 = state_16422__$1;
(statearr_16464_17328[(2)] = null);

(statearr_16464_17328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (3))){
var inst_16420 = (state_16422[(2)]);
var state_16422__$1 = state_16422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16422__$1,inst_16420);
} else {
if((state_val_16423 === (12))){
var inst_16408 = (state_16422[(2)]);
var state_16422__$1 = state_16422;
var statearr_16466_17329 = state_16422__$1;
(statearr_16466_17329[(2)] = inst_16408);

(statearr_16466_17329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (2))){
var state_16422__$1 = state_16422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16422__$1,(4),in$);
} else {
if((state_val_16423 === (23))){
var inst_16416 = (state_16422[(2)]);
var state_16422__$1 = state_16422;
var statearr_16479_17330 = state_16422__$1;
(statearr_16479_17330[(2)] = inst_16416);

(statearr_16479_17330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (19))){
var inst_16403 = (state_16422[(2)]);
var state_16422__$1 = state_16422;
var statearr_16480_17331 = state_16422__$1;
(statearr_16480_17331[(2)] = inst_16403);

(statearr_16480_17331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (11))){
var inst_16368 = (state_16422[(9)]);
var inst_16383 = (state_16422[(7)]);
var inst_16383__$1 = cljs.core.seq(inst_16368);
var state_16422__$1 = (function (){var statearr_16481 = state_16422;
(statearr_16481[(7)] = inst_16383__$1);

return statearr_16481;
})();
if(inst_16383__$1){
var statearr_16482_17336 = state_16422__$1;
(statearr_16482_17336[(1)] = (14));

} else {
var statearr_16483_17337 = state_16422__$1;
(statearr_16483_17337[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (9))){
var inst_16410 = (state_16422[(2)]);
var inst_16411 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16422__$1 = (function (){var statearr_16487 = state_16422;
(statearr_16487[(15)] = inst_16410);

return statearr_16487;
})();
if(cljs.core.truth_(inst_16411)){
var statearr_16488_17338 = state_16422__$1;
(statearr_16488_17338[(1)] = (21));

} else {
var statearr_16489_17340 = state_16422__$1;
(statearr_16489_17340[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (5))){
var inst_16360 = cljs.core.async.close_BANG_(out);
var state_16422__$1 = state_16422;
var statearr_16490_17341 = state_16422__$1;
(statearr_16490_17341[(2)] = inst_16360);

(statearr_16490_17341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (14))){
var inst_16383 = (state_16422[(7)]);
var inst_16387 = cljs.core.chunked_seq_QMARK_(inst_16383);
var state_16422__$1 = state_16422;
if(inst_16387){
var statearr_16491_17342 = state_16422__$1;
(statearr_16491_17342[(1)] = (17));

} else {
var statearr_16492_17343 = state_16422__$1;
(statearr_16492_17343[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (16))){
var inst_16406 = (state_16422[(2)]);
var state_16422__$1 = state_16422;
var statearr_16493_17344 = state_16422__$1;
(statearr_16493_17344[(2)] = inst_16406);

(statearr_16493_17344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16423 === (10))){
var inst_16369 = (state_16422[(10)]);
var inst_16371 = (state_16422[(12)]);
var inst_16377 = cljs.core._nth(inst_16369,inst_16371);
var state_16422__$1 = state_16422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16422__$1,(13),out,inst_16377);
} else {
if((state_val_16423 === (18))){
var inst_16383 = (state_16422[(7)]);
var inst_16397 = cljs.core.first(inst_16383);
var state_16422__$1 = state_16422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16422__$1,(20),out,inst_16397);
} else {
if((state_val_16423 === (8))){
var inst_16371 = (state_16422[(12)]);
var inst_16370 = (state_16422[(11)]);
var inst_16373 = (inst_16371 < inst_16370);
var inst_16374 = inst_16373;
var state_16422__$1 = state_16422;
if(cljs.core.truth_(inst_16374)){
var statearr_16494_17345 = state_16422__$1;
(statearr_16494_17345[(1)] = (10));

} else {
var statearr_16495_17346 = state_16422__$1;
(statearr_16495_17346[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14638__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14638__auto____0 = (function (){
var statearr_16496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16496[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14638__auto__);

(statearr_16496[(1)] = (1));

return statearr_16496;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14638__auto____1 = (function (state_16422){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_16422);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e16497){var ex__14641__auto__ = e16497;
var statearr_16498_17352 = state_16422;
(statearr_16498_17352[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_16422[(4)]))){
var statearr_16499_17353 = state_16422;
(statearr_16499_17353[(1)] = cljs.core.first((state_16422[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17354 = state_16422;
state_16422 = G__17354;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14638__auto__ = function(state_16422){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14638__auto____1.call(this,state_16422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14638__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14638__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_16500 = f__14709__auto__();
(statearr_16500[(6)] = c__14708__auto__);

return statearr_16500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));

return c__14708__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16503 = arguments.length;
switch (G__16503) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16505 = arguments.length;
switch (G__16505) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16520 = arguments.length;
switch (G__16520) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14708__auto___17358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_16553){
var state_val_16554 = (state_16553[(1)]);
if((state_val_16554 === (7))){
var inst_16548 = (state_16553[(2)]);
var state_16553__$1 = state_16553;
var statearr_16560_17359 = state_16553__$1;
(statearr_16560_17359[(2)] = inst_16548);

(statearr_16560_17359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16554 === (1))){
var inst_16527 = null;
var state_16553__$1 = (function (){var statearr_16563 = state_16553;
(statearr_16563[(7)] = inst_16527);

return statearr_16563;
})();
var statearr_16565_17360 = state_16553__$1;
(statearr_16565_17360[(2)] = null);

(statearr_16565_17360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16554 === (4))){
var inst_16532 = (state_16553[(8)]);
var inst_16532__$1 = (state_16553[(2)]);
var inst_16534 = (inst_16532__$1 == null);
var inst_16535 = cljs.core.not(inst_16534);
var state_16553__$1 = (function (){var statearr_16566 = state_16553;
(statearr_16566[(8)] = inst_16532__$1);

return statearr_16566;
})();
if(inst_16535){
var statearr_16567_17361 = state_16553__$1;
(statearr_16567_17361[(1)] = (5));

} else {
var statearr_16569_17362 = state_16553__$1;
(statearr_16569_17362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16554 === (6))){
var state_16553__$1 = state_16553;
var statearr_16572_17363 = state_16553__$1;
(statearr_16572_17363[(2)] = null);

(statearr_16572_17363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16554 === (3))){
var inst_16550 = (state_16553[(2)]);
var inst_16551 = cljs.core.async.close_BANG_(out);
var state_16553__$1 = (function (){var statearr_16573 = state_16553;
(statearr_16573[(9)] = inst_16550);

return statearr_16573;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16553__$1,inst_16551);
} else {
if((state_val_16554 === (2))){
var state_16553__$1 = state_16553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16553__$1,(4),ch);
} else {
if((state_val_16554 === (11))){
var inst_16532 = (state_16553[(8)]);
var inst_16542 = (state_16553[(2)]);
var inst_16527 = inst_16532;
var state_16553__$1 = (function (){var statearr_16577 = state_16553;
(statearr_16577[(10)] = inst_16542);

(statearr_16577[(7)] = inst_16527);

return statearr_16577;
})();
var statearr_16578_17364 = state_16553__$1;
(statearr_16578_17364[(2)] = null);

(statearr_16578_17364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16554 === (9))){
var inst_16532 = (state_16553[(8)]);
var state_16553__$1 = state_16553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16553__$1,(11),out,inst_16532);
} else {
if((state_val_16554 === (5))){
var inst_16532 = (state_16553[(8)]);
var inst_16527 = (state_16553[(7)]);
var inst_16537 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16532,inst_16527);
var state_16553__$1 = state_16553;
if(inst_16537){
var statearr_16580_17365 = state_16553__$1;
(statearr_16580_17365[(1)] = (8));

} else {
var statearr_16581_17366 = state_16553__$1;
(statearr_16581_17366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16554 === (10))){
var inst_16545 = (state_16553[(2)]);
var state_16553__$1 = state_16553;
var statearr_16582_17367 = state_16553__$1;
(statearr_16582_17367[(2)] = inst_16545);

(statearr_16582_17367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16554 === (8))){
var inst_16527 = (state_16553[(7)]);
var tmp16579 = inst_16527;
var inst_16527__$1 = tmp16579;
var state_16553__$1 = (function (){var statearr_16586 = state_16553;
(statearr_16586[(7)] = inst_16527__$1);

return statearr_16586;
})();
var statearr_16590_17368 = state_16553__$1;
(statearr_16590_17368[(2)] = null);

(statearr_16590_17368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14638__auto__ = null;
var cljs$core$async$state_machine__14638__auto____0 = (function (){
var statearr_16594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16594[(0)] = cljs$core$async$state_machine__14638__auto__);

(statearr_16594[(1)] = (1));

return statearr_16594;
});
var cljs$core$async$state_machine__14638__auto____1 = (function (state_16553){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_16553);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e16595){var ex__14641__auto__ = e16595;
var statearr_16596_17369 = state_16553;
(statearr_16596_17369[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_16553[(4)]))){
var statearr_16597_17370 = state_16553;
(statearr_16597_17370[(1)] = cljs.core.first((state_16553[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17371 = state_16553;
state_16553 = G__17371;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$state_machine__14638__auto__ = function(state_16553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14638__auto____1.call(this,state_16553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14638__auto____0;
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14638__auto____1;
return cljs$core$async$state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_16598 = f__14709__auto__();
(statearr_16598[(6)] = c__14708__auto___17358);

return statearr_16598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16600 = arguments.length;
switch (G__16600) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14708__auto___17373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_16638){
var state_val_16639 = (state_16638[(1)]);
if((state_val_16639 === (7))){
var inst_16634 = (state_16638[(2)]);
var state_16638__$1 = state_16638;
var statearr_16640_17374 = state_16638__$1;
(statearr_16640_17374[(2)] = inst_16634);

(statearr_16640_17374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (1))){
var inst_16601 = (new Array(n));
var inst_16602 = inst_16601;
var inst_16603 = (0);
var state_16638__$1 = (function (){var statearr_16641 = state_16638;
(statearr_16641[(7)] = inst_16602);

(statearr_16641[(8)] = inst_16603);

return statearr_16641;
})();
var statearr_16642_17375 = state_16638__$1;
(statearr_16642_17375[(2)] = null);

(statearr_16642_17375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (4))){
var inst_16606 = (state_16638[(9)]);
var inst_16606__$1 = (state_16638[(2)]);
var inst_16607 = (inst_16606__$1 == null);
var inst_16608 = cljs.core.not(inst_16607);
var state_16638__$1 = (function (){var statearr_16643 = state_16638;
(statearr_16643[(9)] = inst_16606__$1);

return statearr_16643;
})();
if(inst_16608){
var statearr_16644_17376 = state_16638__$1;
(statearr_16644_17376[(1)] = (5));

} else {
var statearr_16645_17377 = state_16638__$1;
(statearr_16645_17377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (15))){
var inst_16628 = (state_16638[(2)]);
var state_16638__$1 = state_16638;
var statearr_16646_17378 = state_16638__$1;
(statearr_16646_17378[(2)] = inst_16628);

(statearr_16646_17378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (13))){
var state_16638__$1 = state_16638;
var statearr_16647_17380 = state_16638__$1;
(statearr_16647_17380[(2)] = null);

(statearr_16647_17380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (6))){
var inst_16603 = (state_16638[(8)]);
var inst_16624 = (inst_16603 > (0));
var state_16638__$1 = state_16638;
if(cljs.core.truth_(inst_16624)){
var statearr_16648_17381 = state_16638__$1;
(statearr_16648_17381[(1)] = (12));

} else {
var statearr_16649_17382 = state_16638__$1;
(statearr_16649_17382[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (3))){
var inst_16636 = (state_16638[(2)]);
var state_16638__$1 = state_16638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16638__$1,inst_16636);
} else {
if((state_val_16639 === (12))){
var inst_16602 = (state_16638[(7)]);
var inst_16626 = cljs.core.vec(inst_16602);
var state_16638__$1 = state_16638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16638__$1,(15),out,inst_16626);
} else {
if((state_val_16639 === (2))){
var state_16638__$1 = state_16638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16638__$1,(4),ch);
} else {
if((state_val_16639 === (11))){
var inst_16618 = (state_16638[(2)]);
var inst_16619 = (new Array(n));
var inst_16602 = inst_16619;
var inst_16603 = (0);
var state_16638__$1 = (function (){var statearr_16650 = state_16638;
(statearr_16650[(10)] = inst_16618);

(statearr_16650[(7)] = inst_16602);

(statearr_16650[(8)] = inst_16603);

return statearr_16650;
})();
var statearr_16651_17386 = state_16638__$1;
(statearr_16651_17386[(2)] = null);

(statearr_16651_17386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (9))){
var inst_16602 = (state_16638[(7)]);
var inst_16616 = cljs.core.vec(inst_16602);
var state_16638__$1 = state_16638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16638__$1,(11),out,inst_16616);
} else {
if((state_val_16639 === (5))){
var inst_16602 = (state_16638[(7)]);
var inst_16603 = (state_16638[(8)]);
var inst_16606 = (state_16638[(9)]);
var inst_16611 = (state_16638[(11)]);
var inst_16610 = (inst_16602[inst_16603] = inst_16606);
var inst_16611__$1 = (inst_16603 + (1));
var inst_16612 = (inst_16611__$1 < n);
var state_16638__$1 = (function (){var statearr_16652 = state_16638;
(statearr_16652[(12)] = inst_16610);

(statearr_16652[(11)] = inst_16611__$1);

return statearr_16652;
})();
if(cljs.core.truth_(inst_16612)){
var statearr_16653_17387 = state_16638__$1;
(statearr_16653_17387[(1)] = (8));

} else {
var statearr_16654_17388 = state_16638__$1;
(statearr_16654_17388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (14))){
var inst_16631 = (state_16638[(2)]);
var inst_16632 = cljs.core.async.close_BANG_(out);
var state_16638__$1 = (function (){var statearr_16656 = state_16638;
(statearr_16656[(13)] = inst_16631);

return statearr_16656;
})();
var statearr_16657_17389 = state_16638__$1;
(statearr_16657_17389[(2)] = inst_16632);

(statearr_16657_17389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (10))){
var inst_16622 = (state_16638[(2)]);
var state_16638__$1 = state_16638;
var statearr_16658_17390 = state_16638__$1;
(statearr_16658_17390[(2)] = inst_16622);

(statearr_16658_17390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16639 === (8))){
var inst_16602 = (state_16638[(7)]);
var inst_16611 = (state_16638[(11)]);
var tmp16655 = inst_16602;
var inst_16602__$1 = tmp16655;
var inst_16603 = inst_16611;
var state_16638__$1 = (function (){var statearr_16659 = state_16638;
(statearr_16659[(7)] = inst_16602__$1);

(statearr_16659[(8)] = inst_16603);

return statearr_16659;
})();
var statearr_16660_17391 = state_16638__$1;
(statearr_16660_17391[(2)] = null);

(statearr_16660_17391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14638__auto__ = null;
var cljs$core$async$state_machine__14638__auto____0 = (function (){
var statearr_16661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16661[(0)] = cljs$core$async$state_machine__14638__auto__);

(statearr_16661[(1)] = (1));

return statearr_16661;
});
var cljs$core$async$state_machine__14638__auto____1 = (function (state_16638){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_16638);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e16662){var ex__14641__auto__ = e16662;
var statearr_16663_17392 = state_16638;
(statearr_16663_17392[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_16638[(4)]))){
var statearr_16664_17393 = state_16638;
(statearr_16664_17393[(1)] = cljs.core.first((state_16638[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17394 = state_16638;
state_16638 = G__17394;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$state_machine__14638__auto__ = function(state_16638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14638__auto____1.call(this,state_16638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14638__auto____0;
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14638__auto____1;
return cljs$core$async$state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_16665 = f__14709__auto__();
(statearr_16665[(6)] = c__14708__auto___17373);

return statearr_16665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16670 = arguments.length;
switch (G__16670) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14708__auto___17396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14709__auto__ = (function (){var switch__14637__auto__ = (function (state_16716){
var state_val_16717 = (state_16716[(1)]);
if((state_val_16717 === (7))){
var inst_16712 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16720_17397 = state_16716__$1;
(statearr_16720_17397[(2)] = inst_16712);

(statearr_16720_17397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (1))){
var inst_16672 = [];
var inst_16673 = inst_16672;
var inst_16674 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16716__$1 = (function (){var statearr_16722 = state_16716;
(statearr_16722[(7)] = inst_16673);

(statearr_16722[(8)] = inst_16674);

return statearr_16722;
})();
var statearr_16723_17398 = state_16716__$1;
(statearr_16723_17398[(2)] = null);

(statearr_16723_17398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (4))){
var inst_16677 = (state_16716[(9)]);
var inst_16677__$1 = (state_16716[(2)]);
var inst_16678 = (inst_16677__$1 == null);
var inst_16679 = cljs.core.not(inst_16678);
var state_16716__$1 = (function (){var statearr_16724 = state_16716;
(statearr_16724[(9)] = inst_16677__$1);

return statearr_16724;
})();
if(inst_16679){
var statearr_16726_17399 = state_16716__$1;
(statearr_16726_17399[(1)] = (5));

} else {
var statearr_16727_17400 = state_16716__$1;
(statearr_16727_17400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (15))){
var inst_16673 = (state_16716[(7)]);
var inst_16704 = cljs.core.vec(inst_16673);
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16716__$1,(18),out,inst_16704);
} else {
if((state_val_16717 === (13))){
var inst_16699 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16729_17401 = state_16716__$1;
(statearr_16729_17401[(2)] = inst_16699);

(statearr_16729_17401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (6))){
var inst_16673 = (state_16716[(7)]);
var inst_16701 = inst_16673.length;
var inst_16702 = (inst_16701 > (0));
var state_16716__$1 = state_16716;
if(cljs.core.truth_(inst_16702)){
var statearr_16730_17402 = state_16716__$1;
(statearr_16730_17402[(1)] = (15));

} else {
var statearr_16731_17403 = state_16716__$1;
(statearr_16731_17403[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (17))){
var inst_16709 = (state_16716[(2)]);
var inst_16710 = cljs.core.async.close_BANG_(out);
var state_16716__$1 = (function (){var statearr_16733 = state_16716;
(statearr_16733[(10)] = inst_16709);

return statearr_16733;
})();
var statearr_16734_17404 = state_16716__$1;
(statearr_16734_17404[(2)] = inst_16710);

(statearr_16734_17404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (3))){
var inst_16714 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16716__$1,inst_16714);
} else {
if((state_val_16717 === (12))){
var inst_16673 = (state_16716[(7)]);
var inst_16692 = cljs.core.vec(inst_16673);
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16716__$1,(14),out,inst_16692);
} else {
if((state_val_16717 === (2))){
var state_16716__$1 = state_16716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16716__$1,(4),ch);
} else {
if((state_val_16717 === (11))){
var inst_16673 = (state_16716[(7)]);
var inst_16677 = (state_16716[(9)]);
var inst_16681 = (state_16716[(11)]);
var inst_16689 = inst_16673.push(inst_16677);
var tmp16735 = inst_16673;
var inst_16673__$1 = tmp16735;
var inst_16674 = inst_16681;
var state_16716__$1 = (function (){var statearr_16738 = state_16716;
(statearr_16738[(12)] = inst_16689);

(statearr_16738[(7)] = inst_16673__$1);

(statearr_16738[(8)] = inst_16674);

return statearr_16738;
})();
var statearr_16739_17406 = state_16716__$1;
(statearr_16739_17406[(2)] = null);

(statearr_16739_17406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (9))){
var inst_16674 = (state_16716[(8)]);
var inst_16685 = cljs.core.keyword_identical_QMARK_(inst_16674,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16716__$1 = state_16716;
var statearr_16740_17407 = state_16716__$1;
(statearr_16740_17407[(2)] = inst_16685);

(statearr_16740_17407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (5))){
var inst_16677 = (state_16716[(9)]);
var inst_16681 = (state_16716[(11)]);
var inst_16674 = (state_16716[(8)]);
var inst_16682 = (state_16716[(13)]);
var inst_16681__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16677) : f.call(null,inst_16677));
var inst_16682__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16681__$1,inst_16674);
var state_16716__$1 = (function (){var statearr_16744 = state_16716;
(statearr_16744[(11)] = inst_16681__$1);

(statearr_16744[(13)] = inst_16682__$1);

return statearr_16744;
})();
if(inst_16682__$1){
var statearr_16745_17408 = state_16716__$1;
(statearr_16745_17408[(1)] = (8));

} else {
var statearr_16746_17409 = state_16716__$1;
(statearr_16746_17409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (14))){
var inst_16677 = (state_16716[(9)]);
var inst_16681 = (state_16716[(11)]);
var inst_16694 = (state_16716[(2)]);
var inst_16695 = [];
var inst_16696 = inst_16695.push(inst_16677);
var inst_16673 = inst_16695;
var inst_16674 = inst_16681;
var state_16716__$1 = (function (){var statearr_16747 = state_16716;
(statearr_16747[(14)] = inst_16694);

(statearr_16747[(15)] = inst_16696);

(statearr_16747[(7)] = inst_16673);

(statearr_16747[(8)] = inst_16674);

return statearr_16747;
})();
var statearr_16748_17411 = state_16716__$1;
(statearr_16748_17411[(2)] = null);

(statearr_16748_17411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (16))){
var state_16716__$1 = state_16716;
var statearr_16756_17412 = state_16716__$1;
(statearr_16756_17412[(2)] = null);

(statearr_16756_17412[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (10))){
var inst_16687 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
if(cljs.core.truth_(inst_16687)){
var statearr_16758_17413 = state_16716__$1;
(statearr_16758_17413[(1)] = (11));

} else {
var statearr_16759_17414 = state_16716__$1;
(statearr_16759_17414[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (18))){
var inst_16706 = (state_16716[(2)]);
var state_16716__$1 = state_16716;
var statearr_16760_17415 = state_16716__$1;
(statearr_16760_17415[(2)] = inst_16706);

(statearr_16760_17415[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16717 === (8))){
var inst_16682 = (state_16716[(13)]);
var state_16716__$1 = state_16716;
var statearr_16761_17416 = state_16716__$1;
(statearr_16761_17416[(2)] = inst_16682);

(statearr_16761_17416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14638__auto__ = null;
var cljs$core$async$state_machine__14638__auto____0 = (function (){
var statearr_16765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16765[(0)] = cljs$core$async$state_machine__14638__auto__);

(statearr_16765[(1)] = (1));

return statearr_16765;
});
var cljs$core$async$state_machine__14638__auto____1 = (function (state_16716){
while(true){
var ret_value__14639__auto__ = (function (){try{while(true){
var result__14640__auto__ = switch__14637__auto__(state_16716);
if(cljs.core.keyword_identical_QMARK_(result__14640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14640__auto__;
}
break;
}
}catch (e16766){var ex__14641__auto__ = e16766;
var statearr_16767_17417 = state_16716;
(statearr_16767_17417[(2)] = ex__14641__auto__);


if(cljs.core.seq((state_16716[(4)]))){
var statearr_16768_17418 = state_16716;
(statearr_16768_17418[(1)] = cljs.core.first((state_16716[(4)])));

} else {
throw ex__14641__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17419 = state_16716;
state_16716 = G__17419;
continue;
} else {
return ret_value__14639__auto__;
}
break;
}
});
cljs$core$async$state_machine__14638__auto__ = function(state_16716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14638__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14638__auto____1.call(this,state_16716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14638__auto____0;
cljs$core$async$state_machine__14638__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14638__auto____1;
return cljs$core$async$state_machine__14638__auto__;
})()
})();
var state__14710__auto__ = (function (){var statearr_16780 = f__14709__auto__();
(statearr_16780[(6)] = c__14708__auto___17396);

return statearr_16780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14710__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
