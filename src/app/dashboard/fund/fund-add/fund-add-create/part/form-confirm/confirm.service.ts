import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable }	from 'rxjs/Observable';
import { FormGroup}	from '@angular/forms';
import { Router } from '@angular/router';

import { DataConfirm } from './part/form-confirm/form-confirm';

import { Data } from './data';

@Injectable ()
export class ConfirmService {
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
	
	private confirmWithdrawalUrl = 'https://masscredit-api.stagingapps.net/user/withdrawal/confirm';
	
	// request post fund
  postConfirm(data:any): Promise<any>{
		return this.http.post(this.confirmWithdrawalUrl,data,this.options)
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError)	
  }

  private bodyError:any;

	handleError(err){
		let error = JSON.parse(err._body);
    return error 
	}
}
