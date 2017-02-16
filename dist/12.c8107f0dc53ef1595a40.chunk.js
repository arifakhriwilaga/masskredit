webpackJsonp([12],{703:function(n,a,t){"use strict";var e=t(0),i=t(109),o=t(62),s=function(){function IndexComponent(n,a){this.router=n,this.http=a,this.listfundUrl="https://masscredit-api.stagingapps.net/user/fund/get-list",this.confirmfundUrl="https://masscredit-api.stagingapps.net/user/fund/confirm",this.headers=new i.Headers({"Content-Type":"application/json",API_KEY:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new i.RequestOptions({headers:this.headers}),this.access_token={access_token:JSON.parse(localStorage.getItem("access_token"))},this.funds=[],this.current_page=null,this.per_page=null,this.total=null,this.array_total=[],this.param=new i.URLSearchParams,this.acces_token=JSON.parse(localStorage.getItem("access_token")),this.limit=10,this.page=1,this.data_get_list_fund={access_token:this.acces_token,page:this.page,limit:this.limit},this.dataArrayNull=0,this.dataListFundAdd=0,this.data={access_token:this.acces_token,fund_id:null,struct_image:null,confirm_date:null},this.loaderDana=0,this.loaderConfirmFund=1,this.dataDetailDana={access_token:JSON.parse(localStorage.getItem("access_token")),fund_id:""},this.dataDetailBorrower={},this.detail={},this.bank={},this.dataAmount={}}return IndexComponent.prototype.ngOnInit=function(){this.getListFundAdd()},IndexComponent.prototype.linkCreateFund=function(){this.router.navigateByUrl("/dashboard/fund/create")},IndexComponent.prototype.getListFundAdd=function(){var n=this;this.http.post(this.listfundUrl,this.data_get_list_fund,this.options).map(function(n){return n.json()}).subscribe(function(a){""==a.data.fund&&(n.dataArrayNull=1);var t=a.meta.code,e=(a.meta.message,a.data.fund),i=a.data.paging.current_page,o=(a.data.paging.per_page,a.data.paging.total);n.funds=e;for(var s=0;s<n.funds.length;s++){var d=n.funds[s],r=d.amount,l=!1,c=r.toString();c<0&&(l=!0),c=c.replace(".",""),c=c.replace("-","");for(var u="",m=c.length,p=0,f=m;f>0;f--)p+=1,u=p%3==1&&1!=p?c.substr(f-1,1)+"."+u:c.substr(f-1,1)+u;l&&(u="-"+u);var h="Rp.";d.amount=h.concat(u)}if(n.current_page=i,n.dataListFundAdd=1,200==t){var v=Math.ceil(o/n.limit);n.total_pagination=v;for(var g=1;g<=v;g++)n.array_total.push(g)}},function(a){var t=JSON.parse(a._body),e=t.meta.message;if("unauthorized"==e)return alert("Maaf session anda telah habis silahkan login kembali"),n.router.navigateByUrl("/dashboard/sign-out")})},IndexComponent.prototype.linkTo=function(n){var a=this,t={access_token:this.acces_token,page:n,limit:this.limit};this.http.post("https://masscredit-api.stagingapps.net/user/fund/get-list",t,this.options).map(function(n){return n.json()}).subscribe(function(n){var t=(n.meta.code,n.meta.message,n.data.fund),e=n.data.paging.current_page;n.data.paging.per_page,n.data.paging.total;a.funds=t,a.current_page=e},function(n){var t=JSON.parse(n._body),e=t.meta.message;if("unauthorized"==e)return alert("Maaf session anda telah habis silahkan login kembali"),a.router.navigateByUrl("/dashboard/sign-out")})},IndexComponent.prototype.showDetailDana=function(n){var a=this;this.dataDetailDana.fund_id=n,jQuery("#myModal").modal({backdrop:"static",keyboard:!1}),this.http.post("https://masscredit-api.stagingapps.net/user/fund/get-detail",this.dataDetailDana,this.options).map(function(n){return n.json()}).subscribe(function(n){var t=n.data,e=n.data.bank;1==e&&(a.bank="BCA"),2==e&&(a.bank="Mandiri"),3==e&&(a.bank="Danamon"),4==e&&(a.bank="Sinarmas"),5==e&&(a.bank="BNI"),6==e&&(a.bank="Niaga"),"undefined"==e&&(a.bank=""),a.dataAmount=n.data.amount,a.delimiterAmount(a.dataAmount),a.detail=t})},IndexComponent.prototype.delimiterAmount=function(n){try{var a=!1,t=n.toString();t<0&&(a=!0),t=t.replace(".",""),t=t.replace("-","");for(var e="",i=t.length,o=0,s=i;s>0;s--)o+=1,e=o%3==1&&1!=o?t.substr(s-1,1)+"."+e:t.substr(s-1,1)+e;a&&(e="-"+e);var d="Rp.";this.dataAmount=d.concat(e)}finally{return this.loaderDana=1,!0}},IndexComponent.prototype.hideDetailDana=function(){jQuery("#myModal").modal("toggle"),this.loaderDana=0},IndexComponent.prototype.showConfirmFund=function(n){this.data.fund_id=n,jQuery("#modalFormConfirm").modal({backdrop:"static",keyboard:!1})},IndexComponent.prototype.postConfirmAddFund=function(){var n=this;this.http.post(this.confirmfundUrl,this.data,this.options).map(function(n){return n.json()}).subscribe(function(a){a.meta.code,a.meta.message;alert("Konfirmasi penambahan dana berhasil"),n.loaderConfirmFund=1,jQuery("#modalFormConfirm").modal("toggle"),n.router.navigateByUrl("/dashboard/fund")},function(a){var t=JSON.parse(a._body),e=t.meta.message;if("unauthorized"==e)return alert("Maaf session anda telah habis silahkan login kembali"),n.router.navigateByUrl("/dashboard/sign-out")})},IndexComponent.prototype.cancelConfirmFund=function(){jQuery("#modalFormConfirm").modal("toggle")},IndexComponent.prototype.submitConfirmFund=function(){if(jQuery("#confirmForm").valid()){this.loaderConfirmFund=0;var n=document.getElementById("struct_image"),a=n.files[0],t=new Uint8Array([1,2,3]),e=t.buffer,i=new Blob([e]);void 0==a&&(a=i),this.encodeImage(a).onload=function(n,a){try{var t=n.target.result.split(",")[1];"AQID"==t&&(this.data.struct_image=null),"AQID"!=t&&(this.data.struct_image=t)}finally{this.postConfirmAddFund()}}.bind(this)}else alert("Data tidak valid")},IndexComponent.prototype.encodeImage=function(n){var a=new FileReader;return a.readAsDataURL(n),a},IndexComponent=__decorate([e.Component({selector:"index",template:t(898)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof o.Router&&o.Router)&&n||Object,"function"==typeof(a="undefined"!=typeof i.Http&&i.Http)&&a||Object])],IndexComponent);var n,a}();a.IndexComponent=s},761:function(n,a,t){"use strict";var e=t(0),i=t(109),o=t(62),s=t(703),d=function(){function FormConfirmComponent(n,a,t){this.router=n,this.http=a,this.indexComponent=t,this.listfundUrl="https://masscredit-api.stagingapps.net/user/fund/get-list",this.confirmfundUrl="https://masscredit-api.stagingapps.net/user/fund/confirm",this.headers=new i.Headers({"Content-Type":"application/json",API_KEY:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new i.RequestOptions({headers:this.headers}),this.acces_token=JSON.parse(localStorage.getItem("access_token")),this.loaderConfirmFund=1,this.data={access_token:this.acces_token,fund_id:null,struct_image:null,confirm_date:null}}return FormConfirmComponent.prototype.ngOnInit=function(){jQuery("#confirmForm").validate({rules:{struct_image:{required:!0}}})},FormConfirmComponent=__decorate([e.Component({selector:"form-confirm",template:t(897),providers:[]}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof o.Router&&o.Router)&&n||Object,"function"==typeof(a="undefined"!=typeof i.Http&&i.Http)&&a||Object,"function"==typeof(d="undefined"!=typeof s.IndexComponent&&s.IndexComponent)&&d||Object])],FormConfirmComponent);var n,a,d}();a.FormConfirmComponent=d},762:function(n,a,t){"use strict";function __export(n){for(var t in n)a.hasOwnProperty(t)||(a[t]=n[t])}__export(t(761))},763:function(n,a,t){"use strict";var e=t(0),i=t(62),o=t(109),s=t(154),d=t(73),r=t(703),l=t(762);a.routes=[{path:"",component:r.IndexComponent}];var c=function(){function IndexModule(){}return IndexModule.routes=a.routes,IndexModule=__decorate([e.NgModule({declarations:[r.IndexComponent,l.FormConfirmComponent],imports:[o.HttpModule,s.FormsModule,d.CommonModule,i.RouterModule.forChild(a.routes)],providers:[]}),__metadata("design:paramtypes",[])],IndexModule)}();Object.defineProperty(a,"__esModule",{value:!0}),a.default=c},897:function(n,a){n.exports='<div class="row">\n  <div class="col-md-12">\n  <form id="confirmForm" name="confirmForm">\n    <div class="form-group" align="center">\n    <label><h1>Foto Struk Transfer</h1></label>\n    <div class="form-group">\n      <div class="col-md-12">\n          <input type="file" name="struct_image" id="struct_image">\n      </div>\n    </div> \n    </div>\n  </form>\n  </div>\n</div>'},898:function(n,a){n.exports='<div class="row">\n  <div align="center" *ngIf="dataListFundAd == 0"> \n    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n    <span class="sr-only">Loading...</span>\n  </div>\n  <br>\n</div>\n<!-- Main content -->\n<div *ngIf="dataListFundAdd == 1">\n  <div class="col-xs-12" align="right">\n    <button class="add-advance-search" (click)="linkCreateFund()">\n      Tambah\n    </button>\n  </div>\n  <div class="col-md-12">\n  <!-- Tab panes -->\n  <div class="tab-content ">\n      <div role="tabpanel" class="tab-pane active" id="investasi">\n      <br>\n      <br>\n      <div class="box-body data-tables table-responsive">\n        <table class="table table-hover" id="example2">\n          <thead>\n            <tr>\n              <th>No.</th>\n              <th>Nomor Referensi</th>\n              <th>Tanggal</th>\n              <th>Nominal Rp</th>\n              <th>Tanggal Konfirmasi</th>\n              <th>Status</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngIf="dataArrayNull == 1">\n              <td colspan="5" align="center">Data belum tersedia</td>\n            </tr>\n            <tr *ngFor="let data of funds; let i=\'index\'">\n              <td>{{ i+1 }}</td>\n              <td>\n                {{ data.no_reference }}\n              </td>\n              <td>{{ data.date }}</td>\n              <td>{{ data.amount }}</td>\n              <td>Konfirmasi Admin</td>\n              <!-- <td>{{ data.confirm_date }}</td> -->\n              <td>{{ data.status }}</td>\n              <td>\n                <button class="pull-right" (click)="showConfirmFund(data.id)">\n                  Konfimasi\n                </button>\n                <!-- <a class="pull-right" [routerLink]="[\'/dashboard/fund/confirm\', data.id]">\n                  Konfirmasi\n                </a> -->\n                <button class="pull-right" (click)="showDetailDana(data.id)">\n                  <i aria-hidden="true" class="fa fa-search"></i>\n                </button><!-- \n                <a class="pull-right" [routerLink]="[\'/dashboard/fund/detail\', data.id]"><i aria-hidden="true" class="fa fa-search"></i></a> -->\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        </div>  \n      <nav aria-label="Page navigation" *ngIf="total_pagination > 1">\n        <ul class="pagination">\n         <!--  <li>\n            <a href="#" aria-label="Previous">\n              <span aria-hidden="true">&laquo;</span>\n            </a>\n          </li> -->\n          <li *ngFor="let a of array_total"><a href="#/dashboard/fund" id="a" (click)="linkTo(a)">{{ a }}</a></li>\n          <!-- <li>\n            <a href="#" aria-label="Next">\n              <span aria-hidden="true">&raquo;</span>\n            </a>\n          </li> -->\n        </ul>\n      </nav>      \n      </div>\n    </div>\n  </div>\n</div>\n<div align="center" *ngIf="dataListFundAdd == 0"> \n  <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n  <span class="sr-only">Loading...</span>\n</div>\n<!-- Modal -->\n<div class="modal fade modal-lg" id="myModal" style="z-index:9000;">\n  <div class="modal-dialog modal-lg">\n    <!-- Modal content-->\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" (click)="hideDetailDana()">&times;</button>\n        <h4 class="modal-title">Detail Dana</h4>\n      </div>\n      <div class="modal-body">\n      <div  *ngIf="loaderDana == 0">\n        <div class="row">\n          <div align="center"> \n            <br><br><br><br><br>\n            <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n            <span class="sr-only">Loading...</span>\n          </div>\n        </div>\n      </div>\n      <div  *ngIf="loaderDana == 1">\n        <div class="row">\n          <div class="col-md-12">\n            <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">No Referensi</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="No Referensi" class="form-control input-md" name="no_reference" id="no_reference" value="{{ detail.no_reference }}" disabled>\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Nama Lengkap</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Nama Lengkap" class="form-control input-md" name="nama_lengkap" id="nama_lengkap" value="{{ detail.nama_lengkap }}" disabled>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Nama Bank</label>\n              </div>\n              <div class="col-xs-7">\n                <input type="text" placeholder="Nama Bank" class="form-control input-md"  name="bank_name" id="bank_name" value="{{ bank }}" disabled>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Tanggal</label>\n              </div>\n              <div class="col-xs-7">\n                  <input  type="text" placeholder="Tanggal" name="date" class="form-control input-md datepicker" id="date" value="{{ detail.date }}" disabled>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Nominal</label>\n              </div>\n              <div class="col-xs-7">\n                 <input type="text" placeholder="Nominal" class="form-control input-md" name="amount" id="amount" value="{{ dataAmount }}" disabled>\n              </div>\n           </div>\n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Tanggal Transfer</label>\n              </div>\n              <div class="col-xs-7">\n               <input type="text" placeholder="Tanggal Transfer" class="form-control input-md" name="tanggal_transfer" id="tanggal_transfer" value="{{ detail.date }}" disabled>\n              </div>\n           </div> \n           <div class="form-group">\n              <div class="col-xs-4">\n                <label class="unit">Bukti Transfer</label>\n              </div>\n              <div class="col-xs-7">\n               <img src="{{ detail.images }}" alt="Bukti Transfer" disabled>\n              </div>\n           </div> \n          </div>\n        </div>\n      </div>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-default" (click)="hideDetailDana()">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- modal form confirm -->\n<div class="modal fade" id="modalFormConfirm" style="z-index:9000;">\n  <div class="modal-dialog">\n    <!-- Modal content-->\n    <div class="modal-content">\n      <div class="modal-header">\n        <!-- <button type="button" class="close" (click)="cancelConfirmFund()">&times;</button> -->\n        <h4 class="modal-title">Konfirmasi Dana</h4>\n      </div>\n      <div class="modal-body">\n      <div  *ngIf="loaderConfirmFund == 0">\n        <div class="row">\n          <div align="center"> \n            <br><br><br><br><br>\n            <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n            <span class="sr-only">Loading...</span>\n          </div>\n        </div>\n      </div>\n      <div  *ngIf="loaderConfirmFund == 1">\n      <form-confirm></form-confirm>\n      </div>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-default" style="background-color: #c0392b;color: white" (click)="cancelConfirmFund()">Batal</button>\n        <button type="button" class="btn btn-red" (click)="submitConfirmFund()">Konfirmasi</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="col-xs-12">\n  <br>\n</div>\n<!-- /.content -->'}});