// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34309_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34309_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34310 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34311 = null;
var count__34312 = (0);
var i__34313 = (0);
while(true){
if((i__34313 < count__34312)){
var n = cljs.core._nth.call(null,chunk__34311,i__34313);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34314 = seq__34310;
var G__34315 = chunk__34311;
var G__34316 = count__34312;
var G__34317 = (i__34313 + (1));
seq__34310 = G__34314;
chunk__34311 = G__34315;
count__34312 = G__34316;
i__34313 = G__34317;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34310);
if(temp__5457__auto__){
var seq__34310__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34310__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34310__$1);
var G__34318 = cljs.core.chunk_rest.call(null,seq__34310__$1);
var G__34319 = c__4319__auto__;
var G__34320 = cljs.core.count.call(null,c__4319__auto__);
var G__34321 = (0);
seq__34310 = G__34318;
chunk__34311 = G__34319;
count__34312 = G__34320;
i__34313 = G__34321;
continue;
} else {
var n = cljs.core.first.call(null,seq__34310__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34322 = cljs.core.next.call(null,seq__34310__$1);
var G__34323 = null;
var G__34324 = (0);
var G__34325 = (0);
seq__34310 = G__34322;
chunk__34311 = G__34323;
count__34312 = G__34324;
i__34313 = G__34325;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__34326){
var vec__34327 = p__34326;
var _ = cljs.core.nth.call(null,vec__34327,(0),null);
var v = cljs.core.nth.call(null,vec__34327,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__34330){
var vec__34331 = p__34330;
var k = cljs.core.nth.call(null,vec__34331,(0),null);
var v = cljs.core.nth.call(null,vec__34331,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34343_34351 = cljs.core.seq.call(null,deps);
var chunk__34344_34352 = null;
var count__34345_34353 = (0);
var i__34346_34354 = (0);
while(true){
if((i__34346_34354 < count__34345_34353)){
var dep_34355 = cljs.core._nth.call(null,chunk__34344_34352,i__34346_34354);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_34355;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34355));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34355,(depth + (1)),state);
} else {
}


var G__34356 = seq__34343_34351;
var G__34357 = chunk__34344_34352;
var G__34358 = count__34345_34353;
var G__34359 = (i__34346_34354 + (1));
seq__34343_34351 = G__34356;
chunk__34344_34352 = G__34357;
count__34345_34353 = G__34358;
i__34346_34354 = G__34359;
continue;
} else {
var temp__5457__auto___34360 = cljs.core.seq.call(null,seq__34343_34351);
if(temp__5457__auto___34360){
var seq__34343_34361__$1 = temp__5457__auto___34360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34343_34361__$1)){
var c__4319__auto___34362 = cljs.core.chunk_first.call(null,seq__34343_34361__$1);
var G__34363 = cljs.core.chunk_rest.call(null,seq__34343_34361__$1);
var G__34364 = c__4319__auto___34362;
var G__34365 = cljs.core.count.call(null,c__4319__auto___34362);
var G__34366 = (0);
seq__34343_34351 = G__34363;
chunk__34344_34352 = G__34364;
count__34345_34353 = G__34365;
i__34346_34354 = G__34366;
continue;
} else {
var dep_34367 = cljs.core.first.call(null,seq__34343_34361__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_34367;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34367));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34367,(depth + (1)),state);
} else {
}


var G__34368 = cljs.core.next.call(null,seq__34343_34361__$1);
var G__34369 = null;
var G__34370 = (0);
var G__34371 = (0);
seq__34343_34351 = G__34368;
chunk__34344_34352 = G__34369;
count__34345_34353 = G__34370;
i__34346_34354 = G__34371;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34347){
var vec__34348 = p__34347;
var seq__34349 = cljs.core.seq.call(null,vec__34348);
var first__34350 = cljs.core.first.call(null,seq__34349);
var seq__34349__$1 = cljs.core.next.call(null,seq__34349);
var x = first__34350;
var xs = seq__34349__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34348,seq__34349,first__34350,seq__34349__$1,x,xs,get_deps__$1){
return (function (p1__34334_SHARP_){
return clojure.set.difference.call(null,p1__34334_SHARP_,x);
});})(vec__34348,seq__34349,first__34350,seq__34349__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34372 = cljs.core.seq.call(null,provides);
var chunk__34373 = null;
var count__34374 = (0);
var i__34375 = (0);
while(true){
if((i__34375 < count__34374)){
var prov = cljs.core._nth.call(null,chunk__34373,i__34375);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34376_34384 = cljs.core.seq.call(null,requires);
var chunk__34377_34385 = null;
var count__34378_34386 = (0);
var i__34379_34387 = (0);
while(true){
if((i__34379_34387 < count__34378_34386)){
var req_34388 = cljs.core._nth.call(null,chunk__34377_34385,i__34379_34387);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34388,prov);


var G__34389 = seq__34376_34384;
var G__34390 = chunk__34377_34385;
var G__34391 = count__34378_34386;
var G__34392 = (i__34379_34387 + (1));
seq__34376_34384 = G__34389;
chunk__34377_34385 = G__34390;
count__34378_34386 = G__34391;
i__34379_34387 = G__34392;
continue;
} else {
var temp__5457__auto___34393 = cljs.core.seq.call(null,seq__34376_34384);
if(temp__5457__auto___34393){
var seq__34376_34394__$1 = temp__5457__auto___34393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34376_34394__$1)){
var c__4319__auto___34395 = cljs.core.chunk_first.call(null,seq__34376_34394__$1);
var G__34396 = cljs.core.chunk_rest.call(null,seq__34376_34394__$1);
var G__34397 = c__4319__auto___34395;
var G__34398 = cljs.core.count.call(null,c__4319__auto___34395);
var G__34399 = (0);
seq__34376_34384 = G__34396;
chunk__34377_34385 = G__34397;
count__34378_34386 = G__34398;
i__34379_34387 = G__34399;
continue;
} else {
var req_34400 = cljs.core.first.call(null,seq__34376_34394__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34400,prov);


var G__34401 = cljs.core.next.call(null,seq__34376_34394__$1);
var G__34402 = null;
var G__34403 = (0);
var G__34404 = (0);
seq__34376_34384 = G__34401;
chunk__34377_34385 = G__34402;
count__34378_34386 = G__34403;
i__34379_34387 = G__34404;
continue;
}
} else {
}
}
break;
}


