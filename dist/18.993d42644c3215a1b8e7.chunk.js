webpackJsonp([18],{718:function(e,t,o){"use strict";var i=o(0),n=o(50),r=o(87),s=o(153),a=o(719);t.routes=[{path:"",component:a.VerifyCodeComponent}];var d=function(){function VerifyCodeModule(){}return VerifyCodeModule.routes=t.routes,VerifyCodeModule=__decorate([i.NgModule({declarations:[a.VerifyCodeComponent],imports:[n.RouterModule.forChild(t.routes),r.HttpModule,s.FormsModule],providers:[]}),__metadata("design:paramtypes",[])],VerifyCodeModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=d},719:function(e,t,o){"use strict";var i=o(0),n=o(50),r=o(87),s=o(720),a=function(){function VerifyCodeComponent(e,t,o){this.router=e,this.http=t,this.verifycodeService=o,this.code={},this.nomor={phone_number:JSON.stringify(localStorage.getItem("verify_handphone"))}}return VerifyCodeComponent.prototype.ngOnInit=function(){jQuery("#verification_code").mask("000000"),jQuery("#verifyCodeForm").validate({rules:{verification_code:{required:!0}}})},VerifyCodeComponent.prototype.sendVerify=function(e){var t=jQuery("#load");jQuery("#verifyCodeForm").valid()?(t.button("loading"),this.verifycodeService.postVerifyCode(e)):alert("Code Verifikasi anda salah")},VerifyCodeComponent.prototype.resendHandphone=function(){var e=jQuery("#load-resend");e.button("loading"),this.verifycodeService.postResendCode(this.nomor)},VerifyCodeComponent=__decorate([i.Component({selector:"verify-code",template:o(871),providers:[s.VerifyCodeService]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof n.Router&&n.Router)&&e||Object,"function"==typeof(t="undefined"!=typeof r.Http&&r.Http)&&t||Object,"function"==typeof(a="undefined"!=typeof s.VerifyCodeService&&s.VerifyCodeService)&&a||Object])],VerifyCodeComponent);var e,t,a}();t.VerifyCodeComponent=a},720:function(e,t,o){"use strict";var i=o(0),n=o(87),r=o(50),s=function(){function VerifyCodeService(e,t){this.router=e,this.http=t,this.verifycodeUrl="https://masscredit-api.stagingapps.net/user/credential/verifycode",this.resendcodeUrl="http://masscredit-api.stagingapps.net/user/credential/getverificationcode",this.headers=new n.Headers({"Content-Type":"application/json",API_KEY:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new n.RequestOptions({headers:this.headers})}return VerifyCodeService.prototype.postVerifyCode=function(e){var t=this;this.http.post(this.verifycodeUrl,e,this.options).map(function(e){return e.json()}).subscribe(function(e){localStorage.setItem("access-code",JSON.stringify(e.data.access_code)),t.router.navigateByUrl("/auth/register/step-register")},function(e){var t=JSON.parse(e._body),o=t.meta.message,i=jQuery("#load");"Verifikasi salah."==o&&(alert("Maaf nomor verifikasi salah!"),i.button("reset"))})},VerifyCodeService.prototype.postResendCode=function(e){var t=jQuery("#load-resend");this.http.post(this.resendcodeUrl,e,this.options).map(function(e){return e.json()}).subscribe(function(e){t.button("reset");var o=e.data.verification_code;alert(o)})},VerifyCodeService=__decorate([i.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.Router&&r.Router)&&e||Object,"function"==typeof(t="undefined"!=typeof n.Http&&n.Http)&&t||Object])],VerifyCodeService);var e,t}();t.VerifyCodeService=s},871:function(e,t){e.exports='<div class="form-account form-login-register" id="register">\n  <br>\n  <br>\n  <h2>Registrasi</h2>\n  <p>Silahkan masukkan nomor verifikasi yang anda terima melalui SMS</p>\n  <br>\n  <form class="form-horizontal clearfix row" id="verifyCodeForm">\n     <div class="col-xs-12">\n        <div class="row">\n          <div align="center">\n              <div class="form-group" style="width:60%">\n                <div class="col-xs-6">\n               <input type="text" class="form-control" placeholder="Verification Code" maxlength="5" id="verification_code" [(ngModel)]="code.verification_code" name="verification_code">\n                </div>\n                <div class="col-xs-2">\n                <button type="submit" (click)="sendVerify(code)" name="singlebutton" class="btn btn-red" id="load" data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i>  Loading..">Verifikasi</button>\n                  <!-- <button  class="btn btn-red" (click)="sendVerify(code)">\n                    Verifikasi\n                  </button> -->\n                </div>\n                <div class="col-xs-1">\n                </div>\n                <div class="col-xs-2">\n                <button type="submit" (click)="resendHandphone()" name="singlebutton" class="btn btn-batal" id="load-resend" data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i>  Loading..">Resend</button>\n                  <!-- <button type="button" class="btn btn-batal" data-dismiss="modal" (click)="resendHandphone()">\n                    Resend\n                  </button> -->\n                </div>\n              </div>\n          </div>\n        </div>\n     </div>\n  </form>\n</div>\n'}});