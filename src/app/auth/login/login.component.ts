import { Component, Inject } 				   from '@angular/core';
import { LoginService }						   from './login.service';
import { LocalStorageService } 				   from 'angular-2-local-storage';
import { FormGroup, FormBuilder, Validators }  from '@angular/forms';
import { Headers, Http }					   from '@angular/http';
import { Router }        					   from '@angular/router';



@Component({
	moduleId   : module.id,
	selector   : 'login',
	templateUrl: 'login.component.html',
	providers  : [LoginService] 
})

export class LoginComponent {

	// loginForm : FormGroup;

	// constructor(private loginService :  LoginService, fb : FormBuilder, http : Http){
	constructor(private http : Http, private loginService : LoginService, private router:Router){ }

	private user = {
		email		: "",
		password	: ""
	};
	// private loggedin = false;
	// 			// this.loggedin = true;
			// var activate:boolean = false; 

	public login(user) {
		var authentication:boolean = true;
		this.http.post('https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/login',user)
		.subscribe((data : any) => {
			var token 	 = data.json();
			localStorage.setItem('access_token', JSON.stringify(token.data.access_token));
			// debugger;
			console.log(token.meta.code,token.meta.message, user);
			if(token.meta.code == "200") {
				return this.router.navigateByUrl('dashboard');
			}
			else{
				return this.router.navigateByUrl('/')
			}
		});

	}


 }
			
			// if(response.data = "200") {
			// 	// redirect()	
			// }
			// elseif(response.data = "400"){

			// }
			// else{

			// }


		// this.loginService.loggedin(user.email,user.password)
		// .map(response => response.json().data.acces_token)
		// .subscribe((response : any) => {
		// 	debugger();
		// }, (error) => {

		// }, () => {
		// 	console.log(user);
		// 	// console.log(this.data);
		// 	// @LocalStorage(user);
		// });