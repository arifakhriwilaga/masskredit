webpackJsonp([29],{800:function(n,a,t){"use strict";var e=t(0),o=t(50),d=function(){function IndexComponent(n){this.router=n}return IndexComponent.prototype.listInvestasi=function(){},IndexComponent.prototype.linkFormCreate=function(){this.router.navigateByUrl("/dashboard/loan/create")},IndexComponent=__decorate([e.Component({selector:"index",template:t(911)}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof o.Router&&o.Router)&&n||Object])],IndexComponent);var n}();a.IndexComponent=d},801:function(n,a,t){"use strict";var e=t(0),o=t(50),d=t(87),i=t(153),r=t(72),s=t(800);a.routes=[{path:"",component:s.IndexComponent}];var l=function(){function IndexModule(){}return IndexModule.routes=a.routes,IndexModule=__decorate([e.NgModule({declarations:[s.IndexComponent],imports:[d.HttpModule,i.FormsModule,r.CommonModule,i.ReactiveFormsModule,o.RouterModule.forChild(a.routes)],providers:[]}),__metadata("design:paramtypes",[])],IndexModule)}();Object.defineProperty(a,"__esModule",{value:!0}),a.default=l},911:function(n,a){n.exports='<!-- Main content -->\n  <br>\n  <div class="col-xs-12" align="right">\n    <button class="add-advance-search" (click)="linkCreateLoan()">\n      Tambah\n    </button>\n  </div>\n  <br>\n  <div class="col-xs-12">\n  <br>\n  </div>\n  <div class="col-xs-12">\n  <h1> </h1>\n  <div class="col-md-12">\n  <!-- Tab panes -->\n  <div class="tab-content ">\n      <div role="tabpanel" class="tab-pane active" id="investasi">\n      <br>\n      <br>\n      <div class="box-body data-tables table-responsive">\n        <table class="table table-hover" id="example2">\n          <thead>\n            <tr>\n              <th>No.</th>\n              <th>Nama Investor</th>\n              <th>Tipe</th>\n              <th>Nominal Investasi (Rp)</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <!-- <tr *ngFor="let data of funds">\n              <td>{{ data.id }}</td>\n              <td>\n                {{ data.no_reference }}\n              </td>\n              <td>{{ data.date }}</td>\n              <td>{{ data.amount }}</td>\n              <td>\n                <a *ngIf="data.confirm_date == \'\'" class="pull-right" [routerLink]="[\'/dashboard/fund/confirm\', data.id]">\n                  Konfirmasi\n                </a>\n                <a class="pull-right" [routerLink]="[\'/dashboard/fund/detail\', data.id]"><i aria-hidden="true" class="fa fa-search"></i></a>\n              </td>\n            </tr> -->\n          </tbody>\n        </table>\n        </div>  \n      <nav aria-label="Page navigation" *ngIf="total_pagination > 1">\n        <ul class="pagination">\n         <!--  <li>\n            <a href="#" aria-label="Previous">\n              <span aria-hidden="true">&laquo;</span>\n            </a>\n          </li> -->\n          <!-- <li *ngFor="let a of array_total"><a href="#/dashboard/fund" id="a" (click)="linkTo(a)">{{ a }}</a></li> -->\n          <!-- <li>\n            <a href="#" aria-label="Next">\n              <span aria-hidden="true">&raquo;</span>\n            </a>\n          </li> -->\n        </ul>\n      </nav>      \n      </div>\n    </div>\n  </div>\n  </div>\n  <div class="col-xs-12">\n  <br>\n</div>\n<!-- /.content -->'}});