import { Component, OnInit } 	from '@angular/core';
import { EditComponent }	from './../edit.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'personal-family',
	templateUrl: 'personal_family.component.html'
})

export class PersonalFamilyComponent { 

	constructor(private edit:EditComponent) {
		// initial objek in complement data
		this.data = this.edit.data;
		this.profile = this.edit.profile;
		// this.complement_data = this.edit.complement_data;
	}

	public complement_data = { };
	public data = { }
	public profile = { };
	// public data = {

	// 	// objek pekerjaan
	// 	nama_perusahaan 	  : '',
	// 	mulai_bekerja 	  	  : '',
	// 	jabatan  	 		  : '',
	// 	pekerjaan  	 		  : '',
	// 	gaji_per_bulan 		  : 0,
	// 	pengeluaran_per_bulan : '',
	// 	tlp_perusahaan		  : ''
		
		

	// 		// counter++;
	// }

}