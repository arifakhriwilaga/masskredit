import { Component, OnInit } 	from '@angular/core';
import { ComplementComponent }	from './../index';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'family',
	templateUrl: 'family.component.html'
})

export class FamilyComponent { 

	constructor(private complement:ComplementComponent) {
	// initial objek in complement data
	this.data = this.complement.data;
		
	}

	ngOnInit(){
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy-mm-dd',
	      // startDate : '2015-01-01',
	      // minDate	: '01/01/2015'

	    });
	}
	public data = { }
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