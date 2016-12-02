import { Component } 	from '@angular/core';
import { RegisterService }	from './../register.service';

declare var jQuery: any;
@Component({
	moduleId: module.id,
	selector: 'step3',
	templateUrl: 'register3.component.html'
})

export class Step3RegisterComponent { 

	constructor(private registerService: RegisterService) { }
	// private registerThree = {
	// 	pekerjaan 	 		  : '',
	// 	nama_perusahaan 	  : 'Warung Ema',
	// 	alamat_perusahaan	  : 'St. Lorem ipsum',
	// 	telepon_perusahaan 	  : '123456789',
	// 	jenis_usaha 		  : 'Warung',
	// 	jabatan  	 		  : 'Pegawai',
	// 	tanggal_mulai_kerja   : '20/12/1996',
	// 	gaji_per_bulan 		  : '123456789',
	// 	pendapatan_lain 	  : '23456789',
	// 	pengeluaran_per_bulan : '12345678',
	// 	sumber_dana 		  : '12345678',
	// }


	private register = this.registerService.dataRegister();

	nextStepFour(register) {
		this.register.tanggal_mulai_kerja = jQuery("#tanggal_mulai_kerja").datepicker("getDate");
		// debugger

		if(register) {
			console.log(register)
			this.registerService.Step4();

		// debugger;
		// 	this.router.navigateByUrl('register','step-4');
		// 	console.log('ini dari register => lanjutkan yaa', this.registerThree);
		}
		else{
			console.log(register);
		}
	}

	ngAfterViewInit() {
		jQuery('.datepicker').datepicker({
	      format: 'yyyy-mm-dd',
	      startDate: '-3d'
	    });

	}

	prevStepTwo(register){
		console.log(register);
		this.registerService.Step2();
		// this.registerService.Step1();
	}

	sendDataStepThree(){
		return this.register;
	}
}