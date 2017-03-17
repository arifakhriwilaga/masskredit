import { Component, Output, EventEmitter } from '@angular/core';
import { Router }	from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';

import { PhoneNumberService }	from './phone-number.service';

import { PhoneNumber } from './phone-number';

declare var jQuery:any;

@Component({
	selector: 'phone-number',
	templateUrl: 'phone-number.component.html',
	providers  : [PhoneNumberService] 
})

export class PhoneNumberComponent {
	constructor(
		private router : Router, 
		private http : Http, 
		private phonenumberService: PhoneNumberService
	) { }	
	
	private nomor:PhoneNumber = {
		phone_number : null
	};

	ngOnInit() {
		jQuery('#phone').mask('000-000-000000');
		jQuery( "#verifyForm" ).validate({
		  rules: {
		    phone: {
		      required: true
		    }
		  },
		  messages: {
		  	phone: "Data dibutuhkan"
		  }
		});
  }

	sendHandphone(){
		if(jQuery("#verifyForm").valid()) {
	    this.phonenumberService.postPhoneNumber(this.nomor).then(dataResponse => {
	    	let message = dataResponse.meta.message;
	  		let code = JSON.stringify(dataResponse.meta.code);
				let data = dataResponse.data;

	  		if(code.charAt(0) === '5') {
	  			this.handleError(message);
	  		} if(code.charAt(0) === '2') {
	  			this.handleSuccess(data);
	  		};
			});

		}else{
			alert("Data tidak valid");
		}
	}

	handleError(message:any){
		if(message == "No Handphone sudah terdaftar") {
	    alert("Maaf no handphone telah terdaftar")
	  }
  }
  
  data = { 
  	phone_number : null,
  	status: null
  };

  @Output() statusVerify = new EventEmitter<any>();
  handleSuccess(data:any){
  	alert(data.verification_code);
  	this.data.phone_number = this.nomor.phone_number
  	this.data.status = 1;
  	this.statusVerify.emit(this.data);
  }
}