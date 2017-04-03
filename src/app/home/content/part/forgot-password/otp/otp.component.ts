import { Component, EventEmitter, Output } 	from '@angular/core';
import { Router } 	from '@angular/router';

import { OtpService }	from './otp.service';

declare var jQuery:any

@Component({
	selector: 'otp',
	templateUrl: 'otp.component.html',
	providers: [OtpService]	
})

export class OtpComponent { 
	constructor(private otpService : OtpService, private router:Router){ }

	user = {
		email : null,
		phone_number : null,
		otp : null,
	}

	phone_number = {
		phone_number : null,
		email : null
	}
	
	ngOnInit(){
		this.regex();
		jQuery('#ModalForm').modal({backdrop: 'static', keyboard: false});
		jQuery('#phoneNumber').mask('000-000-000000');
		jQuery('#FormForgot').validate({
		  rules: {
		  	phoneNumber: {
		      required: true
		    },
		    email : { 
		    	required : true,
		    	regx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/
		    }
		  }
		});
	}

	regex() {
		jQuery.validator.addMethod("regx", function(value, element, regexpr) {          
	    return regexpr.test(value);
		}, "Email tidak valid");
	}

	submitPhoneNumber(){
		if(jQuery("#FormForgot").valid()) {
			jQuery('#send').prop('disabled', true);
			this.phone_number.phone_number = this.user.phone_number;
			this.phone_number.email = this.user.email;
			this.otpService.getOtp(this.phone_number).then(dataResponse => {
				let message = dataResponse.meta.message;
	  		let code = JSON.stringify(dataResponse.meta.code);
				let data = dataResponse.data.otp;

	  		if(code.charAt(0) == '5') {
	  			this.handleError(message);
	  		} if(code.charAt(0) == '2') {
	  			this.handleSuccess(data);
	  		};
			});
		} else {
			alert("Data tidak valid");
		}
	}

  handleError(message:any){
		try { 
			if(message == 'No Handphone tidak terdaftar') {
      alert("No Handphone tidak terdaftar");
			// this.statusLoader.emit(1);
	   	} else { 
	   		alert("Nomor HP atau email Anda salah, silahkan cek kembali.");
	  	}
  	} finally {
	    jQuery('#send').prop('disabled', false);
  	}
  }
  @Output() statusLoader = new EventEmitter<any>()
  @Output() dataOtp = new EventEmitter<any>();
  handleSuccess(data:any){
  	this.user.otp = data;
		this.dataOtp.emit(this.user);
  }
}