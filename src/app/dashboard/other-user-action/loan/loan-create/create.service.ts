import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable ()
export class CreateService {
	constructor (private http:Http) { }

	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

	simulationUrl = 'https://masscredit-api.stagingapps.net/user/loan/simulate';

	calculationLoan(data:any): Promise<any>{
		return this.http.post(this.simulationUrl,data,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}

	handleError(err){
		var error = JSON.parse(err._body);
    return error;
 	}

 	otpUrl = 'https://masscredit-api.stagingapps.net/other-user/loan/otp';

	getOtp(data:any): Promise<any>{
		return this.http.post(this.otpUrl,data,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}

	categoryUrl = 'https://masscredit-api.stagingapps.net/master/loan-category';
 	getCategory(){
 		return this.http.get(this.categoryUrl,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
 	}

}