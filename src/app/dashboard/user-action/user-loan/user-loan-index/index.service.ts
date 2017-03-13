import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Loans } from './invest';
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

	private listInvestUrl = "https://masscredit-api.stagingapps.net/user/myloan/getlist";
	
	private token = JSON.parse(localStorage.getItem("access_token"))

	getListInvests(data:any): Promise<Loans[]>{
	 	return this.http.post(this.listInvestUrl,data,this.options)
		.toPromise()
		.then(response => response.json().data.loans as Loans[])
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

	detailAddLoan(loanId:number){
		this.router.navigateByUrl('/dashboard/user-action/user-loan/detail/'+loanId)
	}

	detailGiveLoan(loanId:number,investorId:number){
		this.router.navigateByUrl('/dashboard/user-action/user-loan/detail/'+loanId+'/loan-approved/'+investorId)
	}
}