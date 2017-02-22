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
		this.getLoanCategory()
		// validation
    jQuery( "#loanForm" ).validate({
		  rules: {
		    loan_name: {
		    	required:true
		    },
		    loan_category: {
		      required: true,
		    },
		    due_date: {
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
		    interest: {
		      required: true
		    }
		  },
		  // messages:{
		  // 	invest_name : "Invest nama dibutuhkan"
		  // }
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

	// object Url 
	private postLoanUrl = 'https://masscredit-api.stagingapps.net/user/loan/new';
	private getCategoryLoanUrl = 'https://masscredit-api.stagingapps.net/master/loan-category';

	// object loan
	public loan = {
		access_token: JSON.parse(localStorage.getItem("access_token")),
	  loan_name: null,
	  loan_category: 0,
	  other_category: null,
		image: null,
	  description: null,
  	amount: null,
  	due_date: '',
  	interest: null,
  	tenor: null,
  	password: null
	}

	private loan_category = {
		access_token: JSON.parse(localStorage.getItem("access_token")),
	}

	public loan_categories= [];
	public dataInvest = 0;
	
	private categoryLoan:any;
  getLoanCategory(){
  	this.http.get(this.getCategoryLoanUrl, this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				this.loan_categories 		= response.data.loan_categories;
			},(err:any) => {
				var message = err.meta.message;
				if(message == "unauthorized") {
					alert("Maaf session anda telah habis silahkan login kembali")
					return this.router.navigateByUrl('/dashboard/sign-out');
				}
			});
  }

  getLoanCategoryId(id){
  	this.categoryLoan = id;
  	// console.log(id)
  }

	cancelLoan(){
		this.router.navigateByUrl("/dashboard/other-user-action/loan");
	}

	// function for encode image
	createLoan(loan){
		if(jQuery("#loanForm").valid()) {
	  	this.loan.due_date = jQuery("#due_date").val();

			let readerFileA = new FileReader();
			readerFileA.onload = function(event, varty) {
				try{
					let image = event.target.result.split(',')[1];
					if(image == "AQID") {
						this.loan.image = null;
					}

					if(image != "AQID") {
					 this.loan.image = image;
					}
				}finally{
					this.dataInvest = 3;
					// console.log(this.invest)
					// this.postLoan()
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

  // api send data
  postLoan(){
  	// console.log(this.loan);
  	this.http.post(this.postLoanUrl,this.loan,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			var code = response.meta.code;
			var message = response.meta.message;					
			// console.log(code,message);
			alert("Investasi berhasil dibuat");
			this.router.navigateByUrl('/dashboard/other-user-action/loan');
		},(err:any) => {
			var error   = JSON.parse(err._body)
			var message = error.meta.message
			var code = error.meta.code
			
			if(message == "unauthorized") {
				alert("Maaf session anda telah habis silahkan login kembali")
				return this.router.navigateByUrl('/dashboard/sign-out')					
			
			}if(message == "Password salah!") {
				this.dataInvest = 0;
				alert("Password salah")
				// return this.router.navigateByUrl('/dashboard/sign-out')					
			}

		});
  }
}
