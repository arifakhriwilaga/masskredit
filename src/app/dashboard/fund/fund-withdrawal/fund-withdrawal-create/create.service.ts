import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable }	from 'rxjs/Observable';
import { FormGroup}	from '@angular/forms';
import { Router } from '@angular/router';
// import { FormComponent } from './form';
import { DataConfirm } from './form-confirm/form-confirm';

@Injectable ()
export class CreateService {
	constructor (private http:Http, private router:Router, private dataConfirm:DataConfirm) { }

	// set headers
  private headers = new Headers({ 
		'Content-Type': 'application/json',
		'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	})
	private options = new RequestOptions({ headers: this.headers })
	
	// declare object url bank
	private postFundUrl = 'https://masscredit-api.stagingapps.net/user/withdrawal/add';
	
	// request post fund
  postFundWithdrawal(data:any){
		this.http.post(this.postFundUrl,data,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			var code = response.meta.code;
			var message = response.meta.message;
			this.dataConfirm.id = response.data.id;
			this.dataConfirm.verification_code = response.data.verification_code;
			// this.formcomponent.formConfirm = 1;
			// console.log(response);
			// alert("Pnarikan dana berhasil, menunggu konfirmasi dana");
			// this.router.navigateByUrl('/dashboard/fund');
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
