import { Component, OnInit } 	from '@angular/core';
import { ProfileComponent }	from './../profile.component';

declare var jQuery:any;

@Component({
	selector: 'bank',
	templateUrl: 'bank.component.html'
})

export class BankComponent { 

	constructor(private profileComponent : ProfileComponent) {
	// initial objek in complement data
	this.data = this.profileComponent.data;
	}

	public data = { }
	
	
}