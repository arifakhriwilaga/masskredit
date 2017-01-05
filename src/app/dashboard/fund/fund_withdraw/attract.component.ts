import { Component, OnInit }								from '@angular/core';
import { CreateService }									from './create.service';
import { FormGroup, FormBuilder, Validators, FormControl } 	from '@angular/forms';
import { ValidationServiceInvestasi } 					   	from './validationservice.component';
import { Headers, Http, RequestOptions }	   				from '@angular/http';
import { Router }        					   				from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'attract',
	templateUrl: 'attract.component.html'
})

export class AttractComponent {
	constructor(private http : Http, private router : Router) { }

	ngOnInit() {
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy/mm/dd',
	      // startDate : '2015-01-01',
	      // minDate	: '01/01/2015'

	    });
	    jQuery( "#investasiForm" ).validate({
		  rules: {
		    invest_name: {
		      required: true
		    },
		    type: {
		      required: true,
		      // email	  : true
		    },
		    images1: {
		      required: true
		    },
		    masa_berlaku: {
		      required: true
		    },
		    amount: {
		      required: true
		    },
		    tenor: {
		      required: true
		    },
		    collateral: {
		      required: true
		    },
		    description: {
		      required: true
		    },
		  }
		});

		// Mask
		jQuery(function($){
			jQuery('#amount').mask('000000000000');
			jQuery('#no_rekening').mask('000000000000000');

			
		});
	}


	public data = {
		access_token: '',
	  	date		: '',
	  	no_reference: '',
	  	nama_lengkap: '',
	  	bank_name	: 0,
		no_rekening	: '',
		amount		: '',		
	}





  	attractFund(data) {
		// if(jQuery("#investasiForm").valid()) {	
		if(true) {	
	  		// this.investasi = investasi;
	  		this.data.date = jQuery("#date").datepicker("getDate");
	  		console.log(this.data)
	  		
	  		// Headers
		  	let headers = new Headers({ 
					'Content-Type': 'application/json',
					'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
				});
	    	let options = new RequestOptions({ headers: headers });
				
			// API Create Fund
			// this.http.post('/user/transaction/fund/add',this.data,options)
			// .map(response => response.json())
			// .subscribe(
			// 	(response : any) => {
			// 		var code 		= response.meta.code;
			// 		var message 	= response.meta.message;
			// 		console.log(code,message);
			// 		this.router.navigateByUrl('/dashboard/fund');
			// 	},
			// 	(err:any) => {
			// 		var error   = JSON.parse(err._body)
			// 		var message = error.meta.message
			// 			if(message == "unauthorized") {
			// 				alert("Maaf session anda telah habis silahkan login kembali")
			// 				return this.router.navigateByUrl('/dashboard/sign-out')
							
			// 			}	
			// 	}
			// );				
		}
		else{
			// alert("Data tidak valid")
		}
  		
	  }

}
