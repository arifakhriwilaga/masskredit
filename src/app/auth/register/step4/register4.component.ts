import { Component } 				from '@angular/core';
import { RegisterService }	from './../register.service';
import { Step1RegisterComponent }	from './../step1/register1.component';
import { Step2RegisterComponent }	from './../step2';
import { Step3RegisterComponent }	from './../step3';

@Component({
	moduleId: module.id,
	selector: 'step4',
	templateUrl: 'register4.component.html'
})

export class Step4RegisterComponent {
	constructor(
		private registerService: RegisterService,
		private step1 : Step1RegisterComponent,
		private step2 : Step2RegisterComponent,
		private step3 : Step3RegisterComponent,

	) {	}
	// private step1  : Step1RegisterComponent,
	// 	private step2  : Step2RegisterComponent,
	// 	private step3  : Step3RegisterComponent,
	// private register = [this.step1, this.step2, this.step3];
	private registerFour = {
		ktp_depan 	 : '',
		ktp_belakang : '',
		foto	 	 : '',
	}


	private user = this.step1.sendDataStepOne;



	stepFinish(registerFour) {
		console.log(this.user);

		if(this.registerFour) {
			console.log(this.registerFour, "Data Beres")
			
		}
		else{
			console.log(this.registerFour)
			this.registerService.Step3();
	
		}
	}
	prevStepThree(registerFour){
		console.log(registerFour);
		this.registerService.Step3();
	}
}