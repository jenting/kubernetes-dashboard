"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[81],{5081:(X,d,_)=>{_.r(d),_.d(d,{SearchModule:()=>J});var p=_(1028),m=_(6042),c=_(4793),S=_(126),h=_(6587),i=_(1058),u=_(2654),e=_(4650),E=_(6348),g=_(1187),C=_(1680),T=_(5526),v=_(9791),R=_(3881),N=_(6496),f=_(2252),O=_(2815),M=_(8608),U=_(8190),y=_(7243),A=_(4789),G=_(354),D=_(3660),I=_(8864),L=_(4593),k=_(7757),B=_(1433),H=_(2158),P=_(5813),$=_(5594),b=_(4834),F=_(4003);const j={path:"",component:(()=>{class r extends u.v{hasCluster(){return this.isGroupVisible(i.l.cluster)}hasWorkloads(){return this.isGroupVisible(i.l.workloads)}hasDiscovery(){return this.isGroupVisible(i.l.discovery)}hasConfig(){return this.isGroupVisible(i.l.config)}}return r.\u0275fac=function(){let a;return function(t){return(a||(a=e.\u0275\u0275getInheritedFactory(r)))(t||r)}}(),r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["kd-search"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:38,vars:30,consts:function(){let a,l,t,o,n;return a="\u30EF\u30FC\u30AF\u30ED\u30FC\u30C9",l="\u30B5\u30FC\u30D3\u30B9",t="\u8A2D\u5B9A\u3068\u30B9\u30C8\u30EC\u30FC\u30B8",o="\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8",n="\u30AF\u30E9\u30B9\u30BF\u30FC",[[3,"hidden"],[1,"kd-card-group-header","kd-muted",3,"hidden"],a,[3,"hideable","onchange"],l,t,["title",o,3,"hideable","onchange"],n]},template:function(l,t){1&l&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1),e.\u0275\u0275i18n(2,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div")(4,"kd-cron-job-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"kd-daemon-set-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"kd-deployment-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"kd-job-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"kd-pod-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"kd-replica-set-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"kd-replication-controller-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"kd-stateful-set-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"div",1),e.\u0275\u0275i18n(13,4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"div")(15,"kd-ingress-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"kd-ingress-class-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"kd-service-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(18,"div",1),e.\u0275\u0275i18n(19,5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"div")(21,"kd-config-map-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"kd-persistent-volume-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"kd-secret-list",6),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"kd-storage-class-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(25,"div",1),e.\u0275\u0275i18n(26,7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"div")(28,"kd-cluster-role-binding-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"kd-cluster-role-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"kd-namespace-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"kd-network-policy-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"kd-node-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(33,"kd-persistent-volume-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"kd-role-binding-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"kd-role-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"kd-service-account-list",3),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275element(37,"kd-zero-state",0)),2&l&&(e.\u0275\u0275property("hidden",t.shouldShowZeroState()),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.hasWorkloads()),e.\u0275\u0275advance(3),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.hasDiscovery()),e.\u0275\u0275advance(3),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.hasConfig()),e.\u0275\u0275advance(3),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.hasCluster()),e.\u0275\u0275advance(3),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.shouldShowZeroState()))},directives:[E.z,g.w,C.M,T.Q,v.x,R.$,N._,f.e,O._,M.j,U.$,y.d,A.p,G.A,D.c,I.o,L.u,k.q,B.j,H.v,P.T,$.C,b.S,F.f],encapsulation:2}),r})(),canDeactivate:[h.h],data:{breadcrumb:S.rG}};let K=(()=>{class r{}return r.\u0275fac=function(l){return new(l||r)},r.\u0275mod=e.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=e.\u0275\u0275defineInjector({imports:[[c.RouterModule.forChild([j])],c.RouterModule]}),r})(),J=(()=>{class r{}return r.\u0275fac=function(l){return new(l||r)},r.\u0275mod=e.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.m,p.K,K]]}),r})()}}]);