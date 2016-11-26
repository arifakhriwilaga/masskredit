import { Component } 	from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'step2',
	templateUrl: 'register2.component.html'
})

export class Step2RegisterComponent { 
	private isCurrent;
	private step;

	constructor () { }
	private registerTwo = {
		nama_lengkap 	  : '',
		hubungan 	 	  : '',
		alamat	 	 	  : '',
		nomor_telepon 	  : '',
		jumlah_anak 	  : '',
		jumlah_tanggungan : '',
	}

	stepTwo(registerTwo) {
		if(this.registerTwo) {
			console.log('ini dari register2 => lanjutkan yaa', this.registerTwo);
			// this.router.navigateByUrl('register','step-3');
		}
		else{
			console.log('data gagal disimpan');
		}
	}

	// ngOinit(){
	// 	this.step = this.parent.addStep();
	// 	this.isCurrent = this.step === this.parent.step;
	// 	this.parent.stepChange.subscribe(step => {
	// 		this.isCurrent = this.step === step;
	// 	});
	// }
}