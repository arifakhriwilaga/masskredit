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

export class CreateComponent {
	constructor(private http: Http, private router:Router) { }

	

	ngOnInit() {
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy/mm/dd',
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
		    masa_berlaku: {
		      required: true
		    },
		    amount: {
		      required: true
		    },
		    tenor: {
		      required: true
		    },
		    description: {
		      required: true
		    },
		  }
		});
	}

	private token = JSON.parse(localStorage.getItem("access_token"));
		
	// object invest
	public invest = {
		access_token: this.token,
	  invest_name: null,
	  type: 0,
	  description: null,
		images_invest: null,
  	due_date: '',
  	amount: null,
  	interest: null,
  	tenor: null,
  	fee: true
		
	}


	createInvest(invest){
	  let headers = new Headers({ 
				'Content-Type': 'application/json',
				'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
		});

  	let options = new RequestOptions({ headers: headers });

		if(jQuery("#investForm").valid()) {
	  	this.invest.due_date = jQuery("#masa_berlaku").datepicker("getDate");

			let readerFileA = new FileReader();
			readerFileA.onload = function(event, varty) {
				try{
					let image = event.target.result.split(',')[1];
					if(image == "AQID") {
						this.invest.images_invest = null;
					}

					if(image != "AQID") {
					 this.invest.images_invest = image;
					}
				}finally{
					console.log(this.invest)
					// this.http.post('http://masscredit-api.stagingapps.net/user/investment/new',
					// invest,
					// options)
					// .map(response => response.json())
					// .subscribe(
					// 	(response : any) => {
					// 		var code 		= response.meta.code;
					// 		var message 	= response.meta.message;					
					// 		console.log(code,message);
					// 		this.router.navigateByUrl('/dashboard/invest');
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
			}.bind(this)

			let x : any = document.getElementById("image_invest");
			var file_x =	x.files[0];

			var objectBlob	= new Uint8Array([1,2,3]);
			var arrayBlob	= objectBlob.buffer;
			var image_default = new Blob([arrayBlob]);


			if(file_x == undefined) {
				file_x = image_default;
			}
			
			var encode_x  = readerFileA.readAsDataURL(file_x);
			this.invest.images_invest	= encode_x;
		}
  }

  private tipeInvest:any;
  getTipeInvestasi(id){
  	this.tipeInvest = id;
  	console.log(id)
  }
}
