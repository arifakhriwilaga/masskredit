webpackJsonp([1],{695:function(a,n,i){"use strict";var e=i(0),s=i(73),t=i(154),l=i(62),o=i(407),r=i(800),d=i(805),c=i(806),p=i(799),m=i(801),u=i(803);n.routes=[{path:"",component:r.HomeComponent,canActivate:[o.AuthGuardDashboard],children:[{path:"",redirectTo:"content"},{path:"content",component:p.ContentComponent},{path:"pendanaan",component:m.PendanaanComponent},{path:"pinjaman",component:u.PinjamanComponent}]}];var v=function(){function HomeModule(){this.routes=n.routes}return HomeModule=__decorate([e.NgModule({declarations:[r.HomeComponent,d.FooterComponent,c.HeaderComponent,p.ContentComponent,m.PendanaanComponent,u.PinjamanComponent],imports:[s.CommonModule,t.FormsModule,l.RouterModule.forChild(n.routes)]}),__metadata("design:paramtypes",[])],HomeModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=v},798:function(a,n,i){"use strict";var e=i(0),s=function(){function ContentComponent(){}return ContentComponent=__decorate([e.Component({selector:"content",template:i(852)}),__metadata("design:paramtypes",[])],ContentComponent)}();n.ContentComponent=s},799:function(a,n,i){"use strict";function __export(a){for(var i in a)n.hasOwnProperty(i)||(n[i]=a[i])}__export(i(798))},800:function(a,n,i){"use strict";var e=i(0),s=function(){function HomeComponent(){}return HomeComponent.prototype.ngOnInit=function(){jQuery("document").ready(function(a){var n=a(".navbar-head");a(window).scroll(function(){a(this).scrollTop()>40?n.addClass("fixed"):n.removeClass("fixed")})})},HomeComponent=__decorate([e.Component({selector:"home",template:i(853)}),__metadata("design:paramtypes",[])],HomeComponent)}();n.HomeComponent=s},801:function(a,n,i){"use strict";function __export(a){for(var i in a)n.hasOwnProperty(i)||(n[i]=a[i])}__export(i(802))},802:function(a,n,i){"use strict";var e=i(0),s=function(){function PendanaanComponent(){}return PendanaanComponent=__decorate([e.Component({selector:"pendanaan",template:i(854)}),__metadata("design:paramtypes",[])],PendanaanComponent)}();n.PendanaanComponent=s},803:function(a,n,i){"use strict";function __export(a){for(var i in a)n.hasOwnProperty(i)||(n[i]=a[i])}__export(i(804))},804:function(a,n,i){"use strict";var e=i(0),s=function(){function PinjamanComponent(){}return PinjamanComponent=__decorate([e.Component({selector:"pinjaman",template:i(855)}),__metadata("design:paramtypes",[])],PinjamanComponent)}();n.PinjamanComponent=s},805:function(a,n,i){"use strict";var e=i(0),s=function(){function FooterComponent(){}return FooterComponent=__decorate([e.Component({selector:"footer",template:i(856)}),__metadata("design:paramtypes",[])],FooterComponent)}();n.FooterComponent=s},806:function(a,n,i){"use strict";var e=i(0),s=function(){function HeaderComponent(){}return HeaderComponent=__decorate([e.Component({selector:"header",template:i(857)}),__metadata("design:paramtypes",[])],HeaderComponent)}();n.HeaderComponent=s},852:function(a,n){a.exports='   <div class="main-slider">\n      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n        <ol class="carousel-indicators">\n          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\n          <li data-target="#carousel-example-generic" data-slide-to="1"></li>\n          <li data-target="#carousel-example-generic" data-slide-to="2"></li>\n          <li data-target="#carousel-example-generic" data-slide-to="3"></li>\n        </ol>\n        <div class="carousel-inner slider-peminjam" role="listbox">\n          <div class="item active">\n            <img src="../assets/img/banner-05.jpg" alt="banner-slider">\n            <div class="carousel-caption">\n              <h2>Peminjaman Mudah <br/>Melalui teknologi terkini</h2>\n              <p>Inovasi teknologi membuat proses peminjaman menjadi lebih cepat, mudah dan aman</p>\n            </div>\n          </div>\n          <div class="item">\n            <img src="../assets/img/banner-05.png" alt="banner-slider">\n            <div class="carousel-caption">\n              <h2>Peminjaman Mudah <br/>Melalui teknologi terkini</h2>\n              <p>Inovasi teknologi membuat proses peminjaman menjadi lebih cepat, mudah dan aman</p>\n            </div>\n          </div>\n          <div class="item">\n            <!-- <img src="../assets/img/banner-05.png" alt="banner-slider"> -->\n            <div class="carousel-caption">\n              <h2>Peminjaman Mudah <br/>Melalui teknologi terkini</h2>\n              <p>Inovasi teknologi membuat proses peminjaman menjadi lebih cepat, mudah dan aman</p>\n            </div>\n          </div>\n        </div>\n        <!-- Controls -->\n        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\n        <span class="fa fa-angle-left" aria-hidden="true"></span>\n        <span class="sr-only">Previous</span>\n        </a>\n        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\n        <span class="fa fa-angle-right" aria-hidden="true"></span>\n        <span class="sr-only">Next</span>\n        </a>\n      </div>\n    </div>\n    <div class="statistic-box bg-fafafa">\n      <div class="container">\n        <!-- Example row of columns -->\n        <div class="row">\n          <div class="col-md-4">\n            <img src="../assets/img/why-01.png">\n            <h2>158 Juta\n              <span>Total Pembiayaan Tersalurkan</span>\n            </h2>\n          </div>\n          <div class="col-md-4">\n            <img src="../assets/img/why-02.png">\n            <h2>23456\n              <span>Pengusaha Mikro Diberdayakan</span>\n            </h2>\n          </div>\n          <div class="col-md-4">\n            <img src="../assets/img/why-03.png">\n            <h2>100%\n              <span>Presentasi Pembayaran Cicilan</span>\n            </h2>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="why-danamas easy-process">\n      <div class="container">\n        <div class="row clearfix">\n          <div class="col-md-12 text-center title-head">\n            <h2>Mengapa Mass Credit</h2>\n          </div>\n          <div class="col-md-12 clearfix why-box row">\n            <div class="col-md-4">\n              <div class="info-marketplace">\n                <div class="icon margin-bottom-20"><img src="../assets/img/icon-mp-01.png" /></div>\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>\n              </div>\n            </div>\n            <div class="col-md-4">\n              <div class="info-marketplace">\n                <div class="icon margin-bottom-20"><img src="../assets/img/icon-mp-02.png" /></div>\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>\n              </div>\n            </div>\n            <div class="col-md-4">\n              <div class="info-marketplace">\n                <div class="icon margin-bottom-20"><img src="../assets/img/icon-mp-03.png" /></div>\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="marketplace bg-fafafa">\n      <div class="container">\n        <div class="row clearfix">\n          <div class="col-md-12 text-center title-head">\n            <h3>Tentang</h3>\n            <h2 class="margin-20-auto">Peer to Peer Lending (P2P)</h2>\n            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>\n\n            <a href="" class="learn-more">Pelajari lebih lanjut <i class="fa fa-chevron-circle-right" aria-hidden="true"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="why-danamas peluang-investasi bg-f7f7f7">\n      <div class="container">\n        <div class="row clearfix">\n          <div class="col-md-12 text-center title-head">\n            <h2>Peluang Investasi</h2>\n          </div>\n          <div class="col-md-12 clearfix why-box row">\n\n            <ul class="nav nav-tabs">\n              <li class="active"><a data-toggle="tab" href="#menu1">2367<span>Mitra Usaha Tersedia</span></a></li>\n              <li><a data-toggle="tab" href="#menu2">2489<span>Mitra Usaha Terdanai</span></a></li>\n            </ul>\n\n            <div class="tab-content">\n              <div id="menu1" class="tab-pane fade in active">\n                <div class="col-md-4">\n                  <div class="info-marketplace">\n                    <h3>Pembiayaan untuk<br>Modal Bengkel</h3>\n                    <div class="text-center">\n                      <span>Pinjaman</span>\n                      <p>Rp. 20.000.000</p>\n                      <span>Jatuh Tempo</span>\n                      <p>10 March 2016</p>\n                      <span>Risiko</span>\n                      <p><span>Rata-rata pengembalian tahunan bersih untuk investor</span></p>\n                      <span>Jumlah Pinjaman</span>\n                      <div class="progressbox">\n                        <div class="progress">\n                          <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">\n                            80%\n                          </div>\n                        </div>\n                      </div>\n                        \n\n                      <a href="" class="btn btn-blue btn-small white-text">Saya ingin jadi pemodal</a>\n                    </div>\n                  </div>\n                </div>\n                <div class="col-md-4">\n                  <div class="info-marketplace">\n                    <h3>Pembiayaan untuk<br>Modal Bengkel</h3>\n                    <div class="text-center">\n                      <span>Pinjaman</span>\n                      <p>Rp. 20.000.000</p>\n                      <span>Jatuh Tempo</span>\n                      <p>10 March 2016</p>\n                      <span>Risiko</span>\n                      <p><span>Rata-rata pengembalian tahunan bersih untuk investor</span></p>\n                      <span>Jumlah Pinjaman</span>\n                      <div class="progressbox">\n                        <div class="progress">\n                          <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">\n                            50%\n                          </div>\n                        </div>\n                      </div>\n                        \n\n                      <a href="" class="btn btn-blue btn-small white-text">Saya ingin jadi pemodal</a>\n                    </div>\n                  </div>\n                </div>\n                <div class="col-md-4">\n                  <div class="info-marketplace">\n                    <h3>Pembiayaan untuk<br>Modal Bengkel</h3>\n                    <div class="text-center">\n                      <span>Pinjaman</span>\n                      <p>Rp. 20.000.000</p>\n                      <span>Jatuh Tempo</span>\n                      <p>10 March 2016</p>\n                      <span>Risiko</span>\n                      <p><span>Rata-rata pengembalian tahunan bersih untuk investor</span></p>\n                      <span>Jumlah Pinjaman</span>\n                      <div class="progressbox">\n                        <div class="progress">\n                          <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;">\n                            40%\n                          </div>\n                        </div>\n                      </div>\n                        \n\n                      <a href="" class="btn btn-blue btn-small white-text">Saya ingin jadi pemodal</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div id="menu2" class="tab-pane fade">\n                 <div class="col-md-4">\n                  <div class="info-marketplace">\n                    <h3>Pembiayaan untuk<br>Modal Bengkel</h3>\n                    <div class="text-center">\n                      <span>Pinjaman</span>\n                      <p>Rp. 20.000.000</p>\n                      <span>Jatuh Tempo</span>\n                      <p>10 March 2016</p>\n                      <span>Risiko</span>\n                      <p><span>Rata-rata pengembalian tahunan bersih untuk investor</span></p>\n                      <span>Jumlah Pinjaman</span>\n                      <div class="progressbox">\n                        <div class="progress">\n                          <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">\n                            80%\n                          </div>\n                        </div>\n                      </div>\n                        \n\n                      <a href="" class="btn btn-blue btn-small white-text">Saya ingin jadi pemodal</a>\n                    </div>\n                  </div>\n                </div>\n                <div class="col-md-4">\n                  <div class="info-marketplace">\n                    <h3>Pembiayaan untuk<br>Modal Bengkel</h3>\n                    <div class="text-center">\n                      <span>Pinjaman</span>\n                      <p>Rp. 20.000.000</p>\n                      <span>Jatuh Tempo</span>\n                      <p>10 March 2016</p>\n                      <span>Risiko</span>\n                      <p><span>Rata-rata pengembalian tahunan bersih untuk investor</span></p>\n                      <span>Jumlah Pinjaman</span>\n                      <div class="progressbox">\n                        <div class="progress">\n                          <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">\n                            50%\n                          </div>\n                        </div>\n                      </div>\n                        \n\n                      <a href="" class="btn btn-blue btn-small white-text">Saya ingin jadi pemodal</a>\n                    </div>\n                  </div>\n                </div>\n                <div class="col-md-4">\n                  <div class="info-marketplace">\n                    <h3>Pembiayaan untuk<br>Modal Bengkel</h3>\n                    <div class="text-center">\n                      <span>Pinjaman</span>\n                      <p>Rp. 20.000.000</p>\n                      <span>Jatuh Tempo</span>\n                      <p>10 March 2016</p>\n                      <span>Risiko</span>\n                      <p><span>Rata-rata pengembalian tahunan bersih untuk investor</span></p>\n                      <span>Jumlah Pinjaman</span>\n                      <div class="progressbox">\n                        <div class="progress">\n                          <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;">\n                            40%\n                          </div>\n                        </div>\n                      </div>\n                        \n\n                      <a href="" class="btn btn-blue btn-small white-text">Saya ingin jadi pemodal</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            \n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="marketplace two-boxes">\n      <div class="container ">\n        <div class="row clearfix">\n          <div class="col-md-12 text-center title-head"></div>\n          <div class="col-md-6">\n            <div class="info-marketplace">\n              <div class="icon"><img src="../assets/img/icon-mp-05.png" /></div>\n              <h3>Ingin jadi Pemodal?</h3>\n              <ul>\n                <li>\n                  <p>Lorem ipsum dolor sit amet. Sed diam nonummy nibh euismod tincidunt ut laoreet.</p>\n                </li>\n                <li>\n                  <p>Consectetuer adipiscing elit</p>\n                </li>\n                <li>\n                  <p>Sed diam nonummy nibh euismod tincidunt ut laoreet</p>\n                </li>\n                <li>\n                  <p>Dolore magna aliquam erat volutpat</p>\n                </li>\n                <li>\n                  <p>Ut wisi enim ad minim veniam, quis nostrud</p>\n                </li>\n              </ul>\n              <a href="" class="btn btn-blue btn-small white-text">Saya ingin jadi pemodal</a>\n            </div>\n          </div>\n          <div class="col-md-6">\n            <div class="info-marketplace">\n              <div class="icon"><img src="../assets/img/icon-mp-04.png" /></div>\n              <h3>Ingin jadi Peminjam</h3>\n              <ul>\n                <li>\n                  <p>Lorem ipsum dolor sit amet. Sed diam nonummy nibh euismod tincidunt ut laoreet.</p>\n                </li>\n                <li>\n                  <p>Consectetuer adipiscing elit</p>\n                </li>\n                <li>\n                  <p>Sed diam nonummy nibh euismod tincidunt ut laoreet</p>\n                </li>\n                <li>\n                  <p>Dolore magna aliquam erat volutpat</p>\n                </li>\n              </ul>\n              <a href="" class="btn btn-blue btn-small white-text">Saya ingin jadi peminjam</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="call-action download-app">\n      <div class="container">\n        <div class="clearfix">\n          <div class="">\n            <h2>\n              Download Aplikasi Mobile Kami\n            </h2>\n            <p>\n              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.\n            </p>\n          </div>\n          <div class="">\n            <a href="" class=""><img src="../assets/img/google-play.png"></a>\n            <a href="" class=""><img src="../assets/img/app-store.png"></a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="faq-pemodal bg-f4f4f4">\n      <div class="container">\n        <div class="row clearfix">\n          <div class="col-md-12 text-center title-head">\n            <h2>Tanya Jawab</h2>\n          </div>\n\n          <div class="col-md-6">\n            <ul class="clearfix">\n              <li>\n                <a href="#faq-01" data-toggle="collapse" class="clearfix">\n                  <span class="text">Ut wisi enim ad minim veniam, quis nostrud?</span>\n                  <span class="icon"></span>\n                </a>\n                <div id="faq-01" class="collapse">\n                  <p class="answer-faq">\n                    Dokumen utama yang dibutuhkan adalah: Catatan rekening bank 6 bulan terakhir, Laporan keuangan - Laporan keuangan 2 tahun terahir yang telah diaudit (jika memungkinkan) dan 1 tahun terakhir yang dibuat oleh manajemen (dapat dibuktikan keabsahannya), Identitas dan dokumen pribadi penjamin, dan Kartu nama penjamin.\n                  </p>\n                </div>\n              </li>\n              <li>\n                <a href="#faq-02" data-toggle="collapse" class="clearfix">\n                  <span class="text">Used diam nonummy nibh euismod tincidunt ut laoreet dolore?</span>\n                  <span class="icon"></span>\n                </a>\n                <div id="faq-02" class="collapse">\n                  <p class="answer-faq">\n                    Dokumen utama yang dibutuhkan adalah: Catatan rekening bank 6 bulan terakhir, Laporan keuangan - Laporan keuangan 2 tahun terahir yang telah diaudit (jika memungkinkan) dan 1 tahun terakhir yang dibuat oleh manajemen (dapat dibuktikan keabsahannya), Identitas dan dokumen pribadi penjamin, dan Kartu nama penjamin.\n                  </p>\n                </div>\n              </li>\n              <li>\n                <a href="#faq-03" data-toggle="collapse" class="clearfix">\n                  <span class="text">Utaoreet dolore magna aliquam erat volutpat?</span>\n                  <span class="icon"></span>\n                </a>\n                <div id="faq-03" class="collapse">\n                  <p class="answer-faq">\n                    Dokumen utama yang dibutuhkan adalah: Catatan rekening bank 6 bulan terakhir, Laporan keuangan - Laporan keuangan 2 tahun terahir yang telah diaudit (jika memungkinkan) dan 1 tahun terakhir yang dibuat oleh manajemen (dapat dibuktikan keabsahannya), Identitas dan dokumen pribadi penjamin, dan Kartu nama penjamin.\n                  </p>\n                </div>\n              </li>\n            </ul>\n          </div>\n\n          <div class="col-md-6">\n            <ul class="clearfix">\n              <li>\n                <a href="#faq-04" data-toggle="collapse" class="clearfix">\n                  <span class="text">Consectetuer adipiscing elit?</span>\n                  <span class="icon"></span>\n                </a>\n                <div id="faq-04" class="collapse">\n                  <p class="answer-faq">\n                    Pembayaran dilakukan peminjam di tanggal 1 & 15 setiap bulan, tergantung tanggal pencairan. Namun, demi kenyamanan bersama, semua status cicilan akan di mutakhirkan pada tanggal 8 dan 23 setiap bulan, atau pada hari kerja berikutnya apabila tanggal-tanggal tersebut merupakan hari libur. Anda dapat melihat saldo Anda yang ter-update dalam akun Anda.\n                  </p>\n                </div>\n              </li>\n              <li>\n                <a href="#faq-05" data-toggle="collapse" class="clearfix">\n                  <span class="text">Sed diam nonummy nibh euismod tincidunt ut laoreet?</span>\n                  <span class="icon"></span>\n                </a>\n                <div id="faq-05" class="collapse">\n                  <p class="answer-faq">\n                    Pembayaran dilakukan peminjam di tanggal 1 & 15 setiap bulan, tergantung tanggal pencairan. Namun, demi kenyamanan bersama, semua status cicilan akan di mutakhirkan pada tanggal 8 dan 23 setiap bulan, atau pada hari kerja berikutnya apabila tanggal-tanggal tersebut merupakan hari libur. Anda dapat melihat saldo Anda yang ter-update dalam akun Anda.\n                  </p>\n                </div>\n              </li>\n              <li>\n                <a href="#faq-06" data-toggle="collapse" class="clearfix">\n                  <span class="text">Quis nostrud nibh euismod tincidunt ut laoreet dolore magna?</span>\n                  <span class="icon"></span>\n                </a>\n                <div id="faq-06" class="collapse">\n                  <p class="answer-faq">\n                    Pembayaran dilakukan peminjam di tanggal 1 & 15 setiap bulan, tergantung tanggal pencairan. Namun, demi kenyamanan bersama, semua status cicilan akan di mutakhirkan pada tanggal 8 dan 23 setiap bulan, atau pada hari kerja berikutnya apabila tanggal-tanggal tersebut merupakan hari libur. Anda dapat melihat saldo Anda yang ter-update dalam akun Anda.\n                  </p>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="call-action">\n      <div class="container">\n        <div class="row clearfix">\n          <div class="col-md-12">\n            <h2>\n              Mari Berdayakan<br>Penggerak Ekonomi Indonesia\n            </h2>\n            <p>\n              Investasi pada Usaha Mikro &amp; UKM dengan Risiko Terukur dan Imbal Hasil Menarik\n            </p>\n          </div>\n          <div class="col-md-12">\n            <a href="" class="btn btn-blue">Mulai Berinvestasi</a>\n            <a href="" class="btn btn-blue">Ajukan Pembiayaan</a>\n          </div>\n        </div>\n      </div>\n    </div>\n'},853:function(a,n){a.exports="<header></header>\n<router-outlet></router-outlet>\n<footer></footer>"},854:function(a,n){a.exports='<div class="container">\n  <div class="form-account form-login-register" id="login">\n    <h2>Login Masuk</h2>\n    <p>Silakan isi data berikut untuk masuk ke aplikasi</p>\n    <form class="form-horizontal clearfix row">\n      <div class="col-md-6">\n        <fieldset>\n          <div class="form-box">\n            <!-- Text input-->\n            <div class="form-group">\n              <div class="col-md-12">\n                <input id="email_login" name="email_login" type="text" placeholder="Username" class="form-control input-md" required="">\n              </div>\n            </div>\n            <!-- Password input-->\n            <div class="form-group">\n              <div class="col-md-12">\n                <input id="password_login" name="password_login" type="password" placeholder="Password" class="form-control input-md" required="">\n              </div>\n            </div>\n            <!-- Multiple Checkboxes (inline) -->\n            <div class="form-group no-margin-left no-margin-right clearfix white-borderbottom">\n              <div class="pull-left">\n                <label class="checkbox-inline" for="login_options-0">\n                <input type="checkbox" name="login_options" id="login_options-0" value="1">Selalu Log in</label>\n              </div>\n              <div class="pull-right">\n                <label class="checkbox-inline" for="">\n                <a href="#"><i class="fa fa-lock"></i> Lupa Password?</a>\n                </label>\n              </div>\n            </div>\n            <!-- Button -->\n            <div class="form-group">\n              <div class="col-md-12">\n                <button id="singlebutton" name="singlebutton" class="btn btn-red btn-block">Log in</button>\n              </div>\n            </div>\n            \n          </div>\n        </fieldset>\n      </div>\n      <div class="col-md-6">\n        <div class="form-group daftar-via">\n          <div class="col-md-12">\n            <p class="text-center">\n              Anda belum memiliki akun silakan daftar terlebih dahulu\n            </p>\n          </div>\n          <div class="col-md-12">\n            <a href="" class="btn btn-akun">DAFTAR Akun</a>\n            <span>Or</span>\n            <a href="" class="btn btn-fb"><i class="fa fa-facebook"></i> DAFTAR VIA FACEBOOK</a>\n            <a href="" class="btn btn-twitter"><i class="fa fa-twitter"></i>  DAFTAR VIA EMAIL</a>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>'},855:function(a,n){a.exports='<div class="container">\n  <div class="form-account form-login-register" id="login">\n    <h2>Login Masuk</h2>\n    <p>Silakan isi data berikut untuk masuk ke aplikasi</p>\n    <form class="form-horizontal clearfix row">\n      <div class="col-md-6">\n        <fieldset>\n          <div class="form-box">\n            <!-- Text input-->\n            <div class="form-group">\n              <div class="col-md-12">\n                <input id="email_login" name="email_login" type="text" placeholder="Username" class="form-control input-md" required="">\n              </div>\n            </div>\n            <!-- Password input-->\n            <div class="form-group">\n              <div class="col-md-12">\n                <input id="password_login" name="password_login" type="password" placeholder="Password" class="form-control input-md" required="">\n              </div>\n            </div>\n            <!-- Multiple Checkboxes (inline) -->\n            <div class="form-group no-margin-left no-margin-right clearfix white-borderbottom">\n              <div class="pull-left">\n                <label class="checkbox-inline" for="login_options-0">\n                <input type="checkbox" name="login_options" id="login_options-0" value="1">Selalu Log in</label>\n              </div>\n              <div class="pull-right">\n                <label class="checkbox-inline" for="">\n                <a href="#"><i class="fa fa-lock"></i> Lupa Password?</a>\n                </label>\n              </div>\n            </div>\n            <!-- Button -->\n            <div class="form-group">\n              <div class="col-md-12">\n                <button id="singlebutton" name="singlebutton" class="btn btn-red btn-block">Log in</button>\n              </div>\n            </div>\n            \n          </div>\n        </fieldset>\n      </div>\n      <div class="col-md-6">\n        <div class="form-group daftar-via">\n          <div class="col-md-12">\n            <p class="text-center">\n              Anda belum memiliki akun silakan daftar terlebih dahulu\n            </p>\n          </div>\n          <div class="col-md-12">\n            <a href="" class="btn btn-akun">DAFTAR Akun</a>\n            <span>Or</span>\n            <a href="" class="btn btn-fb"><i class="fa fa-facebook"></i> DAFTAR VIA FACEBOOK</a>\n            <a href="" class="btn btn-twitter"><i class="fa fa-twitter"></i>  DAFTAR VIA EMAIL</a>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>'},856:function(a,n){a.exports='  <div class="container">\n    <div class="clearfix">\n      <div class="col-md-12 no-padding">\n        <a href="" class="text-center"><img src="../assets/img/logo.png"></a>\n        <ul class="text-center">\n          <li><a href="">Pendanaan</a></li>\n          <li><a href="">Pinjaman</a></li>\n          <li><a href="">Faq</a></li>\n          <li><a href="">Tentang Kami</a></li>\n          <li><a href="">Hubungi Kami</a></li>\n          <li><a href="">Karir</a></li>\n        </ul>\n        <p class="text-center">\n          Mass Credit merupakan badan hukum yang didirikan berdasarkan Hukum Republik Indonesia merupakan perusahaan yang tidak diatur oleh dan/atau dalam pengawasan Otoritas Jasa Keuangan (OJK) di Indonesia. Perusahaan tidak menyediakan segala bentuk saran pendanaan atau rekomendasi pendanaan terkait pilihan-pilihan dalam website ini. Isi dan materi yang tersedia pada website ini dimaksudkan untuk memberikan informasi, dan tidak dianggap sebagai sebuah penawaran, permohonan, undangan, saran atau rekomendasi untuk membeli atau menjual pendanaan, sekuritas atau produk pasar modal atau jasa keuangan lainya. Perusahaan dalam memberikan jasanya hanya terbatas pada fungsi administratif. Perusahaan dan tidak memberikan saran, memberi kewajiban atau kewajiban lainya untuk jasanya. Dana ditempatkan di rekening Modalku, adalah tidak dan tidak akan dianggap sebagai simpanan yang diselenggarakan oleh Perusahaan seperti diatur dalam peraturan perundang-undangan tentang Perbankan di Indonesia.\n        </p>\n        <ul class="socmed text-center">\n          <li><a href=""><i class="fa fa-facebook"></i></a></li>\n          <li><a href=""><i class="fa fa-twitter"></i></a></li>\n        </ul>\n        <p class="copyright">&copy; 2016. Mass Credit. All Right Reserved.</p>\n      </div>\n    </div>\n  </div>\n'},857:function(a,n){a.exports='<div class="top-menu-header">\n    <div class="nav-top clearfix">\n      <div class="container">\n        <div class="row">\n          <div class="pull-right socmed">\n            <ul>\n              <li class="dropdown language">\n                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Indonesia<span class="caret"></span></a>\n                <ul class="dropdown-menu">\n                  <li><a href="#">English</a></li>\n                </ul>\n              </li>\n              <li><a href=""><i class="fa fa-facebook"></i></a></li>\n              <li><a href=""><i class="fa fa-twitter"></i></a></li>\n            </ul>\n          </div>\n          <div class="pull-left company-info">\n            <ul>\n              <li class="no-padding-left"><a href="">Support 24/7</a></li>\n              <li><a href="">Tanya Jawab</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="line-separator"></div>\n\n    <nav class="navbar navbar-head">\n      <div class="container">\n        <div class="row">\n          <div class="navbar-header">\n            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n            <span class="sr-only">Toggle navigation</span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#"><img src="../assets/img/logo.png"/></a>\n          </div>\n          <div id="navbar" class="navbar-collapse collapse">\n              <ul class="navbar-right">\n                <li class="dropdown">\n                   <a href="#/auth/login" >Login</a>\n                </li>\n                <li class="dropdown">\n                   <a href="#/auth/register" >Daftar</a>\n                </li>\n             </ul>\n             <ul class="nav navbar-nav">\n                <li class="active"><a href="#">Pendanaan</a></li>\n                <li><a href="#">Pinjaman</a></li>\n                <li><a href="#">Faq</a></li>\n                <li><a href="#">Tentang Kami</a></li>\n                <li><a href="#">Hubungi Kami</a></li>\n                <li><a href="#">Karir</a></li>\n             </ul>\n          </div>\n          <!--/.navbar-collapse -->\n        </div>\n      </div>\n    </nav>\n  </div>';
}});