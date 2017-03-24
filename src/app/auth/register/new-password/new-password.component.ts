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
		      required: true
		    },
		    confirm_new_password: {
		      required: true,
		    },
		  },
		  messages : {
		  	new_password: "Data dibutuhkan",
		    confirm_new_password: "Data dibutuhkan",
		  }
		});
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