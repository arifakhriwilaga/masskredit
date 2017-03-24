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
  templateUrl: './dashboard.component.html',
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



