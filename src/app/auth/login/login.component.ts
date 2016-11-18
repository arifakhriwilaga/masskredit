import { Component, Inject } 					from '@angular/core';
import { LoginService }							from './login.service';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html',
	providers : [LoginService] 
})

export class LoginComponent {

	constructor(private loginService :  LoginService){

	}

	private user = {
		email		: "",
		password	: ""
	}

	public login(user) {
		this.loginService.loggedin(user.email,user.password)
		.map(response => response.json())
		.subscribe((response : any) => {

		}, (error) => {

		}, () => {
			console.log(user);
		});
	}
 }