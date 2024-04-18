"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[268],{8268:(J,d,o)=>{o.r(d),o.d(d,{OverviewModule:()=>X});var c=o(1028),m=o(6042),p=o(4793),v=o(3456),a=o(1058),u=o(2654),e=o(4650),E=o(1256),S=o(6895),g=o(7118),h=o(6348),O=o(1187),T=o(1680),C=o(5526),R=o(9791),N=o(3881),f=o(6496),M=o(2252),y=o(2815),U=o(8608),I=o(8190),G=o(7243),k=o(4789),A=o(354),L=o(3660),D=o(8864),B=o(4593),P=o(7757),$=o(1433),V=o(2158),w=o(5813),H=o(5594),W=o(4834),b=o(4003);function F(r,i){if(1&r&&e.\u0275\u0275element(0,"kd-workload-statuses",10),2&r){const l=e.\u0275\u0275nextContext();e.\u0275\u0275property("resourcesRatio",l.resourcesRatio)}}const j={path:"",component:(()=>{class r extends u.v{hasCluster(){return this.isGroupVisible(a.l.cluster)}hasWorkloads(){return this.isGroupVisible(a.l.workloads)}hasDiscovery(){return this.isGroupVisible(a.l.discovery)}hasConfig(){return this.isGroupVisible(a.l.config)}showWorkloadStatuses(){return 0!==Object.values(this.resourcesRatio).reduce((l,t)=>l+t.length,0)}}return r.\u0275fac=function(){let i;return function(t){return(i||(i=e.\u0275\u0275getInheritedFactory(r)))(t||r)}}(),r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["kd-overview"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:40,vars:32,consts:function(){let i,l,t,_,n;return i="Workloads",l="Service",t="Config and Storage",_="Secrets",n="Cluster",[[1,"kd-card-group-header","kd-muted",3,"hidden"],i,[3,"metrics"],[3,"resourcesRatio",4,"ngIf"],[3,"hideable","onchange"],l,t,["title",_,3,"hideable","onchange"],[3,"hidden"],n,[3,"resourcesRatio"]]},template:function(l,t){1&l&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275i18n(1,1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div"),e.\u0275\u0275element(3,"kd-graph-metrics",2),e.\u0275\u0275template(4,F,1,1,"kd-workload-statuses",3),e.\u0275\u0275elementStart(5,"kd-cron-job-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"kd-daemon-set-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"kd-deployment-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"kd-job-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"kd-pod-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"kd-replica-set-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"kd-replication-controller-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"kd-stateful-set-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(13,"div",0),e.\u0275\u0275i18n(14,5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"div")(16,"kd-ingress-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"kd-ingress-class-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"kd-service-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(19,"div",0),e.\u0275\u0275i18n(20,6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"div")(22,"kd-config-map-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"kd-persistent-volume-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"kd-secret-list",7),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"kd-storage-class-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(26,"div",8)(27,"div",0),e.\u0275\u0275i18n(28,9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"div")(30,"kd-cluster-role-binding-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"kd-cluster-role-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"kd-namespace-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(33,"kd-network-policy-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"kd-node-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"kd-persistent-volume-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(36,"kd-role-binding-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(37,"kd-role-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"kd-service-account-list",4),e.\u0275\u0275listener("onchange",function(n){return t.onListUpdate(n)}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275element(39,"kd-zero-state",8)),2&l&&(e.\u0275\u0275property("hidden",!t.hasWorkloads()),e.\u0275\u0275advance(3),e.\u0275\u0275property("metrics",t.cumulativeMetrics),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.showWorkloadStatuses()),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.hasDiscovery()),e.\u0275\u0275advance(3),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.hasConfig()),e.\u0275\u0275advance(3),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",t.shouldShowZeroState()),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.hasCluster()),e.\u0275\u0275advance(3),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hideable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",!t.shouldShowZeroState()))},directives:[E.y,S.NgIf,g.H,h.z,O.w,T.M,C.Q,R.x,N.$,f._,M.e,y._,U.j,I.$,G.d,k.p,A.A,L.c,D.o,B.u,P.q,$.j,V.v,w.T,H.C,W.S,b.f],encapsulation:2}),r})(),data:{breadcrumb:v.SX.Overview}};let K=(()=>{class r{}return r.\u0275fac=function(l){return new(l||r)},r.\u0275mod=e.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=e.\u0275\u0275defineInjector({imports:[[p.RouterModule.forChild([j])],p.RouterModule]}),r})(),X=(()=>{class r{}return r.\u0275fac=function(l){return new(l||r)},r.\u0275mod=e.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.m,c.K,K]]}),r})()}}]);