import { Component, OnInit } 	from '@angular/core';
// import { EditComponent }	from './../edit.component';
import { ProfileComponent }	from './../../profile.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'business',
	templateUrl: 'business.component.html'
})

export class BusinessComponent{ 

	constructor(private profileComponent : ProfileComponent) {}

	public complement_data = { };
	public data = this.profileComponent.data;
	public profile = { };
	private sumberPendapatan:any;
	
}