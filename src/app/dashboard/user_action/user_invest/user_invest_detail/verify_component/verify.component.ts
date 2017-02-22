import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DetailComponent } from './../detail.component';

declare var jQuery:any;

@Component({
	selector: 'verify',
	templateUrl: 'verify.component.html',
})

export class VerifyComponent implements OnInit{ 
	constructor(private detailComponent:DetailComponent, private router:Router) { }
	private data = this.detailComponent.dataApprove;
	private approvalStatus = this.detailComponent.dataApprove.approval_status;

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

	cancelConfirmInvest(){
		jQuery('#FormApprove').modal("toggle");
		this.router.navigateByUrl("/dashboard/user-action/user-invest");
	}

	submitConfirmInvest(data:any){
		if(jQuery("#confirmInvestForm").valid()) {
			if(this.approvalStatus == 1) {
				this.detailComponent.sendDataApprove();
			}else{
				this.detailComponent.sendDataApprove();
			}
		}
		else{
			alert("Data tidak valid");
		}
	}
}