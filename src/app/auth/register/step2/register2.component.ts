import { Component } 							from '@angular/core';
import { RegisterService }						from './../register.service';
import { Step1RegisterComponent } 				from './../step1/register1.component';
import { FormGroup, FormBuilder, Validators }  	from '@angular/forms';


@Component({
	//moduleId: module.id,
	selector: 'step2',
	templateUrl: 'register2.component.html'
})

export class Step2RegisterComponent { 

	constructor (
		private registerService : RegisterService, 
		private step1 : Step1RegisterComponent, 
		private formBuilder: FormBuilder) {

			this.step2Form = this.formBuilder.group({
		 


			// step2
			'nama_lengkap_keluarga' : "",
			'jumlah_tanggungan'		: "",
			'hubungan_keluarga'	 	: "",
			'alamat_keluarga' 		: "",
			'nomor_telepon_keluarga': "", // number
			'jumlah_anak'			: "", // number
			// 'jumlah_tanggungan'		: "", // number

		
			}); 


	}

	private step2Form = this.step1.step1Form;

	private register = this.registerService.dataRegister();



	prevStepOne(value){
		this.register.nama_lengkap_keluarga 	= value.nama_lengkap_keluarga,
		this.register.hubungan_keluarga 		= value.hubungan_keluarga,
		
		this.register.alamat_keluarga 			= value.alamat_keluarga
		this.register.nomor_telepon_keluarga 	= value.nomor_telepon_keluarga,
		this.register.jumlah_anak	   			= value.jumlah_anak,
		this.register.jumlah_tanggungan 		= value.jumlah_tanggungan ,

		console.log(this.register)
		// this.register = register;
		this.registerService.Step1();
	}

	// checkValid(value){
	// 	console.log(value)
	
	// 	this.nextStepThree(value);
		// let x: undefined;
		// if(value.valid) {
		// 	console.log("Data tidak valid");
		// }
		// else{
		// 	console.log("Data Valid");
		// }
			// this.nextStepTwo(value);
	// }

	checkValid(value){
		// value.tanggal_lahir =  jQuery("#tanggal_lahir").datepicker("getDate")
		// value.id_provinsi 	= jQuery("#provinsi").val();
		// console.log(value.id_provinsi)
		// console.log(value.tanggal_lahir)
		// this.step1Form.tanggal_lahir

		// this.register.tanggal_lahir = jQuery("#tanggal_lahir").datepicker("getDate");
		// console.log(value)
		// console.log("dari check valid")
		// this.nextStepThree(value);
		// this.nextStepTwo(value);
		// let x: undefined;
		// if(value.valid) {
		// 	console.log("Data tidak valid");
		// }
		// else{
		// 	console.log("Data Valid");
		// }
	}

	nextStepThree(value) {
		this.register.nama_lengkap_keluarga 	= value.nama_lengkap_keluarga,
		this.register.hubungan_keluarga 		= value.hubungan_keluarga,
		
		this.register.alamat_keluarga 			= value.alamat_keluarga
		this.register.nomor_telepon_keluarga 	= value.nomor_telepon_keluarga,
		this.register.jumlah_anak	   			= value.jumlah_anak,
		this.register.jumlah_tanggungan 		= value.jumlah_tanggungan ,
		this.registerService.Step3();
		
		console.log(this.register);
		// if(value) {	
		// 	console.log(value);
		// }
		// if(this.registerTwo) {
		// 	console.log('ini dari register2 => lanjutkan yaa', this.registerTwo);
		// 	this.router.navigateByUrl('register','step-3');
		// }
		// else{
		// 	console.log('data gagal disimpan');
		// }
	}


}