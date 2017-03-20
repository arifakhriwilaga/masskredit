import { Component, ViewEncapsulation, OnInit }  from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HeaderComponent } from './shared/header';

import { User } from './user';

import { Global } from './../global.service';
import { DashboardService } from './dashboard.service';


declare var jQuery: any;

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  // styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {  
  constructor(
    private http : Http,
    private router:Router,
    private dashboardService:DashboardService
  ) { }

  public data_user : Global;

    // object for pass to header dashboard
    name : string ;
    last_login : string    = "";
    user_class : string    = "";
    user_status : string   = "";
    profile_image : string = "";
    investor : string      = "";
    borrower : string      = "";
    avg_reviews : string   = "";
    fund_history : string  = "";
    account_summary : string = "";
    is_complete : string = "";
    total_income:any;
    total_investment:any;
    total_loan:any;
    total_withdrawal:any;

  ngOnInit(){
    this.getProfile();
    jQuery('li > a').click(function() {
      jQuery('li').removeClass();
      jQuery(this).parent().addClass('active');
   
    });
    // set datepicker
    jQuery('#datepicker').datepicker({
      format: 'mm/dd/yyyy'
    });

    var perShapeGradient = {
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 0
    };
  }

  public profile:User;
 
  // object for get token
  private token ={ 
    access_token : JSON.parse(localStorage.getItem("access_token"))
  };
  
  private profileUrl = "https://masscredit-api.stagingapps.net/user/credential/profile";
   
  getProfile(): void{
    this.dashboardService.getProfile(this.token).then(dataProfile => {

      let message = dataProfile.meta.message;
      let code = JSON.stringify(dataProfile.meta.code);
      let data = dataProfile.data;

      if(code.charAt(0) === '4') {
        this.handleError(message);
      } if(code.charAt(0) === '2') {
        this.handleSuccess(data);
      };
    });
  }

  handleError(message:any){
  if(message === 'unauthorized') {
      alert("Maaf akses token tidak terdaftar")            
      this.router.navigate(['/dashboard/sign-out']);
     }          
  }
  
  handleSuccess(data:any){
    this.name = data.profile.name;
    this.last_login = data.profile.last_login;
    this.profile_image = data.profile.profile_image;

    this.delimiter(data.account_summary.balance)
    
    this.user_class = data.profile.user_score.user_class;
    this.user_status = data.profile.user_score.user_status;
    this.investor = data.profile.user_score.investor;
    this.borrower = data.profile.user_score.borrower;
    this.fund_history = data.profile.user_score.fund_history;
  }

  // getProfile(){
  //   this.http.post(this.profileUrl,this.token,this.options)
  //     .map(response => response.json())
  //     .subscribe((response : any) => {
  //       console.log(response)
  //       this.profile         = response.data.profile.name;
  //       this.account_summary = response.data.account_summary;

  //       this.name = response.data.profile.name;  
  //       // this.name           = this.globalService.data;
  //       this.last_login     = response.data.profile.last_login;
  //       this.profile_image  = response.data.profile.profile_image;
  //       this.account_summary= response.data.account_summary.balance;
  //       var _minus = false;
  //       var b:any = this.account_summary.toString();
  //       if (b<0) _minus = true;
  //         b=b.replace(".","");
  //         b=b.replace("-","");
  //         let c = "";
  //         let panjang = b.length;
  //         let j = 0;
  //       for (let i = panjang; i > 0; i--){
  //         j = j + 1;
  //         if (((j % 3) == 1) && (j != 1)){
  //           c = b.substr(i-1,1) + "." + c;
  //           // console.log(c)
  //         } else {
  //           c = b.substr(i-1,1) + c;
  //         }
  //       }
  //       if (_minus) c = "-" + c ;
  //       let idr = "Rp.";
  //       this.account_summary = idr.concat(c);
  //       this.user_class     = response.data.profile.user_score.user_class;
  //       this.user_status    = response.data.profile.user_score.user_status;
  //       this.investor     = response.data.profile.user_score.investor;
  //       this.borrower     = response.data.profile.user_score.borrower;
  //       this.avg_reviews  = response.data.profile.user_score.avg_reviews;
  //       this.fund_history = response.data.profile.user_score.fund_history;
  //       this.is_complete  = response.data.profile.is_complete;
        
  //       },(err:any) => {
  //         var error   = JSON.parse(err._body)
  //         var message = error.meta.message
  //           if(message == "unauthorized") {
  //             alert("Maaf session anda telah habis silahkan login kembali")
  //             return this.router.navigateByUrl('/dashboard/sign-out')
              
  //           }  
  //         }
  //     );
  // }

  delimiter(nominal:any){
    var _minus = false;
    var b:any = nominal.toString();
    if (b<0) _minus = true;
      b=b.replace(".","");
      b=b.replace("-","");
      let c = "";
      let panjang = b.length;
      let j = 0;
    for (let i = panjang; i > 0; i--){
      j = j + 1;
      if (((j % 3) == 1) && (j != 1)){
        c = b.substr(i-1,1) + "." + c;
      } else {
        c = b.substr(i-1,1) + c;
      }
    }
    if (_minus) c = "-" + c ;
    let idr = "Rp.";
    this.account_summary = idr.concat(c);
  }
}    



