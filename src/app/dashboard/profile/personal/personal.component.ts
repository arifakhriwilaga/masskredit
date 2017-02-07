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
		jQuery('.datepicker').datepicker({
      format	: 'yyyy-mm-dd',
      // startDate : '2015-01-01',
      // minDate	: '01/01/2015'

    });
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
	getStatusMarried(id){
		this.profileComponent.data.status_perkawinan = id;
		this.statusMarried = id;
	}

	private gender:any;
	getGender(id){
		this.profileComponent.data.jenis_kelamin = id;
		// console.log(this.profileComponent.data.jenis_kelamin)
		// this.statusMarried = id;
	}

	cancelDataPribadi(){
		// jQuery(".data-diri").prop("disabled", true);
		// this.editDataPribadi = 0;
		jQuery("#personal").prop("disabled", true);
		this.profileComponent.dataProfile = 0;
		this.profileComponent.getProfile();
	}

	updateDataPribadi(data){
		// console.log(data)
		// jQuery(".data-diri").prop("disabled", true);
		// this.editDataPribadi = 0;
		// get value mulai_bekerja
		let value_date = jQuery("#tanggal_lahir").val();
		this.profileComponent.data.tanggal_lahir = value_date;

		if(this.profileComponent.data.status_perkawinan == 0) {
			this.profileComponent.data.jumlah_anak		= 0;
		}
		jQuery("#personal").prop("disabled", true);
		this.profileComponent.dataProfile = 0;
		this.profileComponent.updateProfile();
	}

}