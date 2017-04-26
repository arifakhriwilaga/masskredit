webpackJsonp([15],{705:function(t,e,a){"use strict";var n=a(0),o=a(87),r=a(50),i=function(){function DetailComponent(t,e,a){this.http=t,this.router=e,this.activatedRoute=a,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.invest_id="",this.data={},this.dataSalary={},this.dataBorrowerAmount={},this.dataBorrower=[],this.loaderDetailInvest=0,this.dataAmount={},this.dataPayment=[],this.dataArrayNull=0,this.data_list_borrower={access_token:this.access_token,invest_id:""},this.listBorrowerUrl="https://masscredit-api.stagingapps.net/user/borrower/getlist",this.data_detail_invest={access_token:this.access_token,loan_id:""},this.detailInvestUrl="https://masscredit-api.stagingapps.net/user/loan/detail",this.loaderBorrowerApproved=0,this.dataDetailBorrower={},this.showPart=0}return DetailComponent.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe(function(e){var a=e.id;t.data_detail_invest.loan_id=a,t.data_list_borrower.invest_id=a});this.getListBorrower(),this.getDetailMyInvest()},DetailComponent.prototype.backFund=function(){this.router.navigateByUrl("/dashboard/fund")},DetailComponent.prototype.getListBorrower=function(){var t=this;this.http.post(this.listBorrowerUrl,this.data_list_borrower,this.options).map(function(t){return t.json()}).subscribe(function(e){""==e.data.borrower&&(t.dataArrayNull=1),t.dataBorrower=e.data.borrower;for(var a=(e.meta.code,0);a<t.dataBorrower.length;a++){var n=t.dataBorrower[a],o=n.loan_amount,r=!1,i=o.toString();i<0&&(r=!0),i=i.replace(".",""),i=i.replace("-","");for(var s="",d=i.length,l=0,p=d;p>0;p--)l+=1,s=l%3==1&&1!=l?i.substr(p-1,1)+"."+s:i.substr(p-1,1)+s;r&&(s="-"+s);var c="Rp.";n.loan_amount=c.concat(s)}},function(e){var a=JSON.parse(e._body),n=a.meta.message;a.meta.code;if("unauthorized"==n)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},DetailComponent.prototype.getDetailMyInvest=function(){var t=this;this.http.post(this.detailInvestUrl,this.data_detail_invest,this.options).map(function(t){return t.json()}).subscribe(function(e){var a="assets/img/default_image.jpg";null==e.data.images[0]&&(e.data.images[0]=a),t.data=e.data;var n=(e.meta.code,e.data.amount);try{var o=!1,r=n.toString();r<0&&(o=!0),r=r.replace(".",""),r=r.replace("-","");for(var i="",s=r.length,d=0,l=s;l>0;l--)d+=1,i=d%3==1&&1!=d?r.substr(l-1,1)+"."+i:r.substr(l-1,1)+i;o&&(i="-"+i);var p="Rp.";t.dataAmount=p.concat(i)}finally{t.loaderDetailInvest=1}},function(e){var a=JSON.parse(e._body),n=a.meta.message;a.meta.code;if("unauthorized"==n)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},DetailComponent.prototype.cancelDetailInvest=function(){this.router.navigateByUrl("/dashboard/user-action/user-invest")},DetailComponent.prototype.showDetailBorrowerApproved=function(t,e){this.router.navigate(["/dashboard/user-action/user-invest/detail/",e,"loan-approved",t])},DetailComponent.prototype.showDetailBorrowerNotApproved=function(t,e){var a=1;this.statusPart=1,this.showPart=a,this.borrowerId=t,this.investId=e},DetailComponent.prototype.onHide2=function(t){this.showPart=t},DetailComponent=__decorate([n.Component({selector:"detail",template:a(979)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object,"function"==typeof(e="undefined"!=typeof r.Router&&r.Router)&&e||Object,"function"==typeof(i="undefined"!=typeof r.ActivatedRoute&&r.ActivatedRoute)&&i||Object])],DetailComponent);var t,e,i}();e.DetailComponent=i},706:function(t,e,a){"use strict";function __export(t){for(var a in t)e.hasOwnProperty(a)||(e[a]=t[a])}__export(a(866))},856:function(t,e,a){"use strict";var n=a(0),o=a(50),r=a(87),i=a(153),s=a(62),d=a(705),l=a(865),p=a(706),c=a(868);e.routes=[{path:"",component:d.DetailComponent},{path:"loan-approved/:borrowerId",loadChildren:function(){return a.e(14).then(a.bind(null,859)).then(function(t){return t.default})}}];var v=function(){function DetailModule(){}return DetailModule.routes=e.routes,DetailModule=__decorate([n.NgModule({declarations:[d.DetailComponent,l.PartComponent,p.LoanNotApprovedComponent,c.VerifyComponent],imports:[r.HttpModule,i.FormsModule,o.RouterModule.forChild(e.routes),s.CommonModule],providers:[]}),__metadata("design:paramtypes",[])],DetailModule)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=v},865:function(t,e,a){"use strict";function __export(t){for(var a in t)e.hasOwnProperty(a)||(e[a]=t[a])}__export(a(867))},866:function(t,e,a){"use strict";var n=a(0),o=a(87),r=a(50),i=a(705),s=function(){function LoanNotApprovedComponent(t,e,a){this.http=t,this.router=e,this.detail=a,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token=JSON.parse(localStorage.getItem("access_token")),this.dataDetailInvestor={},this.onHide=new n.EventEmitter,this.formConfirm=0,this.loaderDetailBorrower=0,this.dataBorrower={access_token:this.access_token,borrower_id:null,invest_id:null},this.getDetailBorrowerUrl="https://masscredit-api.stagingapps.net/user/borrower/detail",this.dataDetailBorrower={},this.dataApprove={access_token:this.access_token,borrower_id:null,invest_id:null,approval_status:null,password:null,otp:null},this.postApproveUrl="https://masscredit-api.stagingapps.net/user/investment/approve",this.dataIsOn=[{value:1},{value:0}],this.isOn=0,this.otpUrl="https://masscredit-api.stagingapps.net/user/investment/approval-otp",this.dataConfirm=0,this.otp={access_token:this.access_token}}return LoanNotApprovedComponent.prototype.ngOnInit=function(){jQuery("#FormApprove").modal({backdrop:"static",keyboard:!1}),void 0!=this.incomingBorrowerId&&void 0!=this.incomingInvestId&&(this.dataApprove.invest_id=this.incomingInvestId,this.dataApprove.borrower_id=this.incomingBorrowerId,this.dataBorrower.invest_id=this.incomingInvestId,this.dataBorrower.borrower_id=this.incomingBorrowerId,null!=this.dataBorrower.invest_id&&null!=this.dataBorrower.borrower_id&&this.getDetailBorrower())},LoanNotApprovedComponent.prototype.hideDetailBorrower=function(t){jQuery("#FormApprove").modal("toggle"),this.onHide.emit(t)},LoanNotApprovedComponent.prototype.getDetailBorrower=function(){var t=this;this.http.post(this.getDetailBorrowerUrl,this.dataBorrower,this.options).map(function(t){return t.json()}).subscribe(function(e){e.meta.code;t.dataDetailBorrower=e.data,t.dataSalary=e.data.amount,t.dataBorrowerAmount=e.data.borrower_amount,t.delimiterSalary(t.dataSalary)},function(e){var a=JSON.parse(e._body),n=a.meta.message;a.meta.code;if("unauthorized"==n)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},LoanNotApprovedComponent.prototype.sendDataApprove=function(){var t=this;this.http.post(this.postApproveUrl,this.dataApprove,this.options).map(function(t){return t.json()}).subscribe(function(e){e.meta.code;alert("Investasi berhasil"),t.router.navigateByUrl("/dashboard/user-action/user-invest")},function(t){var e=JSON.parse(t._body),a=(e.meta.code,e.meta.message);"Password salah!"==a&&alert("Password salah!"),"Verifikasi salah."==a&&alert("Verifikasi salah.")})},LoanNotApprovedComponent.prototype.delimiterSalary=function(t){try{var e=!1,a=t.toString();a<0&&(e=!0),a=a.replace(".",""),a=a.replace("-","");for(var n="",o=a.length,r=0,i=o;i>0;i--)r+=1,n=r%3==1&&1!=r?a.substr(i-1,1)+"."+n:a.substr(i-1,1)+n;e&&(n="-"+n);var s="Rp.";this.dataSalary=s.concat(n)}finally{this.delimiterBorrowerAmount(this.dataBorrowerAmount)}},LoanNotApprovedComponent.prototype.delimiterBorrowerAmount=function(t){try{var e=!1,a=t.toString();a<0&&(e=!0),a=a.replace(".",""),a=a.replace("-","");for(var n="",o=a.length,r=0,i=o;i>0;i--)r+=1,n=r%3==1&&1!=r?a.substr(i-1,1)+"."+n:a.substr(i-1,1)+n;e&&(n="-"+n);var s="Rp.";this.dataBorrowerAmount=s.concat(n)}finally{return this.loaderDetailBorrower=1,!0}},LoanNotApprovedComponent.prototype.approveInvest=function(){0!==this.isOn&&(this.loaderDetailBorrower=0,this.dataApprove.approval_status=1,this.getOtp())},LoanNotApprovedComponent.prototype.rejectInvest=function(){this.loaderDetailBorrower=0,this.dataApprove.approval_status=0,this.getOtp()},LoanNotApprovedComponent.prototype.getOtp=function(){var t=this;this.http.post(this.otpUrl,this.otp,this.options).map(function(t){return t.json()}).subscribe(function(e){t.dataApprove.otp=e.data.otp,t.loaderDetailBorrower=2},function(t){var e=JSON.parse(t._body);e.meta.code,e.meta.message})},__decorate([n.Input(),__metadata("design:type",String)],LoanNotApprovedComponent.prototype,"incomingBorrowerId",void 0),__decorate([n.Input(),__metadata("design:type",String)],LoanNotApprovedComponent.prototype,"incomingInvestId",void 0),__decorate([n.Output(),__metadata("design:type",Object)],LoanNotApprovedComponent.prototype,"onHide",void 0),LoanNotApprovedComponent=__decorate([n.Component({selector:"loan-not-approved",template:a(983)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Http&&o.Http)&&t||Object,"function"==typeof(e="undefined"!=typeof r.Router&&r.Router)&&e||Object,"function"==typeof(s="undefined"!=typeof i.DetailComponent&&i.DetailComponent)&&s||Object])],LoanNotApprovedComponent);var t,e,s}();e.LoanNotApprovedComponent=s},867:function(t,e,a){"use strict";var n=a(0),o=function(){function PartComponent(){this.statusInvestor=new n.EventEmitter,this.onHide2=new n.EventEmitter}return PartComponent.prototype.onHide=function(t){this.onHide2.emit(t)},__decorate([n.Input(),__metadata("design:type",String)],PartComponent.prototype,"dataBorrowerId",void 0),__decorate([n.Input(),__metadata("design:type",String)],PartComponent.prototype,"dataInvestId",void 0),__decorate([n.Output(),__metadata("design:type",Object)],PartComponent.prototype,"statusInvestor",void 0),__decorate([n.Output(),__metadata("design:type",Object)],PartComponent.prototype,"onHide2",void 0),PartComponent=__decorate([n.Component({selector:"part",template:'<loan-not-approved [incomingBorrowerId]="dataBorrowerId" [incomingInvestId]="dataInvestId"  (onHide)="onHide($event)"></loan-not-approved>'}),__metadata("design:paramtypes",[])],PartComponent)}();e.PartComponent=o},868:function(t,e,a){"use strict";function __export(t){for(var a in t)e.hasOwnProperty(a)||(e[a]=t[a])}__export(a(869))},869:function(t,e,a){"use strict";var n=a(0),o=a(50),r=a(706),i=function(){function VerifyComponent(t,e){this.dataApprove=t,this.router=e,this.data=this.dataApprove.dataApprove,this.approvalStatus=this.dataApprove.dataApprove.approval_status,this.hideDetailBorrower=new n.EventEmitter,this.showLoader=new n.EventEmitter}return VerifyComponent.prototype.ngOnInit=function(){jQuery("#modalFormConfirm").modal({backdrop:"static",keyboard:!1}),jQuery("#confirmInvestForm").validate({rules:{password:{required:!0},otp:{required:!0}}})},VerifyComponent.prototype.cancelConfirmInvest=function(){this.hideDetailBorrower.emit(0)},VerifyComponent.prototype.submitConfirmInvest=function(t){jQuery("#confirmInvestForm").valid()?(1==this.approvalStatus?this.dataApprove.sendDataApprove():this.dataApprove.sendDataApprove(),this.hideDetailBorrower.emit(0)):alert("Data tidak valid")},__decorate([n.Output(),__metadata("design:type",Object)],VerifyComponent.prototype,"hideDetailBorrower",void 0),__decorate([n.Output(),__metadata("design:type",Object)],VerifyComponent.prototype,"showLoader",void 0),VerifyComponent=__decorate([n.Component({selector:"verify",template:a(984)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof r.LoanNotApprovedComponent&&r.LoanNotApprovedComponent)&&t||Object,"function"==typeof(e="undefined"!=typeof o.Router&&o.Router)&&e||Object])],VerifyComponent);var t,e}();e.VerifyComponent=i},979:function(t,e){t.exports='<div class="box-header" align="center">\n  <h2 class="box-title">Detail Investasi</h2>\n</div>\n<div class="box-body">\n  <div  *ngIf="loaderDetailInvest == 0">\n  <div class="row">\n    <div align="center"> \n      <br><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n      <span class="sr-only">Loading...</span>\n    </div>\n  </div>\n  </div>\n  <div  *ngIf="loaderDetailInvest == 1">\n    <div class="row">\n      <div class="col-md-4">\n      <div class="box box-solid radius-10" style="border: 100px">\n        <div align="center">\n          <label><h2 style="font-size: 24px;color: orange;">Investasi</h2></label>\n        </div>\n        <div class="form-group">\n          <br><img src="{{ data.images[0] }}" alt="Foto Investasi" class="thumbnail" width="250px" height="250px">\n        </div>\n        <div class="form-group">\n          <button class="btn btn-default" (click)="cancelDetailInvest()">Kembali</button>\n        </div>\n      </div>\n      </div>\n      <div class="col-md-7">\n      <div class="box box-solid radius-10">\n        <div class="box-body">\n          <div align="center">\n           <label><h2 style="font-size: 24px;color: orange;">Detail Investasi</h2></label>\n          </div>\n          <br>\n          <div class="col-md-12 clearfix">\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Nama Investasi</label>\n            </div>\n            <div class="col-md-7 clearfix">\n              <input type="text" placeholder="Nama Investasi" class="form-control input-md" name="invest_name" id="invest_name" value="{{ data.loan_name }}" disabled>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Jumlah Investasi</label>\n            </div>\n            <div class="col-md-7 clearfix">\n              <input type="text" placeholder="Jumlah Investasi" class="form-control input-md" name="amount" id="amount" value="{{ dataAmount }}" disabled>\n            </div>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          <div class="form-group">\n             <div class="col-md-4 clearfix">\n               <label class="unit">Tipe Investasi</label>\n             </div>\n             <div class="col-md-7 clearfix">\n               <input type="text" placeholder="Tipe Investasi" class="form-control input-md" name="tipe" id="tipe" value="{{ data.tipe }}" disabled>\n             </div>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Deskipsi</label>\n            </div>\n            <div class="col-md-7 clearfix">\n              <textarea type="text" placeholder="Description" class="form-control input-md" name="description" id="description" value="{{ data.collateral_value }}" disabled></textarea>\n            </div>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Batas Penawaran</label>\n            </div>\n            <div class="col-md-7 clearfix">\n              <input  type="text" placeholder="Batas Akhir Penawaran" name="due_date" class="form-control input-md" id="due_date" value="{{ data.due_date }}" disabled>\n            </div>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Bunga</label>\n            </div>\n            <div class="col-md-5 clearfix">\n              <input type="text" placeholder="Bunga" class="form-control input-md" name="interest" id="interest" value="{{ data.interest }}" disabled>\n            </div>\n            <label class="unit">%/Bulan</label>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 clearfix">\n              <label class="unit">Tenor</label>\n            </div>\n            <div class="col-md-5">\n              <input type="text" placeholder="Tenor" class="form-control input-md" name="tenor" id="tenor" value="{{ data.tenor }}" disabled>\n            </div>\n            <label class="unit">Bulan</label>\n          </div>\n          <div class="form-group">\n            <!-- null -->\n          </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-12">\n      <label><h2 style="font-size: 30px;color: orange;">Daftar Peminjam</h2></label>\n        <div class="box-body data-tables table-responsive">\n        <table class="table table-hover" id="example2">\n          <thead>\n            <tr>\n              <th>No.</th>\n              <th>Nama Peminjam</th>\n              <th>Nominal Pinjaman (Rp)</th>\n              <th>Status</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngIf="dataArrayNull == 1">\n              <td colspan="5" align="center">Data belum tersedia</td>\n            </tr>\n            <tr *ngFor="let dataBorrower of dataBorrower, let i =\'index\'">\n              <td>{{ i + 1 }}</td>\n              <td>{{ dataBorrower.borrower_name }}</td>\n              <td>{{ dataBorrower.loan_amount }}</td>\n              <td>{{ dataBorrower.status }}</td>\n              <td *ngIf="dataBorrower.status == \'Tunda\'">\n                <button class="pull-right" (click)="showDetailBorrowerNotApproved(dataBorrower.id, data.id)"><i aria-hidden="true" class="fa fa-search"></i></button>\n              </td>\n              <td *ngIf="dataBorrower.status == \'Setuju\' || dataBorrower.status == \'Tolak\'">\n                <button class="pull-right" (click)="showDetailBorrowerApproved(dataBorrower.id, data.id)"><i aria-hidden="true" class="fa fa-search"></i></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        </div>  \n      </div>\n      <!-- component show detail investor not approved -->\n      <part *ngIf="showPart == 1" [dataBorrowerId]="borrowerId" [dataInvestId]="investId" (onHide2)="onHide2($event)"></part>\n    </div>\n  </div>\n</div>'},983:function(t,e){t.exports='<section class="content">\n<!-- Modal -->\n<div class="modal fade modal-lg" id="FormApprove" style="z-index:9000;">\n  <div class="modal-dialog modal-lg">\n    <!-- Modal content-->\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" (click)="hideDetailBorrower(0)">&times;</button>\n      <h4 class="modal-title">Detail Borrower</h4>\n    </div>\n    <div class="modal-body">\n    <div  *ngIf="loaderDetailBorrower == 0">\n    <div class="row">\n      <div align="center"> \n        <br><br><br><br><br>\n        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n        <span class="sr-only">Loading...</span>\n      </div>\n    </div>\n    </div>\n    <div *ngIf="loaderDetailBorrower == 1">\n      <div class="row">\n      <div class="col-md-4">\n       <img src="{{ dataDetailBorrower.borrower_image }}" alt="Foto Peminjam">\n      </div>\n      <div class="col-md-8">\n        <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">Nama Lengkap</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Nama Lengkap" class="form-control input-md" name="full_name" id="full_name" value="{{ dataDetailBorrower.borrower_name }}" disabled>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">Borrower</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Borrower" class="form-control input-md" name="borrower" id="borrower" value="{{ dataDetailBorrower.borrower }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">Credit</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Credit" class="form-control input-md" name="credit" id="credit" value="{{ dataDetailBorrower.fund_history }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">Salary</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Salary" class="form-control input-md" name="salary" id="salary" value="{{ dataDetailBorrower.user_class }}" disabled>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">Review</label>\n          </div>\n          <div class="col-xs-7">\n            <div class="unit">\n                <!-- <i class="fa fa-star-half-full full" area-hidden="true"></i> -->\n                <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px; color: orange"></i>\n                <i class="fa fa-star null" aria-hidden="true" style="font-size: 24px;color: orange"></i>\n                <!-- <span class="bs-glyphicons-list">\n                <span class="glyphicon glyphicon-star star-color star-full"></span>\n                <span class="glyphicon glyphicon-star star-color font half"></span>\n                </span> -->\n                <!-- <span>({{ avg_reviews }} %)</span> -->\n                <span>({{ dataDetailBorrower.avg_reviews }} %)</span>\n            </div>\n          </div>\n       </div>\n       <div class="form-group">\n          <div class="col-xs-4">\n            <label class="unit">Jumlah Pinjaman</label>\n          </div>\n          <div class="col-xs-7">\n            <input type="text" placeholder="Nilai Pinjaman" class="form-control input-md" name="nilai_pinjaman" id="nilai_pinjaman" value="{{ dataBorrowerAmount }}" disabled>\n          </div>\n       </div> \n      </div>\n      <div class="col-xs-12">\n        <div align="center">\n          <span class="input-group-addon">\n            <input type="checkbox" [checked]="isOn === dataIsOn[0].value" (change)="$event.target.checked? (isOn = dataIsOn[0].value) : (isOn = dataIsOn[1].value)">\n            <label>Saya setuju dengan syarat dan ketentuan</label>\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-12">\n      <div class="form-group">\n        <div class="col-md-6 col-center">\n          <button class="btn btn-default" (click)="rejectInvest()">Tolak</button>\n          <button class="btn btn-red" (click)="approveInvest()" [ngClass]="{disabled:isOn === 0}">Setuju</button>\n        </div>\n      </div>\n      </div>\n    </div>\n    </div>\n    <verify *ngIf="loaderDetailBorrower == 2" (hideDetailBorrower)="hideDetailBorrower($event)" (showLoader)="showLoader($event)"></verify> \n    </div>\n  </div>\n  </div>\n</div>\n</section>'},984:function(t,e){t.exports='<div class="row">\n  <div class="col-md-12">\n  <div class="form-group" align="center">\n    <label>\n      <h2 style="font-size: 24px;color: orange;">Konfirmasi Investasi</h2>\n    </label>\n    <div class="row">\n      <div class="input-group" align="center">\n      <form name="confirmInvestForm" id="confirmInvestForm">\n        <div class="form-group">\n          <input type="text" name="otp" placeholder="Code OTP" class="form-control input-md" id="otp" [(ngModel)]="data.otp" disabled>\n        </div>\n        <div class="form-group">\n          <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="data.password">\n        </div>\n      </form>\n      </div>\n    </div>\n  </div>\n  <div class="form-group">\n  <div class="col-md-6 col-center">\n    <button class="btn btn-default" (click)="cancelConfirmInvest()">Batal</button>\n    <button class="btn btn-red" (click)="submitConfirmInvest(data)">Konfirmasi</button>\n  </div>\n  </div>\n  </div>\n</div>'}});