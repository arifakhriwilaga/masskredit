import { Component, OnInit } 	from '@angular/core';
import { ComplementComponent }	from './../../complement.component';

declare var jQuery:any;

@Component({
	selector: 'part',
	templateUrl: 'part.component.html'
})

export class PartComponent { 

	constructor(private complement:ComplementComponent) {
	// initial objek in complement data
	this.data = this.complement.data;
		
	}

	public data = { }

	
}