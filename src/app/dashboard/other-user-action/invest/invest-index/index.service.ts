import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Invest } from './invest';
import { Router } from '@angular/router';

@Injectable ()
export class IndexService {

	constructor (private http:Http, private router:Router) { }

	// set header
	headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});

	options = new RequestOptions({ headers: this.headers });

	private listInvestUrl = "https://masscredit-api.stagingapps.net/user/loan/getlist";
	
	private token = JSON.parse(localStorage.getItem("access_token"))

	getListInvests(data:any): Promise<Invest[]>{
	 	return this.http.post(this.listInvestUrl,data,this.options)
		.toPromise()
		.then(response => response.json().data.loans as Invest[])
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

	toCreateInvest(){
		this.router.navigateByUrl("/dashboard/other-user-action/invest/create");
	}
}