import { Component, OnInit } 	from '@angular/core';
import { ProfileComponent }	from './../profile.component';

declare var jQuery:any;

@Component({
	selector: 'personal',
	templateUrl: 'personal.component.html'
})

export class PersonalComponent { 

	constructor(private profileComponent: ProfileComponent) {
	// initial objek in complement data
	this.data = this.profileComponent.data;
	}

	ngOnInit(){
		if(this.profileComponent.data.status_perkawinan <= 0) {
				jQuery("#jumlahanak").prop("disabled", true);
		}

		jQuery('.datepicker').datepicker({
	    format : 'dd-mm-yyyy',
	    showOn: "focus",
	    autoclose: true,
	    startDate: "-100y",
	    endDate: "-21y"
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
	}

	cancelDataPribadi(){
		jQuery("#personal").prop("disabled", true);
		this.profileComponent.dataProfile = 0;
		this.profileComponent.getProfile();
	}

	updateDataPribadi(data){

		// this.profileComponent.data.tanggal_lahir = newDate;

		if(this.profileComponent.data.status_perkawinan == 0) {
			this.profileComponent.data.jumlah_anak = 0;
		}
		this.profileComponent.dataProfile = 0;
		// this.profileComponent.updateProfile();
	}

}