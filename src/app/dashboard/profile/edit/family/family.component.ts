import { Component, OnInit } 	from '@angular/core';
import { EditComponent }	from './../edit.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'family',
	templateUrl: 'family.component.html'
})

export class FamilyComponent { 

	constructor(private edit:EditComponent) {
	// initial objek in complement data
	this.data = this.edit.data;
	this.profile = this.edit.profile;
	}

	public complement_data = { };
	public data = { }
	public profile = { };

}