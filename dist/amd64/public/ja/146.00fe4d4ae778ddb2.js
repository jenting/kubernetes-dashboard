"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[146],{1146:(J,l,i)=>{i.r(l),i.d(l,{NamespaceModule:()=>X});var N=i(1028),C=i(6042),s=i(4793),R=i(3456),S=i(1459),m=i(6758),c=i(2722),f=i(5908),e=i(4650),_=i(1495),p=i(6895),d=i(1576),v=i(4859),T=i(266),M=i(7392),A=i(4865);function I(n,o){if(1&n&&e.\u0275\u0275element(0,"kd-actionbar-detail-actions",4),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("objectMeta",t.resourceMeta.objectMeta)("typeMeta",t.resourceMeta.typeMeta)("displayName",t.resourceMeta.displayName)}}function h(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",1)(1,"button",2),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().onClick()}),e.\u0275\u0275elementStart(2,"mat-icon"),e.\u0275\u0275text(3,"description"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(4,I,1,3,"kd-actionbar-detail-actions",3),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",t.isInitialized)}}let O=(()=>{class n{constructor(t,a){this.actionbar_=t,this.router_=a,this.isInitialized=!1,this.isVisible=!1,this.unsubscribe_=new m.x}ngOnInit(){this.actionbar_.onInit.pipe((0,c.R)(this.unsubscribe_)).subscribe(t=>{this.resourceMeta=t,this.isInitialized=!0,this.isVisible=!0}),this.actionbar_.onDetailsLeave.pipe((0,c.R)(this.unsubscribe_)).subscribe(()=>this.isVisible=!1)}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete()}onClick(){this.router_.navigate(["workloads"],{queryParamsHandling:"merge",queryParams:{[f.x]:this.resourceMeta.objectMeta.name}})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(_.b),e.\u0275\u0275directiveInject(s.Router))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:function(){let o;return o="\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u3078\u79FB\u52D5",[["fxLayout","row",4,"ngIf"],["fxLayout","row"],["mat-icon-button","","color","accent","matTooltip",o,1,"kd-toolbar-action",3,"click"],[3,"objectMeta","typeMeta","displayName",4,"ngIf"],[3,"objectMeta","typeMeta","displayName"]]},template:function(t,a){1&t&&e.\u0275\u0275template(0,h,5,1,"div",0),2&t&&e.\u0275\u0275property("ngIf",a.isVisible)},directives:[p.NgIf,d.xw,v.lW,T.gM,M.Hw,A.$],encapsulation:2}),n})();var b=i(5387),r=i(7575),g=i(5467),y=i(958),L=i(7347),D=i(7623),U=i(5198),P=i(3663),G=i(2958);function x(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",10),e.\u0275\u0275i18n(2,11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",12),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==t.namespace?null:t.namespace.phase)}}function z(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"div",8),e.\u0275\u0275template(1,x,5,1,"kd-property",9),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==t.namespace?null:t.namespace.phase)}}let j=(()=>{class n{constructor(t,a,E,K){this.namespace_=t,this.actionbar_=a,this.activatedRoute_=E,this.notifications_=K,this.endpoint_=r.wE.resource(r._z.namespace),this.unsubscribe_=new m.x,this.isInitialized=!1}ngOnInit(){const t=this.activatedRoute_.snapshot.params.resourceName;this.eventListEndpoint=this.endpoint_.child(t,r._z.event),this.namespace_.get(this.endpoint_.detail(),t).pipe((0,c.R)(this.unsubscribe_)).subscribe(a=>{this.namespace=a,this.notifications_.pushErrors(a.errors),this.actionbar_.onInit.emit(new _.N("Namespace",a.objectMeta,a.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(g.z),e.\u0275\u0275directiveInject(_.b),e.\u0275\u0275directiveInject(s.ActivatedRoute),e.\u0275\u0275directiveInject(b.TF))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-namespace-detail"]],decls:8,vars:9,consts:function(){let o,t;return o="\u30EA\u30BD\u30FC\u30B9\u60C5\u5831",t="\u72B6\u614B",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],o,["content","","fxLayout","row wrap",4,"ngIf"],[3,"quotas","initialized"],[3,"limits","initialized"],[3,"endpoint"],["content","","fxLayout","row wrap"],[4,"ngIf"],["key",""],t,["value",""]]},template:function(t,a){1&t&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,z,2,1,"div",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"kd-resource-quota-list",5)(6,"kd-resource-limit-list",6)(7,"kd-event-list",7)),2&t&&(e.\u0275\u0275property("initialized",a.isInitialized)("objectMeta",null==a.namespace?null:a.namespace.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",a.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",a.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("quotas",null==a.namespace||null==a.namespace.resourceQuotaList?null:a.namespace.resourceQuotaList.items)("initialized",a.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("limits",null==a.namespace?null:a.namespace.resourceLimits)("initialized",a.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("endpoint",a.eventListEndpoint))},directives:[y.A,L.A,p.NgIf,d.xw,D.s,U.R,P.i,G.X],encapsulation:2}),n})();var B=i(7757);const u={path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-namespace-list-view"]],decls:1,vars:0,template:function(t,a){1&t&&e.\u0275\u0275element(0,"kd-namespace-list")},directives:[B.q],encapsulation:2}),n})(),data:{breadcrumb:R.SX.Namespaces,parent:S.a}},$={path:":resourceName",component:j,data:{breadcrumb:"{{ resourceName }}",parent:u}},H={path:"",component:O,outlet:"actionbar"};let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[s.RouterModule.forChild([u,$,H])],s.RouterModule]}),n})(),X=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[C.m,N.K,F]]}),n})()}}]);