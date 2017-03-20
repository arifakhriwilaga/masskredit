import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable ()
export class DetailService {
	constructor (private http:Http) { }
	
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

	detailInvestUrl = 'https://masscredit-api.stagingapps.net/user/loan/detail';
	
	getDetail(data:any): Promise<any>{
		return this.http.post(this.detailInvestUrl,data,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}
	
	handleError(err){
		var error = JSON.parse(err._body);
    return error;
 	}

 	calculationUrl = 'https://masscredit-api.stagingapps.net/user/loan/simulate'
 	calculationLoan(data:any): Promise<any>{
		return this.http.post(this.calculationUrl,data,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}

}