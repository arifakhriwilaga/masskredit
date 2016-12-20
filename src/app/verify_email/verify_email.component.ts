import { Component } 										from '@angular/core';
import { Router, ActivatedRoute }											from '@angular/router';
import { Headers, Http, RequestOptions }					from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl }  from '@angular/forms';
import { ValidationServiceVerify } 							from './validation/validationservice.component'
// import { RegisterService }									from './../register.service';
import 'rxjs/add/operator/catch';

declare var jQuery:any;


@Component({
	//moduleId: module.id,
	selector   : 'verifycode',
	templateUrl: 'verify_email.component.html',
	styleUrls  : ['verify_email.css'],
})

export class VerifyEmailComponent {
	verifyCodeForm: FormGroup;
	constructor(
		private router			: Router, 
		private http 			: Http,
		private route: ActivatedRoute,
		// private registerService	: RegisterService, 
	) {	}

	ngAfterViewInit(){
	// debugger;
		this.route.params.subscribe( params => { 
			let access_code = params['access_code']

		let data_verify = {
			// 'access_token' : JSON.parse(localStorage.getItem("access_token")),
			'access_code'	   : access_code 
		}
		
		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

		console.log("Sedang mengirim data....")
	    let options = new RequestOptions({ headers: headers });
		this.http.post('http://masscredit-api.stagingapps.net/user/credential/verify-email',data_verify,options)
				.map(response => response.json())
				.subscribe((response : any) => {
					var code 	= response.meta.code;							
					var message = response.meta.message;							
					var access_token = response.data.access_token;

					console.log(access_token);
					if(code == "200") {
						localStorage.setItem('access_token', JSON.stringify(access_token));
						alert("Email berhasil terverifikasi Berhasil")
						return this.router.navigateByUrl('/dashboard');
					}else{
						alert("Register gagal")
						return this.router.navigateByUrl('/home')
					}
				});


		})
		document.getElementById("hover_verify").style.width = "100%";
	}	

}