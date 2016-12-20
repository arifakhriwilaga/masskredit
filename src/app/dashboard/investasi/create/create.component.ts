import { Component, OnInit } 						  	   from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } 					   from './validationservice.component';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router }        					   from '@angular/router';

declare var jQuery:any;
// declare var image:void;

@Component({
	selector: 'create',
	templateUrl: 'create.component.html',
})

export class CreateInvestComponent { 
	createForm : any;
	constructor(
		private http: Http, 
		private router:Router,
		private formBuilder: FormBuilder
	) { 

	this.createForm = this.formBuilder.group({
		'access_token' 	: JSON.parse(localStorage.getItem("access_token")),
		'invest_name'	: ['', [Validators.required, ValidationServiceInvestasi.namainvestasiValidator]],
		'type'			: [0, Validators.required],
		'images1'		: [""],
		'images2'		: [""],
		'images3'		: [""],
		'due_date'		: [''],
		'amount'		: ['', [Validators.required, ValidationServiceInvestasi.amountValidator]],
		'interest'		: [''],
		'tenor'			: ['', [Validators.required, ValidationServiceInvestasi.tenorValidator]],
		'collateral'	: ['', [Validators.required]],
		'description'	:  '',
      	

      	// 'email': ['', [Validators.required, ValidationService.emailValidator]],
      	// 'profile': ['', [Validators.required, Validators.minLength(10)]]
    });

	}

	

	ngOnInit() {
		jQuery('.datepicker').datepicker({
	      format	: 'YYYY-MM-DD',
	      // startDate : '2015-01-01',
	      // minDate	: '01/01/2015'
	    });
	}

	private image:void;

	private token = JSON.parse(localStorage.getItem("access_token"));
		
	public investasi = {
		access_token: this.token,
	  	invest_name: 'My invest',
	  	type: '0',
	  	description: 'Motor',
		images: "",
	  	due_date: '',
	  	amount: null,
	  	interest: null,
	  	tenor: null,
	  	collateral: true,
	  	fee: true
		
	}



  // createInvestasi(investasi) {
  // 	if(!investasi.value.valid || investasi.value == "") {
  // 		jQuery.click();
  // 		this.router.navigateByUrl('/dashboard/invest/create');		
  // 	}
  // 	else{
	 //  	console.log(investasi);
  // 	}

  // }

  	createInvestasi(investasi) {
  		// this.investasi = investasi;
  		investasi.due_date = jQuery("#due_date").datepicker("getDate");
  		// console.log(investasi);
  		
  		// debugger
  	let readerFileA = new FileReader();
  		
		readerFileA.onload = function(event, varty) {
			let fileA = event.target.result.split(',')[1];
			investasi.images1 = fileA;
			
			// console.log(fileA);
		}.bind(this);

		let readerFileB = new FileReader();
		readerFileB.onload = function(event, varty) {
			let fileB = event.target.result.split(',')[1];
			investasi.images2 = fileB;
			
			// console.log(fileB)
		}.bind(this)

		let readerFileC = new FileReader();
		readerFileC.onload = function(event, varty) {
			let fileC = event.target.result.split(',')[1];
			investasi.images3 = fileC;

			// console.log(fileC)

		  	let headers = new Headers({ 
					'Content-Type': 'application/json',
					'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
				});
		    	let options = new RequestOptions({ headers: headers });
				
				console.log(investasi);

				if(investasi == null) {
					console.log('Gagal membuat investasi');

				}
				else{
					this.http.post('http://masscredit-api.stagingapps.net/user/investment/new',
					investasi,
					options)
					.map(response => response.json())
					.subscribe((response : any) => {
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					
					console.log(code,message);

					this.router.navigateByUrl('/dashboard/pinjaman');
					
					});
				}
			
		}.bind(this)

		// var reader = new FileReader();

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
		investasi.images1	= encode_x;
		investasi.images2 	= encode_y;
		investasi.images3	= encode_z;

  		
  }

  private tipeInvest:any;
  getTipeInvestasi(id){
  	this.tipeInvest = id;
  	console.log(id)
  }

}
