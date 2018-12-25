// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31484 = arguments.length;
switch (G__31484) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31485 = (function (f,blockable,meta31486){
this.f = f;
this.blockable = blockable;
this.meta31486 = meta31486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31487,meta31486__$1){
var self__ = this;
var _31487__$1 = this;
return (new cljs.core.async.t_cljs$core$async31485(self__.f,self__.blockable,meta31486__$1));
});

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31487){
var self__ = this;
var _31487__$1 = this;
return self__.meta31486;
});

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31485.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31486","meta31486",-410306285,null)], null);
});

cljs.core.async.t_cljs$core$async31485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31485";

cljs.core.async.t_cljs$core$async31485.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31485");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31485.
 */
cljs.core.async.__GT_t_cljs$core$async31485 = (function cljs$core$async$__GT_t_cljs$core$async31485(f__$1,blockable__$1,meta31486){
return (new cljs.core.async.t_cljs$core$async31485(f__$1,blockable__$1,meta31486));
});

}

return (new cljs.core.async.t_cljs$core$async31485(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__31491 = arguments.length;
switch (G__31491) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31494 = arguments.length;
switch (G__31494) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__31497 = arguments.length;
switch (G__31497) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31499 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31499);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31499,ret){
return (function (){
return fn1.call(null,val_31499);
});})(val_31499,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31501 = arguments.length;
switch (G__31501) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___31503 = n;
var x_31504 = (0);
while(true){
if((x_31504 < n__4376__auto___31503)){
(a[x_31504] = (0));

var G__31505 = (x_31504 + (1));
x_31504 = G__31505;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31506 = (i + (1));
i = G__31506;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31507 = (function (flag,meta31508){
this.flag = flag;
this.meta31508 = meta31508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31509,meta31508__$1){
var self__ = this;
var _31509__$1 = this;
return (new cljs.core.async.t_cljs$core$async31507(self__.flag,meta31508__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31509){
var self__ = this;
var _31509__$1 = this;
return self__.meta31508;
});})(flag))
;

cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31507.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31508","meta31508",2037933959,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31507";

cljs.core.async.t_cljs$core$async31507.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31507");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31507.
 */
cljs.core.async.__GT_t_cljs$core$async31507 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31507(flag__$1,meta31508){
return (new cljs.core.async.t_cljs$core$async31507(flag__$1,meta31508));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31507(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31510 = (function (flag,cb,meta31511){
this.flag = flag;
this.cb = cb;
this.meta31511 = meta31511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31512,meta31511__$1){
var self__ = this;
var _31512__$1 = this;
return (new cljs.core.async.t_cljs$core$async31510(self__.flag,self__.cb,meta31511__$1));
});

cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31512){
var self__ = this;
var _31512__$1 = this;
return self__.meta31511;
});

cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31511","meta31511",675417423,null)], null);
});

cljs.core.async.t_cljs$core$async31510.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31510";

cljs.core.async.t_cljs$core$async31510.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async31510");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31510.
 */
cljs.core.async.__GT_t_cljs$core$async31510 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31510(flag__$1,cb__$1,meta31511){
return (new cljs.core.async.t_cljs$core$async31510(flag__$1,cb__$1,meta31511));
});

}

