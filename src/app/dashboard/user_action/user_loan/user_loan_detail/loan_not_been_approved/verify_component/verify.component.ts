import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoanNotBeenApprovedComponent } from './../loan_not_been_approved.component';

declare var jQuery:any;

@Component({
	selector: 'verify',
	templateUrl: 'verify.component.html',
})

export class VerifyComponent implements OnInit{ 
	constructor(private dataApprove:LoanNotBeenApprovedComponent, private router:Router) { }
	private invest = this.dataApprove.dataApprove;
	private approvalStatus = this.dataApprove.dataApprove.approval_status;

	ngOnInit(){
		jQuery('#modalFormConfirm').modal({backdrop: 'static', keyboard: false});
		jQuery( "#confirmInvestForm" ).validate({
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

	// private data = this.dataApprove

	cancelConfirmInvest(){
		jQuery('#modalFormConfirm').modal("toggle");
		this.router.navigateByUrl("/dashboard/user-action/user-invest");
	}

	submitConfirmInvest(data:any){
		if(jQuery("#confirmInvestForm").valid()) {
			if(this.approvalStatus == 1) {
				this.dataApprove.sendDataApprove();
			}else{
				this.dataApprove.sendDataApprove();
			}
		}
		else{
			alert("Data tidak valid");
		}
	}
}