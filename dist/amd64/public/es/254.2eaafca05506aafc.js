"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[254],{9060:(z,l,o)=>{o.r(l),o.d(l,{StorageClassModule:()=>F});var m=o(1028),p=o(6042),_=o(4793),E=o(3621),g=o(3456),u=o(6275),R=o(6758),T=o(2722),d=o(1495),N=o(5387),r=o(7575),O=o(5467),t=o(4650),f=o(958),v=o(7347),c=o(6895),S=o(1576),I=o(7623),A=o(7392),M=o(266),h=o(4789);function G(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"kd-property",9)(1,"div",10),t.\u0275\u0275i18n(2,11),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",12),t.\u0275\u0275text(4),t.\u0275\u0275elementEnd()()),2&e){const n=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(null==n.storageClass?null:n.storageClass.provisioner)}}function y(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"kd-property")(1,"div",13),t.\u0275\u0275text(2),t.\u0275\u0275elementStart(3,"mat-icon",14),t.\u0275\u0275text(4,"tune"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(5,"div",12),t.\u0275\u0275text(6),t.\u0275\u0275elementEnd()()),2&e){const n=a.$implicit,s=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" ",n," "),t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(null==s.storageClass?null:s.storageClass.parameters[n])}}function x(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"div",6),t.\u0275\u0275template(1,G,5,1,"kd-property",7),t.\u0275\u0275template(2,y,7,2,"kd-property",8),t.\u0275\u0275elementEnd()),2&e){const n=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==n.storageClass?null:n.storageClass.provisioner),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",n.getParameterNames())}}let D=(()=>{class e{constructor(n,s,i,B){this.storageClass_=n,this.actionbar_=s,this.activatedRoute_=i,this.notifications_=B,this.endpoint_=r.wE.resource(r._z.storageClass),this.unsubscribe_=new R.x,this.isInitialized=!1}ngOnInit(){const n=this.activatedRoute_.snapshot.params.resourceName;this.pvListEndpoint=this.endpoint_.child(n,r._z.persistentVolume),this.storageClass_.get(this.endpoint_.detail(),n).pipe((0,T.R)(this.unsubscribe_)).subscribe(s=>{this.storageClass=s,this.notifications_.pushErrors(s.errors),this.actionbar_.onInit.emit(new d.N("Storage Class",s.objectMeta,s.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}getParameterNames(){return this.storageClass.parameters?Object.keys(this.storageClass.parameters):[]}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(O.z),t.\u0275\u0275directiveInject(d.b),t.\u0275\u0275directiveInject(_.ActivatedRoute),t.\u0275\u0275directiveInject(N.TF))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["kd-storage-class-detail"]],decls:6,vars:5,consts:function(){let a,n,s;return a="Informaci\xF3n del recurso",n="Aprovisionar",s="Par\xE1metro",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],a,["content","","fxLayout","row wrap",4,"ngIf"],[3,"endpoint"],["content","","fxLayout","row wrap"],["fxFlex","100",4,"ngIf"],[4,"ngFor","ngForOf"],["fxFlex","100"],["key",""],n,["value",""],["key","","fxLayout",""],["matTooltip",s,1,"kd-storage-class-parameter-icon"]]},template:function(n,s){1&n&&(t.\u0275\u0275element(0,"kd-object-meta",0),t.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),t.\u0275\u0275i18n(3,3),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(4,x,3,2,"div",4),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(5,"kd-persistent-volume-list",5)),2&n&&(t.\u0275\u0275property("initialized",s.isInitialized)("objectMeta",null==s.storageClass?null:s.storageClass.objectMeta),t.\u0275\u0275advance(1),t.\u0275\u0275property("initialized",s.isInitialized),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",s.isInitialized),t.\u0275\u0275advance(1),t.\u0275\u0275property("endpoint",s.pvListEndpoint))},directives:[f.A,v.A,c.NgIf,S.xw,I.s,S.yH,c.NgForOf,A.Hw,M.gM,h.p],styles:[".kd-storage-class-parameter-icon[_ngcontent-%COMP%]{font-size:12px;height:12px;max-height:12px;max-width:12px;width:12px;align-self:center;margin-left:4px}"]}),e})();var L=o(3660);const C={path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["kd-storage-class-list-state"]],decls:1,vars:0,template:function(n,s){1&n&&t.\u0275\u0275element(0,"kd-storage-class-list")},directives:[L.c],encapsulation:2}),e})(),data:{breadcrumb:g.SX.StorageClasses,parent:u.M}},U={path:":resourceName",component:D,data:{breadcrumb:"{{ resourceName }}",parent:C}};let P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[_.RouterModule.forChild([C,U,E.aA])],_.RouterModule]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[[p.m,m.K,P]]}),e})()}}]);