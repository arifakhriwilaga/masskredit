import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignOutService } from './sign-out.service';

@Component({
	selector: 'sign-out',
	template: '',
	providers: [SignOutService]
})

export class SignOutComponent implements AfterViewInit{ 
	constructor(private router : Router, private signOutService:SignOutService) { }

	ngAfterViewInit() {
		this.signOut();
	}
	
	access_token = JSON.parse(localStorage.getItem("access_token"));
	
	dataSignOut = {
		access_token : this.access_token
	}
	
	signOut(){
		this.signOutService.signOutUser(this.dataSignOut).then(dataResponse => {
			let message = dataResponse.meta.message;
	    let code = JSON.stringify(dataResponse.meta.code);
	    let data = dataResponse.data;

	    if(code.charAt(0) === '4') {
	      this.handleError();
	    } if(code.charAt(0) === '2') {
	      this.handleSuccess();
	    };

		});
	}

	handleError(){          
    this.clearStorage();
  }
  
  handleSuccess(){
    this.clearStorage();
  }

  clearStorage(){
		localStorage.removeItem("access_token");
		localStorage.removeItem("verify_handphone");
		localStorage.removeItem("access_code");
		localStorage.removeItem("access");
    this.router.navigateByUrl('/home');
  }

}