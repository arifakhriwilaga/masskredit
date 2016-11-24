import { Component } 	from '@angular/core';
import { FormGroup, FormBuilder, Validators }  from '@angular/forms';
import { Router }			from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: 'register1.component.html'
})

export class Step1RegisterComponent { 
	constructor (private router : Router) {}
	private registerOne = {
		nama_lengkap 	 : '',
		alamat_email 	 : '',
		password	 	 : '',
		confirm_password : '',
		agama 		  	 : '',
		tempat_lahir  	 : '',
		tanggal_lahir 	 : '',
		alamat 			 : '',
		provinsi 		 : '',
		kota 			 : '',
		kode_pos 		 : '',
		status_rumah 	 : '',
		luas_tanah 		 : '',
		luas_bangunan 	 : '',
		identitas 		 : '',
		nomor_identitas  : '',
		status			 : '',
		npwp 			 : '',
		bank 			 : '',
		nomor_rekening 	 : '',
		nomor_telepon  	 : ''
	}

	stepOne(registerOne) {
		if(this.registerOne) {
			console.log('ini dari register1 => lanjutkan yaa', this.registerOne);
			this.router.navigateByUrl('auth/register/step-2');
		}
		else{
			console.log('data gagal disimpan');
		}
	}

}
	