var G__34405 = seq__34372;
var G__34406 = chunk__34373;
var G__34407 = count__34374;
var G__34408 = (i__34375 + (1));
seq__34372 = G__34405;
chunk__34373 = G__34406;
count__34374 = G__34407;
i__34375 = G__34408;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34372);
if(temp__5457__auto__){
var seq__34372__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34372__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__34372__$1);
var G__34409 = cljs.core.chunk_rest.call(null,seq__34372__$1);
var G__34410 = c__4319__auto__;
var G__34411 = cljs.core.count.call(null,c__4319__auto__);
var G__34412 = (0);
seq__34372 = G__34409;
chunk__34373 = G__34410;
count__34374 = G__34411;
i__34375 = G__34412;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34372__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34380_34413 = cljs.core.seq.call(null,requires);
var chunk__34381_34414 = null;
var count__34382_34415 = (0);
var i__34383_34416 = (0);
while(true){
if((i__34383_34416 < count__34382_34415)){
var req_34417 = cljs.core._nth.call(null,chunk__34381_34414,i__34383_34416);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34417,prov);


var G__34418 = seq__34380_34413;
var G__34419 = chunk__34381_34414;
var G__34420 = count__34382_34415;
var G__34421 = (i__34383_34416 + (1));
seq__34380_34413 = G__34418;
chunk__34381_34414 = G__34419;
count__34382_34415 = G__34420;
i__34383_34416 = G__34421;
continue;
} else {
var temp__5457__auto___34422__$1 = cljs.core.seq.call(null,seq__34380_34413);
if(temp__5457__auto___34422__$1){
var seq__34380_34423__$1 = temp__5457__auto___34422__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34380_34423__$1)){
var c__4319__auto___34424 = cljs.core.chunk_first.call(null,seq__34380_34423__$1);
var G__34425 = cljs.core.chunk_rest.call(null,seq__34380_34423__$1);
var G__34426 = c__4319__auto___34424;
var G__34427 = cljs.core.count.call(null,c__4319__auto___34424);
var G__34428 = (0);
seq__34380_34413 = G__34425;
chunk__34381_34414 = G__34426;
count__34382_34415 = G__34427;
i__34383_34416 = G__34428;
continue;
} else {
var req_34429 = cljs.core.first.call(null,seq__34380_34423__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34429,prov);


var G__34430 = cljs.core.next.call(null,seq__34380_34423__$1);
var G__34431 = null;
var G__34432 = (0);
var G__34433 = (0);
seq__34380_34413 = G__34430;
chunk__34381_34414 = G__34431;
count__34382_34415 = G__34432;
i__34383_34416 = G__34433;
continue;
}
} else {
}
}
break;
}


