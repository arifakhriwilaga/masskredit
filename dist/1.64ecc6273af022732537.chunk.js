webpackJsonp([1],{686:function(e,n,t){"use strict";var a=t(72),s=t(153),o=t(0),i=t(50),r=t(690),l=t(405),c=t(722),d=t(835),p=t(833),u=t(836),m=t(838),h=t(756),f=t(840);n.routes=[{path:"",component:c.DashboardComponent,canActivate:[l.AuthGuard],children:[{path:"",component:h.LoaderComponent},{path:"market",loadChildren:function(){return t.e(32).then(t.bind(null,758)).then(function(e){return e.default})}},{path:"profile",loadChildren:function(){return t.e(5).then(t.bind(null,815)).then(function(e){return e.default})}},{path:"fund",loadChildren:function(){return t.e(33).then(t.bind(null,755)).then(function(e){return e.default})}},{path:"user-action",loadChildren:function(){return t.e(20).then(t.bind(null,843)).then(function(e){return e.default})}},{path:"other-user-action",loadChildren:function(){return t.e(23).then(t.bind(null,762)).then(function(e){return e.default})}},{path:"sign-out",component:f.SignOutComponent}]}];var g=function(){function DashboardModule(){}return DashboardModule.routes=n.routes,DashboardModule=__decorate([o.NgModule({declarations:[c.DashboardComponent,d.HeaderComponent,p.FirstComponent,u.SecondComponent,m.ThirdComponent,h.LoaderComponent,f.SignOutComponent],imports:[a.CommonModule,s.FormsModule,i.RouterModule.forChild(n.routes),s.ReactiveFormsModule],providers:[r.DashboardService]}),__metadata("design:paramtypes",[])],DashboardModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=g},690:function(e,n,t){"use strict";var a=t(0),s=t(87),o=t(50),i=t(73),r=function(){function DashboardService(e,n){this.http=e,this.router=n,this.headers=new s.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new s.RequestOptions({headers:this.headers}),this.profileUrl="https://masscredit-api.stagingapps.net/user/credential/profile",this.token=JSON.parse(localStorage.getItem("access_token")),this.data=new i.Subject,this.data$=this.data.asObservable()}return DashboardService.prototype.getProfile=function(e){return this.http.post(this.profileUrl,e,this.options).toPromise().then(function(e){return e.json()}).catch(this.handleError)},DashboardService.prototype.handleError=function(e){var n=JSON.parse(e._body);return n},DashboardService.prototype.sendData=function(e){this.data.next(e)},DashboardService=__decorate([a.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.Http&&s.Http)&&e||Object,"function"==typeof(n="undefined"!=typeof o.Router&&o.Router)&&n||Object])],DashboardService);var e,n}();n.DashboardService=r},722:function(e,n,t){"use strict";var a=t(0),s=t(50),o=t(87),i=t(690),r=function(){function DashboardComponent(e,n,t){this.http=e,this.router=n,this.dashboardService=t,this.dataUser={name:null,last_login:null,user_class:null,user_status:null,profile_image:null,investor:null,borrower:null,fund_history:null,account_summary:null,is_complete:null,total_income:null,total_investment:null,total_loan:null,total_withdrawal:null,avg_review:null},this.token={access_token:JSON.parse(localStorage.getItem("access_token"))},this.profileUrl="https://masscredit-api.stagingapps.net/user/credential/profile"}return DashboardComponent.prototype.ngOnInit=function(){this.getProfile(),this.dashboardService.sendData("Ari fakhri")},DashboardComponent.prototype.getProfile=function(){var e=this;this.dashboardService.getProfile(this.token).then(function(n){var t=n.meta.message,a=JSON.stringify(n.meta.code),s=n.data;"4"===a.charAt(0)&&e.handleError(t),"2"===a.charAt(0)&&e.handleSuccess(s)})},DashboardComponent.prototype.handleError=function(e){"unauthorized"===e&&(alert("Maaf akses token tidak terdaftar"),this.router.navigate(["/dashboard/sign-out"]))},DashboardComponent.prototype.handleSuccess=function(e){this.dataUser.name=e.profile.name,this.dataUser.last_login=e.profile.last_login,this.dataUser.profile_image=e.profile.profile_image,this.dataUser.user_class=e.profile.user_score.user_class,this.dataUser.user_status=e.profile.user_score.user_status,this.dataUser.investor=e.profile.user_score.investor,this.dataUser.borrower=e.profile.user_score.borrower,this.dataUser.fund_history=e.profile.user_score.fund_history,this.dataUser.avg_review=e.profile.user_score.avg_reviews,this.delimiter(e.account_summary.balance)},DashboardComponent.prototype.delimiter=function(e){try{var n=!1,t=e.toString();t<0&&(n=!0),t=t.replace(".",""),t=t.replace("-","");for(var a="",s=t.length,o=0,i=s;i>0;i--)o+=1,a=o%3==1&&1!=o?t.substr(i-1,1)+"."+a:t.substr(i-1,1)+a;n&&(a="-"+a);var r="Rp.";this.dataUser.account_summary=r.concat(a)}finally{this.dataComplete=1}},DashboardComponent=__decorate([a.Component({selector:"dashboard",template:t(920)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Http&&o.Http)&&e||Object,"function"==typeof(n="undefined"!=typeof s.Router&&s.Router)&&n||Object,"function"==typeof(r="undefined"!=typeof i.DashboardService&&i.DashboardService)&&r||Object])],DashboardComponent);var e,n,r}();n.DashboardComponent=r},756:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(757))},757:function(e,n,t){"use strict";var a=t(0),s=t(690),o=function(){function LoaderComponent(e){this.dashboardService=e,this.token={access_token:JSON.parse(localStorage.getItem("access_token"))},this.data={income:null,total_investment:null,total_loan:null,total_withdrawal:null}}return LoaderComponent.prototype.ngOnInit=function(){var e=this;try{this.dashboardService.getProfile(this.token).then(function(n){var t=n.data.account_summary;e.data.income=e.delimiter(t.income.total),e.data.total_investment=e.delimiter(t.total_investment.total),e.data.total_loan=e.delimiter(t.total_loan.total),e.data.total_withdrawal=e.delimiter(t.total_withdrawal.total)})}finally{this.statusData=1}},LoaderComponent.prototype.delimiter=function(e){var n=!1,t=e.toString();t<0&&(n=!0),t=t.replace(".",""),t=t.replace("-","");for(var a="",s=t.length,o=0,i=s;i>0;i--)o+=1,a=o%3==1&&1!=o?t.substr(i-1,1)+"."+a:t.substr(i-1,1)+a;n&&(a="-"+a);var r="Rp.";return r.concat(a)},LoaderComponent=__decorate([a.Component({selector:"loader",template:t(936),providers:[s.DashboardService]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.DashboardService&&s.DashboardService)&&e||Object])],LoaderComponent);var e}();n.LoaderComponent=o},832:function(e,n,t){"use strict";var a=t(0),s=t(87),o=t(50),i=function(){function FirstComponent(e,n){this.http=e,this.router=n,this.imageDefaultProfile="assets/img/default_profile.png",this.userShare=null}return FirstComponent.prototype.ngOnInit=function(){""==this.incomingDataProfileImage&&(this.incomingDataProfileImage=this.imageDefaultProfile)},__decorate([a.Input("dataName"),__metadata("design:type",String)],FirstComponent.prototype,"incomingDataName",void 0),__decorate([a.Input("dataLastLogin"),__metadata("design:type",String)],FirstComponent.prototype,"incomingDataLastLogin",void 0),__decorate([a.Input("dataUserClass"),__metadata("design:type",String)],FirstComponent.prototype,"incomingDataUserClass",void 0),__decorate([a.Input("dataUserStatus"),__metadata("design:type",String)],FirstComponent.prototype,"incomingDataUserStatus",void 0),__decorate([a.Input("dataAccountSummary"),__metadata("design:type",String)],FirstComponent.prototype,"incomingDataAccountSummary",void 0),__decorate([a.Input("dataFundHistory"),__metadata("design:type",String)],FirstComponent.prototype,"incomingDataFundHistory",void 0),__decorate([a.Input("dataProfileImage"),__metadata("design:type",Object)],FirstComponent.prototype,"incomingDataProfileImage",void 0),FirstComponent=__decorate([a.Component({selector:"header-first",template:t(965)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.Http&&s.Http)&&e||Object,"function"==typeof(n="undefined"!=typeof o.Router&&o.Router)&&n||Object])],FirstComponent);var e,n}();n.FirstComponent=i},833:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(832))},834:function(e,n,t){"use strict";var a=t(0),s=t(87),o=t(50),i=function(){function HeaderComponent(e,n){this.http=e,this.router=n,this.imageDefaultProfile="assets/img/default_profile.png",this.userShare=null}return HeaderComponent.prototype.ngOnInit=function(){try{""==this.incomingDataUser.profile_image&&(this.incomingDataUser.profile_image=this.imageDefaultProfile)}finally{this.dataComplete=1}},__decorate([a.Input("dataUser"),__metadata("design:type",Object)],HeaderComponent.prototype,"incomingDataUser",void 0),HeaderComponent=__decorate([a.Component({selector:"header-dashboard",template:'\t\t\n\t\t<header-first></header-first>\n\t\t<header-second></header-second>\n\t\t<header-third *ngIf="dataComplete == 1" [incomingDataUser]="incomingDataUser" ></header-third>\n\t\t\n\t',providers:[]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.Http&&s.Http)&&e||Object,"function"==typeof(n="undefined"!=typeof o.Router&&o.Router)&&n||Object])],HeaderComponent);var e,n}();n.HeaderComponent=i},835:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(834))},836:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(837))},837:function(e,n,t){"use strict";var a=t(0),s=function(){function SecondComponent(){}return SecondComponent=__decorate([a.Component({selector:"header-second",template:t(966)}),__metadata("design:paramtypes",[])],SecondComponent)}();n.SecondComponent=s},838:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(839))},839:function(e,n,t){"use strict";var a=t(0),s=t(50),o=function(){function ThirdComponent(e){this.router=e,this.imageRate100=[],this.imageRate0=[],this.rate=[1,1.5,2,2.5,3,3.5,4,4.5,5]}return ThirdComponent.prototype.listFund=function(){this.router.navigateByUrl("dashboard/fund")},ThirdComponent.prototype.ngOnInit=function(){var e=Number(this.incomingDataUser.avg_review);try{if(0===e)for(var n=5;n>=1;n--)this.imageRate0.push(n);else for(var t=0,a=this.rate;t<a.length;t++){var s=a[t];if(s===e){var o=s.toString(),i=Number(o),r=5;if(o.match(/^[\d]\.\d$/)){for(var l=Number(o.split(".")[0]),c=4-l,n=1;n<=c;n++)this.imageRate0.push(n);for(var n=1;n<=l;n++)this.imageRate100.push(n);o.match(/^[\d]\.5/)&&(this.imageRate50=1)}else{for(var c=r-i,n=1;n<=i;n++)this.imageRate100.push(n);for(var n=1;n<=c;n++)this.imageRate0.push(n)}}}}finally{this.dataComplete=1}},__decorate([a.Input("incomingDataUser"),__metadata("design:type",Object)],ThirdComponent.prototype,"incomingDataUser",void 0),ThirdComponent=__decorate([a.Component({selector:"header-third",template:t(967)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.Router&&s.Router)&&e||Object])],ThirdComponent);var e}();n.ThirdComponent=o},840:function(e,n,t){"use strict";function __export(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}__export(t(841))},841:function(e,n,t){"use strict";var a=t(0),s=t(50),o=t(842),i=function(){function SignOutComponent(e,n){this.router=e,this.signOutService=n,this.access_token=JSON.parse(localStorage.getItem("access_token")),this.dataSignOut={access_token:this.access_token}}return SignOutComponent.prototype.ngAfterViewInit=function(){this.signOut()},SignOutComponent.prototype.signOut=function(){var e=this;this.signOutService.signOutUser(this.dataSignOut).then(function(n){var t=(n.meta.message,JSON.stringify(n.meta.code));n.data;"4"===t.charAt(0)&&e.handleError(),"2"===t.charAt(0)&&e.handleSuccess()})},SignOutComponent.prototype.handleError=function(){this.clearStorage()},SignOutComponent.prototype.handleSuccess=function(){this.clearStorage()},SignOutComponent.prototype.clearStorage=function(){localStorage.removeItem("access_token"),localStorage.removeItem("verify_handphone"),localStorage.removeItem("access_code"),localStorage.removeItem("access"),this.router.navigateByUrl("/home")},SignOutComponent=__decorate([a.Component({selector:"sign-out",template:"",providers:[o.SignOutService]}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.Router&&s.Router)&&e||Object,"function"==typeof(n="undefined"!=typeof o.SignOutService&&o.SignOutService)&&n||Object])],SignOutComponent);var e,n}();n.SignOutComponent=i},842:function(e,n,t){"use strict";var a=t(0),s=t(87),o=t(50),i=function(){function SignOutService(e,n){this.http=e,this.router=n,this.headers=new s.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),this.options=new s.RequestOptions({headers:this.headers}),this.signOutUrl="https://masscredit-api.stagingapps.net/user/credential/logout"}return SignOutService.prototype.signOutUser=function(e){return this.http.post(this.signOutUrl,e,this.options).toPromise().then(function(e){return e.json()}).catch(this.handleError)},SignOutService.prototype.handleError=function(e){var n=JSON.parse(e._body);return n},SignOutService=__decorate([a.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.Http&&s.Http)&&e||Object,"function"==typeof(n="undefined"!=typeof o.Router&&o.Router)&&n||Object])],SignOutService);var e,n}();n.SignOutService=i},920:function(e,n){e.exports='<div class="hold-transition skin-blue sidebar-mini">\n\t<div class="wrapper">\n\t\t<header-dashboard *ngIf="dataComplete == 1" [dataUser]="dataUser"></header-dashboard>\n\n\t\t<div class="content-wrapper">\n\t\t<section class="content list-user">\n\t\t\t<router-outlet></router-outlet>\n\t\t</section>\n\t\t</div>\n\t</div>\n</div>'},936:function(e,n){e.exports='<div class="content-wrapper" *ngIf="statusData == 1">\n  <!-- Main content -->\n  <section class="content">\n    <div class="row">\n      <div class="col-md-3">\n        <div class="panel-body-dashboard">\n          <div class="panel-content">\n            <div class="box-image">\n              <a href="#" class="panel-content"><img class="box-icon" src="../../assets/img/icon/income.png"></a>\n            </div>\n            <div class="total">\n              <label>{{ data.income }}</label> <br>\n            <label>Total Pemasukan</label>\n            </div>\n            <div class="box-image">\n              <a href="#" class="panel-content"><img class="graph" src="../../assets/img/icon/graph.png" style="margin-top: 8px;"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="col-md-3">\n        <div class="panel-body-dashboard">\n          <div class="panel-content">\n            <div class="box-image">\n              <a href="#" class="panel-content"><img class="box-icon" src="../../assets/img/icon/2.png"></a>\n            </div>\n            <div class="total">\n              <label>{{ data.total_investment }}</label> <br>\n            <label>Total Investasi</label>\n            </div>\n            <div class="box-image">\n              <a href="#" class="panel-content"><img class="graph" src="../../assets/img/icon/graph.png"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="col-md-3">\n        <div class="panel-body-dashboard">\n          <div class="panel-content">\n            <div class="box-image">\n              <a href="#" class="panel-content"><img class="box-icon" src="../../assets/img/icon/loan2.png"></a>\n            </div>\n            <div class="total">\n              <label>{{ data.total_loan }}</label> <br>\n            <label>Total Pinjaman</label>\n            </div>\n            <div class="box-image">\n              <a href="#" class="panel-content"><img class="graph" src="../../assets/img/icon/graph.png"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="col-md-3">\n        <div class="panel-body-dashboard">\n          <div class="panel-content">\n            <div class="box-image">\n              <a href="#" class="panel-content"><img class="box-icon" src="../../assets/img/icon/with.png"></a>\n            </div>\n            <div class="total">\n              <label>{{ data.total_withdrawal }}</label> <br>\n            <label>Total Penarikan</label>\n            </div>\n            <div class="box-image">\n              <a href="#" class="panel-content"><img class="graph" src="../../assets/img/icon/graph.png" style="margin-top: 16px;"></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- /.content -->\n</div>'},965:function(e,n){e.exports='<header class="main-header">\n  <div class="logo">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class="logo-mini"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/logo-mini.png" /></span>\n    <!-- logo for regular state and mobile devices -->\n    <span class="logo-lg"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/logo.png"></span>\n  </div>\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class="navbar navbar-static-top" style="height: 70px; margin-bottom: 0px; ">\n    <div class="navbar-custom-menu">\n      <ul class="nav navbar-nav">\n        <!-- Messages: style can be found in dropdown.less-->\n        <!-- <li class="dropdown messages-menu">\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n          <i class="fa fa-envelope-o"></i>\n          <span class="label label-danger">4</span>\n          </a>\n          <ul class="dropdown-menu">\n            <li class="header">You have 4 messages</li>\n            <li>\n              inner menu: contains the actual data\n              <ul class="menu">\n                <li>\n                  start message\n                  <a href="#">\n                    <div class="pull-left">\n                      <img src="../../assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n                    </div>\n                    <h4>\n                      Support Team\n                      <small><i class="fa fa-clock-o"></i> 5 mins</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                end message\n                <li>\n                  <a href="#">\n                    <div class="pull-left">\n                      <img src="../../assets/img/user4-128x128.jpg" class="img-circle" alt="User Image">\n                    </div>\n                    <h4>\n                      AdminLTE Design Team\n                      <small><i class="fa fa-clock-o"></i> 2 hours</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href="#">\n                    <div class="pull-left">\n                      <img src="../../assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n                    </div>\n                    <h4>\n                      Developers\n                      <small><i class="fa fa-clock-o"></i> Today</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href="#">\n                    <div class="pull-left">\n                      <img src="../../assets/img/user4-128x128.jpg" class="img-circle" alt="User Image">\n                    </div>\n                    <h4>\n                      Sales Department\n                      <small><i class="fa fa-clock-o"></i> Yesterday</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href="#">\n                    <div class="pull-left">\n                      <img src="../../assets/img/user4-128x128.jpg" class="img-circle" alt="User Image">\n                    </div>\n                    <h4>\n                      Reviewers\n                      <small><i class="fa fa-clock-o"></i> 2 days</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class="footer"><a href="#">See All Messages</a></li>\n          </ul>\n        </li> -->\n       <!--  <li class="dropdown notifications-menu">\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n          <i class="fa fa-bell-o"></i>\n          <span class="label label-danger">3</span>\n          </a>\n          <ul class="dropdown-menu">\n            <li class="header">You have 10 notifications</li>\n            <li>\n              <ul class="menu">\n                <li>\n                  <a href="#">\n                  <i class="fa fa-users text-aqua"></i> 5 new members joined today\n                  </a>\n                </li>\n                <li>\n                  <a href="#">\n                  <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the\n                  page and may cause design problems\n                  </a>\n                </li>\n                <li>\n                  <a href="#">\n                  <i class="fa fa-users text-red"></i> 5 new members joined\n                  </a>\n                </li>\n                <li>\n                  <a href="#">\n                  <i class="fa fa-shopping-cart text-green"></i> 25 sales made\n                  </a>\n                </li>\n                <li>\n                  <a href="#">\n                  <i class="fa fa-user text-red"></i> You changed your username\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class="footer"><a href="#">View all</a></li>\n          </ul>\n        </li> -->\n        <li class="dropdown notifications-menu">\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-th"></i></a>\n          <ul class="dropdown-menu">\n            <li>\n              <div class="row">\n                <br>\n                <div class="col-xs-4">\n                <div class="form-group" align="center">\n                  <img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/dropdown/faq.png" style="width: 40px;height: 40px"><br>FAQ\n                </div>\n                </div>\n                <div class="col-xs-4">\n                <div class="form-group" align="center">\n                  <img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/dropdown/help-center.png" style="width: 30px;height: 40px"><br>Help Center\n                  </div>\n                </div>\n                <div class="col-xs-4">\n                <div class="form-group" align="center">\n                <img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/dropdown/report.png" style="width: 30px;height: 40px"><br>Report Problem\n                  </div>\n                </div>\n              </div>\n              <hr>\n            </li>\n            <li>\n              <ul class="menu">\n                <li><a href="#">Open Source Libraries</a></li>\n                <li><a href="#">Version</a></li>\n                <li><a href="#">Term & Condition</a></li>\n                <li><a href="#">Privacy Policy</a></li>\n                <li><a href="#">Aggrement</a></li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n        <li><a href="#/dashboard/profile"><i class="fa fa-user"></i></a></li>\n        <li><a href="#/dashboard/sign-out"><i class="fa fa-sign-out"></i></a></li>\n      </ul>\n    </div>\n    <hr class="hr-nav">\n  </nav>\n</header>'},966:function(e,n){e.exports='<nav class="navbar " style="background: #fff;height: 90px; margin-bottom: 0px;">\n  <!-- Sidebar toggle button-->\n  <div class="navbar-custom-menu">\n    <ul class="nav navbar-nav navigasi-menu">\n      <li>\n        <a href="#">\n          <img class="menu-horizontal" src="../../assets/img/icon/home.png">\n        <h6>Home</h6>\n        </a>\n      </li>\n      <li class="">\n        <a href="#/dashboard/other-user-action">\n          <img class="menu-horizontal" src="../../assets/img/icon/2.png">\n        <h6>Pinjaman & Investasi</h6>\n        </a>\n      </li>\n      <li class="">\n        <a href="#/dashboard/user-action">\n          <img class="menu-horizontal" src="../../assets/img/icon/funds.png">\n        <h6 style="padding-top: 4px;">Pinjaman & Investasi <br> Saya</h6>\n        </a>\n      </li>\n      <!-- <li class=""> \n        <a href="#">\n          <img class="menu-horizontal" src="../../assets/img/icon/voucher-(1).png">\n        <h6 style="padding-top: 12px;">Voucher</h6>\n        </a>\n      </li> -->\n      <li class="">\n        <a href="#/dashboard/market">\n          <img class="menu-horizontal" src="../../assets/img/icon/shopping-cart-(1).png">\n        <h6>Belanja</h6>\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>'},967:function(e,n){e.exports='<div class="profil" *ngIf="dataComplete == 1">\n  <div class="container">\n    <div class="row">\n      <div class="col-md-4">\n        <div class="profile">\n          <div class="pull-left profile-left">\n            <img src="{{ incomingDataUser.profile_image }}" style="width:100px;height:100px">\n          </div>\n        <label class="name"><font size="3">\n        {{ incomingDataUser.name }}<br>\n        {{ incomingDataUser.user_status }}<br>\n          <label *ngFor="let data of imageRate100"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/star/100.png" style="width:15px ;height: 15px;"></label>\n          <label *ngIf="imageRate25 === 1"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/star/25.png" style="width:15px ;height: 15px;"></label>\n          <label *ngIf="imageRate50 === 1"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/star/50.png" style="width:15px ;height: 15px;"></label>\n          <label *ngIf="imageRate75 === 1"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/star/75.png" style="width:15px ;height: 15px;"></label>\n          <label *ngFor="let data of imageRate0"><img onmousedown="return false" oncontexmenu="return false" onselectstart="return false" src="../../assets/img/star/0.png" style="width:15px ;height: 15px;"></label>           \n        </font></label><br>\n        <!-- </font></label><label>({{ incomingDataUser.avg_review }})</label><br> -->\n        <img *ngIf="incomingDataUser.user_status == \'Verified\'" class="verifikasi-check" src="../../assets/img/green-checklist.png"><br>\n        </div>\n      </div>\n      <div class="col-md-1" style="width: 10%">\n        <div class="profile">\n          <img class="icon" src="../../assets/img/icon/investment.png"> <br>\n          <label class="profile-2">Investor</label> <br>\n          <label class="profile-1">{{ incomingDataUser.investor }}</label>\n        </div>\n      </div>\n      <div class="col-md-1" style="width: 10%">\n        <div class="profile">\n          <img class="icon" src="../../assets/img/icon/loan.png" style="margin-left: solid 2px #fff;"> <br>\n          <label class="profile-2">Borrower</label> <br>\n          <label class="profile-1">{{ incomingDataUser.borrower }}</label>\n        </div>\n      </div>\n      <div class="col-md-1" style="width: 10%">\n        <div class="profile">\n          <img class="icon" src="../../assets/img/icon/credit-card.png" style="margin-left: solid 2px #fff;"> <br>\n          <label class="profile-2">Credit</label> <br>\n          <label class="profile-1">{{ incomingDataUser.fund_history }}</label>\n        </div>\n      </div>\n      <div class="col-md-1" style="width: 10%">\n        <div class="profile">\n          <img class="icon" src="../../assets/img/icon/business.png" style="margin-left: solid 2px #fff;"> <br>\n          <label class="profile-2">Salary</label> <br>\n          <label class="profile-1">{{ incomingDataUser.user_class }}</label>\n        </div>\n      </div>\n      <div class="col-md-1" align="center">\n        <div class="profile" style="width: 200px">\n            <img src="../../assets/img/dollar-bag.png" style="margin-left: solid 2px;width: 50px; height: 50px;"><br>\n            <label class="profile-1"><h4>{{ incomingDataUser.account_summary }}</h4></label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class="container">\n  <div class="row">\n    <div class="link-bottom-nav clearfix">\n    <ul>\n      <li><a class="direct-link" href="#/dashboard/fund/fund-add/create">Tambah Dana</a></li>\n      <li>\n        <button class="dropdown-toggle" type="button" (click)="listFund()"><img src="../../assets/img/icon-load.png"></button>\n      </li>\n      <li><a class="direct-link" href="#/dashboard/fund/fund-withdrawal/create">Tarik Dana</a></li>\n    </ul>\n    </div>\n  </div>\n  </div>\n</div>'}});