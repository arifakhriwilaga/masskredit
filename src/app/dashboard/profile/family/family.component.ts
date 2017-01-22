import { Component, OnInit } 	from '@angular/core';
import { ProfileComponent }	from './../profile.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'family',
	templateUrl: 'family.component.html'
})

export class FamilyComponent { 

	constructor(private profileComponent : ProfileComponent) {
	// initial objek in complement data
	// this.data = this.profileComponent.data;
	// this.profile = this.profileComponent.profile;
	}

	public data = this.profileComponent.data;
		
	// condition for section data kerabat
	private editDataKerabat = 0;
	enableDataKerabat(){
		jQuery("#family").prop("disabled", false);
		this.editDataKerabat = 1;
	}

	cancelDataKerabat(){
		jQuery("#family").prop("disabled", true);
		this.editDataKerabat = 0;
		this.profileComponent.getProfile();
	}

	updateDataKerabat(data){
		// jQuery(".data-diri").prop("disabled", true);
		this.profileComponent.updateProfile();
	}
}