var G__34434 = cljs.core.next.call(null,seq__34372__$1);
var G__34435 = null;
var G__34436 = (0);
var G__34437 = (0);
seq__34372 = G__34434;
chunk__34373 = G__34435;
count__34374 = G__34436;
i__34375 = G__34437;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34438_34442 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34439_34443 = null;
var count__34440_34444 = (0);
var i__34441_34445 = (0);
while(true){
if((i__34441_34445 < count__34440_34444)){
var ns_34446 = cljs.core._nth.call(null,chunk__34439_34443,i__34441_34445);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34446);


var G__34447 = seq__34438_34442;
var G__34448 = chunk__34439_34443;
var G__34449 = count__34440_34444;
var G__34450 = (i__34441_34445 + (1));
seq__34438_34442 = G__34447;
chunk__34439_34443 = G__34448;
count__34440_34444 = G__34449;
i__34441_34445 = G__34450;
continue;
} else {
var temp__5457__auto___34451 = cljs.core.seq.call(null,seq__34438_34442);
if(temp__5457__auto___34451){
var seq__34438_34452__$1 = temp__5457__auto___34451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34438_34452__$1)){
var c__4319__auto___34453 = cljs.core.chunk_first.call(null,seq__34438_34452__$1);
var G__34454 = cljs.core.chunk_rest.call(null,seq__34438_34452__$1);
var G__34455 = c__4319__auto___34453;
var G__34456 = cljs.core.count.call(null,c__4319__auto___34453);
var G__34457 = (0);
seq__34438_34442 = G__34454;
chunk__34439_34443 = G__34455;
count__34440_34444 = G__34456;
i__34441_34445 = G__34457;
continue;
} else {
var ns_34458 = cljs.core.first.call(null,seq__34438_34452__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34458);


var G__34459 = cljs.core.next.call(null,seq__34438_34452__$1);
var G__34460 = null;
var G__34461 = (0);
var G__34462 = (0);
seq__34438_34442 = G__34459;
chunk__34439_34443 = G__34460;
count__34440_34444 = G__34461;
i__34441_34445 = G__34462;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34463__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34464__i = 0, G__34464__a = new Array(arguments.length -  0);
while (G__34464__i < G__34464__a.length) {G__34464__a[G__34464__i] = arguments[G__34464__i + 0]; ++G__34464__i;}
  args = new cljs.core.IndexedSeq(G__34464__a,0,null);
} 
return G__34463__delegate.call(this,args);};
G__34463.cljs$lang$maxFixedArity = 0;
G__34463.cljs$lang$applyTo = (function (arglist__34465){
var args = cljs.core.seq(arglist__34465);
return G__34463__delegate(args);
});
G__34463.cljs$core$IFn$_invoke$arity$variadic = G__34463__delegate;
return G__34463;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34466_SHARP_,p2__34467_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34466_SHARP_)].join('')),p2__34467_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34468_SHARP_,p2__34469_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34468_SHARP_)].join(''),p2__34469_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34470 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34470.addCallback(((function (G__34470){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34470))
);

G__34470.addErrback(((function (G__34470){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34470))
);

return G__34470;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34471){if((e34471 instanceof Error)){
var e = e34471;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34471;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34472){if((e34472 instanceof Error)){
var e = e34472;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34472;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34473 = cljs.core._EQ_;
var expr__34474 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34473.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34474))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34473.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34474))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34473.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34474))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34473,expr__34474){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34473,expr__34474))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34476,callback){
var map__34477 = p__34476;
var map__34477__$1 = ((((!((map__34477 == null)))?(((((map__34477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34477):map__34477);
var file_msg = map__34477__$1;
var request_url = cljs.core.get.call(null,map__34477__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34477,map__34477__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34477,map__34477__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto__){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto__){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34517_34543 = state_34515__$1;
(statearr_34517_34543[(2)] = inst_34511);

(statearr_34517_34543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34518_34544 = state_34515__$1;
(statearr_34518_34544[(2)] = null);

(statearr_34518_34544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (4))){
var inst_34481 = (state_34515[(7)]);
var inst_34481__$1 = (state_34515[(2)]);
var state_34515__$1 = (function (){var statearr_34519 = state_34515;
(statearr_34519[(7)] = inst_34481__$1);

return statearr_34519;
})();
if(cljs.core.truth_(inst_34481__$1)){
var statearr_34520_34545 = state_34515__$1;
(statearr_34520_34545[(1)] = (5));

} else {
var statearr_34521_34546 = state_34515__$1;
(statearr_34521_34546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (15))){
var inst_34494 = (state_34515[(8)]);
var inst_34496 = (state_34515[(9)]);
var inst_34498 = inst_34496.call(null,inst_34494);
var state_34515__$1 = state_34515;
var statearr_34522_34547 = state_34515__$1;
(statearr_34522_34547[(2)] = inst_34498);

(statearr_34522_34547[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (13))){
var inst_34505 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34523_34548 = state_34515__$1;
(statearr_34523_34548[(2)] = inst_34505);

(statearr_34523_34548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34524_34549 = state_34515__$1;
(statearr_34524_34549[(2)] = null);

(statearr_34524_34549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (17))){
var inst_34502 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34525_34550 = state_34515__$1;
(statearr_34525_34550[(2)] = inst_34502);

(statearr_34525_34550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (3))){
var inst_34513 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34515__$1,inst_34513);
} else {
if((state_val_34516 === (12))){
var state_34515__$1 = state_34515;
var statearr_34526_34551 = state_34515__$1;
(statearr_34526_34551[(2)] = null);

(statearr_34526_34551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (2))){
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34515__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34516 === (11))){
var inst_34486 = (state_34515[(10)]);
var inst_34492 = figwheel.client.file_reloading.blocking_load.call(null,inst_34486);
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34515__$1,(14),inst_34492);
} else {
if((state_val_34516 === (9))){
var inst_34486 = (state_34515[(10)]);
var state_34515__$1 = state_34515;
if(cljs.core.truth_(inst_34486)){
var statearr_34527_34552 = state_34515__$1;
(statearr_34527_34552[(1)] = (11));

} else {
var statearr_34528_34553 = state_34515__$1;
(statearr_34528_34553[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var inst_34481 = (state_34515[(7)]);
var inst_34487 = (state_34515[(11)]);
var inst_34486 = cljs.core.nth.call(null,inst_34481,(0),null);
var inst_34487__$1 = cljs.core.nth.call(null,inst_34481,(1),null);
var state_34515__$1 = (function (){var statearr_34529 = state_34515;
(statearr_34529[(10)] = inst_34486);

(statearr_34529[(11)] = inst_34487__$1);

return statearr_34529;
})();
if(cljs.core.truth_(inst_34487__$1)){
var statearr_34530_34554 = state_34515__$1;
(statearr_34530_34554[(1)] = (8));

} else {
var statearr_34531_34555 = state_34515__$1;
(statearr_34531_34555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (14))){
var inst_34496 = (state_34515[(9)]);
var inst_34486 = (state_34515[(10)]);
var inst_34494 = (state_34515[(2)]);
var inst_34495 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34496__$1 = cljs.core.get.call(null,inst_34495,inst_34486);
var state_34515__$1 = (function (){var statearr_34532 = state_34515;
(statearr_34532[(8)] = inst_34494);

(statearr_34532[(9)] = inst_34496__$1);

return statearr_34532;
})();
if(cljs.core.truth_(inst_34496__$1)){
var statearr_34533_34556 = state_34515__$1;
(statearr_34533_34556[(1)] = (15));

} else {
var statearr_34534_34557 = state_34515__$1;
(statearr_34534_34557[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (16))){
var inst_34494 = (state_34515[(8)]);
var inst_34500 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34494);
var state_34515__$1 = state_34515;
var statearr_34535_34558 = state_34515__$1;
(statearr_34535_34558[(2)] = inst_34500);

(statearr_34535_34558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (10))){
var inst_34507 = (state_34515[(2)]);
var state_34515__$1 = (function (){var statearr_34536 = state_34515;
(statearr_34536[(12)] = inst_34507);

return statearr_34536;
})();
var statearr_34537_34559 = state_34515__$1;
(statearr_34537_34559[(2)] = null);

(statearr_34537_34559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (8))){
var inst_34487 = (state_34515[(11)]);
var inst_34489 = eval(inst_34487);
var state_34515__$1 = state_34515;
var statearr_34538_34560 = state_34515__$1;
(statearr_34538_34560[(2)] = inst_34489);

(statearr_34538_34560[(1)] = (10));


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
});})(c__29560__auto__))
;
return ((function (switch__29403__auto__,c__29560__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29404__auto__ = null;
var figwheel$client$file_reloading$state_machine__29404__auto____0 = (function (){
var statearr_34539 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34539[(0)] = figwheel$client$file_reloading$state_machine__29404__auto__);

(statearr_34539[(1)] = (1));

return statearr_34539;
});
var figwheel$client$file_reloading$state_machine__29404__auto____1 = (function (state_34515){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_34515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e34540){if((e34540 instanceof Object)){
var ex__29407__auto__ = e34540;
var statearr_34541_34561 = state_34515;
(statearr_34541_34561[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34562 = state_34515;
state_34515 = G__34562;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29404__auto__ = function(state_34515){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29404__auto____1.call(this,state_34515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29404__auto____0;
figwheel$client$file_reloading$state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29404__auto____1;
return figwheel$client$file_reloading$state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto__))
})();
var state__29562__auto__ = (function (){var statearr_34542 = f__29561__auto__.call(null);
(statearr_34542[(6)] = c__29560__auto__);

return statearr_34542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto__))
);

return c__29560__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__34564 = arguments.length;
switch (G__34564) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34566,callback){
var map__34567 = p__34566;
var map__34567__$1 = ((((!((map__34567 == null)))?(((((map__34567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34567):map__34567);
var file_msg = map__34567__$1;
var namespace = cljs.core.get.call(null,map__34567__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34567,map__34567__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34567,map__34567__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34569){
var map__34570 = p__34569;
var map__34570__$1 = ((((!((map__34570 == null)))?(((((map__34570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34570):map__34570);
var file_msg = map__34570__$1;
var namespace = cljs.core.get.call(null,map__34570__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34572){
var map__34573 = p__34572;
var map__34573__$1 = ((((!((map__34573 == null)))?(((((map__34573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34573):map__34573);
var file_msg = map__34573__$1;
var namespace = cljs.core.get.call(null,map__34573__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34575,callback){
var map__34576 = p__34575;
var map__34576__$1 = ((((!((map__34576 == null)))?(((((map__34576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34576):map__34576);
var file_msg = map__34576__$1;
var request_url = cljs.core.get.call(null,map__34576__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29560__auto___34626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto___34626,out){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto___34626,out){
return (function (state_34611){
var state_val_34612 = (state_34611[(1)]);
if((state_val_34612 === (1))){
var inst_34585 = cljs.core.seq.call(null,files);
var inst_34586 = cljs.core.first.call(null,inst_34585);
var inst_34587 = cljs.core.next.call(null,inst_34585);
var inst_34588 = files;
var state_34611__$1 = (function (){var statearr_34613 = state_34611;
(statearr_34613[(7)] = inst_34588);

(statearr_34613[(8)] = inst_34586);

(statearr_34613[(9)] = inst_34587);

return statearr_34613;
})();
var statearr_34614_34627 = state_34611__$1;
(statearr_34614_34627[(2)] = null);

(statearr_34614_34627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (2))){
var inst_34588 = (state_34611[(7)]);
var inst_34594 = (state_34611[(10)]);
var inst_34593 = cljs.core.seq.call(null,inst_34588);
var inst_34594__$1 = cljs.core.first.call(null,inst_34593);
var inst_34595 = cljs.core.next.call(null,inst_34593);
var inst_34596 = (inst_34594__$1 == null);
var inst_34597 = cljs.core.not.call(null,inst_34596);
var state_34611__$1 = (function (){var statearr_34615 = state_34611;
(statearr_34615[(11)] = inst_34595);

(statearr_34615[(10)] = inst_34594__$1);

return statearr_34615;
})();
if(inst_34597){
var statearr_34616_34628 = state_34611__$1;
(statearr_34616_34628[(1)] = (4));

} else {
var statearr_34617_34629 = state_34611__$1;
(statearr_34617_34629[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (3))){
var inst_34609 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34611__$1,inst_34609);
} else {
if((state_val_34612 === (4))){
var inst_34594 = (state_34611[(10)]);
var inst_34599 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34594);
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34611__$1,(7),inst_34599);
} else {
if((state_val_34612 === (5))){
var inst_34605 = cljs.core.async.close_BANG_.call(null,out);
var state_34611__$1 = state_34611;
var statearr_34618_34630 = state_34611__$1;
(statearr_34618_34630[(2)] = inst_34605);

(statearr_34618_34630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (6))){
var inst_34607 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34619_34631 = state_34611__$1;
(statearr_34619_34631[(2)] = inst_34607);

(statearr_34619_34631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (7))){
var inst_34595 = (state_34611[(11)]);
var inst_34601 = (state_34611[(2)]);
var inst_34602 = cljs.core.async.put_BANG_.call(null,out,inst_34601);
var inst_34588 = inst_34595;
var state_34611__$1 = (function (){var statearr_34620 = state_34611;
(statearr_34620[(7)] = inst_34588);

(statearr_34620[(12)] = inst_34602);

return statearr_34620;
})();
var statearr_34621_34632 = state_34611__$1;
(statearr_34621_34632[(2)] = null);

(statearr_34621_34632[(1)] = (2));


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
});})(c__29560__auto___34626,out))
;
return ((function (switch__29403__auto__,c__29560__auto___34626,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____0 = (function (){
var statearr_34622 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34622[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__);

(statearr_34622[(1)] = (1));

return statearr_34622;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____1 = (function (state_34611){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_34611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e34623){if((e34623 instanceof Object)){
var ex__29407__auto__ = e34623;
var statearr_34624_34633 = state_34611;
(statearr_34624_34633[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34634 = state_34611;
state_34611 = G__34634;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__ = function(state_34611){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____1.call(this,state_34611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto___34626,out))
})();
var state__29562__auto__ = (function (){var statearr_34625 = f__29561__auto__.call(null);
(statearr_34625[(6)] = c__29560__auto___34626);

return statearr_34625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto___34626,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34635,opts){
var map__34636 = p__34635;
var map__34636__$1 = ((((!((map__34636 == null)))?(((((map__34636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34636):map__34636);
var eval_body = cljs.core.get.call(null,map__34636__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34636__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34638){var e = e34638;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34639_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34639_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34640){
var vec__34641 = p__34640;
var k = cljs.core.nth.call(null,vec__34641,(0),null);
var v = cljs.core.nth.call(null,vec__34641,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34644){
var vec__34645 = p__34644;
var k = cljs.core.nth.call(null,vec__34645,(0),null);
var v = cljs.core.nth.call(null,vec__34645,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34651,p__34652){
var map__34653 = p__34651;
var map__34653__$1 = ((((!((map__34653 == null)))?(((((map__34653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34653):map__34653);
var opts = map__34653__$1;
var before_jsload = cljs.core.get.call(null,map__34653__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34653__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34653__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34654 = p__34652;
var map__34654__$1 = ((((!((map__34654 == null)))?(((((map__34654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34654):map__34654);
var msg = map__34654__$1;
var files = cljs.core.get.call(null,map__34654__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34654__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34654__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29560__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29561__auto__ = (function (){var switch__29403__auto__ = ((function (c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34808){
var state_val_34809 = (state_34808[(1)]);
if((state_val_34809 === (7))){
var inst_34671 = (state_34808[(7)]);
var inst_34668 = (state_34808[(8)]);
var inst_34669 = (state_34808[(9)]);
var inst_34670 = (state_34808[(10)]);
var inst_34676 = cljs.core._nth.call(null,inst_34669,inst_34671);
var inst_34677 = figwheel.client.file_reloading.eval_body.call(null,inst_34676,opts);
var inst_34678 = (inst_34671 + (1));
var tmp34810 = inst_34668;
var tmp34811 = inst_34669;
var tmp34812 = inst_34670;
var inst_34668__$1 = tmp34810;
var inst_34669__$1 = tmp34811;
var inst_34670__$1 = tmp34812;
var inst_34671__$1 = inst_34678;
var state_34808__$1 = (function (){var statearr_34813 = state_34808;
(statearr_34813[(11)] = inst_34677);

(statearr_34813[(7)] = inst_34671__$1);

(statearr_34813[(8)] = inst_34668__$1);

(statearr_34813[(9)] = inst_34669__$1);

(statearr_34813[(10)] = inst_34670__$1);

return statearr_34813;
})();
var statearr_34814_34897 = state_34808__$1;
(statearr_34814_34897[(2)] = null);

(statearr_34814_34897[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (20))){
var inst_34711 = (state_34808[(12)]);
var inst_34719 = figwheel.client.file_reloading.sort_files.call(null,inst_34711);
var state_34808__$1 = state_34808;
var statearr_34815_34898 = state_34808__$1;
(statearr_34815_34898[(2)] = inst_34719);

(statearr_34815_34898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (27))){
var state_34808__$1 = state_34808;
var statearr_34816_34899 = state_34808__$1;
(statearr_34816_34899[(2)] = null);

(statearr_34816_34899[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (1))){
var inst_34660 = (state_34808[(13)]);
var inst_34657 = before_jsload.call(null,files);
var inst_34658 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34659 = (function (){return ((function (inst_34660,inst_34657,inst_34658,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34648_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34648_SHARP_);
});
;})(inst_34660,inst_34657,inst_34658,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34660__$1 = cljs.core.filter.call(null,inst_34659,files);
var inst_34661 = cljs.core.not_empty.call(null,inst_34660__$1);
var state_34808__$1 = (function (){var statearr_34817 = state_34808;
(statearr_34817[(14)] = inst_34657);

(statearr_34817[(15)] = inst_34658);

(statearr_34817[(13)] = inst_34660__$1);

return statearr_34817;
})();
if(cljs.core.truth_(inst_34661)){
var statearr_34818_34900 = state_34808__$1;
(statearr_34818_34900[(1)] = (2));

} else {
var statearr_34819_34901 = state_34808__$1;
(statearr_34819_34901[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (24))){
var state_34808__$1 = state_34808;
var statearr_34820_34902 = state_34808__$1;
(statearr_34820_34902[(2)] = null);

(statearr_34820_34902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (39))){
var inst_34761 = (state_34808[(16)]);
var state_34808__$1 = state_34808;
var statearr_34821_34903 = state_34808__$1;
(statearr_34821_34903[(2)] = inst_34761);

(statearr_34821_34903[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (46))){
var inst_34803 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34822_34904 = state_34808__$1;
(statearr_34822_34904[(2)] = inst_34803);

(statearr_34822_34904[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (4))){
var inst_34705 = (state_34808[(2)]);
var inst_34706 = cljs.core.List.EMPTY;
var inst_34707 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34706);
var inst_34708 = (function (){return ((function (inst_34705,inst_34706,inst_34707,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34649_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34649_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34649_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34649_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_34705,inst_34706,inst_34707,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34709 = cljs.core.filter.call(null,inst_34708,files);
var inst_34710 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34711 = cljs.core.concat.call(null,inst_34709,inst_34710);
var state_34808__$1 = (function (){var statearr_34823 = state_34808;
(statearr_34823[(12)] = inst_34711);

(statearr_34823[(17)] = inst_34707);

(statearr_34823[(18)] = inst_34705);

return statearr_34823;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34824_34905 = state_34808__$1;
(statearr_34824_34905[(1)] = (16));

} else {
var statearr_34825_34906 = state_34808__$1;
(statearr_34825_34906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (15))){
var inst_34695 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34826_34907 = state_34808__$1;
(statearr_34826_34907[(2)] = inst_34695);

(statearr_34826_34907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (21))){
var inst_34721 = (state_34808[(19)]);
var inst_34721__$1 = (state_34808[(2)]);
var inst_34722 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34721__$1);
var state_34808__$1 = (function (){var statearr_34827 = state_34808;
(statearr_34827[(19)] = inst_34721__$1);

return statearr_34827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34808__$1,(22),inst_34722);
} else {
if((state_val_34809 === (31))){
var inst_34806 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34808__$1,inst_34806);
} else {
if((state_val_34809 === (32))){
var inst_34761 = (state_34808[(16)]);
var inst_34766 = inst_34761.cljs$lang$protocol_mask$partition0$;
var inst_34767 = (inst_34766 & (64));
var inst_34768 = inst_34761.cljs$core$ISeq$;
var inst_34769 = (cljs.core.PROTOCOL_SENTINEL === inst_34768);
var inst_34770 = ((inst_34767) || (inst_34769));
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34770)){
var statearr_34828_34908 = state_34808__$1;
(statearr_34828_34908[(1)] = (35));

} else {
var statearr_34829_34909 = state_34808__$1;
(statearr_34829_34909[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (40))){
var inst_34783 = (state_34808[(20)]);
var inst_34782 = (state_34808[(2)]);
var inst_34783__$1 = cljs.core.get.call(null,inst_34782,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34784 = cljs.core.get.call(null,inst_34782,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34785 = cljs.core.not_empty.call(null,inst_34783__$1);
var state_34808__$1 = (function (){var statearr_34830 = state_34808;
(statearr_34830[(21)] = inst_34784);

(statearr_34830[(20)] = inst_34783__$1);

return statearr_34830;
})();
if(cljs.core.truth_(inst_34785)){
var statearr_34831_34910 = state_34808__$1;
(statearr_34831_34910[(1)] = (41));

} else {
var statearr_34832_34911 = state_34808__$1;
(statearr_34832_34911[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (33))){
var state_34808__$1 = state_34808;
var statearr_34833_34912 = state_34808__$1;
(statearr_34833_34912[(2)] = false);

(statearr_34833_34912[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (13))){
var inst_34681 = (state_34808[(22)]);
var inst_34685 = cljs.core.chunk_first.call(null,inst_34681);
var inst_34686 = cljs.core.chunk_rest.call(null,inst_34681);
var inst_34687 = cljs.core.count.call(null,inst_34685);
var inst_34668 = inst_34686;
var inst_34669 = inst_34685;
var inst_34670 = inst_34687;
var inst_34671 = (0);
var state_34808__$1 = (function (){var statearr_34834 = state_34808;
(statearr_34834[(7)] = inst_34671);

(statearr_34834[(8)] = inst_34668);

(statearr_34834[(9)] = inst_34669);

(statearr_34834[(10)] = inst_34670);

return statearr_34834;
})();
var statearr_34835_34913 = state_34808__$1;
(statearr_34835_34913[(2)] = null);

(statearr_34835_34913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (22))){
var inst_34725 = (state_34808[(23)]);
var inst_34724 = (state_34808[(24)]);
var inst_34721 = (state_34808[(19)]);
var inst_34729 = (state_34808[(25)]);
var inst_34724__$1 = (state_34808[(2)]);
var inst_34725__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34724__$1);
var inst_34726 = (function (){var all_files = inst_34721;
var res_SINGLEQUOTE_ = inst_34724__$1;
var res = inst_34725__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34725,inst_34724,inst_34721,inst_34729,inst_34724__$1,inst_34725__$1,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34650_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34650_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34725,inst_34724,inst_34721,inst_34729,inst_34724__$1,inst_34725__$1,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34727 = cljs.core.filter.call(null,inst_34726,inst_34724__$1);
var inst_34728 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34729__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34728);
var inst_34730 = cljs.core.not_empty.call(null,inst_34729__$1);
var state_34808__$1 = (function (){var statearr_34836 = state_34808;
(statearr_34836[(26)] = inst_34727);

(statearr_34836[(23)] = inst_34725__$1);

(statearr_34836[(24)] = inst_34724__$1);

(statearr_34836[(25)] = inst_34729__$1);

return statearr_34836;
})();
if(cljs.core.truth_(inst_34730)){
var statearr_34837_34914 = state_34808__$1;
(statearr_34837_34914[(1)] = (23));

} else {
var statearr_34838_34915 = state_34808__$1;
(statearr_34838_34915[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (36))){
var state_34808__$1 = state_34808;
var statearr_34839_34916 = state_34808__$1;
(statearr_34839_34916[(2)] = false);

(statearr_34839_34916[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (41))){
var inst_34783 = (state_34808[(20)]);
var inst_34787 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34788 = cljs.core.map.call(null,inst_34787,inst_34783);
var inst_34789 = cljs.core.pr_str.call(null,inst_34788);
var inst_34790 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34789)].join('');
var inst_34791 = figwheel.client.utils.log.call(null,inst_34790);
var state_34808__$1 = state_34808;
var statearr_34840_34917 = state_34808__$1;
(statearr_34840_34917[(2)] = inst_34791);

(statearr_34840_34917[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (43))){
var inst_34784 = (state_34808[(21)]);
var inst_34794 = (state_34808[(2)]);
var inst_34795 = cljs.core.not_empty.call(null,inst_34784);
var state_34808__$1 = (function (){var statearr_34841 = state_34808;
(statearr_34841[(27)] = inst_34794);

return statearr_34841;
})();
if(cljs.core.truth_(inst_34795)){
var statearr_34842_34918 = state_34808__$1;
(statearr_34842_34918[(1)] = (44));

} else {
var statearr_34843_34919 = state_34808__$1;
(statearr_34843_34919[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (29))){
var inst_34727 = (state_34808[(26)]);
var inst_34725 = (state_34808[(23)]);
var inst_34724 = (state_34808[(24)]);
var inst_34721 = (state_34808[(19)]);
var inst_34761 = (state_34808[(16)]);
var inst_34729 = (state_34808[(25)]);
var inst_34757 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34760 = (function (){var all_files = inst_34721;
var res_SINGLEQUOTE_ = inst_34724;
var res = inst_34725;
var files_not_loaded = inst_34727;
var dependencies_that_loaded = inst_34729;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34727,inst_34725,inst_34724,inst_34721,inst_34761,inst_34729,inst_34757,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34759){
var map__34844 = p__34759;
var map__34844__$1 = ((((!((map__34844 == null)))?(((((map__34844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34844):map__34844);
var namespace = cljs.core.get.call(null,map__34844__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34727,inst_34725,inst_34724,inst_34721,inst_34761,inst_34729,inst_34757,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34761__$1 = cljs.core.group_by.call(null,inst_34760,inst_34727);
var inst_34763 = (inst_34761__$1 == null);
var inst_34764 = cljs.core.not.call(null,inst_34763);
var state_34808__$1 = (function (){var statearr_34846 = state_34808;
(statearr_34846[(16)] = inst_34761__$1);

(statearr_34846[(28)] = inst_34757);

return statearr_34846;
})();
if(inst_34764){
var statearr_34847_34920 = state_34808__$1;
(statearr_34847_34920[(1)] = (32));

} else {
var statearr_34848_34921 = state_34808__$1;
(statearr_34848_34921[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (44))){
var inst_34784 = (state_34808[(21)]);
var inst_34797 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34784);
var inst_34798 = cljs.core.pr_str.call(null,inst_34797);
var inst_34799 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34798)].join('');
var inst_34800 = figwheel.client.utils.log.call(null,inst_34799);
var state_34808__$1 = state_34808;
var statearr_34849_34922 = state_34808__$1;
(statearr_34849_34922[(2)] = inst_34800);

(statearr_34849_34922[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (6))){
var inst_34702 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34850_34923 = state_34808__$1;
(statearr_34850_34923[(2)] = inst_34702);

(statearr_34850_34923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (28))){
var inst_34727 = (state_34808[(26)]);
var inst_34754 = (state_34808[(2)]);
var inst_34755 = cljs.core.not_empty.call(null,inst_34727);
var state_34808__$1 = (function (){var statearr_34851 = state_34808;
(statearr_34851[(29)] = inst_34754);

return statearr_34851;
})();
if(cljs.core.truth_(inst_34755)){
var statearr_34852_34924 = state_34808__$1;
(statearr_34852_34924[(1)] = (29));

} else {
var statearr_34853_34925 = state_34808__$1;
(statearr_34853_34925[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (25))){
var inst_34725 = (state_34808[(23)]);
var inst_34741 = (state_34808[(2)]);
var inst_34742 = cljs.core.not_empty.call(null,inst_34725);
var state_34808__$1 = (function (){var statearr_34854 = state_34808;
(statearr_34854[(30)] = inst_34741);

return statearr_34854;
})();
if(cljs.core.truth_(inst_34742)){
var statearr_34855_34926 = state_34808__$1;
(statearr_34855_34926[(1)] = (26));

} else {
var statearr_34856_34927 = state_34808__$1;
(statearr_34856_34927[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (34))){
var inst_34777 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34777)){
var statearr_34857_34928 = state_34808__$1;
(statearr_34857_34928[(1)] = (38));

} else {
var statearr_34858_34929 = state_34808__$1;
(statearr_34858_34929[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (17))){
var state_34808__$1 = state_34808;
var statearr_34859_34930 = state_34808__$1;
(statearr_34859_34930[(2)] = recompile_dependents);

(statearr_34859_34930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (3))){
var state_34808__$1 = state_34808;
var statearr_34860_34931 = state_34808__$1;
(statearr_34860_34931[(2)] = null);

(statearr_34860_34931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (12))){
var inst_34698 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34861_34932 = state_34808__$1;
(statearr_34861_34932[(2)] = inst_34698);

(statearr_34861_34932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (2))){
var inst_34660 = (state_34808[(13)]);
var inst_34667 = cljs.core.seq.call(null,inst_34660);
var inst_34668 = inst_34667;
var inst_34669 = null;
var inst_34670 = (0);
var inst_34671 = (0);
var state_34808__$1 = (function (){var statearr_34862 = state_34808;
(statearr_34862[(7)] = inst_34671);

(statearr_34862[(8)] = inst_34668);

(statearr_34862[(9)] = inst_34669);

(statearr_34862[(10)] = inst_34670);

return statearr_34862;
})();
var statearr_34863_34933 = state_34808__$1;
(statearr_34863_34933[(2)] = null);

(statearr_34863_34933[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (23))){
var inst_34727 = (state_34808[(26)]);
var inst_34725 = (state_34808[(23)]);
var inst_34724 = (state_34808[(24)]);
var inst_34721 = (state_34808[(19)]);
var inst_34729 = (state_34808[(25)]);
var inst_34732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34734 = (function (){var all_files = inst_34721;
var res_SINGLEQUOTE_ = inst_34724;
var res = inst_34725;
var files_not_loaded = inst_34727;
var dependencies_that_loaded = inst_34729;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34727,inst_34725,inst_34724,inst_34721,inst_34729,inst_34732,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34733){
var map__34864 = p__34733;
var map__34864__$1 = ((((!((map__34864 == null)))?(((((map__34864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34864):map__34864);
var request_url = cljs.core.get.call(null,map__34864__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34727,inst_34725,inst_34724,inst_34721,inst_34729,inst_34732,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34735 = cljs.core.reverse.call(null,inst_34729);
var inst_34736 = cljs.core.map.call(null,inst_34734,inst_34735);
var inst_34737 = cljs.core.pr_str.call(null,inst_34736);
var inst_34738 = figwheel.client.utils.log.call(null,inst_34737);
var state_34808__$1 = (function (){var statearr_34866 = state_34808;
(statearr_34866[(31)] = inst_34732);

return statearr_34866;
})();
var statearr_34867_34934 = state_34808__$1;
(statearr_34867_34934[(2)] = inst_34738);

(statearr_34867_34934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (35))){
var state_34808__$1 = state_34808;
var statearr_34868_34935 = state_34808__$1;
(statearr_34868_34935[(2)] = true);

(statearr_34868_34935[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (19))){
var inst_34711 = (state_34808[(12)]);
var inst_34717 = figwheel.client.file_reloading.expand_files.call(null,inst_34711);
var state_34808__$1 = state_34808;
var statearr_34869_34936 = state_34808__$1;
(statearr_34869_34936[(2)] = inst_34717);

(statearr_34869_34936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (11))){
var state_34808__$1 = state_34808;
var statearr_34870_34937 = state_34808__$1;
(statearr_34870_34937[(2)] = null);

(statearr_34870_34937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (9))){
var inst_34700 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34871_34938 = state_34808__$1;
(statearr_34871_34938[(2)] = inst_34700);

(statearr_34871_34938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (5))){
var inst_34671 = (state_34808[(7)]);
var inst_34670 = (state_34808[(10)]);
var inst_34673 = (inst_34671 < inst_34670);
var inst_34674 = inst_34673;
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34674)){
var statearr_34872_34939 = state_34808__$1;
(statearr_34872_34939[(1)] = (7));

} else {
var statearr_34873_34940 = state_34808__$1;
(statearr_34873_34940[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (14))){
var inst_34681 = (state_34808[(22)]);
var inst_34690 = cljs.core.first.call(null,inst_34681);
var inst_34691 = figwheel.client.file_reloading.eval_body.call(null,inst_34690,opts);
var inst_34692 = cljs.core.next.call(null,inst_34681);
var inst_34668 = inst_34692;
var inst_34669 = null;
var inst_34670 = (0);
var inst_34671 = (0);
var state_34808__$1 = (function (){var statearr_34874 = state_34808;
(statearr_34874[(7)] = inst_34671);

(statearr_34874[(8)] = inst_34668);

(statearr_34874[(9)] = inst_34669);

(statearr_34874[(32)] = inst_34691);

(statearr_34874[(10)] = inst_34670);

return statearr_34874;
})();
var statearr_34875_34941 = state_34808__$1;
(statearr_34875_34941[(2)] = null);

(statearr_34875_34941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (45))){
var state_34808__$1 = state_34808;
var statearr_34876_34942 = state_34808__$1;
(statearr_34876_34942[(2)] = null);

(statearr_34876_34942[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (26))){
var inst_34727 = (state_34808[(26)]);
var inst_34725 = (state_34808[(23)]);
var inst_34724 = (state_34808[(24)]);
var inst_34721 = (state_34808[(19)]);
var inst_34729 = (state_34808[(25)]);
var inst_34744 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34746 = (function (){var all_files = inst_34721;
var res_SINGLEQUOTE_ = inst_34724;
var res = inst_34725;
var files_not_loaded = inst_34727;
var dependencies_that_loaded = inst_34729;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34727,inst_34725,inst_34724,inst_34721,inst_34729,inst_34744,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34745){
var map__34877 = p__34745;
var map__34877__$1 = ((((!((map__34877 == null)))?(((((map__34877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34877):map__34877);
var namespace = cljs.core.get.call(null,map__34877__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34877__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34727,inst_34725,inst_34724,inst_34721,inst_34729,inst_34744,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34747 = cljs.core.map.call(null,inst_34746,inst_34725);
var inst_34748 = cljs.core.pr_str.call(null,inst_34747);
var inst_34749 = figwheel.client.utils.log.call(null,inst_34748);
var inst_34750 = (function (){var all_files = inst_34721;
var res_SINGLEQUOTE_ = inst_34724;
var res = inst_34725;
var files_not_loaded = inst_34727;
var dependencies_that_loaded = inst_34729;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34727,inst_34725,inst_34724,inst_34721,inst_34729,inst_34744,inst_34746,inst_34747,inst_34748,inst_34749,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34727,inst_34725,inst_34724,inst_34721,inst_34729,inst_34744,inst_34746,inst_34747,inst_34748,inst_34749,state_val_34809,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34751 = setTimeout(inst_34750,(10));
var state_34808__$1 = (function (){var statearr_34879 = state_34808;
(statearr_34879[(33)] = inst_34744);

(statearr_34879[(34)] = inst_34749);

return statearr_34879;
})();
var statearr_34880_34943 = state_34808__$1;
(statearr_34880_34943[(2)] = inst_34751);

(statearr_34880_34943[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (16))){
var state_34808__$1 = state_34808;
var statearr_34881_34944 = state_34808__$1;
(statearr_34881_34944[(2)] = reload_dependents);

(statearr_34881_34944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (38))){
var inst_34761 = (state_34808[(16)]);
var inst_34779 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34761);
var state_34808__$1 = state_34808;
var statearr_34882_34945 = state_34808__$1;
(statearr_34882_34945[(2)] = inst_34779);

(statearr_34882_34945[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (30))){
var state_34808__$1 = state_34808;
var statearr_34883_34946 = state_34808__$1;
(statearr_34883_34946[(2)] = null);

(statearr_34883_34946[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (10))){
var inst_34681 = (state_34808[(22)]);
var inst_34683 = cljs.core.chunked_seq_QMARK_.call(null,inst_34681);
var state_34808__$1 = state_34808;
if(inst_34683){
var statearr_34884_34947 = state_34808__$1;
(statearr_34884_34947[(1)] = (13));

} else {
var statearr_34885_34948 = state_34808__$1;
(statearr_34885_34948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (18))){
var inst_34715 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34715)){
var statearr_34886_34949 = state_34808__$1;
(statearr_34886_34949[(1)] = (19));

} else {
var statearr_34887_34950 = state_34808__$1;
(statearr_34887_34950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (42))){
var state_34808__$1 = state_34808;
var statearr_34888_34951 = state_34808__$1;
(statearr_34888_34951[(2)] = null);

(statearr_34888_34951[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (37))){
var inst_34774 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34889_34952 = state_34808__$1;
(statearr_34889_34952[(2)] = inst_34774);

(statearr_34889_34952[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (8))){
var inst_34681 = (state_34808[(22)]);
var inst_34668 = (state_34808[(8)]);
var inst_34681__$1 = cljs.core.seq.call(null,inst_34668);
var state_34808__$1 = (function (){var statearr_34890 = state_34808;
(statearr_34890[(22)] = inst_34681__$1);

return statearr_34890;
})();
if(inst_34681__$1){
var statearr_34891_34953 = state_34808__$1;
(statearr_34891_34953[(1)] = (10));

} else {
var statearr_34892_34954 = state_34808__$1;
(statearr_34892_34954[(1)] = (11));

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
}
});})(c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29403__auto__,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____0 = (function (){
var statearr_34893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34893[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__);

(statearr_34893[(1)] = (1));

return statearr_34893;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____1 = (function (state_34808){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_34808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e34894){if((e34894 instanceof Object)){
var ex__29407__auto__ = e34894;
var statearr_34895_34955 = state_34808;
(statearr_34895_34955[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34956 = state_34808;
state_34808 = G__34956;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__ = function(state_34808){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____1.call(this,state_34808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29562__auto__ = (function (){var statearr_34896 = f__29561__auto__.call(null);
(statearr_34896[(6)] = c__29560__auto__);

return statearr_34896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29562__auto__);
});})(c__29560__auto__,map__34653,map__34653__$1,opts,before_jsload,on_jsload,reload_dependents,map__34654,map__34654__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29560__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34959,link){
var map__34960 = p__34959;
var map__34960__$1 = ((((!((map__34960 == null)))?(((((map__34960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34960):map__34960);
var file = cljs.core.get.call(null,map__34960__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__34960,map__34960__$1,file){
return (function (p1__34957_SHARP_,p2__34958_SHARP_){
if(cljs.core._EQ_.call(null,p1__34957_SHARP_,p2__34958_SHARP_)){
return p1__34957_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__34960,map__34960__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34963){
var map__34964 = p__34963;
var map__34964__$1 = ((((!((map__34964 == null)))?(((((map__34964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34964):map__34964);
var match_length = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34962_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34962_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34966_SHARP_,p2__34967_SHARP_){
return cljs.core.assoc.call(null,p1__34966_SHARP_,cljs.core.get.call(null,p2__34967_SHARP_,key),p2__34967_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34968 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34968);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34968);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34969,p__34970){
var map__34971 = p__34969;
var map__34971__$1 = ((((!((map__34971 == null)))?(((((map__34971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34971):map__34971);
var on_cssload = cljs.core.get.call(null,map__34971__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34972 = p__34970;
var map__34972__$1 = ((((!((map__34972 == null)))?(((((map__34972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34972):map__34972);
var files_msg = map__34972__$1;
var files = cljs.core.get.call(null,map__34972__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1545496986674
