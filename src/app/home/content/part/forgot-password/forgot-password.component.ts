import { Component, OnChanges, Input, Output, EventEmitter } 	from '@angular/core';
import { Router } from '@angular/router';

import { ForgotPasswordService }	from './forgot-password.service';

import { Data } from './data';

declare var jQuery:any

@Component({
	selector: 'forgot-password',
	templateUrl: 'forgot-password.component.html',
})

export class ForgotPasswordComponent implements OnChanges{ 
	constructor(){ }

	ngOnInit(){
		jQuery('#ModalForm').modal({backdrop: 'static', keyboard: false});
	}

	ngOnChanges(){ }

	statusForm = 1;
	
	showLoader(data:any){
		this.statusForm = 0;
	}

	public otp = { };

	hideForm(data:any){
		this.statusForm = 2;
		this.otp = data;
	}

	@Output() statusModal = new EventEmitter<any>()
	hideModal(data:any){
		jQuery('#ModalForm').modal("toggle");
		this.statusModal.emit(data)
	}
}