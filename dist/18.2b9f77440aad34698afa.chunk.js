webpackJsonp([18],{747:function(t,e,n){"use strict";var a=n(0),o=n(109),i=n(62),r=function(){function ConfirmComponent(t,e,n){this.http=t,this.router=e,this.activatedRoute=n,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.token=JSON.parse(localStorage.getItem("access_token")),this.data={access_token:this.token,fund_id:"",struct_image:null,confirm_date:""}}return ConfirmComponent.prototype.ngOnInit=function(){var t=this,e=new Date;jQuery(".datepicker").datepicker({format:"yyyy-mm-dd"});var n=(jQuery("#confirm_date").datepicker("setDate",e),jQuery("#confirm_date").val());this.data.confirm_date=n,jQuery("#confirmForm").validate({rules:{confirm_date:{required:!0},image_struct:{required:!0}}});this.activatedRoute.params.subscribe(function(e){var n=e.id;t.data.fund_id=n})},ConfirmComponent.prototype.confirmFund=function(){if(jQuery("#confirmForm").valid()){var t=new FileReader;t.onload=function(t,e){var n=this,a=t.target.result.split(",")[1];this.data.struct_image=a,console.log(this.data),this.http.post("http://masscredit-api.stagingapps.net/user/fund/confirm",this.data,this.options).map(function(t){return t.json()}).subscribe(function(t){var e=t.meta.code,a=t.meta.message;console.log(e,a),alert("Konfirmasi penambahan dana berhasil"),n.router.navigateByUrl("/dashboard/fund")},function(t){var e=JSON.parse(t._body),a=e.meta.message;if("unauthorized"==a)return alert("Maaf session anda telah habis silahkan login kembali"),n.router.navigateByUrl("/dashboard/sign-out")})}.bind(this);var e=document.getElementById("struct_image"),n=e.files[0],a=t.readAsDataURL(n);this.data.struct_image=a}},ConfirmComponent=__decorate([a.Component({selector:"confirm",template:n(830)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object,"function"==typeof(e="undefined"!=typeof i.Router&&i.Router)&&e||Object,"function"==typeof(r="undefined"!=typeof i.ActivatedRoute&&i.ActivatedRoute)&&r||Object])],ConfirmComponent);var t,e,r}();e.ConfirmComponent=r},748:function(t,e,n){"use strict";var a=n(0),o=n(62),i=n(109),r=n(154),s=n(747);e.routes=[{path:"",component:s.ConfirmComponent}];var d=function(){function CreateModule(){}return CreateModule.routes=e.routes,CreateModule=__decorate([a.NgModule({declarations:[s.ConfirmComponent],imports:[i.HttpModule,r.FormsModule,o.RouterModule.forChild(e.routes)],providers:[]}),__metadata("design:paramtypes",[])],CreateModule)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=d},830:function(t,e){t.exports='<section class="content">\n <div class="row">\n   <div class="col-md-12">\n     <div class="box bg-transparent">\n       <div class="box-header">\n         <h2 class="box-title pull-left">Konfirmasi Dana</h2>\n       </div>\n       <div class="box-body">\n         <div class="form-login-register">\n           <form class="clearfix row white-bg detail-page form-space" name="confirmForm" id="confirmForm">\n              <div class="col-md-12">\n                  <div class="form-group" align="center">\n                      <label><h1>Foto Struk dan Tanggal Transfer</h1></label>\n                      <div class="form-group">\n                        <div class="col-md-12">\n                            <input type="file" name="struct_image" id="struct_image">\n                        </div>\n                      </div> \n                      <div class="input-group">\n                         <br>\n                         <input  type="text" placeholder="Tanggal Transfer" class="form-control input-md datepicker" name="confirm_date" id="confirm_date"  disabled>\n                      </div>\n                 </div>\n              </div>\n               <div class="col-md-12">\n                 <div class="form-group">\n                    <div class="col-md-6 col-center">\n                      <a href="#/dashboard/fund" class="btn btn-default">Batal</a>\n                      <button class="btn btn-red" (click)="confirmFund()">Konfirmasi</button>\n                    </div>\n                 </div>\n              </div>\n           </form>\n         </div>\n       </div>\n    </div>\n   </div>\n </div>\n</section>'}});