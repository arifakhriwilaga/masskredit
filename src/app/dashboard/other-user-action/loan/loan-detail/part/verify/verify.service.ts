import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable ()
export class VerifyService {
	constructor (private http:Http) { }

	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

	investUrl = 'https://masscredit-api.stagingapps.net/other-user/investment/new';
	createLoan(data:any): Promise<any>{
	 	return this.http.post(this.investUrl,data,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError);	
	}

	handleError(err){
		var error = JSON.parse(err._body);
    return error;
 	}	


}