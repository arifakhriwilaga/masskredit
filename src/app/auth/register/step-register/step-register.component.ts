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
		this.regex();

		let param = this.activatedRoute.params.subscribe( params => {
			let access_code = params['access_code'];
		});

		jQuery('#messagelogin').hide();

	
		this.register.phone_number = JSON.parse(localStorage.getItem("phone-number"));

		jQuery('.datepicker').datepicker({
	    format : 'yyyy-mm-dd',
	    showOn: "focus",
	    autoclose: true,
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
		    	regx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/
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
		  	// nama_lengkap: "Data dibutuhkan",
		   //  alamat_email: "Data dibutuhkan",
		   //  password: "Data dibutuhkan",
		   //  confirm_password: "Data dibutuhkan",
		   //  jenis_kelamin: "Data dibutuhkan",
		   //  kode_pos: "Data dibutuhkan",
		   //  tempat_lahir: "Data dibutuhkan",
		   //  tanggal_lahir: "Data dibutuhkan",
		   //  alamat: "Data dibutuhkan",
		   //  status_rumah: "Data dibutuhkan"
		  }
		});
	}

	regex() {
		jQuery.validator.addMethod("regx", function(value, element, regexpr) {          
	    return regexpr.test(value);
		}, "Email invalid");
	}

	sendRegister(register) {
		console.log(this.register.phone_number)
		if(jQuery("#registerForm").valid()) {
			// if(this.register.phone_number === null) {
				
			// }
	    jQuery('#signup').prop('disabled', true);

			this.register.phone_number = JSON.parse(localStorage.getItem("phone-number"));
			this.register.tanggal_lahir = jQuery("#tanggal_lahir").val();
			this.stepregisterService.postStepRegister(register).then(dataResponse => {
				let message = dataResponse.meta.message;
	  		let code = JSON.stringify(dataResponse.meta.code);
				let data = dataResponse.data;

	  		if(code.charAt(0) === '5') {
	  			this.handleError(message);
	  		} if(code.charAt(0) === '2') {
	  			this.handleSuccess(data);
	  		};
			})
		}
		else{
			alert("Data tidak valid");
		}
	}

	handleError(message:any){
		try {
			if(message == 'No Handphone tidak terdaftar') {
	      alert("No Handphone tidak terdaftar");
	   	
	   	} else if(message == "Email sudah terdaftar") {
				alert("Maaf Email sudah terdaftar")
					
			} else if(message == "Password dan Confirm Password tidak sama") {
				alert("Password dan Confirm Password tidak sama")
		
			} else {
				alert("No Handphone sudah terdaftar")		
			}					
		} finally {
	    jQuery('#signup').prop('disabled', false);
		}
  }
  
  handleSuccess(data:any){
  	this.stepregisterService.showNotif();
  }

	hideNotif() {
		jQuery('#myModal').modal('toggle');
		this.router.navigateByUrl('/home');
	}

	cancelRegister() {
		localStorage.removeItem("access-code");
		localStorage.removeItem("verify-handphone");
		let out = this.router.navigateByUrl('/');
	}
}