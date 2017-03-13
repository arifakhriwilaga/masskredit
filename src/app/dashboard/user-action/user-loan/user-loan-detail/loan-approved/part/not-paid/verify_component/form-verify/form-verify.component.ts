import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VerifyComponent } from './../verify.component';

declare var jQuery:any;

@Component({
	selector: 'form-verify',
	templateUrl: 'form-verify.component.html',
})

export class FormVerifyComponent{ 
	constructor(private verifyComponent:VerifyComponent){}
	public dataVerify = this.verifyComponent.dataVerify;
	ngOnInit(){
		jQuery("#verifyInstallmentForm").validate({
		  rules: {
		    password: {
		      required: true
		    },
		    otp: {
		      required: true
		    },
		  }
		});
	}

	submitVerifyInstallment(data:any){
		if(jQuery("#verifyInstallmentForm").valid()) {
			this.verifyComponent.loaderVerify = 0;
			this.verifyComponent.postPaidInstallment();
		
		}else{
			alert("Data tidak valid");
		}
	}
}