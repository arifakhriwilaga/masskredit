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
	constructor(private http: Http, private router:Router) { }

	

	ngOnInit() {
		jQuery('.datepicker').datepicker({
	      format: 'yyyy-mm-dd',
	      startDate: '-3d'
	    });
	}

	private image:void;

	private token = JSON.parse(localStorage.getItem("access_token"));
		
	public investasi = {
		access_token: this.token,
	  	invest_name: '',
	  	type: '1',
	  	description: '',
		images: [this.image,this.image,this.image],
	  	due_date: '',
	  	amount: '',
	  	interest: 10,
	  	tenor: '',
	  	collateral: true,
	  	fee: true
		
	}



  createInvestasi(investasi) {
  		this.investasi.due_date = jQuery("#due_date").datepicker("getDate");
  	let readerFileA = new FileReader();
		readerFileA.onload = function(event, varty) {
			this.a = event.target.result.split(',')[1];
			console.log(this.a);
		}.bind(this);

		let readerFileB = new FileReader();
		readerFileB.onload = function(event, varty) {
			this.b = event.target.result.split(',')[1];
			// console.log(this.b)
		}.bind(this)

		let readerFileC = new FileReader();
		readerFileC.onload = function(event, varty) {
			this.c = event.target.result.split(',')[1];
			// console.log(this.c)
		}.bind(this)

		let x : any = document.getElementById("image1");
		let y : any = document.getElementById("image2");
		let z : any = document.getElementById("image3");
		var file_x =	x.files[0];
		var file_y =	y.files[0];
		var file_z =	z.files[0];

		// console.log(file_x, file_y, file_z);
		var encode_x  = readerFileA.readAsDataURL(file_x);
		var encode_y  = readerFileB.readAsDataURL(file_y);
		var encode_z  = readerFileC.readAsDataURL(file_z);
		this.investasi.images[0]	= encode_x;
		this.investasi.images[1] 	= encode_y;
		this.investasi.images[2]	= encode_z;

  		console.log(this.investasi);
  		

  	let headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
		});
    	let options = new RequestOptions({ headers: headers });
		
		console.log(investasi);

		if(this.investasi == null) {
			console.log('Gagal Verify');

		}
		else{
			this.http.post('http://masscredit-api.stagingapps.net/user/investment/new',
			this.investasi,
			options)
			.map(response => response.json())
			.subscribe((response : any) => {
			var code 		= response.meta.code;
			var message 	= response.meta.message;
			
			console.log(code,message);

			this.router.navigateByUrl('/dashboard/pinjaman');
			
			});
		}

  }


}
