import { Component, OnInit } 						  	   from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } 					   from './validationservice.component';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router, ActivatedRoute }        					   from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'confirm',
	templateUrl: 'confirm.component.html',
})

export class ConfirmComponent {
	constructor(private http: Http, private router:Router,private activatedRoute : ActivatedRoute) { }

	

	ngOnInit() {

	    var currentDate = new Date();
	    jQuery('.datepicker').datepicker({
	      format	: 'yyyy-mm-dd',
	      // startDate : '2015-01-01',
	      // minDate	: '01/01/2015'

	    });
	    let date = jQuery("#confirm_date").datepicker("setDate", currentDate);
		let value_date = jQuery("#confirm_date").val();
		this.data.confirm_date = value_date;

	    jQuery( "#confirmForm" ).validate({
		  rules: {
		    confirm_date: {
		      required: true
		    },
		    image_struct: {
		    	required: true
		    }
		  }
		});


		// Objek for get id on route
		let param = this.activatedRoute.params.subscribe( params => {
			let id = params['id'];
			// console.log(id)
			this.data.fund_id = id
	  	});

	  	// objek get date
  		// let date = jQuery("#confirm_date").datepicker("setDate", new Date());
  		// this.data.confirm_date = JSON.parse(date);
	}

	// Header 
  	public headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
		});
	public options = new RequestOptions({ headers: this.headers });

	//  access_token
	token = JSON.parse(localStorage.getItem("access_token"));
		

	// objek investasi
	public data = {
		access_token: this.token,
		fund_id: '',
	  	struct_image: 'qwertyui12345678',
	  	confirm_date: '',	
	}




  	confirmFund(data) {
		// if(jQuery("#confirmForm").valid()) {
		if(true) {	
			console.log(this.data)
			// API request data confirm
			this.http.post('http://masscredit-api.stagingapps.net/user/fund/confirm',
			this.data,
			this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					console.log(code,message);
					this.router.navigateByUrl('/dashboard/fund');
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
	  		
	  // 		let readerFileX = new FileReader();
	  		
			// readerFileX.onload = function(event, varty) {
			// 	let fileX = event.target.result.split(',')[1];
			// 	this.data.struct_image = fileX;
			// 	console.log(this.data);
					
			// }.bind(this);

			// let x : any = document.getElementById("image_struct");
			// var file_x =	x.files[0];

			// // debugger
			
			// var encode_x  = readerFileX.readAsDataURL(file_x);
			// this.data.struct_image	= encode_x;
		}
		else{
			// alert("Data tidak valid");
		}		
  }
}
