webpackJsonp([28],{841:function(e,t,n){"use strict";var o=n(0),r=n(62),u=n(109),s=n(154),d=n(73),i=n(842);t.routes=[{path:"",component:i.UserInvestComponent,children:[{path:"",redirectTo:"index"},{path:"index",loadChildren:function(){return n.e(24).then(n.bind(null,853)).then(function(e){return e.default})}},{path:"create",loadChildren:function(){return n.e(27).then(n.bind(null,844)).then(function(e){return e.default})}},{path:"detail/:id",loadChildren:function(){return n.e(26).then(n.bind(null,846)).then(function(e){return e.default})}}]}];var l=function(){function UserInvestModule(){}return UserInvestModule.routes=t.routes,UserInvestModule=__decorate([o.NgModule({declarations:[i.UserInvestComponent],imports:[u.HttpModule,s.FormsModule,d.CommonModule,r.RouterModule.forChild(t.routes)],providers:[]}),__metadata("design:paramtypes",[])],UserInvestModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=l},842:function(e,t,n){"use strict";var o=n(0),r=function(){function UserInvestComponent(){}return UserInvestComponent=__decorate([o.Component({selector:"user-invest",template:n(934)}),__metadata("design:paramtypes",[])],UserInvestComponent)}();t.UserInvestComponent=r},934:function(e,t){e.exports="<router-outlet></router-outlet>\n"}});