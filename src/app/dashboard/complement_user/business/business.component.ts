import { Component, OnInit } 	from '@angular/core';
import { ComplementComponent }	from './../complement.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'business',
	templateUrl: 'business.component.html'
})

export class BusinessComponent { 
	constructor(private complement : ComplementComponent) {
	// initial objek in complement data
	this.data = this.complement.data;
	}

	public data = { }
}