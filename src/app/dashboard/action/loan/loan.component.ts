import { Component } 		from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
@Component({
	//moduleId: module.id,
	selector: 'loan',
	templateUrl: 'loan.component.html'
})



export class LoanComponent { 
	constructor() { }

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