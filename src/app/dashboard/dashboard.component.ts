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
  dataUser = {
    name : null ,
    last_login : null ,
    user_class : null ,
    user_status : null ,
    profile_image : null ,
    investor : null ,
    borrower : null ,
    fund_history : null ,
    account_summary : null ,
    is_complete : null ,
    total_income:null,
    total_investment:null,
    total_loan:null,
    total_withdrawal:null,
    avg_review:null
  }
  dataComplete:number;
  ngOnInit(){
    this.getProfile();
    this.dashboardService.sendData("Ari fakhri");

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
      // console.log(data)
      if(code.charAt(0) === '4') {
        this.handleError(message);
      } if(code.charAt(0) === '2') {
        this.handleSuccess(data);
      };
    });
  }

  handleError(message:any){
  if(message === 'unauthorized') {      
      this.router.navigate(['/dashboard/sign-out']);
     }          
  }
  
  handleSuccess(data:any){
    this.dataUser.name = data.profile.name;
    this.dataUser.last_login = data.profile.last_login;
    this.dataUser.profile_image = data.profile.profile_image;
    this.dataUser.user_class = data.profile.user_score.user_class;
    this.dataUser.user_status = data.profile.user_score.user_status;
    this.dataUser.investor = data.profile.user_score.investor;
    this.dataUser.borrower = data.profile.user_score.borrower;
    this.dataUser.fund_history = data.profile.user_score.fund_history;
    this.dataUser.avg_review = data.profile.user_score.avg_reviews;
    this.delimiter(data.account_summary.balance)
  }

  delimiter(nominal:any){
    try {
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
      this.dataUser.account_summary = idr.concat(c);
    } finally {
      this.dataComplete = 1;
    }
  }
}    



