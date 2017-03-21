import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Loans } from './invest';
import { Router } from '@angular/router';

@Injectable ()
export class ScoringFormService {

	constructor (private http:Http, private router:Router) { }

	// set header
	headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});

	options = new RequestOptions({ headers: this.headers });

	private rateUrl = "https://masscredit-api.stagingapps.net/user/rate/rate-other-user";
	
	private token = JSON.parse(localStorage.getItem("access_token"))

	rateUser(data:any): Promise<any>{
	 	return this.http.post(this.rateUrl,data,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError)	
	}

	handleError(err){
		let error = JSON.parse(err._body);
    return error;
	}
}