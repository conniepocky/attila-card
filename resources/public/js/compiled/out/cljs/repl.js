// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36442){
var map__36443 = p__36442;
var map__36443__$1 = ((((!((map__36443 == null)))?(((((map__36443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36443):map__36443);
var m = map__36443__$1;
var n = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36445_36467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36446_36468 = null;
var count__36447_36469 = (0);
var i__36448_36470 = (0);
while(true){
if((i__36448_36470 < count__36447_36469)){
var f_36471 = cljs.core._nth.call(null,chunk__36446_36468,i__36448_36470);
cljs.core.println.call(null,"  ",f_36471);


var G__36472 = seq__36445_36467;
var G__36473 = chunk__36446_36468;
var G__36474 = count__36447_36469;
var G__36475 = (i__36448_36470 + (1));
seq__36445_36467 = G__36472;
chunk__36446_36468 = G__36473;
count__36447_36469 = G__36474;
i__36448_36470 = G__36475;
continue;
} else {
var temp__5457__auto___36476 = cljs.core.seq.call(null,seq__36445_36467);
if(temp__5457__auto___36476){
var seq__36445_36477__$1 = temp__5457__auto___36476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36445_36477__$1)){
var c__4319__auto___36478 = cljs.core.chunk_first.call(null,seq__36445_36477__$1);
var G__36479 = cljs.core.chunk_rest.call(null,seq__36445_36477__$1);
var G__36480 = c__4319__auto___36478;
var G__36481 = cljs.core.count.call(null,c__4319__auto___36478);
var G__36482 = (0);
seq__36445_36467 = G__36479;
chunk__36446_36468 = G__36480;
count__36447_36469 = G__36481;
i__36448_36470 = G__36482;
continue;
} else {
var f_36483 = cljs.core.first.call(null,seq__36445_36477__$1);
cljs.core.println.call(null,"  ",f_36483);


var G__36484 = cljs.core.next.call(null,seq__36445_36477__$1);
var G__36485 = null;
var G__36486 = (0);
var G__36487 = (0);
seq__36445_36467 = G__36484;
chunk__36446_36468 = G__36485;
count__36447_36469 = G__36486;
i__36448_36470 = G__36487;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36488 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36488);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36488)))?cljs.core.second.call(null,arglists_36488):arglists_36488));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36449_36489 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36450_36490 = null;
var count__36451_36491 = (0);
var i__36452_36492 = (0);
while(true){
if((i__36452_36492 < count__36451_36491)){
var vec__36453_36493 = cljs.core._nth.call(null,chunk__36450_36490,i__36452_36492);
var name_36494 = cljs.core.nth.call(null,vec__36453_36493,(0),null);
var map__36456_36495 = cljs.core.nth.call(null,vec__36453_36493,(1),null);
var map__36456_36496__$1 = ((((!((map__36456_36495 == null)))?(((((map__36456_36495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36456_36495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36456_36495):map__36456_36495);
var doc_36497 = cljs.core.get.call(null,map__36456_36496__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36498 = cljs.core.get.call(null,map__36456_36496__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36494);

cljs.core.println.call(null," ",arglists_36498);

if(cljs.core.truth_(doc_36497)){
cljs.core.println.call(null," ",doc_36497);
} else {
}


var G__36499 = seq__36449_36489;
var G__36500 = chunk__36450_36490;
var G__36501 = count__36451_36491;
var G__36502 = (i__36452_36492 + (1));
seq__36449_36489 = G__36499;
chunk__36450_36490 = G__36500;
count__36451_36491 = G__36501;
i__36452_36492 = G__36502;
continue;
} else {
var temp__5457__auto___36503 = cljs.core.seq.call(null,seq__36449_36489);
if(temp__5457__auto___36503){
var seq__36449_36504__$1 = temp__5457__auto___36503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36449_36504__$1)){
var c__4319__auto___36505 = cljs.core.chunk_first.call(null,seq__36449_36504__$1);
var G__36506 = cljs.core.chunk_rest.call(null,seq__36449_36504__$1);
var G__36507 = c__4319__auto___36505;
var G__36508 = cljs.core.count.call(null,c__4319__auto___36505);
var G__36509 = (0);
seq__36449_36489 = G__36506;
chunk__36450_36490 = G__36507;
count__36451_36491 = G__36508;
i__36452_36492 = G__36509;
continue;
} else {
var vec__36458_36510 = cljs.core.first.call(null,seq__36449_36504__$1);
var name_36511 = cljs.core.nth.call(null,vec__36458_36510,(0),null);
var map__36461_36512 = cljs.core.nth.call(null,vec__36458_36510,(1),null);
var map__36461_36513__$1 = ((((!((map__36461_36512 == null)))?(((((map__36461_36512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36461_36512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36461_36512):map__36461_36512);
var doc_36514 = cljs.core.get.call(null,map__36461_36513__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36515 = cljs.core.get.call(null,map__36461_36513__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36511);

cljs.core.println.call(null," ",arglists_36515);

if(cljs.core.truth_(doc_36514)){
cljs.core.println.call(null," ",doc_36514);
} else {
}


var G__36516 = cljs.core.next.call(null,seq__36449_36504__$1);
var G__36517 = null;
var G__36518 = (0);
var G__36519 = (0);
seq__36449_36489 = G__36516;
chunk__36450_36490 = G__36517;
count__36451_36491 = G__36518;
i__36452_36492 = G__36519;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__36463 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36464 = null;
var count__36465 = (0);
var i__36466 = (0);
while(true){
if((i__36466 < count__36465)){
var role = cljs.core._nth.call(null,chunk__36464,i__36466);
var temp__5457__auto___36520__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36520__$1)){
var spec_36521 = temp__5457__auto___36520__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36521));
} else {
}


var G__36522 = seq__36463;
var G__36523 = chunk__36464;
var G__36524 = count__36465;
var G__36525 = (i__36466 + (1));
seq__36463 = G__36522;
chunk__36464 = G__36523;
count__36465 = G__36524;
i__36466 = G__36525;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__36463);
if(temp__5457__auto____$1){
var seq__36463__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36463__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__36463__$1);
var G__36526 = cljs.core.chunk_rest.call(null,seq__36463__$1);
var G__36527 = c__4319__auto__;
var G__36528 = cljs.core.count.call(null,c__4319__auto__);
var G__36529 = (0);
seq__36463 = G__36526;
chunk__36464 = G__36527;
count__36465 = G__36528;
i__36466 = G__36529;
continue;
} else {
var role = cljs.core.first.call(null,seq__36463__$1);
var temp__5457__auto___36530__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36530__$2)){
var spec_36531 = temp__5457__auto___36530__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36531));
} else {
}


var G__36532 = cljs.core.next.call(null,seq__36463__$1);
var G__36533 = null;
var G__36534 = (0);
var G__36535 = (0);
seq__36463 = G__36532;
chunk__36464 = G__36533;
count__36465 = G__36534;
i__36466 = G__36535;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1545496989273
