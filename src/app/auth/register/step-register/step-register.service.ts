import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router }	from '@angular/router';

declare var jQuery:any

@Injectable ()
export class StepRegisterService {
	constructor(private router : Router, private http: Http) { }
	
	// declare object url get verify code
	private stepregisterUrl = 'https://masscredit-api.stagingapps.net/user/credential/register';
	
	// declare headers
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

  private message = {};

	postStepRegister(register:any) {
		// console.log(register)
		this.http.post(this.stepregisterUrl, register, this.options)
			.map(response => response.json())
			.subscribe((response:any) => { 
				let code = response.meta.code;								
				if(code == "200") {
					localStorage.removeItem("access-code");
					localStorage.removeItem("verify-handphone");
					this.showNotif();
					// return this.router.navigateByUrl('/auth/register/finish');
				}else{
					alert("Register gagal")
					return this.router.navigateByUrl('/auth/register/step-1')
				}
			},(err:any) => {
				let error   = JSON.parse(err._body);
				let message = error.meta.message;
				let $this = jQuery("#load");
				if(message == "Email sudah terdaftar") {
					alert("Maaf Email sudah terdaftar")
					$this.button('reset');
				
				}if(message == "Password dan Confirm Password tidak sama") {
					alert("Password dan Confirm Password tidak sama")
					$this.button('reset');

				}if(message == "No Handphone sudah terdaftar") {
					alert("No Handphone sudah terdaftar")
					$this.button('reset');
				
				}else{
					console.log(message)
				}
			});   
	}

	showNotif() {
		jQuery('#myModal').modal({backdrop: 'static', keyboard: false});
	}
}

