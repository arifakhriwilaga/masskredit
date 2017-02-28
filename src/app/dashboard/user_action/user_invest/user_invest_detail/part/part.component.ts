import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
	selector: 'part',
	template: '<loan-not-approved [incomingBorrowerId]="dataBorrowerId" [incomingInvestId]="dataInvestId"  (onHide)="onHide($event)"></loan-not-approved>',
})

export class PartComponent{ 
	@Input() dataBorrowerId:string;
	@Input() dataInvestId:string;
	@Output() statusInvestor = new EventEmitter<string>();
	@Output() onHide2 = new EventEmitter<string>();
	onHide(status: string) {
    this.onHide2.emit(status);
  }
}