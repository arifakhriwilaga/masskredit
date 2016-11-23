import { Injectable }		from '@angular/core';
import { Headers, Http }	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';
import { Router }			from '@angular/router';

@Injectable ()
export class LoginService {
	private headers  	= new Headers ({'Content-Type' : 'application/json'}); //URL to web API
	private loggedinUrl = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/login'; //URL API LOGIN
	private logoutUrl	= 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/logout';
	constructor (private http:Http, private router : Router) { }

	loggedin(email,password) : Observable<any> {
		let user = { email: email, password: password };
		return this.http.post(this.loggedinUrl, {user}, this.headers);
	}

	public logout() {
		var token = localStorage.getItem("access_token");
		return this.http
		.post('https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/logout',token)
		.subscribe((data: any) => {
			var token = data.json();
			console.log(token.meta.code,token.meta.message);
		if(token.meta.code == "200") {
				localStorage.removeItem("access_token");
				return this.router.navigateByUrl('/');
			}
			else{
				return this.router.navigateByUrl('dashboard')
		}
		});
	}

}

