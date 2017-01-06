import { Component, OnInit } 	from '@angular/core';
import { ComplementComponent }	from './../index';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'business',
	templateUrl: 'business.component.html'
})

export class BusinessComponent { 
	constructor(private complement:ComplementComponent) {
	// initial objek in complement data
	this.data = this.complement.data;
	}

	public data = { };

	// public data = {

	// 	// objek pekerjaan
	// 	nama_perusahaan 	  : '',
	// 	mulai_bekerja 	  	  : '',
	// 	jabatan  	 		  : '',
	// 	pekerjaan  	 		  : '',
	// 	gaji_per_bulan 		  : 0,
		
	// 	nama_usaha 	  				: '',
	// 	tahun_perusahaan_berdiri 	: '',
	// 	jenis_perusahaan 		  	: '',
	// 	pendapatan_bersih_perusahaan: 0,

	// 	pengeluaran_per_bulan 	: 0,
	// 	tlp_perusahaan			: '',
		
		

	// 		// counter++;
	// }

}