import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { User } from './login';

declare var jQuery:any

@Injectable ()
export class LoginService {
	constructor (private http:Http, private router:Router) { }

  // declare object url login
	private loggedinUrl = 'https://masscredit-api.stagingapps.net/user/credential/login';
	
	// declare headers
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

  private message = {};

  // url for redirect after user loging
  dashboardUrl :string = '/dashboard';
  // object for condition login
  isLoggedIn: boolean = false;

	// function login
	postLogin(user:any){
		this.http.post(this.loggedinUrl, user, this.options)
			.map(response => response.json())
			.subscribe((response:any) => { 
				let access_token 		= JSON.stringify(response.data.access_token);
				let code 		= response.meta.code;
				let getToken = localStorage.getItem("access_token");
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
			},(err:any) => {
				let error   = JSON.parse(err._body);
				let code = error.meta.code;
				let message = error.meta.message;
				let $this = jQuery("#load"); // not available $this on 'let' so create $this on var
				if(message == "Account not found") {
					alert("Akun tidak ditemukan.")
		      // $this.button('reset');
				}
				if(message = 'Nomor HP atau password Anda salah, silahkan cek kembali.') {
					alert("Nomor HP atau password Anda salah, silahkan cek kembali.")
				}
			});
	}

	linkLogin(){
		return this.router.navigate(['/auth/login'])
	}
}


