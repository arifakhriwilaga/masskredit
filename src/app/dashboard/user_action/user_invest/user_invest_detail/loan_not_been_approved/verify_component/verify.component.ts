import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoanNotBeenApprovedComponent } from './../loan_not_been_approved.component';

declare var jQuery:any;

@Component({
	selector: 'verify',
	template: `
		<form name="confirmInvestForm" id="confirmInvestForm">
	    <div class="form-group">
        <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="invest.password">
	    </div>
  	</form>
	    <div class="form-group">
          <button class="btn btn-default" (click)="cancelConfirmInvest()">Batal</button>
          <button class="btn btn-red" (click)="confirmInvest(invest)"style="background-color: #e74c3c;">
          	<font style="color:white">Verifikasi</font>
          </button> 
	    </div>
  `
})



export class VerifyComponent implements OnInit{ 
	constructor(private dataApprove:LoanNotBeenApprovedComponent, private router:Router) { }
	private invest = this.dataApprove.dataApprove;
	private approvalStatus = this.dataApprove.dataApprove.approval_status;

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
		this.router.navigateByUrl("/dashboard/user-action/user-invest");
	}

	confirmInvest(){
		if(jQuery("#confirmInvestForm").valid()) {
			if(this.approvalStatus == 1) {
				this.dataApprove.sendDataApprove();
			}else{
				this.dataApprove.sendDataApprove();
			}
		}
		else{
			alert("Harap masukan password");
		}
	}
}