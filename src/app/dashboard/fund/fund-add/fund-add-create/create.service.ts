import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable }	from 'rxjs/Observable';
import { FormGroup}	from '@angular/forms';
import { Router } from '@angular/router';

@Injectable ()
export class CreateService {
	constructor (private http:Http, private router:Router) { }

	// set headers
  private headers = new Headers({ 
		'Content-Type': 'application/json',
		'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	})
	private options = new RequestOptions({ headers: this.headers })

	// // get access_token in localstorage
	// access_token = JSON.parse(localStorage.getItem("access_token"));
	
	// // objek request Get No Reference
	// private data_access_token = {
	// 	access_token : this.access_token
	// }

	// object request Add Fund
	// private data = {
	// 	access_token : this.access_token,
 //  	date : null,
 //  	no_reference : null,
 //  	nama_lengkap : null,
 //  	bank_name : 0,
	// 	no_rekening	: null,
	// 	amount : null,
	// 	other_bank : null
	// }

	// declare object url bank
	private postFundUrl = 'https://masscredit-api.stagingapps.net/user/fund/add';
	
	// request post fund
  postFundAdd(data:any){
		// console.log(data)
		this.http.post(this.postFundUrl,data,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			var code 		= response.meta.code;
			var message 	= response.meta.message;
			// console.log(code,message);
			alert("Penambahan dana berhasil, harap konfirmasi dana");
			this.router.navigateByUrl('/dashboard/fund');
		},(err:any) => {
			var error   = JSON.parse(err._body);
			var message = error.meta.message;
			if(message == "unauthorized") {
				alert("Maaf session anda telah habis silahkan login kembali");
				this.router.navigateByUrl('/dashboard/sign-out');
			}	
		});	
  }

	

}
