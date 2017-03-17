import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Data } from './data';

@Injectable ()
export class ForgotPasswordService {
	
	constructor (private http:Http) { }
	// set header
	headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});

	options = new RequestOptions({ headers: this.headers });

	private otpUrl = "https://masscredit-api.stagingapps.net/user/credential/forgetpassword/get-otp";
	
	getOtp(phoneNumber:any): Promise<any>{
	 	return this.http.post(this.otpUrl,phoneNumber,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError)	
	}

	handleError(err){
		var error   = JSON.parse(err._body)
    return error.meta
 	}


}