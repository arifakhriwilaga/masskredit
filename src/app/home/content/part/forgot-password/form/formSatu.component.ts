import { Component, Input, Output, EventEmitter } 	from '@angular/core';
import { Router } 	from '@angular/router';

import { FormService }	from './form.service';

import { Data } from './data';

declare var jQuery:any

@Component({
	selector: 'form-satu',
	templateUrl: 'form.component.html',
	providers: [FormService]
})

export class FormSatuComponent { 
	constructor(private formService : FormService, private router:Router){ }
	
	@Input('dataOtp') dataOtp:any;
	private user:Data = {  
		email:null,
	  phone_number:null,
	  otp:null,
	};

	ngOnInit(){
		if(this.dataOtp !== null) {
			this.user.email = this.dataOtp.email;
			this.user.phone_number = this.dataOtp.phone_number;
			this.user.otp = this.dataOtp.otp;
		}
	}

	statusFormForgot = 0;
	forgotPassword(){
		this.formService.postCreate(this.user).then(dataResponse => {
			let message = dataResponse.meta.message;
			let code = JSON.stringify(dataResponse.meta.code);
			let data = dataResponse;

			if(code.charAt(0) == '4') {
				this.handleError(message);
			} if(code.charAt(0) == '2') {
				this.handleSuccess(data);
			};
			
		});
	}

  @Output() statusForm = new EventEmitter<any>()

  handleError(message:any){
	if(message == 'Nomor HP atau email Anda salah, silahkan cek kembali.') {
      alert("Nomor HP atau email Anda salah, silahkan cek kembali.");	
      this.statusForm.emit(0);
   	}
  }

  handleSuccess(data:any){
  	let resetToken = data.data.reset_token;
		this.router.navigateByUrl('/auth/register/new-password/' + resetToken)
  }
}