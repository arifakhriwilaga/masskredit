import { Component, OnInit } 	from '@angular/core';
import { ComplementComponent }	from './../complement.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'other-income-two',
	templateUrl: 'other_income_two.component.html'
})

export class OtherIncomeTwoComponent{ 

	constructor(private complement:ComplementComponent) {
	// initial objek in complement data
	this.data = this.complement.data;
	}

	public data = { }
}