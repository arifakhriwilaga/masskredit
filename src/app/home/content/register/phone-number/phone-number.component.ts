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
		      required: true,
		      // valid:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/
		    }
		  },
		  messages: {
		  	phone: "Data dibutuhkan",
		  	// valid: "No Telepon tidak valid."
		  }
		});
  }

  regex(){
  	jQuery.validator.addMethod("valid",function(value, element, regexp) {
        if (regexp.constructor != RegExp)
            regexp = new RegExp(regexp);
        else if (regexp.global)
            regexp.lastIndex = 0;
        return this.optional(element) || regexp.test(value);
    }, "Data input salah.");
  }

	sendHandphone(){
		if(jQuery("#verifyForm").valid()) {
    	jQuery('#phone-number').prop('disabled', true);
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
		try {
			alert (message);
		} finally {
    	jQuery('#phone-number').prop('disabled', false);
		}
  }
  
  data = { 
  	phone_number : null,
  	status: null
  };

  @Output() statusVerify = new EventEmitter<any>();
  handleSuccess(data:any){
  	let number = JSON.stringify(this.nomor.phone_number);
    jQuery('#phone-number').prop('disabled', false);
  	
  	localStorage.setItem("phone-number",number);
  	// alert(data.verification_code);
  	this.data.phone_number = this.nomor.phone_number
  	this.data.status = 1;
  	this.statusVerify.emit(this.data);
  }
}