import { Component } 										from '@angular/core';
import { Router }											from '@angular/router';
import { Headers, Http, RequestOptions }					from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl }  from '@angular/forms';


declare var jQuery:any;


@Component({
	//moduleId: module.id,
	selector: 'verify',
	templateUrl: 'verify.component.html',

})

export class VerifyComponent {
	verifyForm: FormGroup;
	constructor(private router : Router, private http : Http, private formBuilder: FormBuilder) { 

		this.verifyForm = this.formBuilder.group({
			'phone_number' : [null, Validators.compose([Validators.required,
				Validators.minLength(5),
				Validators.maxLength(10),
				// Validators.pattern()
			])]
		})

	}	

	// call jquery
	OnInit() {
        jQuery('#verifikasi-modal').modal('show');
    }


	private nomor = {
		phone_number : ''
	};
    // send nomor handphone	
	sendHandphone(nomor:any)  {


		let headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
		});
    	let options = new RequestOptions({ headers: headers });
		
		console.log("Sedang mengirim data....");

		if(nomor == null) {
			console.log('Gagal Verify');

		}
		else{
			this.http.post('http://masscredit-api.stagingapps.net/user/credential/getverificationcode',
			nomor,
			options)
			.map(data => data.json())
			.subscribe((data : any) => {
				var verify = JSON.stringify(nomor.phone_number)
				var code = data.data.verification_code;
				console.log("Verify code :",code)
				alert(code);
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
		// if(code) {
		// 	let regexpHandphone = '/[0-9]+/g';
		// 	let handphone,text;
		// 	var inputValue = document.getElementById("handphone");
		// 		if(handphone == regexpHandphone) {
		// 			text = "Valid";
		// 		} else {
		// 			text = "Input not valid"
		// 		}
		// 	return document.getElementById("message").innerHTML = text;
			// let headers = new Headers({ 'Content-Type': 'application/json' });
	  //   	let options = new RequestOptions({ headers: headers });
			
			// console.log(code);
			// if(code) {
			// this.http.post('http://masscredit-backend.stagingapps.net:9000/user/credential/getverificationcode',code, options)
			// .map( data => data.json() )
			// .subscribe((data) => {
			// 	console.log(data);
			// 	localStorage.setItem('access_code', JSON.stringify(data.data.access_token));

			// 	console.log(localStorage.getItem("access_code"));
			// 	this.router.navigateByUrl('/auth/register/step-1');

				
			// });

			// }
			// else{
			// 	console.log('Gagal Verify');
			// }
		}
	}


