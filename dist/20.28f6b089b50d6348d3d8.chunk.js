webpackJsonp([20],{745:function(n,t,e){"use strict";var a=e(0),o=function(){function FundComponent(){this.classFund="active",this.classWithdrawal=""}return FundComponent.prototype.if=function(n){},FundComponent.prototype.fund=function(n){1==n&&(this.classFund="active",this.classWithdrawal="")},FundComponent.prototype.withdrawal=function(n){2==n&&(this.classFund="",this.classWithdrawal="active")},FundComponent=__decorate([a.Component({selector:"fund",template:e(828)}),__metadata("design:paramtypes",[])],FundComponent)}();t.FundComponent=o},768:function(n,t,e){"use strict";var a=e(0),o=e(62),d=e(109),r=e(154),s=e(73),i=e(745);t.routes=[{path:"",component:i.FundComponent,children:[{path:"",redirectTo:"fund-add"},{path:"fund-add",loadChildren:function(){return e.e(19).then(e.bind(null,756)).then(function(n){return n.default})}},{path:"fund-withdrawal",loadChildren:function(){return e.e(15).then(e.bind(null,767)).then(function(n){return n.default})}}]}];var l=function(){function FundModule(){}return FundModule.routes=t.routes,FundModule=__decorate([a.NgModule({declarations:[i.FundComponent],imports:[d.HttpModule,r.FormsModule,s.CommonModule,o.RouterModule.forChild(t.routes)],providers:[]}),__metadata("design:paramtypes",[])],FundModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=l},828:function(n,t){n.exports=' <!-- Content Wrapper. Contains page content -->\n<div class="content-wrapper">\n<!-- Main content -->\n<section class="content list-user">\n  <div class="row">\n    <div class="col-md-12">\n      <div class="box bg-transparent">\n        <div class="box-header">\n          <!-- header -->\n        </div>          \n        <!-- Nav tabs -->\n        <ul class="nav nav-tabs" role="tablist">\n          <!-- <li role="presentation" class="active"> -->\n          <li role="presentation" class="{{ classFund }}">\n            <a href="#/dashboard/fund/fund-add" aria-controls="home" role="tab" aria-expanded="true" style="color:#34495e" (click)="fund(1)">\n              Fund\n            </a>\n          </li>\n          <li role="presentation" class="{{ classWithdrawal }}">\n            <a href="#/dashboard/fund/fund-withdrawal" aria-controls="profile" role="tab" aria-expanded="false" style="color:#34495e" (click)="withdrawal(2)">\n              Withdrawal\n            </a>\n          </li>\n        </ul>\n        <br>\n        <form class="form-horizontal clearfix row white-bg detail-page form-space">\n        <div class="tab-content ">\n        \t<h1></h1>\n\t        <div class="col-md-12">\n\t        <!-- content route -->\n\t        <router-outlet></router-outlet>\n      \t\t</div>\n      \t</div>\n      \t</form>\n      </div>\n    </div>\n  </div>\n</section> \n<!-- /.content -->\n</div>\n  <!-- JS -->\n<!--   <script type="text/javascript">\n    $(\'#modalTambah\').modal(\'show\')\n  </script> -->'}});