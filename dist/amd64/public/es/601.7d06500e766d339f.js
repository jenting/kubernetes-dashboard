(self.webpackChunkkubernetes_dashboard=self.webpackChunkkubernetes_dashboard||[]).push([[601],{1601:(D,h,o)=>{"use strict";o.r(h),o.d(h,{LogsModule:()=>De});var O=o(6895),R=o(1028),P=o(6042),N=o(4793),U=o(126),G=o(3456),a=o(529),p=(()=>{return(_=p||(p={})).LoadStart="beginning",_.LoadEnd="end",_.TimestampOldest="oldest",_.TimestampNewest="newest",p;var _})(),E=o(5938),l=o(4327),s=o(6758),m=o(2722),e=o(4650),g=o(290),$=o(3162),v=o(4859),L=o(3205);function B(_,i){1&_&&(e.\u0275\u0275elementStart(0,"h2",3),e.\u0275\u0275i18n(1,4),e.\u0275\u0275elementEnd())}function I(_,i){1&_&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275i18n(1,7),e.\u0275\u0275elementEnd())}function A(_,i){1&_&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275i18n(1,8),e.\u0275\u0275elementEnd())}function X(_,i){if(1&_&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div"),e.\u0275\u0275i18n(2,5),e.\u0275\u0275pipe(3,"kdMemory"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"mat-progress-bar",6),e.\u0275\u0275template(5,I,2,0,"div",2),e.\u0275\u0275template(6,A,2,0,"div",2),e.\u0275\u0275elementContainerEnd()),2&_){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(3,4,t.loaded)),e.\u0275\u0275i18nApply(2),e.\u0275\u0275advance(1),e.\u0275\u0275property("mode",t.getDownloadMode()),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.finished),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.finished)}}function J(_,i){1&_&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",9)(2,"h3"),e.\u0275\u0275i18n(3,10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"span"),e.\u0275\u0275i18n(5,11),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementContainerEnd())}function z(_,i){if(1&_){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"button",12),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().save()}),e.\u0275\u0275i18n(2,13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",14),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().abort()}),e.\u0275\u0275i18n(4,15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&_){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",!t.finished)}}function W(_,i){if(1&_){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",16)(2,"button",14),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().abort()}),e.\u0275\u0275i18n(3,17),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementContainerEnd()}}let j=(()=>{class _{constructor(t,n,r,S){this._dialogRef=t,this.data=n,this.logService=r,this.http_=S,this.loaded=0,this.finished=!1,this._unsubscribe=new s.x,this.http_.request(new a.aW("GET",`api/v1/log/file/${n.namespace}/${n.pod}/${n.container}`,{},{reportProgress:!0,responseType:"blob",params:new a.LE({fromObject:this._logOptions})})).pipe((0,m.R)(this._unsubscribe)).subscribe(c=>{c.type===a.dt.DownloadProgress?this.loaded=c.loaded:c instanceof a.Zn&&(this.finished=!0,this._result=new Blob([c.body],{type:"text/plan"}))},c=>this._error=c.status)}get _logOptions(){return{previous:this.logService.getPrevious(),timestamps:this.logService.getShowTimestamp()}}ngOnDestroy(){this._unsubscribe.next(),this._unsubscribe.complete()}hasForbiddenError(){return void 0!==this._error&&403===this._error}save(){(0,l.saveAs)(this._result,this.logService.getLogFileName(this.data.pod,this.data.container)),this._dialogRef.close()}abort(){this._dialogRef.close()}getDownloadMode(){return this.finished?"determinate":"indeterminate"}}return _.\u0275fac=function(t){return new(t||_)(e.\u0275\u0275directiveInject(E.so),e.\u0275\u0275directiveInject(E.WI),e.\u0275\u0275directiveInject(g.$),e.\u0275\u0275directiveInject(a.eN))},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["kd-logs-download-dialog"]],decls:7,vars:5,consts:function(){let i,t,n,r,S,T,c,f,C;return i="Download logs file",t="Taille : " + "\ufffd0\ufffd" + " o",n="Preparing file to download...",r="File is ready to download!",S="Prohibido (403)",T="No tienes los permisos requeridos para acceder a este recurso.",c="Guardar",f="Abortar",C="Cerrar",[["mat-dialog-title","",4,"ngIf"],[1,"kd-dialog-text"],[4,"ngIf"],["mat-dialog-title",""],i,t,["value","100",1,"kd-download-progress-bar",3,"mode"],n,r,[1,"kd-download-info"],S,T,["mat-button","","color","primary",3,"disabled","click"],c,["mat-button","","color","primary",3,"click"],f,[1,"kd-download-error-button"],C]},template:function(t,n){1&t&&(e.\u0275\u0275template(0,B,2,0,"h2",0),e.\u0275\u0275elementStart(1,"mat-dialog-content",1),e.\u0275\u0275template(2,X,7,6,"ng-container",2),e.\u0275\u0275template(3,J,6,0,"ng-container",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"mat-dialog-actions"),e.\u0275\u0275template(5,z,5,1,"ng-container",2),e.\u0275\u0275template(6,W,4,0,"ng-container",2),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("ngIf",!n.hasForbiddenError()),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!n.hasForbiddenError()),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.hasForbiddenError()),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!n.hasForbiddenError()),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.hasForbiddenError()))},directives:[O.NgIf,E.uh,E.xY,$.pW,E.H8,v.lW],pipes:[L.F],styles:[".kd-download-progress-bar[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:20px}mat-dialog-actions[_ngcontent-%COMP%]{margin-top:8px}"]}),_})();var V=o(5595),b=o(5387),Z=o(6451),Q=o(9646),Y=o(2805),w=o(3900),q=o(8505),x=o(5698),ee=o(7347),F=o(1576),te=o(9549),_e=o(4385),H=o(4006),k=o(3238),ne=o(266),oe=o(7392),y=o(8255),ie=o(5829),re=o(6907),le=o(147);let se=(()=>{class _{constructor(){this._nonBreakingSpace=160}transform(t){return t?.toString().replace(/\s/g,String.fromCharCode(this._nonBreakingSpace))}}return _.\u0275fac=function(t){return new(t||_)},_.\u0275pipe=e.\u0275\u0275definePipe({name:"kdUntrim",type:_,pure:!0}),_})();var ae=o(4481),ce=o.n(ae);let de=(()=>{class _{transform(t){return ce()(t)}}return _.\u0275fac=function(t){return new(t||_)},_.\u0275pipe=e.\u0275\u0275definePipe({name:"kdStripAnsi",type:_,pure:!0}),_})();const ge=["logViewContainer"];function Se(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"mat-option",27),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&_){const t=i.$implicit;e.\u0275\u0275property("value",t),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t," ")}}function ue(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"mat-optgroup",26),e.\u0275\u0275template(1,Se,2,2,"mat-option",7),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==t.logSources?null:t.logSources.containerNames)}}function me(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"mat-option",27),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&_){const t=i.$implicit;e.\u0275\u0275property("value",t),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t," ")}}function pe(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"mat-optgroup",28),e.\u0275\u0275template(1,me,2,2,"mat-option",7),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==t.logSources?null:t.logSources.initContainerNames)}}function Ee(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"mat-option",27),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&_){const t=i.$implicit;e.\u0275\u0275property("value",t),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t," ")}}const Te=function(_,i){return{"kd-logs-element-compact":_,"kd-logs-element":i}};function Oe(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"div",29)(1,"span"),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"kdUntrim"),e.\u0275\u0275pipe(4,"kdStripAnsi"),e.\u0275\u0275elementEnd()()),2&_){const t=i.$implicit,n=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(6,Te,n.logService.getCompact(),!n.logService.getCompact())),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,2,e.\u0275\u0275pipeBind1(4,4,t)))}}function Ne(_,i){if(1&_&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275i18nStart(1,30),e.\u0275\u0275element(2,"kd-date",31)(3,"kd-date",31),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd()),2&_){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("date",null==t.podLogs?null:t.podLogs.info.fromDate),e.\u0275\u0275advance(1),e.\u0275\u0275property("date",null==t.podLogs?null:t.podLogs.info.toDate)}}const fe=function(_,i){return{"kd-logs-text-color-invert":_,"kd-logs-text-color":i}},Re={path:":resourceNamespace/:resourceName/:resourceType",component:(()=>{class _{constructor(t,n,r,S,T,c){this.logService=t,this.activatedRoute_=n,this.settingsService_=r,this.dialog_=S,this.notifications_=T,this._router=c,this.totalItems=0,this.itemsPerPage=10,this.refreshUnsubscribe_=new s.x,this.logsPerView=100,this.maxLogSize=2e9,this.isLoading=!0,this.refreshInterval=this.settingsService_.getLogsAutoRefreshTimeInterval();const f=this.activatedRoute_.snapshot.params.resourceNamespace,M=this.activatedRoute_.snapshot.queryParams.container;t.getResource(`source/${f}/${this.activatedRoute_.snapshot.params.resourceName}/${this.activatedRoute_.snapshot.params.resourceType}`).pipe((0,w.w)(d=>(this.logSources=d,this.pod=d.podNames[0],this.container=M||d.containerNames[0],this.appendContainerParam_(),this.logService.getResource(`${f}/${this.pod}/${this.container}`)))).pipe((0,q.b)(d=>this.logService.getAutoRefresh()?this.toggleIntervalFunction_():void 0)).pipe((0,x.q)(1)).subscribe(d=>{this.updateUiModel_(d),this.isLoading=!1})}ngOnDestroy(){this._router.navigate([],{queryParams:{container:null},queryParamsHandling:"merge"}),this.refreshUnsubscribe_.next(),this.refreshUnsubscribe_.complete()}onContainerChange(){this.appendContainerParam_(),this.loadNewest()}loadOldest(){this.loadView_(p.LoadStart,p.TimestampOldest,0,-this.maxLogSize-this.logsPerView,-this.maxLogSize,this.scrollToTop_.bind(this))}loadNewest(){this.loadView_(p.LoadEnd,p.TimestampNewest,0,this.maxLogSize,this.maxLogSize+this.logsPerView,this.scrollToBottom_.bind(this))}loadOlder(){this.loadView_(this.currentSelection.logFilePosition,this.currentSelection.referencePoint.timestamp,this.currentSelection.referencePoint.lineNum,this.currentSelection.offsetFrom-this.logsPerView,this.currentSelection.offsetFrom,this.scrollToBottom_.bind(this))}loadNewer(){this.loadView_(this.currentSelection.logFilePosition,this.currentSelection.referencePoint.timestamp,this.currentSelection.referencePoint.lineNum,this.currentSelection.offsetTo,this.currentSelection.offsetTo+this.logsPerView,this.scrollToTop_.bind(this))}onTextColorChange(){this.logService.toggleInverted()}onFontSizeChange(){this.logService.toggleCompact()}onShowTimestamp(){this.logService.toggleShowTimestamp(),this.logsSet=this.formatAllLogs_(this.podLogs.logs)}onPreviousChange(){this.logService.togglePrevious(),this.loadNewest()}toggleLogAutoRefresh(){this.logService.toggleAutoRefresh(),this.toggleIntervalFunction_()}downloadLog(){const t={data:{pod:this.pod,container:this.container,namespace:this.activatedRoute_.snapshot.paramMap.get("resourceNamespace")}};this.dialog_.open(j,t)}onLogsScroll(){this.logService.setFollowing(this.isScrolledBottom_())}updateUiModel_(t){this.podLogs=t,this.currentSelection=t.selection,this.logsSet=this.formatAllLogs_(t.logs),t.info.truncated&&this.notifications_.push("The middle part of the log file cannot be loaded, because it is too big.",b.qf.error),this.logService.getFollowing()&&setTimeout(()=>{this.scrollToBottom_()})}formatAllLogs_(t){return 0===t.length&&(t=[{timestamp:"0",content:"The selected container has not logged any messages yet."}]),t.map(n=>this.formatLine_(n))}formatLine_(t){return this.logService.getShowTimestamp()?`${new Date(t.timestamp).toISOString()} | ${t.content}`:t.content}appendContainerParam_(){this._router.navigate([],{queryParams:{container:this.container},queryParamsHandling:"merge"})}loadView_(t,n,r,S,T,c){const f=this.activatedRoute_.snapshot.params.resourceNamespace,C=(new a.LE).set("logFilePosition",t).set("referenceTimestamp",n).set("referenceLineNum",`${r}`).set("offsetFrom",`${S}`).set("offsetTo",`${T}`).set("previous",`${this.logService.getPrevious()}`);this.logService.getResource(`${f}/${this.pod}/${this.container}`,C).pipe((0,x.q)(1)).subscribe(u=>{this.updateUiModel_(u),c&&c()})}toggleIntervalFunction_(){this.logService.getAutoRefresh()?(0,Z.T)(this.settingsService_.onSettingsUpdate,(0,Q.of)(!0)).pipe((0,w.w)(t=>{this.refreshInterval=this.settingsService_.getLogsAutoRefreshTimeInterval();const n=1e3*this.refreshInterval;return(0,Y.H)(0,0===n?void 0:n)})).pipe((0,m.R)(this.refreshUnsubscribe_)).subscribe(t=>this.loadView_(p.LoadEnd,p.TimestampNewest,0,this.maxLogSize,this.maxLogSize+this.logsPerView)):this.refreshUnsubscribe_.next()}scrollToBottom_(){this.scrollTo_("BOTTOM")}scrollToTop_(){this.scrollTo_("TOP")}isScrolledBottom_(){const{nativeElement:t}=this.logViewContainer_;return t.scrollHeight<=t.scrollTop+t.clientHeight}scrollTo_(t){const{nativeElement:n}=this.logViewContainer_;if(!n)return;let r;switch(t){case"TOP":r=0;break;case"BOTTOM":r=n.scrollHeight;break;default:return}n.scrollTo({top:r,left:0,behavior:"smooth"})}}return _.\u0275fac=function(t){return new(t||_)(e.\u0275\u0275directiveInject(g.$),e.\u0275\u0275directiveInject(N.ActivatedRoute),e.\u0275\u0275directiveInject(V.o),e.\u0275\u0275directiveInject(E.uw),e.\u0275\u0275directiveInject(b.TF),e.\u0275\u0275directiveInject(N.Router))},_.\u0275cmp=e.\u0275\u0275defineComponent({type:_,selectors:[["kd-logs"]],viewQuery:function(t,n){if(1&t&&e.\u0275\u0275viewQuery(ge,7),2&t){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(n.logViewContainer_=r.first)}},decls:68,vars:20,consts:function(){let i,t,n,r,S,T,c,f,C,u,M;return i="Logs de",t="Contenedores",n="Contenedores de inicializaci\xF3n",r="en",S="Descargar logs",T="Invertir colores",c="Reducir tama\xF1o de fuente",f="Mostrar marcas de tiempo",C="Refrescar auto (cada " + "\ufffd0\ufffd" + " s.)",u="Mostrar Logs anteriores",M=" Logs desde " + "\ufffd#2\ufffd" + "" + "[\ufffd/#2\ufffd|\ufffd/#3\ufffd]" + " a " + "\ufffd#3\ufffd" + "" + "[\ufffd/#2\ufffd|\ufffd/#3\ufffd]" + " UTC ",M=e.\u0275\u0275i18nPostprocess(M),[["role","inner-content",3,"expandable"],["title","","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxFlex","100"],i,[3,"ngModel","ngModelChange","selectionChange"],["label",t,4,"ngIf"],["label",n,4,"ngIf"],r,[3,"value",4,"ngFor","ngForOf"],["fxFlex",""],["fxFlexAlign","center end","mat-icon-button","","matTooltip",S,3,"click"],["fxLayoutAlign","center end","mat-icon-button","",3,"matMenuTriggerFor"],["content","",1,"kd-log-line-container",3,"ngClass","scroll"],["logViewContainer",""],["kdLoadingSpinner","",3,"isLoading"],["fxFlex","","fxLayout","column","fxLayoutGap","2px"],[3,"ngClass",4,"ngFor","ngForOf"],["footer","","fxFlex","","fxLayoutAlign","start center","fxLayout","row",1,"footer"],[4,"ngIf"],["mat-icon-button","",3,"click"],["kdMenu","matMenu"],["mat-menu-item","",3,"click"],T,c,f,C,u,["label",t],[3,"value"],["label",n],[3,"ngClass"],M,["format","short",3,"date"]]},template:function(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"kd-card",0)(1,"div",1)(2,"span"),e.\u0275\u0275i18n(3,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"mat-form-field")(5,"mat-select",3),e.\u0275\u0275listener("ngModelChange",function(S){return n.container=S})("selectionChange",function(){return n.onContainerChange()}),e.\u0275\u0275template(6,ue,2,1,"mat-optgroup",4),e.\u0275\u0275template(7,pe,2,1,"mat-optgroup",5),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"span"),e.\u0275\u0275i18n(9,6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"mat-form-field")(11,"mat-select",3),e.\u0275\u0275listener("ngModelChange",function(S){return n.pod=S})("selectionChange",function(){return n.loadNewest()}),e.\u0275\u0275template(12,Ee,2,2,"mat-option",7),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(13,"div",8),e.\u0275\u0275elementStart(14,"button",9),e.\u0275\u0275listener("click",function(){return n.downloadLog()}),e.\u0275\u0275elementStart(15,"mat-icon"),e.\u0275\u0275text(16,"file_download"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(17,"button",10)(18,"mat-icon"),e.\u0275\u0275text(19,"more_vert"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(20,"div",11,12),e.\u0275\u0275listener("scroll",function(){return n.onLogsScroll()}),e.\u0275\u0275element(22,"div",13),e.\u0275\u0275elementStart(23,"div",14),e.\u0275\u0275template(24,Oe,5,9,"div",15),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(25,"div",16),e.\u0275\u0275template(26,Ne,4,2,"div",17),e.\u0275\u0275element(27,"div",8),e.\u0275\u0275elementStart(28,"div")(29,"button",18),e.\u0275\u0275listener("click",function(){return n.loadOldest()}),e.\u0275\u0275elementStart(30,"mat-icon"),e.\u0275\u0275text(31,"first_page"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(32,"button",18),e.\u0275\u0275listener("click",function(){return n.loadOlder()}),e.\u0275\u0275elementStart(33,"mat-icon"),e.\u0275\u0275text(34,"chevron_left"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(35,"button",18),e.\u0275\u0275listener("click",function(){return n.loadNewer()}),e.\u0275\u0275elementStart(36,"mat-icon"),e.\u0275\u0275text(37,"chevron_right"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(38,"button",18),e.\u0275\u0275listener("click",function(){return n.loadNewest()}),e.\u0275\u0275elementStart(39,"mat-icon"),e.\u0275\u0275text(40,"last_page"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(41,"mat-menu",null,19)(43,"button",20),e.\u0275\u0275listener("click",function(){return n.onTextColorChange()}),e.\u0275\u0275elementStart(44,"mat-icon"),e.\u0275\u0275text(45),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(46,"span"),e.\u0275\u0275i18n(47,21),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(48,"button",20),e.\u0275\u0275listener("click",function(){return n.onFontSizeChange()}),e.\u0275\u0275elementStart(49,"mat-icon"),e.\u0275\u0275text(50),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(51,"span"),e.\u0275\u0275i18n(52,22),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(53,"button",20),e.\u0275\u0275listener("click",function(){return n.onShowTimestamp()}),e.\u0275\u0275elementStart(54,"mat-icon"),e.\u0275\u0275text(55),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(56,"span"),e.\u0275\u0275i18n(57,23),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(58,"button",20),e.\u0275\u0275listener("click",function(){return n.toggleLogAutoRefresh()}),e.\u0275\u0275elementStart(59,"mat-icon"),e.\u0275\u0275text(60),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(61,"span"),e.\u0275\u0275i18n(62,24),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(63,"button",20),e.\u0275\u0275listener("click",function(){return n.onPreviousChange()}),e.\u0275\u0275elementStart(64,"mat-icon"),e.\u0275\u0275text(65),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(66,"span"),e.\u0275\u0275i18n(67,25),e.\u0275\u0275elementEnd()()()),2&t){const r=e.\u0275\u0275reference(42);e.\u0275\u0275property("expandable",!1),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngModel",n.container),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.logSources||null==n.logSources.containerNames?null:n.logSources.containerNames.length)>0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.logSources||null==n.logSources.initContainerNames?null:n.logSources.initContainerNames.length)>0),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",n.pod),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==n.logSources?null:n.logSources.podNames),e.\u0275\u0275advance(5),e.\u0275\u0275property("matMenuTriggerFor",r),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(17,fe,null==n.logService?null:n.logService.getInverted(),!(null!=n.logService&&n.logService.getInverted()))),e.\u0275\u0275advance(2),e.\u0275\u0275property("isLoading",n.isLoading),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",n.logsSet),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",(null==n.logsSet?null:n.logsSet.length)>1),e.\u0275\u0275advance(19),e.\u0275\u0275textInterpolate(null!=n.logService&&n.logService.getInverted()?"check_box":"check_box_outline_blank"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.logService.getCompact()?"check_box":"check_box_outline_blank"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.logService.getShowTimestamp()?"check_box":"check_box_outline_blank"),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.logService.getAutoRefresh()?"check_box":"check_box_outline_blank"),e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(n.refreshInterval),e.\u0275\u0275i18nApply(62),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(n.logService.getPrevious()?"check_box":"check_box_outline_blank")}},directives:[ee.A,F.xw,F.Wh,F.SQ,F.yH,te.KE,_e.gD,H.NgControlStatus,H.NgModel,O.NgIf,k.Nv,O.NgForOf,k.ey,v.lW,F.XD,ne.gM,oe.Hw,y.p6,O.NgClass,ie.oO,re.T,le.I,y.VK,y.OP],pipes:[se,de],styles:[".kd-logs-element-compact[_ngcontent-%COMP%], .kd-logs-element[_ngcontent-%COMP%]{font-family:Roboto Mono Regular,monospace;padding:0 16px;word-wrap:break-word}.kd-logs-element[_ngcontent-%COMP%]{font-size:14px}.kd-logs-element-compact[_ngcontent-%COMP%]{font-size:12px}.kd-log-line-container[_ngcontent-%COMP%]{height:100%;overflow-y:auto}.kd-log-line-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}kd-card[_ngcontent-%COMP%]{display:flex;max-height:100%;min-height:max(100%,550px)}.footer[_ngcontent-%COMP%]{font-size:14px;padding:0 16px}"]}),_})(),data:{breadcrumb:G.SX.Logs,parent:U.WX}};let Ce=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[N.RouterModule.forChild([Re])],N.RouterModule]}),_})(),De=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.\u0275\u0275defineNgModule({type:_}),_.\u0275inj=e.\u0275\u0275defineInjector({imports:[[O.CommonModule,P.m,R.K,Ce]]}),_})()},4167:D=>{"use strict";D.exports=({onlyFirst:h=!1}={})=>{const o=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(o,h?void 0:"g")}},4327:function(D,h){var R;void 0!==(R=function(){"use strict";function N(l,s,m){var e=new XMLHttpRequest;e.open("GET",l),e.responseType="blob",e.onload=function(){E(e.response,s,m)},e.onerror=function(){console.error("could not download file")},e.send()}function U(l){var s=new XMLHttpRequest;s.open("HEAD",l,!1);try{s.send()}catch{}return 200<=s.status&&299>=s.status}function G(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(s)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,p=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),E=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!p?function(l,s,m){var e=a.URL||a.webkitURL,g=document.createElement("a");g.download=s=s||l.name||"download",g.rel="noopener","string"==typeof l?(g.href=l,g.origin===location.origin?G(g):U(g.href)?N(l,s,m):G(g,g.target="_blank")):(g.href=e.createObjectURL(l),setTimeout(function(){e.revokeObjectURL(g.href)},4e4),setTimeout(function(){G(g)},0))}:"msSaveOrOpenBlob"in navigator?function(l,s,m){if(s=s||l.name||"download","string"!=typeof l)navigator.msSaveOrOpenBlob(function P(l,s){return typeof s>"u"?s={autoBom:!1}:"object"!=typeof s&&(console.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\ufeff",l],{type:l.type}):l}(l,m),s);else if(U(l))N(l,s,m);else{var e=document.createElement("a");e.href=l,e.target="_blank",setTimeout(function(){G(e)})}}:function(l,s,m,e){if((e=e||open("","_blank"))&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof l)return N(l,s,m);var g="application/octet-stream"===l.type,$=/constructor/i.test(a.HTMLElement)||a.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||g&&$||p)&&typeof FileReader<"u"){var L=new FileReader;L.onloadend=function(){var A=L.result;A=v?A:A.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=A:location=A,e=null},L.readAsDataURL(l)}else{var B=a.URL||a.webkitURL,I=B.createObjectURL(l);e?e.location=I:location.href=I,e=null,setTimeout(function(){B.revokeObjectURL(I)},4e4)}});a.saveAs=E.saveAs=E,D.exports=E}.apply(h,[]))&&(D.exports=R)},4481:(D,h,o)=>{"use strict";const O=o(4167);D.exports=R=>"string"==typeof R?R.replace(O(),""):R}}]);