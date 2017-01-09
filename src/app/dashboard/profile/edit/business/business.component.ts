import { Component, OnInit } 	from '@angular/core';
import { EditComponent }	from './../edit.component';
// import { PersonalComponent }	from './../personal';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'business',
	templateUrl: 'business.component.html'
})

export class BusinessComponent implements OnInit{ 

	constructor(private edit:EditComponent) {
	// initial objek in complement data
	this.data = this.edit.data;
	this.profile = this.edit.profile;
	this.complement_data = this.complement_data;
	this.sumberPendapatan = this.edit.sumber_pendapatan;
	}

	ngOnInit(){
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy-mm-dd',
	      // startDate : '2015-01-01',
	      // minDate	: '01/01/2015'

	    });
	}
	public complement_data = { };
	public data = { }
	public profile = { };
	private sumberPendapatan:any;
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