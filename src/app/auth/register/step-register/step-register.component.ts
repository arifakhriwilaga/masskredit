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
	    format : 'dd-mm-yyyy',
	    showOn: "focus",
	    autoclose: true,
	    startDate: "-100y",
	    endDate: "-21y",
		  onSelect: function (){
        // The "this" keyword refers to the input (in this case: #someinput)
        this.focus();
	    }
	  }).on('hide', function () {
		  if (!this.firstHide) {
		    if (!jQuery(this).is(":focus")) {
		      this.firstHide = true;
		      // this will inadvertently call show (we're trying to hide!)
		      this.focus(); 
		    }
		  } else {
		    this.firstHide = false;
		  }
		})
		.on('show', function () {
		  if (this.firstHide) {
		    // careful, we have an infinite loop!
		    jQuery(this).datepicker('hide'); 
		  }
		});

	  jQuery(function($){
		  jQuery("#tanggal_lahir").mask("99-99-9999",{placeholder:"DD-MM-YYYY"});
		});

		jQuery('#kode_pos').mask('00000');
		jQuery("#registerForm").validate({
		  rules: {
		    nama_lengkap: {
		      required: true
		    },
		    alamat_email: {
		      required: true,
		    	regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z]+\.)+[a-zA-Z]{2,}))$/
		    },
		    password: {
		      required: true,
		      minlength:8,
		      matchConfirm:true
		    },
		    confirm_password: {
		      required: true,
		      minlength:8,
		      match : true
		    },
		    jenis_kelamin: {
		      required: true
		    },
		    kode_pos: {
		      required: true
		    },
		    tempat_lahir: {
		      required: true,
		      maxlength: 30
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
		    alamat_email: {
		    	required : "Data dibutuhkan",
		    	regex : "Email invalid"
		    },
		    password: {
		    	required : "Data dibutuhkan",
		    	minlength : "Password terlalu pendek"
		    },
		    confirm_password: {
		    	required : "Data dibutuhkan",
		    	match : "Password tidak sama",
		    	minlength : "Password terlalu pendek"

		    },
		    jenis_kelamin: "Data dibutuhkan",
		    kode_pos: "Data dibutuhkan",
		    tempat_lahir: "Data dibutuhkan",
		    tanggal_lahir: "Data dibutuhkan",
		    alamat: "Data dibutuhkan",
		    status_rumah: "Data dibutuhkan"
		  }
		});
	}

	regex() {
		jQuery.validator.addMethod("regex",function(value, element, regexp) {
        if (regexp.constructor != RegExp)
            regexp = new RegExp(regexp);
        else if (regexp.global)
            regexp.lastIndex = 0;
        return this.optional(element) || regexp.test(value);
    }, "Data input salah.");

    jQuery.validator.addMethod("match",function(value, element) {
  	  let confirmPassword:string = value;
			let password:string = jQuery("#password").val();
      if (confirmPassword != password) 
        return this.optional(element);
      else
      	return true;  	
    }, "Data input salah.");

    jQuery.validator.addMethod("matchConfirm",function(value) {
  		let elementConfirmPassword = jQuery("#confirm_password").get();
  		let password:string = value;
			let confirmPassword:string = jQuery("#confirm_password").val();
			
      if (confirmPassword == password)
      	return [jQuery("#confirm_password").valid(), true];
      
      else if (confirmPassword != '' && confirmPassword != password)
      	return jQuery("#confirm_password").valid('false');

      else
        return true;
    }, null);

    jQuery("#tempat_lahir").bind("input", function(event) {
	    var out = "";
	    var str = this.value;
	    for (var i = 0; i < str.length; i++) {
	        if (/[A-Za-z]/.test(str.charAt(i))) {
	            out = out.concat(str.charAt(i));    
	        }
	    }
	    this.value = out;
		});
	}

	sendRegister(register) {
		if(jQuery("#registerForm").valid()) {
			if(this.register.phone_number === null) {
				
			}
	    jQuery('#signup').prop('disabled', true);
			let date = jQuery("#tanggal_lahir").val();
			let changeDate = date.split('-');
			let newDate:string = changeDate[2]+"-"+changeDate[1]+"-"+changeDate[0];

			this.register.phone_number = JSON.parse(localStorage.getItem("phone-number"));
			this.register.tanggal_lahir = newDate;

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