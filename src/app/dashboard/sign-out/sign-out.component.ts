import { Component } 				from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';

@Component({
	//moduleId: module.id,
	selector: 'sign-out',
	template: '',
	
})



export class SignOutComponent { 
	constructor(private router : Router) { }

	ngAfterViewInit() {
		this.router.navigateByUrl('/home/content');
		// localStorage.removeItem("access_token");
		// localStorage.removeItem("verify_handphone");
		// localStorage.removeItem("access_code");
		// localStorage.removeItem("access");

	}

}