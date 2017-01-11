import { Component, OnInit }								from '@angular/core';
import { CreateService }									from './create.service';
import { FormGroup, FormBuilder, Validators, FormControl } 	from '@angular/forms';
import { ValidationServiceInvestasi } 					   	from './validationservice.component';
import { Headers, Http, RequestOptions }	   				from '@angular/http';
import { Router }        					   				from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'fund-withdrawal',
	templateUrl: 'fund_withdrawal.component.html'
})

export class FundWithdrawalComponent {
	constructor() { }

	
}
