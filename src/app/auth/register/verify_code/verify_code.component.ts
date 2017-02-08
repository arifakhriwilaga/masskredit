import { Component } 										from '@angular/core';
import { Router }											from '@angular/router';
import { Headers, Http, RequestOptions }					from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl }  from '@angular/forms';
import { ValidationServiceVerify } 							from './validation/validationservice.component'
import { RegisterService }									from './../register.service';
import 'rxjs/add/operator/catch';

declare var jQuery:any;


@Component({
	//moduleId: module.id,
	selector: 'verifycode',
	templateUrl: 'verify_code.component.html'
})

export class VerifyCodeComponent {
	verifyCodeForm: FormGroup;
	constructor(
		private router			: Router, 
		private http 			: Http,
		private registerService	: RegisterService, 
	) {	}

	ngOnInit() {
		jQuery(function($){
			jQuery('#verification_code').mask('00000');
		});
		jQuery( "#verifyCodeForm" ).validate({
		  rules: {
		    verification_code: {
		      required: true
		    }
		  }
		});
        
		// jQuery('#verifikasi-modal').modal('show');
    }

	private code = {
		verification_code : '',

	};
	// send code verify
	sendVerify(code:any)  {
		if(jQuery("#verifyCodeForm").valid()) {
			jQuery("#load").button('loading');
			let headers = new Headers({ 
				'Content-Type': 'application/json',
				'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
			})
		
	    	let options = new RequestOptions({ headers: headers });

			// console.log(code);
			return this.http.post('https://masscredit-api.stagingapps.net/user/credential/verifycode',code, options)
			.map( (data) => data.json() )
			.subscribe(
				(data) => {
				// console.log("Verify Success..");
				// alert("Verify Success..!")
				localStorage.setItem('access_code', data.data.access_code);
				this.router.navigateByUrl('/auth/register/step-1');
				},
				(err:any) => {
					var error   = JSON.parse(err._body)
					var message = error.meta.message
						if(message == "Verifikasi salah.") {
							alert("Maaf nomor verifikasi salah!")
							jQuery("#load").button('reset');

						}
				}
			);
		}

		else{
			alert("Code Verifikasi anda salah");
		}
	}
	private nomor = {
		phone_number : JSON.stringify(localStorage.getItem("verify_handphone"))
	};
	private register = this.registerService.dataRegister();
	// private getNomor =;
	resendHandphone()  {
		jQuery('#load-resend').button('loading');

		let headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
		});
  	let options = new RequestOptions({ headers: headers });

		this.http.post('http://masscredit-api.stagingapps.net/user/credential/getverificationcode',
		this.nomor,
		options)
		.map(data => data.json())
		.subscribe(
			(data : any) => {
				jQuery('#load-resend').button('reset');
				var verify 	= JSON.stringify(this.nomor)
				var code 	= data.data.verification_code;
				// console.log("Verify code :",code)
				alert(code);
			},
		);
	}

}