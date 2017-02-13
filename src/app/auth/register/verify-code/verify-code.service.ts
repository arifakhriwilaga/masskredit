import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router }	from '@angular/router';

declare var jQuery:any

@Injectable ()
export class VerifyCodeService {
	constructor(private router : Router, private http: Http) { }
	// declare object url for step register if verify code success
	private verifycodeUrl = 'https://masscredit-api.stagingapps.net/user/credential/verifycode';
	private resendcodeUrl = 'http://masscredit-api.stagingapps.net/user/credential/getverificationcode';
	
	// declare headers
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

	postVerifyCode(verify_code:any) {
		this.http.post(this.verifycodeUrl,verify_code, this.options)
			.map( (data) => data.json() )
			.subscribe((data) => {
				localStorage.setItem('access-code',JSON.stringify(data.data.access_code));
				this.router.navigateByUrl('/auth/register/step-register');
			},(err:any) => {
				var error   = JSON.parse(err._body)
				var message = error.meta.message
				let $this = jQuery('#load'); 
				if(message == "Verifikasi salah.") {
					alert("Maaf nomor verifikasi salah!")
					$this.button('reset');
				}
			});
	}

	postResendCode(nomor:any){
		let $this = jQuery('#load-resend'); 
		this.http.post(this.resendcodeUrl,nomor,this.options)
			.map(data => data.json())
			.subscribe((data : any) => {
				$this.button('reset');
				var code 	= data.data.verification_code;
				alert(code);
		});
	}
}