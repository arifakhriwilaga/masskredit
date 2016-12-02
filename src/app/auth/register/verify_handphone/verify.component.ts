import { Component } 										from '@angular/core';
import { Router }											from '@angular/router';
import { Headers, Http, RequestOptions }					from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl }  from '@angular/forms';
import { ValidationServiceVerify } 							from './validation/validationservice.component'

declare var jQuery:any;


@Component({
	moduleId: module.id,
	selector: 'verify',
	templateUrl: 'verify.component.html'
})

export class VerifyComponent {
	constructor(private router : Router, private http : Http) { }


	// call jquery
	OnInit() {
        jQuery('#verifikasi-modal').modal('show');
    }


	private nomor = {
		phone_number : ''
	};
    // send nomor handphone	
	sendHandphone(nomor)  {
		let headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
		});
    	let options = new RequestOptions({ headers: headers });

    	// header.append()
		
		console.log(nomor);

		if(nomor == null) {
			console.log('Gagal Verify');

		}
		else{
			this.http.post('http://masscredit-backend.stagingapps.net:9000/user/credential/getverificationcode',
			nomor,
			options)
			.map(data => data.json())
			.subscribe((data : any) => {
				var verify = JSON.stringify(nomor.phone_number)
				console.log(data);
				localStorage.setItem("verify_handphone", verify)
				this.router.navigateByUrl("/auth/register/verify-code") // return view verify code for now
			
			});
		}
	}



	private code = {
		nomor_handphone : ''
	};
	// send code verify
	sendVerify(code)  {

		 let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });
		
		console.log(code);
		if(code) {
		this.http.post('http://masscredit-backend.stagingapps.net:9000/user/credential/getverificationcode',code, options)
		.map( data => data.json() )
		.subscribe((data) => {
			// var token 	 = data.json();
			console.log(data);
			localStorage.setItem('access_code', JSON.stringify(data.data.access_token));

			console.log(localStorage.getItem("access_code"));
			this.router.navigateByUrl('/auth/register/step-1');

			
		});

		}
		else{
			console.log('Gagal Verify');
		}
	}


}