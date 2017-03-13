import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Data } from './data';

@Injectable ()
export class ConfirmService {

	constructor (private http:Http, private router:Router) { }

	// set header
	headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});

	options = new RequestOptions({ headers: this.headers });

	private confirmFundUrl = 'https://masscredit-api.stagingapps.net/user/fund/confirm';
	
	postConfirm(data:any): Promise<null>{
	 	return this.http.post(this.confirmFundUrl,data,this.options)
		.toPromise()
		.then(response => response.json().meta.message)
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

	toCreateAdd(){
		this.router.navigateByUrl("/dashboard/fund/fund-add/create");
	}
}