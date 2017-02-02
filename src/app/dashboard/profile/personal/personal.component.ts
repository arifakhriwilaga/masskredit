import { Component, OnInit } 	from '@angular/core';
import { ProfileComponent }	from './../profile.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'personal',
	templateUrl: 'personal.component.html'
})

export class PersonalComponent { 

	constructor(private profileComponent: ProfileComponent) {
	// initial objek in complement data
	this.data = this.profileComponent.data;
	// this.profile = this.profileComponent.profile;
	// this.complement_data = this.complement_data;
	// console.log(this.profileComponent.profile)
	}

	ngOnInit(){
		if(this.profileComponent.data.status_perkawinan <= 0) {
				jQuery("#jumlahanak").prop("disabled", true);
		}
	}

	public complement_data = { };
	public data = { };
	public profile = { };

	// condition for section data pribadi
	private editDataPribadi = 0;
	enableDataDiri(){
		jQuery("#personal").prop("disabled", false);
		this.editDataPribadi = 1;
	}

	private statusMarried:any;
	private inputAnak = "desabled";
	getStatusMarried(id){
		this.statusMarried = id;
		if(id == 2) {
			this.profileComponent.data.status_perkawinan = 2;
		}else{
			jQuery("#jumlahanak").prop("disabled", false);
			this.profileComponent.data.status_perkawinan = 1;
		}
	}

	cancelDataPribadi(){
		// jQuery(".data-diri").prop("disabled", true);
		jQuery("#personal").prop("disabled", true);
		if(this.statusMarried == 1) {
			this.statusMarried = null;
		}

		this.editDataPribadi = 0;
		this.profileComponent.getProfile();
	}

	updateDataPribadi(data){
		// jQuery(".data-diri").prop("disabled", true);
		if(this.profileComponent.data.status_perkawinan == 2) {
			this.profileComponent.data.jumlah_anak		= 0;
		}
		this.editDataPribadi = 0;
		this.profileComponent.dataProfile = 0;
		jQuery("#personal").prop("disabled", true);
		this.profileComponent.updateProfile();
	}

}