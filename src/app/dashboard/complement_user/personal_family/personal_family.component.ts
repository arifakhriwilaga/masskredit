import { Component, OnInit } 	from '@angular/core';
import { ComplementComponent }	from './../complement.component';

declare var jQuery:any;

@Component({
	selector: 'personal-family',
	templateUrl: 'personal_family.component.html'
})

export class PersonalFamilyComponent { 

	constructor(private complement:ComplementComponent ) {
		// initial objek in complement data
		this.data = this.complement.data;
	}

	public complement_data = { };
	public data = { }
	public profile = { };
}