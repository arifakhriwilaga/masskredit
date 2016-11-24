import { Component } 				from '@angular/core';
import { Router }					from '@angular/router';
import { Step1RegisterComponent }	from './../step1';
import { Step2RegisterComponent }	from './../step2';
import { Step3RegisterComponent }	from './../step3';

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: 'register4.component.html'
})

export class Step4RegisterComponent {
	constructor(
		private router : Router, 
		 ) { 
	}
	// private step1  : Step1RegisterComponent,
	// 	private step2  : Step2RegisterComponent,
	// 	private step3  : Step3RegisterComponent,
	// private register = [this.step1, this.step2, this.step3];
	private registerFour = {
		ktp_depan 	 : '',
		ktp_belakang : '',
		foto	 	 : '',
	}



	stepFour(registerFour) {
		if(this.registerFour) {
			// console.log(this.register)
			console.log('Beres!');
			// this.router.navigateByUrl(');
		}
		else{
			console.log('data gagal disimpan');
		}
	}
}