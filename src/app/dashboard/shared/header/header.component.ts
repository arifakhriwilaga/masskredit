import { Component, ViewEncapsulation } 	  				 from '@angular/core';
import { LoginService }   				 from './../../../auth/login/login.service';
import { Headers, Http, RequestOptions } from '@angular/http';
import { DashboardComponent }			 from './../../dashboard.component';

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
		private dashboardComponent : DashboardComponent
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
        .subscribe((response : any) => {
          // console.log(response);
          this.name         	= response.data.profile.name;
          this.last_login       = response.data.profile.last_login;
          this.user_class       = response.data.profile.user_class;
          this.profile_image    = response.data.profile.profile_image;
          this.account_summary 	= response.data.account_summary.balance;
        });
	
	// let data        = { };
	// this.profile 	= data; 
	// console.log("header");
 //  	let account_summary = {};
  	
 // 		this.profile;
	console.log(this.name)
 	}	
 	
	private name 			= { };
	private last_login 		= { };
	private user_class 		= { };
	private profile_image 	= { };

	private account_summary = { };

	// console.log(this.profile)
	// debugger;
    // console.log(data_detail);



	// public logout() {
	// 	return this.loginService.logout()
	// }

}