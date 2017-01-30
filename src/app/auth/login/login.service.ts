import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { User } from './login';


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
					var code 		= response.meta.code;
					if(code == "200") {
						return this.router.navigateByUrl('/dashboard')
					}else{
						alert("Register gagal")
					}
				},
				(err:any) => {

				}
			);
	}
}


