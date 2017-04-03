import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router }	from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';

import { VerifyCodeService }	from './verify-code.service';

import { VerifyCode } from './verify-code';

declare var jQuery:any;

@Component({
	selector: 'verify-code',
	templateUrl: 'verify-code.component.html',
	providers: [VerifyCodeService]
})

export class VerifyCodeComponent implements OnInit{
	constructor(
		private router : Router,
		private http : Http,
		private verifycodeService	: VerifyCodeService
	) {	}
	
	@Input() dataPhone:string;
	private code = { };
	private nomor = { phone_number : null };

	ngOnInit() {
		jQuery('#ModalForm').modal({backdrop: 'static', keyboard: false});
		jQuery('#verify').mask('000000');
		jQuery("#FormVerify").validate({
		  rules: {
		    verification_code: {
		      required: true
		    }
		  },
		  messages: {
		  	verification_code: "Data dibutuhkan"
		  }
		});

		if(this.dataPhone !== null) {
			this.nomor.phone_number = this.dataPhone;
		}
  }

	// send code verify
	sendVerify() {
		if(jQuery("#FormVerify").valid()) {
	    jQuery("#verifikasi").prop('disabled', true);
			this.verifycodeService.postVerifyCode(this.code).then(dataResponse => {
	    	let message = dataResponse.meta.message;
	  		let code = JSON.stringify(dataResponse.meta.code);
				let data = dataResponse.data;
				
				if(code.charAt(0) === '4') {
	  			this.handleError(message);
	  		} if(code.charAt(0) === '2') {
	  			this.handleSuccess(data);
	  		};

			});

		}else{
			alert("Data tidak valid");
		}
	}

	resendHandphone() {
    jQuery('#resend').prop('disabled', true);
		this.verifycodeService.postResendCode(this.nomor).then(dataResponse => {
    	let data = dataResponse.data.verification_code;
	    jQuery('#resend').prop('disabled', false);

			alert(data)
		});
	}

	handleError(message:any){
		try {
			alert("Maaf nomor verifikasi salah.")
		} finally {
	    jQuery('#verifikasi').prop('disabled', false);
		}
  }
  
  handleSuccess(data:any){
		jQuery('#ModalForm').modal("toggle");
  	let access_code = data.access_code;
		this.router.navigateByUrl('/auth/register/step-register/' + access_code);
		// localStorage.setItem('access-code',JSON.stringify(data.data.access_code));
  }

	@Output() statusModal = new EventEmitter<any>()
	hideModal(data:any){
		this.statusModal.emit(data)
	}

}