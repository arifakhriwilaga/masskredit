import { Component } 		from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
@Component({
	//moduleId: module.id,
	selector: 'action',
	templateUrl: 'action.component.html'
})



export class ActionComponent { 
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