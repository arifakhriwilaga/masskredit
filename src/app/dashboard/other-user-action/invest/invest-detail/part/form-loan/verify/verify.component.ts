import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormLoanComponent } from'./../form-loan.component';

declare var jQuery:any;

@Component({
	selector: 'verify',
	templateUrl: 'verify.component.html'
})

export class VerifyComponent implements OnInit{ 
	constructor(
		private formLoanComponent:FormLoanComponent,
		private router:Router
	) { }
	
	dataLoan = this.formLoanComponent.dataLoan;

	ngOnInit(){
		jQuery("#ConfirmForm").validate({
		  rules: {
		    password: { required: true },
		  }
		});
	}

	cancelConfirmUrl = '#/dashboard/other-user-action/invest';

	confirmInvest(){
		if(jQuery("#confirmInvestForm").valid()) {
			
		}
		else{
			alert("Harap masukan password");
		}
	}
}