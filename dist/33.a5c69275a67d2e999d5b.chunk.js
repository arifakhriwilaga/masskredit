webpackJsonp([33],{806:function(t,n,a){"use strict";var e=a(0),o=a(87),i=a(50),s=function(){function IndexComponent(t,n){this.router=t,this.http=n,this.headers=new o.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new o.RequestOptions({headers:this.headers}),this.access_token={access_token:JSON.parse(localStorage.getItem("access_token"))},this.invest=[],this.amount={},this.dataListLoan=1,this.dataArrayNull=0}return IndexComponent.prototype.ngOnInit=function(){},IndexComponent.prototype.listInvestasi=function(){},IndexComponent.prototype.getListLoan=function(){var t=this;setTimeout(function(){t.http.post("https://masscredit-api.stagingapps.net/user/loan/getlist",t.access_token,t.options).map(function(t){return t.json()}).subscribe(function(n){n.meta.code,n.meta.message;""==n.data.loans&&(t.dataArrayNull=1),t.invest=n.data.loans;for(var a=0;a<t.invest.length;a++){var e=t.invest[a],o=e.amount,i=!1,s=o.toString();s<0&&(i=!0),s=s.replace(".",""),s=s.replace("-","");for(var r="",d=s.length,l=0,c=d;c>0;c--)l+=1,r=l%3==1&&1!=l?s.substr(c-1,1)+"."+r:s.substr(c-1,1)+r;i&&(r="-"+r);var p="Rp.";e.amount=p.concat(r)}t.dataListLoan=1},function(n){var a=JSON.parse(n._body),e=a.meta.message;if("unauthorized"==e)return alert("Maaf session anda telah habis silahkan login kembali"),t.router.navigateByUrl("/dashboard/sign-out")})},1)},IndexComponent.prototype.linkCreateLoan=function(){this.router.navigateByUrl("/dashboard/other-user-action/loan/create")},IndexComponent=__decorate([e.Component({selector:"index",template:a(923)}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.Router&&i.Router)&&t||Object,"function"==typeof(n="undefined"!=typeof o.Http&&o.Http)&&n||Object])],IndexComponent);var t,n}();n.IndexComponent=s},807:function(t,n,a){"use strict";var e=a(0),o=a(50),i=a(87),s=a(153),r=a(72),d=a(806);n.routes=[{path:"",component:d.IndexComponent}];var l=function(){function IndexModule(){}return IndexModule.routes=n.routes,IndexModule=__decorate([e.NgModule({declarations:[d.IndexComponent],imports:[i.HttpModule,s.FormsModule,r.CommonModule,s.ReactiveFormsModule,o.RouterModule.forChild(n.routes)],providers:[]}),__metadata("design:paramtypes",[])],IndexModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=l},923:function(t,n){t.exports='<!-- Main content -->\n<br>\n<div  *ngIf="dataListLoan == 1">\n<div class="col-xs-12" align="right">\n  <!-- <button class="add-advance-search" (click)="linkCreateLoan()">\n    Tambah\n  </button> -->\n  <button class="add-advance-search" onclick="alert(\'Belum tersedia\')">\n    Tambah\n  </button>\n</div>\n<br>\n<div class="col-xs-12">\n<!-- Tab panes -->\n<div class="tab-content ">\n    <div role="tabpanel" class="tab-pane active" id="investasi">\n    <br>\n    <div class="box-body data-tables table-responsive">\n      <table class="table table-hover" id="example2">\n        <thead>\n          <tr>\n            <th>No.</th>\n            <th>Gambar</th>\n            <th>Nama Lengkap</th>\n            <th>Nilai</th>\n            <th>Kategori</th>\n            <th>Nominal (Rp)</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td colspan="6" align="center">Data belum tersedia</td>\n          </tr> \n          <!-- <tr *ngIf="dataArrayNull == 1">\n            <td colspan="5" align="center">Data belum tersedia</td>\n          </tr>\n          <tr *ngFor="let data of invest; let i = \'index\'">\n            <td>{{ i + 1 }}</td>\n            <td align="left"><img src="{{ data.image_profile }}" alt="Profile Investor" style="border-radius: 80px;width:55px;height:55px">{{ data.nama_investor }}</td>\n            <td><img src="{{ data.image_invest }}" alt="Investasi" style="border-radius: 5px;width:70px;height:70px"></td>\n            <td><span  class="warranty">{{ data.type_invest }}</span></td>\n            <td>{{ data.amount }}</td>\n            <td>\n              <a class="pull-right" [routerLink]="[\'/dashboard/other-user-action/invest/detail\', data.id]"><i aria-hidden="true" class="fa fa-search"></i></a>\n            </td>\n          </tr> -->\n        </tbody>\n      </table>\n      </div>  \n    <nav aria-label="Page navigation" *ngIf="total_pagination > 1">\n      <ul class="pagination">\n       <!--  <li>\n          <a href="#" aria-label="Previous">\n            <span aria-hidden="true">&laquo;</span>\n          </a>\n        </li> -->\n        <!-- <li *ngFor="let a of array_total"><a href="#/dashboard/fund" id="a" (click)="linkTo(a)">{{ a }}</a></li> -->\n        <!-- <li>\n          <a href="#" aria-label="Next">\n            <span aria-hidden="true">&raquo;</span>\n          </a>\n        </li> -->\n      </ul>\n    </nav>      \n    </div>\n    <br>\n  </div>\n</div>\n</div>\n<div align="center" *ngIf="dataListLoan == 0"> \n  <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>\n  <span class="sr-only">Loading...</span>\n</div>\n<br>\n<!-- /.content -->'}});