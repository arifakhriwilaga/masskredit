import { Component } 		from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
@Component({
	//moduleId: module.id,
	selector: 'user-action',
	templateUrl: 'user_action.component.html'
})



export class UserActionComponent { 
	constructor() { }

	private classInvest 		= "active";
	private classLoan = "";
	if(condition) {
		// code...
	}

	loan(){
		this.classLoan = "active";
		this.classInvest = "";
	}

	invest(){
		this.classInvest = "active";
		this.classLoan = "";
	}
}