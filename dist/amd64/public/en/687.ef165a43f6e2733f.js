"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[687],{6687:(k,m,n)=>{n.r(m),n.d(m,{PersistentVolumeClaimModule:()=>j});var p=n(1028),c=n(6042),a=n(4793),R=n(3621),T=n(3456),N=n(6275),I=n(6758),O=n(2722),E=n(1495),M=n(5387),C=n(7575),A=n(5467),f=n(6048),v=n(8053),e=n(4650),P=n(958),g=n(7347),L=n(6895),u=n(1576),U=n(7623),V=n(1677);function D(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",8),e.\u0275\u0275i18n(2,9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",10),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.persistentVolumeClaim.status)}}function G(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",8),e.\u0275\u0275i18n(2,11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",10),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.persistentVolumeClaim.storageClass)}}function y(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",8),e.\u0275\u0275i18n(2,12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",10)(4,"a",13),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd()()()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("routerLink",t.getPersistentVolumeHref(t.persistentVolumeClaim.volume)),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.persistentVolumeClaim.volume," ")}}function h(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property",14)(1,"div",8),e.\u0275\u0275i18n(2,15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",10),e.\u0275\u0275element(4,"kd-chips",16),e.\u0275\u0275elementEnd()()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",t.persistentVolumeClaim.capacity)("displayAll",!0)}}function x(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"kd-property",14)(1,"div",8),e.\u0275\u0275i18n(2,17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",10),e.\u0275\u0275element(4,"kd-chips",18),e.\u0275\u0275elementEnd()()),2&_){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",t.persistentVolumeClaim.accessModes)}}function B(_,o){if(1&_&&(e.\u0275\u0275elementStart(0,"div",5),e.\u0275\u0275template(1,D,5,1,"kd-property",6),e.\u0275\u0275template(2,G,5,1,"kd-property",6),e.\u0275\u0275template(3,y,6,2,"kd-property",6),e.\u0275\u0275template(4,h,5,2,"kd-property",7),e.\u0275\u0275template(5,x,5,1,"kd-property",7),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.persistentVolumeClaim?null:t.persistentVolumeClaim.status),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.persistentVolumeClaim?null:t.persistentVolumeClaim.storageClass),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.persistentVolumeClaim?null:t.persistentVolumeClaim.volume),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.persistentVolumeClaim?null:t.persistentVolumeClaim.capacity),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.persistentVolumeClaim?null:t.persistentVolumeClaim.accessModes)}}let F=(()=>{class _{constructor(t,i,l,r){this.persistentVolumeClaim_=t,this.actionbar_=i,this.activatedRoute_=l,this.notifications_=r,this.endpoint_=C.wE.resource(C._z.persistentVolumeClaim,!0),this.unsubscribe_=new I.x,this.kdState_=v.F.injector.get(f.b),this.isInitialized=!1}ngOnInit(){const t=this.activatedRoute_.snapshot.params.resourceName,i=this.activatedRoute_.snapshot.params.resourceNamespace;this.persistentVolumeClaim_.get(this.endpoint_.detail(),t,i).pipe((0,O.R)(this.unsubscribe_)).subscribe(l=>{this.persistentVolumeClaim=l,this.notifications_.pushErrors(l.errors),this.actionbar_.onInit.emit(new E.N("Persistent Volume Claim",l.objectMeta,l.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}getPersistentVolumeHref(t){return this.kdState_.href("persistentvolume",t)}}return _.\u0275fac=function(t){return new(t||_)(e.\u0275\u0275directiveInject(A.p),e.\u0275\u0275directiveInject(E.b),e.\u0275\u0275directiveInject(a.ActivatedRoute),e.\u0275\u0275directiveInject(M.TF))},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["kd-persistent-volume-claim-detail"]],decls:5,vars:4,consts:function(){let o,t,i,l,r,S;return o="Resource information",t="Status",i="Storage Class",l="Volume Name",r="Capacity",S="Access Modes",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],o,["content","","fxLayout","row wrap",4,"ngIf"],["content","","fxLayout","row wrap"],[4,"ngIf"],["fxFlex","100",4,"ngIf"],["key",""],t,["value",""],i,l,["queryParamsHandling","preserve",3,"routerLink"],["fxFlex","100"],r,[3,"map","displayAll"],S,[3,"map"]]},template:function(t,i){1&t&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,B,6,5,"div",4),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("initialized",i.isInitialized)("objectMeta",null==i.persistentVolumeClaim?null:i.persistentVolumeClaim.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",i.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.isInitialized))},directives:[P.A,g.A,L.NgIf,u.xw,U.s,a.RouterLinkWithHref,u.yH,V.k],encapsulation:2}),_})();var $=n(2732);const d={path:"",component:(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["kd-persistent-volume-claim-list-state"]],decls:1,vars:0,template:function(t,i){1&t&&e.\u0275\u0275element(0,"kd-persistent-volume-claim-list")},directives:[$.u],encapsulation:2}),_})(),data:{breadcrumb:T.SX.PersistentVolumeClaims,parent:N.M}},H={path:":resourceNamespace/:resourceName",component:F,data:{breadcrumb:"{{ resourceName }}",parent:d}};let z=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[a.RouterModule.forChild([d,H,R.aA])],a.RouterModule]}),_})(),j=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[c.m,p.K,z]]}),_})()}}]);