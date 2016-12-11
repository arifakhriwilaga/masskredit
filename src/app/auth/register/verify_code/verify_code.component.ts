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
	constructor(private router : Router, private http : Http, private formBuilder: FormBuilder,
		private registerService: RegisterService, 
	) {
		this.verifyCodeForm = this.formBuilder.group({
			'verification_code' : [null, Validators.required]
		})
	}

	private code = {
		verification_code : '',

	};
	// send code verify
	sendVerify(code:any)  {
		
		if(code == null) {
			alert("Code Verifikasi anda salah");
			console.log('Gagal Verify');
		}

		else{
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
				localStorage.removeItem("verify_handphone");
				localStorage.setItem('access_code', data.data.access_code);
				// console.log(localStorage.getItem("access_code"));
				this.router.navigateByUrl('/auth/register/step-1');
			});
		}
	}

	// HandleError
	// private handleError(error : any){
	// 	let errMsg: string;
	// 	if(error instanceof any) {
			 
	// 	}
	// }

	private register = this.registerService.dataRegister();
	cancelVerify(){
	



		console.log("Verify dibatalkan")
		localStorage.removeItem("verify_handphone");
		this.router.navigateByUrl("");
	}

}