webpackJsonp([35],{736:function(n,t,e){"use strict";var d=e(0),o=function(){function FundAddComponent(){}return FundAddComponent=__decorate([d.Component({selector:"fund-add",template:e(927)}),__metadata("design:paramtypes",[])],FundAddComponent)}();t.FundAddComponent=o},737:function(n,t,e){"use strict";var d=e(0),o=e(50),u=e(87),r=e(153),a=e(72),i=e(736);t.routes=[{path:"",component:i.FundAddComponent,children:[{path:"",redirectTo:"index"},{path:"index",loadChildren:function(){return e.e(8).then(e.bind(null,727)).then(function(n){return n.default})}},{path:"create",loadChildren:function(){return e.e(17).then(e.bind(null,723)).then(function(n){return n.default})}}]}];var l=function(){function FundAddModule(){}return FundAddModule.routes=t.routes,FundAddModule=__decorate([d.NgModule({declarations:[i.FundAddComponent],imports:[u.HttpModule,r.FormsModule,a.CommonModule,o.RouterModule.forChild(t.routes)],providers:[]}),__metadata("design:paramtypes",[])],FundAddModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=l},927:function(n,t){n.exports='<section class="content">\n \t<div class="row">\n   \t<div class="col-md-12">\n\t    <div class="box bg-transparent">\n\t    \t<!-- content -->\n\t    \t<router-outlet></router-outlet>\n\t    </div>\n   \t</div>\n\t</div>\n</section>'}});