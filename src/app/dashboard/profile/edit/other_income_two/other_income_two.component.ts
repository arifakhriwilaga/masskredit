import { Component, OnInit } 	from '@angular/core';
import { EditComponent }	from './../edit.component';
// import { PersonalComponent }	from './../personal';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'other-income-two',
	templateUrl: 'other_income_two.component.html'
})

export class OtherIncomeTwoComponent { 

	constructor(private edit:EditComponent) {
	// initial objek in complement data
	this.data 	 = this.edit.data;
	this.profile = this.edit.profile;
	}
	public data 	= { }
	public profile	= { };

	private pendapatanLainSecond:any;
	getPendapatanLainSecond(id){
		this.pendapatanLainSecond = id;
	  	if(id == 2) {

	  		// objek pendapatan lain 2
			this.edit.data.pendapatan_lain_2 = 0;
			this.edit.data.sumber_pendapatan_lain_2 = '';
			this.edit.data.jumlah_pendapatan_lain_2 = 0;
		}
		else{
		  	console.log(id)
			this.edit.data.pendapatan_lain_2 = 1;
		}
	}

}