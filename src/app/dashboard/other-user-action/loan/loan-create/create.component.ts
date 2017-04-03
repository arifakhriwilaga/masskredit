import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { ValidationServiceInvestasi } from './validationservice.component';
import { VerifyComponent } from './verify';
import { CreateService } from './create.service';

declare var jQuery:any;

@Component({
	selector: 'create',
	templateUrl: 'create.component.html',
	providers: [CreateService]
})

export class CreateComponent {
	constructor(
		private http: Http,
		private router:Router,
		private createService:CreateService
	) { }

	ngOnInit() {
		this.getLoanCategory()
		// validation
    jQuery( "#FormLoan" ).validate({
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
		    },
		    other_category: {
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
	public dataLoan = 0;
	
	private categoryLoan:any;
  getLoanCategory(){
  	this.createService.getCategory().then(dataResponse => {
  		let message = dataResponse.meta.message;
      let code = JSON.stringify(dataResponse.meta.code);
      let data = dataResponse.data.loan_categories;

      if(code.charAt(0) === '4') {
        this.handleError(message);
      } if(code.charAt(0) === '2') {
        this.handleSuccess(data);
      };

  	})
  }

  dataIsOn = [
    { value: 1 },
    { value: 0 },
  ];

	isOn = 0;

  handleError(message:any){
  if(message === 'unauthorized') {
      alert("Maaf akses token tidak terdaftar")            
      this.router.navigate(['/dashboard/sign-out']);
     }          
  }
  
  handleSuccess(data:any){
		this.loan_categories = data;
  }

  loanCategory:number;
  getLoanCategoryId(id){
  	this.categoryLoan = id;
  	this.loanCategory = id;
  }

	cancelLoan(){
		this.router.navigateByUrl("/dashboard/other-user-action/loan");
	}

	// function for encode image
	createLoan(){
		if(jQuery('#FormLoan').valid()) {
			if(this.isOn === 0) {
				return;
			} else {
				try {
				  this.loan.due_date = jQuery('#due_date').val();
				
				} finally {
					this.formVerify = 1;
				}
			}
		} else {
			alert("Data tidak valid");
		} 
  }

  encodeImage(image:any){
		let readerFile = new FileReader();
		readerFile.readAsDataURL(image);
		return readerFile;
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
				this.dataLoan = 0;
				alert("Password salah")
				// return this.router.navigateByUrl('/dashboard/sign-out')					
			}

		});
  }

  // controller simulation
  simulation = {
		nominal : null,
    pokok: null,
    bunga: null,
    cicilan_perbulan: null,
    denda: null,
    sucess_fee: null
	}

  dataCalculation = {
  	jumlah: null,
    bunga: null,
    tenor: null
  }

  calculationLoan(){
		if(jQuery('#FormLoan').valid()) {

		  this.loan.due_date = jQuery('#due_date').val();
		  this.dataCalculation.bunga = this.loan.interest;
			this.dataCalculation.jumlah = this.loan.amount;
			this.dataCalculation.tenor = this.loan.tenor;

		  let image : any = document.getElementById('images');
			var fileImage =	image.files[0];
			
			// object image null
			var objectBlob	= new Uint8Array([1,2,3]);
			var arrayBlob	= objectBlob.buffer;
			var image_default = new Blob([arrayBlob]);

			if(fileImage == undefined) {
				fileImage = image_default;
			}

			this.encodeImage(fileImage).onload = function(event, varty){
				try {
					let image = event.target.result.split(',')[1];
					
					if(image != "AQID") {
					 this.loan.image = image;

					} else {
						this.loan.image = null
					}

				} finally {
					this.createService.calculationLoan(this.dataCalculation).then(dataResponse => {
						try {
							this.simulation = dataResponse.data.simulation_result;
						} finally {
							this.dataLoan = 1;
						}
					})
				}
			}.bind(this);

		} else {
			alert("Data tidak valid");
		}
  }

  formVerify:number;
  hideVerify(status:number){
  	this.formVerify = status;
  }
}
