import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService }	from './login.service';

import { User } from './login';

declare var jQuery:any

@Component({
	selector: 'login',
	templateUrl: 'login.component.html',
	providers: [LoginService]
})

export class LoginComponent { 
	constructor(private loginService : LoginService, private router:Router){ }
	private user = { User };

	ngOnInit(){
		jQuery('#username').mask('000-000-000000');
	}

	login(){
		this.loginService.postLogin(this.user).then(dataResponse => {
			let message = dataResponse.meta.message;
  		let code = JSON.stringify(dataResponse.meta.code);
			let data = dataResponse.data;

  		if(code.charAt(0) === '4') {
  			this.handleError(message);
  		} if(code.charAt(0) === '2') {
  			this.handleSuccess(data);
  		};
		});
	}

  handleError(message:any){
	if(message == 'No Handphone tidak terdaftar') {
      alert("No Handphone tidak terdaftar");
   	}					
  }
  
  handleSuccess(data:any){
		let access_token = JSON.stringify(data.access_token);
  	localStorage.setItem("access_token",access_token);
		this.router.navigateByUrl('/dashboard');
  }

  @Output() statusForgot = new EventEmitter<any>();
  forgotPassword(){
  	this.statusForgot.emit(1);
  }
}