import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

import { VerifyComponent } from './../verify.component';

declare var jQuery:any;
@Component({
	selector: 'form-verify',
	template: `
		<form name="confirmInvestForm" id="confirmInvestForm" style="margin-left:100px;margin-right:100px;">
		  <div class="col-md-12">
		    <div class="form-group">
          <span class="required">*</span>
          <input type="text" name="otp" placeholder="Otp" class="form-control input-md" id="otp" [(ngModel)]="dataInvest.otp">
		    </div>
	    </div>
		  <div class="col-md-12">
		    <div class="form-group">
          <span class="required">*</span>
          <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="dataInvest.password">
		    </div>
		  </div>
		</form>
	`
})

export class FormVerifyComponent implements OnInit{ 
	constructor(private verifyComponent:VerifyComponent) { }
	
	dataInvest = this.verifyComponent.dataInvest;
	ngOnInit(){
		jQuery('#confirmInvestForm').validate({
		  rules: {
		    password: { required: true },
		    otp: { required: true },
		  }
		});
	}
}