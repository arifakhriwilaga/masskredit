// inject modul angular
import { Component } from '@angular/core';

// inject service login
import { LoginService }	from './login.service';

// inject object login
import { User } from './login';
import { Headers, Http, RequestOptions }	   from '@angular/http';

// declare object jQuery for usage function jQuery
declare var jQuery:any

@Component({
	selector   : 'login',
	templateUrl: 'login.component.html',
	providers  : [LoginService] 
})

export class LoginComponent {
	constructor(private loginService : LoginService, private http:Http){ }
	
	// declare object
	private user = { User };

	// call function jquery mask
	ngOnInit(){
		jQuery(function($){
			jQuery('#username').mask('000-000-000000');
		});
	}

	login(user){
		this.loginService.login(user);
	}

 }