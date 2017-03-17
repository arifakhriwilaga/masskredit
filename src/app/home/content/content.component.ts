import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'content',
	templateUrl: 'content.component.html'
})

export class ContentComponent { 

	statusFormForgot:number;
	showForgot(status:number){
		this.statusFormForgot = status;
	}

	hideModal(status:number){
		this.statusFormForgot = status;
	}

	statusFormVerify:number
	phoneNumber = { };
	showVerify(data:any){
		this.phoneNumber = data.phone_number;
		this.statusFormVerify = data.status;
	}

	hideModalVerify(status:number){
		this.statusFormVerify = status;
	}
}