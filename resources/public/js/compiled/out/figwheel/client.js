// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e37408){if((e37408 instanceof Error)){
var e = e37408;
return "Error: Unable to stringify";
} else {
throw e37408;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37411 = arguments.length;
switch (G__37411) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37409_SHARP_){
if(typeof p1__37409_SHARP_ === 'string'){
return p1__37409_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37409_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37414 = arguments.length;
var i__4500__auto___37415 = (0);
while(true){
if((i__4500__auto___37415 < len__4499__auto___37414)){
args__4502__auto__.push((arguments[i__4500__auto___37415]));

var G__37416 = (i__4500__auto___37415 + (1));
i__4500__auto___37415 = G__37416;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37413){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37413));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37418 = arguments.length;
var i__4500__auto___37419 = (0);
while(true){
if((i__4500__auto___37419 < len__4499__auto___37418)){
args__4502__auto__.push((arguments[i__4500__auto___37419]));

var G__37420 = (i__4500__auto___37419 + (1));
i__4500__auto___37419 = G__37420;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37417){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37417));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37421){
var map__37422 = p__37421;
var map__37422__$1 = ((((!((map__37422 == null)))?(((((map__37422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37422):map__37422);
var message = cljs.core.get.call(null,map__37422__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37422__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29560__auto___37501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___37501,ch){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___37501,ch){
return (function (state_37473){
var state_val_37474 = (state_37473[(1)]);
if((state_val_37474 === (7))){
var inst_37469 = (state_37473[(2)]);
var state_37473__$1 = state_37473;
var statearr_37475_37502 = state_37473__$1;
(statearr_37475_37502[(2)] = inst_37469);

(statearr_37475_37502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (1))){
var state_37473__$1 = state_37473;
var statearr_37476_37503 = state_37473__$1;
(statearr_37476_37503[(2)] = null);

(statearr_37476_37503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (4))){
var inst_37426 = (state_37473[(7)]);
var inst_37426__$1 = (state_37473[(2)]);
var state_37473__$1 = (function (){var statearr_37477 = state_37473;
(statearr_37477[(7)] = inst_37426__$1);

return statearr_37477;
})();
if(cljs.core.truth_(inst_37426__$1)){
var statearr_37478_37504 = state_37473__$1;
(statearr_37478_37504[(1)] = (5));

} else {
var statearr_37479_37505 = state_37473__$1;
(statearr_37479_37505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (15))){
var inst_37433 = (state_37473[(8)]);
var inst_37448 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37433);
var inst_37449 = cljs.core.first.call(null,inst_37448);
var inst_37450 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37449);
var inst_37451 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37450)].join('');
var inst_37452 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37451);
var state_37473__$1 = state_37473;
var statearr_37480_37506 = state_37473__$1;
(statearr_37480_37506[(2)] = inst_37452);

(statearr_37480_37506[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (13))){
var inst_37457 = (state_37473[(2)]);
var state_37473__$1 = state_37473;
var statearr_37481_37507 = state_37473__$1;
(statearr_37481_37507[(2)] = inst_37457);

(statearr_37481_37507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (6))){
var state_37473__$1 = state_37473;
var statearr_37482_37508 = state_37473__$1;
(statearr_37482_37508[(2)] = null);

(statearr_37482_37508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (17))){
var inst_37455 = (state_37473[(2)]);
var state_37473__$1 = state_37473;
var statearr_37483_37509 = state_37473__$1;
(statearr_37483_37509[(2)] = inst_37455);

(statearr_37483_37509[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (3))){
var inst_37471 = (state_37473[(2)]);
var state_37473__$1 = state_37473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37473__$1,inst_37471);
} else {
if((state_val_37474 === (12))){
var inst_37432 = (state_37473[(9)]);
var inst_37446 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37432,opts);
var state_37473__$1 = state_37473;
if(cljs.core.truth_(inst_37446)){
var statearr_37484_37510 = state_37473__$1;
(statearr_37484_37510[(1)] = (15));

} else {
var statearr_37485_37511 = state_37473__$1;
(statearr_37485_37511[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (2))){
var state_37473__$1 = state_37473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37473__$1,(4),ch);
} else {
if((state_val_37474 === (11))){
var inst_37433 = (state_37473[(8)]);
var inst_37438 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37439 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37433);
var inst_37440 = cljs.core.async.timeout.call(null,(1000));
var inst_37441 = [inst_37439,inst_37440];
var inst_37442 = (new cljs.core.PersistentVector(null,2,(5),inst_37438,inst_37441,null));
var state_37473__$1 = state_37473;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37473__$1,(14),inst_37442);
} else {
if((state_val_37474 === (9))){
var inst_37433 = (state_37473[(8)]);
var inst_37459 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37460 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37433);
var inst_37461 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37460);
var inst_37462 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37461)].join('');
var inst_37463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37462);
var state_37473__$1 = (function (){var statearr_37486 = state_37473;
(statearr_37486[(10)] = inst_37459);

return statearr_37486;
})();
var statearr_37487_37512 = state_37473__$1;
(statearr_37487_37512[(2)] = inst_37463);

(statearr_37487_37512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (5))){
var inst_37426 = (state_37473[(7)]);
var inst_37428 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37429 = (new cljs.core.PersistentArrayMap(null,2,inst_37428,null));
var inst_37430 = (new cljs.core.PersistentHashSet(null,inst_37429,null));
var inst_37431 = figwheel.client.focus_msgs.call(null,inst_37430,inst_37426);
var inst_37432 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37431);
var inst_37433 = cljs.core.first.call(null,inst_37431);
var inst_37434 = figwheel.client.autoload_QMARK_.call(null);
var state_37473__$1 = (function (){var statearr_37488 = state_37473;
(statearr_37488[(8)] = inst_37433);

(statearr_37488[(9)] = inst_37432);

return statearr_37488;
})();
if(cljs.core.truth_(inst_37434)){
var statearr_37489_37513 = state_37473__$1;
(statearr_37489_37513[(1)] = (8));

} else {
var statearr_37490_37514 = state_37473__$1;
(statearr_37490_37514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (14))){
var inst_37444 = (state_37473[(2)]);
var state_37473__$1 = state_37473;
var statearr_37491_37515 = state_37473__$1;
(statearr_37491_37515[(2)] = inst_37444);

(statearr_37491_37515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (16))){
var state_37473__$1 = state_37473;
var statearr_37492_37516 = state_37473__$1;
(statearr_37492_37516[(2)] = null);

(statearr_37492_37516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (10))){
var inst_37465 = (state_37473[(2)]);
var state_37473__$1 = (function (){var statearr_37493 = state_37473;
(statearr_37493[(11)] = inst_37465);

return statearr_37493;
})();
var statearr_37494_37517 = state_37473__$1;
(statearr_37494_37517[(2)] = null);

(statearr_37494_37517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37474 === (8))){
var inst_37432 = (state_37473[(9)]);
var inst_37436 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37432,opts);
var state_37473__$1 = state_37473;
if(cljs.core.truth_(inst_37436)){
var statearr_37495_37518 = state_37473__$1;
(statearr_37495_37518[(1)] = (11));

} else {
var statearr_37496_37519 = state_37473__$1;
(statearr_37496_37519[(1)] = (12));

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
});})(c__29560__auto___37501,ch))
;
return ((function (switch__29403__auto__,c__29560__auto___37501,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____0 = (function (){
var statearr_37497 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37497[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__);

(statearr_37497[(1)] = (1));

return statearr_37497;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____1 = (function (state_37473){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_37473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e37498){if((e37498 instanceof Object)){
var ex__29407__auto__ = e37498;
var statearr_37499_37520 = state_37473;
(statearr_37499_37520[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37521 = state_37473;
state_37473 = G__37521;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__ = function(state_37473){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____1.call(this,state_37473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___37501,ch))
})();
var state__29562__auto__ = (function (){var statearr_37500 = f__29561__auto__.call(null);
(statearr_37500[(6)] = c__29560__auto___37501);

return statearr_37500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___37501,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37522_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37522_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37526 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37526){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37524 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37525 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37524,_STAR_print_fn_STAR_37525,sb,base_path_37526){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_37524,_STAR_print_fn_STAR_37525,sb,base_path_37526))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37525;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37524;
}}catch (e37523){if((e37523 instanceof Error)){
var e = e37523;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37526], null));
} else {
var e = e37523;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37526))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37527){
var map__37528 = p__37527;
var map__37528__$1 = ((((!((map__37528 == null)))?(((((map__37528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37528):map__37528);
var opts = map__37528__$1;
var build_id = cljs.core.get.call(null,map__37528__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37528,map__37528__$1,opts,build_id){
return (function (p__37530){
var vec__37531 = p__37530;
var seq__37532 = cljs.core.seq.call(null,vec__37531);
var first__37533 = cljs.core.first.call(null,seq__37532);
var seq__37532__$1 = cljs.core.next.call(null,seq__37532);
var map__37534 = first__37533;
var map__37534__$1 = ((((!((map__37534 == null)))?(((((map__37534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37534):map__37534);
var msg = map__37534__$1;
var msg_name = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37532__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37531,seq__37532,first__37533,seq__37532__$1,map__37534,map__37534__$1,msg,msg_name,_,map__37528,map__37528__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37531,seq__37532,first__37533,seq__37532__$1,map__37534,map__37534__$1,msg,msg_name,_,map__37528,map__37528__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37528,map__37528__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37536){
var vec__37537 = p__37536;
var seq__37538 = cljs.core.seq.call(null,vec__37537);
var first__37539 = cljs.core.first.call(null,seq__37538);
var seq__37538__$1 = cljs.core.next.call(null,seq__37538);
var map__37540 = first__37539;
var map__37540__$1 = ((((!((map__37540 == null)))?(((((map__37540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37540):map__37540);
var msg = map__37540__$1;
var msg_name = cljs.core.get.call(null,map__37540__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37538__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37542){
var map__37543 = p__37542;
var map__37543__$1 = ((((!((map__37543 == null)))?(((((map__37543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37543):map__37543);
var on_compile_warning = cljs.core.get.call(null,map__37543__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37543__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37543,map__37543__$1,on_compile_warning,on_compile_fail){
return (function (p__37545){
var vec__37546 = p__37545;
var seq__37547 = cljs.core.seq.call(null,vec__37546);
var first__37548 = cljs.core.first.call(null,seq__37547);
var seq__37547__$1 = cljs.core.next.call(null,seq__37547);
var map__37549 = first__37548;
var map__37549__$1 = ((((!((map__37549 == null)))?(((((map__37549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37549):map__37549);
var msg = map__37549__$1;
var msg_name = cljs.core.get.call(null,map__37549__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37547__$1;
var pred__37551 = cljs.core._EQ_;
var expr__37552 = msg_name;
if(cljs.core.truth_(pred__37551.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37552))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37551.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37552))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37543,map__37543__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto__,msg_hist,msg_names,msg){
return (function (state_37641){
var state_val_37642 = (state_37641[(1)]);
if((state_val_37642 === (7))){
var inst_37561 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
if(cljs.core.truth_(inst_37561)){
var statearr_37643_37690 = state_37641__$1;
(statearr_37643_37690[(1)] = (8));

} else {
var statearr_37644_37691 = state_37641__$1;
(statearr_37644_37691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (20))){
var inst_37635 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37645_37692 = state_37641__$1;
(statearr_37645_37692[(2)] = inst_37635);

(statearr_37645_37692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (27))){
var inst_37631 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37646_37693 = state_37641__$1;
(statearr_37646_37693[(2)] = inst_37631);

(statearr_37646_37693[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (1))){
var inst_37554 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37641__$1 = state_37641;
if(cljs.core.truth_(inst_37554)){
var statearr_37647_37694 = state_37641__$1;
(statearr_37647_37694[(1)] = (2));

} else {
var statearr_37648_37695 = state_37641__$1;
(statearr_37648_37695[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (24))){
var inst_37633 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37649_37696 = state_37641__$1;
(statearr_37649_37696[(2)] = inst_37633);

(statearr_37649_37696[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (4))){
var inst_37639 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37641__$1,inst_37639);
} else {
if((state_val_37642 === (15))){
var inst_37637 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37650_37697 = state_37641__$1;
(statearr_37650_37697[(2)] = inst_37637);

(statearr_37650_37697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (21))){
var inst_37590 = (state_37641[(2)]);
var inst_37591 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37592 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37591);
var state_37641__$1 = (function (){var statearr_37651 = state_37641;
(statearr_37651[(7)] = inst_37590);

return statearr_37651;
})();
var statearr_37652_37698 = state_37641__$1;
(statearr_37652_37698[(2)] = inst_37592);

(statearr_37652_37698[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (31))){
var inst_37620 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37641__$1 = state_37641;
if(cljs.core.truth_(inst_37620)){
var statearr_37653_37699 = state_37641__$1;
(statearr_37653_37699[(1)] = (34));

} else {
var statearr_37654_37700 = state_37641__$1;
(statearr_37654_37700[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (32))){
var inst_37629 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37655_37701 = state_37641__$1;
(statearr_37655_37701[(2)] = inst_37629);

(statearr_37655_37701[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (33))){
var inst_37616 = (state_37641[(2)]);
var inst_37617 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37618 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37617);
var state_37641__$1 = (function (){var statearr_37656 = state_37641;
(statearr_37656[(8)] = inst_37616);

return statearr_37656;
})();
var statearr_37657_37702 = state_37641__$1;
(statearr_37657_37702[(2)] = inst_37618);

(statearr_37657_37702[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (13))){
var inst_37575 = figwheel.client.heads_up.clear.call(null);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(16),inst_37575);
} else {
if((state_val_37642 === (22))){
var inst_37596 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37597 = figwheel.client.heads_up.append_warning_message.call(null,inst_37596);
var state_37641__$1 = state_37641;
var statearr_37658_37703 = state_37641__$1;
(statearr_37658_37703[(2)] = inst_37597);

(statearr_37658_37703[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (36))){
var inst_37627 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37659_37704 = state_37641__$1;
(statearr_37659_37704[(2)] = inst_37627);

(statearr_37659_37704[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (29))){
var inst_37607 = (state_37641[(2)]);
var inst_37608 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37609 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37608);
var state_37641__$1 = (function (){var statearr_37660 = state_37641;
(statearr_37660[(9)] = inst_37607);

return statearr_37660;
})();
var statearr_37661_37705 = state_37641__$1;
(statearr_37661_37705[(2)] = inst_37609);

(statearr_37661_37705[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (6))){
var inst_37556 = (state_37641[(10)]);
var state_37641__$1 = state_37641;
var statearr_37662_37706 = state_37641__$1;
(statearr_37662_37706[(2)] = inst_37556);

(statearr_37662_37706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (28))){
var inst_37603 = (state_37641[(2)]);
var inst_37604 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37605 = figwheel.client.heads_up.display_warning.call(null,inst_37604);
var state_37641__$1 = (function (){var statearr_37663 = state_37641;
(statearr_37663[(11)] = inst_37603);

return statearr_37663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(29),inst_37605);
} else {
if((state_val_37642 === (25))){
var inst_37601 = figwheel.client.heads_up.clear.call(null);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(28),inst_37601);
} else {
if((state_val_37642 === (34))){
var inst_37622 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(37),inst_37622);
} else {
if((state_val_37642 === (17))){
var inst_37581 = (state_37641[(2)]);
var inst_37582 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37583 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37582);
var state_37641__$1 = (function (){var statearr_37664 = state_37641;
(statearr_37664[(12)] = inst_37581);

return statearr_37664;
})();
var statearr_37665_37707 = state_37641__$1;
(statearr_37665_37707[(2)] = inst_37583);

(statearr_37665_37707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (3))){
var inst_37573 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37641__$1 = state_37641;
if(cljs.core.truth_(inst_37573)){
var statearr_37666_37708 = state_37641__$1;
(statearr_37666_37708[(1)] = (13));

} else {
var statearr_37667_37709 = state_37641__$1;
(statearr_37667_37709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (12))){
var inst_37569 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37668_37710 = state_37641__$1;
(statearr_37668_37710[(2)] = inst_37569);

(statearr_37668_37710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (2))){
var inst_37556 = (state_37641[(10)]);
var inst_37556__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37641__$1 = (function (){var statearr_37669 = state_37641;
(statearr_37669[(10)] = inst_37556__$1);

return statearr_37669;
})();
if(cljs.core.truth_(inst_37556__$1)){
var statearr_37670_37711 = state_37641__$1;
(statearr_37670_37711[(1)] = (5));

} else {
var statearr_37671_37712 = state_37641__$1;
(statearr_37671_37712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (23))){
var inst_37599 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37641__$1 = state_37641;
if(cljs.core.truth_(inst_37599)){
var statearr_37672_37713 = state_37641__$1;
(statearr_37672_37713[(1)] = (25));

} else {
var statearr_37673_37714 = state_37641__$1;
(statearr_37673_37714[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (35))){
var state_37641__$1 = state_37641;
var statearr_37674_37715 = state_37641__$1;
(statearr_37674_37715[(2)] = null);

(statearr_37674_37715[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (19))){
var inst_37594 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37641__$1 = state_37641;
if(cljs.core.truth_(inst_37594)){
var statearr_37675_37716 = state_37641__$1;
(statearr_37675_37716[(1)] = (22));

} else {
var statearr_37676_37717 = state_37641__$1;
(statearr_37676_37717[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (11))){
var inst_37565 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37677_37718 = state_37641__$1;
(statearr_37677_37718[(2)] = inst_37565);

(statearr_37677_37718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (9))){
var inst_37567 = figwheel.client.heads_up.clear.call(null);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(12),inst_37567);
} else {
if((state_val_37642 === (5))){
var inst_37558 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37641__$1 = state_37641;
var statearr_37678_37719 = state_37641__$1;
(statearr_37678_37719[(2)] = inst_37558);

(statearr_37678_37719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (14))){
var inst_37585 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37641__$1 = state_37641;
if(cljs.core.truth_(inst_37585)){
var statearr_37679_37720 = state_37641__$1;
(statearr_37679_37720[(1)] = (18));

} else {
var statearr_37680_37721 = state_37641__$1;
(statearr_37680_37721[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (26))){
var inst_37611 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37641__$1 = state_37641;
if(cljs.core.truth_(inst_37611)){
var statearr_37681_37722 = state_37641__$1;
(statearr_37681_37722[(1)] = (30));

} else {
var statearr_37682_37723 = state_37641__$1;
(statearr_37682_37723[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (16))){
var inst_37577 = (state_37641[(2)]);
var inst_37578 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37579 = figwheel.client.heads_up.display_exception.call(null,inst_37578);
var state_37641__$1 = (function (){var statearr_37683 = state_37641;
(statearr_37683[(13)] = inst_37577);

return statearr_37683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(17),inst_37579);
} else {
if((state_val_37642 === (30))){
var inst_37613 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37614 = figwheel.client.heads_up.display_warning.call(null,inst_37613);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(33),inst_37614);
} else {
if((state_val_37642 === (10))){
var inst_37571 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37684_37724 = state_37641__$1;
(statearr_37684_37724[(2)] = inst_37571);

(statearr_37684_37724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (18))){
var inst_37587 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37588 = figwheel.client.heads_up.display_exception.call(null,inst_37587);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(21),inst_37588);
} else {
if((state_val_37642 === (37))){
var inst_37624 = (state_37641[(2)]);
var state_37641__$1 = state_37641;
var statearr_37685_37725 = state_37641__$1;
(statearr_37685_37725[(2)] = inst_37624);

(statearr_37685_37725[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37642 === (8))){
var inst_37563 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(11),inst_37563);
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
});})(c__29560__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29403__auto__,c__29560__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____0 = (function (){
var statearr_37686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37686[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__);

(statearr_37686[(1)] = (1));

return statearr_37686;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____1 = (function (state_37641){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_37641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e37687){if((e37687 instanceof Object)){
var ex__29407__auto__ = e37687;
var statearr_37688_37726 = state_37641;
(statearr_37688_37726[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37727 = state_37641;
state_37641 = G__37727;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__ = function(state_37641){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____1.call(this,state_37641);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto__,msg_hist,msg_names,msg))
})();
var state__29562__auto__ = (function (){var statearr_37689 = f__29561__auto__.call(null);
(statearr_37689[(6)] = c__29560__auto__);

return statearr_37689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto__,msg_hist,msg_names,msg))
);

return c__29560__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29560__auto___37756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___37756,ch){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___37756,ch){
return (function (state_37742){
var state_val_37743 = (state_37742[(1)]);
if((state_val_37743 === (1))){
var state_37742__$1 = state_37742;
var statearr_37744_37757 = state_37742__$1;
(statearr_37744_37757[(2)] = null);

(statearr_37744_37757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (2))){
var state_37742__$1 = state_37742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37742__$1,(4),ch);
} else {
if((state_val_37743 === (3))){
var inst_37740 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37742__$1,inst_37740);
} else {
if((state_val_37743 === (4))){
var inst_37730 = (state_37742[(7)]);
var inst_37730__$1 = (state_37742[(2)]);
var state_37742__$1 = (function (){var statearr_37745 = state_37742;
(statearr_37745[(7)] = inst_37730__$1);

return statearr_37745;
})();
if(cljs.core.truth_(inst_37730__$1)){
var statearr_37746_37758 = state_37742__$1;
(statearr_37746_37758[(1)] = (5));

} else {
var statearr_37747_37759 = state_37742__$1;
(statearr_37747_37759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (5))){
var inst_37730 = (state_37742[(7)]);
var inst_37732 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37730);
var state_37742__$1 = state_37742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37742__$1,(8),inst_37732);
} else {
if((state_val_37743 === (6))){
var state_37742__$1 = state_37742;
var statearr_37748_37760 = state_37742__$1;
(statearr_37748_37760[(2)] = null);

(statearr_37748_37760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (7))){
var inst_37738 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
var statearr_37749_37761 = state_37742__$1;
(statearr_37749_37761[(2)] = inst_37738);

(statearr_37749_37761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (8))){
var inst_37734 = (state_37742[(2)]);
var state_37742__$1 = (function (){var statearr_37750 = state_37742;
(statearr_37750[(8)] = inst_37734);

return statearr_37750;
})();
var statearr_37751_37762 = state_37742__$1;
(statearr_37751_37762[(2)] = null);

(statearr_37751_37762[(1)] = (2));


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
});})(c__29560__auto___37756,ch))
;
return ((function (switch__29403__auto__,c__29560__auto___37756,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29404__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29404__auto____0 = (function (){
var statearr_37752 = [null,null,null,null,null,null,null,null,null];
(statearr_37752[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29404__auto__);

(statearr_37752[(1)] = (1));

return statearr_37752;
});
var figwheel$client$heads_up_plugin_$_state_machine__29404__auto____1 = (function (state_37742){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_37742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e37753){if((e37753 instanceof Object)){
var ex__29407__auto__ = e37753;
var statearr_37754_37763 = state_37742;
(statearr_37754_37763[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37764 = state_37742;
state_37742 = G__37764;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29404__auto__ = function(state_37742){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29404__auto____1.call(this,state_37742);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29404__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29404__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___37756,ch))
})();
var state__29562__auto__ = (function (){var statearr_37755 = f__29561__auto__.call(null);
(statearr_37755[(6)] = c__29560__auto___37756);

return statearr_37755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___37756,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto__){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto__){
return (function (state_37770){
var state_val_37771 = (state_37770[(1)]);
if((state_val_37771 === (1))){
var inst_37765 = cljs.core.async.timeout.call(null,(3000));
var state_37770__$1 = state_37770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37770__$1,(2),inst_37765);
} else {
if((state_val_37771 === (2))){
var inst_37767 = (state_37770[(2)]);
var inst_37768 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37770__$1 = (function (){var statearr_37772 = state_37770;
(statearr_37772[(7)] = inst_37767);

return statearr_37772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37770__$1,inst_37768);
} else {
return null;
}
}
});})(c__29560__auto__))
;
return ((function (switch__29403__auto__,c__29560__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____0 = (function (){
var statearr_37773 = [null,null,null,null,null,null,null,null];
(statearr_37773[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__);

(statearr_37773[(1)] = (1));

return statearr_37773;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____1 = (function (state_37770){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_37770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e37774){if((e37774 instanceof Object)){
var ex__29407__auto__ = e37774;
var statearr_37775_37777 = state_37770;
(statearr_37775_37777[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37778 = state_37770;
state_37770 = G__37778;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__ = function(state_37770){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____1.call(this,state_37770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto__))
})();
var state__29562__auto__ = (function (){var statearr_37776 = f__29561__auto__.call(null);
(statearr_37776[(6)] = c__29560__auto__);

return statearr_37776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto__))
);

return c__29560__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto__,figwheel_version,temp__5457__auto__){
return (function (state_37785){
var state_val_37786 = (state_37785[(1)]);
if((state_val_37786 === (1))){
var inst_37779 = cljs.core.async.timeout.call(null,(2000));
var state_37785__$1 = state_37785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37785__$1,(2),inst_37779);
} else {
if((state_val_37786 === (2))){
var inst_37781 = (state_37785[(2)]);
var inst_37782 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37783 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37782);
var state_37785__$1 = (function (){var statearr_37787 = state_37785;
(statearr_37787[(7)] = inst_37781);

return statearr_37787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37785__$1,inst_37783);
} else {
return null;
}
}
});})(c__29560__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__29403__auto__,c__29560__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____0 = (function (){
var statearr_37788 = [null,null,null,null,null,null,null,null];
(statearr_37788[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__);

(statearr_37788[(1)] = (1));

return statearr_37788;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____1 = (function (state_37785){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_37785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e37789){if((e37789 instanceof Object)){
var ex__29407__auto__ = e37789;
var statearr_37790_37792 = state_37785;
(statearr_37790_37792[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37793 = state_37785;
state_37785 = G__37793;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__ = function(state_37785){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____1.call(this,state_37785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto__,figwheel_version,temp__5457__auto__))
})();
var state__29562__auto__ = (function (){var statearr_37791 = f__29561__auto__.call(null);
(statearr_37791[(6)] = c__29560__auto__);

return statearr_37791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto__,figwheel_version,temp__5457__auto__))
);

return c__29560__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37794){
var map__37795 = p__37794;
var map__37795__$1 = ((((!((map__37795 == null)))?(((((map__37795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37795):map__37795);
var file = cljs.core.get.call(null,map__37795__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37795__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37795__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37797 = "";
var G__37797__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37797),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37797);
var G__37797__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37797__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37797__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37797__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37797__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37798){
var map__37799 = p__37798;
var map__37799__$1 = ((((!((map__37799 == null)))?(((((map__37799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37799):map__37799);
var ed = map__37799__$1;
var formatted_exception = cljs.core.get.call(null,map__37799__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37799__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37799__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37801_37805 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37802_37806 = null;
var count__37803_37807 = (0);
var i__37804_37808 = (0);
while(true){
if((i__37804_37808 < count__37803_37807)){
var msg_37809 = cljs.core._nth.call(null,chunk__37802_37806,i__37804_37808);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37809);


var G__37810 = seq__37801_37805;
var G__37811 = chunk__37802_37806;
var G__37812 = count__37803_37807;
var G__37813 = (i__37804_37808 + (1));
seq__37801_37805 = G__37810;
chunk__37802_37806 = G__37811;
count__37803_37807 = G__37812;
i__37804_37808 = G__37813;
continue;
} else {
var temp__5457__auto___37814 = cljs.core.seq.call(null,seq__37801_37805);
if(temp__5457__auto___37814){
var seq__37801_37815__$1 = temp__5457__auto___37814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37801_37815__$1)){
var c__4319__auto___37816 = cljs.core.chunk_first.call(null,seq__37801_37815__$1);
var G__37817 = cljs.core.chunk_rest.call(null,seq__37801_37815__$1);
var G__37818 = c__4319__auto___37816;
var G__37819 = cljs.core.count.call(null,c__4319__auto___37816);
var G__37820 = (0);
seq__37801_37805 = G__37817;
chunk__37802_37806 = G__37818;
count__37803_37807 = G__37819;
i__37804_37808 = G__37820;
continue;
} else {
var msg_37821 = cljs.core.first.call(null,seq__37801_37815__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37821);


var G__37822 = cljs.core.next.call(null,seq__37801_37815__$1);
var G__37823 = null;
var G__37824 = (0);
var G__37825 = (0);
seq__37801_37805 = G__37822;
chunk__37802_37806 = G__37823;
count__37803_37807 = G__37824;
i__37804_37808 = G__37825;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37826){
var map__37827 = p__37826;
var map__37827__$1 = ((((!((map__37827 == null)))?(((((map__37827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37827):map__37827);
var w = map__37827__$1;
var message = cljs.core.get.call(null,map__37827__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37829 = cljs.core.seq.call(null,plugins);
var chunk__37830 = null;
var count__37831 = (0);
var i__37832 = (0);
while(true){
if((i__37832 < count__37831)){
var vec__37833 = cljs.core._nth.call(null,chunk__37830,i__37832);
var k = cljs.core.nth.call(null,vec__37833,(0),null);
var plugin = cljs.core.nth.call(null,vec__37833,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37839 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37829,chunk__37830,count__37831,i__37832,pl_37839,vec__37833,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37839.call(null,msg_hist);
});})(seq__37829,chunk__37830,count__37831,i__37832,pl_37839,vec__37833,k,plugin))
);
} else {
}


var G__37840 = seq__37829;
var G__37841 = chunk__37830;
var G__37842 = count__37831;
var G__37843 = (i__37832 + (1));
seq__37829 = G__37840;
chunk__37830 = G__37841;
count__37831 = G__37842;
i__37832 = G__37843;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37829);
if(temp__5457__auto__){
var seq__37829__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37829__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37829__$1);
var G__37844 = cljs.core.chunk_rest.call(null,seq__37829__$1);
var G__37845 = c__4319__auto__;
var G__37846 = cljs.core.count.call(null,c__4319__auto__);
var G__37847 = (0);
seq__37829 = G__37844;
chunk__37830 = G__37845;
count__37831 = G__37846;
i__37832 = G__37847;
continue;
} else {
var vec__37836 = cljs.core.first.call(null,seq__37829__$1);
var k = cljs.core.nth.call(null,vec__37836,(0),null);
var plugin = cljs.core.nth.call(null,vec__37836,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37848 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37829,chunk__37830,count__37831,i__37832,pl_37848,vec__37836,k,plugin,seq__37829__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37848.call(null,msg_hist);
});})(seq__37829,chunk__37830,count__37831,i__37832,pl_37848,vec__37836,k,plugin,seq__37829__$1,temp__5457__auto__))
);
} else {
}


var G__37849 = cljs.core.next.call(null,seq__37829__$1);
var G__37850 = null;
var G__37851 = (0);
var G__37852 = (0);
seq__37829 = G__37849;
chunk__37830 = G__37850;
count__37831 = G__37851;
i__37832 = G__37852;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37854 = arguments.length;
switch (G__37854) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37855_37860 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37856_37861 = null;
var count__37857_37862 = (0);
var i__37858_37863 = (0);
while(true){
if((i__37858_37863 < count__37857_37862)){
var msg_37864 = cljs.core._nth.call(null,chunk__37856_37861,i__37858_37863);
figwheel.client.socket.handle_incoming_message.call(null,msg_37864);


var G__37865 = seq__37855_37860;
var G__37866 = chunk__37856_37861;
var G__37867 = count__37857_37862;
var G__37868 = (i__37858_37863 + (1));
seq__37855_37860 = G__37865;
chunk__37856_37861 = G__37866;
count__37857_37862 = G__37867;
i__37858_37863 = G__37868;
continue;
} else {
var temp__5457__auto___37869 = cljs.core.seq.call(null,seq__37855_37860);
if(temp__5457__auto___37869){
var seq__37855_37870__$1 = temp__5457__auto___37869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37855_37870__$1)){
var c__4319__auto___37871 = cljs.core.chunk_first.call(null,seq__37855_37870__$1);
var G__37872 = cljs.core.chunk_rest.call(null,seq__37855_37870__$1);
var G__37873 = c__4319__auto___37871;
var G__37874 = cljs.core.count.call(null,c__4319__auto___37871);
var G__37875 = (0);
seq__37855_37860 = G__37872;
chunk__37856_37861 = G__37873;
count__37857_37862 = G__37874;
i__37858_37863 = G__37875;
continue;
} else {
var msg_37876 = cljs.core.first.call(null,seq__37855_37870__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37876);


var G__37877 = cljs.core.next.call(null,seq__37855_37870__$1);
var G__37878 = null;
var G__37879 = (0);
var G__37880 = (0);
seq__37855_37860 = G__37877;
chunk__37856_37861 = G__37878;
count__37857_37862 = G__37879;
i__37858_37863 = G__37880;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37885 = arguments.length;
var i__4500__auto___37886 = (0);
while(true){
if((i__4500__auto___37886 < len__4499__auto___37885)){
args__4502__auto__.push((arguments[i__4500__auto___37886]));

var G__37887 = (i__4500__auto___37886 + (1));
i__4500__auto___37886 = G__37887;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37882){
var map__37883 = p__37882;
var map__37883__$1 = ((((!((map__37883 == null)))?(((((map__37883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37883):map__37883);
var opts = map__37883__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37881){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37881));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37888){if((e37888 instanceof Error)){
var e = e37888;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37888;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37889){
var map__37890 = p__37889;
var map__37890__$1 = ((((!((map__37890 == null)))?(((((map__37890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37890):map__37890);
var msg_name = cljs.core.get.call(null,map__37890__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545496990413
