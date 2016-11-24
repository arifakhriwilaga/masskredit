import { Component } 	from '@angular/core';
import { Router }		from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: 'register2.component.html'
})

export class Step2RegisterComponent { 
	constructor (private router : Router) { }
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
			this.router.navigateByUrl('register','step-3');
		}
		else{
			console.log('data gagal disimpan');
		}
	}

}