import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators }  	from '@angular/forms';
import { RegisterService }			from './../register.service';



declare var jQuery:any;
@Component({
	moduleId: module.id,
	selector: "step-1",
	// styles: [` 
	// 		: host {
	// 				display: flex;
	// 				flex-direction: coloumn;
	// 		}

	// `],
	templateUrl: 'register1.component.html'
})

export class Step1RegisterComponent  { 
	constructor(private registerService : RegisterService) { }
	
	private registerOne = {
		nama_lengkap 	 : 'Jajang Permana',
		alamat_email 	 : 'jajang_jangkung@gmail.com',
		password	 	 : 'Handsome',
		confirm_password : 'Handsome',
		jenis_kelamin	 : 'Laki-laki',
		agama 		  	 : 'Islam',
		tempat_lahir  	 : 'Tasikmalaya',
		tanggal_lahir 	 : '02/06/1997',
		alamat 			 : 'St. Lorem ipsum',
		provinsi 		 : 'Jawa Barat',
		kota 			 : 'Bandung',
		kode_pos 		 : '40552',
		status_rumah 	 : 'Ikut Orang Tua',
		luas_tanah 		 : '500',
		luas_bangunan 	 : '500',
		identitas 		 : 'KTP',
		nomor_identitas  : '3217060206970001',
		status			 : 'Belum Kawin',
		npwp 			 : '123456789',
		bank 			 : 'BCA',
		nomor_rekening 	 : '123456789',
		nomor_telepon  	 : '123456789'
	}
	nextStepTwo(registerOne) {
		if(this.registerOne) {		
			console.log('ini dari register1 => lanjutkan yaa', this.registerOne);
			this.registerService.Step2();
			// jQuery('#step-1').hide();
			// jQuery('#step-2').show();
			
		}
		else{
			console.log('data gagal disimpan');
		}
	}

	ngAfterViewInit() {
		// jQuery('#step-1').show("step-1");
		jQuery('#step-2').hide();
		jQuery('#step-3').hide();
		jQuery('#step-4').hide();
	}


	sendDataStepOne(){
		return this.registerOne;
	}


}
	
