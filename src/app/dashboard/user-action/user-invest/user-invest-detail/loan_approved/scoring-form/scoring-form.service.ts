import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { dataDetailInvestor } from './loan-approved';

@Injectable ()
export class ScoringFormService {
	
	constructor (private http:Http) { }
		// set header
	headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});

	options = new RequestOptions({ headers: this.headers });

	scoringUrl = 'https://masscredit-api.stagingapps.net/user/rate/rate-as-investor';
	rateUser(data:any): Promise<any>{
	 	return this.http.post(this.scoringUrl,data,this.options)
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError)
	}

	handleError(err){
		let error = JSON.parse(err._body)
    return error
	}
}