import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable }	from 'rxjs/Observable';
import { FormGroup}	from '@angular/forms';
import { Router } from '@angular/router';
// import { FormComponent } from './form';

import { DataConfirm } from './part/form-confirm/form-confirm';

import { Data } from './data';

@Injectable ()
export class CreateService {
	constructor (
		private http:Http, 
		private router:Router,
	) { }

	// set headers
  private headers = new Headers({ 
		'Content-Type': 'application/json',
		'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	})
	private options = new RequestOptions({ headers: this.headers })
	
	// declare object url bank
	private withdrawalUrl = 'https://masscredit-api.stagingapps.net/user/withdrawal/add';
	
	// request post fund
  postFundWithdrawal(data:any): Promise<any>{
		return this.http.post(this.withdrawalUrl,data,this.options)
			.toPromise()
			.then(response => response.json().data)
			.catch(this.handleError)	
  }

  private noreferenceUrl = 'https://masscredit-api.stagingapps.net/user/fund/no-reference';
  getNoReference(data:any): Promise<Data>{
		return this.http.post(this.noreferenceUrl,data,this.options)
		.toPromise()
		.then(response => response.json().data.no_reference as Data)
		.catch(this.handleError)
  }

	private profileUrl = 'https://masscredit-api.stagingapps.net/user/credential/profile';
  getProfile(data:any): Promise<Data>{ 
	return this.http.post(this.profileUrl,data,this.options)
		.toPromise()
		.then(response => response.json().data as Data)
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
}
