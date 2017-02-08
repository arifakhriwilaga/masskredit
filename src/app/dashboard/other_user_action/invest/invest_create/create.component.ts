import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { ValidationServiceInvestasi } from './validationservice.component';
import { VerifyComponent } from './verify_component';

declare var jQuery:any;

@Component({
	selector: 'create',
	templateUrl: 'create.component.html',
})

export class CreateComponent {
	constructor(private http: Http, private router:Router) { }

	ngOnInit() {
		// validation
    jQuery( "#investForm" ).validate({
		  rules: {
		    invest_name: {
		      required: true
		    },
		    invest_type: {
		      required: true,
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
		jQuery('#interest').mask('00000');
		jQuery('#tenor').mask('00');
		jQuery('#amount').mask('0000000000');

	}

	// set header
  private headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	});
	private options = new RequestOptions({ headers: this.headers });
	
	// object invest
	public invest = {
		access_token: JSON.parse(localStorage.getItem("access_token")),
	  invest_name: null,
	  invest_type: 0,
	  description: null,
		images: null,
  	due_date: '',
  	amount: null,
  	interest: null,
  	tenor: null,
  	password: null		
	}
	
	private token = JSON.parse(localStorage.getItem("access_token"));
	public dataInvest = 0;
  private tipeInvest:any;
  public dataDetailInvest = 0;

  getTipeInvestasi(id){
  	this.tipeInvest = id;
  	// console.log(id)
  }

	cancelInvest(){

		this.router.navigateByUrl("/dashboard/other-user-action/invest");
	}

	// function for encode image
	createInvest(invest){
		if(jQuery("#investForm").valid()) {
	  	this.invest.due_date = jQuery("#masa_berlaku").datepicker("getDate");

			let readerFileA = new FileReader();
			readerFileA.onload = function(event, varty) {
				try{
					let image = event.target.result.split(',')[1];
					if(image == "AQID") {
						this.invest.images = null;
					}

					if(image != "AQID") {
					 this.invest.images = image;
					}
				}finally{
					// console.log(this.invest)
					this.dataInvest = 1;
					
				}
			}.bind(this)

			let x : any = document.getElementById("images");
			var file_x =	x.files[0];

			var objectBlob	= new Uint8Array([1,2,3]);
			var arrayBlob	= objectBlob.buffer;
			var image_default = new Blob([arrayBlob]);


			if(file_x == undefined) {
				file_x = image_default;
			}
			var encode_x  = readerFileA.readAsDataURL(file_x);
		}
		else{
			alert("Data tidak valid")
		}
  }

	sendVerifyInvest(password : any){
		if(jQuery("#confirmInvestForm").valid()) {
			this.sendDataInvest();
		}
		else{
			alert("Harap masukan password");
		}
	}

	cancelVerifyInvest(){

		this.dataInvest = 0;
	}
  
  // api send data
  sendDataInvest(){
  	this.http.post('https://masscredit-api.stagingapps.net/user/investment/new',
		this.invest,
		this.options)
		.map(response => response.json())
		.subscribe(
			(response : any) => {
				var code 		= response.meta.code;
				var message 	= response.meta.message;					
				// console.log(code,message);
				this.dataDetailInvest = 0;
				alert("Investasi berhasil dibuat");
				this.router.navigateByUrl('/dashboard/other-user-action/invest');
			},
			(err:any) => {
				var error   = JSON.parse(err._body)
				var message = error.meta.message
				var code = error.meta.code
				if(message == "unauthorized") {
					alert("Maaf session anda telah habis silahkan login kembali")
					return this.router.navigateByUrl('/dashboard/sign-out')					
				}
				if(message == "Password salah!") {
					// this.verify.dataConfirmInvest = 0;
					this.dataInvest = 1;
					this.dataDetailInvest = 0;
					alert("Password anda salah")
					// return this.router.navigateByUrl('/dashboard/sign-out')					
				}
				if(message == "Saldo Anda tidak mencukupi.") {
					// this.verify.dataConfirmInvest = 0;
					this.dataInvest = 1;
					this.dataDetailInvest = 0;
					alert("Saldo anda tidak mencukupi")
					// return this.router.navigateByUrl('/dashboard/sign-out')					
				}

			}
		);
  }
}
