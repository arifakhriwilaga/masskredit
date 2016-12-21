import { Component, OnInit } 						  	   from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } 					   from './validationservice.component';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router }        					   from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'create',
	templateUrl: 'create.component.html',
})

export class CreateInvestComponent {
	constructor(private http: Http, private router:Router) { }

	

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
	}

	private image:void;

	private token = JSON.parse(localStorage.getItem("access_token"));
		
	// objek investasi
	public investasi = {
		access_token: this.token,
	  	invest_name: 'My invest',
	  	type: '0',
	  	description: 'Motor',
		images1: this.image,
		images2: this.image,
		images3: this.image,
	  	due_date: '',
	  	amount: null,
	  	interest: null,
	  	tenor: null,
	  	collateral: true,
	  	fee: true
		
	}




  	createInvestasi(investasi) {
		if(jQuery("#investasiForm").valid()) {	
	  		// this.investasi = investasi;
	  		this.investasi.due_date = jQuery("#masa_berlaku").datepicker("getDate");
	  		// console.log(investasi);
	  		
	  		// debugger
	  		let readerFileA = new FileReader();
	  		
			readerFileA.onload = function(event, varty) {
				let fileA = event.target.result.split(',')[1];
				this.investasi.images1 = fileA;
				console.log(fileA);
			}.bind(this);

			let readerFileB = new FileReader();
			readerFileB.onload = function(event, varty) {
				let fileB = event.target.result.split(',')[1];
				this.investasi.images2 = fileB;
				
				// console.log(fileB)
			}.bind(this)

			let readerFileC = new FileReader();
			readerFileC.onload = function(event, varty) {
				let fileC = event.target.result.split(',')[1];
				this.investasi.images3 = fileC;

				console.log(this.investasi)

			  	let headers = new Headers({ 
						'Content-Type': 'application/json',
						'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
					});
		    	let options = new RequestOptions({ headers: headers });
					
					this.http.post('http://masscredit-api.stagingapps.net/user/investment/new',
					investasi,
					options)
					.map(response => response.json())
					.subscribe(
						(response : any) => {
							var code 		= response.meta.code;
							var message 	= response.meta.message;
							
							console.log(code,message);

							this.router.navigateByUrl('/dashboard/pinjaman');
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
			}.bind(this)

			// var reader = new FileReader();
			console.log(this.investasi)

			let x : any = document.getElementById("image1");
			let y : any = document.getElementById("image2");
			let z : any = document.getElementById("image3");
			var file_x =	x.files[0];
			var file_y =	y.files[0];
			var file_z =	z.files[0];

			// debugger
			
			var encode_x  = readerFileA.readAsDataURL(file_x);
			var encode_y  = readerFileB.readAsDataURL(file_y);
			var encode_z  = readerFileC.readAsDataURL(file_z);
			this.investasi.images1	= encode_x;
			this.investasi.images2 	= encode_y;
			this.investasi.images3	= encode_z;
		}
		else{
			alert("Data tidak valid");
		}
  		
  }

  private tipeInvest:any;
  getTipeInvestasi(id){
  	this.tipeInvest = id;
  	console.log(id)
  }

}
