webpackJsonp([39],{750:function(n,e,t){"use strict";var d=t(0),o=function(){function FundAddComponent(){}return FundAddComponent=__decorate([d.Component({selector:"fund-add",template:t(902)}),__metadata("design:paramtypes",[])],FundAddComponent)}();e.FundAddComponent=o},760:function(n,e,t){"use strict";var d=t(0),o=t(62),u=t(109),r=t(154),i=t(73),l=t(750);e.routes=[{path:"",component:l.FundAddComponent,children:[{path:"",redirectTo:"index"},{path:"index",loadChildren:function(){return t.e(36).then(t.bind(null,759)).then(function(n){return n.default})}},{path:"create",loadChildren:function(){return t.e(16).then(t.bind(null,755)).then(function(n){return n.default})}},{path:"confirm/:id",loadChildren:function(){return t.e(38).then(t.bind(null,752)).then(function(n){return n.default})}},{path:"detail/:id",loadChildren:function(){return t.e(37).then(t.bind(null,757)).then(function(n){return n.default})}}]}];var a=function(){function FundAddModule(){}return FundAddModule.routes=e.routes,FundAddModule=__decorate([d.NgModule({declarations:[l.FundAddComponent],imports:[u.HttpModule,r.FormsModule,i.CommonModule,o.RouterModule.forChild(e.routes)],providers:[]}),__metadata("design:paramtypes",[])],FundAddModule)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},902:function(n,e){n.exports="<!-- content route -->\n<router-outlet></router-outlet>\n"}});