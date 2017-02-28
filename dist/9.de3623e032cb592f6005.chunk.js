webpackJsonp([9],{694:function(e,n,t){"use strict";var a=t(0),o=t(87),r=t(50),s=function(){function CreateComponent(e,n){this.http=e,this.router=n,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.postLoanUrl="https://masscredit-api.stagingapps.net/user/loan/new",this.getCategoryLoanUrl="https://masscredit-api.stagingapps.net/master/loan-category",this.loan={access_token:JSON.parse(localStorage.getItem("access_token")),loan_name:null,loan_category:0,other_category:null,image:null,description:null,amount:null,due_date:"",interest:null,tenor:null,password:null},this.loan_category={access_token:JSON.parse(localStorage.getItem("access_token"))},this.loan_categories=[],this.dataInvest=0}return CreateComponent.prototype.ngOnInit=function(){this.getLoanCategory(),jQuery("#loanForm").validate({rules:{loan_name:{required:!0},loan_category:{required:!0},due_date:{required:!0},amount:{required:!0},tenor:{required:!0},description:{required:!0},interest:{required:!0}}}),jQuery("#interest").mask("00000"),jQuery("#tenor").mask("00"),jQuery("#amount").mask("0000000000")},CreateComponent.prototype.getLoanCategory=function(){var e=this;this.http.get(this.getCategoryLoanUrl,this.options).map(function(e){return e.json()}).subscribe(function(n){e.loan_categories=n.data.loan_categories},function(n){var t=n.meta.message;if("unauthorized"==t)return alert("Maaf session anda telah habis silahkan login kembali"),e.router.navigateByUrl("/dashboard/sign-out")})},CreateComponent.prototype.getLoanCategoryId=function(e){this.categoryLoan=e},CreateComponent.prototype.cancelLoan=function(){this.router.navigateByUrl("/dashboard/other-user-action/loan")},CreateComponent.prototype.createLoan=function(e){if(jQuery("#loanForm").valid()){this.loan.due_date=jQuery("#due_date").val();var n=new FileReader;n.onload=function(e,n){try{var t=e.target.result.split(",")[1];"AQID"==t&&(this.loan.image=null),"AQID"!=t&&(this.loan.image=t)}finally{this.dataInvest=3}}.bind(this);var t=document.getElementById("images"),a=t.files[0],o=new Uint8Array([1,2,3]),r=o.buffer,s=new Blob([r]);void 0==a&&(a=s);n.readAsDataURL(a)}else alert("Data tidak valid")},CreateComponent.prototype.postLoan=function(){var e=this;this.http.post(this.postLoanUrl,this.loan,this.options).map(function(e){return e.json()}).subscribe(function(n){n.meta.code,n.meta.message;alert("Investasi berhasil dibuat"),e.router.navigateByUrl("/dashboard/other-user-action/loan")},function(n){var t=JSON.parse(n._body),a=t.meta.message;t.meta.code;return"unauthorized"==a?(alert("Maaf session anda telah habis silahkan login kembali"),e.router.navigateByUrl("/dashboard/sign-out")):void("Password salah!"==a&&(e.dataInvest=0,alert("Password salah")))})},CreateComponent=__decorate([a.Component({selector:"create",template:t(923)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Http&&o.Http)&&e||Object,"function"==typeof(n="undefined"!=typeof r.Router&&r.Router)&&n||Object])],CreateComponent);var e,n}();n.CreateComponent=s},800:function(e,n,t){"use strict";var a=t(0),o=t(694),r=function(){function DueDateComponent(e){this.create=e,this.loan=this.create.loan}return DueDateComponent.prototype.ngOnInit=function(){jQuery("#due_date").datepicker({format:"yyyy-mm-dd"})},DueDateComponent=__decorate([a.Component({selector:"due-date",template:' \n\t<div class="form-group">\n    <div class="col-md-12">\n    <span class="required">*</span>\n    <input  type="text" placeholder="Batas Akhir Penawaran " name="due_date" class="form-control input-md datepicker" id="due_date" [(ngModel)]="loan.due_date">\n    </div>\n  </div>\n\t'}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.CreateComponent&&o.CreateComponent)&&e||Object])],DueDateComponent);var e}();n.DueDateComponent=r},801:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(800))},802:function(e,n,t){"use strict";var a=t(0),o=t(50),r=t(87),s=t(153),i=t(72),l=t(694),d=t(801),c=t(803);n.routes=[{path:"",component:l.CreateComponent}];var p=function(){function CreateModule(){}return CreateModule.routes=n.routes,CreateModule=__decorate([a.NgModule({declarations:[l.CreateComponent,d.DueDateComponent,c.VerifyComponent],imports:[r.HttpModule,s.FormsModule,i.CommonModule,o.RouterModule.forChild(n.routes)],providers:[]}),__metadata("design:paramtypes",[])],CreateModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=p},803:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(804))},804:function(e,n,t){"use strict";var a=t(0),o=t(50),r=t(694),s=function(){function VerifyComponent(e,n){this.create=e,this.router=n,this.data=this.create.loan,this.dataConfirmInvest=0}return VerifyComponent.prototype.ngOnInit=function(){jQuery("#confirmInvestForm").validate({rules:{password:{required:!0}}})},VerifyComponent.prototype.cancelConfirmInvest=function(){this.router.navigateByUrl("/dashboard/other-user-action/invest")},VerifyComponent.prototype.confirmInvest=function(){jQuery("#confirmInvestForm").valid()?(this.create.dataInvest=1,this.create.postLoan()):alert("Harap masukan password")},VerifyComponent=__decorate([a.Component({selector:"verify",template:'\n\t<form class="form-horizontal clearfix row" name="confirmInvestForm" id="confirmInvestForm">\n\t  <div class="col-md-12">\n\t    <div class="form-group">\n        <span class="required">*</span>\n        <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="data.password">\n\t    </div>\n\t  </div>\n\t</form>\n\t  <div class="col-md-12">\n\t    <div class="form-group">\n\t        <div class="col-md-6 col-center">\n\t          <button class="btn btn-default" (click)="cancelConfirmInvest()">Batal</button>\n\t          <button class="btn btn-red" (click)="confirmInvest(data)">Verifikasi</button>\n\t        </div>\n\t    </div>\n\t  </div>\n\t'}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.CreateComponent&&r.CreateComponent)&&e||Object,"function"==typeof(n="undefined"!=typeof o.Router&&o.Router)&&n||Object])],VerifyComponent);var e,n}();n.VerifyComponent=s},923:function(e,n){e.exports='<section class="content">\n <div class="row">\n   <div class="col-md-12">\n    <div class="box bg-transparent">\n       <div class="box-header">\n         <h2 class="box-title pull-left">Tambah Pinjaman</h2>\n       </div>\n       <div class="box-body">\n         <div class="form-login-register">\n           <form class="form-horizontal clearfix row" name="loanForm" id="loanForm">\n            <div *ngIf="dataInvest == 0">\n            <div class="col-md-6">\n               <div class="form-group">\n                 <div class="col-md-12">\n                    <span class="required">*</span>\n                    <input type="text" name="loan_name" placeholder="Nama pinjaman" class="form-control input-md" id="loan_name" [(ngModel)]="loan.loan_name">\n                 </div>\n               </div>\n               <div class="form-group">\n                   <div class="col-md-12">\n                     <span class="required">*</span>\n                     <select class="form-control input-md" name="loan_category" id="loan_category" (change)="getLoanCategoryId($event.target.value)" [(ngModel)]="loan.loan_category">\n                        <option value="0" disabled>Kategori Pinjaman</option>\n                        <option *ngFor="let data of loan_categories" [value]="data.id">\n                          {{ data.description }}\n                        </option>\n                     </select>\n                   </div>\n               </div>\n              <div class="form-group">\n                 <div class="col-md-12">\n                    <span class="required">*</span>\n                    <input type="text" id="other_category" name="other_category" [(ngModel)]="loan.other_category" placeholder="Nama Category" class="form-control input-md">\n                 </div>\n              </div>\n                <div class="form-group">\n                   <div class="col-md-12">\n                     <span class="required">*</span>\n                     <textarea placeholder="Deskripsi" class="form-control input-md"   name="description" id="description" [(ngModel)]="loan.description">\n                     </textarea>\n                   </div>\n               </div>\n            </div>\n             <div class="col-md-6">\n              <div class="form-group">\n                 <div class="col-md-12">\n                    <label>Foto Pinjaman</label>\n                    <input type="file" id="images">\n                 </div>\n              </div>\n               <div class="form-group">\n                 <div class="col-md-10">\n                   <span class="required">*</span>\n                   <input type="text" placeholder="Nominal Investasi" class="form-control input-md" name="amount" id="amount" [(ngModel)]="loan.amount">\n                 </div>\n                   <label class="unit">Rupiah</label>\n               </div>\n                <!-- component due-date -->\n                <due-date></due-date>\n                \n               <div class="form-group">\n                 <div class="col-md-10 clearfix">\n                  <span class="required">*</span>\n                  <input type="text" placeholder="Bunga" class="form-control input-md"  name="interest" id="interest" [(ngModel)]="loan.interest">\n                 </div>\n                   <label class="unit">%/bulan</label>\n               </div>\n               <div class="form-group">\n                 <div class="col-md-10 clearfix">\n                   <span class="required">*</span>\n                   <input type="text" placeholder="Tenor" class="form-control input-md" maxlength="2" minlength="1"  name="tenor" id="tenor" [(ngModel)]="loan.tenor">\n                  </div>\n                  <label class="unit">Bulan</label>\n               </div>\n<!--                  <div class="form-group">\n                 <div class="col-md-12">\n                   <input type="text" placeholder="Charge Free" class="form-control input-md" readonly>\n                 </div>\n               </div> -->\n             </div>\n             </div>\n         </form>\n            <div *ngIf="dataInvest == 0">\n                <div class="col-md-12">\n                <div class="form-group">\n                  <div class="col-md-6 col-center">\n                    <!-- <a href="#/dashboard/investasi" class="btn btn-default">Batal</a> -->\n                    <button class="btn btn-default" (click)="cancelLoan()">Batal</button>\n                    <button class="btn btn-red" (click)="createLoan(loan)">Simpan</button>\n                  </div>\n                </div>\n                </div>\n            </div>\n            <verify *ngIf="dataInvest == 3"></verify>\n         </div>\n       </div>\n      <div align="center" *ngIf="dataInvest == 1"> \n        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n        <span class="sr-only">Loading...</span>\n      </div>\n    </div>\n   </div>\n </div>\n</section>'}});