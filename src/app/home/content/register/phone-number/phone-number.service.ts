import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router }	from '@angular/router';

declare var jQuery:any

@Injectable ()
export class PhoneNumberService {
	constructor(private router : Router, private http: Http) { }

	// declare object url get verify code
	private phonenumberUrl = 'https://masscredit-api.stagingapps.net/user/credential/getverificationcode';
	
	// declare headers
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

  private message = {};

	postPhoneNumber(phone_number:any): Promise<any> {
		return this.http.post(this.phonenumberUrl,phone_number,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError)	
	}

	handleError(err){
		var error = JSON.parse(err._body)
    return error
 	}
}