"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[63],{63:(g,a,n)=>{n.r(a),n.d(a,{ServiceAccountModule:()=>f});var d=n(1028),S=n(6042),_=n(4793),E=n(3621),C=n(3456),v=n(1459),R=n(6758),A=n(2722),u=n(1495),m=n(5387),r=n(7575),p=n(5467),o=n(4650),T=n(958),N=n(354);let O=(()=>{class e{constructor(t,c,s,U){this.serviceAccount_=t,this.actionbar_=c,this.activatedRoute_=s,this.notifications_=U,this.endpoint_=r.wE.resource(r._z.serviceAccount,!0),this.unsubscribe_=new R.x,this.isInitialized=!1}ngOnInit(){const t=this.activatedRoute_.snapshot.params.resourceName,c=this.activatedRoute_.snapshot.params.resourceNamespace;this.secretListEndpoint=this.endpoint_.child(t,r._z.secret,c),this.imagePullSecretListEndpoint=this.endpoint_.child(t,r._z.imagePullSecret,c),this.serviceAccount_.get(this.endpoint_.detail(),t,c).pipe((0,A.R)(this.unsubscribe_)).subscribe(s=>{this.serviceAccount=s,this.notifications_.pushErrors(s.errors),this.actionbar_.onInit.emit(new u.N("Service Account",s.objectMeta,s.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete(),this.actionbar_.onDetailsLeave.emit()}}return e.\u0275fac=function(t){return new(t||e)(o.\u0275\u0275directiveInject(p.p),o.\u0275\u0275directiveInject(u.b),o.\u0275\u0275directiveInject(_.ActivatedRoute),o.\u0275\u0275directiveInject(m.TF))},e.\u0275cmp=o.\u0275\u0275defineComponent({type:e,selectors:[["kd-service-account-detail"]],decls:3,vars:4,consts:function(){let i,t;return i="Secrets",t="Pull Secrets de imagen",[[3,"initialized","objectMeta"],["title",i,3,"endpoint"],["title",t,3,"endpoint"]]},template:function(t,c){1&t&&o.\u0275\u0275element(0,"kd-object-meta",0)(1,"kd-secret-list",1)(2,"kd-secret-list",2),2&t&&(o.\u0275\u0275property("initialized",c.isInitialized)("objectMeta",null==c.serviceAccount?null:c.serviceAccount.objectMeta),o.\u0275\u0275advance(1),o.\u0275\u0275property("endpoint",c.secretListEndpoint),o.\u0275\u0275advance(1),o.\u0275\u0275property("endpoint",c.imagePullSecretListEndpoint))},directives:[T.A,N.A],encapsulation:2}),e})();var h=n(4834);const l={path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.\u0275\u0275defineComponent({type:e,selectors:[["kd-service-account-list-state"]],decls:1,vars:0,template:function(t,c){1&t&&o.\u0275\u0275element(0,"kd-service-account-list")},directives:[h.S],encapsulation:2}),e})(),data:{breadcrumb:C.SX.ServiceAccounts,parent:v.a}},I={path:":resourceNamespace/:resourceName",component:O,data:{breadcrumb:"{{ resourceName }}",parent:l}};let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({imports:[[_.RouterModule.forChild([l,I,E.aA])],_.RouterModule]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=o.\u0275\u0275defineInjector({imports:[[S.m,d.K,M]]}),e})()}}]);