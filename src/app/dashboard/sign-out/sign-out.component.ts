import { Component } 				from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';

@Component({
	//moduleId: module.id,
	selector: 'investasi',
	template: '',
	
})



export class SignOutComponent { 
	constructor(private router : Router) { }

	ngAfterViewInit() {
		localStorage.removeItem("access_token");
		this.router.navigateByUrl('');
	}

}