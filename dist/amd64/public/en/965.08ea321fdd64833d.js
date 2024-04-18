"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[965],{3965:(P,s,i)=>{i.r(s),i.d(s,{RoleBingingModule:()=>j});var R=i(1028),g=i(6042),a=i(4793),u=i(3621),m=i(3456),p=i(1459),d=i(1495),E=i(5387),_=i(7575),f=i(5467),N=i(6758),B=i(2722),e=i(4650),I=i(6048),S=i(958),v=i(7347),C=i(6895),T=i(1576),h=i(7623),O=i(8333);function M(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"a",12),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("routerLink",t.getRoleHref()),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.roleBinding.roleRef.name)}}function L(n,o){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"-"),e.\u0275\u0275elementEnd())}function D(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"div",6)(1,"kd-property")(2,"div",7),e.\u0275\u0275i18n(3,8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",9),e.\u0275\u0275template(5,M,2,2,"a",10),e.\u0275\u0275template(6,L,2,0,"span",11),e.\u0275\u0275elementEnd()()()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",t.roleBinding.roleRef),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.roleBinding.roleRef)}}let y=(()=>{class n{constructor(t,r,l,b,z){this.roleBinding_=t,this.actionbar_=r,this.route_=l,this.notifications_=b,this.kdState_=z,this._unsubscribe=new N.x,this.endpoint_=_.wE.resource(_._z.roleBinding,!0),this.isInitialized=!1}ngOnInit(){const t=this.route_.snapshot.params.resourceName,r=this.route_.snapshot.params.resourceNamespace;this.roleBinding_.get(this.endpoint_.detail(),t,r).pipe((0,B.R)(this._unsubscribe)).subscribe(l=>{this.roleBinding=l,this.notifications_.pushErrors(l.errors),this.actionbar_.onInit.emit(new d.N("Role Binding",l.objectMeta,l.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this._unsubscribe.next(),this._unsubscribe.complete(),this.actionbar_.onDetailsLeave.emit()}getRoleHref(){return this.kdState_.href(this.roleBinding.roleRef.kind.toLowerCase(),this.roleBinding.roleRef.name,this.roleBinding.objectMeta.namespace)}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(f.p),e.\u0275\u0275directiveInject(d.b),e.\u0275\u0275directiveInject(a.ActivatedRoute),e.\u0275\u0275directiveInject(E.TF),e.\u0275\u0275directiveInject(I.b))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-role-detail"]],decls:6,vars:6,consts:function(){let o,t;return o="Resource information",t="Role Reference",[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],o,["content","","fxLayout","row wrap",4,"ngIf"],[3,"subjects","initialized"],["content","","fxLayout","row wrap"],["key",""],t,["value",""],["queryParamsHandling","preserve",3,"routerLink",4,"ngIf"],[4,"ngIf"],["queryParamsHandling","preserve",3,"routerLink"]]},template:function(t,r){1&t&&(e.\u0275\u0275element(0,"kd-object-meta",0),e.\u0275\u0275elementStart(1,"kd-card",1)(2,"div",2),e.\u0275\u0275i18n(3,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,D,7,2,"div",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"kd-subject-list",5)),2&t&&(e.\u0275\u0275property("initialized",r.isInitialized)("objectMeta",null==r.roleBinding?null:r.roleBinding.objectMeta),e.\u0275\u0275advance(1),e.\u0275\u0275property("initialized",r.isInitialized),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",r.isInitialized),e.\u0275\u0275advance(1),e.\u0275\u0275property("subjects",null==r.roleBinding?null:r.roleBinding.subjects)("initialized",r.isInitialized))},directives:[S.A,v.A,C.NgIf,T.xw,h.s,a.RouterLinkWithHref,O.E],encapsulation:2}),n})();var A=i(5813);const c={path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["kd-role-binding-list-state"]],decls:1,vars:0,template:function(t,r){1&t&&e.\u0275\u0275element(0,"kd-role-binding-list")},directives:[A.T],encapsulation:2}),n})(),data:{breadcrumb:m.SX.RoleBindings,parent:p.a}},U={path:":resourceNamespace/:resourceName",component:y,data:{breadcrumb:"{{ resourceName }}",parent:c}};let G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[a.RouterModule.forChild([c,U,u.aA])],a.RouterModule]}),n})(),j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[g.m,R.K,G]]}),n})()}}]);