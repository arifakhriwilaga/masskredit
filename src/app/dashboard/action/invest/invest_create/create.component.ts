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

	private dataInvest = 0;
	
	// set header
  private headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	});

	private options = new RequestOptions({ headers: this.headers });

	ngOnInit() {

		// try custom modal
		// Get the modal
		// var modal = document.getElementById('myModal');

		// Get the button that opens the modal
		// var btn = document.getElementById("myBtn");

		// Get the <span> element that closes the modal
		// var span = document.getElementById("close");
		// var value_span = span.val()
		// When the user clicks the button, open the modal 
		// btn.onclick = function() {
		//     modal.style.display = "block";
		// }

		// When the user clicks on <span> (x), close the modal
		// span.onclick = function() {
		// 	alert(span);
		//     modal.style.display = "none";
		// }

		// When the user clicks anywhere outside of the modal, close it
		// window.onclick = function(event) {
		//     if (event.target == modal) {
		//         modal.style.display = "none";
		//     }
		// }

    jQuery( "#investForm" ).validate({
		  rules: {
		    invest_name: {
		      required: true
		    },
		    invest_type: {
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
	  invest_type: 0,
	  description: null,
		images: null,
  	due_date: '',
  	amount: null,
  	interest: null,
  	tenor: null,
  	password: null
		
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

	cancelInvest(){
		this.router.navigateByUrl("/dashboard/action/invest");
	}


	createInvest(invest){
		// alert("dari create invest")
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

  private tipeInvest:any;
  getTipeInvestasi(id){
  	this.tipeInvest = id;
  	// console.log(id)
  }

  sendDataInvest(){
  	this.http.post('http://masscredit-api.stagingapps.net/user/investment/new',
			this.invest,
			this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					var code 		= response.meta.code;
					var message 	= response.meta.message;					
					// console.log(code,message);
					alert("Investasi berhasil dibuat");
					this.router.navigateByUrl('/dashboard/action/invest');
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
}
