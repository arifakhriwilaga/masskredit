import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoanNotApprovedComponent } from './../loan-not-approved';
declare var jQuery:any;

@Component({
	selector: 'verify',
	templateUrl: 'verify.component.html',
})

export class VerifyComponent implements OnInit{ 
	constructor(private dataApprove:LoanNotApprovedComponent, private router:Router) { }
	private data = this.dataApprove.dataApprove;
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

	@Output() hideDetailBorrower = new EventEmitter<number>();
	cancelConfirmInvest(){
		this.hideDetailBorrower.emit(0);
	}
	@Output() showLoader = new EventEmitter<any>();
	submitConfirmInvest(data:any){
		if(jQuery("#confirmInvestForm").valid()) {
			if(this.approvalStatus == 1) {
				this.dataApprove.sendDataApprove();
			
			}else{
				this.dataApprove.sendDataApprove();
			}
			this.hideDetailBorrower.emit(0);
		}else{
			alert("Data tidak valid");
		}
	}

}