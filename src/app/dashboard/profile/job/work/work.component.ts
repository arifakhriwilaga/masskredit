import { Component, OnInit } 	from '@angular/core';
import { ProfileComponent }	from './../../profile.component';
// import { PersonalComponent }	from './../personal';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'work',
	templateUrl: 'work.component.html'
})

export class WorkComponent implements OnInit{ 

	constructor(private profileComponent:ProfileComponent) {
	// initial objek in complement data
	this.data = this.profileComponent.data;
	// this.editDataKerja = this.profileComponent.editDataKerja;
	
	}

	ngOnInit(){
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy-mm-dd'
	    });		
	}

	public data = { }
	public profile = { };
	
}