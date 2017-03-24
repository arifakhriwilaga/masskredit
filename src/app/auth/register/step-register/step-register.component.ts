import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { StepRegisterService } from './step-register.service';
declare var jQuery:any;
@Component({
	selector: "step-register",
	templateUrl: 'step-register.component.html',
	providers:[StepRegisterService]
})



export class StepRegisterComponent  { 
	constructor(
		private stepregisterService : StepRegisterService, 
		private router : Router, 
		private http : Http,
		private activatedRoute : ActivatedRoute
	) { }
	
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
		let param = this.activatedRoute.params.subscribe( params => {
			let access_code = params['access_code'];
		});

		jQuery('#messagelogin').hide();

	
		this.nomor = JSON.parse(localStorage.getItem("verify_handphone"));
		jQuery.datepicker.setDefaults({
      dateFormat: 'yy-mm-dd',
      minDate: '2013-09-10',
      maxDate: '2013-10-10'
		});

		jQuery('.datepicker').datepicker({
	    format : 'yyyy-mm-dd',
	    showOn: "focus",
	    autoclose: true,
	    // startDate: "01-01-1945",
	    // endDate: "01-01-1998"
	    startDate: "-100y",
	    endDate: "-21y"
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
		  messages : {
		  	nama_lengkap: "Data dibutuhkan",
		    alamat_email: "Data dibutuhkan",
		    password: "Data dibutuhkan",
		    confirm_password: "Data dibutuhkan",
		    jenis_kelamin: "Data dibutuhkan",
		    kode_pos: "Data dibutuhkan",
		    tempat_lahir: "Data dibutuhkan",
		    tanggal_lahir: "Data dibutuhkan",
		    alamat: "Data dibutuhkan",
		    status_rumah: "Data dibutuhkan"
		  }
		});
	}


	sendRegister(register) {
		if(jQuery("#registerForm").valid()) {	
			this.register.phone_number = JSON.parse(localStorage.getItem("phone-number"));
			this.register.tanggal_lahir = jQuery("#tanggal_lahir").val();
			this.stepregisterService.postStepRegister(register);
		}
		else{
			alert("Data tidak valid");
		}
	}

	hideNotif() {
		jQuery('#myModal').modal('toggle');
		this.router.navigateByUrl('/auth/login');
	}

	cancelRegister() {
		localStorage.removeItem("access-code");
		localStorage.removeItem("verify-handphone");
		let out = this.router.navigateByUrl('/');
	}
}