import { Component, OnInit }								from '@angular/core';
import { CreateService }									from './create.service';
import { FormGroup, FormBuilder, Validators, FormControl } 	from '@angular/forms';
import { ValidationServiceInvestasi } 					   	from './validationservice.component';
import { Headers, Http, RequestOptions }	   				from '@angular/http';
import { Router }        					   				from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'fund-withdrawal',
	templateUrl: 'fund_withdrawal.component.html'
})

export class FundWithdrawalComponent {
	constructor(private http : Http, private router : Router) { }

	ngOnInit() {
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy-mm-dd',
	      // startDate : '2015-01-01',
	      // minDate	: '01/01/2015'

	    });
	    jQuery( "#withdrawalForm" ).validate({
		  rules: {
		    nama_lengkap: {
		      required: true
		    },
		    bank_name: {
		      required: true,
		      // email	  : true
		    },
		    no_rekening: {
		      required: true
		    },
		    amount: {
		      required: true
		    },
		  }
		});

		// Mask
		jQuery(function($){
			jQuery('#amount').mask('000000000000');
			jQuery('#no_rekening').mask('000000000000000');

			
		});

		// Get date
		let date = jQuery("#date").datepicker("setDate", new Date());
		let value_date = jQuery("#date").val();
		this.data.date = value_date;
	}

	// Get access_token in localstorage
	access_token = JSON.parse(localStorage.getItem("access_token"));

	public banks = [];
	public data = {
		access_token: this.access_token,
	  	date		: '',
	  	no_reference: '',
	  	nama_lengkap: '',
	  	bank_name	: 0,
		no_rekening	: '',
		amount		: '',		
	}

	// Headers
  	public headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
		});
	public options = new RequestOptions({ headers: this.headers });


	getBankName(id){
		this.data.bank_name = id;
		console.log(this.data)
	}


  	attractFund(data) {
		if(jQuery("#withdrawalForm").valid()) {	
		// if(true) {	
	  		// this.investasi = investasi;
	  		console.log(this.data)
	  		
	  		// Headers
		  	let headers = new Headers({ 
					'Content-Type': 'application/json',
					'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
				});
	    	let options = new RequestOptions({ headers: headers });
				
			// API withdrawal Fund
			this.http.post('http://masscredit-api.stagingapps.net/user/fund/withdraw',this.data,this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					console.log(code,message);
					alert("Penarikan dana berhasil")
					this.router.navigateByUrl('/dashboard/fund');
				},
				(err:any) => {
					var error   = JSON.parse(err._body)
					var message = error.meta.message
					var code = error.meta.code
						if(message == "unauthorized") {
							alert("Maaf session anda telah habis silahkan login kembali")
							return this.router.navigateByUrl('/dashboard/sign-out')
							
						}
						if(code == 400) {
							alert("Maaf saldo anda tidak mencukupi")
							return this.router.navigateByUrl('/dashboard/fund')
							
						}	
				}
			);				
		}
		else{
			alert("Data tidak valid")
		}
  		
	  }

}
