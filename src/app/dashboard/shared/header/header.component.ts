import { Component, ViewEncapsulation } 	  				 from '@angular/core';
import { LoginService }   				 from './../../../auth/login/login.service';
import { Headers, Http, RequestOptions } from '@angular/http';
import { DashboardComponent }			 from './../../dashboard.component';

import { Router }	   from '@angular/router';

@Component({
	//moduleId: module.id,
	selector: 'header-dashboard',
	templateUrl: 'header.component.html',
	providers: [LoginService]
})

export class HeaderComponent { 

	constructor (
		// private loginService:LoginService, 
		private http : Http,
		private dashboardComponent : DashboardComponent,
		private router : Router
	){ 

	// let data = this.profile;
	// console.log(data);
    
  	// return data;
	}
	


 	ngAfterViewInit(){
    let headers = new Headers({ 
       'Content-Type': 'application/json',
       'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
     });

	  let token = {
      'access_token' : JSON.parse(localStorage.getItem("access_token")),
      }
   
    console.log("Sedang mengambil data....")
      let options = new RequestOptions({ headers: headers });
      this.http.post('http://masscredit-api.stagingapps.net/user/credential/profile',token,options)
        .map(response => response.json())
        .subscribe(
	        (response : any) => {
	          console.log(response);
	          this.name         	= response.data.profile.name;
	          this.last_login       = response.data.profile.last_login;
	          this.user_class       = response.data.profile.user_score.user_class;
	          this.user_status		= response.data.profile.user_score.user_status;
	          this.profile_image    = response.data.profile.profile_image;
	          this.account_summary 	= response.data.account_summary.balance;
	          this.investor 		= response.data.profile.user_score.investor;
	          this.borrower 		= response.data.profile.user_score.borrower;
	          this.avg_reviews 		= response.data.profile.user_score.avg_reviews;
	          this.fund_history 	= response.data.profile.user_score.fund_history;
	          this.is_complete 		= response.data.profile.is_complete;

	        },
			(err:any) => {
	            var error   = JSON.parse(err._body)
	            var message = error.meta.message
	              if(message == "unauthorized") {
	                alert("Maaf session anda telah habis silahkan login kembali")
	                return this.router.navigateByUrl('/dashboard/sign-out')
	              }  
	        }
        );
	
	// let data        = { };
	// this.profile 	= data; 
	// console.log("header");
 //  	let account_summary = {};
  	
 // 		this.profile;
	// console.log(this.name)
 	}	
 	
	private name 			= { };
	private last_login 		= { };
	private user_class 		= { };
	private user_status 	= { };
	private profile_image 	= { };
	private investor		= { };
	private borrower 		= { };
	private avg_reviews		= { };
	private fund_history	= { };
	private account_summary = { };
	private is_complete 	= { };

	// console.log(this.profile)
	// debugger;
    // console.log(data_detail);



	// public logout() {
	// 	return this.loginService.logout()
	// }

}