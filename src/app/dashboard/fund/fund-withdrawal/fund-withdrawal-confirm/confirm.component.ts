import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'confirm',
	templateUrl: 'confirm.component.html',
})

export class ConfirmComponent {
	constructor(private http: Http, private router:Router,private activatedRoute : ActivatedRoute) { }

	// set header 
	public headers = new Headers({ 
		'Content-Type': 'application/json',
		'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	});
	public options = new RequestOptions({ headers: this.headers });

	// access_token
	access_token = JSON.parse(localStorage.getItem("access_token"));		

	// object
	public data = {
		access_token: this.access_token,
		id: null,
  	verification_code: null,
  	password: '',	
	}

	// Get access_token in localstorage
	// private access_token = JSON.parse(localStorage.getItem("access_token"));
	
	// objek request Get No Reference
	private data_get_no_reference = {
		access_token : this.access_token
	}

	// declare object url bank
	private noreferenceUrl = 'https://masscredit-api.stagingapps.net/user/fund/no-reference';
	private confirmwithdrawalUrl = 'https://masscredit-api.stagingapps.net/user/withdrawal/confirm';

	ngOnInit() {
		let id_verification = localStorage.getItem("id_verification");
		let verification_code = localStorage.getItem("verification_code");
		this.data.id = id_verification;
		this.data.verification_code = verification_code;

    jQuery( "#confirmForm" ).validate({
	  rules: {
	    password: {
	    	required: true
	    }
	  }
		});

		// Request for get no reference
		this.http.post(this.noreferenceUrl,this.data_get_no_reference,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				this.data.verification_code = response.data.no_reference;
			},(err:any) => {
				var error   = JSON.parse(err._body)
				var message = error.meta.message
					if(message == "unauthorized") {
						alert("Maaf session anda telah habis silahkan login kembali")
						return this.router.navigateByUrl('/dashboard/sign-out')
						
					}	
			});	
	}

	confirmWithdrawal(data) {
		if(jQuery("#confirmForm").valid()) {
		 // API request data confirm
    this.http.post(this.confirmwithdrawalUrl,this.data,this.options)
       .map(response => response.json())
       .subscribe((response : any) => {
          alert("Penarikan dana berhasil")
          localStorage.removeItem("id_verification")
          localStorage.removeItem("verification_code")
          this.router.navigateByUrl('/dashboard/fund/fund-withdrawal');
       },(err:any) => {
         	var error   = JSON.parse(err._body)
         	var message = error.meta.message
         	var code = error.meta.code
         	if(message == "unauthorized") {
           	alert("Maaf session anda telah habis silahkan login kembali")
           	return this.router.navigateByUrl('/dashboard/sign-out')     
         	}
         	if(code == "400") {
            alert("Transaksi tidak ditemukan")
         	}       
       });
		}
		else{
			alert("Data tidak valid");
		}		
  }
  cancelWithdrawal(){
  localStorage.removeItem("id_verification")
	localStorage.removeItem("verification_code")
	return this.router.navigateByUrl('/dashboard/fund/fund-withdrawal')
  }
}
