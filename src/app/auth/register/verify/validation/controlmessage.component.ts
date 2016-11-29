import { Component, Input } 		from '@angular/core';
import { FormGroup, FormControl } 	from '@angular/forms';
import { ValidationServiceVerify } 	from './validationservice.component';


@Component({
	selector: 'control-messages',
	template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ControlMessagesVerify {
	Message: string;
	@Input() control:FormControl;

	constructor(){ }

	get errorMessage() {
		for(let propertyNomorHandphone in this.control.errors){
			if(this.control.errors.hasOwnProperty(propertyNomorHandphone) && this.control.touched){
				return ValidationServiceVerify.getValidationErrorVerify(propertyNomorHandphone,
				this.control.errors[propertyNomorHandphone]);
			}
		}

		return null;
	}
}