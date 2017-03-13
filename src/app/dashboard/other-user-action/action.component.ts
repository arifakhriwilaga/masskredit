import { Component } 		from '@angular/core';

@Component({
	selector: 'action',
	templateUrl: 'action.component.html'
})

export class ActionComponent { 
	constructor() { }

	private classInvest = "active";
	private classLoan = "";

	loan(){
		this.classLoan = "active";
		this.classInvest = "";
	}

	invest(){
		this.classInvest = "active";
		this.classLoan = "";
	}
}