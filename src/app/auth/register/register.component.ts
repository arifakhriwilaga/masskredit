import { Component, Directive } 				from '@angular/core';
import { Step1RegisterComponent }   from './step1';
import { Step2RegisterComponent }   from './step2';
import { Step3RegisterComponent }   from './step3';
import { Step4RegisterComponent }   from './step4';

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: 'register.component.html',
  // directives: [Step1RegisterComponent, Step2RegisterComponent, Step3RegisterComponent]
})

// @Directive({ selector: '[step-1]'})
export class RegisterComponent { }