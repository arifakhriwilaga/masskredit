import { Component, OnInit } 	from '@angular/core';
import { EditComponent }	from './../edit.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'personal',
	templateUrl: 'personal.component.html'
})

export class PersonalComponent { 

	constructor(private edit:EditComponent) {
	// initial objek in complement data
	this.data = this.edit.data;
	this.profile = this.edit.profile;
	this.complement_data = this.complement_data;
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

	private statusMarried:any;
	getStatusMarried(id){
		this.statusMarried = id;
		if(id == 2) {
			// this.data.status_perkawinan = 0;
			// this.data.jumlah_anak		= 0;
			// this.data.jumlah_tanggungan = 0;
		}
		if(id == 1) {
			// this.data.status_perkawinan = null;
			// this.data.jumlah_anak		= null;
			// this.data.jumlah_tanggungan = null;
		}
	  	console.log(id)
	}

	public sumberPendapatan:any;
	getSumberPendapatan(id){
		this.sumberPendapatan = id;
		if(id == 2) {
			console.log(id)
			this.edit.data.gaji_per_bulan = 0;
			// this.data.pendapatan_bersih_perusahaan = null;
			this.edit.data.sumber_pendapatan = 2;
			this.edit.sumber_pendapatan = 2

			// objek pekerjaan
			// this.data.nama_usaha 	  				= "",
			// this.data.tahun_perusahaan_berdiri 		= 0,
			// this.data.jenis_perusahaan 		  		= "",
			// this.data.pendapatan_bersih_perusahaan	= 0,

			// this.data.pengeluaran_per_bulan 		= 0,
			// this.data.tlp_perusahaan				= 0,


			
		}
		if(id == 1) {
			console.log(id)
			// this.data.gaji_per_bulan = null;
			this.edit.data.pendapatan_bersih_perusahaan = 0;
			this.edit.data.sumber_pendapatan = 1;
			this.edit.sumber_pendapatan = 1
			// this.data.nama_perusahaan 	= "",
			// this.data.lama_bekerja 	  	= "",
			// this.data.jabatan  	 		= "",
			// this.data.pekerjaan  	 	= "",
			// this.data.gaji_per_bulan 	= 0,
			
		}
	}
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