webpackJsonp([28],{874:function(e,n,t){"use strict";var a=t(0),i=t(87),s=t(50),o=function(){function CreateComponent(e,n){this.http=e,this.router=n,this.token=JSON.parse(localStorage.getItem("access_token")),this.invest={access_token:this.token,invest_name:null,type:0,description:null,images_invest:null,due_date:"",amount:null,interest:null,tenor:null,fee:!0}}return CreateComponent.prototype.ngOnInit=function(){jQuery(".datepicker").datepicker({format:"yyyy/mm/dd"}),jQuery("#investasiForm").validate({rules:{invest_name:{required:!0},type:{required:!0},masa_berlaku:{required:!0},amount:{required:!0},tenor:{required:!0},description:{required:!0}}})},CreateComponent.prototype.createInvest=function(e){var n=new i.Headers({"Content-Type":"application/json",api_key:"01b19716dfe44d0e9c656903429c3e9c65d0b243"});new i.RequestOptions({headers:n});if(jQuery("#investForm").valid()){this.invest.due_date=jQuery("#masa_berlaku").datepicker("getDate");var t=new FileReader;t.onload=function(e,n){try{var t=e.target.result.split(",")[1];"AQID"==t&&(this.invest.images_invest=null),"AQID"!=t&&(this.invest.images_invest=t)}finally{console.log(this.invest)}}.bind(this);var a=document.getElementById("image_invest"),s=a.files[0],o=new Uint8Array([1,2,3]),r=o.buffer,l=new Blob([r]);void 0==s&&(s=l);var d=t.readAsDataURL(s);this.invest.images_invest=d}},CreateComponent.prototype.getTipeInvestasi=function(e){this.tipeInvest=e,console.log(e)},CreateComponent=__decorate([a.Component({selector:"create",template:t(987)}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.Http&&i.Http)&&e||Object,"function"==typeof(n="undefined"!=typeof s.Router&&s.Router)&&n||Object])],CreateComponent);var e,n}();n.CreateComponent=o},875:function(e,n,t){"use strict";var a=t(0),i=t(50),s=t(87),o=t(153),r=t(62),l=t(874);n.routes=[{path:"",component:l.CreateComponent}];var d=function(){function CreateModule(){}return CreateModule.routes=n.routes,CreateModule=__decorate([a.NgModule({declarations:[l.CreateComponent],imports:[s.HttpModule,o.FormsModule,r.CommonModule,i.RouterModule.forChild(n.routes)],providers:[]}),__metadata("design:paramtypes",[])],CreateModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=d},987:function(e,n){e.exports='<section class="content">\n <div class="row">\n   <div class="col-md-12">\n     <div class="box bg-transparent">\n       <div class="box-header">\n         <h2 class="box-title pull-left">Tambah Investasi</h2>\n       </div>\n       <div class="box-body">\n         <div class="form-login-register">\n           <form class="form-horizontal clearfix row" name="investForm" id="investForm">\n              <div class="col-md-6">\n                 <div class="form-group">\n                   <div class="col-md-12">\n                       <span class="required">*</span>\n                       <input type="text" name="invest_name" placeholder="Nama Investasi" class="form-control input-md" id="invest_name" [(ngModel)]="invest.invest_name">\n                   </div>\n                 </div>\n                 <div class="form-group">\n                     <div class="col-md-12">\n                       <span class="required">*</span>\n                       <select class="form-control input-md" name="type" id="type" (change)="getTipeInvestasi($event.target.value)" [(ngModel)]="invest.type">\n                          <option value="0" disabled>Tipe Investasi</option>\n                          <option [value]="1">Jaminan</option>\n                          <option [value]="2">Tanpa Jaminan</option>\n                       </select>\n                     </div>\n                 </div>\n                 <div class="form-group">\n                   <div class="col-md-12">\n                     <div class="input-group">\n                       <label class="input-group-btn">Foto Investasi</label>\n                         <input type="file" id="image_invest" value="browse..">\n                     </div>\n                   </div>\n                </div>\n                  <div class="form-group">\n                     <div class="col-md-12">\n                       <span class="required">*</span>\n                       <textarea placeholder="Deskripsi" class="form-control input-md"   name="description" id="description" [(ngModel)]="invest.description">\n                       </textarea>\n                     </div>\n                 </div>\n              </div>\n               <div class="col-md-6">\n                 <div class="form-group">\n                   <div class="col-md-10">\n                     <span class="required">*</span>\n                     <input type="text" placeholder="Nominal Investasi" class="form-control input-md" name="amount" id="amount" [(ngModel)]="invest.amount">\n                   </div>\n                     <label class="unit">Rupiah</label>\n                 </div>\n                 <div class="form-group">\n                 <div class="col-md-12">\n                     <span class="required">*</span>\n                     <input  type="text" placeholder="Batas Akhir Penawaran " name="masa_berlaku" class="form-control input-md datepicker" id="masa_berlaku" [(ngModel)]="invest.masa_berlaku">\n                 </div>\n                 </div>\n                 <div class="form-group">\n                   <div class="col-md-10 clearfix">\n                     <input type="text" placeholder="Bunga" class="form-control input-md"  name="interest" id="interest" [(ngModel)]="invest.interest">\n                   </div>\n                     <label class="unit">%/bulan</label>\n                 </div>\n                 <div class="form-group">\n                   <div class="col-md-10 clearfix">\n                     <span class="required">*</span>\n                     <input type="text" placeholder="Tenor" class="form-control input-md" maxlength="2" minlength="1"  name="tenor" id="tenor" [(ngModel)]="invest.tenor">\n                    </div>\n                    <label class="unit">Bulan</label>\n                 </div>\n                 <div class="form-group">\n                   <div class="col-md-12">\n                     <input type="text" placeholder="Charge Free" class="form-control input-md" readonly>\n                   </div>\n                 </div>\n               </div>\n               <div class="col-md-12">\n                 <div class="form-group">\n                    <div class="col-md-6 col-center">\n                      <a href="#/dashboard/investasi" class="btn btn-default">Batal</a>\n                      <button class="btn btn-red" (click)="createInvest(invest)">Simpan</button>\n                    </div>\n                 </div>\n              </div>\n           </form>\n         </div>\n       </div>\n    </div>\n   </div>\n </div>\n</section>'}});