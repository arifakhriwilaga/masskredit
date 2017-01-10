import { Component, OnInit } 	from '@angular/core';
import { EditComponent }	from './../edit.component';
// import { PersonalComponent }	from './../personal';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'other-income-one',
	templateUrl: 'other_income_one.component.html'
})

export class OtherIncomeOneComponent{ 

	constructor(private edit:EditComponent) {
	// initial objek in complement data
	this.data 	 = this.edit.data;
	this.profile = this.edit.profile;
	this.complement_data  = this.edit.complement_data;
	}

	public complement_data = { };
	public data = { }
	public profile = { };

}