webpackJsonp([36],{755:function(t,n,e){"use strict";var o=e(0),d=function(){function FundWithdrawalComponent(){}return FundWithdrawalComponent=__decorate([o.Component({selector:"fund-withdrawal",template:e(941)}),__metadata("design:paramtypes",[])],FundWithdrawalComponent)}();n.FundWithdrawalComponent=d},756:function(t,n,e){"use strict";var o=e(0),d=e(50),r=e(87),a=e(153),u=e(62),i=e(755);n.routes=[{path:"",component:i.FundWithdrawalComponent,children:[{path:"",redirectTo:"index"},{path:"index",loadChildren:function(){return e.e(16).then(e.bind(null,751)).then(function(t){return t.default})}},{path:"create",loadChildren:function(){return e.e(7).then(e.bind(null,741)).then(function(t){return t.default})}}]}];var l=function(){function FundWithdrawalModule(){}return FundWithdrawalModule.routes=n.routes,FundWithdrawalModule=__decorate([o.NgModule({declarations:[i.FundWithdrawalComponent],imports:[r.HttpModule,a.FormsModule,u.CommonModule,d.RouterModule.forChild(n.routes)],providers:[]}),__metadata("design:paramtypes",[])],FundWithdrawalModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=l},941:function(t,n){t.exports='<section class="content">\n \t<div class="row">\n   \t<div class="col-md-12">\n\t    <div class="box bg-transparent">\n\t    \t<!-- content -->\n\t    \t<router-outlet></router-outlet>\n\t    </div>\n   \t</div>\n\t</div>\n</section>'}});