import { Component, OnInit } 	from '@angular/core';
import { ComplementComponent }	from './../complement.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'other-income-one',
	templateUrl: 'other_income_one.component.html'
})

export class OtherIncomeOneComponent{ 

	constructor(private complement:ComplementComponent) {
	// initial objek in complement data
	this.data = this.complement.data;
	}

	public data = { }
}