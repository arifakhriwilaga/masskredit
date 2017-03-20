import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

import { VerifyComponent } from './../verify.component';

declare var jQuery:any;
@Component({
	selector: 'form-verify',
	template: `
		<form name="confirmLoanForm" id="confirmLoanForm">
	  <div class="col-md-6">
	    <div class="form-group">
        <span class="required">*</span>
        <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="dataLoan.password">
	    </div>
	  </div>
	</form>
	`
})

export class FormVerifyComponent implements OnInit{ 
	constructor(private verifyComponent:VerifyComponent) { }
	
	dataLoan = this.verifyComponent.dataLoan;
	ngOnInit(){
		jQuery('#confirmLoanForm').validate({
		  rules: {
		    password: { required: true },
		  }
		});
	}
}