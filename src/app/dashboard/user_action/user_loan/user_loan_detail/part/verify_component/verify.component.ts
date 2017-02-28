import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoanNotApprovedComponent } from './../loan-not-approved';

declare var jQuery:any;

@Component({
	selector: 'verify',
	templateUrl: 'verify.component.html',
})

export class VerifyComponent{ 
	constructor(private dataApprove:LoanNotApprovedComponent, private router:Router) { }
	invest = this.dataApprove.dataApprove;
	approvalStatus = this.dataApprove.dataApprove.approval_status;

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

	@Output() hideDetailInvestor = new EventEmitter<string>();
	cancelConfirmInvest(status:string){
		this.hideDetailInvestor.emit(status);
	}
	@Output() showLoader = new EventEmitter<any>();
	submitConfirmInvest(data:any){
		if(jQuery("#confirmInvestForm").valid()) {
			// console.log(this.dataApprove.loaderDetailInvestor);
			this.showLoader.emit(0);
			if(this.approvalStatus == 1) {
				this.dataApprove.sendDataApprove();
			
			}else{
				this.dataApprove.sendDataApprove();
			}
		
		}else{
			alert("Data tidak valid");
		}
	}
}