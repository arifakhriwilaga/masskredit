import { Component } 	from '@angular/core';

// inject service login
import { LoginService }	from './../../global-service/login.service';

// inject object login
import { User } from './login';

// declare object jQuery for usage function jQuery
declare var jQuery:any

@Component({
	selector: 'content',
	templateUrl: 'content.component.html',

})

export class ContentComponent { 
	constructor(private loginService : LoginService){ }
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