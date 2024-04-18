"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[854],{6854:(F,r,o)=>{o.r(r),o.d(r,{DaemonSetModule:()=>K});var p=o(1028),c=o(6042),l=o(4793),R=o(3621),u=o(3456),O=o(7238),N=o(6758),T=o(2722),m=o(1495),D=o(5387),s=o(7575),v=o(5467),e=o(4650),C=o(958),I=o(7347),A=o(6895),S=o(1576),f=o(7623),M=o(1677),g=o(8701),h=o(9791),y=o(8190),L=o(2958);function U(t,i){if(1&t&&(e.\u0275\u0275elementStart(0,"kd-property",10)(1,"div",11),e.\u0275\u0275i18n(2,12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",13),e.\u0275\u0275element(4,"kd-chips",14),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",n.daemonSet.labelSelector.matchLabels)("displayAll",!0)}}function G(t,i){if(1&t&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",11),e.\u0275\u0275i18n(2,15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",13),e.\u0275\u0275element(4,"kd-chips",14),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",n.daemonSet.containerImages)("displayAll",!0)}}function B(t,i){if(1&t&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",11),e.\u0275\u0275i18n(2,16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",13),e.\u0275\u0275element(4,"kd-chips",14),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275property("map",n.daemonSet.initContainerImages)("displayAll",!0)}}function P(t,i){if(1&t&&(e.\u0275\u0275elementStart(0,"div",7),e.\u0275\u0275template(1,U,5,2,"kd-property",8),e.\u0275\u0275template(2,G,5,2,"kd-property",9),e.\u0275\u0275template(3,B,5,2,"kd-property",9),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.daemonSet?null:n.daemonSet.labelSelector),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.daemonSet?null:n.daemonSet.containerImages),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.daemonSet?null:n.daemonSet.initContainerImages)}}let $=(()=>{class t{constructor(n,_,a,d){this.daemonSet_=n,this.actionbar_=_,this.activatedRoute_=a,this.notifications_=d,this.endpoint_=s.wE.resource(s._z.daemonSet,!0),this.unsubscribe_=new N.x,this.isInitialized=!1}ngOnInit(){const n=this.activatedRoute_.snapshot.params.resourceName,_=this.activatedRoute_.snapshot.params.resourceNamespace;this.eventListEndpoint=this.endpoint_.child(n,s._z.event,_),this.podListEndpoint=this.endpoint_.child(n,s._z.pod,_),this.serviceListEndpoint=this.endpoint_.child(n,s._z.service,_),this.daemonSet_.get(this.endpoint_.detail(),n,_).pipe((0,T.R)(this.unsubscribe_)).subscribe(a=>{this.daemonSet=a,this.notifications_.pushErrors(a.errors),this.actionbar_.onInit.emit(new m.N("Daemon Set",a.objectMeta,a.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(v.p),e.\u0275\u0275directiveInject(m.b),e.\u0275\u0275directiveInject(l.ActivatedRoute),e.\u0275\u0275directiveInject(D.TF))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["kd-daemon-set-detail"]],decls:9,vars:9,consts:function(){let i,n,_,a;return i="Resource information",n="Selector",_="Images",a="Init images",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],i,["content","","fxLayout","row wrap",4,"ngIf"],[3,"podInfo","initialized"],[3,"endpoint"],["content","","fxLayout","row wrap"],["fxFlex","100",4,"ngIf"],[4,"ngIf"],["fxFlex","100"],["key",""],n,["value",""],[3,"map","displayAll"],_,a]},template:function(n,_){1&n&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,P,4,3,"div",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"kd-pod-status-card",5)(6,"kd-pod-list",6)(7,"kd-service-list",6)(8,"kd-event-list",6)),2&n&&(e.\u0275\u0275property("initialized",_.isInitialized)("objectMeta",null==_.daemonSet?null:_.daemonSet.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",_.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",_.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("podInfo",null==_.daemonSet?null:_.daemonSet.podInfo)("initialized",_.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",_.podListEndpoint),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",_.serviceListEndpoint),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",_.eventListEndpoint))},directives:[C.A,I.A,A.NgIf,S.xw,f.s,S.yH,M.k,g.G,h.x,y.$,L.X],encapsulation:2}),t})();var z=o(1187);const E={path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["kd-daemon-set-list-state"]],decls:1,vars:1,consts:[[3,"showMetrics"]],template:function(n,_){1&n&&e.\u0275\u0275element(0,"kd-daemon-set-list",0),2&n&&e.\u0275\u0275property("showMetrics",!0)},directives:[z.w],encapsulation:2}),t})(),data:{breadcrumb:u.SX.DaemonSets,parent:O.t}},x={path:":resourceNamespace/:resourceName",component:$,data:{breadcrumb:"{{ resourceName }}",parent:E}};let H=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[l.RouterModule.forChild([E,x,R._Q])],l.RouterModule]}),t})(),K=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[c.m,p.K,H]]}),t})()}}]);