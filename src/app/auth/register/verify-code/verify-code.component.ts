// inject modul angular
import { Component } from '@angular/core';
import { Router }	from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';

// inject service verify-code
import { VerifyCodeService }	from './verify-code.service';

// inject object verify-code
import { VerifyCode } from './verify-code';

// declare object jQuery for usage function jQuery
declare var jQuery:any;

@Component({
	selector: 'verify-code',
	templateUrl: 'verify-code.component.html',
	providers: [VerifyCodeService]
})

export class VerifyCodeComponent {
	constructor(private router : Router, private http : Http, private verifycodeService	: VerifyCodeService) {	}
	
	private code = { };
	private nomor = { phone_number : JSON.stringify(localStorage.getItem("verify_handphone")) };

	ngOnInit() {
		// call function jquery mask
		jQuery('#verification_code').mask('00000');
		// call function jquery validate
		jQuery( "#verifyCodeForm" ).validate({
		  rules: {
		    verification_code: {
		      required: true
		    }
		  }
		});
  }

	// send code verify
	sendVerify(code:any)  {
		let $this = jQuery("#load");
		if(jQuery("#verifyCodeForm").valid()) {
			$this.button('loading');
			this.verifycodeService.postVerifyCode(code);
		}else{
			alert("Code Verifikasi anda salah");
		}
	}
	resendHandphone()  {
		let $this = jQuery("#load-resend");
		$this.button('loading');
		this.verifycodeService.postResendCode(this.nomor)
	}

}