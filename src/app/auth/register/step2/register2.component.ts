import { Component } 	from '@angular/core';
import { RegisterService }	from './../register.service';

@Component({
	moduleId: module.id,
	selector: 'step2',
	templateUrl: 'register2.component.html'
})

export class Step2RegisterComponent { 


	constructor (private registerService : RegisterService) { }
	// private registerTwo = {
	// 	nama_lengkap 	  : '',
	// 	hubungan 	 	  : '',
	// 	alamat	 	 	  : '',
	// 	nomor_telepon 	  : '',
	// 	jumlah_anak 	  : '',
	// 	jumlah_tanggungan : '',
	// }

	private register = this.registerService.dataRegister();

	nextStepThree(register) {
		if(register) {	
			console.log(register);
		}
		this.registerService.Step3();
		// if(this.registerTwo) {
		// 	console.log('ini dari register2 => lanjutkan yaa', this.registerTwo);
			// this.router.navigateByUrl('register','step-3');
		// }
		// else{
		// 	console.log('data gagal disimpan');
		// }
	}
	prevStepOne(register){
		console.log(register);
		this.registerService.Step1();
	}


	sendDataStepTwo(){
		return this.register;
	}
}