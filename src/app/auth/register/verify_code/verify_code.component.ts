import { Component } 										from '@angular/core';
import { Router }											from '@angular/router';
import { Headers, Http, RequestOptions }					from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl }  from '@angular/forms';
import { ValidationServiceVerify } 							from './validation/validationservice.component'

declare var jQuery:any;


@Component({
	//moduleId: module.id,
	selector: 'verifycode',
	templateUrl: 'verify_code.component.html'
})

export class VerifyCodeComponent {
	constructor(private router : Router, private http : Http) { }

	private code = {
		verification_code : '',

	};
	// send code verify
	sendVerify(code)  {
		let headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
		});
		
    	let options = new RequestOptions({ headers: headers });

		console.log(code);
		if(code) {
		this.http.post('http://masscredit-api.stagingapps.net/user/credential/verifycode',code, options)
		.map( data => data.json() )
		.subscribe((data) => {
			console.log(data)
			localStorage.removeItem("verify_handphone");
			localStorage.setItem('access_code', data.data.access_token);
			// console.log(localStorage.getItem("access_code"));
			this.router.navigateByUrl('/auth/register/step-1');


			
		});

		}
		else{
			console.log('Gagal Verify');
		}
	}

	cancelVerify(){
		localStorage.removeItem("verify_handphone");
		this.router.navigateByUrl("");
	}

}