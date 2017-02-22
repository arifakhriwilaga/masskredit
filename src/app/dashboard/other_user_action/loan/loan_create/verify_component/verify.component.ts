import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateComponent } from './../create.component';

declare var jQuery:any;
@Component({
	selector: 'verify',
	template: `
	<form class="form-horizontal clearfix row" name="confirmInvestForm" id="confirmInvestForm">
	  <div class="col-md-12">
	    <div class="form-group">
	          <span class="required">*</span>
	          <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="invest.password">
	    </div>
	  </div>
	</form>
	  <div class="col-md-12">
	    <div class="form-group">
	        <div class="col-md-6 col-center">
	          <button class="btn btn-default" (click)="cancelConfirmInvest()">Batal</button>
	          <button class="btn btn-red" (click)="confirmInvest(invest)">Verifikasi</button>
	        </div>
	    </div>
	  </div>
	`
})

export class VerifyComponent implements OnInit{ 
	constructor(private create:CreateComponent, private router:Router) { }
	private invest = this.create.loan;
	public dataConfirmInvest = 0;

	ngOnInit(){
		jQuery( "#confirmInvestForm" ).validate({
		  rules: {
		    password: {
		      required: true
		    },
		  }
		});
	}

	cancelConfirmInvest(){
		
		this.router.navigateByUrl("/dashboard/other-user-action/invest");
	}

	confirmInvest(){
		if(jQuery("#confirmInvestForm").valid()) {
			// this.create.dataDetailInvest = 1;
			// this.dataConfirmInvest = 1;
			// this.create.dataInvest = 3;
			// this.create.sendDataInvest();
		}
		else{
			alert("Harap masukan password");
		}
	}
}