webpackJsonp([6],{702:function(e,t,n){"use strict";var o=n(0),i=n(86),a=n(153),s=n(154),r=n(693),p=n(703),d=n(704),l=n(705);console.log("dari register"),t.routes=[{path:"",component:r.Step1RegisterComponent}];var c=function(){function RegisterModule(){}return RegisterModule.routes=t.routes,RegisterModule=__decorate([o.NgModule({declarations:[r.Step1RegisterComponent,p.Step2RegisterComponent,d.Step3RegisterComponent,l.Step4RegisterComponent],imports:[a.HttpModule,s.FormsModule,i.RouterModule.forChild(t.routes)],providers:[]}),__metadata("design:paramtypes",[])],RegisterModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=c},703:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}__export(n(694))},704:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}__export(n(695))},705:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}__export(n(706))},706:function(e,t,n){"use strict";var o=n(0),i=n(689),a=n(153),s=function(){function Step4RegisterComponent(e,t){this.registerService=e,this.http=t,this.headers=new a.Headers({"Content-Type":"application/json"}),this.register=this.registerService.dataRegister()}return Step4RegisterComponent.prototype.ngOnInit=function(){},Step4RegisterComponent.prototype.stepFinish=function(){var e=new FileReader;e.onload=function(e,t){this.b=e.target.result.split(",")[1],console.log(this.b)}.bind(this);var t=new FileReader;t.onload=function(e,t){this.c=e.target.result.split(",")[1],console.log(this.c)}.bind(this);var n=document.getElementById("foto_ktp_depan"),o=document.getElementById("foto_ktp_belakang"),i=document.getElementById("foto_diri"),s=(n.files[0],o.files[0]),r=i.files[0],p=(e.readAsDataURL(s),t.readAsDataURL(r),new a.Headers({"Content-Type":"application/json"}));new a.RequestOptions({headers:p})},Step4RegisterComponent.prototype.prevStepThree=function(){console.log(),this.registerService.Step3()},Step4RegisterComponent=__decorate([o.Component({selector:"step4",template:n(753)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.RegisterService&&i.RegisterService)&&e||Object,"function"==typeof(t="undefined"!=typeof a.Http&&a.Http)&&t||Object])],Step4RegisterComponent);var e,t}();t.Step4RegisterComponent=s},753:function(e,t){e.exports='<div class="form-account form-login-register" id="step-4">\n    <h2>Registrasi</h2>\n    <p>Silakan isi data berikut untuk mendaftarkan diri anda</p>\n   <div class="row">\n      <ul class="breadcrumb">\n         <li class="completed"><a href="javascript:void(0);"><span><i class="fa fa-check" aria-hidden="true"></i></span> Data Diri </a></li>\n         <li class="completed"><a href="javascript:void(0);"><span>2</span> Data Keluarga </a></li>\n         <li class="completed"><a href="javascript:void(0);"><span>3</span> Data Pekerjaan </a></li>\n         <li class="active"><a href="javascript:void(0);"><span>4</span>  Data Penunjang</a></li>\n      </ul>\n   </div>\n   <form class="form-horizontal clearfix row" name="step4Form" method="post" enctype="multipart/form-data" novalidate>\n      <h3>Data Penunjang</h3>\n      <div class="col-md-4">\n         <div class="form-group">\n            <div class="col-md-12">\n                <span class="required">*</span>\n                <p>Upload Foto KTP bagian Depan</p>\n                <input  type="file" placeholder="Password" class="form-control input-md" required id="foto_ktp_depan" >\n            </div>    \n         </div>\n         </div>\n         <div class="col-md-4">\n          <div class="form-group">\n            <div class="col-md-12">\n                <span class="required">*</span>\n               <p>Upload Foto KTP bagian Belakang</p>\n         <input  type="file" class="form-control input-md" required name="foto_ktp_belakang" id="foto_ktp_belakang">\n            </div>    \n         </div>\n         </div>\n         <div class="col-md-4">\n         <div class="form-group">\n                <div class="col-md-12">\n                <span class="required">*</span>\n               <p>Upload Foto Anda</p>\n         <input  type="file" class="form-control input-md" required name="foto_diri" id="foto_diri">\n            </div>    \n         </div>\n      </div>\n      <div class="col-md-12">\n         <!-- Button -->\n         <div class="form-group">\n            <div class="col-md-6 col-center">\n               <button  class="btn btn-default" (click)="prevStepThree(register)">Kembali</button>\n               <button  class="btn btn-red" (click)="stepFinish()">Simpan</button>\n            </div>\n         </div>\n      </div>\n   </form>\n</div>'}});