import { Component, OnInit } 						  	   from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } 					   from './validationservice.component';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router, ActivatedRoute }        					   from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'confirm',
	templateUrl: 'confirm.component.html',
})

export class ConfirmComponent {
	constructor(private http: Http, private router:Router,private activatedRoute : ActivatedRoute) { }

	

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

		// Get access_token in localstorage
		let access_token = JSON.parse(localStorage.getItem("access_token"));
		
		// objek request Get No Reference
		let data_get_no_reference = {
			access_token : access_token
		}

		// Request for get no reference
		this.http.post('https://masscredit-api.stagingapps.net/user/fund/no-reference',data_get_no_reference,this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					var no_reference= response.data.no_reference;
					// this.data.no_reference = no_reference;
					console.log(code,message);
					// this.router.navigateByUrl('/dashboard/fund');
				},
				(err:any) => {
					var error   = JSON.parse(err._body)
					var message = error.meta.message
						if(message == "unauthorized") {
							alert("Maaf session anda telah habis silahkan login kembali")
							return this.router.navigateByUrl('/dashboard/sign-out')
							
						}	
				}
			);	
	}

	// Header 
  	public headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
		});
	public options = new RequestOptions({ headers: this.headers });

	//  access_token
	access_token = JSON.parse(localStorage.getItem("access_token"));
		

	// objek investasi
	public data = {
		access_token: this.access_token,
		id: null,
	  	verification_code: null,
	  	password: '',	
	}




  	confirmWithdrawal(data) {
		if(jQuery("#confirmForm").valid()) {
		// if(true) {	
		 // API request data confirm
	        this.http.post('https://masscredit-api.stagingapps.net/user/withdrawal/confirm',this.data,this.options)
	           .map(response => response.json())
	           .subscribe(
	                   (response : any) => {
	                           var code        = response.meta.code;
	                           var message     = response.meta.message;
	                           console.log(code,message);
	                           alert("Penarikan dana berhasil")
	                           localStorage.removeItem("id_verification")
	                           localStorage.removeItem("verification_code")
	                           this.router.navigateByUrl('/dashboard/fund/fund-withdrawal');
	                   },
	                   (err:any) => {
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
	                   }
	        );
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
