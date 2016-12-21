webpackJsonp([7],{738:function(l,a,e){"use strict";var n=e(0),t=e(62),s=e(109),o=e(154),c=e(408),i=e(73),r=e(739);a.routes=[{path:"",component:r.ProfileComponent}];var d=function(){function ProfileModule(){this.routes=a.routes}return ProfileModule=__decorate([n.NgModule({declarations:[r.ProfileComponent],imports:[i.CommonModule,s.HttpModule,o.FormsModule,t.RouterModule.forChild(a.routes)],providers:[c.LocalStorageService]}),__metadata("design:paramtypes",[])],ProfileModule)}();Object.defineProperty(a,"__esModule",{value:!0}),a.default=d},739:function(l,a,e){"use strict";var n=e(0),t=e(109),s=function(){function ProfileComponent(l){this.http=l,this.token={access_token:JSON.parse(localStorage.getItem("access_token"))},this.profile={}}return ProfileComponent.prototype.ngOnInit=function(){this.getProfile()},ProfileComponent.prototype.getProfile=function(){var l=this;console.log("Sedang mengambil data....");var a=new t.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"}),e=new t.RequestOptions({headers:a});this.http.post("http://masscredit-api.stagingapps.net/user/credential/profile",this.token,e).map(function(l){return l.json()}).subscribe(function(a){l.profile=a.data.profile.complement_user,console.log(l.profile);a.meta.code,a.meta.message})},ProfileComponent=__decorate([n.Component({selector:"profile",template:e(776)}),__metadata("design:paramtypes",["function"==typeof(l="undefined"!=typeof t.Http&&t.Http)&&l||Object])],ProfileComponent);var l}();a.ProfileComponent=s},776:function(l,a){l.exports='\n\n  <!-- Content Wrapper. Contains page content -->\n  <div class="content-wrapper">\n\n    <!-- Main content -->\n    <section class="content">\n      <div class="row">\n        <div class="col-md-12">\n          <div class="box bg-transparent">\n            <div class="box-header">\n              <h2 class="box-title pull-left">Detail Profile</h2>\n            </div>\n            <!-- /.box-header -->\n            <div class="box-body">\n              <div class="clearfix white-bg detail-page">\n                <div class="col-md-5">\n                  <div class="box-img-detail"><img alt="Photo Profile"></div>\n                </div>\n                <div class="col-md-7">\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">Full Name<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">Najib Budin Abdullah</label>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">Email Address<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">najib.budin@appschef.com</label>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">Active User<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">Active</label>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">Last Login<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">21 Desember 2016</label>\n      \t\t\t\t\t</div>\n\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<div class="box-header">\n      \t\t\t\t\t\t  <h2 class="box-title pull-left">User Score</h2>\n      \t\t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">User Class<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">2A</label>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">User Status<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">Verified</label>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">Fund Process<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">97%</label>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">Fund History<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">Excellent</label>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">AVG Reviews<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">4.5</label>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">Company<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">Certified</label>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">Borrower<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">Platinum</label>\n      \t\t\t\t\t</div>\n      \t\t\t\t\t<div class="form-group clearfix">\n      \t\t\t\t\t\t<label class="col-md-5">Cap Size<span>:</span></label>\n      \t\t\t\t\t\t<label class="col-md-7 value">17 M</label>\n      \t\t\t\t\t</div>\n                </div>\n\n                <div class="form-group clearfix">\n                  <div class="box-header">\n                    <h2 class="box-title pull-left">Complement Data</h2>\n                  </div>\n                </div>\n\n                <div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Jumlah Anak<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.jumlah_anak }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Jumlah Tanggungan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.jumlah_tanggungan }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Gaji per bulan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.gaji_per_bulan }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Hubungan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.hubungan }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Jabatan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.jabatan }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Jenis Perusahaan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.jenis_perusahaan }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Jumlah Pendapatan Lain 1<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.jumlah_pendapatan_lain_1 }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Jumlah Pendapatan Lain 2<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.jumlah_pendapatan_lain_2 }}</label>\n                </div>\n                <!-- Data Keluarga -->\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Nama Lengkap Keluarga<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.nama_lengkap_keluarga }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Nama Perusahaan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.nama_perusahaan }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Nama Usaha<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.nama_usaha }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">no_rekening<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.no_rekening }}</label>\n                </div>\n\n\n                <!-- Data Keluarga -->\n                <div class="form-group clearfix">\n                  <label class="col-md-5">No Telepon<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.no_tlp }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Pekerjaan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.pekerjaan }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Pekerjaan Kerabat<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.pekerjaan_kerabat }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Pendapatan Bersih Perusahaan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.pendapatan_bersih_perusahaan }}</label>\n                </div>\n\n\n                <!-- Data Keluarga -->\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Pendapatan Lain 1<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.pendapatan_lain_1 }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Pendapatan Lain 2<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.pendapatan_lain_2 }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Pengeluaran per Bulan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.pengeluaran_per_bulan }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Status Perkawinan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.status_perkawinan }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Sumber Pendapatan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.sumber_pendapatan }}</label>\n                </div>\n\n                <!-- Data Keluarga -->\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Sumber Pendapatan Lain 1<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.sumber_pendapatan_lain_1 }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Sumber Pendapatan Lain 2<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.sumber_pendapatan_lain_2 }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Tahun Perusahaan Berdiri<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.tahun_perusahaan_berdiri }}</label>\n                </div>\n                <div class="form-group clearfix">\n                  <label class="col-md-5">Telepon Perusahaan<span>:</span></label>\n                  <label class="col-md-7 value">{{ profile.tlp_perusahaan }}</label>\n                </div>\n\n                </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n    </section>\n    </div>'}});