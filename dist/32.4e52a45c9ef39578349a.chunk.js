webpackJsonp([32],{769:function(t,a,n){"use strict";var e=n(0),i=n(109),o=n(62),s=function(){function IndexComponent(t,a){this.router=t,this.http=a,this.headers=new i.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new i.RequestOptions({headers:this.headers}),this.access_token={access_token:JSON.parse(localStorage.getItem("access_token"))},this.withdrawals=[],this.current_page=null,this.per_page=null,this.total=null,this.array_total=[],this.param=new i.URLSearchParams,this.acces_token=JSON.parse(localStorage.getItem("access_token")),this.limit=10,this.page=1,this.data_get_list_fund={access_token:this.acces_token,page:this.page,limit:this.limit}}return IndexComponent.prototype.ngOnInit=function(){var t=this;this.http.post("https://masscredit-api.stagingapps.net/user/withdrawal/get-list",this.data_get_list_fund,this.options).map(function(t){return t.json()}).subscribe(function(a){var n=a.meta.code,e=(a.meta.message,a.data.withdrawal),i=a.data.paging.current_page,o=(a.data.paging.per_page,a.data.paging.total);if(t.withdrawals=e,t.current_page=i,console.log(a),200==n){var s=Math.ceil(o/t.limit);t.total_pagination=s;for(var r=1;r<=s;r++)t.array_total.push(r)}},function(a){var n=JSON.parse(a._body),e=n.meta.message;if("unauthorized"==e)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},IndexComponent.prototype.linkFundWithdrawal=function(){this.router.navigateByUrl("/dashboard/fund/fund-withdrawal/create")},IndexComponent.prototype.linkTo=function(t){var a=this,n=t;this.http.get("https://masscredit-api.stagingapps.net/user/fund/get-list/"+this.acces_token+"/funds.json?limit="+this.limit+"&page="+n,this.options).map(function(t){return t.json()}).subscribe(function(t){var n=t.meta.code,e=(t.meta.message,t.data.withdrawal),i=t.data.paging.current_page;t.data.paging.per_page,t.data.paging.total;a.withdrawals=e,a.current_page=i,console.log(a.current_page),200==n&&console.log("Success get list")},function(t){var n=JSON.parse(t._body),e=n.meta.message;if("unauthorized"==e)return alert("Maaf session anda telah habis silahkan login kembali"),a.router.navigateByUrl("/dashboard/sign-out")})},IndexComponent=__decorate([e.Component({selector:"index",template:n(911)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.Router&&o.Router)&&t||Object,"function"==typeof(a="undefined"!=typeof i.Http&&i.Http)&&a||Object])],IndexComponent);var t,a}();a.IndexComponent=s},770:function(t,a,n){"use strict";var e=n(0),i=n(62),o=n(109),s=n(154),r=n(73),d=n(769);a.routes=[{path:"",component:d.IndexComponent}];var l=function(){function IndexModule(){}return IndexModule.routes=a.routes,IndexModule=__decorate([e.NgModule({declarations:[d.IndexComponent],imports:[o.HttpModule,s.FormsModule,r.CommonModule,s.ReactiveFormsModule,i.RouterModule.forChild(a.routes)],providers:[]}),__metadata("design:paramtypes",[])],IndexModule)}();Object.defineProperty(a,"__esModule",{value:!0}),a.default=l},911:function(t,a){t.exports='<!-- Main content -->\n  <br>\n  <div class="col-xs-12" align="right">\n    <button class="add-advance-search" (click)="linkFundWithdrawal()">\n      Tarik\n    </button>\n  </div>\n  <br>\n  <div class="col-xs-12">\n  <br>\n  </div>\n  <div class="col-xs-12">\n  <h1> </h1>\n  <div class="col-md-12">\n  <!-- Tab panes -->\n  <div class="tab-content ">\n      <div role="tabpanel" class="tab-pane active" id="investasi">\n      <br>\n      <br>\n      <div class="box-body data-tables table-responsive">\n        <table class="table table-hover" id="example2">\n          <thead>\n            <tr>\n              <th>No.</th>\n              <th>Nomor Referensi</th>\n              <th>Nominal Rp</th>\n              <th>Tanggal</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let data of withdrawals">\n              <td>{{ data.id }}</td>\n              <td>\n                {{ data.no_reference }}\n              </td>\n              <td>{{ data.amount }}</td>\n              <td>{{ data.date }}</td>\n              <td>\n                <a class="pull-right" [routerLink]="[\'/dashboard/fund/fund-withdrawal/detail\', data.id]">\n                  <i aria-hidden="true" class="fa fa-search">\n                  </i>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        </div>  \n      <nav aria-label="Page navigation" *ngIf="total_pagination > 1">\n        <ul class="pagination">\n         <!--  <li>\n            <a href="#" aria-label="Previous">\n              <span aria-hidden="true">&laquo;</span>\n            </a>\n          </li> -->\n          <li *ngFor="let a of array_total"><a href="#/dashboard/fund" id="a" (click)="linkTo(a)">{{ a }}</a></li>\n          <!-- <li>\n            <a href="#" aria-label="Next">\n              <span aria-hidden="true">&raquo;</span>\n            </a>\n          </li> -->\n        </ul>\n      </nav>      \n      </div>\n    </div>\n  </div>\n  </div>\n  <div class="col-xs-12">\n  <br>\n</div>\n<!-- /.content -->'}});