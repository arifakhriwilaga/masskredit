import { Component, OnInit } 	from '@angular/core';
import { ProfileComponent }	from './../../profile.component';
// import { PersonalComponent }	from './../personal';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'other-income-one',
	templateUrl: 'other_income_one.component.html'
})

export class OtherIncomeOneComponent{ 

	constructor(private profileComponent:ProfileComponent) {
	// initial objek in complement data
	this.data 	 = this.profileComponent.data;
	this.profile = this.profileComponent.profile;
	this.complement_data  = this.profileComponent.complement_data;
	}

	public complement_data = { };
	public data = { }
	public profile = { };

}