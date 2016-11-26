import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators }  	from '@angular/forms';
// import { Step2RegisterComponent }				from './../step2';
// import * as jQuery from 'jquery';
// import * as jQuery 	from './../../../../../typings/jquery/jquery.d.ts';
// import from './../typings/jquery/jquery.d.ts';
// declare var jQuery:JQueryStatic;

// declare var jQuery:any;
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
	constructor () {}
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
			// $(this.el.nativeElement).click(function(){
			// 	console.log("ini dari id")
			// });
			// $( "#hidr" ).click(function() {
			//   $( "div" ).hide( 1000 );
			// });
			
			console.log('ini dari register1 => lanjutkan yaa', this.registerOne);
			// this.router.navigateByUrl('auth/register/step-2');
		}
		else{
			console.log('data gagal disimpan');
		}
	}


	// @Input() 	step   	   = 1;
	// @Output() 	finish 	   = new EventEmitter();
	// @Output()	stepChange = new EventEmitter();
	// private steps = 0;
	// private isOnFinalStep = () => this.step === this.steps;
	// private isOnFirstStep = () => this.step === 1;

	// public addStep(){
	// 	const newSteps  = this.steps + 1;
	// 	this.steps 		= newSteps;
	// 	return newSteps

	// }
}
	
