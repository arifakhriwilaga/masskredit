import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery:any;

@Component({
	selector: 'form-detail',
	templateUrl: 'form-detail.component.html'
})

export class FormDetailComponent implements OnInit{ 
	constructor(private router:Router) { }
	// private invest = this.detail.loan;

	ngOnInit(){
		if(this.dataDetailInvest !== undefined) {
			// console.log(this.dataDetailInvest);
		}
	}

	@Input() dataDetailInvest:any;
	@Input() dataAmount:string;
	@Input() dataRestAmount:string;
	
	// cancelConfirmInvest(){
	// 	this.router.navigateByUrl("/dashboard/other-user-action/invest");
	// }

	// confirmInvest(){
	// 	if(jQuery("#confirmInvestForm").valid()) {
	// 		this.detail.dataDetailInvest = 3;
	// 		this.detail.postLoan();
	// 	}
	// 	else{
	// 		alert("Harap masukan password");
	// 	}
	// }
}