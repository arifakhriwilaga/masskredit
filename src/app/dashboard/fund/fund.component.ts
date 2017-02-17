import { Component } 	from '@angular/core';

@Component({
	selector: 'fund',
	templateUrl: 'fund.component.html'
})

export class FundComponent { 

	private classFund 		= "active";
	private classWithdrawal = "";
	if(condition) {
		// code...
	}

	fund(id : any){
		if(id == 1) {
			this.classFund = "active";
			this.classWithdrawal = "";
		}
	}

	withdrawal(id : any){
		if(id == 2) {
			this.classFund = "";
			this.classWithdrawal = "active";
		}
	}
}