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

	ngAfterViewInit() {
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
			let headers = new Headers({ 
				'Content-Type': 'application/json',
				'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
			})
		
	    	let options = new RequestOptions({ headers: headers });

			console.log(code);
			return this.http.post('http://masscredit-api.stagingapps.net/user/credential/verifycode',code, options)
			.map( (data) => data.json() )
			.subscribe((data) => {
				console.log("Verify Success..");
				// localStorage.removeItem("verify_handphone");
				localStorage.setItem('access_code', data.data.access_code);
				// console.log(localStorage.getItem("access_code"));
				this.router.navigateByUrl('/auth/register/step-1');
			});
		}

		else{
			alert("Code Verifikasi anda salah");
			console.log('Gagal Verify');
		}
	}
	private nomor = {
		phone_number : JSON.stringify(localStorage.getItem("verify_handphone"))
	};
	private register = this.registerService.dataRegister();
	// private getNomor =;
	resendHandphone()  {
			let headers = new Headers({ 
				'Content-Type': 'application/json',
				'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
			});
	    	let options = new RequestOptions({ headers: headers });
			
			console.log("Sedang mengirim data....");


				this.http.post('http://masscredit-api.stagingapps.net/user/credential/getverificationcode',
				this.nomor,
				options)
				.map(data => data.json())
				.subscribe((data : any) => {
					var verify 	= JSON.stringify(this.nomor)
					var code 	= data.data.verification_code;
					// var header 	= data;
					// console.log(header.meta);
					console.log("Verify code :",code)
					// // alert(code);
					// // console.log(data);
					// localStorage.setItem("verify_handphone", verify)
					// this.router.navigateByUrl("/auth/register/verify-code") // return view verify code for now
				
				});
			
			
		
			console.log("This valid");
			// code...

	}

}