import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

declare var jQuery:any;

@Component({
	selector: 'form-detail',
	templateUrl: 'form-detail.component.html'
})

export class FormDetailLoanComponent implements OnInit{ 
	constructor(private router:Router) { }
	
	ngOnInit(){ }

	@Input() dataDetailInvest:any;
	@Input() dataAmount:string;
	@Input() dataRestAmount:string;
}