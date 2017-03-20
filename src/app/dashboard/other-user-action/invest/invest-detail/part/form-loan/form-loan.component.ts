import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import {CORE_DIRECTIVES, ngClass, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';
declare var jQuery:any;

@Component({
	selector: 'form-loan',
	templateUrl: 'form-loan.component.html'
})

export class FormLoanComponent implements OnInit{ 
	constructor(private router:Router) { }
	// private invest = this.detail.loan;

	ngOnInit(){
		if(this.dataFormLoan !== undefined) {
			this.dataLoan.access_token = this.dataFormLoan.access_token;
			this.dataLoan.invest_id = this.dataFormLoan.invest_id;
			this.dataLoan.loan_amount = this.dataAmount;
		}
		// console.log(this.isOn.)
	}

	ngOnChanges(){
		// if(this.simulation !== { }) {
		// 	// code...
		// }
	}

	@Input() dataFormLoan:any;
	@Input() dataAmount:number;
	public dataLoan = {
		access_token: null,
		invest_id: null,
		loan_amount : null,
		password: null
	}

	simulation = {
		nominal : null,
    pokok: null,
    bunga: null,
    cicilan_perbulan: null,
    denda: null,
    sucess_fee: null
	}

	listInvestUrl = '#/dashboard/other-user-action/invest';

	// cancelConfirmInvest(){
	// 	this.router.navigateByUrl("/dashboard/other-user-action/invest");
	// }

	createLoan(){
		if(jQuery("#FormSimulation").valid()) {
			this.dataLoan.loan_amount = this.dataAmount;
			console.log(this.dataLoan);
		}
		else{
			alert("Data tidak valid!");
		}
	}

	dataIsOn = [
    { value: 1 },
    { value: 0 },
  ];

	isOn = 0;
	agreement(){

	}
}