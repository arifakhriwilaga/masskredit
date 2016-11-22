import { Component } 	from '@angular/core';
import { LoginService }   from './../../../auth/login/login.service';

@Component({
	moduleId: module.id,
	selector: 'header-dashboard',
	templateUrl: 'header.component.html',
	providers: [LoginService]
})

export class HeaderDashboardComponent { 

	constructor (private loginService:LoginService){

	}

	public logout() {
		return this.loginService.logout();
	}

}