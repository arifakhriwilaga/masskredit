import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router }	from '@angular/router';

declare var jQuery:any

@Injectable ()
export class VerifyCodeService {
	constructor(private router : Router, private http: Http) { }
	
	private verifycodeUrl = 'https://masscredit-api.stagingapps.net/user/credential/verifycode';
	private resendcodeUrl = 'https://masscredit-api.stagingapps.net/user/credential/getverificationcode';
	
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

	postVerifyCode(verify_code:any): Promise<any> {
		return this.http.post(this.verifycodeUrl,verify_code, this.options)
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}

	postResendCode(nomor:any): Promise<any>{
		return this.http.post(this.resendcodeUrl,nomor,this.options)
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}

	handleError(err){
		var error = JSON.parse(err._body);
    return error;
 	}
}