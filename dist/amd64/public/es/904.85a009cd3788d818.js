"use strict";(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[904],{7904:(b_,h,i)=>{i.r(h),i.d(h,{SettingsModule:()=>y_});var Z=i(1028),Q=i(6042),q=i(7489),D=i.n(q),G=i(6758),_=i(4650);let f=(()=>{class t{constructor(){this.onSettingsChange=new G.x,this.settings_={}}get settings(){return this.settings_}set settings(e){this.settings_=D().extend(this.settings_,e),this.onSettingsChange.next(this.settings_)}reset(){this.settings_={},this.onSettingsChange.next(this.settings_)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=_.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var B=i(4793),__=i(3456),e_=i(9646),A=i(2722),t_=i(8505),n_=i(262),u=i(5698),s_=i(5595),o_=i(7537),v=i(5467),E=i(5938),O=i(4859);let i_=(()=>{class t{constructor(e){this.dialogRef=e}onNoClick(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(E.so))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-settings-save-anyway-dialog"]],decls:9,vars:2,consts:function(){let s,e,n,o;return s="Los par\xE1metros han cambiado desde la \xFAltima recarga",e="\xBFQuieres guardar de todas maneras?",n="Guardar",o="Actualizar",[["mat-dialog-title",""],s,e,["mat-button","","color","primary",3,"mat-dialog-close"],n,o]},template:function(e,n){1&e&&(_.\u0275\u0275elementStart(0,"h2",0),_.\u0275\u0275i18n(1,1),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(2,"mat-dialog-content"),_.\u0275\u0275i18n(3,2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(4,"mat-dialog-actions")(5,"button",3),_.\u0275\u0275i18n(6,4),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(7,"button",3),_.\u0275\u0275i18n(8,5),_.\u0275\u0275elementEnd()()),2&e&&(_.\u0275\u0275advance(5),_.\u0275\u0275property("mat-dialog-close",!0),_.\u0275\u0275advance(2),_.\u0275\u0275property("mat-dialog-close",!1))},directives:[E.uh,E.xY,E.H8,O.lW,E.ZT],encapsulation:2}),t})();var S=i(4006),g=i(6895),P=i(7347),T=i(1576);const a_=["*"];let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-settings-entry"]],inputs:{key:"key",desc:"desc"},ngContentSelectors:a_,decls:6,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center none","fxFlex",""],[1,"kd-muted"]],template:function(e,n){1&e&&(_.\u0275\u0275projectionDef(),_.\u0275\u0275elementStart(0,"div",0)(1,"div"),_.\u0275\u0275text(2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"div",1),_.\u0275\u0275text(4),_.\u0275\u0275elementEnd()(),_.\u0275\u0275projection(5,0,["class","kd-settings-entry-form","fxFlex",""])),2&e&&(_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate(n.key),_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate(n.desc))},directives:[T.xw,T.Wh,T.yH],encapsulation:2}),t})();var C=i(9549),M=i(284),m=i(2289),l_=i(4004),U=i(7575),p=i(7957),L=i(3238),y=i(8167);function r_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-option",14),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=s.$implicit;_.\u0275\u0275property("value",e),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1(" ",e," ")}}let S_=(()=>{class t{constructor(e){this.data=e}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(E.WI))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-namespace-settings-add-dialog"]],decls:18,vars:7,consts:function(){let s,e,n,o,a;return s="A\xF1adir Espacio de nombre",e="Provee un espacio de nombre que deber\xEDa ser a\xF1adido al listado de espacios de nombre de respaldo",n="Espacio de nombre",o=" Add ",a="Cerrar",[["fxFlex","","fxLayout","column"],["mat-dialog-title",""],s,["fxLayout","column",1,"kd-dialog-text"],e,["fxFlex",""],["name","defaultNamespace","placeholder",n,"type","text","matInput","",3,"matAutocomplete"],["namespaceInput",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"disabled","mat-dialog-close"],o,["mat-button","","color","primary",3,"mat-dialog-close"],a,[3,"value"]]},template:function(e,n){if(1&e&&(_.\u0275\u0275elementStart(0,"div",0)(1,"h2",1),_.\u0275\u0275i18n(2,2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"mat-dialog-content",3)(4,"div"),_.\u0275\u0275i18n(5,4),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(6,"mat-form-field",5),_.\u0275\u0275element(7,"input",6,7),_.\u0275\u0275elementStart(9,"mat-autocomplete",null,8),_.\u0275\u0275template(11,r_,2,2,"mat-option",9),_.\u0275\u0275pipe(12,"kdFilterBy"),_.\u0275\u0275elementEnd()()(),_.\u0275\u0275elementStart(13,"mat-dialog-actions")(14,"button",10),_.\u0275\u0275i18n(15,11),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(16,"button",12),_.\u0275\u0275i18n(17,13),_.\u0275\u0275elementEnd()()()),2&e){const o=_.\u0275\u0275reference(8),a=_.\u0275\u0275reference(10);_.\u0275\u0275advance(7),_.\u0275\u0275property("matAutocomplete",a),_.\u0275\u0275advance(4),_.\u0275\u0275property("ngForOf",_.\u0275\u0275pipeBind2(12,4,n.data.namespaces,o.value)),_.\u0275\u0275advance(3),_.\u0275\u0275property("disabled",0===(null==o||null==o.value?null:o.value.length))("mat-dialog-close",o.value)}},directives:[T.yH,T.xw,E.uh,E.xY,C.KE,M.Nt,p.ZL,p.XC,g.NgForOf,L.ey,E.H8,O.lW,E.ZT],pipes:[y.R],encapsulation:2}),t})();var b=i(6338),$=i(7392),E_=i(4850);function N_(t,s){if(1&t){const e=_.\u0275\u0275getCurrentView();_.\u0275\u0275elementStart(0,"mat-list-item")(1,"div",12),_.\u0275\u0275text(2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"button",13),_.\u0275\u0275listener("click",function(){const a=_.\u0275\u0275restoreView(e).$implicit;return _.\u0275\u0275nextContext().remove(a)})("focus",function(o){return o.stopPropagation()}),_.\u0275\u0275elementStart(4,"mat-icon"),_.\u0275\u0275text(5,"close"),_.\u0275\u0275elementEnd()(),_.\u0275\u0275element(6,"mat-divider"),_.\u0275\u0275elementEnd()}if(2&t){const e=s.$implicit;_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate(e)}}function c_(t,s){1&t&&(_.\u0275\u0275elementStart(0,"mat-list-item"),_.\u0275\u0275i18n(1,14),_.\u0275\u0275elementEnd())}let T_=(()=>{class t{constructor(e){this.data=e,this.namespaces=[],this.namespaces=Array.from(e.namespaces)}remove(e){this.namespaces.splice(this.namespaces.indexOf(e),1)}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(E.WI))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-namespace-settings-edit-dialog"]],decls:14,vars:3,consts:function(){let s,e,n,o,a;return s="Editar listado de espacio de nombre",e="Remueve espacios de nombre del listado y confirma para salvar los cambios.",n="Editar",o="Cerrar",a="No se ha seleccionado espacios de nombres",[["fxFlex","","fxLayout","column"],["mat-dialog-title",""],s,["fxLayout","column",1,"kd-dialog-text"],e,[4,"ngFor","ngForOf"],[4,"ngIf"],["fxLayoutAlign","space-between center",2,"padding","16px 0"],["mat-raised-button","","color","primary",3,"mat-dialog-close"],n,["mat-button","","color","primary",3,"mat-dialog-close"],o,["fxFlex","100"],["mat-icon-button","",3,"click","focus"],a]},template:function(e,n){1&e&&(_.\u0275\u0275elementStart(0,"div",0)(1,"h2",1),_.\u0275\u0275i18n(2,2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"mat-dialog-content",3)(4,"div"),_.\u0275\u0275i18n(5,4),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(6,"mat-list"),_.\u0275\u0275template(7,N_,7,1,"mat-list-item",5),_.\u0275\u0275template(8,c_,2,0,"mat-list-item",6),_.\u0275\u0275elementEnd()(),_.\u0275\u0275elementStart(9,"mat-dialog-actions",7)(10,"button",8),_.\u0275\u0275i18n(11,9),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(12,"button",10),_.\u0275\u0275i18n(13,11),_.\u0275\u0275elementEnd()()()),2&e&&(_.\u0275\u0275advance(7),_.\u0275\u0275property("ngForOf",n.namespaces),_.\u0275\u0275advance(1),_.\u0275\u0275property("ngIf",0===n.namespaces.length),_.\u0275\u0275advance(2),_.\u0275\u0275property("mat-dialog-close",n.namespaces))},directives:[T.yH,T.xw,E.uh,E.xY,b.i$,g.NgForOf,b.Tg,O.lW,$.Hw,E_.d,g.NgIf,E.H8,T.Wh,E.ZT],encapsulation:2}),t})();var H=i(7331),d_=i(266);function g_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-option",17),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=s.$implicit;_.\u0275\u0275property("value",e),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1(" ",e," ")}}function m_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-chip",18),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=s.$implicit;_.\u0275\u0275property("matTooltip",e)("selectable",!1)("removable",!1),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1(" ",e," ")}}function A_(t,s){1&t&&(_.\u0275\u0275elementStart(0,"mat-chip",19),_.\u0275\u0275i18n(1,20),_.\u0275\u0275elementEnd()),2&t&&_.\u0275\u0275property("disabled",!0)}function R_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-chip",21),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=_.\u0275\u0275nextContext();_.\u0275\u0275property("disabled",!0),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1("+ ",e.invisibleCount,"")}}var R=(()=>{return(t=R||(R={}))[t.XLarge=5]="XLarge",t[t.Large=3]="Large",t[t.Medium=2]="Medium",t[t.Small=2]="Small",R;var t})(),d=(()=>{return(t=d||(d={})).DefaultNamespace="defaultNamespace",t.FallbackList="fallbackList",d;var t})();let O_=(()=>{class t{constructor(e,n,o,a,l){this.namespaceService_=e,this.settingsHelperService_=n,this.dialog_=o,this.breakpointObserver_=a,this.builder_=l,this.Controls=d,this.namespaces=[],this.visibleNamespaces=0,this.endpoint_=U.wE.resource(U._z.namespace).list(),this.unsubscribe_=new G.x,this.visibleNamespacesMap=[[m.u3.XLarge,R.XLarge],[m.u3.Large,R.Large],[m.u3.Medium,R.Medium],[m.u3.Small,R.Small]]}get namespaceFallbackList_(){return this.settings_.namespaceFallbackList?this.settings_.namespaceFallbackList.filter(e=>e):[]}get formArrayNamespaceFallbackList_(){const e=this.form.get(d.FallbackList).value;return e?e.filter(n=>n):[]}get invisibleCount(){return this.settings_.namespaceFallbackList?this.settings_.namespaceFallbackList.length-this.visibleNamespaces:0}ngOnInit(){this.settings_=this.settingsHelperService_.settings,this.form=this.builder_.group({[d.DefaultNamespace]:this.builder_.control(""),[d.FallbackList]:this.builder_.array([])}),this.namespaceService_.get(this.endpoint_).pipe((0,l_.U)(e=>e.namespaces.map(n=>n.objectMeta.name))).pipe((0,A.R)(this.unsubscribe_)).subscribe(e=>this.namespaces=e),this.breakpointObserver_.observe([m.u3.Small,m.u3.Medium,m.u3.Large,m.u3.XLarge]).pipe((0,A.R)(this.unsubscribe_)).subscribe(e=>{const n=this.visibleNamespacesMap.find(o=>e.breakpoints[o[0]]);this.visibleNamespaces=n?n[1]:R.Small}),this.form.valueChanges.pipe((0,A.R)(this.unsubscribe_)).subscribe(this.onFormChange_.bind(this)),this.settingsHelperService_.onSettingsChange.pipe((0,A.R)(this.unsubscribe_)).subscribe(this.onSettingsChange_.bind(this))}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete()}add(){const e={data:{namespaces:this.namespaces.filter(n=>!this.settingsHelperService_.settings.namespaceFallbackList.includes(n))}};this.dialog_.open(S_,e).afterClosed().pipe((0,u.q)(1)).subscribe(n=>this.containsNamespace_(n)?null:this.addNamespace_(n))}edit(){this.dialog_.open(T_,{data:{namespaces:this.namespaceFallbackList_}}).afterClosed().pipe((0,u.q)(1)).subscribe(n=>{n&&(this.settingsHelperService_.settings={namespaceFallbackList:n})})}writeValue(e){!e||this.form.setValue(e)}registerOnChange(e){this.form.valueChanges.pipe((0,A.R)(this.unsubscribe_)).subscribe(e)}registerOnTouched(e){this.form.statusChanges.pipe((0,A.R)(this.unsubscribe_)).subscribe(e)}addNamespace_(e){this.form.get(d.FallbackList).push(this.builder_.control(e))}containsNamespace_(e){return!e||this.form.get(d.FallbackList).controls.map(n=>n.value).indexOf(e)>-1}onFormChange_(){this.settingsHelperService_.settings={defaultNamespace:this.form.get(d.DefaultNamespace).value,namespaceFallbackList:this.formArrayNamespaceFallbackList_}}onSettingsChange_(e){this.settings_=e,this.form.get(d.DefaultNamespace).setValue(this.settings_.defaultNamespace,{emitEvent:!1}),this.form.get(d.FallbackList).controls=this.namespaceFallbackList_.map(n=>this.builder_.control("")),this.form.get(d.FallbackList).reset(this.namespaceFallbackList_,{emitEvent:!1})}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(v.z),_.\u0275\u0275directiveInject(f),_.\u0275\u0275directiveInject(E.uw),_.\u0275\u0275directiveInject(m.Yg),_.\u0275\u0275directiveInject(S.FormBuilder))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-namespace-settings"]],features:[_.\u0275\u0275ProvidersFeature([{provide:S.NG_VALUE_ACCESSOR,useExisting:(0,_.forwardRef)(()=>t),multi:!0}])],decls:24,vars:14,consts:function(){let s,e,n,o,a,l;return s="Espacio de nombre por defecto",e="Espacio de nombre que deber\xEDa ser seleccionado por defecto despu\xE9s de iniciar sesi\xF3n.",n="Espacio de nombre",o="Listado de espacio de nombre de respaldo",a="Listado de espacios de nombres que deber\xEDan ser presentados al usuario sin privilegios de mostrar espacios de nombre.",l="A\xF1adir espacio de nombre...",[[3,"formGroup"],["key",s,"desc",e],["fxFlex",""],["formControlName","defaultNamespace","name","defaultNamespace","placeholder",n,"type","text","matInput","",3,"matAutocomplete"],["namespaceInput",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["key",o,"desc",a],["fxFlex","100","fxLayout","row"],["fxFlex","80","fxLayoutAlign"," center",1,"kd-namespace-chip-list",3,"formArrayName"],["style","max-width: 100px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; display: block",3,"matTooltip","selectable","removable",4,"ngFor","ngForOf"],[3,"disabled",4,"ngIf"],["fxFlex","","fxLayoutAlign"," center",3,"disabled",4,"ngIf"],["fxFlex","20","fxLayoutAlign","end"],["mat-icon-button","",2,"margin-right","0",3,"click"],[2,"font-size","20px"],["mat-icon-button","",3,"click"],[3,"value"],[2,"max-width","100px","text-overflow","ellipsis","white-space","nowrap","overflow","hidden","display","block",3,"matTooltip","selectable","removable"],[3,"disabled"],l,["fxFlex","","fxLayoutAlign"," center",3,"disabled"]]},template:function(e,n){if(1&e&&(_.\u0275\u0275elementStart(0,"form",0)(1,"kd-settings-entry",1)(2,"mat-form-field",2),_.\u0275\u0275element(3,"input",3,4),_.\u0275\u0275elementStart(5,"mat-autocomplete",null,5),_.\u0275\u0275template(7,g_,2,2,"mat-option",6),_.\u0275\u0275pipe(8,"kdFilterBy"),_.\u0275\u0275elementEnd()()(),_.\u0275\u0275elementStart(9,"kd-settings-entry",7)(10,"mat-form-field",2)(11,"div",8)(12,"mat-chip-list",9),_.\u0275\u0275template(13,m_,2,4,"mat-chip",10),_.\u0275\u0275pipe(14,"slice"),_.\u0275\u0275template(15,A_,2,1,"mat-chip",11),_.\u0275\u0275template(16,R_,2,2,"mat-chip",12),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(17,"div",13)(18,"button",14),_.\u0275\u0275listener("click",function(){return n.edit()}),_.\u0275\u0275elementStart(19,"mat-icon",15),_.\u0275\u0275text(20,"edit"),_.\u0275\u0275elementEnd()(),_.\u0275\u0275elementStart(21,"button",16),_.\u0275\u0275listener("click",function(){return n.add()}),_.\u0275\u0275elementStart(22,"mat-icon"),_.\u0275\u0275text(23,"add"),_.\u0275\u0275elementEnd()()()()()()()),2&e){const o=_.\u0275\u0275reference(4),a=_.\u0275\u0275reference(6);_.\u0275\u0275property("formGroup",n.form),_.\u0275\u0275advance(3),_.\u0275\u0275property("matAutocomplete",a),_.\u0275\u0275advance(4),_.\u0275\u0275property("ngForOf",_.\u0275\u0275pipeBind2(8,7,n.namespaces,o.value)),_.\u0275\u0275advance(5),_.\u0275\u0275property("formArrayName",n.Controls.FallbackList),_.\u0275\u0275advance(1),_.\u0275\u0275property("ngForOf",_.\u0275\u0275pipeBind3(14,10,n.form.get(n.Controls.FallbackList).value,0,n.visibleNamespaces)),_.\u0275\u0275advance(2),_.\u0275\u0275property("ngIf",0===n.form.get(n.Controls.FallbackList).value.length),_.\u0275\u0275advance(1),_.\u0275\u0275property("ngIf",n.invisibleCount>0)}},directives:[S.\u0275NgNoValidate,S.NgControlStatusGroup,S.FormGroupDirective,I,C.KE,T.yH,S.DefaultValueAccessor,M.Nt,p.ZL,S.NgControlStatus,S.FormControlName,p.XC,g.NgForOf,L.ey,T.xw,H.qn,T.Wh,S.FormArrayName,H.HS,d_.gM,g.NgIf,O.lW,$.Hw],pipes:[y.R,g.SlicePipe],styles:["kd-settings-entry[_ngcontent-%COMP%]{min-height:56px}"]}),t})();var u_=i(7314),C_=i(455);function p_(t,s){if(1&t){const e=_.\u0275\u0275getCurrentView();_.\u0275\u0275elementStart(0,"kd-card",1)(1,"div",2),_.\u0275\u0275i18n(2,3),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"div",4)(4,"p"),_.\u0275\u0275i18n(5,5),_.\u0275\u0275elementEnd(),_.\u0275\u0275element(6,"br"),_.\u0275\u0275elementStart(7,"form",6)(8,"kd-settings-entry",7)(9,"mat-form-field",8),_.\u0275\u0275element(10,"input",9),_.\u0275\u0275elementEnd()(),_.\u0275\u0275element(11,"kd-namespace-settings",10),_.\u0275\u0275elementStart(12,"kd-settings-entry",11)(13,"div",8),_.\u0275\u0275element(14,"mat-slider",12),_.\u0275\u0275elementStart(15,"div",13),_.\u0275\u0275text(16),_.\u0275\u0275elementEnd()()(),_.\u0275\u0275elementStart(17,"kd-settings-entry",14)(18,"div",8),_.\u0275\u0275element(19,"mat-slider",15),_.\u0275\u0275elementStart(20,"div",13),_.\u0275\u0275text(21),_.\u0275\u0275elementEnd()()(),_.\u0275\u0275elementStart(22,"kd-settings-entry",16)(23,"div",8),_.\u0275\u0275element(24,"mat-slider",15),_.\u0275\u0275elementStart(25,"span",13),_.\u0275\u0275text(26),_.\u0275\u0275elementEnd()()(),_.\u0275\u0275elementStart(27,"kd-settings-entry",17)(28,"div",8),_.\u0275\u0275element(29,"mat-slider",18),_.\u0275\u0275elementStart(30,"span",13),_.\u0275\u0275text(31),_.\u0275\u0275elementEnd()()(),_.\u0275\u0275elementStart(32,"kd-settings-entry",19)(33,"div",20),_.\u0275\u0275element(34,"mat-slide-toggle",21),_.\u0275\u0275elementEnd()(),_.\u0275\u0275element(35,"br")(36,"br"),_.\u0275\u0275elementStart(37,"button",22),_.\u0275\u0275listener("click",function(){return _.\u0275\u0275restoreView(e),_.\u0275\u0275nextContext().save()}),_.\u0275\u0275i18n(38,23),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(39,"button",24),_.\u0275\u0275listener("click",function(){return _.\u0275\u0275restoreView(e),_.\u0275\u0275nextContext().reload()}),_.\u0275\u0275i18n(40,25),_.\u0275\u0275elementEnd()()()()}if(2&t){const e=_.\u0275\u0275nextContext();_.\u0275\u0275property("initialized",e.isInitialized())("expandable",!0),_.\u0275\u0275advance(7),_.\u0275\u0275property("formGroup",e.form),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.ClusterName),_.\u0275\u0275advance(1),_.\u0275\u0275property("formControlName",e.Controls.NamespaceSettings),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.ItemsPerPage),_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate(e.settings.itemsPerPage),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.LabelsLimit),_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate(e.settings.labelsLimit),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.LogsAutorefreshInterval),_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate1(" ",e.settings.logsAutoRefreshTimeInterval," "),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.ResourceAutorefreshInterval),_.\u0275\u0275advance(2),_.\u0275\u0275textInterpolate1(" ",e.settings.resourceAutoRefreshTimeInterval," "),_.\u0275\u0275advance(3),_.\u0275\u0275property("formControlName",e.Controls.DisableAccessDeniedNotification),_.\u0275\u0275advance(3),_.\u0275\u0275property("disabled",!e.canSave())}}var r=(()=>{return(t=r||(r={})).ClusterName="clusterName",t.ItemsPerPage="itemsPerPage",t.LabelsLimit="labelsLimit",t.LogsAutorefreshInterval="logsAutorefreshInterval",t.ResourceAutorefreshInterval="resourceAutorefreshInterval",t.DisableAccessDeniedNotification="disableAccessDeniedNotification",t.NamespaceSettings="namespaceSettings",r;var t})();let G_=(()=>{class t{constructor(e,n,o,a,l,N){this.settingsService_=e,this.settingsHelperService_=n,this.namespaceService_=o,this.dialog_=a,this.title_=l,this.builder_=N,this.Controls=r,this.settings={},this.hasLoadError=!1,this.concurrentChangeErr_="settings changed since last reload",this.unsubscribe_=new G.x}get externalSettings_(){const e={};return e.itemsPerPage=this.settingsService_.getItemsPerPage(),e.labelsLimit=this.settingsService_.getLabelsLimit(),e.clusterName=this.settingsService_.getClusterName(),e.logsAutoRefreshTimeInterval=this.settingsService_.getLogsAutoRefreshTimeInterval(),e.resourceAutoRefreshTimeInterval=this.settingsService_.getResourceAutoRefreshTimeInterval(),e.disableAccessDeniedNotifications=this.settingsService_.getDisableAccessDeniedNotifications(),e.defaultNamespace=this.settingsService_.getDefaultNamespace(),e.namespaceFallbackList=this.settingsService_.getNamespaceFallbackList(),e}ngOnInit(){this.form=this.builder_.group({[r.ClusterName]:this.builder_.control(""),[r.ItemsPerPage]:this.builder_.control(0),[r.LabelsLimit]:this.builder_.control(0),[r.LogsAutorefreshInterval]:this.builder_.control(0),[r.ResourceAutorefreshInterval]:this.builder_.control(0),[r.DisableAccessDeniedNotification]:this.builder_.control(!1),[r.NamespaceSettings]:this.builder_.control("")}),this.load_(),this.form.valueChanges.pipe((0,A.R)(this.unsubscribe_)).subscribe(this.onFormChange_.bind(this)),this.settingsHelperService_.onSettingsChange.pipe((0,A.R)(this.unsubscribe_)).subscribe(e=>this.settings=e)}ngOnDestroy(){this.unsubscribe_.next(),this.unsubscribe_.complete()}isInitialized(){return this.settingsService_.isInitialized()}reload(){this.form.reset(),this.settingsHelperService_.reset(),this.load_()}canSave(){return!D().isEqual(this.settings,this.externalSettings_)}save(){this.settingsService_.save(this.settings).pipe((0,t_.b)(e=>{this.load_(),this.title_.update(),this.settingsService_.onSettingsUpdate.next()})).pipe((0,n_.K)(this.onSaveError_.bind(this))).pipe((0,u.q)(1)).subscribe(this.onSave_.bind(this))}onSave_(e){!0===e&&this.save(),this.reload()}onSaveError_(e){return e&&-1!==e.error.indexOf(this.concurrentChangeErr_)?this.dialog_.open(i_,{width:"420px"}).afterClosed():(0,e_.of)(!1)}load_(){this.settingsService_.canI().pipe((0,u.q)(1)).subscribe(e=>this.hasLoadError=!e),this.settingsService_.load(this.onLoad_.bind(this),this.onLoadError_.bind(this))}onLoad_(){this.settings=this.externalSettings_,this.settingsHelperService_.settings=this.settings,this.form.get(r.ItemsPerPage).setValue(this.settings.itemsPerPage,{emitEvent:!1}),this.form.get(r.LabelsLimit).setValue(this.settings.labelsLimit,{emitEvent:!1}),this.form.get(r.ClusterName).setValue(this.settings.clusterName,{emitEvent:!1}),this.form.get(r.LogsAutorefreshInterval).setValue(this.settings.logsAutoRefreshTimeInterval,{emitEvent:!1}),this.form.get(r.ResourceAutorefreshInterval).setValue(this.settings.resourceAutoRefreshTimeInterval,{emitEvent:!1}),this.form.get(r.DisableAccessDeniedNotification).setValue(this.settings.disableAccessDeniedNotifications,{emitEvent:!1})}onLoadError_(){this.hasLoadError=!0}onFormChange_(){this.settingsHelperService_.settings={itemsPerPage:this.form.get(r.ItemsPerPage).value,clusterName:this.form.get(r.ClusterName).value,disableAccessDeniedNotifications:this.form.get(r.DisableAccessDeniedNotification).value,labelsLimit:this.form.get(r.LabelsLimit).value,logsAutoRefreshTimeInterval:this.form.get(r.LogsAutorefreshInterval).value,resourceAutoRefreshTimeInterval:this.form.get(r.ResourceAutorefreshInterval).value}}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(s_.o),_.\u0275\u0275directiveInject(f),_.\u0275\u0275directiveInject(v.z),_.\u0275\u0275directiveInject(E.uw),_.\u0275\u0275directiveInject(o_.y),_.\u0275\u0275directiveInject(S.FormBuilder))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-global-settings"]],decls:1,vars:1,consts:function(){let s,e,n,o,a,l,N,X,K,k,J,z,w,V,j,Y,W;return s="Global settings",e="Global settings are stored in config map, so all of them are applied for every instance of the app.",n="Nom du cluster",o="Le nom du cluster appara\xEEt dans la barre de titre du navigateur s'il est d\xE9fini.",a="Nom du cluster",l="Elementos por p\xE1gina",N="N\xFAmero m\xE1ximo de elementos que se pueden mostrar en cada vista de listado.",X="L\xEDmite de etiquetas",K="N\xFAmero m\xE1ximo de etiquetas que son mostradas por defecto en la mayor\xEDa de las vistas\u263A.",k="Int\xE9rvalo de actualizaci\xF3n autom\xE1tica de logs",J="N\xFAmero de segundos entre cada actualizaci\xF3n autom\xE1tica de logs.",z="Int\xE9rvalo de actualizaci\xF3n autom\xE1tica de recursos",w="N\xFAmero de segundos entre cada refrescamiento de cada recurso. Establecer a 0 para deshabilitar",V="Deshabilitar las notificaciones de acceso denegado",j="Oculta todas las advertencias de acceso denegado en el panel de notificaciones",Y="Guardar",W="Reload",[[3,"initialized","expandable",4,"ngIf"],[3,"initialized","expandable"],["title",""],s,["content",""],e,[3,"formGroup"],["key",n,"desc",o],["fxFlex",""],["name","clusterName","placeholder",a,"type","text","matInput","",3,"formControlName"],[3,"formControlName"],["key",l,"desc",N],["color","primary","min","5","max","50","step","5","fxFlex","",3,"formControlName"],["fxFlexAlign"," center",1,"kd-slider-value","kd-muted"],["key",X,"desc",K],["color","primary","min","1","max","10","step","1","fxFlex","",3,"formControlName"],["key",k,"desc",J],["key",z,"desc",w],["color","primary","min","0","max","60","step","5","fxFlex","",3,"formControlName"],["key",V,"desc",j],["fxFlex","","fxLayoutAlign"," center"],["color","primary","name","disableAccessDeniedNotifications",3,"formControlName"],["color","primary","mat-raised-button","",3,"disabled","click"],Y,["type","button","color","primary","mat-raised-button","",3,"click"],W]},template:function(e,n){1&e&&_.\u0275\u0275template(0,p_,41,15,"kd-card",0),2&e&&_.\u0275\u0275property("ngIf",!n.hasLoadError)},directives:[g.NgIf,P.A,S.\u0275NgNoValidate,S.NgControlStatusGroup,S.FormGroupDirective,I,C.KE,T.yH,M.Nt,S.DefaultValueAccessor,S.NgControlStatus,S.FormControlName,O_,u_.pH,T.XD,T.Wh,C_.Rr,O.lW],styles:["kd-settings-entry[_ngcontent-%COMP%]{min-height:56px}"]}),t})();var F=i(4385),x=i(1324),f_=i(3733),I_=i(833),M_=i(4774),L_=i(5657);function h_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-option",8),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=s.$implicit;_.\u0275\u0275property("value",e.name),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1(" ",e.displayName," ")}}function D_(t,s){if(1&t&&(_.\u0275\u0275elementStart(0,"mat-option",8),_.\u0275\u0275text(1),_.\u0275\u0275elementEnd()),2&t){const e=s.$implicit;_.\u0275\u0275property("value",e.value),_.\u0275\u0275advance(1),_.\u0275\u0275textInterpolate1(" ",e.label," ")}}function B_(t,s){if(1&t){const e=_.\u0275\u0275getCurrentView();_.\u0275\u0275elementStart(0,"kd-settings-entry",11)(1,"mat-form-field",6)(2,"mat-select",12),_.\u0275\u0275listener("ngModelChange",function(o){return _.\u0275\u0275restoreView(e),_.\u0275\u0275nextContext().onLanguageSelected(o)})("ngModelChange",function(o){return _.\u0275\u0275restoreView(e),_.\u0275\u0275nextContext().selectedLanguage=o}),_.\u0275\u0275template(3,D_,2,2,"mat-option",9),_.\u0275\u0275elementEnd()()()}if(2&t){const e=_.\u0275\u0275nextContext();_.\u0275\u0275advance(2),_.\u0275\u0275property("ngModel",e.selectedLanguage),_.\u0275\u0275advance(1),_.\u0275\u0275property("ngForOf",e.languages)}}let v_=(()=>{class t{constructor(e,n,o,a,l){this.settings_=e,this.theme_=n,this.cookies_=o,this.document_=a,this.appConfig_=l,this.settings={},this.languages=[]}ngOnInit(){this.settings=this.settings_.get(),this.languages=this.appConfig_.supportedLanguages,this.selectedLanguage=this.cookies_.get(this.appConfig_.languageCookieName)||this.appConfig_.defaultLanguage,this.themes=this.theme_.themes,this.selectedTheme=this.theme_.theme,this.systemTheme=x.f.SystemTheme}onThemeChange(){this.settings.theme=this.selectedTheme,this.settings_.handleThemeChange(this.settings.theme)}onLanguageSelected(e){this.cookies_.set(this.appConfig_.languageCookieName,e),this.document_.location.reload()}isProdMode(){return f_.N.production}}return t.\u0275fac=function(e){return new(e||t)(_.\u0275\u0275directiveInject(M_.G),_.\u0275\u0275directiveInject(x.f),_.\u0275\u0275directiveInject(L_.N),_.\u0275\u0275directiveInject(g.DOCUMENT),_.\u0275\u0275directiveInject(I_.ED))},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-local-settings"]],viewQuery:function(e,n){if(1&e&&_.\u0275\u0275viewQuery(F.gD,7),2&e){let o;_.\u0275\u0275queryRefresh(o=_.\u0275\u0275loadQuery())&&(n.select_=o.first)}},decls:14,vars:5,consts:function(){let s,e,n,o,a,l;return s="Local settings",e=" Los ajustos locales se guardan en las cookies del navegador, as\xED que no se sincronizan entre multiples dispositivos. Los cambios se aplican en cada cambio. ",n="Tema",o="Elige un tema de color para el tablero",a="Idioma",l="Elige el idioma del tablero",[[3,"expandable"],["title",""],s,["content",""],e,["key",n,"desc",o],["fxFlex",""],["fxFlex","",3,"value","valueChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["key",a,"desc",l,4,"ngIf"],["key",a,"desc",l],[3,"ngModel","ngModelChange"]]},template:function(e,n){1&e&&(_.\u0275\u0275elementStart(0,"kd-card",0)(1,"div",1),_.\u0275\u0275i18n(2,2),_.\u0275\u0275elementEnd(),_.\u0275\u0275elementStart(3,"div",3)(4,"p"),_.\u0275\u0275i18n(5,4),_.\u0275\u0275elementEnd(),_.\u0275\u0275element(6,"br"),_.\u0275\u0275elementStart(7,"kd-settings-entry",5)(8,"mat-form-field",6)(9,"mat-select",7),_.\u0275\u0275listener("valueChange",function(a){return n.selectedTheme=a})("valueChange",function(){return n.onThemeChange()}),_.\u0275\u0275elementStart(10,"mat-option",8),_.\u0275\u0275text(11,"System"),_.\u0275\u0275elementEnd(),_.\u0275\u0275template(12,h_,2,2,"mat-option",9),_.\u0275\u0275elementEnd()()(),_.\u0275\u0275template(13,B_,4,2,"kd-settings-entry",10),_.\u0275\u0275elementEnd()()),2&e&&(_.\u0275\u0275property("expandable",!0),_.\u0275\u0275advance(9),_.\u0275\u0275property("value",n.selectedTheme),_.\u0275\u0275advance(1),_.\u0275\u0275property("value",n.systemTheme),_.\u0275\u0275advance(2),_.\u0275\u0275property("ngForOf",n.themes),_.\u0275\u0275advance(1),_.\u0275\u0275property("ngIf",n.isProdMode()))},directives:[P.A,I,C.KE,T.yH,F.gD,L.ey,g.NgForOf,g.NgIf,S.NgControlStatus,S.NgModel],styles:[".mat-button-toggle-group[_ngcontent-%COMP%]{border:0}.mat-button-toggle-group[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]{border-radius:4px;margin-right:8px}"]}),t})();const P_={path:"",component:(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=_.\u0275\u0275defineComponent({type:t,selectors:[["kd-settings"]],decls:2,vars:0,template:function(e,n){1&e&&_.\u0275\u0275element(0,"kd-global-settings")(1,"kd-local-settings")},directives:[G_,v_],encapsulation:2}),t})(),data:{breadcrumb:__.SX.Settings}};let U_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=_.\u0275\u0275defineInjector({imports:[[B.RouterModule.forChild([P_])],B.RouterModule]}),t})(),y_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=_.\u0275\u0275defineInjector({providers:[f],imports:[[Q.m,Z.K,U_]]}),t})()}}]);