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
	}
	
	ngOnInit(){
		jQuery('#ModalForm').modal({backdrop: 'static', keyboard: false});
		jQuery('#phoneNumber').mask('000-000-000000');
		jQuery('#FormForgot').validate({
		  rules: {
		  	phoneNumber: {
		      required: true
		    },
		    email : { 
		    	required : true
		    }
		  }
		});
	}

	submitPhoneNumber(){
		if(jQuery("#FormForgot").valid()) {
			this.phone_number.phone_number = this.user.phone_number
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
	if(message == 'No Handphone tidak terdaftar') {
      alert("No Handphone tidak terdaftar");
			// this.statusLoader.emit(1);
   	}					
  }
  @Output() statusLoader = new EventEmitter<any>()
  @Output() dataOtp = new EventEmitter<any>();
  handleSuccess(data:any){
  	this.user.otp = data;
		this.dataOtp.emit(this.user);
  }
}