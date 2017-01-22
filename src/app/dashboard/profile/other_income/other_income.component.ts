import { Component, OnInit } 	from '@angular/core';
import { EditComponent }	from './../edit.component';
import { OtherIncomeOneComponent } from './other_income_one';
import { OtherIncomeTwoComponent } from './other_income_two';
import { ProfileComponent }	from './../profile.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'other-income',
	templateUrl: 'other_income.component.html'
})

export class OtherIncomeComponent{ 

	constructor(private profileComponent : ProfileComponent) {
	// initial objek in complement data
	this.data 	 = this.profileComponent.data;
	this.profile = this.profileComponent.profile;
	// this.complement_data  = this.edit.complement_data;
	}

	// public complement_data = { };
	public data = { }
	public profile = { };

}