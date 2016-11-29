	import { Component } 				from '@angular/core';
import { Router }					from '@angular/router';
import { Headers, Http }		    from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl }  from '@angular/forms';
import { ValidationServiceVerify } from './validation/validationservice.component'

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
		nomor_handphone : ''
	};
    // send nomor handphone	
	sendHandphone(nomor)  {
		console.log(nomor);

		if(nomor == null) {
			console.log('Gagal Verify');

		}
		else{
			this.http.post('https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/getverificationcode',nomor)
			.subscribe((data : any) => {
				this.OnInit();
			
			});
		}
	}

	private code = {
		nomor_handphone : ''
	};
	// send code verify
	sendVerify(code)  {
		console.log(code);
		if(code) {
		this.http.post('https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/verifycode',code)
		.map( data => data.json() )
		.subscribe((data) => {
			// var token 	 = data.json();
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