import { Component } from '@angular/core';
import { FormGroup }  	from '@angular/forms';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { StepRegisterService } from './step-register.service';
declare var jQuery:any;
@Component({
	selector: "step-register",
	templateUrl: 'step-register.component.html',
	providers:[StepRegisterService]
})



export class StepRegisterComponent  { 
	constructor(private stepregisterService : StepRegisterService, private router : Router, private http : Http) { }
	
	private register = { 
		nama_lengkap : null,
		alamat_email : null,
		phone_number : null,
		password : null,
		confirm_password : null,
		kode_pos : null,
		jenis_kelamin : 0,
		tempat_lahir : null,
		tanggal_lahir : null,
		alamat : null,
		status_rumah : 0,
	}
	// Objek for master data
	public status_rumah 	= [];
	public status 			= [];

	private nomor = "";
	ngOnInit(){

		jQuery('#messagelogin').hide();

	
		this.nomor = JSON.parse(localStorage.getItem("verify_handphone"));
		jQuery('.datepicker').datepicker({
	    format	: 'yyyy-mm-dd',
	  });

		jQuery('#kode_pos').mask('00000');
		jQuery("#registerForm").validate({
		  rules: {
		    nama_lengkap: {
		      required: true
		    },
		    alamat_email: {
		      required: true,
		      email	  : true
		    },
		    password: {
		      required: true
		    },
		    confirm_password: {
		      required: true
		    },
		    jenis_kelamin: {
		      required: true
		    },
		    kode_pos: {
		      required: true
		    },
		    tempat_lahir: {
		      required: true
		    },
		    tanggal_lahir: {
		      required: true
		    },
		    alamat: {
		      required: true
		    },
		    status_rumah: {
		      required: true
		    }
		  },
		  // message : jQuery("#registerForm"){
		});
	}


	sendRegister(register) {
		let $this = jQuery("#load");
		if(jQuery("#registerForm").valid()) {	
			$this.button('loading');
			this.register.phone_number = JSON.parse(localStorage.getItem("phone-number"));
			this.register.tanggal_lahir = jQuery("#tanggal_lahir").val();
			this.stepregisterService.postStepRegister(register);
		}
		else{
			alert("Data tidak valid");
			jQuery("#load").button('reset');
		}
	}

	hideNotif() {
		jQuery('#myModal').modal('toggle');
		this.router.navigateByUrl('/auth/login');
	}

	cancelRegister() {
		localStorage.removeItem("access-code");
		localStorage.removeItem("verify-handphone");
		let out = this.router.navigateByUrl('/auth/login');
	}
	// toast(){
	// 	jQuery('#myModal').modal({backdrop: 'static', keyboard: false});
	// }
}