import { Injectable }		from '@angular/core';
import { Headers, Http }	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';
	



@Injectable ()
export class LoginService {
	private headers  = new Headers ({'Content-Type' : 'application/json'}); //URL to web API
	private loggedinUrl = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/login'; //URL API LOGIN

	constructor (private http:Http) { }

	loggedin(email,password) : Observable<any> {
		let user = { email: email, password: password };
		return this.http.post(this.loggedinUrl, {user}, this.headers);
	}
}

