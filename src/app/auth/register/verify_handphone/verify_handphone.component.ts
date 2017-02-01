import { Component } from '@angular/core';
import { Router }	from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// declare object jQuery for usage function jQuery
declare var jQuery:any;

@Component({
	selector: 'verify-handphone',
	templateUrl: 'verify_handphone.component.html',

})

export class VerifyHandphoneComponent {
	verifyForm: FormGroup;
	constructor(private router : Router, private http : Http, private formBuilder: FormBuilder) { 

		this.verifyForm = this.formBuilder.group({
			'phone_number' : [null, Validators.compose([Validators.required])]
		})
	}	

	// call jquery
	ngAfterViewInit() {
		jQuery(function($){
			jQuery('#phone').mask('000-000-000000');
		});
		jQuery( "#verifyForm" ).validate({
		  rules: {
		    phone: {
		      required: true
		    }
		  }
		});
  }

	private nomor = {
		phone_number : ''
	};
    // send nomor handphone	
	sendHandphone(nomor:any)  {
		if(jQuery("#verifyForm").valid()) {

			let headers = new Headers({ 
				'Content-Type': 'application/json',
				'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
			});
    	let options = new RequestOptions({ headers: headers });
	
			if(nomor == null) {
				console.log('Gagal Verify');

			}else{
				this.http.post('http://masscredit-api.stagingapps.net/user/credential/getverificationcode',
				nomor,
				options)
				.map(data => data.json())
				.subscribe(
					(data : any) => {
						var verify 	= JSON.stringify(nomor.phone_number)
						var code 	= data.data.verification_code;
						var header 	= data;
						// console.log(header.meta);
						console.log("Verify code :",code)
						alert(code);
						// console.log(data);
						localStorage.setItem("verify_handphone", verify)
						this.router.navigateByUrl("/auth/register/verify-code") // return view verify code for now		
					},
					(err:any) => {
			            var error   = JSON.parse(err._body)
			            var message = error.meta.message
			              if(message == "No Handphone sudah terdaftar") {
			                alert("Maaf no handphone telah terdaftar")
			              }  
			        }
				);
			}
		}else{
			console.log("Data doesn't valid");
		}
	}

}