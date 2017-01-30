import { Component, Input } 		  from '@angular/core';
import { FormGroup, FormControl } 	  from '@angular/forms';
import { ValidationServiceInvestasi } from './validationservice.component';


@Component({
	selector: 'control-messages',
	template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ControlMessagesCreateInvestasi {
	Message: string;
	@Input() control:FormControl;

	constructor(){ }

	get errorMessage() {
		for(let propertyName in this.control.errors){
			if(this.control.errors.hasOwnProperty(propertyName) && this.control.touched){
				return ValidationServiceInvestasi.getValidationErrorInvestasi(propertyName,
				this.control.errors[propertyName]);
			}
		}

		return null;
	}
}