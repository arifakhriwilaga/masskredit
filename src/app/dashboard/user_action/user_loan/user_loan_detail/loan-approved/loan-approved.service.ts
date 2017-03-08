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

	detailInvestorUrl = 'https://masscredit-api.stagingapps.net/user/investor/detail';
	getDetailInvestor(data_investor:any): Promise<dataDetailInvestor>{
	 	return this.http.post(this.detailInvestorUrl,data_investor,this.options)
		.toPromise()
		.then(response => response.json().data as dataDetailInvestor)
		// .then(response => response.json().data as dataDetailInvestor)
		.catch(this.handleError)	
	}

	mapData(response){
		var data = response.json()
	}

	handleError(err){
		var error   = JSON.parse(err._body)
    var code = error.meta.code
    var message = error.meta.message
    console.log(error);
      // if(message == "Password salah!") {
      //   alert("Password salah!")              
      // }if(message == "Verifikasi salah.") {
      //   alert("Verifikasi salah.")              
      // } 
	}


}