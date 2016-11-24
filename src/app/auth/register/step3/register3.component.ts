import { Component } 	from '@angular/core';
import { Router }		from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: 'register3.component.html'
})

export class Step3RegisterComponent { 

	constructor(private router : Router) { }
	private registerThree = {
		pekerjaan 	 		  : '',
		nama_perusahaan 	  : '',
		alamat_perusahaan	  : '',
		telepon_perusahaan 	  : '',
		jenis_usaha 		  : '',
		jabatan  	 		  : '',
		tanggal_mulai_kerja   : '',
		gaji_per_bulan 		  : '',
		pendapatan_lain 	  : '',
		pengeluaran_per_bulan : '',
		sumber_dana 		  : '',
	}

	stepThree(registerThree) {
		if(this.registerThree) {
		debugger;
			this.router.navigateByUrl('register','step-4');
			console.log('ini dari register => lanjutkan yaa', this.registerThree);
		}
		else{
			console.log('data gagal disimpan');
		}
	}
}