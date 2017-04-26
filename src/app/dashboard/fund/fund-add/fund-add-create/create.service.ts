import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Data } from './data';
import { Bank } from './bank';
import { User } from './user';
import { BankMassCredit } from './bank-masscredit';
import { NoReference } from './no-reference';


declare var jQuery:any;
@Injectable ()
export class CreateService {
	constructor (private http:Http, private router:Router) { }

	// set headers
  private headers = new Headers({ 
		'Content-Type': 'application/json',
		'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	})
	private options = new RequestOptions({ headers: this.headers })

	private otpUrl = "https://masscredit-api.stagingapps.net/user/addfund/otp";
	getOtp(access_token:any): Promise<any>{
	 return this.http.post(this.otpUrl,access_token,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError)
  }

	private postFundUrl = 'https://masscredit-api.stagingapps.net/user/fund/add';
	postFundAdd(data:any){
		return this.http.post(this.postFundUrl,data,this.options)
			.toPromise()
			.then(response => response.json())
			.catch(this.handleErrorFundAdd)	
  }

	private bankMassCreditUrl = "https://masscredit-api.stagingapps.net/master/bank-masscredit";
	getBankMasscredit(): Promise<BankMassCredit[]>{
	 return this.http.get(this.bankMassCreditUrl,this.options)
		.toPromise()
		.then(response => response.json().data.tipe_bank as BankMassCredit[])
		.catch(this.handleError)
  }

	private noreferenceUrl = 'https://masscredit-api.stagingapps.net/user/fund/no-reference';
  getNoReference(data:any): Promise<Data>{
		return this.http.post(this.noreferenceUrl,data,this.options)
		.toPromise()
		.then(response => response.json().data.no_reference as Data)
		.catch(this.handleError)
  }

	private bankUrl = 'https://masscredit-api.stagingapps.net/master/bank';
  getBank(): Promise<Bank[]>{
	return this.http.get(this.bankUrl,this.options)
		.toPromise()
		.then(response => response.json().data.tipe_bank as Bank[])
		.catch(this.handleError)
  }

	private profileUrl = 'https://masscredit-api.stagingapps.net/user/credential/profile';
  getProfile(data:any): Promise<Data>{ 
	return this.http.post(this.profileUrl,data,this.options)
		.toPromise()
		.then(response => response.json().data.profile.name as Data)
		.catch(this.handleError)	
  }

	handleError(err){
		var error   = JSON.parse(err._body)
    var code = error.meta.code
    var message = error.meta.message
  	if(message == "unauthorized") {
			alert("Maaf session anda telah habis silahkan login kembali")
			return this.router.navigateByUrl('/dashboard/sign-out')					
		}
	}

	handleErrorFundAdd(err){
		var error = JSON.parse(err._body);
    return error;
	}
}
