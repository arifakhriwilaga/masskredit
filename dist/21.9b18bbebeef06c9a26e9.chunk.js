webpackJsonp([21],{860:function(t,n,e){"use strict";var a=e(0),s=e(109),i=e(62),o=function(){function IndexComponent(t,n){this.router=t,this.http=n,this.headers=new s.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new s.RequestOptions({headers:this.headers}),this.access_token={access_token:JSON.parse(localStorage.getItem("access_token"))},this.invest=[],this.dataListMyInvest=0}return IndexComponent.prototype.ngOnInit=function(){this.getListInvest()},IndexComponent.prototype.getListInvest=function(){var t=this;this.http.post("https://masscredit-api.stagingapps.net/user/investment/getlist",this.access_token,this.options).map(function(t){return t.json()}).subscribe(function(n){n.meta.code,n.meta.message;t.invest=n.data.investments;for(var e=0;e<t.invest.length;e++){var a=t.invest[e],s=a.amount,i=!1,o=s.toString();o<0&&(i=!0),o=o.replace(".",""),o=o.replace("-","");for(var r="",d=o.length,l=0,u=d;u>0;u--)l+=1,r=l%3==1&&1!=l?o.substr(u-1,1)+"."+r:o.substr(u-1,1)+r;i&&(r="-"+r);var p="Rp.";a.amount=p.concat(r)}t.dataListMyInvest=1},function(n){var e=JSON.parse(n._body),a=e.meta.message;if("unauthorized"==a)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},IndexComponent=__decorate([a.Component({selector:"index",template:e(952)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.Router&&i.Router)&&t||Object,"function"==typeof(n="undefined"!=typeof s.Http&&s.Http)&&n||Object])],IndexComponent);var t,n}();n.IndexComponent=o},861:function(t,n,e){"use strict";var a=e(0),s=e(62),i=e(109),o=e(154),r=e(73),d=e(860);n.routes=[{path:"",component:d.IndexComponent}];var l=function(){function IndexModule(){}return IndexModule.routes=n.routes,IndexModule=__decorate([a.NgModule({declarations:[d.IndexComponent],imports:[i.HttpModule,o.FormsModule,r.CommonModule,o.ReactiveFormsModule,s.RouterModule.forChild(n.routes)],providers:[]}),__metadata("design:paramtypes",[])],IndexModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=l},952:function(t,n){t.exports='<div class="row">\n  <div align="center" *ngIf="dataListMyInvest == 0"> \n    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n    <span class="sr-only">Loading...</span>\n  </div>\n  <br>\n</div>\n<!-- Main content -->\n<div class="row">\n  <div class="col-xs-12" *ngIf="dataListMyInvest == 1">\n  <div class="tab-content ">\n      <div role="tabpanel" class="tab-pane active" id="investasi">\n      <div class="box-body data-tables table-responsive">\n        <table class="table table-hover" id="example2">\n          <thead>\n            <tr>\n              <th>No.</th>\n              <th>Nama Investor</th>\n              <th>Tipe</th>\n              <th>Nominal Investasi</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let data of invest, let i = \'index\';">\n              <td>{{ i + 1 }}</td>\n              <td>\n                {{ data.nama_investor }}\n              </td>\n              <td>{{ data.type_invest }}</td>\n              <td>{{ data.amount }}</td>\n              <td>\n                <!-- <a class="pull-right" [routerLink]="[\'/dashboard/user-action/user-invest/detail\', data.id]"><i aria-hidden="true" class="fa fa-trash"></i></a> -->\n                <a class="pull-right" [routerLink]="[\'/dashboard/user-action/user-invest/detail\', data.id]"><i aria-hidden="true" class="fa fa-search"></i></a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        </div>  \n      <nav aria-label="Page navigation" *ngIf="total_pagination > 1">\n        <ul class="pagination">\n         <!--  <li>\n            <a href="#" aria-label="Previous">\n              <span aria-hidden="true">&laquo;</span>\n            </a>\n          </li> -->\n          <!-- <li *ngFor="let a of array_total"><a href="#/dashboard/fund" id="a" (click)="linkTo(a)">{{ a }}</a></li> -->\n          <!-- <li>\n            <a href="#" aria-label="Next">\n              <span aria-hidden="true">&raquo;</span>\n            </a>\n          </li> -->\n        </ul>\n      </nav>      \n      </div>\n      <br><br>\n    </div>\n  </div>\n</div>'}});