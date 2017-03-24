import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Fund } from './fund';

@Injectable ()
export class IndexService {

	constructor (private http:Http, private router:Router) { }

	// set header
	headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});

	options = new RequestOptions({ headers: this.headers });

	private listFundUrl = "https://masscredit-api.stagingapps.net/user/fund/get-list";
	
	getFunds(data:any): Promise<any>{
	 	return this.http.post(this.listFundUrl,data,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError)	
	}

	handleError(err){
		let error = JSON.parse(err._body);
    return error;
	}

	toCreateAdd(){
		this.router.navigateByUrl("/dashboard/fund/fund-add/create");
	}
}