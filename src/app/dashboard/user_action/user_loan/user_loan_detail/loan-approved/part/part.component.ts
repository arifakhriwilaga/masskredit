import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';

@Component({
	selector: 'part',
	template: `
		<not-paid *ngIf="dataStatusShowForm == 0" [dataDetailInstallment]="dataDetailInstallment" (onHide)="onHide($event)"></not-paid>
		<be-paid *ngIf="dataStatusShowForm == 1" [dataDetailInstallment]="dataDetailInstallment" (onHide)="onHide($event)"></be-paid>
	`,
})

export class PartComponent{ 
	@Input() dataStatusShowForm:number;
	@Input() dataDetailInstallment = {
		dataInstallment : { },
		dataLoan : null,
		dataInvestor : null,
	};

	@Output() onHide2 = new EventEmitter<number>();
	onHide(status: number) {
    this.onHide2.emit(status);
  }
}