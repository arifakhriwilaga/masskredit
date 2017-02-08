import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { User } from './login';

declare var jQuery:any
@Injectable ()
export class LoginService {
	constructor (private http:Http, private router:Router) { }

	// private user:User;

  // declare object url login
	private loggedinUrl = 'https://masscredit-api.stagingapps.net/user/credential/login';
	
	// declare headers
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

  private message = {};
  
	// function login
	public login(user:any){
		return this.http.post(this.loggedinUrl, user, this.options)
			.map(response => response.json())
			.subscribe(
				(response:any) => { 
					var access_token 		= JSON.stringify(response.data.access_token);
					var code 		= response.meta.code;
					var getToken = localStorage.getItem("access_token");
					if(code == "200") {
						let token = {value: access_token, timestamp: new Date().getTime()}
						// localStorage.setItem("access_token",JSON.stringify(token));
						localStorage.setItem("access_token",access_token);
						// if(getToken == null) {
						// }else{
						// 	if(now-setupTime > hours*60*60*1000) {
						// 		localStorage.clear();
						// 		localStorage.setItem("access_token",JSON.stringify(access_token));
						// 	}	
						// }
						// localStorage.setItem("access_token",access_token);
						return this.router.navigateByUrl('/dashboard');
					}else{
						alert("Register gagal");
					}
				},
				(err:any) => {
					var error   = JSON.parse(err._body);
					var code = error.meta.code;
					let message = error.meta.message;
						if(message == "Account not found") {
							alert("Akun tidak ditemukan.")
						  var $this = jQuery("#load");
				      $this.button('reset');
						}
						if(message == null) {
							alert("Akun tidak ditemukan.")
						  var $this = jQuery("#load");
				      $this.button('reset');
						}
				}
			);
	}
}


