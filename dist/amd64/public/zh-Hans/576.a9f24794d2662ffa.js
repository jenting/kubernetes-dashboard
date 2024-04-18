"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[576],{8576:(F,r,s)=>{s.r(r),s.d(r,{IngressClassModule:()=>P});var E=s(1028),m=s(6042),i=s(4793),g=s(3456),I=s(3621),p=s(686),R=s(6758),u=s(2722),l=s(1495),N=s(5387),d=s(7575),f=s(5467),e=s(4650),T=s(958),O=s(7347),c=s(6895),C=s(1576),v=s(7623),M=s(7392),A=s(266);function D(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"kd-property",8)(1,"div",9),e.\u0275\u0275i18n(2,10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",11),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()),2&t){const n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==n.ingressClass?null:n.ingressClass.controller)}}function h(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"kd-property")(1,"div",12),e.\u0275\u0275text(2),e.\u0275\u0275elementStart(3,"mat-icon",13),e.\u0275\u0275text(4,"tune"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(5,"div",11),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()()),2&t){const n=a.$implicit,o=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",n," "),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(null==o.ingressClass?null:o.ingressClass.parameters[n])}}function x(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div",5),e.\u0275\u0275template(1,D,5,1,"kd-property",6),e.\u0275\u0275template(2,h,7,2,"kd-property",7),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==n.ingressClass?null:n.ingressClass.controller),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",n.getParameterNames())}}let y=(()=>{class t{constructor(n,o,_,B){this.ingressClass_=n,this.actionbar_=o,this.activatedRoute_=_,this.notifications_=B,this.endpoint_=d.wE.resource(d._z.ingressClass),this.unsubscribe_=new R.x,this.isInitialized=!1}ngOnInit(){const n=this.activatedRoute_.snapshot.params.resourceName;this.ingressClass_.get(this.endpoint_.detail(),n).pipe((0,u.R)(this.unsubscribe_)).subscribe(o=>{this.ingressClass=o,this.notifications_.pushErrors(o.errors),this.actionbar_.onInit.emit(new l.N("Ingress Class",o.objectMeta,o.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}getParameterNames(){return this.ingressClass.parameters?Object.keys(this.ingressClass.parameters):[]}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(f.z),e.\u0275\u0275directiveInject(l.b),e.\u0275\u0275directiveInject(i.ActivatedRoute),e.\u0275\u0275directiveInject(N.TF))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["kd-ingress-class-detail"]],decls:5,vars:4,consts:function(){let a,n,o;return a="Resource information",n="Controller",o="\u53C2\u6570",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],a,["content","","fxLayout","row wrap",4,"ngIf"],["content","","fxLayout","row wrap"],["fxFlex","100",4,"ngIf"],[4,"ngFor","ngForOf"],["fxFlex","100"],["key",""],n,["value",""],["key","","fxLayout",""],["matTooltip",o,1,"kd-ingress-class-parameter-icon"]]},template:function(n,o){1&n&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,x,3,2,"div",4),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275property("initialized",o.isInitialized)("objectMeta",null==o.ingressClass?null:o.ingressClass.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",o.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",o.isInitialized))},directives:[T.A,O.A,c.NgIf,C.xw,v.s,C.yH,c.NgForOf,M.Hw,A.gM],styles:[".kd-ingress-class-parameter-icon[_ngcontent-%COMP%]{font-size:12px;height:12px;max-height:12px;max-width:12px;width:12px;align-self:center;margin-left:4px}"]}),t})();var G=s(8608);const S={path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["kd-ingress-class-list-state"]],decls:1,vars:0,template:function(n,o){1&n&&e.\u0275\u0275element(0,"kd-ingress-class-list")},directives:[G.j],encapsulation:2}),t})(),data:{breadcrumb:g.SX.IngressClasses,parent:p.X}},L={path:":resourceName",component:y,data:{breadcrumb:"{{ resourceName }}",parent:S}};let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[i.RouterModule.forChild([S,L,I.aA])],i.RouterModule]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.m,E.K,U]]}),t})()}}]);