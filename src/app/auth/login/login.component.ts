// inject modul angular
import { Component } from '@angular/core';
import { Headers, Http, RequestOptions }	   from '@angular/http';

// inject service login
import { LoginService }	from './login.service';

// inject object login
import { User } from './login';

// declare object jQuery for usage function jQuery
declare var jQuery:any

@Component({
	selector   : 'login',
	templateUrl: 'login.component.html',
	providers  : [LoginService] 
})

export class LoginComponent {
	constructor(private loginService : LoginService, private http:Http){ }
	
	// declare object request
	private user = { User };

	ngOnInit(){
		// call function jquery mask
		jQuery('#username').mask('000-000-000000');
	}

	login(user){
		let $this = jQuery("#load");
    $this.button('loading');
		this.loginService.postLogin(user);
	}

 }