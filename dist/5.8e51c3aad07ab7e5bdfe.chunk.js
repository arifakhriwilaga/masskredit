webpackJsonp([5],{696:function(e,n,t){"use strict";var r=t(0),a=t(109),o=t(698),s=function(){function RegisterService(e){this.jqueryService=e,this.headers=new a.Headers({"Content-Type":"application/json"}),this.loggedinUrl="https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/register",this.register={nama_lengkap:"",alamat_email:"",phone_number:"",password:"",confirm_password:"",kode_pos:"",jenis_kelamin:"0",tempat_lahir:"",tanggal_lahir:"",alamat:""}}return RegisterService.prototype.dataRegister=function(){return this.register},RegisterService.prototype.Step1=function(){this.jqueryService.showStep1()},RegisterService.prototype.Step2=function(){this.jqueryService.showStep2()},RegisterService.prototype.Step3=function(){this.jqueryService.showStep3()},RegisterService.prototype.Step4=function(){this.jqueryService.showStep4()},RegisterService=__decorate([r.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.JqueryService&&o.JqueryService)&&e||Object])],RegisterService);var e}();n.RegisterService=s},698:function(e,n){"use strict";var t=function(){function JqueryService(){}return JqueryService.prototype.showStep1=function(){jQuery("#step-1").fadeIn(),jQuery("#step-2").hide(),jQuery("#step-3").hide(),jQuery("#step-4").hide()},JqueryService.prototype.showStep2=function(){jQuery("#step-1").hide(),jQuery("#step-2").fadeIn(),jQuery("#step-3").hide(),jQuery("#step-4").hide()},JqueryService.prototype.showStep3=function(){jQuery("#step-1").hide(),jQuery("#step-2").fadeOut(),jQuery("#step-3").fadeIn(),jQuery("#step-4").hide()},JqueryService.prototype.showStep4=function(){jQuery("#step-1").hide(),jQuery("#step-2").hide(),jQuery("#step-3").fadeOut(),jQuery("#step-4").fadeIn()},JqueryService}();n.JqueryService=t},699:function(e,n,t){"use strict";var r=t(0),a=t(154),o=t(696),s=t(72),i=t(109),l=function(){function Step1RegisterComponent(e,n,t,r){this.registerService=e,this.router=n,this.http=t,this.formBuilder=r,this.agama=[],this.province=[],this.status_rumah=[],this.tipe_identitas=[],this.status=[],this.tipe_bank=[],this.nomor="",this.register=this.registerService.dataRegister(),this.kota=[],this.id_provinsi=""}return Step1RegisterComponent.prototype.ngOnInit=function(){jQuery("#registerForm").validate({rules:{nama_lengkap:{required:!0},alamat_email:{required:!0,email:!0},password:{required:!0},confirm_password:{required:!0},jenis_kelamin:{required:!0},kode_pos:{required:!0},tempat_lahir:{required:!0},tanggal_lahir:{required:!0},alamat:{required:!0}}}),this.nomor=JSON.parse(localStorage.getItem("verify_handphone"));var e=new i.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"});new i.RequestOptions({headers:e})},Step1RegisterComponent.prototype.sendRegister=function(e){var n=this;if(jQuery("#registerForm").valid()){var t=document.getElementById("phone_number"),r=t.value;this.register.tanggal_lahir=jQuery("#tanggal_lahir").datepicker("getDate"),this.register.phone_number=r;var a=new i.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),o=new i.RequestOptions({headers:a});this.register,this.http.post("http://masscredit-api.stagingapps.net/user/credential/register",e,o).map(function(e){return e.json()}).subscribe(function(e){var t=e.meta.code;return"200"==t?(localStorage.removeItem("access_code"),localStorage.removeItem("verify_handphone"),alert("Registrasi berhasil, cek email untuk verifikasi"),n.router.navigateByUrl("/")):(alert("Register gagal"),n.router.navigateByUrl("/auth/register/step-1"))},function(e){var n=JSON.parse(e._body),t=n.meta.message;"Email sudah terdaftar"==t&&alert("Maaf Email sudah terdaftar"),"Password dan Confirm Password tidak sama"==t&&alert("Password dan Confirm Password tidak sama")})}else alert("Data tidak valid")},Step1RegisterComponent.prototype.cancelRegister=function(){localStorage.removeItem("access_code"),localStorage.removeItem("verify_handphone"),this.router.navigateByUrl("")},Step1RegisterComponent.prototype.ngAfterViewInit=function(){jQuery(".datepicker").datepicker({format:"yyyy/mm/dd"}),jQuery("#step-2").hide(),jQuery("#step-3").hide(),jQuery("#step-4").hide()},Step1RegisterComponent.prototype.getProvinsi=function(e){var n=this;this.id_provinsi=e,console.log(e);var t=new i.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),r=JSON.parse(e),a={id_provinsi:r},o=new i.RequestOptions({headers:t});return this.http.post("http://masscredit-api.stagingapps.net/master/kota",a,o).map(function(e){return e.json()}).subscribe(function(e){n.kota=e.data.kota,console.log("Kota",n.kota)}),r},Step1RegisterComponent=__decorate([r.Component({selector:"step-1",template:t(759),providers:[o.RegisterService]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.RegisterService&&o.RegisterService)&&e||Object,"function"==typeof(n="undefined"!=typeof s.Router&&s.Router)&&n||Object,"function"==typeof(l="undefined"!=typeof i.Http&&i.Http)&&l||Object,"function"==typeof(d="undefined"!=typeof a.FormBuilder&&a.FormBuilder)&&d||Object])],Step1RegisterComponent);var e,n,l,d}();n.Step1RegisterComponent=l},700:function(e,n,t){"use strict";var r=t(0),a=function(){function Step2RegisterComponent(){}return Step2RegisterComponent=__decorate([r.Component({selector:"step2",template:t(760)}),__metadata("design:paramtypes",[])],Step2RegisterComponent)}();n.Step2RegisterComponent=a},701:function(e,n,t){"use strict";var r=t(0),a=function(){function Step3RegisterComponent(){}return Step3RegisterComponent=__decorate([r.Component({selector:"step3",template:t(761)}),__metadata("design:paramtypes",[])],Step3RegisterComponent)}();n.Step3RegisterComponent=a},707:function(e,n,t){"use strict";var r=t(0),a=t(72),o=t(109),s=t(154),i=t(696),l=t(698),d=t(73),p=t(708),c=t(699),u=t(700),m=t(701),v=t(725),f=t(723),g=t(722),h=t(724);n.routes=[{path:"",component:p.RegisterComponent,children:[{path:"",redirectTo:"verify"},{path:"verify",loadChildren:function(){return t.e(8).then(t.bind(null,716)).then(function(e){return e.default})}},{path:"verify-code",loadChildren:function(){return t.e(9).then(t.bind(null,714)).then(function(e){return e.default})}},{path:"step-1",canActivate:[v.AuthGuardVerify],loadChildren:function(){return t.e(6).then(t.bind(null,709)).then(function(e){return e.default})}}]}];var _=function(){function RegisterModule(){}return RegisterModule.routes=n.routes,RegisterModule=__decorate([r.NgModule({declarations:[p.RegisterComponent],imports:[o.HttpModule,s.FormsModule,a.RouterModule.forChild(n.routes),d.CommonModule],providers:[v.AuthGuardVerify,f.AuthGuardVerifyCode,i.RegisterService,l.JqueryService,c.Step1RegisterComponent,u.Step2RegisterComponent,m.Step3RegisterComponent,h.AuthGuardVerifyHandphone,g.AuthGuardVerifyCodeHandphone,s.FormBuilder]}),__metadata("design:paramtypes",[])],RegisterModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=_},708:function(e,n,t){"use strict";var r=t(0),a=function(){function RegisterComponent(){}return RegisterComponent=__decorate([r.Component({selector:"register",template:t(758)}),__metadata("design:paramtypes",[])],RegisterComponent)}();n.RegisterComponent=a},722:function(e,n,t){"use strict";var r=t(0),a=t(72),o=function(){function AuthGuardVerifyCodeHandphone(e){this.router=e}return AuthGuardVerifyCodeHandphone.prototype.canActivate=function(){var e=localStorage.getItem("verify_handphone");return!e||(console.log("Maaf anda tidak mengakses halaman ini"),this.router.navigateByUrl("/auth/register/verify-code"),!1)},AuthGuardVerifyCodeHandphone=__decorate([r.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.Router&&a.Router)&&e||Object])],AuthGuardVerifyCodeHandphone);var e}();n.AuthGuardVerifyCodeHandphone=o},723:function(e,n,t){"use strict";var r=t(0),a=t(72),o=function(){function AuthGuardVerifyCode(e){this.router=e}return AuthGuardVerifyCode.prototype.canActivate=function(){var e=localStorage.getItem("access_code");return!e||(console.log("Maaf anda tidak mengakses halaman ini"),this.router.navigateByUrl("/auth/register/step-1"),!1)},AuthGuardVerifyCode=__decorate([r.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.Router&&a.Router)&&e||Object])],AuthGuardVerifyCode);var e}();n.AuthGuardVerifyCode=o},724:function(e,n,t){"use strict";var r=t(0),a=t(72),o=function(){function AuthGuardVerifyHandphone(e){this.router=e}return AuthGuardVerifyHandphone.prototype.canActivate=function(){var e=localStorage.getItem("verify_handphone");return!!e||(console.log("Maaf anda tidak mengakses halaman ini"),this.router.navigateByUrl("/auth/register"),!1)},AuthGuardVerifyHandphone=__decorate([r.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.Router&&a.Router)&&e||Object])],AuthGuardVerifyHandphone);var e}();n.AuthGuardVerifyHandphone=o},725:function(e,n,t){"use strict";var r=t(0),a=t(72),o=function(){function AuthGuardVerify(e,n){this.router=e,this.activatedRoute=n}return AuthGuardVerify.prototype.canActivate=function(){var e=localStorage.getItem("access_code");return!!e||(console.log("Anda belum mengirim no handphone"),this.router.navigateByUrl(""),!1)},AuthGuardVerify=__decorate([r.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.Router&&a.Router)&&e||Object,"function"==typeof(n="undefined"!=typeof a.ActivatedRoute&&a.ActivatedRoute)&&n||Object])],AuthGuardVerify);var e,n}();n.AuthGuardVerify=o},758:function(e,n){e.exports='<div class="container">\n   <router-outlet></router-outlet>\n</div>'},759:function(e,n){e.exports='<div class="form-account form-login-register" id="step-1">\n<br><br>\n      <h2>Registrasi</h2>\n      <p>Silakan isi data berikut untuk mendaftarkan diri anda</p>\n\n      <form class="form-horizontal clearfix row" name="registerForm" id="registerForm">\n         <div class="col-xs-6">\n            <div class="form-group">\n               <div class="col-xs-12">\n               <span class="required">*</span>\n                    <input  type="text" placeholder="Nama Lengkap" class="form-control input-md" [(ngModel)]="register.nama_lengkap" name="nama_lengkap">\n               </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-12">\n               <span class="required">*</span>\n                    <input  type="email" placeholder="Email" class="form-control input-md" [(ngModel)]="register.alamat_email" name="alamat_email">\n              </div>\n            </div>\n            <!-- Password -->\n            <div class="form-group">\n               <div class="col-md-12">\n               <span class="required">*</span>\n                    <input  type="password" placeholder="Password" class="form-control input-md" [(ngModel)]="register.password" name="password">\n               </div>\n            </div>\n            <div class="form-group">\n               <div class="col-md-12">\n               <span class="required">*</span>\n                    <input  type="password" placeholder="Confirm Password" class="form-control input-md" [(ngModel)]="register.confirm_password" name="confirm_password">\n               </div>\n            </div>\n          <div class="form-group">\n               <div class="col-md-12">\n               <span class="required">*</span>\n                    <input  type="text" placeholder="{{ nomor }}" class="form-control input-md" name="phone_number" id="phone_number" value="{{ nomor }}" disabled>\n               </div>\n            </div>\n          </div>\n\n          <div class="col-xs-6">\n            <div class="form-group">\n               <div class="col-md-12">\n               <span class="required">*</span>\n                  <select class="form-control input-md" name="jenis_kelamin" [(ngModel)]="register.jenis_kelamin" name="jenis_kelamin">\n                     <option value="0" disabled>Jenis Kelamin</option>\n                     <option value="1">Laki-laki</option>\n                     <option value="2">Perempuan</option>                  \n                  </select>\n               </div>\n            </div>\n            <div class="form-group">\n              <div class="col-md-4">\n               <span class="required">*</span>\n                    <input  type="text" placeholder="Tempat Lahir" class="form-control input-md" [(ngModel)]="register.tempat_lahir" name="tempat_lahir">\n              </div>\n              <div class="col-xs-4">\n               <span class="required">*</span>\n                    <input  type="text" placeholder="Kode Pos" class="form-control input-md" [(ngModel)]="register.kode_pos" name="kode_pos">\n              </div>\n              <div class="col-xs-4">\n               <span class="required">*</span>\n                  <input  type="text" placeholder="Tanggal Lahir " name="tanggal_lahir" class="form-control input-md datepicker" id="tanggal_lahir" [(ngModel)]="register.tanggal_lahir">\n               </div>\n            </div>\n\n            <div class="form-group">\n               <div class="col-xs-12">\n               <span class="required">*</span>\n                    <textarea  type="text" placeholder="Alamat" class="form-control input-md" [(ngModel)]="register.alamat" name="alamat">\n                    </textarea>\n               </div>\n            </div>\n          </div>\n\n         <div class="col-xs-12">\n            <!-- Button -->\n            <div class="form-group">\n               <div class="col-md-6 col-center">\n                  <button  class="btn btn-default" formnovalidate (click)="cancelRegister()">Batal</button>\n                  <button  class="btn btn-red" (click)="sendRegister(register)">Daftar</button>\n               </div>\n            </div>\n         </div>\n      </form>\n</div>\n\n\n'},760:function(e,n){e.exports='<div class="form-account form-login-register" id="step-2">\n<br><br>\n   <h2>Registrasi</h2>\n   <p>Silakan isi data berikut untuk mendaftarkan diri anda</p>\n   <div class="row">\n      <ul class="breadcrumb">\n         <li class="completed"><a href="javascript:void(0);"><span><i class="fa fa-check" aria-hidden="true"></i></span> Data Diri </a></li>\n         <li class="active"><a href="javascript:void(0);"><span>2</span> Data Keluarga </a></li>\n         <li><a href="javascript:void(0);"><span>3</span> Data Pekerjaan </a></li>\n         <li><a href="javascript:void(0);"><span>4</span>  Data Penunjang</a></li>\n      </ul>\n   </div>\n   <form class="form-horizontal clearfix row" id="step2Form" name="step2Form" novalidate [formGroup]="step2Form">\n      <h3>Data Keluarga</h3>\n      <div class="col-md-6">\n         <div class="form-group">\n            <div class="col-md-12">\n              <div [ngClass]="{\'has-error\':!step2Form.controls[\'nama_lengkap_keluarga\'].valid && step2Form.controls[\'nama_lengkap_keluarga\'].touched}">\n                 <input  type="text" placeholder="Nama Lengkap Keluarga" class="form-control input-md" [formControl]="step2Form.controls[\'nama_lengkap_keluarga\']" >\n\n                 <!-- Message Error -->\n                 <p *ngIf="step2Form.controls[\'nama_lengkap_keluarga\'].hasError(\'required\') && step2Form.controls[\'nama_lengkap_keluarga\'].touched">\n                   <font color="red">Nama dibutuhkan</font>\n                 </p>\n             </div>\n            </div>\n         </div>\n         <div class="form-group">\n            <div class="col-md-12">\n               <div [ngClass]="{\'has-error\':!step2Form.controls[\'hubungan_keluarga\'].valid && step2Form.controls[\'hubungan_keluarga\'].touched}">\n                 <input  type="text" placeholder="Hubungan Keluarga" class="form-control input-md" [formControl]="step2Form.controls[\'hubungan_keluarga\']" >\n\n                 <!-- Message Error -->\n                 <p *ngIf="step2Form.controls[\'hubungan_keluarga\'].hasError(\'required\') && step2Form.controls[\'hubungan_keluarga\'].touched">\n                   <font color="red">Nama dibutuhkan</font>\n                 </p>\n             </div>\n            </div>\n         </div>\n         <div class="form-group">\n            <div class="col-md-12">\n             <div [ngClass]="{\'has-error\':!step2Form.controls[\'alamat_keluarga\'].valid && step2Form.controls[\'alamat_keluarga\'].touched}">\n                 <textarea type="text" placeholder="Alamat" class="form-control input-md" [formControl]="step2Form.controls[\'alamat_keluarga\']">\n                 </textarea>\n                 <!-- Message Error -->\n                 <p *ngIf="step2Form.controls[\'alamat_keluarga\'].hasError(\'required\') && step2Form.controls[\'alamat_keluarga\'].touched">\n                   <font color="red">Alamat dibutuhkan</font>\n                 </p>\n             </div>\n            </div>\n         </div>\n\n      </div>\n\n      <div class="col-md-6">\n      <fieldset>\n         <div class="form-group">\n            <div class="col-md-12">\n              <div [ngClass]="{\'has-error\':!step2Form.controls[\'nomor_telepon_keluarga\'].valid && step2Form.controls[\'nomor_telepon_keluarga\'].touched}">\n                 <input type="text" placeholder="Nomor Telepon" class="form-control input-md" [formControl]="step2Form.controls[\'nomor_telepon_keluarga\']">\n                 <!-- Message Error -->\n                 <p *ngIf="step2Form.controls[\'nomor_telepon_keluarga\'].hasError(\'required\') && step2Form.controls[\'nomor_telepon_keluarga\'].touched">\n                   <font color="red">Nomor telepon dibutuhkan</font>\n                 </p>\n             </div>\n            </div>\n         </div>\n         <div class="form-group">\n            <div class="col-md-12">\n             <div [ngClass]="{\'has-error\':!step2Form.controls[\'jumlah_anak\'].valid && step2Form.controls[\'jumlah_anak\'].touched}">\n                 <input type="text" placeholder="Jumlah Anak" class="form-control input-md" [formControl]="step2Form.controls[\'jumlah_anak\']">\n                 <!-- Message Error -->\n                 <p *ngIf="step2Form.controls[\'jumlah_anak\'].hasError(\'required\') && step2Form.controls[\'jumlah_anak\'].touched">\n                   <font color="red">Nomor telepon dibutuhkan</font>\n                 </p>\n             </div>\n            </div>\n         </div>\n         <div class="form-group">\n            <div class="col-md-12">\n                 <div [ngClass]="{\'has-error\':!step2Form.controls[\'jumlah_tanggungan\'].valid && step2Form.controls[\'jumlah_tanggungan\'].touched}">\n                 <input type="text" placeholder="jumlah Tanggungan" class="form-control input-md" [formControl]="step2Form.controls[\'jumlah_tanggungan\']">\n                 <!-- Message Error -->\n                 <p *ngIf="step2Form.controls[\'jumlah_tanggungan\'].hasError(\'required\') && step2Form.controls[\'jumlah_tanggungan\'].touched">\n                   <font color="red">Nomor telepon dibutuhkan</font>\n                 </p>\n             </div>\n            </div>\n         </div>\n       </fieldset>\n      </div>\n      <div class="col-md-12">\n         <!-- Button -->\n         <div class="form-group">\n            <div class="col-md-6 col-center">\n               <button  class="btn btn-default" (click)="prevStepOne(step2Form.value)">Kembali</button>\n               <button  class="btn btn-red" (click)="nextStepThree(step2Form.value)"  [disabled]="!step2Form.valid">Lanjutkan</button>\n            </div>\n         </div>\n      </div>\n   </form>\n</div>'},761:function(e,n){e.exports='<div class="form-account form-login-register" id="step-3">\n    <h2>Registrasi</h2>\n    <p>Silakan isi data berikut untuk mendaftarkan diri anda</p>\n   <div class="row">\n      <ul class="breadcrumb">\n         <li class="completed"><a href="javascript:void(0);"><span><i class="fa fa-check" aria-hidden="true"></i></span> Data Diri </a></li>\n         <li class="completed"><a href="javascript:void(0);"><span>2</span> Data Keluarga </a></li>\n         <li class="active"><a href="javascript:void(0);"><span>3</span> Data Pekerjaan </a></li>\n         <li><a href="javascript:void(0);"><span>4</span>  Data Penunjang</a></li>\n      </ul>\n   </div>\n   <form class="form-horizontal clearfix row" id="step3Form" name="step3Form" novalidate [formGroup]="step3Form">\n      <h3>Data Pekerjaan</h3>\n      <div class="col-md-6">\n         <div class="form-group">\n              <div class="col-md-12">\n                <span class="required">*</span>\n                <div [ngClass]="{\'has-error\':!step3Form.controls[\'id_pekerjaan\'].valid && step3Form.controls[\'id_pekerjaan\'].touched}">\n                 <!-- Message Error -->\n               <select class="form-control input-md" required name="pekerjaan" [formControl]="step3Form.controls[\'id_pekerjaan\']">\n                  <option selected disabled value="0">Pekerjaan</option>\n                  <option *ngFor="let h of pekerjaan" [value]="h.id_pekerjaan">\n                      {{ h.desc_pekerjaan }}\n                  </option>\n               </select>\n                 <p *ngIf="step3Form.controls[\'id_pekerjaan\'].hasError(\'required\') && step3Form.controls[\'id_pekerjaan\'].touched">\n                   <font color="red">Pekerjaan belum dipilih</font>\n                 </p>\n               </div>\n            </div>    \n         </div>\n         <!-- Password input-->\n         <div class="form-group">\n            <div class="col-md-12">\n               <input  type="text" placeholder="Nama Perusahaan" class="form-control input-md" required name="nama_perusahaan" [formControl]="step3Form.controls[\'nama_perusahaan\']">\n            </div>\n         </div>\n         <div class="form-group">\n            <div class="col-md-12">\n               <textarea placeholder="Alamat Perusahaan" class="form-control input-md" required name="alamat_perusahaan" [formControl]="step3Form.controls[\'alamat_perusahaan\']"></textarea>\n            </div>\n         </div>\n          <div class="form-group">\n            <div class="col-md-12">\n               <input  type="text" placeholder="Telepon Perusahaan" class="form-control input-md" required name="telepon_perusahaan" [formControl]="step3Form.controls[\'telepon_perusahaan\']">\n            </div>\n         </div>\n         <div class="form-group">\n            <div class="col-md-12">\n               <input  type="text" placeholder="Jenis Usaha" class="form-control input-md" required name="jenis_usaha" [formControl]="step3Form.controls[\'jenis_usaha\']">\n            </div>\n         </div>\n          <div class="form-group">\n            <div class="col-md-6">\n               <input  type="text" placeholder="Jabatan" class="form-control input-md" required name="jabatan" [formControl]="step3Form.controls[\'jabatan\']">\n            </div>\n             <div class="col-md-6">\n               <input  type="text" placeholder="Tanggal Mulai Kerja" class="form-control input-md datepicker" id="tanggal_mulai_kerja" required name="tanggal_mulai_kerja" [formControl]="step3Form.controls[\'tanggal_mulai_kerja\']">\n            </div>\n         </div>\n      </div>\n      <div class="col-md-6">\n      <fieldset>\n          <div class="form-group">\n            <div [ngClass]="{\'has-error\':!step3Form.controls[\'gaji_per_bulan\'].valid && step3Form.controls[\'gaji_per_bulan\'].touched}">\n            <div class="col-md-8">\n            <span class="required">*</span>\n               <input  type="text" placeholder="Gaji Per Bulan" class="form-control input-md" required name="gaji_per_bulan" [formControl]="step3Form.controls[\'gaji_per_bulan\']">\n            </div>\n             <div class="col-md-4">\n                <span class="rupiah">Rupiah</span> \n             </div>\n             <div class="col-md-12">\n              <p *ngIf="step3Form.controls[\'gaji_per_bulan\'].hasError(\'required\') && step3Form.controls[\'gaji_per_bulan\'].touched">\n                <font color="red">Gaji per bulan</font>\n              </p>\n              </div>\n            </div>\n         </div>\n          <div class="form-group">\n            <div [ngClass]="{\'has-error\':!step3Form.controls[\'pendapatan_lain\'].valid && step3Form.controls[\'pendapatan_lain\'].touched}">\n            <div class="col-md-8">\n              <span class="required">*</span>\n               <input  type="text" placeholder="Pendapatan lainnya" class="form-control input-md" required name="pendapatan_lain" [formControl]="step3Form.controls[\'pendapatan_lain\']">\n            </div>\n             <div class="col-md-4">\n               <span class="rupiah">Rupiah</span>\n             </div>\n             <div class="col-md-12">\n              <p *ngIf="step3Form.controls[\'pendapatan_lain\'].hasError(\'required\') && step3Form.controls[\'pendapatan_lain\'].touched">\n                  <font color="red">Pendapatan lain kosong</font>\n              </p>\n              </div>\n            </div>\n         </div>\n         <div class="form-group">\n              <div [ngClass]="{\'has-error\':!step3Form.controls[\'pengeluaran_per_bulan\'].valid && step3Form.controls[\'pengeluaran_per_bulan\'].touched}">\n          <div class="col-md-8">\n            <span class="required">*</span>\n               <input  type="text" placeholder="Pengeluaran Per Bulan" class="form-control input-md" required name="pengeluaran_per_bulan" [formControl]="step3Form.controls[\'pengeluaran_per_bulan\']">\n              </div>\n              <div class="col-md-4">\n               <span class="rupiah">Rupiah</span>\n              </div>\n              <div class="col-md-12">\n              <p *ngIf="step3Form.controls[\'pengeluaran_per_bulan\'].hasError(\'required\') && step3Form.controls[\'pengeluaran_per_bulan\'].touched">\n                  <font color="red">Pengeluaran per bulan kosong</font>\n              </p>\n              </div>\n            </div>\n         </div>\n         <div class="form-group">\n            <div class="col-md-12">\n               <input type="text" class="form-control input-md" placeholder="sumber_dana" required name="sumber_dana" [formControl]="step3Form.controls[\'sumber_dana\']">\n            </div>\n         </div>\n       </fieldset>\n      </div>\n      <div class="col-md-12">\n         <!-- Button -->\n         <div class="form-group">\n            <div class="col-md-6 col-center">\n               <button  class="btn btn-default" (click)="prevStepTwo(step3Form.value)">Kembali</button>\n               <button  class="btn btn-red" (click)="nextStepFour(step3Form.value)">Lanjutkan</button>\n            </div>\n         </div>\n      </div>\n   </form>\n</div>'}});