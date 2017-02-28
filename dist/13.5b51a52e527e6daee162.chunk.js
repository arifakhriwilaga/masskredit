webpackJsonp([13],{703:function(t,o,n){"use strict";var e=n(0),a=n(87),r=n(50),s=function(){function LoanNotBeenApprovedComponent(t,o,n){this.http=t,this.router=o,this.activatedRoute=n,this.headers=new a.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new a.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.data_borrower={access_token:this.access_token,borrower_id:""},this.otp={access_token:this.access_token},this.dataDetailBorrower=0,this.data={},this.dataApprove={access_token:this.access_token,borrower_id:null,invest_id:null,approval_status:null,password:null,otp:null},this.dataSalary={},this.dataBorrowerAmount={},this.dataApproveBorrower=0,this.formConfirm=0,this.otpUrl="https://masscredit-api.stagingapps.net/user/investment/approval-otp",this.dataConfirm=0}return LoanNotBeenApprovedComponent.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe(function(o){var n=o.id;t.data_borrower.borrower_id=n,t.dataApprove.borrower_id=n});this.http.post("https://masscredit-api.stagingapps.net/user/borrower/detail",this.data_borrower,this.options).map(function(t){return t.json()}).subscribe(function(o){t.data=o.data,t.dataApprove.invest_id=o.data.invest_id,t.dataSalary=o.data.amount,t.dataBorrowerAmount=o.data.borrower_amount,t.delimiterSalary(t.dataSalary)})},LoanNotBeenApprovedComponent.prototype.approveInvest=function(){this.dataApprove.approval_status=1,this.getOtp()},LoanNotBeenApprovedComponent.prototype.rejectInvest=function(){this.dataApprove.approval_status=0,this.getOtp()},LoanNotBeenApprovedComponent.prototype.sendDataApprove=function(){var t=this;this.http.post("https://masscredit-api.stagingapps.net/user/investment/approve",this.dataApprove,this.options).map(function(t){return t.json()}).subscribe(function(o){var n=o.meta.code;"200"==n&&(alert("Investasi berhasil"),jQuery("#modalFormConfirm").modal("toggle"),t.router.navigateByUrl("/dashboard/user-action/user-invest"))},function(t){var o=JSON.parse(t._body),n=(o.meta.code,o.meta.message);"Password salah!"==n&&alert("Password salah!"),"Verifikasi salah."==n&&alert("Verifikasi salah.")})},LoanNotBeenApprovedComponent.prototype.delimiterSalary=function(t){try{var o=!1,n=t.toString();n<0&&(o=!0),n=n.replace(".",""),n=n.replace("-","");for(var e="",a=n.length,r=0,s=a;s>0;s--)r+=1,e=r%3==1&&1!=r?n.substr(s-1,1)+"."+e:n.substr(s-1,1)+e;o&&(e="-"+e);var i="Rp.";this.dataSalary=i.concat(e)}finally{this.delimiterBorrowerAmount(this.dataBorrowerAmount)}},LoanNotBeenApprovedComponent.prototype.delimiterBorrowerAmount=function(t){try{var o=!1,n=t.toString();n<0&&(o=!0),n=n.replace(".",""),n=n.replace("-","");for(var e="",a=n.length,r=0,s=a;s>0;s--)r+=1,e=r%3==1&&1!=r?n.substr(s-1,1)+"."+e:n.substr(s-1,1)+e;o&&(e="-"+e);var i="Rp.";this.dataBorrowerAmount=i.concat(e)}finally{return this.dataDetailBorrower=1,!0}},LoanNotBeenApprovedComponent.prototype.getOtp=function(){var t=this;this.http.post(this.otpUrl,this.otp,this.options).map(function(t){return t.json()}).subscribe(function(o){t.dataApprove.otp=o.data.otp,t.formConfirm=1},function(t){var o=JSON.parse(t._body),n=(o.meta.code,o.meta.message);"Password salah!"==n&&alert("Password salah!")})},LoanNotBeenApprovedComponent=__decorate([e.Component({selector:"loan-not-been-approved",template:n(945)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.Http&&a.Http)&&t||Object,"function"==typeof(o="undefined"!=typeof r.Router&&r.Router)&&o||Object,"function"==typeof(s="undefined"!=typeof r.ActivatedRoute&&r.ActivatedRoute)&&s||Object])],LoanNotBeenApprovedComponent);var t,o,s}();o.LoanNotBeenApprovedComponent=s},849:function(t,o,n){"use strict";var e=n(0),a=n(50),r=n(87),s=n(153),i=n(72),d=n(703),l=n(850);o.routes=[{path:"",component:d.LoanNotBeenApprovedComponent}];var p=function(){function LoanNotBeenApprovedModule(){}return LoanNotBeenApprovedModule.routes=o.routes,LoanNotBeenApprovedModule=__decorate([e.NgModule({declarations:[d.LoanNotBeenApprovedComponent,l.VerifyComponent],imports:[r.HttpModule,s.FormsModule,i.CommonModule,a.RouterModule.forChild(o.routes)],providers:[]}),__metadata("design:paramtypes",[])],LoanNotBeenApprovedModule)}();Object.defineProperty(o,"__esModule",{value:!0}),o.default=p},850:function(t,o,n){"use strict";function __export(t){for(var n in t)o.hasOwnProperty(n)||(o[n]=t[n])}__export(n(851))},851:function(t,o,n){"use strict";var e=n(0),a=n(50),r=n(703),s=function(){function VerifyComponent(t,o){this.dataApprove=t,this.router=o,this.invest=this.dataApprove.dataApprove,this.approvalStatus=this.dataApprove.dataApprove.approval_status}return VerifyComponent.prototype.ngOnInit=function(){jQuery("#modalFormConfirm").modal({backdrop:"static",keyboard:!1}),jQuery("#confirmInvestForm").validate({rules:{password:{required:!0},otp:{required:!0}}})},VerifyComponent.prototype.cancelConfirmInvest=function(){jQuery("#modalFormConfirm").modal("toggle"),this.router.navigateByUrl("/dashboard/user-action/user-invest")},VerifyComponent.prototype.submitConfirmInvest=function(t){jQuery("#confirmInvestForm").valid()?1==this.approvalStatus?this.dataApprove.sendDataApprove():this.dataApprove.sendDataApprove():alert("Data tidak valid")},VerifyComponent=__decorate([e.Component({selector:"verify",template:n(946)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof r.LoanNotBeenApprovedComponent&&r.LoanNotBeenApprovedComponent)&&t||Object,"function"==typeof(o="undefined"!=typeof a.Router&&a.Router)&&o||Object])],VerifyComponent);var t,o}();o.VerifyComponent=s},945:function(t,o){t.exports='<section class="content">\n<div *ngIf="dataDetailBorrower == 0">\n<div class="row">\n  <div align="center"> \n    <br><br><br><br><br>\n    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n    <span class="sr-only">Loading...</span>\n  </div>\n</div>\n</div>\n<div *ngIf="dataDetailBorrower == 1">\n  <div *ngIf="dataApproveBorrower == 0">\n    <div class="col-xs-12" align="center">\n      <div class="row" >\n        <label><h2 style="font-size: 24px;color: orange;">Detail Peminjam</h2></label>\n      </div>\n    </div>\n    <div class="col-md-4">\n       <div class="row">\n          <div class="box box-solid radius-10" style="border: 2px">\n            <div class="form-group">\n                <img src="{{ data.borrower_image }}" alt="Foto Diri Peminjam" class="thumbnail" width="250px" height="250px">\n            </div>\n          </div>\n      </div>\n    </div>\n    <div class="col-md-7">\n      <div class="row">\n          <div class="box box-solid radius-10" style="border: 2px">\n            <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Nama Lengkap</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Nama Lengkap" class="form-control input-md" name="full_name" id="full_name" value="{{ data.borrower_name }}" disabled>\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Borrower</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Borrower" class="form-control input-md" name="borrower" id="borrower" value="{{ data.borrower}}" disabled>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Credit</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Credit" class="form-control input-md" name="credit" id="credit" value="{{ data.fund_history }}" disabled>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Salary</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Salary" class="form-control input-md" name="salary" id="salary" value="{{ data.user_class }}" disabled>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Review</label>\n              </div>\n              <div class="col-xs-7">\n                <div class="unit">\n                    <!-- <i class="fa fa-star-half-full full" area-hidden="true"></i> -->\n                    <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                    <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                    <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                    <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px; color: orange"></i>\n                    <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                    <!-- <span class="bs-glyphicons-list">\n                    <span class="glyphicon glyphicon-star star-color star-full"></span>\n                    <span class="glyphicon glyphicon-star star-color font half"></span>\n                    </span> -->\n                    <span>({{ data.avg_reviews }} %)</span>\n                    <!-- <span>(12.000 user)</span> -->\n                </div>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Jumlah Pinjaman</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Nilai Pinjaman" class="form-control input-md" name="nilai_pinjaman" id="nilai_pinjaman" value="{{ dataBorrowerAmount }}" disabled>\n              </div>\n           </div>\n          </div>\n      </div>\n    </div>\n    <div class="col-md-12">\n       <div class="form-group">\n          <div class="col-md-6 col-center">\n            <button class="btn btn-default" (click)="rejectInvest()">Tolak</button>\n            <button class="btn btn-red" (click)="approveInvest()">Setuju</button>\n          </div>\n       </div>\n    </div>\n    <!-- modal verify -->\n    <verify *ngIf="formConfirm == 1"></verify>\n  </div>\n</div>\n</section>'},946:function(t,o){t.exports='<div class="modal fade" id="modalFormConfirm" style="z-index:9000;">\n<div class="modal-dialog">\n  <div class="modal-content">\n  <div class="modal-body">\n    <!-- <button type="button" class="close" style="color: #ffffff">&times;</button> -->\n      <div class="row">\n        <div class="col-md-12">\n        <div class="form-group" align="center">\n          <label>\n            <h2 style="font-size: 24px;color: orange;">Konfirmasi Investasi</h2>\n          </label>\n          <div class="row">\n            <div class="input-group" align="center">\n            <form name="confirmInvestForm" id="confirmInvestForm">\n              <div class="form-group">\n                <input type="text" name="otp" placeholder="Code OTP" class="form-control input-md" id="otp" [(ngModel)]="invest.otp" disabled>\n              </div>\n              <div class="form-group">\n                <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="invest.password">\n              </div>\n            </form>\n            </div>\n          </div>\n        </div>\n        <div class="form-group">\n        <div class="col-md-6 col-center">\n          <button href="#/dashboard/fund/fund-withdrawal" class="btn btn-default" (click)="cancelConfirmInvest()">Batal</button>\n          <button class="btn btn-red" (click)="submitConfirmInvest(invest)">Konfirmasi</button>\n        </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>'}});