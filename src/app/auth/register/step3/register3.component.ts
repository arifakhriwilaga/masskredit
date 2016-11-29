import { Component } 	from '@angular/core';
import { RegisterService }	from './../register.service';

@Component({
	moduleId: module.id,
	selector: 'step3',
	templateUrl: 'register3.component.html'
})

export class Step3RegisterComponent { 

	constructor(private registerService: RegisterService) { }
	private registerThree = {
		pekerjaan 	 		  : '',
		nama_perusahaan 	  : 'Warung Ema',
		alamat_perusahaan	  : 'St. Lorem ipsum',
		telepon_perusahaan 	  : '123456789',
		jenis_usaha 		  : 'Warung',
		jabatan  	 		  : 'Pegawai',
		tanggal_mulai_kerja   : '20/12/1996',
		gaji_per_bulan 		  : '123456789',
		pendapatan_lain 	  : '23456789',
		pengeluaran_per_bulan : '12345678',
		sumber_dana 		  : '12345678',
	}

	nextStepFour(registerThree) {
		if(this.registerThree) {
			console.log(this.registerThree)
			this.registerService.Step4();

		// debugger;
		// 	this.router.navigateByUrl('register','step-4');
		// 	console.log('ini dari register => lanjutkan yaa', this.registerThree);
		}
		else{
			console.log(this.registerThree);
		}
	}

	prevStepTwo(registerThree){
		console.log(registerThree);
		this.registerService.Step2();
		// this.registerService.Step1();
	}
}