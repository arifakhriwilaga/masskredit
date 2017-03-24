import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { dataDetailInvestor } from './loan-approved';

@Injectable ()
export class LoanApprovedService {
	
	constructor (private http:Http) { }
		// set header
	headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});

	options = new RequestOptions({ headers: this.headers });

	private detailBorrowerUrl = 'https://masscredit-api.stagingapps.net/user/borrower/detail';
	getDetailBorrower(data:any): Promise<any>{
	 	return this.http.post(this.detailBorrowerUrl,data,this.options)
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError)
	}

	private listPaymentUrl = 'https://masscredit-api.stagingapps.net/user/payment-history/get-list';
	getListPayment(data:any){
		return this.http.post(this.listPaymentUrl,data,this.options)
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError)
	}

	handleError(err){
		let error = JSON.parse(err._body)
    return error
	}


}