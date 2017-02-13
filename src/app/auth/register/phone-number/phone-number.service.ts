import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router }	from '@angular/router';

declare var jQuery:any

@Injectable ()
export class PhoneNumberService {
	constructor(private router : Router, private http: Http) { }

	// declare object url get verify code
	private phonenumberUrl = 'https://masscredit-api.stagingapps.net/user/credential/getverificationcode';
	
	// declare headers
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

  private message = {};

	postPhoneNumber(phone_number:any) {
		this.http.post(this.phonenumberUrl,phone_number,this.options)
			.map(data => data.json())
			.subscribe((data : any) => {
				localStorage.setItem("phone-number", JSON.stringify(phone_number.phone_number))
				let code 	= data.data.verification_code;
				alert(code);
				this.router.navigateByUrl("/auth/register/verify-code") // return view verify code for now		
			},(err:any) => {
        let error   = JSON.parse(err._body)
        let message_error = error.meta.message
				let $this = jQuery("#load");
        if(message_error == "No Handphone sudah terdaftar") {
          alert("Maaf no handphone telah terdaftar")
			    $this.button('reset');
  			}  
	  	});    
	}
}