webpackJsonp([23],{767:function(t,e,n){"use strict";var o=n(0),i=function(){function ActionComponent(){this.classInvest="active",this.classLoan=""}return ActionComponent.prototype.loan=function(){this.classLoan="active",this.classInvest=""},ActionComponent.prototype.invest=function(){this.classInvest="active",this.classLoan=""},ActionComponent=__decorate([o.Component({selector:"action",template:n(947)}),__metadata("design:paramtypes",[])],ActionComponent)}();e.ActionComponent=i},768:function(t,e,n){"use strict";var o=n(0),i=n(87),a=JSON.parse(localStorage.getItem("access_token")),r="34g35g3",c="https://private-f1c97-masscredit.apiary-mock.com/mobile/user/investment/getlist",s=function(){function ActionService(t){this.http=t,this.headers=new i.Headers({"Content-Type":"application/json"}),this.token=a+r}return ActionService.prototype.Index=function(){return"51ef25d29I34Ln1341451adV351534g35g3"==this.token?(console.log("Berhasil ari"),this.http.post(c,this.token).subscribe(function(t){var e=t.json();console.log(e)})):void console.log("data gagal coy",a)},ActionService.prototype.Create=function(t){},ActionService.prototype.Update=function(t){},ActionService=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.Http&&i.Http)&&t||Object])],ActionService);var t}();e.ActionService=s},769:function(t,e,n){"use strict";var o=n(0),i=n(50),a=n(153),r=n(62),c=n(767),s=n(768);e.routes=[{path:"",component:c.ActionComponent,children:[{path:"",redirectTo:"invest"},{path:"invest",loadChildren:function(){return n.e(33).then(n.bind(null,770)).then(function(t){return t.default})}},{path:"loan",loadChildren:function(){return n.e(32).then(n.bind(null,792)).then(function(t){return t.default})}}]}];var l=function(){function ActionModule(){}return ActionModule.routes=e.routes,ActionModule=__decorate([o.NgModule({declarations:[c.ActionComponent],imports:[r.CommonModule,a.FormsModule,i.RouterModule.forChild(e.routes),a.ReactiveFormsModule],providers:[s.ActionService]}),__metadata("design:paramtypes",[])],ActionModule)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=l},947:function(t,e){t.exports='<div class="row">\n<div class="col-md-12">\n  <div class="box bg-transparent">\n    <ul class="nav nav-tabs" role="tablist">\n     <li role="presentation">\n        <a href="#/dashboard/other-user-action/invest" aria-controls="home" role="tab" aria-expanded="true" style="color:#34495e" (click)="invest()">Pinjaman</a>\n      </li>\n      <li role="presentation">\n        <a href="#/dashboard/other-user-action/loan" aria-controls="profile" role="tab" aria-expanded="false" style="color:#34495e" (click)="loan()" >Investasi</a>\n      </li>\n    </ul>\n    <br>\n    <form class="form-horizontal clearfix row white-bg detail-page form-space">\n    <div class="tab-content ">\n      <div class="col-md-12">\n        <!-- content route -->\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    </form>\n  </div>\n</div>\n</div>'}});