return (new cljs.core.async.t_cljs$core$async31510(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31513_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31513_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31514_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31514_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31515 = (i + (1));
i = G__31515;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4502__auto__ = [];
var len__4499__auto___31521 = arguments.length;
var i__4500__auto___31522 = (0);
while(true){
if((i__4500__auto___31522 < len__4499__auto___31521)){
args__4502__auto__.push((arguments[i__4500__auto___31522]));

var G__31523 = (i__4500__auto___31522 + (1));
i__4500__auto___31522 = G__31523;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31518){
var map__31519 = p__31518;
var map__31519__$1 = ((((!((map__31519 == null)))?(((((map__31519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31519):map__31519);
var opts = map__31519__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31516){
var G__31517 = cljs.core.first.call(null,seq31516);
var seq31516__$1 = cljs.core.next.call(null,seq31516);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31517,seq31516__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__31525 = arguments.length;
switch (G__31525) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29560__auto___31571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___31571){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___31571){
return (function (state_31549){
var state_val_31550 = (state_31549[(1)]);
if((state_val_31550 === (7))){
var inst_31545 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31551_31572 = state_31549__$1;
(statearr_31551_31572[(2)] = inst_31545);

(statearr_31551_31572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (1))){
var state_31549__$1 = state_31549;
var statearr_31552_31573 = state_31549__$1;
(statearr_31552_31573[(2)] = null);

(statearr_31552_31573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (4))){
var inst_31528 = (state_31549[(7)]);
var inst_31528__$1 = (state_31549[(2)]);
var inst_31529 = (inst_31528__$1 == null);
var state_31549__$1 = (function (){var statearr_31553 = state_31549;
(statearr_31553[(7)] = inst_31528__$1);

return statearr_31553;
})();
if(cljs.core.truth_(inst_31529)){
var statearr_31554_31574 = state_31549__$1;
(statearr_31554_31574[(1)] = (5));

} else {
var statearr_31555_31575 = state_31549__$1;
(statearr_31555_31575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (13))){
var state_31549__$1 = state_31549;
var statearr_31556_31576 = state_31549__$1;
(statearr_31556_31576[(2)] = null);

(statearr_31556_31576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (6))){
var inst_31528 = (state_31549[(7)]);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31549__$1,(11),to,inst_31528);
} else {
if((state_val_31550 === (3))){
var inst_31547 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31549__$1,inst_31547);
} else {
if((state_val_31550 === (12))){
var state_31549__$1 = state_31549;
var statearr_31557_31577 = state_31549__$1;
(statearr_31557_31577[(2)] = null);

(statearr_31557_31577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (2))){
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31549__$1,(4),from);
} else {
if((state_val_31550 === (11))){
var inst_31538 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
if(cljs.core.truth_(inst_31538)){
var statearr_31558_31578 = state_31549__$1;
(statearr_31558_31578[(1)] = (12));

} else {
var statearr_31559_31579 = state_31549__$1;
(statearr_31559_31579[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (9))){
var state_31549__$1 = state_31549;
var statearr_31560_31580 = state_31549__$1;
(statearr_31560_31580[(2)] = null);

(statearr_31560_31580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (5))){
var state_31549__$1 = state_31549;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31561_31581 = state_31549__$1;
(statearr_31561_31581[(1)] = (8));

} else {
var statearr_31562_31582 = state_31549__$1;
(statearr_31562_31582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (14))){
var inst_31543 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31563_31583 = state_31549__$1;
(statearr_31563_31583[(2)] = inst_31543);

(statearr_31563_31583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (10))){
var inst_31535 = (state_31549[(2)]);
var state_31549__$1 = state_31549;
var statearr_31564_31584 = state_31549__$1;
(statearr_31564_31584[(2)] = inst_31535);

(statearr_31564_31584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31550 === (8))){
var inst_31532 = cljs.core.async.close_BANG_.call(null,to);
var state_31549__$1 = state_31549;
var statearr_31565_31585 = state_31549__$1;
(statearr_31565_31585[(2)] = inst_31532);

(statearr_31565_31585[(1)] = (10));


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
});})(c__29560__auto___31571))
;
return ((function (switch__29403__auto__,c__29560__auto___31571){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_31566 = [null,null,null,null,null,null,null,null];
(statearr_31566[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_31566[(1)] = (1));

return statearr_31566;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_31549){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31567){if((e31567 instanceof Object)){
var ex__29407__auto__ = e31567;
var statearr_31568_31586 = state_31549;
(statearr_31568_31586[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31587 = state_31549;
state_31549 = G__31587;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_31549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_31549);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___31571))
})();
var state__29562__auto__ = (function (){var statearr_31569 = f__29561__auto__.call(null);
(statearr_31569[(6)] = c__29560__auto___31571);

return statearr_31569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___31571))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31588){
var vec__31589 = p__31588;
var v = cljs.core.nth.call(null,vec__31589,(0),null);
var p = cljs.core.nth.call(null,vec__31589,(1),null);
var job = vec__31589;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29560__auto___31760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___31760,res,vec__31589,v,p,job,jobs,results){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___31760,res,vec__31589,v,p,job,jobs,results){
return (function (state_31596){
var state_val_31597 = (state_31596[(1)]);
if((state_val_31597 === (1))){
var state_31596__$1 = state_31596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31596__$1,(2),res,v);
} else {
if((state_val_31597 === (2))){
var inst_31593 = (state_31596[(2)]);
var inst_31594 = cljs.core.async.close_BANG_.call(null,res);
var state_31596__$1 = (function (){var statearr_31598 = state_31596;
(statearr_31598[(7)] = inst_31593);

return statearr_31598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31596__$1,inst_31594);
} else {
return null;
}
}
});})(c__29560__auto___31760,res,vec__31589,v,p,job,jobs,results))
;
return ((function (switch__29403__auto__,c__29560__auto___31760,res,vec__31589,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_31599 = [null,null,null,null,null,null,null,null];
(statearr_31599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__);

(statearr_31599[(1)] = (1));

return statearr_31599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1 = (function (state_31596){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31600){if((e31600 instanceof Object)){
var ex__29407__auto__ = e31600;
var statearr_31601_31761 = state_31596;
(statearr_31601_31761[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31762 = state_31596;
state_31596 = G__31762;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = function(state_31596){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1.call(this,state_31596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___31760,res,vec__31589,v,p,job,jobs,results))
})();
var state__29562__auto__ = (function (){var statearr_31602 = f__29561__auto__.call(null);
(statearr_31602[(6)] = c__29560__auto___31760);

return statearr_31602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___31760,res,vec__31589,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31603){
var vec__31604 = p__31603;
var v = cljs.core.nth.call(null,vec__31604,(0),null);
var p = cljs.core.nth.call(null,vec__31604,(1),null);
var job = vec__31604;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___31763 = n;
var __31764 = (0);
while(true){
if((__31764 < n__4376__auto___31763)){
var G__31607_31765 = type;
var G__31607_31766__$1 = (((G__31607_31765 instanceof cljs.core.Keyword))?G__31607_31765.fqn:null);
switch (G__31607_31766__$1) {
case "compute":
var c__29560__auto___31768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31764,c__29560__auto___31768,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (__31764,c__29560__auto___31768,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async){
return (function (state_31620){
var state_val_31621 = (state_31620[(1)]);
if((state_val_31621 === (1))){
var state_31620__$1 = state_31620;
var statearr_31622_31769 = state_31620__$1;
(statearr_31622_31769[(2)] = null);

(statearr_31622_31769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (2))){
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31620__$1,(4),jobs);
} else {
if((state_val_31621 === (3))){
var inst_31618 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31620__$1,inst_31618);
} else {
if((state_val_31621 === (4))){
var inst_31610 = (state_31620[(2)]);
var inst_31611 = process.call(null,inst_31610);
var state_31620__$1 = state_31620;
if(cljs.core.truth_(inst_31611)){
var statearr_31623_31770 = state_31620__$1;
(statearr_31623_31770[(1)] = (5));

} else {
var statearr_31624_31771 = state_31620__$1;
(statearr_31624_31771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (5))){
var state_31620__$1 = state_31620;
var statearr_31625_31772 = state_31620__$1;
(statearr_31625_31772[(2)] = null);

(statearr_31625_31772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (6))){
var state_31620__$1 = state_31620;
var statearr_31626_31773 = state_31620__$1;
(statearr_31626_31773[(2)] = null);

(statearr_31626_31773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (7))){
var inst_31616 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31627_31774 = state_31620__$1;
(statearr_31627_31774[(2)] = inst_31616);

(statearr_31627_31774[(1)] = (3));


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
});})(__31764,c__29560__auto___31768,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async))
;
return ((function (__31764,switch__29403__auto__,c__29560__auto___31768,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_31628 = [null,null,null,null,null,null,null];
(statearr_31628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__);

(statearr_31628[(1)] = (1));

return statearr_31628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1 = (function (state_31620){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31629){if((e31629 instanceof Object)){
var ex__29407__auto__ = e31629;
var statearr_31630_31775 = state_31620;
(statearr_31630_31775[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31776 = state_31620;
state_31620 = G__31776;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = function(state_31620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1.call(this,state_31620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__;
})()
;})(__31764,switch__29403__auto__,c__29560__auto___31768,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async))
})();
var state__29562__auto__ = (function (){var statearr_31631 = f__29561__auto__.call(null);
(statearr_31631[(6)] = c__29560__auto___31768);

return statearr_31631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(__31764,c__29560__auto___31768,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async))
);


break;
case "async":
var c__29560__auto___31777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31764,c__29560__auto___31777,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (__31764,c__29560__auto___31777,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async){
return (function (state_31644){
var state_val_31645 = (state_31644[(1)]);
if((state_val_31645 === (1))){
var state_31644__$1 = state_31644;
var statearr_31646_31778 = state_31644__$1;
(statearr_31646_31778[(2)] = null);

(statearr_31646_31778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (2))){
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31644__$1,(4),jobs);
} else {
if((state_val_31645 === (3))){
var inst_31642 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31644__$1,inst_31642);
} else {
if((state_val_31645 === (4))){
var inst_31634 = (state_31644[(2)]);
var inst_31635 = async.call(null,inst_31634);
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31635)){
var statearr_31647_31779 = state_31644__$1;
(statearr_31647_31779[(1)] = (5));

} else {
var statearr_31648_31780 = state_31644__$1;
(statearr_31648_31780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (5))){
var state_31644__$1 = state_31644;
var statearr_31649_31781 = state_31644__$1;
(statearr_31649_31781[(2)] = null);

(statearr_31649_31781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (6))){
var state_31644__$1 = state_31644;
var statearr_31650_31782 = state_31644__$1;
(statearr_31650_31782[(2)] = null);

(statearr_31650_31782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (7))){
var inst_31640 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31651_31783 = state_31644__$1;
(statearr_31651_31783[(2)] = inst_31640);

(statearr_31651_31783[(1)] = (3));


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
});})(__31764,c__29560__auto___31777,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async))
;
return ((function (__31764,switch__29403__auto__,c__29560__auto___31777,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_31652 = [null,null,null,null,null,null,null];
(statearr_31652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__);

(statearr_31652[(1)] = (1));

return statearr_31652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1 = (function (state_31644){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31653){if((e31653 instanceof Object)){
var ex__29407__auto__ = e31653;
var statearr_31654_31784 = state_31644;
(statearr_31654_31784[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31785 = state_31644;
state_31644 = G__31785;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = function(state_31644){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1.call(this,state_31644);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__;
})()
;})(__31764,switch__29403__auto__,c__29560__auto___31777,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async))
})();
var state__29562__auto__ = (function (){var statearr_31655 = f__29561__auto__.call(null);
(statearr_31655[(6)] = c__29560__auto___31777);

return statearr_31655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(__31764,c__29560__auto___31777,G__31607_31765,G__31607_31766__$1,n__4376__auto___31763,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31607_31766__$1)].join('')));

}

var G__31786 = (__31764 + (1));
__31764 = G__31786;
continue;
} else {
}
break;
}

var c__29560__auto___31787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___31787,jobs,results,process,async){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___31787,jobs,results,process,async){
return (function (state_31677){
var state_val_31678 = (state_31677[(1)]);
if((state_val_31678 === (1))){
var state_31677__$1 = state_31677;
var statearr_31679_31788 = state_31677__$1;
(statearr_31679_31788[(2)] = null);

(statearr_31679_31788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (2))){
var state_31677__$1 = state_31677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31677__$1,(4),from);
} else {
if((state_val_31678 === (3))){
var inst_31675 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31677__$1,inst_31675);
} else {
if((state_val_31678 === (4))){
var inst_31658 = (state_31677[(7)]);
var inst_31658__$1 = (state_31677[(2)]);
var inst_31659 = (inst_31658__$1 == null);
var state_31677__$1 = (function (){var statearr_31680 = state_31677;
(statearr_31680[(7)] = inst_31658__$1);

return statearr_31680;
})();
if(cljs.core.truth_(inst_31659)){
var statearr_31681_31789 = state_31677__$1;
(statearr_31681_31789[(1)] = (5));

} else {
var statearr_31682_31790 = state_31677__$1;
(statearr_31682_31790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (5))){
var inst_31661 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31677__$1 = state_31677;
var statearr_31683_31791 = state_31677__$1;
(statearr_31683_31791[(2)] = inst_31661);

(statearr_31683_31791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (6))){
var inst_31658 = (state_31677[(7)]);
var inst_31663 = (state_31677[(8)]);
var inst_31663__$1 = cljs.core.async.chan.call(null,(1));
var inst_31664 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31665 = [inst_31658,inst_31663__$1];
var inst_31666 = (new cljs.core.PersistentVector(null,2,(5),inst_31664,inst_31665,null));
var state_31677__$1 = (function (){var statearr_31684 = state_31677;
(statearr_31684[(8)] = inst_31663__$1);

return statearr_31684;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31677__$1,(8),jobs,inst_31666);
} else {
if((state_val_31678 === (7))){
var inst_31673 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
var statearr_31685_31792 = state_31677__$1;
(statearr_31685_31792[(2)] = inst_31673);

(statearr_31685_31792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (8))){
var inst_31663 = (state_31677[(8)]);
var inst_31668 = (state_31677[(2)]);
var state_31677__$1 = (function (){var statearr_31686 = state_31677;
(statearr_31686[(9)] = inst_31668);

return statearr_31686;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31677__$1,(9),results,inst_31663);
} else {
if((state_val_31678 === (9))){
var inst_31670 = (state_31677[(2)]);
var state_31677__$1 = (function (){var statearr_31687 = state_31677;
(statearr_31687[(10)] = inst_31670);

return statearr_31687;
})();
var statearr_31688_31793 = state_31677__$1;
(statearr_31688_31793[(2)] = null);

(statearr_31688_31793[(1)] = (2));


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
});})(c__29560__auto___31787,jobs,results,process,async))
;
return ((function (switch__29403__auto__,c__29560__auto___31787,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_31689 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__);

(statearr_31689[(1)] = (1));

return statearr_31689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1 = (function (state_31677){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31690){if((e31690 instanceof Object)){
var ex__29407__auto__ = e31690;
var statearr_31691_31794 = state_31677;
(statearr_31691_31794[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31795 = state_31677;
state_31677 = G__31795;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = function(state_31677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1.call(this,state_31677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___31787,jobs,results,process,async))
})();
var state__29562__auto__ = (function (){var statearr_31692 = f__29561__auto__.call(null);
(statearr_31692[(6)] = c__29560__auto___31787);

return statearr_31692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___31787,jobs,results,process,async))
);


var c__29560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto__,jobs,results,process,async){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto__,jobs,results,process,async){
return (function (state_31730){
var state_val_31731 = (state_31730[(1)]);
if((state_val_31731 === (7))){
var inst_31726 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31732_31796 = state_31730__$1;
(statearr_31732_31796[(2)] = inst_31726);

(statearr_31732_31796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (20))){
var state_31730__$1 = state_31730;
var statearr_31733_31797 = state_31730__$1;
(statearr_31733_31797[(2)] = null);

(statearr_31733_31797[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (1))){
var state_31730__$1 = state_31730;
var statearr_31734_31798 = state_31730__$1;
(statearr_31734_31798[(2)] = null);

(statearr_31734_31798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (4))){
var inst_31695 = (state_31730[(7)]);
var inst_31695__$1 = (state_31730[(2)]);
var inst_31696 = (inst_31695__$1 == null);
var state_31730__$1 = (function (){var statearr_31735 = state_31730;
(statearr_31735[(7)] = inst_31695__$1);

return statearr_31735;
})();
if(cljs.core.truth_(inst_31696)){
var statearr_31736_31799 = state_31730__$1;
(statearr_31736_31799[(1)] = (5));

} else {
var statearr_31737_31800 = state_31730__$1;
(statearr_31737_31800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (15))){
var inst_31708 = (state_31730[(8)]);
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31730__$1,(18),to,inst_31708);
} else {
if((state_val_31731 === (21))){
var inst_31721 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31738_31801 = state_31730__$1;
(statearr_31738_31801[(2)] = inst_31721);

(statearr_31738_31801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (13))){
var inst_31723 = (state_31730[(2)]);
var state_31730__$1 = (function (){var statearr_31739 = state_31730;
(statearr_31739[(9)] = inst_31723);

return statearr_31739;
})();
var statearr_31740_31802 = state_31730__$1;
(statearr_31740_31802[(2)] = null);

(statearr_31740_31802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (6))){
var inst_31695 = (state_31730[(7)]);
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31730__$1,(11),inst_31695);
} else {
if((state_val_31731 === (17))){
var inst_31716 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
if(cljs.core.truth_(inst_31716)){
var statearr_31741_31803 = state_31730__$1;
(statearr_31741_31803[(1)] = (19));

} else {
var statearr_31742_31804 = state_31730__$1;
(statearr_31742_31804[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (3))){
var inst_31728 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31730__$1,inst_31728);
} else {
if((state_val_31731 === (12))){
var inst_31705 = (state_31730[(10)]);
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31730__$1,(14),inst_31705);
} else {
if((state_val_31731 === (2))){
var state_31730__$1 = state_31730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31730__$1,(4),results);
} else {
if((state_val_31731 === (19))){
var state_31730__$1 = state_31730;
var statearr_31743_31805 = state_31730__$1;
(statearr_31743_31805[(2)] = null);

(statearr_31743_31805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (11))){
var inst_31705 = (state_31730[(2)]);
var state_31730__$1 = (function (){var statearr_31744 = state_31730;
(statearr_31744[(10)] = inst_31705);

return statearr_31744;
})();
var statearr_31745_31806 = state_31730__$1;
(statearr_31745_31806[(2)] = null);

(statearr_31745_31806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (9))){
var state_31730__$1 = state_31730;
var statearr_31746_31807 = state_31730__$1;
(statearr_31746_31807[(2)] = null);

(statearr_31746_31807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (5))){
var state_31730__$1 = state_31730;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31747_31808 = state_31730__$1;
(statearr_31747_31808[(1)] = (8));

} else {
var statearr_31748_31809 = state_31730__$1;
(statearr_31748_31809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (14))){
var inst_31708 = (state_31730[(8)]);
var inst_31710 = (state_31730[(11)]);
var inst_31708__$1 = (state_31730[(2)]);
var inst_31709 = (inst_31708__$1 == null);
var inst_31710__$1 = cljs.core.not.call(null,inst_31709);
var state_31730__$1 = (function (){var statearr_31749 = state_31730;
(statearr_31749[(8)] = inst_31708__$1);

(statearr_31749[(11)] = inst_31710__$1);

return statearr_31749;
})();
if(inst_31710__$1){
var statearr_31750_31810 = state_31730__$1;
(statearr_31750_31810[(1)] = (15));

} else {
var statearr_31751_31811 = state_31730__$1;
(statearr_31751_31811[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (16))){
var inst_31710 = (state_31730[(11)]);
var state_31730__$1 = state_31730;
var statearr_31752_31812 = state_31730__$1;
(statearr_31752_31812[(2)] = inst_31710);

(statearr_31752_31812[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (10))){
var inst_31702 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31753_31813 = state_31730__$1;
(statearr_31753_31813[(2)] = inst_31702);

(statearr_31753_31813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (18))){
var inst_31713 = (state_31730[(2)]);
var state_31730__$1 = state_31730;
var statearr_31754_31814 = state_31730__$1;
(statearr_31754_31814[(2)] = inst_31713);

(statearr_31754_31814[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31731 === (8))){
var inst_31699 = cljs.core.async.close_BANG_.call(null,to);
var state_31730__$1 = state_31730;
var statearr_31755_31815 = state_31730__$1;
(statearr_31755_31815[(2)] = inst_31699);

(statearr_31755_31815[(1)] = (10));


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
});})(c__29560__auto__,jobs,results,process,async))
;
return ((function (switch__29403__auto__,c__29560__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_31756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__);

(statearr_31756[(1)] = (1));

return statearr_31756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1 = (function (state_31730){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31757){if((e31757 instanceof Object)){
var ex__29407__auto__ = e31757;
var statearr_31758_31816 = state_31730;
(statearr_31758_31816[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31817 = state_31730;
state_31730 = G__31817;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__ = function(state_31730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1.call(this,state_31730);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto__,jobs,results,process,async))
})();
var state__29562__auto__ = (function (){var statearr_31759 = f__29561__auto__.call(null);
(statearr_31759[(6)] = c__29560__auto__);

return statearr_31759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto__,jobs,results,process,async))
);

return c__29560__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31819 = arguments.length;
switch (G__31819) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__31822 = arguments.length;
switch (G__31822) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__31825 = arguments.length;
switch (G__31825) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29560__auto___31874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___31874,tc,fc){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___31874,tc,fc){
return (function (state_31851){
var state_val_31852 = (state_31851[(1)]);
if((state_val_31852 === (7))){
var inst_31847 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31853_31875 = state_31851__$1;
(statearr_31853_31875[(2)] = inst_31847);

(statearr_31853_31875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (1))){
var state_31851__$1 = state_31851;
var statearr_31854_31876 = state_31851__$1;
(statearr_31854_31876[(2)] = null);

(statearr_31854_31876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (4))){
var inst_31828 = (state_31851[(7)]);
var inst_31828__$1 = (state_31851[(2)]);
var inst_31829 = (inst_31828__$1 == null);
var state_31851__$1 = (function (){var statearr_31855 = state_31851;
(statearr_31855[(7)] = inst_31828__$1);

return statearr_31855;
})();
if(cljs.core.truth_(inst_31829)){
var statearr_31856_31877 = state_31851__$1;
(statearr_31856_31877[(1)] = (5));

} else {
var statearr_31857_31878 = state_31851__$1;
(statearr_31857_31878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (13))){
var state_31851__$1 = state_31851;
var statearr_31858_31879 = state_31851__$1;
(statearr_31858_31879[(2)] = null);

(statearr_31858_31879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (6))){
var inst_31828 = (state_31851[(7)]);
var inst_31834 = p.call(null,inst_31828);
var state_31851__$1 = state_31851;
if(cljs.core.truth_(inst_31834)){
var statearr_31859_31880 = state_31851__$1;
(statearr_31859_31880[(1)] = (9));

} else {
var statearr_31860_31881 = state_31851__$1;
(statearr_31860_31881[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (3))){
var inst_31849 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31851__$1,inst_31849);
} else {
if((state_val_31852 === (12))){
var state_31851__$1 = state_31851;
var statearr_31861_31882 = state_31851__$1;
(statearr_31861_31882[(2)] = null);

(statearr_31861_31882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (2))){
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(4),ch);
} else {
if((state_val_31852 === (11))){
var inst_31828 = (state_31851[(7)]);
var inst_31838 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31851__$1,(8),inst_31838,inst_31828);
} else {
if((state_val_31852 === (9))){
var state_31851__$1 = state_31851;
var statearr_31862_31883 = state_31851__$1;
(statearr_31862_31883[(2)] = tc);

(statearr_31862_31883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (5))){
var inst_31831 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31832 = cljs.core.async.close_BANG_.call(null,fc);
var state_31851__$1 = (function (){var statearr_31863 = state_31851;
(statearr_31863[(8)] = inst_31831);

return statearr_31863;
})();
var statearr_31864_31884 = state_31851__$1;
(statearr_31864_31884[(2)] = inst_31832);

(statearr_31864_31884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (14))){
var inst_31845 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
var statearr_31865_31885 = state_31851__$1;
(statearr_31865_31885[(2)] = inst_31845);

(statearr_31865_31885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (10))){
var state_31851__$1 = state_31851;
var statearr_31866_31886 = state_31851__$1;
(statearr_31866_31886[(2)] = fc);

(statearr_31866_31886[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31852 === (8))){
var inst_31840 = (state_31851[(2)]);
var state_31851__$1 = state_31851;
if(cljs.core.truth_(inst_31840)){
var statearr_31867_31887 = state_31851__$1;
(statearr_31867_31887[(1)] = (12));

} else {
var statearr_31868_31888 = state_31851__$1;
(statearr_31868_31888[(1)] = (13));

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
});})(c__29560__auto___31874,tc,fc))
;
return ((function (switch__29403__auto__,c__29560__auto___31874,tc,fc){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_31869 = [null,null,null,null,null,null,null,null,null];
(statearr_31869[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_31869[(1)] = (1));

return statearr_31869;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_31851){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31870){if((e31870 instanceof Object)){
var ex__29407__auto__ = e31870;
var statearr_31871_31889 = state_31851;
(statearr_31871_31889[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31890 = state_31851;
state_31851 = G__31890;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_31851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_31851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___31874,tc,fc))
})();
var state__29562__auto__ = (function (){var statearr_31872 = f__29561__auto__.call(null);
(statearr_31872[(6)] = c__29560__auto___31874);

return statearr_31872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___31874,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto__){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto__){
return (function (state_31911){
var state_val_31912 = (state_31911[(1)]);
if((state_val_31912 === (7))){
var inst_31907 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31913_31931 = state_31911__$1;
(statearr_31913_31931[(2)] = inst_31907);

(statearr_31913_31931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (1))){
var inst_31891 = init;
var state_31911__$1 = (function (){var statearr_31914 = state_31911;
(statearr_31914[(7)] = inst_31891);

return statearr_31914;
})();
var statearr_31915_31932 = state_31911__$1;
(statearr_31915_31932[(2)] = null);

(statearr_31915_31932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (4))){
var inst_31894 = (state_31911[(8)]);
var inst_31894__$1 = (state_31911[(2)]);
var inst_31895 = (inst_31894__$1 == null);
var state_31911__$1 = (function (){var statearr_31916 = state_31911;
(statearr_31916[(8)] = inst_31894__$1);

return statearr_31916;
})();
if(cljs.core.truth_(inst_31895)){
var statearr_31917_31933 = state_31911__$1;
(statearr_31917_31933[(1)] = (5));

} else {
var statearr_31918_31934 = state_31911__$1;
(statearr_31918_31934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (6))){
var inst_31898 = (state_31911[(9)]);
var inst_31891 = (state_31911[(7)]);
var inst_31894 = (state_31911[(8)]);
var inst_31898__$1 = f.call(null,inst_31891,inst_31894);
var inst_31899 = cljs.core.reduced_QMARK_.call(null,inst_31898__$1);
var state_31911__$1 = (function (){var statearr_31919 = state_31911;
(statearr_31919[(9)] = inst_31898__$1);

return statearr_31919;
})();
if(inst_31899){
var statearr_31920_31935 = state_31911__$1;
(statearr_31920_31935[(1)] = (8));

} else {
var statearr_31921_31936 = state_31911__$1;
(statearr_31921_31936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (3))){
var inst_31909 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31911__$1,inst_31909);
} else {
if((state_val_31912 === (2))){
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31911__$1,(4),ch);
} else {
if((state_val_31912 === (9))){
var inst_31898 = (state_31911[(9)]);
var inst_31891 = inst_31898;
var state_31911__$1 = (function (){var statearr_31922 = state_31911;
(statearr_31922[(7)] = inst_31891);

return statearr_31922;
})();
var statearr_31923_31937 = state_31911__$1;
(statearr_31923_31937[(2)] = null);

(statearr_31923_31937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (5))){
var inst_31891 = (state_31911[(7)]);
var state_31911__$1 = state_31911;
var statearr_31924_31938 = state_31911__$1;
(statearr_31924_31938[(2)] = inst_31891);

(statearr_31924_31938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (10))){
var inst_31905 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31925_31939 = state_31911__$1;
(statearr_31925_31939[(2)] = inst_31905);

(statearr_31925_31939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (8))){
var inst_31898 = (state_31911[(9)]);
var inst_31901 = cljs.core.deref.call(null,inst_31898);
var state_31911__$1 = state_31911;
var statearr_31926_31940 = state_31911__$1;
(statearr_31926_31940[(2)] = inst_31901);

(statearr_31926_31940[(1)] = (10));


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
});})(c__29560__auto__))
;
return ((function (switch__29403__auto__,c__29560__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29404__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29404__auto____0 = (function (){
var statearr_31927 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31927[(0)] = cljs$core$async$reduce_$_state_machine__29404__auto__);

(statearr_31927[(1)] = (1));

return statearr_31927;
});
var cljs$core$async$reduce_$_state_machine__29404__auto____1 = (function (state_31911){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31928){if((e31928 instanceof Object)){
var ex__29407__auto__ = e31928;
var statearr_31929_31941 = state_31911;
(statearr_31929_31941[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31942 = state_31911;
state_31911 = G__31942;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29404__auto__ = function(state_31911){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29404__auto____1.call(this,state_31911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29404__auto____0;
cljs$core$async$reduce_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29404__auto____1;
return cljs$core$async$reduce_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto__))
})();
var state__29562__auto__ = (function (){var statearr_31930 = f__29561__auto__.call(null);
(statearr_31930[(6)] = c__29560__auto__);

return statearr_31930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto__))
);

return c__29560__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto__,f__$1){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto__,f__$1){
return (function (state_31948){
var state_val_31949 = (state_31948[(1)]);
if((state_val_31949 === (1))){
var inst_31943 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31948__$1 = state_31948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31948__$1,(2),inst_31943);
} else {
if((state_val_31949 === (2))){
var inst_31945 = (state_31948[(2)]);
var inst_31946 = f__$1.call(null,inst_31945);
var state_31948__$1 = state_31948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31948__$1,inst_31946);
} else {
return null;
}
}
});})(c__29560__auto__,f__$1))
;
return ((function (switch__29403__auto__,c__29560__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29404__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29404__auto____0 = (function (){
var statearr_31950 = [null,null,null,null,null,null,null];
(statearr_31950[(0)] = cljs$core$async$transduce_$_state_machine__29404__auto__);

(statearr_31950[(1)] = (1));

return statearr_31950;
});
var cljs$core$async$transduce_$_state_machine__29404__auto____1 = (function (state_31948){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e31951){if((e31951 instanceof Object)){
var ex__29407__auto__ = e31951;
var statearr_31952_31954 = state_31948;
(statearr_31952_31954[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31955 = state_31948;
state_31948 = G__31955;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29404__auto__ = function(state_31948){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29404__auto____1.call(this,state_31948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29404__auto____0;
cljs$core$async$transduce_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29404__auto____1;
return cljs$core$async$transduce_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto__,f__$1))
})();
var state__29562__auto__ = (function (){var statearr_31953 = f__29561__auto__.call(null);
(statearr_31953[(6)] = c__29560__auto__);

return statearr_31953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto__,f__$1))
);

return c__29560__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31957 = arguments.length;
switch (G__31957) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto__){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto__){
return (function (state_31982){
var state_val_31983 = (state_31982[(1)]);
if((state_val_31983 === (7))){
var inst_31964 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
var statearr_31984_32005 = state_31982__$1;
(statearr_31984_32005[(2)] = inst_31964);

(statearr_31984_32005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (1))){
var inst_31958 = cljs.core.seq.call(null,coll);
var inst_31959 = inst_31958;
var state_31982__$1 = (function (){var statearr_31985 = state_31982;
(statearr_31985[(7)] = inst_31959);

return statearr_31985;
})();
var statearr_31986_32006 = state_31982__$1;
(statearr_31986_32006[(2)] = null);

(statearr_31986_32006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (4))){
var inst_31959 = (state_31982[(7)]);
var inst_31962 = cljs.core.first.call(null,inst_31959);
var state_31982__$1 = state_31982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31982__$1,(7),ch,inst_31962);
} else {
if((state_val_31983 === (13))){
var inst_31976 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
var statearr_31987_32007 = state_31982__$1;
(statearr_31987_32007[(2)] = inst_31976);

(statearr_31987_32007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (6))){
var inst_31967 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
if(cljs.core.truth_(inst_31967)){
var statearr_31988_32008 = state_31982__$1;
(statearr_31988_32008[(1)] = (8));

} else {
var statearr_31989_32009 = state_31982__$1;
(statearr_31989_32009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (3))){
var inst_31980 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31982__$1,inst_31980);
} else {
if((state_val_31983 === (12))){
var state_31982__$1 = state_31982;
var statearr_31990_32010 = state_31982__$1;
(statearr_31990_32010[(2)] = null);

(statearr_31990_32010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (2))){
var inst_31959 = (state_31982[(7)]);
var state_31982__$1 = state_31982;
if(cljs.core.truth_(inst_31959)){
var statearr_31991_32011 = state_31982__$1;
(statearr_31991_32011[(1)] = (4));

} else {
var statearr_31992_32012 = state_31982__$1;
(statearr_31992_32012[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (11))){
var inst_31973 = cljs.core.async.close_BANG_.call(null,ch);
var state_31982__$1 = state_31982;
var statearr_31993_32013 = state_31982__$1;
(statearr_31993_32013[(2)] = inst_31973);

(statearr_31993_32013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (9))){
var state_31982__$1 = state_31982;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31994_32014 = state_31982__$1;
(statearr_31994_32014[(1)] = (11));

} else {
var statearr_31995_32015 = state_31982__$1;
(statearr_31995_32015[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (5))){
var inst_31959 = (state_31982[(7)]);
var state_31982__$1 = state_31982;
var statearr_31996_32016 = state_31982__$1;
(statearr_31996_32016[(2)] = inst_31959);

(statearr_31996_32016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (10))){
var inst_31978 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
var statearr_31997_32017 = state_31982__$1;
(statearr_31997_32017[(2)] = inst_31978);

(statearr_31997_32017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (8))){
var inst_31959 = (state_31982[(7)]);
var inst_31969 = cljs.core.next.call(null,inst_31959);
var inst_31959__$1 = inst_31969;
var state_31982__$1 = (function (){var statearr_31998 = state_31982;
(statearr_31998[(7)] = inst_31959__$1);

return statearr_31998;
})();
var statearr_31999_32018 = state_31982__$1;
(statearr_31999_32018[(2)] = null);

(statearr_31999_32018[(1)] = (2));


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
});})(c__29560__auto__))
;
return ((function (switch__29403__auto__,c__29560__auto__){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_32000 = [null,null,null,null,null,null,null,null];
(statearr_32000[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_32000[(1)] = (1));

return statearr_32000;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_31982){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_31982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32001){if((e32001 instanceof Object)){
var ex__29407__auto__ = e32001;
var statearr_32002_32019 = state_31982;
(statearr_32002_32019[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32020 = state_31982;
state_31982 = G__32020;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_31982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_31982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto__))
})();
var state__29562__auto__ = (function (){var statearr_32003 = f__29561__auto__.call(null);
(statearr_32003[(6)] = c__29560__auto__);

return statearr_32003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto__))
);

return c__29560__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32021 = (function (ch,cs,meta32022){
this.ch = ch;
this.cs = cs;
this.meta32022 = meta32022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32023,meta32022__$1){
var self__ = this;
var _32023__$1 = this;
return (new cljs.core.async.t_cljs$core$async32021(self__.ch,self__.cs,meta32022__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32023){
var self__ = this;
var _32023__$1 = this;
return self__.meta32022;
});})(cs))
;

cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32021.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32022","meta32022",630855494,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32021";

cljs.core.async.t_cljs$core$async32021.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32021");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32021.
 */
cljs.core.async.__GT_t_cljs$core$async32021 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32021(ch__$1,cs__$1,meta32022){
return (new cljs.core.async.t_cljs$core$async32021(ch__$1,cs__$1,meta32022));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32021(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29560__auto___32243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___32243,cs,m,dchan,dctr,done){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___32243,cs,m,dchan,dctr,done){
return (function (state_32158){
var state_val_32159 = (state_32158[(1)]);
if((state_val_32159 === (7))){
var inst_32154 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32160_32244 = state_32158__$1;
(statearr_32160_32244[(2)] = inst_32154);

(statearr_32160_32244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (20))){
var inst_32057 = (state_32158[(7)]);
var inst_32069 = cljs.core.first.call(null,inst_32057);
var inst_32070 = cljs.core.nth.call(null,inst_32069,(0),null);
var inst_32071 = cljs.core.nth.call(null,inst_32069,(1),null);
var state_32158__$1 = (function (){var statearr_32161 = state_32158;
(statearr_32161[(8)] = inst_32070);

return statearr_32161;
})();
if(cljs.core.truth_(inst_32071)){
var statearr_32162_32245 = state_32158__$1;
(statearr_32162_32245[(1)] = (22));

} else {
var statearr_32163_32246 = state_32158__$1;
(statearr_32163_32246[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (27))){
var inst_32106 = (state_32158[(9)]);
var inst_32101 = (state_32158[(10)]);
var inst_32099 = (state_32158[(11)]);
var inst_32026 = (state_32158[(12)]);
var inst_32106__$1 = cljs.core._nth.call(null,inst_32099,inst_32101);
var inst_32107 = cljs.core.async.put_BANG_.call(null,inst_32106__$1,inst_32026,done);
var state_32158__$1 = (function (){var statearr_32164 = state_32158;
(statearr_32164[(9)] = inst_32106__$1);

return statearr_32164;
})();
if(cljs.core.truth_(inst_32107)){
var statearr_32165_32247 = state_32158__$1;
(statearr_32165_32247[(1)] = (30));

} else {
var statearr_32166_32248 = state_32158__$1;
(statearr_32166_32248[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (1))){
var state_32158__$1 = state_32158;
var statearr_32167_32249 = state_32158__$1;
(statearr_32167_32249[(2)] = null);

(statearr_32167_32249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (24))){
var inst_32057 = (state_32158[(7)]);
var inst_32076 = (state_32158[(2)]);
var inst_32077 = cljs.core.next.call(null,inst_32057);
var inst_32035 = inst_32077;
var inst_32036 = null;
var inst_32037 = (0);
var inst_32038 = (0);
var state_32158__$1 = (function (){var statearr_32168 = state_32158;
(statearr_32168[(13)] = inst_32036);

(statearr_32168[(14)] = inst_32035);

(statearr_32168[(15)] = inst_32038);

(statearr_32168[(16)] = inst_32076);

(statearr_32168[(17)] = inst_32037);

return statearr_32168;
})();
var statearr_32169_32250 = state_32158__$1;
(statearr_32169_32250[(2)] = null);

(statearr_32169_32250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (39))){
var state_32158__$1 = state_32158;
var statearr_32173_32251 = state_32158__$1;
(statearr_32173_32251[(2)] = null);

(statearr_32173_32251[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (4))){
var inst_32026 = (state_32158[(12)]);
var inst_32026__$1 = (state_32158[(2)]);
var inst_32027 = (inst_32026__$1 == null);
var state_32158__$1 = (function (){var statearr_32174 = state_32158;
(statearr_32174[(12)] = inst_32026__$1);

return statearr_32174;
})();
if(cljs.core.truth_(inst_32027)){
var statearr_32175_32252 = state_32158__$1;
(statearr_32175_32252[(1)] = (5));

} else {
var statearr_32176_32253 = state_32158__$1;
(statearr_32176_32253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (15))){
var inst_32036 = (state_32158[(13)]);
var inst_32035 = (state_32158[(14)]);
var inst_32038 = (state_32158[(15)]);
var inst_32037 = (state_32158[(17)]);
var inst_32053 = (state_32158[(2)]);
var inst_32054 = (inst_32038 + (1));
var tmp32170 = inst_32036;
var tmp32171 = inst_32035;
var tmp32172 = inst_32037;
var inst_32035__$1 = tmp32171;
var inst_32036__$1 = tmp32170;
var inst_32037__$1 = tmp32172;
var inst_32038__$1 = inst_32054;
var state_32158__$1 = (function (){var statearr_32177 = state_32158;
(statearr_32177[(13)] = inst_32036__$1);

(statearr_32177[(14)] = inst_32035__$1);

(statearr_32177[(15)] = inst_32038__$1);

(statearr_32177[(17)] = inst_32037__$1);

(statearr_32177[(18)] = inst_32053);

return statearr_32177;
})();
var statearr_32178_32254 = state_32158__$1;
(statearr_32178_32254[(2)] = null);

(statearr_32178_32254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (21))){
var inst_32080 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32182_32255 = state_32158__$1;
(statearr_32182_32255[(2)] = inst_32080);

(statearr_32182_32255[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (31))){
var inst_32106 = (state_32158[(9)]);
var inst_32110 = done.call(null,null);
var inst_32111 = cljs.core.async.untap_STAR_.call(null,m,inst_32106);
var state_32158__$1 = (function (){var statearr_32183 = state_32158;
(statearr_32183[(19)] = inst_32110);

return statearr_32183;
})();
var statearr_32184_32256 = state_32158__$1;
(statearr_32184_32256[(2)] = inst_32111);

(statearr_32184_32256[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (32))){
var inst_32098 = (state_32158[(20)]);
var inst_32101 = (state_32158[(10)]);
var inst_32099 = (state_32158[(11)]);
var inst_32100 = (state_32158[(21)]);
var inst_32113 = (state_32158[(2)]);
var inst_32114 = (inst_32101 + (1));
var tmp32179 = inst_32098;
var tmp32180 = inst_32099;
var tmp32181 = inst_32100;
var inst_32098__$1 = tmp32179;
var inst_32099__$1 = tmp32180;
var inst_32100__$1 = tmp32181;
var inst_32101__$1 = inst_32114;
var state_32158__$1 = (function (){var statearr_32185 = state_32158;
(statearr_32185[(20)] = inst_32098__$1);

(statearr_32185[(10)] = inst_32101__$1);

(statearr_32185[(11)] = inst_32099__$1);

(statearr_32185[(21)] = inst_32100__$1);

(statearr_32185[(22)] = inst_32113);

return statearr_32185;
})();
var statearr_32186_32257 = state_32158__$1;
(statearr_32186_32257[(2)] = null);

(statearr_32186_32257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (40))){
var inst_32126 = (state_32158[(23)]);
var inst_32130 = done.call(null,null);
var inst_32131 = cljs.core.async.untap_STAR_.call(null,m,inst_32126);
var state_32158__$1 = (function (){var statearr_32187 = state_32158;
(statearr_32187[(24)] = inst_32130);

return statearr_32187;
})();
var statearr_32188_32258 = state_32158__$1;
(statearr_32188_32258[(2)] = inst_32131);

(statearr_32188_32258[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (33))){
var inst_32117 = (state_32158[(25)]);
var inst_32119 = cljs.core.chunked_seq_QMARK_.call(null,inst_32117);
var state_32158__$1 = state_32158;
if(inst_32119){
var statearr_32189_32259 = state_32158__$1;
(statearr_32189_32259[(1)] = (36));

} else {
var statearr_32190_32260 = state_32158__$1;
(statearr_32190_32260[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (13))){
var inst_32047 = (state_32158[(26)]);
var inst_32050 = cljs.core.async.close_BANG_.call(null,inst_32047);
var state_32158__$1 = state_32158;
var statearr_32191_32261 = state_32158__$1;
(statearr_32191_32261[(2)] = inst_32050);

(statearr_32191_32261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (22))){
var inst_32070 = (state_32158[(8)]);
var inst_32073 = cljs.core.async.close_BANG_.call(null,inst_32070);
var state_32158__$1 = state_32158;
var statearr_32192_32262 = state_32158__$1;
(statearr_32192_32262[(2)] = inst_32073);

(statearr_32192_32262[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (36))){
var inst_32117 = (state_32158[(25)]);
var inst_32121 = cljs.core.chunk_first.call(null,inst_32117);
var inst_32122 = cljs.core.chunk_rest.call(null,inst_32117);
var inst_32123 = cljs.core.count.call(null,inst_32121);
var inst_32098 = inst_32122;
var inst_32099 = inst_32121;
var inst_32100 = inst_32123;
var inst_32101 = (0);
var state_32158__$1 = (function (){var statearr_32193 = state_32158;
(statearr_32193[(20)] = inst_32098);

(statearr_32193[(10)] = inst_32101);

(statearr_32193[(11)] = inst_32099);

(statearr_32193[(21)] = inst_32100);

return statearr_32193;
})();
var statearr_32194_32263 = state_32158__$1;
(statearr_32194_32263[(2)] = null);

(statearr_32194_32263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (41))){
var inst_32117 = (state_32158[(25)]);
var inst_32133 = (state_32158[(2)]);
var inst_32134 = cljs.core.next.call(null,inst_32117);
var inst_32098 = inst_32134;
var inst_32099 = null;
var inst_32100 = (0);
var inst_32101 = (0);
var state_32158__$1 = (function (){var statearr_32195 = state_32158;
(statearr_32195[(20)] = inst_32098);

(statearr_32195[(10)] = inst_32101);

(statearr_32195[(11)] = inst_32099);

(statearr_32195[(21)] = inst_32100);

(statearr_32195[(27)] = inst_32133);

return statearr_32195;
})();
var statearr_32196_32264 = state_32158__$1;
(statearr_32196_32264[(2)] = null);

(statearr_32196_32264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (43))){
var state_32158__$1 = state_32158;
var statearr_32197_32265 = state_32158__$1;
(statearr_32197_32265[(2)] = null);

(statearr_32197_32265[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (29))){
var inst_32142 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32198_32266 = state_32158__$1;
(statearr_32198_32266[(2)] = inst_32142);

(statearr_32198_32266[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (44))){
var inst_32151 = (state_32158[(2)]);
var state_32158__$1 = (function (){var statearr_32199 = state_32158;
(statearr_32199[(28)] = inst_32151);

return statearr_32199;
})();
var statearr_32200_32267 = state_32158__$1;
(statearr_32200_32267[(2)] = null);

(statearr_32200_32267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (6))){
var inst_32090 = (state_32158[(29)]);
var inst_32089 = cljs.core.deref.call(null,cs);
var inst_32090__$1 = cljs.core.keys.call(null,inst_32089);
var inst_32091 = cljs.core.count.call(null,inst_32090__$1);
var inst_32092 = cljs.core.reset_BANG_.call(null,dctr,inst_32091);
var inst_32097 = cljs.core.seq.call(null,inst_32090__$1);
var inst_32098 = inst_32097;
var inst_32099 = null;
var inst_32100 = (0);
var inst_32101 = (0);
var state_32158__$1 = (function (){var statearr_32201 = state_32158;
(statearr_32201[(20)] = inst_32098);

(statearr_32201[(10)] = inst_32101);

(statearr_32201[(11)] = inst_32099);

(statearr_32201[(21)] = inst_32100);

(statearr_32201[(29)] = inst_32090__$1);

(statearr_32201[(30)] = inst_32092);

return statearr_32201;
})();
var statearr_32202_32268 = state_32158__$1;
(statearr_32202_32268[(2)] = null);

(statearr_32202_32268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (28))){
var inst_32098 = (state_32158[(20)]);
var inst_32117 = (state_32158[(25)]);
var inst_32117__$1 = cljs.core.seq.call(null,inst_32098);
var state_32158__$1 = (function (){var statearr_32203 = state_32158;
(statearr_32203[(25)] = inst_32117__$1);

return statearr_32203;
})();
if(inst_32117__$1){
var statearr_32204_32269 = state_32158__$1;
(statearr_32204_32269[(1)] = (33));

} else {
var statearr_32205_32270 = state_32158__$1;
(statearr_32205_32270[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (25))){
var inst_32101 = (state_32158[(10)]);
var inst_32100 = (state_32158[(21)]);
var inst_32103 = (inst_32101 < inst_32100);
var inst_32104 = inst_32103;
var state_32158__$1 = state_32158;
if(cljs.core.truth_(inst_32104)){
var statearr_32206_32271 = state_32158__$1;
(statearr_32206_32271[(1)] = (27));

} else {
var statearr_32207_32272 = state_32158__$1;
(statearr_32207_32272[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (34))){
var state_32158__$1 = state_32158;
var statearr_32208_32273 = state_32158__$1;
(statearr_32208_32273[(2)] = null);

(statearr_32208_32273[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (17))){
var state_32158__$1 = state_32158;
var statearr_32209_32274 = state_32158__$1;
(statearr_32209_32274[(2)] = null);

(statearr_32209_32274[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (3))){
var inst_32156 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32158__$1,inst_32156);
} else {
if((state_val_32159 === (12))){
var inst_32085 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32210_32275 = state_32158__$1;
(statearr_32210_32275[(2)] = inst_32085);

(statearr_32210_32275[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (2))){
var state_32158__$1 = state_32158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32158__$1,(4),ch);
} else {
if((state_val_32159 === (23))){
var state_32158__$1 = state_32158;
var statearr_32211_32276 = state_32158__$1;
(statearr_32211_32276[(2)] = null);

(statearr_32211_32276[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (35))){
var inst_32140 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32212_32277 = state_32158__$1;
(statearr_32212_32277[(2)] = inst_32140);

(statearr_32212_32277[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (19))){
var inst_32057 = (state_32158[(7)]);
var inst_32061 = cljs.core.chunk_first.call(null,inst_32057);
var inst_32062 = cljs.core.chunk_rest.call(null,inst_32057);
var inst_32063 = cljs.core.count.call(null,inst_32061);
var inst_32035 = inst_32062;
var inst_32036 = inst_32061;
var inst_32037 = inst_32063;
var inst_32038 = (0);
var state_32158__$1 = (function (){var statearr_32213 = state_32158;
(statearr_32213[(13)] = inst_32036);

(statearr_32213[(14)] = inst_32035);

(statearr_32213[(15)] = inst_32038);

(statearr_32213[(17)] = inst_32037);

return statearr_32213;
})();
var statearr_32214_32278 = state_32158__$1;
(statearr_32214_32278[(2)] = null);

(statearr_32214_32278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (11))){
var inst_32035 = (state_32158[(14)]);
var inst_32057 = (state_32158[(7)]);
var inst_32057__$1 = cljs.core.seq.call(null,inst_32035);
var state_32158__$1 = (function (){var statearr_32215 = state_32158;
(statearr_32215[(7)] = inst_32057__$1);

return statearr_32215;
})();
if(inst_32057__$1){
var statearr_32216_32279 = state_32158__$1;
(statearr_32216_32279[(1)] = (16));

} else {
var statearr_32217_32280 = state_32158__$1;
(statearr_32217_32280[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (9))){
var inst_32087 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32218_32281 = state_32158__$1;
(statearr_32218_32281[(2)] = inst_32087);

(statearr_32218_32281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (5))){
var inst_32033 = cljs.core.deref.call(null,cs);
var inst_32034 = cljs.core.seq.call(null,inst_32033);
var inst_32035 = inst_32034;
var inst_32036 = null;
var inst_32037 = (0);
var inst_32038 = (0);
var state_32158__$1 = (function (){var statearr_32219 = state_32158;
(statearr_32219[(13)] = inst_32036);

(statearr_32219[(14)] = inst_32035);

(statearr_32219[(15)] = inst_32038);

(statearr_32219[(17)] = inst_32037);

return statearr_32219;
})();
var statearr_32220_32282 = state_32158__$1;
(statearr_32220_32282[(2)] = null);

(statearr_32220_32282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (14))){
var state_32158__$1 = state_32158;
var statearr_32221_32283 = state_32158__$1;
(statearr_32221_32283[(2)] = null);

(statearr_32221_32283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (45))){
var inst_32148 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32222_32284 = state_32158__$1;
(statearr_32222_32284[(2)] = inst_32148);

(statearr_32222_32284[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (26))){
var inst_32090 = (state_32158[(29)]);
var inst_32144 = (state_32158[(2)]);
var inst_32145 = cljs.core.seq.call(null,inst_32090);
var state_32158__$1 = (function (){var statearr_32223 = state_32158;
(statearr_32223[(31)] = inst_32144);

return statearr_32223;
})();
if(inst_32145){
var statearr_32224_32285 = state_32158__$1;
(statearr_32224_32285[(1)] = (42));

} else {
var statearr_32225_32286 = state_32158__$1;
(statearr_32225_32286[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (16))){
var inst_32057 = (state_32158[(7)]);
var inst_32059 = cljs.core.chunked_seq_QMARK_.call(null,inst_32057);
var state_32158__$1 = state_32158;
if(inst_32059){
var statearr_32226_32287 = state_32158__$1;
(statearr_32226_32287[(1)] = (19));

} else {
var statearr_32227_32288 = state_32158__$1;
(statearr_32227_32288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (38))){
var inst_32137 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32228_32289 = state_32158__$1;
(statearr_32228_32289[(2)] = inst_32137);

(statearr_32228_32289[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (30))){
var state_32158__$1 = state_32158;
var statearr_32229_32290 = state_32158__$1;
(statearr_32229_32290[(2)] = null);

(statearr_32229_32290[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (10))){
var inst_32036 = (state_32158[(13)]);
var inst_32038 = (state_32158[(15)]);
var inst_32046 = cljs.core._nth.call(null,inst_32036,inst_32038);
var inst_32047 = cljs.core.nth.call(null,inst_32046,(0),null);
var inst_32048 = cljs.core.nth.call(null,inst_32046,(1),null);
var state_32158__$1 = (function (){var statearr_32230 = state_32158;
(statearr_32230[(26)] = inst_32047);

return statearr_32230;
})();
if(cljs.core.truth_(inst_32048)){
var statearr_32231_32291 = state_32158__$1;
(statearr_32231_32291[(1)] = (13));

} else {
var statearr_32232_32292 = state_32158__$1;
(statearr_32232_32292[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (18))){
var inst_32083 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32233_32293 = state_32158__$1;
(statearr_32233_32293[(2)] = inst_32083);

(statearr_32233_32293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (42))){
var state_32158__$1 = state_32158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32158__$1,(45),dchan);
} else {
if((state_val_32159 === (37))){
var inst_32126 = (state_32158[(23)]);
var inst_32117 = (state_32158[(25)]);
var inst_32026 = (state_32158[(12)]);
var inst_32126__$1 = cljs.core.first.call(null,inst_32117);
var inst_32127 = cljs.core.async.put_BANG_.call(null,inst_32126__$1,inst_32026,done);
var state_32158__$1 = (function (){var statearr_32234 = state_32158;
(statearr_32234[(23)] = inst_32126__$1);

return statearr_32234;
})();
if(cljs.core.truth_(inst_32127)){
var statearr_32235_32294 = state_32158__$1;
(statearr_32235_32294[(1)] = (39));

} else {
var statearr_32236_32295 = state_32158__$1;
(statearr_32236_32295[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (8))){
var inst_32038 = (state_32158[(15)]);
var inst_32037 = (state_32158[(17)]);
var inst_32040 = (inst_32038 < inst_32037);
var inst_32041 = inst_32040;
var state_32158__$1 = state_32158;
if(cljs.core.truth_(inst_32041)){
var statearr_32237_32296 = state_32158__$1;
(statearr_32237_32296[(1)] = (10));

} else {
var statearr_32238_32297 = state_32158__$1;
(statearr_32238_32297[(1)] = (11));

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
});})(c__29560__auto___32243,cs,m,dchan,dctr,done))
;
return ((function (switch__29403__auto__,c__29560__auto___32243,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29404__auto__ = null;
var cljs$core$async$mult_$_state_machine__29404__auto____0 = (function (){
var statearr_32239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32239[(0)] = cljs$core$async$mult_$_state_machine__29404__auto__);

(statearr_32239[(1)] = (1));

return statearr_32239;
});
var cljs$core$async$mult_$_state_machine__29404__auto____1 = (function (state_32158){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_32158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32240){if((e32240 instanceof Object)){
var ex__29407__auto__ = e32240;
var statearr_32241_32298 = state_32158;
(statearr_32241_32298[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32299 = state_32158;
state_32158 = G__32299;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29404__auto__ = function(state_32158){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29404__auto____1.call(this,state_32158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29404__auto____0;
cljs$core$async$mult_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29404__auto____1;
return cljs$core$async$mult_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___32243,cs,m,dchan,dctr,done))
})();
var state__29562__auto__ = (function (){var statearr_32242 = f__29561__auto__.call(null);
(statearr_32242[(6)] = c__29560__auto___32243);

return statearr_32242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___32243,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32301 = arguments.length;
switch (G__32301) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32313 = arguments.length;
var i__4500__auto___32314 = (0);
while(true){
if((i__4500__auto___32314 < len__4499__auto___32313)){
args__4502__auto__.push((arguments[i__4500__auto___32314]));

var G__32315 = (i__4500__auto___32314 + (1));
i__4500__auto___32314 = G__32315;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32307){
var map__32308 = p__32307;
var map__32308__$1 = ((((!((map__32308 == null)))?(((((map__32308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32308):map__32308);
var opts = map__32308__$1;
var statearr_32310_32316 = state;
(statearr_32310_32316[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__32308,map__32308__$1,opts){
return (function (val){
var statearr_32311_32317 = state;
(statearr_32311_32317[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32308,map__32308__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_32312_32318 = state;
(statearr_32312_32318[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32303){
var G__32304 = cljs.core.first.call(null,seq32303);
var seq32303__$1 = cljs.core.next.call(null,seq32303);
var G__32305 = cljs.core.first.call(null,seq32303__$1);
var seq32303__$2 = cljs.core.next.call(null,seq32303__$1);
var G__32306 = cljs.core.first.call(null,seq32303__$2);
var seq32303__$3 = cljs.core.next.call(null,seq32303__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32304,G__32305,G__32306,seq32303__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32319 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32320){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32320 = meta32320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32321,meta32320__$1){
var self__ = this;
var _32321__$1 = this;
return (new cljs.core.async.t_cljs$core$async32319(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32320__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32321){
var self__ = this;
var _32321__$1 = this;
return self__.meta32320;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32319.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32319.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32319.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32319.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32319.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32319.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32319.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32319.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32319.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32320","meta32320",-530948738,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32319";

cljs.core.async.t_cljs$core$async32319.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32319");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32319.
 */
cljs.core.async.__GT_t_cljs$core$async32319 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32319(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32320){
return (new cljs.core.async.t_cljs$core$async32319(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32320));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32319(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29560__auto___32483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___32483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___32483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32423){
var state_val_32424 = (state_32423[(1)]);
if((state_val_32424 === (7))){
var inst_32338 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32425_32484 = state_32423__$1;
(statearr_32425_32484[(2)] = inst_32338);

(statearr_32425_32484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (20))){
var inst_32350 = (state_32423[(7)]);
var state_32423__$1 = state_32423;
var statearr_32426_32485 = state_32423__$1;
(statearr_32426_32485[(2)] = inst_32350);

(statearr_32426_32485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (27))){
var state_32423__$1 = state_32423;
var statearr_32427_32486 = state_32423__$1;
(statearr_32427_32486[(2)] = null);

(statearr_32427_32486[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (1))){
var inst_32325 = (state_32423[(8)]);
var inst_32325__$1 = calc_state.call(null);
var inst_32327 = (inst_32325__$1 == null);
var inst_32328 = cljs.core.not.call(null,inst_32327);
var state_32423__$1 = (function (){var statearr_32428 = state_32423;
(statearr_32428[(8)] = inst_32325__$1);

return statearr_32428;
})();
if(inst_32328){
var statearr_32429_32487 = state_32423__$1;
(statearr_32429_32487[(1)] = (2));

} else {
var statearr_32430_32488 = state_32423__$1;
(statearr_32430_32488[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (24))){
var inst_32374 = (state_32423[(9)]);
var inst_32397 = (state_32423[(10)]);
var inst_32383 = (state_32423[(11)]);
var inst_32397__$1 = inst_32374.call(null,inst_32383);
var state_32423__$1 = (function (){var statearr_32431 = state_32423;
(statearr_32431[(10)] = inst_32397__$1);

return statearr_32431;
})();
if(cljs.core.truth_(inst_32397__$1)){
var statearr_32432_32489 = state_32423__$1;
(statearr_32432_32489[(1)] = (29));

} else {
var statearr_32433_32490 = state_32423__$1;
(statearr_32433_32490[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (4))){
var inst_32341 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
if(cljs.core.truth_(inst_32341)){
var statearr_32434_32491 = state_32423__$1;
(statearr_32434_32491[(1)] = (8));

} else {
var statearr_32435_32492 = state_32423__$1;
(statearr_32435_32492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (15))){
var inst_32368 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
if(cljs.core.truth_(inst_32368)){
var statearr_32436_32493 = state_32423__$1;
(statearr_32436_32493[(1)] = (19));

} else {
var statearr_32437_32494 = state_32423__$1;
(statearr_32437_32494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (21))){
var inst_32373 = (state_32423[(12)]);
var inst_32373__$1 = (state_32423[(2)]);
var inst_32374 = cljs.core.get.call(null,inst_32373__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32375 = cljs.core.get.call(null,inst_32373__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32376 = cljs.core.get.call(null,inst_32373__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32423__$1 = (function (){var statearr_32438 = state_32423;
(statearr_32438[(9)] = inst_32374);

(statearr_32438[(12)] = inst_32373__$1);

(statearr_32438[(13)] = inst_32375);

return statearr_32438;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32423__$1,(22),inst_32376);
} else {
if((state_val_32424 === (31))){
var inst_32405 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
if(cljs.core.truth_(inst_32405)){
var statearr_32439_32495 = state_32423__$1;
(statearr_32439_32495[(1)] = (32));

} else {
var statearr_32440_32496 = state_32423__$1;
(statearr_32440_32496[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (32))){
var inst_32382 = (state_32423[(14)]);
var state_32423__$1 = state_32423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32423__$1,(35),out,inst_32382);
} else {
if((state_val_32424 === (33))){
var inst_32373 = (state_32423[(12)]);
var inst_32350 = inst_32373;
var state_32423__$1 = (function (){var statearr_32441 = state_32423;
(statearr_32441[(7)] = inst_32350);

return statearr_32441;
})();
var statearr_32442_32497 = state_32423__$1;
(statearr_32442_32497[(2)] = null);

(statearr_32442_32497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (13))){
var inst_32350 = (state_32423[(7)]);
var inst_32357 = inst_32350.cljs$lang$protocol_mask$partition0$;
var inst_32358 = (inst_32357 & (64));
var inst_32359 = inst_32350.cljs$core$ISeq$;
var inst_32360 = (cljs.core.PROTOCOL_SENTINEL === inst_32359);
var inst_32361 = ((inst_32358) || (inst_32360));
var state_32423__$1 = state_32423;
if(cljs.core.truth_(inst_32361)){
var statearr_32443_32498 = state_32423__$1;
(statearr_32443_32498[(1)] = (16));

} else {
var statearr_32444_32499 = state_32423__$1;
(statearr_32444_32499[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (22))){
var inst_32383 = (state_32423[(11)]);
var inst_32382 = (state_32423[(14)]);
var inst_32381 = (state_32423[(2)]);
var inst_32382__$1 = cljs.core.nth.call(null,inst_32381,(0),null);
var inst_32383__$1 = cljs.core.nth.call(null,inst_32381,(1),null);
var inst_32384 = (inst_32382__$1 == null);
var inst_32385 = cljs.core._EQ_.call(null,inst_32383__$1,change);
var inst_32386 = ((inst_32384) || (inst_32385));
var state_32423__$1 = (function (){var statearr_32445 = state_32423;
(statearr_32445[(11)] = inst_32383__$1);

(statearr_32445[(14)] = inst_32382__$1);

return statearr_32445;
})();
if(cljs.core.truth_(inst_32386)){
var statearr_32446_32500 = state_32423__$1;
(statearr_32446_32500[(1)] = (23));

} else {
var statearr_32447_32501 = state_32423__$1;
(statearr_32447_32501[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (36))){
var inst_32373 = (state_32423[(12)]);
var inst_32350 = inst_32373;
var state_32423__$1 = (function (){var statearr_32448 = state_32423;
(statearr_32448[(7)] = inst_32350);

return statearr_32448;
})();
var statearr_32449_32502 = state_32423__$1;
(statearr_32449_32502[(2)] = null);

(statearr_32449_32502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (29))){
var inst_32397 = (state_32423[(10)]);
var state_32423__$1 = state_32423;
var statearr_32450_32503 = state_32423__$1;
(statearr_32450_32503[(2)] = inst_32397);

(statearr_32450_32503[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (6))){
var state_32423__$1 = state_32423;
var statearr_32451_32504 = state_32423__$1;
(statearr_32451_32504[(2)] = false);

(statearr_32451_32504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (28))){
var inst_32393 = (state_32423[(2)]);
var inst_32394 = calc_state.call(null);
var inst_32350 = inst_32394;
var state_32423__$1 = (function (){var statearr_32452 = state_32423;
(statearr_32452[(7)] = inst_32350);

(statearr_32452[(15)] = inst_32393);

return statearr_32452;
})();
var statearr_32453_32505 = state_32423__$1;
(statearr_32453_32505[(2)] = null);

(statearr_32453_32505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (25))){
var inst_32419 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32454_32506 = state_32423__$1;
(statearr_32454_32506[(2)] = inst_32419);

(statearr_32454_32506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (34))){
var inst_32417 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32455_32507 = state_32423__$1;
(statearr_32455_32507[(2)] = inst_32417);

(statearr_32455_32507[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (17))){
var state_32423__$1 = state_32423;
var statearr_32456_32508 = state_32423__$1;
(statearr_32456_32508[(2)] = false);

(statearr_32456_32508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (3))){
var state_32423__$1 = state_32423;
var statearr_32457_32509 = state_32423__$1;
(statearr_32457_32509[(2)] = false);

(statearr_32457_32509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (12))){
var inst_32421 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32423__$1,inst_32421);
} else {
if((state_val_32424 === (2))){
var inst_32325 = (state_32423[(8)]);
var inst_32330 = inst_32325.cljs$lang$protocol_mask$partition0$;
var inst_32331 = (inst_32330 & (64));
var inst_32332 = inst_32325.cljs$core$ISeq$;
var inst_32333 = (cljs.core.PROTOCOL_SENTINEL === inst_32332);
var inst_32334 = ((inst_32331) || (inst_32333));
var state_32423__$1 = state_32423;
if(cljs.core.truth_(inst_32334)){
var statearr_32458_32510 = state_32423__$1;
(statearr_32458_32510[(1)] = (5));

} else {
var statearr_32459_32511 = state_32423__$1;
(statearr_32459_32511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (23))){
var inst_32382 = (state_32423[(14)]);
var inst_32388 = (inst_32382 == null);
var state_32423__$1 = state_32423;
if(cljs.core.truth_(inst_32388)){
var statearr_32460_32512 = state_32423__$1;
(statearr_32460_32512[(1)] = (26));

} else {
var statearr_32461_32513 = state_32423__$1;
(statearr_32461_32513[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (35))){
var inst_32408 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
if(cljs.core.truth_(inst_32408)){
var statearr_32462_32514 = state_32423__$1;
(statearr_32462_32514[(1)] = (36));

} else {
var statearr_32463_32515 = state_32423__$1;
(statearr_32463_32515[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (19))){
var inst_32350 = (state_32423[(7)]);
var inst_32370 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32350);
var state_32423__$1 = state_32423;
var statearr_32464_32516 = state_32423__$1;
(statearr_32464_32516[(2)] = inst_32370);

(statearr_32464_32516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (11))){
var inst_32350 = (state_32423[(7)]);
var inst_32354 = (inst_32350 == null);
var inst_32355 = cljs.core.not.call(null,inst_32354);
var state_32423__$1 = state_32423;
if(inst_32355){
var statearr_32465_32517 = state_32423__$1;
(statearr_32465_32517[(1)] = (13));

} else {
var statearr_32466_32518 = state_32423__$1;
(statearr_32466_32518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (9))){
var inst_32325 = (state_32423[(8)]);
var state_32423__$1 = state_32423;
var statearr_32467_32519 = state_32423__$1;
(statearr_32467_32519[(2)] = inst_32325);

(statearr_32467_32519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (5))){
var state_32423__$1 = state_32423;
var statearr_32468_32520 = state_32423__$1;
(statearr_32468_32520[(2)] = true);

(statearr_32468_32520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (14))){
var state_32423__$1 = state_32423;
var statearr_32469_32521 = state_32423__$1;
(statearr_32469_32521[(2)] = false);

(statearr_32469_32521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (26))){
var inst_32383 = (state_32423[(11)]);
var inst_32390 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32383);
var state_32423__$1 = state_32423;
var statearr_32470_32522 = state_32423__$1;
(statearr_32470_32522[(2)] = inst_32390);

(statearr_32470_32522[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (16))){
var state_32423__$1 = state_32423;
var statearr_32471_32523 = state_32423__$1;
(statearr_32471_32523[(2)] = true);

(statearr_32471_32523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (38))){
var inst_32413 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32472_32524 = state_32423__$1;
(statearr_32472_32524[(2)] = inst_32413);

(statearr_32472_32524[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (30))){
var inst_32374 = (state_32423[(9)]);
var inst_32383 = (state_32423[(11)]);
var inst_32375 = (state_32423[(13)]);
var inst_32400 = cljs.core.empty_QMARK_.call(null,inst_32374);
var inst_32401 = inst_32375.call(null,inst_32383);
var inst_32402 = cljs.core.not.call(null,inst_32401);
var inst_32403 = ((inst_32400) && (inst_32402));
var state_32423__$1 = state_32423;
var statearr_32473_32525 = state_32423__$1;
(statearr_32473_32525[(2)] = inst_32403);

(statearr_32473_32525[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (10))){
var inst_32325 = (state_32423[(8)]);
var inst_32346 = (state_32423[(2)]);
var inst_32347 = cljs.core.get.call(null,inst_32346,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32348 = cljs.core.get.call(null,inst_32346,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32349 = cljs.core.get.call(null,inst_32346,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32350 = inst_32325;
var state_32423__$1 = (function (){var statearr_32474 = state_32423;
(statearr_32474[(7)] = inst_32350);

(statearr_32474[(16)] = inst_32347);

(statearr_32474[(17)] = inst_32349);

(statearr_32474[(18)] = inst_32348);

return statearr_32474;
})();
var statearr_32475_32526 = state_32423__$1;
(statearr_32475_32526[(2)] = null);

(statearr_32475_32526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (18))){
var inst_32365 = (state_32423[(2)]);
var state_32423__$1 = state_32423;
var statearr_32476_32527 = state_32423__$1;
(statearr_32476_32527[(2)] = inst_32365);

(statearr_32476_32527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (37))){
var state_32423__$1 = state_32423;
var statearr_32477_32528 = state_32423__$1;
(statearr_32477_32528[(2)] = null);

(statearr_32477_32528[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32424 === (8))){
var inst_32325 = (state_32423[(8)]);
var inst_32343 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32325);
var state_32423__$1 = state_32423;
var statearr_32478_32529 = state_32423__$1;
(statearr_32478_32529[(2)] = inst_32343);

(statearr_32478_32529[(1)] = (10));


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
});})(c__29560__auto___32483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29403__auto__,c__29560__auto___32483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29404__auto__ = null;
var cljs$core$async$mix_$_state_machine__29404__auto____0 = (function (){
var statearr_32479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32479[(0)] = cljs$core$async$mix_$_state_machine__29404__auto__);

(statearr_32479[(1)] = (1));

return statearr_32479;
});
var cljs$core$async$mix_$_state_machine__29404__auto____1 = (function (state_32423){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_32423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32480){if((e32480 instanceof Object)){
var ex__29407__auto__ = e32480;
var statearr_32481_32530 = state_32423;
(statearr_32481_32530[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32531 = state_32423;
state_32423 = G__32531;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29404__auto__ = function(state_32423){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29404__auto____1.call(this,state_32423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29404__auto____0;
cljs$core$async$mix_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29404__auto____1;
return cljs$core$async$mix_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___32483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29562__auto__ = (function (){var statearr_32482 = f__29561__auto__.call(null);
(statearr_32482[(6)] = c__29560__auto___32483);

return statearr_32482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___32483,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32533 = arguments.length;
switch (G__32533) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__32537 = arguments.length;
switch (G__32537) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__32535_SHARP_){
if(cljs.core.truth_(p1__32535_SHARP_.call(null,topic))){
return p1__32535_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32535_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32538 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32539){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32539 = meta32539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32540,meta32539__$1){
var self__ = this;
var _32540__$1 = this;
return (new cljs.core.async.t_cljs$core$async32538(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32539__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32540){
var self__ = this;
var _32540__$1 = this;
return self__.meta32539;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32538.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32539","meta32539",-457614455,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32538";

cljs.core.async.t_cljs$core$async32538.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32538");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32538.
 */
cljs.core.async.__GT_t_cljs$core$async32538 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32538(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32539){
return (new cljs.core.async.t_cljs$core$async32538(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32539));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32538(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29560__auto___32658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___32658,mults,ensure_mult,p){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___32658,mults,ensure_mult,p){
return (function (state_32612){
var state_val_32613 = (state_32612[(1)]);
if((state_val_32613 === (7))){
var inst_32608 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32614_32659 = state_32612__$1;
(statearr_32614_32659[(2)] = inst_32608);

(statearr_32614_32659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (20))){
var state_32612__$1 = state_32612;
var statearr_32615_32660 = state_32612__$1;
(statearr_32615_32660[(2)] = null);

(statearr_32615_32660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (1))){
var state_32612__$1 = state_32612;
var statearr_32616_32661 = state_32612__$1;
(statearr_32616_32661[(2)] = null);

(statearr_32616_32661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (24))){
var inst_32591 = (state_32612[(7)]);
var inst_32600 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32591);
var state_32612__$1 = state_32612;
var statearr_32617_32662 = state_32612__$1;
(statearr_32617_32662[(2)] = inst_32600);

(statearr_32617_32662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (4))){
var inst_32543 = (state_32612[(8)]);
var inst_32543__$1 = (state_32612[(2)]);
var inst_32544 = (inst_32543__$1 == null);
var state_32612__$1 = (function (){var statearr_32618 = state_32612;
(statearr_32618[(8)] = inst_32543__$1);

return statearr_32618;
})();
if(cljs.core.truth_(inst_32544)){
var statearr_32619_32663 = state_32612__$1;
(statearr_32619_32663[(1)] = (5));

} else {
var statearr_32620_32664 = state_32612__$1;
(statearr_32620_32664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (15))){
var inst_32585 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32621_32665 = state_32612__$1;
(statearr_32621_32665[(2)] = inst_32585);

(statearr_32621_32665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (21))){
var inst_32605 = (state_32612[(2)]);
var state_32612__$1 = (function (){var statearr_32622 = state_32612;
(statearr_32622[(9)] = inst_32605);

return statearr_32622;
})();
var statearr_32623_32666 = state_32612__$1;
(statearr_32623_32666[(2)] = null);

(statearr_32623_32666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (13))){
var inst_32567 = (state_32612[(10)]);
var inst_32569 = cljs.core.chunked_seq_QMARK_.call(null,inst_32567);
var state_32612__$1 = state_32612;
if(inst_32569){
var statearr_32624_32667 = state_32612__$1;
(statearr_32624_32667[(1)] = (16));

} else {
var statearr_32625_32668 = state_32612__$1;
(statearr_32625_32668[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (22))){
var inst_32597 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
if(cljs.core.truth_(inst_32597)){
var statearr_32626_32669 = state_32612__$1;
(statearr_32626_32669[(1)] = (23));

} else {
var statearr_32627_32670 = state_32612__$1;
(statearr_32627_32670[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (6))){
var inst_32543 = (state_32612[(8)]);
var inst_32593 = (state_32612[(11)]);
var inst_32591 = (state_32612[(7)]);
var inst_32591__$1 = topic_fn.call(null,inst_32543);
var inst_32592 = cljs.core.deref.call(null,mults);
var inst_32593__$1 = cljs.core.get.call(null,inst_32592,inst_32591__$1);
var state_32612__$1 = (function (){var statearr_32628 = state_32612;
(statearr_32628[(11)] = inst_32593__$1);

(statearr_32628[(7)] = inst_32591__$1);

return statearr_32628;
})();
if(cljs.core.truth_(inst_32593__$1)){
var statearr_32629_32671 = state_32612__$1;
(statearr_32629_32671[(1)] = (19));

} else {
var statearr_32630_32672 = state_32612__$1;
(statearr_32630_32672[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (25))){
var inst_32602 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32631_32673 = state_32612__$1;
(statearr_32631_32673[(2)] = inst_32602);

(statearr_32631_32673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (17))){
var inst_32567 = (state_32612[(10)]);
var inst_32576 = cljs.core.first.call(null,inst_32567);
var inst_32577 = cljs.core.async.muxch_STAR_.call(null,inst_32576);
var inst_32578 = cljs.core.async.close_BANG_.call(null,inst_32577);
var inst_32579 = cljs.core.next.call(null,inst_32567);
var inst_32553 = inst_32579;
var inst_32554 = null;
var inst_32555 = (0);
var inst_32556 = (0);
var state_32612__$1 = (function (){var statearr_32632 = state_32612;
(statearr_32632[(12)] = inst_32555);

(statearr_32632[(13)] = inst_32578);

(statearr_32632[(14)] = inst_32556);

(statearr_32632[(15)] = inst_32554);

(statearr_32632[(16)] = inst_32553);

return statearr_32632;
})();
var statearr_32633_32674 = state_32612__$1;
(statearr_32633_32674[(2)] = null);

(statearr_32633_32674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (3))){
var inst_32610 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32612__$1,inst_32610);
} else {
if((state_val_32613 === (12))){
var inst_32587 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32634_32675 = state_32612__$1;
(statearr_32634_32675[(2)] = inst_32587);

(statearr_32634_32675[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (2))){
var state_32612__$1 = state_32612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32612__$1,(4),ch);
} else {
if((state_val_32613 === (23))){
var state_32612__$1 = state_32612;
var statearr_32635_32676 = state_32612__$1;
(statearr_32635_32676[(2)] = null);

(statearr_32635_32676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (19))){
var inst_32543 = (state_32612[(8)]);
var inst_32593 = (state_32612[(11)]);
var inst_32595 = cljs.core.async.muxch_STAR_.call(null,inst_32593);
var state_32612__$1 = state_32612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32612__$1,(22),inst_32595,inst_32543);
} else {
if((state_val_32613 === (11))){
var inst_32553 = (state_32612[(16)]);
var inst_32567 = (state_32612[(10)]);
var inst_32567__$1 = cljs.core.seq.call(null,inst_32553);
var state_32612__$1 = (function (){var statearr_32636 = state_32612;
(statearr_32636[(10)] = inst_32567__$1);

return statearr_32636;
})();
if(inst_32567__$1){
var statearr_32637_32677 = state_32612__$1;
(statearr_32637_32677[(1)] = (13));

} else {
var statearr_32638_32678 = state_32612__$1;
(statearr_32638_32678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (9))){
var inst_32589 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32639_32679 = state_32612__$1;
(statearr_32639_32679[(2)] = inst_32589);

(statearr_32639_32679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (5))){
var inst_32550 = cljs.core.deref.call(null,mults);
var inst_32551 = cljs.core.vals.call(null,inst_32550);
var inst_32552 = cljs.core.seq.call(null,inst_32551);
var inst_32553 = inst_32552;
var inst_32554 = null;
var inst_32555 = (0);
var inst_32556 = (0);
var state_32612__$1 = (function (){var statearr_32640 = state_32612;
(statearr_32640[(12)] = inst_32555);

(statearr_32640[(14)] = inst_32556);

(statearr_32640[(15)] = inst_32554);

(statearr_32640[(16)] = inst_32553);

return statearr_32640;
})();
var statearr_32641_32680 = state_32612__$1;
(statearr_32641_32680[(2)] = null);

(statearr_32641_32680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (14))){
var state_32612__$1 = state_32612;
var statearr_32645_32681 = state_32612__$1;
(statearr_32645_32681[(2)] = null);

(statearr_32645_32681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (16))){
var inst_32567 = (state_32612[(10)]);
var inst_32571 = cljs.core.chunk_first.call(null,inst_32567);
var inst_32572 = cljs.core.chunk_rest.call(null,inst_32567);
var inst_32573 = cljs.core.count.call(null,inst_32571);
var inst_32553 = inst_32572;
var inst_32554 = inst_32571;
var inst_32555 = inst_32573;
var inst_32556 = (0);
var state_32612__$1 = (function (){var statearr_32646 = state_32612;
(statearr_32646[(12)] = inst_32555);

(statearr_32646[(14)] = inst_32556);

(statearr_32646[(15)] = inst_32554);

(statearr_32646[(16)] = inst_32553);

return statearr_32646;
})();
var statearr_32647_32682 = state_32612__$1;
(statearr_32647_32682[(2)] = null);

(statearr_32647_32682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (10))){
var inst_32555 = (state_32612[(12)]);
var inst_32556 = (state_32612[(14)]);
var inst_32554 = (state_32612[(15)]);
var inst_32553 = (state_32612[(16)]);
var inst_32561 = cljs.core._nth.call(null,inst_32554,inst_32556);
var inst_32562 = cljs.core.async.muxch_STAR_.call(null,inst_32561);
var inst_32563 = cljs.core.async.close_BANG_.call(null,inst_32562);
var inst_32564 = (inst_32556 + (1));
var tmp32642 = inst_32555;
var tmp32643 = inst_32554;
var tmp32644 = inst_32553;
var inst_32553__$1 = tmp32644;
var inst_32554__$1 = tmp32643;
var inst_32555__$1 = tmp32642;
var inst_32556__$1 = inst_32564;
var state_32612__$1 = (function (){var statearr_32648 = state_32612;
(statearr_32648[(17)] = inst_32563);

(statearr_32648[(12)] = inst_32555__$1);

(statearr_32648[(14)] = inst_32556__$1);

(statearr_32648[(15)] = inst_32554__$1);

(statearr_32648[(16)] = inst_32553__$1);

return statearr_32648;
})();
var statearr_32649_32683 = state_32612__$1;
(statearr_32649_32683[(2)] = null);

(statearr_32649_32683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (18))){
var inst_32582 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32650_32684 = state_32612__$1;
(statearr_32650_32684[(2)] = inst_32582);

(statearr_32650_32684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (8))){
var inst_32555 = (state_32612[(12)]);
var inst_32556 = (state_32612[(14)]);
var inst_32558 = (inst_32556 < inst_32555);
var inst_32559 = inst_32558;
var state_32612__$1 = state_32612;
if(cljs.core.truth_(inst_32559)){
var statearr_32651_32685 = state_32612__$1;
(statearr_32651_32685[(1)] = (10));

} else {
var statearr_32652_32686 = state_32612__$1;
(statearr_32652_32686[(1)] = (11));

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
});})(c__29560__auto___32658,mults,ensure_mult,p))
;
return ((function (switch__29403__auto__,c__29560__auto___32658,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_32653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32653[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_32653[(1)] = (1));

return statearr_32653;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_32612){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_32612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32654){if((e32654 instanceof Object)){
var ex__29407__auto__ = e32654;
var statearr_32655_32687 = state_32612;
(statearr_32655_32687[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32688 = state_32612;
state_32612 = G__32688;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_32612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_32612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___32658,mults,ensure_mult,p))
})();
var state__29562__auto__ = (function (){var statearr_32656 = f__29561__auto__.call(null);
(statearr_32656[(6)] = c__29560__auto___32658);

return statearr_32656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___32658,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32690 = arguments.length;
switch (G__32690) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32693 = arguments.length;
switch (G__32693) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__32696 = arguments.length;
switch (G__32696) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29560__auto___32763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___32763,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___32763,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32735){
var state_val_32736 = (state_32735[(1)]);
if((state_val_32736 === (7))){
var state_32735__$1 = state_32735;
var statearr_32737_32764 = state_32735__$1;
(statearr_32737_32764[(2)] = null);

(statearr_32737_32764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (1))){
var state_32735__$1 = state_32735;
var statearr_32738_32765 = state_32735__$1;
(statearr_32738_32765[(2)] = null);

(statearr_32738_32765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (4))){
var inst_32699 = (state_32735[(7)]);
var inst_32701 = (inst_32699 < cnt);
var state_32735__$1 = state_32735;
if(cljs.core.truth_(inst_32701)){
var statearr_32739_32766 = state_32735__$1;
(statearr_32739_32766[(1)] = (6));

} else {
var statearr_32740_32767 = state_32735__$1;
(statearr_32740_32767[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (15))){
var inst_32731 = (state_32735[(2)]);
var state_32735__$1 = state_32735;
var statearr_32741_32768 = state_32735__$1;
(statearr_32741_32768[(2)] = inst_32731);

(statearr_32741_32768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (13))){
var inst_32724 = cljs.core.async.close_BANG_.call(null,out);
var state_32735__$1 = state_32735;
var statearr_32742_32769 = state_32735__$1;
(statearr_32742_32769[(2)] = inst_32724);

(statearr_32742_32769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (6))){
var state_32735__$1 = state_32735;
var statearr_32743_32770 = state_32735__$1;
(statearr_32743_32770[(2)] = null);

(statearr_32743_32770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (3))){
var inst_32733 = (state_32735[(2)]);
var state_32735__$1 = state_32735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32735__$1,inst_32733);
} else {
if((state_val_32736 === (12))){
var inst_32721 = (state_32735[(8)]);
var inst_32721__$1 = (state_32735[(2)]);
var inst_32722 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32721__$1);
var state_32735__$1 = (function (){var statearr_32744 = state_32735;
(statearr_32744[(8)] = inst_32721__$1);

return statearr_32744;
})();
if(cljs.core.truth_(inst_32722)){
var statearr_32745_32771 = state_32735__$1;
(statearr_32745_32771[(1)] = (13));

} else {
var statearr_32746_32772 = state_32735__$1;
(statearr_32746_32772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (2))){
var inst_32698 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32699 = (0);
var state_32735__$1 = (function (){var statearr_32747 = state_32735;
(statearr_32747[(7)] = inst_32699);

(statearr_32747[(9)] = inst_32698);

return statearr_32747;
})();
var statearr_32748_32773 = state_32735__$1;
(statearr_32748_32773[(2)] = null);

(statearr_32748_32773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (11))){
var inst_32699 = (state_32735[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32735,(10),Object,null,(9));
var inst_32708 = chs__$1.call(null,inst_32699);
var inst_32709 = done.call(null,inst_32699);
var inst_32710 = cljs.core.async.take_BANG_.call(null,inst_32708,inst_32709);
var state_32735__$1 = state_32735;
var statearr_32749_32774 = state_32735__$1;
(statearr_32749_32774[(2)] = inst_32710);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32735__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (9))){
var inst_32699 = (state_32735[(7)]);
var inst_32712 = (state_32735[(2)]);
var inst_32713 = (inst_32699 + (1));
var inst_32699__$1 = inst_32713;
var state_32735__$1 = (function (){var statearr_32750 = state_32735;
(statearr_32750[(7)] = inst_32699__$1);

(statearr_32750[(10)] = inst_32712);

return statearr_32750;
})();
var statearr_32751_32775 = state_32735__$1;
(statearr_32751_32775[(2)] = null);

(statearr_32751_32775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (5))){
var inst_32719 = (state_32735[(2)]);
var state_32735__$1 = (function (){var statearr_32752 = state_32735;
(statearr_32752[(11)] = inst_32719);

return statearr_32752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32735__$1,(12),dchan);
} else {
if((state_val_32736 === (14))){
var inst_32721 = (state_32735[(8)]);
var inst_32726 = cljs.core.apply.call(null,f,inst_32721);
var state_32735__$1 = state_32735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32735__$1,(16),out,inst_32726);
} else {
if((state_val_32736 === (16))){
var inst_32728 = (state_32735[(2)]);
var state_32735__$1 = (function (){var statearr_32753 = state_32735;
(statearr_32753[(12)] = inst_32728);

return statearr_32753;
})();
var statearr_32754_32776 = state_32735__$1;
(statearr_32754_32776[(2)] = null);

(statearr_32754_32776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (10))){
var inst_32703 = (state_32735[(2)]);
var inst_32704 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32735__$1 = (function (){var statearr_32755 = state_32735;
(statearr_32755[(13)] = inst_32703);

return statearr_32755;
})();
var statearr_32756_32777 = state_32735__$1;
(statearr_32756_32777[(2)] = inst_32704);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32735__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (8))){
var inst_32717 = (state_32735[(2)]);
var state_32735__$1 = state_32735;
var statearr_32757_32778 = state_32735__$1;
(statearr_32757_32778[(2)] = inst_32717);

(statearr_32757_32778[(1)] = (5));


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
});})(c__29560__auto___32763,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29403__auto__,c__29560__auto___32763,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_32758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32758[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_32758[(1)] = (1));

return statearr_32758;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_32735){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_32735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32759){if((e32759 instanceof Object)){
var ex__29407__auto__ = e32759;
var statearr_32760_32779 = state_32735;
(statearr_32760_32779[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32780 = state_32735;
state_32735 = G__32780;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_32735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_32735);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___32763,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29562__auto__ = (function (){var statearr_32761 = f__29561__auto__.call(null);
(statearr_32761[(6)] = c__29560__auto___32763);

return statearr_32761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___32763,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32783 = arguments.length;
switch (G__32783) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29560__auto___32837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___32837,out){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___32837,out){
return (function (state_32815){
var state_val_32816 = (state_32815[(1)]);
if((state_val_32816 === (7))){
var inst_32794 = (state_32815[(7)]);
var inst_32795 = (state_32815[(8)]);
var inst_32794__$1 = (state_32815[(2)]);
var inst_32795__$1 = cljs.core.nth.call(null,inst_32794__$1,(0),null);
var inst_32796 = cljs.core.nth.call(null,inst_32794__$1,(1),null);
var inst_32797 = (inst_32795__$1 == null);
var state_32815__$1 = (function (){var statearr_32817 = state_32815;
(statearr_32817[(7)] = inst_32794__$1);

(statearr_32817[(8)] = inst_32795__$1);

(statearr_32817[(9)] = inst_32796);

return statearr_32817;
})();
if(cljs.core.truth_(inst_32797)){
var statearr_32818_32838 = state_32815__$1;
(statearr_32818_32838[(1)] = (8));

} else {
var statearr_32819_32839 = state_32815__$1;
(statearr_32819_32839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (1))){
var inst_32784 = cljs.core.vec.call(null,chs);
var inst_32785 = inst_32784;
var state_32815__$1 = (function (){var statearr_32820 = state_32815;
(statearr_32820[(10)] = inst_32785);

return statearr_32820;
})();
var statearr_32821_32840 = state_32815__$1;
(statearr_32821_32840[(2)] = null);

(statearr_32821_32840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (4))){
var inst_32785 = (state_32815[(10)]);
var state_32815__$1 = state_32815;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32815__$1,(7),inst_32785);
} else {
if((state_val_32816 === (6))){
var inst_32811 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32822_32841 = state_32815__$1;
(statearr_32822_32841[(2)] = inst_32811);

(statearr_32822_32841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (3))){
var inst_32813 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32815__$1,inst_32813);
} else {
if((state_val_32816 === (2))){
var inst_32785 = (state_32815[(10)]);
var inst_32787 = cljs.core.count.call(null,inst_32785);
var inst_32788 = (inst_32787 > (0));
var state_32815__$1 = state_32815;
if(cljs.core.truth_(inst_32788)){
var statearr_32824_32842 = state_32815__$1;
(statearr_32824_32842[(1)] = (4));

} else {
var statearr_32825_32843 = state_32815__$1;
(statearr_32825_32843[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (11))){
var inst_32785 = (state_32815[(10)]);
var inst_32804 = (state_32815[(2)]);
var tmp32823 = inst_32785;
var inst_32785__$1 = tmp32823;
var state_32815__$1 = (function (){var statearr_32826 = state_32815;
(statearr_32826[(10)] = inst_32785__$1);

(statearr_32826[(11)] = inst_32804);

return statearr_32826;
})();
var statearr_32827_32844 = state_32815__$1;
(statearr_32827_32844[(2)] = null);

(statearr_32827_32844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (9))){
var inst_32795 = (state_32815[(8)]);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32815__$1,(11),out,inst_32795);
} else {
if((state_val_32816 === (5))){
var inst_32809 = cljs.core.async.close_BANG_.call(null,out);
var state_32815__$1 = state_32815;
var statearr_32828_32845 = state_32815__$1;
(statearr_32828_32845[(2)] = inst_32809);

(statearr_32828_32845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (10))){
var inst_32807 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32829_32846 = state_32815__$1;
(statearr_32829_32846[(2)] = inst_32807);

(statearr_32829_32846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (8))){
var inst_32785 = (state_32815[(10)]);
var inst_32794 = (state_32815[(7)]);
var inst_32795 = (state_32815[(8)]);
var inst_32796 = (state_32815[(9)]);
var inst_32799 = (function (){var cs = inst_32785;
var vec__32790 = inst_32794;
var v = inst_32795;
var c = inst_32796;
return ((function (cs,vec__32790,v,c,inst_32785,inst_32794,inst_32795,inst_32796,state_val_32816,c__29560__auto___32837,out){
return (function (p1__32781_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32781_SHARP_);
});
;})(cs,vec__32790,v,c,inst_32785,inst_32794,inst_32795,inst_32796,state_val_32816,c__29560__auto___32837,out))
})();
var inst_32800 = cljs.core.filterv.call(null,inst_32799,inst_32785);
var inst_32785__$1 = inst_32800;
var state_32815__$1 = (function (){var statearr_32830 = state_32815;
(statearr_32830[(10)] = inst_32785__$1);

return statearr_32830;
})();
var statearr_32831_32847 = state_32815__$1;
(statearr_32831_32847[(2)] = null);

(statearr_32831_32847[(1)] = (2));


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
});})(c__29560__auto___32837,out))
;
return ((function (switch__29403__auto__,c__29560__auto___32837,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_32832 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32832[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_32832[(1)] = (1));

return statearr_32832;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_32815){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_32815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32833){if((e32833 instanceof Object)){
var ex__29407__auto__ = e32833;
var statearr_32834_32848 = state_32815;
(statearr_32834_32848[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32849 = state_32815;
state_32815 = G__32849;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_32815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_32815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___32837,out))
})();
var state__29562__auto__ = (function (){var statearr_32835 = f__29561__auto__.call(null);
(statearr_32835[(6)] = c__29560__auto___32837);

return statearr_32835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___32837,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32851 = arguments.length;
switch (G__32851) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29560__auto___32896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___32896,out){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___32896,out){
return (function (state_32875){
var state_val_32876 = (state_32875[(1)]);
if((state_val_32876 === (7))){
var inst_32857 = (state_32875[(7)]);
var inst_32857__$1 = (state_32875[(2)]);
var inst_32858 = (inst_32857__$1 == null);
var inst_32859 = cljs.core.not.call(null,inst_32858);
var state_32875__$1 = (function (){var statearr_32877 = state_32875;
(statearr_32877[(7)] = inst_32857__$1);

return statearr_32877;
})();
if(inst_32859){
var statearr_32878_32897 = state_32875__$1;
(statearr_32878_32897[(1)] = (8));

} else {
var statearr_32879_32898 = state_32875__$1;
(statearr_32879_32898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (1))){
var inst_32852 = (0);
var state_32875__$1 = (function (){var statearr_32880 = state_32875;
(statearr_32880[(8)] = inst_32852);

return statearr_32880;
})();
var statearr_32881_32899 = state_32875__$1;
(statearr_32881_32899[(2)] = null);

(statearr_32881_32899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (4))){
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32875__$1,(7),ch);
} else {
if((state_val_32876 === (6))){
var inst_32870 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32882_32900 = state_32875__$1;
(statearr_32882_32900[(2)] = inst_32870);

(statearr_32882_32900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (3))){
var inst_32872 = (state_32875[(2)]);
var inst_32873 = cljs.core.async.close_BANG_.call(null,out);
var state_32875__$1 = (function (){var statearr_32883 = state_32875;
(statearr_32883[(9)] = inst_32872);

return statearr_32883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32875__$1,inst_32873);
} else {
if((state_val_32876 === (2))){
var inst_32852 = (state_32875[(8)]);
var inst_32854 = (inst_32852 < n);
var state_32875__$1 = state_32875;
if(cljs.core.truth_(inst_32854)){
var statearr_32884_32901 = state_32875__$1;
(statearr_32884_32901[(1)] = (4));

} else {
var statearr_32885_32902 = state_32875__$1;
(statearr_32885_32902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (11))){
var inst_32852 = (state_32875[(8)]);
var inst_32862 = (state_32875[(2)]);
var inst_32863 = (inst_32852 + (1));
var inst_32852__$1 = inst_32863;
var state_32875__$1 = (function (){var statearr_32886 = state_32875;
(statearr_32886[(8)] = inst_32852__$1);

(statearr_32886[(10)] = inst_32862);

return statearr_32886;
})();
var statearr_32887_32903 = state_32875__$1;
(statearr_32887_32903[(2)] = null);

(statearr_32887_32903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (9))){
var state_32875__$1 = state_32875;
var statearr_32888_32904 = state_32875__$1;
(statearr_32888_32904[(2)] = null);

(statearr_32888_32904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (5))){
var state_32875__$1 = state_32875;
var statearr_32889_32905 = state_32875__$1;
(statearr_32889_32905[(2)] = null);

(statearr_32889_32905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (10))){
var inst_32867 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32890_32906 = state_32875__$1;
(statearr_32890_32906[(2)] = inst_32867);

(statearr_32890_32906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (8))){
var inst_32857 = (state_32875[(7)]);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32875__$1,(11),out,inst_32857);
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
});})(c__29560__auto___32896,out))
;
return ((function (switch__29403__auto__,c__29560__auto___32896,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_32891 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32891[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_32891[(1)] = (1));

return statearr_32891;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_32875){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_32875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32892){if((e32892 instanceof Object)){
var ex__29407__auto__ = e32892;
var statearr_32893_32907 = state_32875;
(statearr_32893_32907[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32908 = state_32875;
state_32875 = G__32908;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_32875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_32875);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___32896,out))
})();
var state__29562__auto__ = (function (){var statearr_32894 = f__29561__auto__.call(null);
(statearr_32894[(6)] = c__29560__auto___32896);

return statearr_32894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___32896,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32910 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32910 = (function (f,ch,meta32911){
this.f = f;
this.ch = ch;
this.meta32911 = meta32911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32912,meta32911__$1){
var self__ = this;
var _32912__$1 = this;
return (new cljs.core.async.t_cljs$core$async32910(self__.f,self__.ch,meta32911__$1));
});

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32912){
var self__ = this;
var _32912__$1 = this;
return self__.meta32911;
});

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32913 = (function (f,ch,meta32911,_,fn1,meta32914){
this.f = f;
this.ch = ch;
this.meta32911 = meta32911;
this._ = _;
this.fn1 = fn1;
this.meta32914 = meta32914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32915,meta32914__$1){
var self__ = this;
var _32915__$1 = this;
return (new cljs.core.async.t_cljs$core$async32913(self__.f,self__.ch,self__.meta32911,self__._,self__.fn1,meta32914__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32915){
var self__ = this;
var _32915__$1 = this;
return self__.meta32914;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32909_SHARP_){
return f1.call(null,(((p1__32909_SHARP_ == null))?null:self__.f.call(null,p1__32909_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32913.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32911","meta32911",-1943920132,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32910","cljs.core.async/t_cljs$core$async32910",163410045,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32914","meta32914",1574714999,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32913";

cljs.core.async.t_cljs$core$async32913.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32913");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32913.
 */
cljs.core.async.__GT_t_cljs$core$async32913 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32913(f__$1,ch__$1,meta32911__$1,___$2,fn1__$1,meta32914){
return (new cljs.core.async.t_cljs$core$async32913(f__$1,ch__$1,meta32911__$1,___$2,fn1__$1,meta32914));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32913(self__.f,self__.ch,self__.meta32911,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32910.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32911","meta32911",-1943920132,null)], null);
});

cljs.core.async.t_cljs$core$async32910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32910";

cljs.core.async.t_cljs$core$async32910.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32910");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32910.
 */
cljs.core.async.__GT_t_cljs$core$async32910 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32910(f__$1,ch__$1,meta32911){
return (new cljs.core.async.t_cljs$core$async32910(f__$1,ch__$1,meta32911));
});

}

return (new cljs.core.async.t_cljs$core$async32910(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32916 = (function (f,ch,meta32917){
this.f = f;
this.ch = ch;
this.meta32917 = meta32917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32918,meta32917__$1){
var self__ = this;
var _32918__$1 = this;
return (new cljs.core.async.t_cljs$core$async32916(self__.f,self__.ch,meta32917__$1));
});

cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32918){
var self__ = this;
var _32918__$1 = this;
return self__.meta32917;
});

cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32916.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32917","meta32917",-226826401,null)], null);
});

cljs.core.async.t_cljs$core$async32916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32916";

cljs.core.async.t_cljs$core$async32916.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32916");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32916.
 */
cljs.core.async.__GT_t_cljs$core$async32916 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32916(f__$1,ch__$1,meta32917){
return (new cljs.core.async.t_cljs$core$async32916(f__$1,ch__$1,meta32917));
});

}

return (new cljs.core.async.t_cljs$core$async32916(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32919 = (function (p,ch,meta32920){
this.p = p;
this.ch = ch;
this.meta32920 = meta32920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32921,meta32920__$1){
var self__ = this;
var _32921__$1 = this;
return (new cljs.core.async.t_cljs$core$async32919(self__.p,self__.ch,meta32920__$1));
});

cljs.core.async.t_cljs$core$async32919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32921){
var self__ = this;
var _32921__$1 = this;
return self__.meta32920;
});

cljs.core.async.t_cljs$core$async32919.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32919.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32919.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32919.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32919.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32919.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32919.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32920","meta32920",-434621412,null)], null);
});

cljs.core.async.t_cljs$core$async32919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32919";

cljs.core.async.t_cljs$core$async32919.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async32919");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32919.
 */
cljs.core.async.__GT_t_cljs$core$async32919 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32919(p__$1,ch__$1,meta32920){
return (new cljs.core.async.t_cljs$core$async32919(p__$1,ch__$1,meta32920));
});

}

return (new cljs.core.async.t_cljs$core$async32919(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32923 = arguments.length;
switch (G__32923) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29560__auto___32963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___32963,out){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___32963,out){
return (function (state_32944){
var state_val_32945 = (state_32944[(1)]);
if((state_val_32945 === (7))){
var inst_32940 = (state_32944[(2)]);
var state_32944__$1 = state_32944;
var statearr_32946_32964 = state_32944__$1;
(statearr_32946_32964[(2)] = inst_32940);

(statearr_32946_32964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (1))){
var state_32944__$1 = state_32944;
var statearr_32947_32965 = state_32944__$1;
(statearr_32947_32965[(2)] = null);

(statearr_32947_32965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (4))){
var inst_32926 = (state_32944[(7)]);
var inst_32926__$1 = (state_32944[(2)]);
var inst_32927 = (inst_32926__$1 == null);
var state_32944__$1 = (function (){var statearr_32948 = state_32944;
(statearr_32948[(7)] = inst_32926__$1);

return statearr_32948;
})();
if(cljs.core.truth_(inst_32927)){
var statearr_32949_32966 = state_32944__$1;
(statearr_32949_32966[(1)] = (5));

} else {
var statearr_32950_32967 = state_32944__$1;
(statearr_32950_32967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (6))){
var inst_32926 = (state_32944[(7)]);
var inst_32931 = p.call(null,inst_32926);
var state_32944__$1 = state_32944;
if(cljs.core.truth_(inst_32931)){
var statearr_32951_32968 = state_32944__$1;
(statearr_32951_32968[(1)] = (8));

} else {
var statearr_32952_32969 = state_32944__$1;
(statearr_32952_32969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (3))){
var inst_32942 = (state_32944[(2)]);
var state_32944__$1 = state_32944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32944__$1,inst_32942);
} else {
if((state_val_32945 === (2))){
var state_32944__$1 = state_32944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32944__$1,(4),ch);
} else {
if((state_val_32945 === (11))){
var inst_32934 = (state_32944[(2)]);
var state_32944__$1 = state_32944;
var statearr_32953_32970 = state_32944__$1;
(statearr_32953_32970[(2)] = inst_32934);

(statearr_32953_32970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (9))){
var state_32944__$1 = state_32944;
var statearr_32954_32971 = state_32944__$1;
(statearr_32954_32971[(2)] = null);

(statearr_32954_32971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (5))){
var inst_32929 = cljs.core.async.close_BANG_.call(null,out);
var state_32944__$1 = state_32944;
var statearr_32955_32972 = state_32944__$1;
(statearr_32955_32972[(2)] = inst_32929);

(statearr_32955_32972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (10))){
var inst_32937 = (state_32944[(2)]);
var state_32944__$1 = (function (){var statearr_32956 = state_32944;
(statearr_32956[(8)] = inst_32937);

return statearr_32956;
})();
var statearr_32957_32973 = state_32944__$1;
(statearr_32957_32973[(2)] = null);

(statearr_32957_32973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (8))){
var inst_32926 = (state_32944[(7)]);
var state_32944__$1 = state_32944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32944__$1,(11),out,inst_32926);
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
});})(c__29560__auto___32963,out))
;
return ((function (switch__29403__auto__,c__29560__auto___32963,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_32958 = [null,null,null,null,null,null,null,null,null];
(statearr_32958[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_32958[(1)] = (1));

return statearr_32958;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_32944){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_32944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e32959){if((e32959 instanceof Object)){
var ex__29407__auto__ = e32959;
var statearr_32960_32974 = state_32944;
(statearr_32960_32974[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32975 = state_32944;
state_32944 = G__32975;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_32944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_32944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___32963,out))
})();
var state__29562__auto__ = (function (){var statearr_32961 = f__29561__auto__.call(null);
(statearr_32961[(6)] = c__29560__auto___32963);

return statearr_32961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___32963,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32977 = arguments.length;
switch (G__32977) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto__){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto__){
return (function (state_33040){
var state_val_33041 = (state_33040[(1)]);
if((state_val_33041 === (7))){
var inst_33036 = (state_33040[(2)]);
var state_33040__$1 = state_33040;
var statearr_33042_33080 = state_33040__$1;
(statearr_33042_33080[(2)] = inst_33036);

(statearr_33042_33080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (20))){
var inst_33006 = (state_33040[(7)]);
var inst_33017 = (state_33040[(2)]);
var inst_33018 = cljs.core.next.call(null,inst_33006);
var inst_32992 = inst_33018;
var inst_32993 = null;
var inst_32994 = (0);
var inst_32995 = (0);
var state_33040__$1 = (function (){var statearr_33043 = state_33040;
(statearr_33043[(8)] = inst_32995);

(statearr_33043[(9)] = inst_32993);

(statearr_33043[(10)] = inst_32992);

(statearr_33043[(11)] = inst_32994);

(statearr_33043[(12)] = inst_33017);

return statearr_33043;
})();
var statearr_33044_33081 = state_33040__$1;
(statearr_33044_33081[(2)] = null);

(statearr_33044_33081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (1))){
var state_33040__$1 = state_33040;
var statearr_33045_33082 = state_33040__$1;
(statearr_33045_33082[(2)] = null);

(statearr_33045_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (4))){
var inst_32981 = (state_33040[(13)]);
var inst_32981__$1 = (state_33040[(2)]);
var inst_32982 = (inst_32981__$1 == null);
var state_33040__$1 = (function (){var statearr_33046 = state_33040;
(statearr_33046[(13)] = inst_32981__$1);

return statearr_33046;
})();
if(cljs.core.truth_(inst_32982)){
var statearr_33047_33083 = state_33040__$1;
(statearr_33047_33083[(1)] = (5));

} else {
var statearr_33048_33084 = state_33040__$1;
(statearr_33048_33084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (15))){
var state_33040__$1 = state_33040;
var statearr_33052_33085 = state_33040__$1;
(statearr_33052_33085[(2)] = null);

(statearr_33052_33085[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (21))){
var state_33040__$1 = state_33040;
var statearr_33053_33086 = state_33040__$1;
(statearr_33053_33086[(2)] = null);

(statearr_33053_33086[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (13))){
var inst_32995 = (state_33040[(8)]);
var inst_32993 = (state_33040[(9)]);
var inst_32992 = (state_33040[(10)]);
var inst_32994 = (state_33040[(11)]);
var inst_33002 = (state_33040[(2)]);
var inst_33003 = (inst_32995 + (1));
var tmp33049 = inst_32993;
var tmp33050 = inst_32992;
var tmp33051 = inst_32994;
var inst_32992__$1 = tmp33050;
var inst_32993__$1 = tmp33049;
var inst_32994__$1 = tmp33051;
var inst_32995__$1 = inst_33003;
var state_33040__$1 = (function (){var statearr_33054 = state_33040;
(statearr_33054[(8)] = inst_32995__$1);

(statearr_33054[(9)] = inst_32993__$1);

(statearr_33054[(14)] = inst_33002);

(statearr_33054[(10)] = inst_32992__$1);

(statearr_33054[(11)] = inst_32994__$1);

return statearr_33054;
})();
var statearr_33055_33087 = state_33040__$1;
(statearr_33055_33087[(2)] = null);

(statearr_33055_33087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (22))){
var state_33040__$1 = state_33040;
var statearr_33056_33088 = state_33040__$1;
(statearr_33056_33088[(2)] = null);

(statearr_33056_33088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (6))){
var inst_32981 = (state_33040[(13)]);
var inst_32990 = f.call(null,inst_32981);
var inst_32991 = cljs.core.seq.call(null,inst_32990);
var inst_32992 = inst_32991;
var inst_32993 = null;
var inst_32994 = (0);
var inst_32995 = (0);
var state_33040__$1 = (function (){var statearr_33057 = state_33040;
(statearr_33057[(8)] = inst_32995);

(statearr_33057[(9)] = inst_32993);

(statearr_33057[(10)] = inst_32992);

(statearr_33057[(11)] = inst_32994);

return statearr_33057;
})();
var statearr_33058_33089 = state_33040__$1;
(statearr_33058_33089[(2)] = null);

(statearr_33058_33089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (17))){
var inst_33006 = (state_33040[(7)]);
var inst_33010 = cljs.core.chunk_first.call(null,inst_33006);
var inst_33011 = cljs.core.chunk_rest.call(null,inst_33006);
var inst_33012 = cljs.core.count.call(null,inst_33010);
var inst_32992 = inst_33011;
var inst_32993 = inst_33010;
var inst_32994 = inst_33012;
var inst_32995 = (0);
var state_33040__$1 = (function (){var statearr_33059 = state_33040;
(statearr_33059[(8)] = inst_32995);

(statearr_33059[(9)] = inst_32993);

(statearr_33059[(10)] = inst_32992);

(statearr_33059[(11)] = inst_32994);

return statearr_33059;
})();
var statearr_33060_33090 = state_33040__$1;
(statearr_33060_33090[(2)] = null);

(statearr_33060_33090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (3))){
var inst_33038 = (state_33040[(2)]);
var state_33040__$1 = state_33040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33040__$1,inst_33038);
} else {
if((state_val_33041 === (12))){
var inst_33026 = (state_33040[(2)]);
var state_33040__$1 = state_33040;
var statearr_33061_33091 = state_33040__$1;
(statearr_33061_33091[(2)] = inst_33026);

(statearr_33061_33091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (2))){
var state_33040__$1 = state_33040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33040__$1,(4),in$);
} else {
if((state_val_33041 === (23))){
var inst_33034 = (state_33040[(2)]);
var state_33040__$1 = state_33040;
var statearr_33062_33092 = state_33040__$1;
(statearr_33062_33092[(2)] = inst_33034);

(statearr_33062_33092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (19))){
var inst_33021 = (state_33040[(2)]);
var state_33040__$1 = state_33040;
var statearr_33063_33093 = state_33040__$1;
(statearr_33063_33093[(2)] = inst_33021);

(statearr_33063_33093[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (11))){
var inst_33006 = (state_33040[(7)]);
var inst_32992 = (state_33040[(10)]);
var inst_33006__$1 = cljs.core.seq.call(null,inst_32992);
var state_33040__$1 = (function (){var statearr_33064 = state_33040;
(statearr_33064[(7)] = inst_33006__$1);

return statearr_33064;
})();
if(inst_33006__$1){
var statearr_33065_33094 = state_33040__$1;
(statearr_33065_33094[(1)] = (14));

} else {
var statearr_33066_33095 = state_33040__$1;
(statearr_33066_33095[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (9))){
var inst_33028 = (state_33040[(2)]);
var inst_33029 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33040__$1 = (function (){var statearr_33067 = state_33040;
(statearr_33067[(15)] = inst_33028);

return statearr_33067;
})();
if(cljs.core.truth_(inst_33029)){
var statearr_33068_33096 = state_33040__$1;
(statearr_33068_33096[(1)] = (21));

} else {
var statearr_33069_33097 = state_33040__$1;
(statearr_33069_33097[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (5))){
var inst_32984 = cljs.core.async.close_BANG_.call(null,out);
var state_33040__$1 = state_33040;
var statearr_33070_33098 = state_33040__$1;
(statearr_33070_33098[(2)] = inst_32984);

(statearr_33070_33098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (14))){
var inst_33006 = (state_33040[(7)]);
var inst_33008 = cljs.core.chunked_seq_QMARK_.call(null,inst_33006);
var state_33040__$1 = state_33040;
if(inst_33008){
var statearr_33071_33099 = state_33040__$1;
(statearr_33071_33099[(1)] = (17));

} else {
var statearr_33072_33100 = state_33040__$1;
(statearr_33072_33100[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (16))){
var inst_33024 = (state_33040[(2)]);
var state_33040__$1 = state_33040;
var statearr_33073_33101 = state_33040__$1;
(statearr_33073_33101[(2)] = inst_33024);

(statearr_33073_33101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33041 === (10))){
var inst_32995 = (state_33040[(8)]);
var inst_32993 = (state_33040[(9)]);
var inst_33000 = cljs.core._nth.call(null,inst_32993,inst_32995);
var state_33040__$1 = state_33040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33040__$1,(13),out,inst_33000);
} else {
if((state_val_33041 === (18))){
var inst_33006 = (state_33040[(7)]);
var inst_33015 = cljs.core.first.call(null,inst_33006);
var state_33040__$1 = state_33040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33040__$1,(20),out,inst_33015);
} else {
if((state_val_33041 === (8))){
var inst_32995 = (state_33040[(8)]);
var inst_32994 = (state_33040[(11)]);
var inst_32997 = (inst_32995 < inst_32994);
var inst_32998 = inst_32997;
var state_33040__$1 = state_33040;
if(cljs.core.truth_(inst_32998)){
var statearr_33074_33102 = state_33040__$1;
(statearr_33074_33102[(1)] = (10));

} else {
var statearr_33075_33103 = state_33040__$1;
(statearr_33075_33103[(1)] = (11));

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
});})(c__29560__auto__))
;
return ((function (switch__29403__auto__,c__29560__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____0 = (function (){
var statearr_33076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33076[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__);

(statearr_33076[(1)] = (1));

return statearr_33076;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____1 = (function (state_33040){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_33040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e33077){if((e33077 instanceof Object)){
var ex__29407__auto__ = e33077;
var statearr_33078_33104 = state_33040;
(statearr_33078_33104[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33105 = state_33040;
state_33040 = G__33105;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__ = function(state_33040){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____1.call(this,state_33040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29404__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto__))
})();
var state__29562__auto__ = (function (){var statearr_33079 = f__29561__auto__.call(null);
(statearr_33079[(6)] = c__29560__auto__);

return statearr_33079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto__))
);

return c__29560__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33107 = arguments.length;
switch (G__33107) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33110 = arguments.length;
switch (G__33110) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33113 = arguments.length;
switch (G__33113) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29560__auto___33160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___33160,out){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___33160,out){
return (function (state_33137){
var state_val_33138 = (state_33137[(1)]);
if((state_val_33138 === (7))){
var inst_33132 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
var statearr_33139_33161 = state_33137__$1;
(statearr_33139_33161[(2)] = inst_33132);

(statearr_33139_33161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (1))){
var inst_33114 = null;
var state_33137__$1 = (function (){var statearr_33140 = state_33137;
(statearr_33140[(7)] = inst_33114);

return statearr_33140;
})();
var statearr_33141_33162 = state_33137__$1;
(statearr_33141_33162[(2)] = null);

(statearr_33141_33162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (4))){
var inst_33117 = (state_33137[(8)]);
var inst_33117__$1 = (state_33137[(2)]);
var inst_33118 = (inst_33117__$1 == null);
var inst_33119 = cljs.core.not.call(null,inst_33118);
var state_33137__$1 = (function (){var statearr_33142 = state_33137;
(statearr_33142[(8)] = inst_33117__$1);

return statearr_33142;
})();
if(inst_33119){
var statearr_33143_33163 = state_33137__$1;
(statearr_33143_33163[(1)] = (5));

} else {
var statearr_33144_33164 = state_33137__$1;
(statearr_33144_33164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (6))){
var state_33137__$1 = state_33137;
var statearr_33145_33165 = state_33137__$1;
(statearr_33145_33165[(2)] = null);

(statearr_33145_33165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (3))){
var inst_33134 = (state_33137[(2)]);
var inst_33135 = cljs.core.async.close_BANG_.call(null,out);
var state_33137__$1 = (function (){var statearr_33146 = state_33137;
(statearr_33146[(9)] = inst_33134);

return statearr_33146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33137__$1,inst_33135);
} else {
if((state_val_33138 === (2))){
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33137__$1,(4),ch);
} else {
if((state_val_33138 === (11))){
var inst_33117 = (state_33137[(8)]);
var inst_33126 = (state_33137[(2)]);
var inst_33114 = inst_33117;
var state_33137__$1 = (function (){var statearr_33147 = state_33137;
(statearr_33147[(7)] = inst_33114);

(statearr_33147[(10)] = inst_33126);

return statearr_33147;
})();
var statearr_33148_33166 = state_33137__$1;
(statearr_33148_33166[(2)] = null);

(statearr_33148_33166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (9))){
var inst_33117 = (state_33137[(8)]);
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33137__$1,(11),out,inst_33117);
} else {
if((state_val_33138 === (5))){
var inst_33117 = (state_33137[(8)]);
var inst_33114 = (state_33137[(7)]);
var inst_33121 = cljs.core._EQ_.call(null,inst_33117,inst_33114);
var state_33137__$1 = state_33137;
if(inst_33121){
var statearr_33150_33167 = state_33137__$1;
(statearr_33150_33167[(1)] = (8));

} else {
var statearr_33151_33168 = state_33137__$1;
(statearr_33151_33168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (10))){
var inst_33129 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
var statearr_33152_33169 = state_33137__$1;
(statearr_33152_33169[(2)] = inst_33129);

(statearr_33152_33169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (8))){
var inst_33114 = (state_33137[(7)]);
var tmp33149 = inst_33114;
var inst_33114__$1 = tmp33149;
var state_33137__$1 = (function (){var statearr_33153 = state_33137;
(statearr_33153[(7)] = inst_33114__$1);

return statearr_33153;
})();
var statearr_33154_33170 = state_33137__$1;
(statearr_33154_33170[(2)] = null);

(statearr_33154_33170[(1)] = (2));


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
});})(c__29560__auto___33160,out))
;
return ((function (switch__29403__auto__,c__29560__auto___33160,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_33155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33155[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_33155[(1)] = (1));

return statearr_33155;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_33137){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_33137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e33156){if((e33156 instanceof Object)){
var ex__29407__auto__ = e33156;
var statearr_33157_33171 = state_33137;
(statearr_33157_33171[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33172 = state_33137;
state_33137 = G__33172;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_33137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_33137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___33160,out))
})();
var state__29562__auto__ = (function (){var statearr_33158 = f__29561__auto__.call(null);
(statearr_33158[(6)] = c__29560__auto___33160);

return statearr_33158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___33160,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33174 = arguments.length;
switch (G__33174) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29560__auto___33240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___33240,out){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___33240,out){
return (function (state_33212){
var state_val_33213 = (state_33212[(1)]);
if((state_val_33213 === (7))){
var inst_33208 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33214_33241 = state_33212__$1;
(statearr_33214_33241[(2)] = inst_33208);

(statearr_33214_33241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (1))){
var inst_33175 = (new Array(n));
var inst_33176 = inst_33175;
var inst_33177 = (0);
var state_33212__$1 = (function (){var statearr_33215 = state_33212;
(statearr_33215[(7)] = inst_33177);

(statearr_33215[(8)] = inst_33176);

return statearr_33215;
})();
var statearr_33216_33242 = state_33212__$1;
(statearr_33216_33242[(2)] = null);

(statearr_33216_33242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (4))){
var inst_33180 = (state_33212[(9)]);
var inst_33180__$1 = (state_33212[(2)]);
var inst_33181 = (inst_33180__$1 == null);
var inst_33182 = cljs.core.not.call(null,inst_33181);
var state_33212__$1 = (function (){var statearr_33217 = state_33212;
(statearr_33217[(9)] = inst_33180__$1);

return statearr_33217;
})();
if(inst_33182){
var statearr_33218_33243 = state_33212__$1;
(statearr_33218_33243[(1)] = (5));

} else {
var statearr_33219_33244 = state_33212__$1;
(statearr_33219_33244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (15))){
var inst_33202 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33220_33245 = state_33212__$1;
(statearr_33220_33245[(2)] = inst_33202);

(statearr_33220_33245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (13))){
var state_33212__$1 = state_33212;
var statearr_33221_33246 = state_33212__$1;
(statearr_33221_33246[(2)] = null);

(statearr_33221_33246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (6))){
var inst_33177 = (state_33212[(7)]);
var inst_33198 = (inst_33177 > (0));
var state_33212__$1 = state_33212;
if(cljs.core.truth_(inst_33198)){
var statearr_33222_33247 = state_33212__$1;
(statearr_33222_33247[(1)] = (12));

} else {
var statearr_33223_33248 = state_33212__$1;
(statearr_33223_33248[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (3))){
var inst_33210 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33212__$1,inst_33210);
} else {
if((state_val_33213 === (12))){
var inst_33176 = (state_33212[(8)]);
var inst_33200 = cljs.core.vec.call(null,inst_33176);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33212__$1,(15),out,inst_33200);
} else {
if((state_val_33213 === (2))){
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33212__$1,(4),ch);
} else {
if((state_val_33213 === (11))){
var inst_33192 = (state_33212[(2)]);
var inst_33193 = (new Array(n));
var inst_33176 = inst_33193;
var inst_33177 = (0);
var state_33212__$1 = (function (){var statearr_33224 = state_33212;
(statearr_33224[(7)] = inst_33177);

(statearr_33224[(10)] = inst_33192);

(statearr_33224[(8)] = inst_33176);

return statearr_33224;
})();
var statearr_33225_33249 = state_33212__$1;
(statearr_33225_33249[(2)] = null);

(statearr_33225_33249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (9))){
var inst_33176 = (state_33212[(8)]);
var inst_33190 = cljs.core.vec.call(null,inst_33176);
var state_33212__$1 = state_33212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33212__$1,(11),out,inst_33190);
} else {
if((state_val_33213 === (5))){
var inst_33177 = (state_33212[(7)]);
var inst_33176 = (state_33212[(8)]);
var inst_33180 = (state_33212[(9)]);
var inst_33185 = (state_33212[(11)]);
var inst_33184 = (inst_33176[inst_33177] = inst_33180);
var inst_33185__$1 = (inst_33177 + (1));
var inst_33186 = (inst_33185__$1 < n);
var state_33212__$1 = (function (){var statearr_33226 = state_33212;
(statearr_33226[(12)] = inst_33184);

(statearr_33226[(11)] = inst_33185__$1);

return statearr_33226;
})();
if(cljs.core.truth_(inst_33186)){
var statearr_33227_33250 = state_33212__$1;
(statearr_33227_33250[(1)] = (8));

} else {
var statearr_33228_33251 = state_33212__$1;
(statearr_33228_33251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (14))){
var inst_33205 = (state_33212[(2)]);
var inst_33206 = cljs.core.async.close_BANG_.call(null,out);
var state_33212__$1 = (function (){var statearr_33230 = state_33212;
(statearr_33230[(13)] = inst_33205);

return statearr_33230;
})();
var statearr_33231_33252 = state_33212__$1;
(statearr_33231_33252[(2)] = inst_33206);

(statearr_33231_33252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (10))){
var inst_33196 = (state_33212[(2)]);
var state_33212__$1 = state_33212;
var statearr_33232_33253 = state_33212__$1;
(statearr_33232_33253[(2)] = inst_33196);

(statearr_33232_33253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33213 === (8))){
var inst_33176 = (state_33212[(8)]);
var inst_33185 = (state_33212[(11)]);
var tmp33229 = inst_33176;
var inst_33176__$1 = tmp33229;
var inst_33177 = inst_33185;
var state_33212__$1 = (function (){var statearr_33233 = state_33212;
(statearr_33233[(7)] = inst_33177);

(statearr_33233[(8)] = inst_33176__$1);

return statearr_33233;
})();
var statearr_33234_33254 = state_33212__$1;
(statearr_33234_33254[(2)] = null);

(statearr_33234_33254[(1)] = (2));


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
});})(c__29560__auto___33240,out))
;
return ((function (switch__29403__auto__,c__29560__auto___33240,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_33235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33235[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_33235[(1)] = (1));

return statearr_33235;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_33212){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_33212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e33236){if((e33236 instanceof Object)){
var ex__29407__auto__ = e33236;
var statearr_33237_33255 = state_33212;
(statearr_33237_33255[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33256 = state_33212;
state_33212 = G__33256;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_33212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_33212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___33240,out))
})();
var state__29562__auto__ = (function (){var statearr_33238 = f__29561__auto__.call(null);
(statearr_33238[(6)] = c__29560__auto___33240);

return statearr_33238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___33240,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33258 = arguments.length;
switch (G__33258) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29560__auto___33328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___33328,out){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___33328,out){
return (function (state_33300){
var state_val_33301 = (state_33300[(1)]);
if((state_val_33301 === (7))){
var inst_33296 = (state_33300[(2)]);
var state_33300__$1 = state_33300;
var statearr_33302_33329 = state_33300__$1;
(statearr_33302_33329[(2)] = inst_33296);

(statearr_33302_33329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (1))){
var inst_33259 = [];
var inst_33260 = inst_33259;
var inst_33261 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33300__$1 = (function (){var statearr_33303 = state_33300;
(statearr_33303[(7)] = inst_33260);

(statearr_33303[(8)] = inst_33261);

return statearr_33303;
})();
var statearr_33304_33330 = state_33300__$1;
(statearr_33304_33330[(2)] = null);

(statearr_33304_33330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (4))){
var inst_33264 = (state_33300[(9)]);
var inst_33264__$1 = (state_33300[(2)]);
var inst_33265 = (inst_33264__$1 == null);
var inst_33266 = cljs.core.not.call(null,inst_33265);
var state_33300__$1 = (function (){var statearr_33305 = state_33300;
(statearr_33305[(9)] = inst_33264__$1);

return statearr_33305;
})();
if(inst_33266){
var statearr_33306_33331 = state_33300__$1;
(statearr_33306_33331[(1)] = (5));

} else {
var statearr_33307_33332 = state_33300__$1;
(statearr_33307_33332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (15))){
var inst_33290 = (state_33300[(2)]);
var state_33300__$1 = state_33300;
var statearr_33308_33333 = state_33300__$1;
(statearr_33308_33333[(2)] = inst_33290);

(statearr_33308_33333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (13))){
var state_33300__$1 = state_33300;
var statearr_33309_33334 = state_33300__$1;
(statearr_33309_33334[(2)] = null);

(statearr_33309_33334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (6))){
var inst_33260 = (state_33300[(7)]);
var inst_33285 = inst_33260.length;
var inst_33286 = (inst_33285 > (0));
var state_33300__$1 = state_33300;
if(cljs.core.truth_(inst_33286)){
var statearr_33310_33335 = state_33300__$1;
(statearr_33310_33335[(1)] = (12));

} else {
var statearr_33311_33336 = state_33300__$1;
(statearr_33311_33336[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (3))){
var inst_33298 = (state_33300[(2)]);
var state_33300__$1 = state_33300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33300__$1,inst_33298);
} else {
if((state_val_33301 === (12))){
var inst_33260 = (state_33300[(7)]);
var inst_33288 = cljs.core.vec.call(null,inst_33260);
var state_33300__$1 = state_33300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33300__$1,(15),out,inst_33288);
} else {
if((state_val_33301 === (2))){
var state_33300__$1 = state_33300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33300__$1,(4),ch);
} else {
if((state_val_33301 === (11))){
var inst_33264 = (state_33300[(9)]);
var inst_33268 = (state_33300[(10)]);
var inst_33278 = (state_33300[(2)]);
var inst_33279 = [];
var inst_33280 = inst_33279.push(inst_33264);
var inst_33260 = inst_33279;
var inst_33261 = inst_33268;
var state_33300__$1 = (function (){var statearr_33312 = state_33300;
(statearr_33312[(11)] = inst_33280);

(statearr_33312[(7)] = inst_33260);

(statearr_33312[(12)] = inst_33278);

(statearr_33312[(8)] = inst_33261);

return statearr_33312;
})();
var statearr_33313_33337 = state_33300__$1;
(statearr_33313_33337[(2)] = null);

(statearr_33313_33337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (9))){
var inst_33260 = (state_33300[(7)]);
var inst_33276 = cljs.core.vec.call(null,inst_33260);
var state_33300__$1 = state_33300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33300__$1,(11),out,inst_33276);
} else {
if((state_val_33301 === (5))){
var inst_33264 = (state_33300[(9)]);
var inst_33268 = (state_33300[(10)]);
var inst_33261 = (state_33300[(8)]);
var inst_33268__$1 = f.call(null,inst_33264);
var inst_33269 = cljs.core._EQ_.call(null,inst_33268__$1,inst_33261);
var inst_33270 = cljs.core.keyword_identical_QMARK_.call(null,inst_33261,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33271 = ((inst_33269) || (inst_33270));
var state_33300__$1 = (function (){var statearr_33314 = state_33300;
(statearr_33314[(10)] = inst_33268__$1);

return statearr_33314;
})();
if(cljs.core.truth_(inst_33271)){
var statearr_33315_33338 = state_33300__$1;
(statearr_33315_33338[(1)] = (8));

} else {
var statearr_33316_33339 = state_33300__$1;
(statearr_33316_33339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (14))){
var inst_33293 = (state_33300[(2)]);
var inst_33294 = cljs.core.async.close_BANG_.call(null,out);
var state_33300__$1 = (function (){var statearr_33318 = state_33300;
(statearr_33318[(13)] = inst_33293);

return statearr_33318;
})();
var statearr_33319_33340 = state_33300__$1;
(statearr_33319_33340[(2)] = inst_33294);

(statearr_33319_33340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (10))){
var inst_33283 = (state_33300[(2)]);
var state_33300__$1 = state_33300;
var statearr_33320_33341 = state_33300__$1;
(statearr_33320_33341[(2)] = inst_33283);

(statearr_33320_33341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (8))){
var inst_33264 = (state_33300[(9)]);
var inst_33268 = (state_33300[(10)]);
var inst_33260 = (state_33300[(7)]);
var inst_33273 = inst_33260.push(inst_33264);
var tmp33317 = inst_33260;
var inst_33260__$1 = tmp33317;
var inst_33261 = inst_33268;
var state_33300__$1 = (function (){var statearr_33321 = state_33300;
(statearr_33321[(14)] = inst_33273);

(statearr_33321[(7)] = inst_33260__$1);

(statearr_33321[(8)] = inst_33261);

return statearr_33321;
})();
var statearr_33322_33342 = state_33300__$1;
(statearr_33322_33342[(2)] = null);

(statearr_33322_33342[(1)] = (2));


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
});})(c__29560__auto___33328,out))
;
return ((function (switch__29403__auto__,c__29560__auto___33328,out){
return (function() {
var cljs$core$async$state_machine__29404__auto__ = null;
var cljs$core$async$state_machine__29404__auto____0 = (function (){
var statearr_33323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33323[(0)] = cljs$core$async$state_machine__29404__auto__);

(statearr_33323[(1)] = (1));

return statearr_33323;
});
var cljs$core$async$state_machine__29404__auto____1 = (function (state_33300){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_33300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e33324){if((e33324 instanceof Object)){
var ex__29407__auto__ = e33324;
var statearr_33325_33343 = state_33300;
(statearr_33325_33343[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33344 = state_33300;
state_33300 = G__33344;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
cljs$core$async$state_machine__29404__auto__ = function(state_33300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29404__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29404__auto____1.call(this,state_33300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29404__auto____0;
cljs$core$async$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29404__auto____1;
return cljs$core$async$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___33328,out))
})();
var state__29562__auto__ = (function (){var statearr_33326 = f__29561__auto__.call(null);
(statearr_33326[(6)] = c__29560__auto___33328);

return statearr_33326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___33328,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545496985249
