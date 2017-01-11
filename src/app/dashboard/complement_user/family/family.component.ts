import { Component, OnInit } 	from '@angular/core';
import { ComplementComponent }	from './../complement.component';

declare var jQuery:any;

@Component({
	selector: 'family',
	templateUrl: 'family.component.html'
})

export class FamilyComponent { 

	constructor(private complement:ComplementComponent) {
	// initial objek in complement data
	this.data = this.complement.data;
		
	}

	public data = { }
}