import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { NewPasswordService } from './new-password.service';
import { Data } from './data';

declare var jQuery:any;

@Component({
	selector: "new-password",
	templateUrl: 'new-password.component.html',
	providers:[NewPasswordService]
})



export class NewPasswordComponent implements OnInit { 
	constructor(
		private newPasswordService : NewPasswordService, 
		private router : Router, 
		private http : Http,
		private activatedRoute: ActivatedRoute
	) { }
	
	ngOnInit(){
		let param = this.activatedRoute.params.subscribe( params => {
			let token = params['token'];
			this.user.reset_token = token;	
		});
		jQuery("#ResetForm").validate({
		  rules: {
			  new_password: {
		      required: true,
		      minlength:8,
		      matchConfirm:true
		    },
			  confirm_new_password: {
		      required: true,
		      minlength:8,
		      match : true
		    },
		  },
		  messages : {
		  	new_password: {
		    	required : "Data dibutuhkan",
		    	minlength : "Password terlalu pendek"
		    },
		    confirm_new_password: {
		    	required : "Data dibutuhkan",
		    	match : "Password tidak sama",
		    	minlength : "Password terlalu pendek"
		    },
		  }
		});
		this.regex();
	}

	regex() {
    jQuery.validator.addMethod("match",function(value, element) {
  	  let confirmPassword:string = value;
			let password:string = jQuery("#new_password").val();
      if (confirmPassword != password) 
        return this.optional(element);
      else
      	return true;  	
    }, "Data input salah.");

    jQuery.validator.addMethod("matchConfirm",function(value) {
  		let elementConfirmPassword = jQuery("#confirm_new_password").get();
  		let password:string = value;
			let confirmPassword:string = jQuery("#confirm_new_password").val();
			
      if (confirmPassword == password)
      	return jQuery("#confirm_new_password").valid();
      
      else if (confirmPassword != '' && confirmPassword != password)
      	return jQuery("#confirm_new_password").valid('false');

      else
        return true;
    }, null);
	}

	private user:Data = { 
		new_password:null,
    confirm_new_password:null,
    reset_token:null
	}

	cancelUrl = "#/home" ;
	submitResetPassword(register) {
	if(jQuery("#ResetForm").valid()) {	
		this.newPasswordService.resetPassword(this.user).then(dataResponse => {
			let message = dataResponse.meta.message;
			let code = JSON.stringify(dataResponse.meta.code);
			let data = dataResponse.meta.message;
			if(code.charAt(0) == '5') {
				this.handleError(message);
			} if(code.charAt(0) == '2') {
				this.handleSuccess(data);
			};
			
		})
	} else {
		alert("Data tidak valid");
	}
		
	}

  handleError(message:any){
	if(message == 'Password dan Confirm Password tidak sama') {
      alert("Password dan Confirm Password tidak sama");	
   	}
  }

  handleSuccess(data:any){
  	alert("Password berhasil diubah.");
  	this.router.navigateByUrl('/home');
  }
}