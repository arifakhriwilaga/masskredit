import { Component, OnInit } 	from '@angular/core';
import { ProfileComponent }	from './../../profile.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'other-income-two',
	templateUrl: 'other_income_two.component.html'
})

export class OtherIncomeTwoComponent { 

	constructor(private profileComponent:ProfileComponent) {
	// initial objek in complement data
	this.data 	 = this.profileComponent.data;
	this.profile = this.profileComponent.profile;
	this.complement_data = this.profileComponent.complement_data;

	}

	public complement_data 	= { };
	public data 	= { };
	public profile	= { };

	private pendapatanLainSecond:any;
	getPendapatanLainSecond(id){
		this.pendapatanLainSecond = id;
	  	if(id == 2) {

	  		// objek pendapatan lain 2
			this.profileComponent.data.pendapatan_lain_2 = 0;
			this.profileComponent.data.sumber_pendapatan_lain_2 = '';
			this.profileComponent.data.jumlah_pendapatan_lain_2 = 0;
		}
		else{
		  	console.log(id)
			this.profileComponent.data.pendapatan_lain_2 = 1;
		}
	}

}