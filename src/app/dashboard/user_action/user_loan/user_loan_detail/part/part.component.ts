import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
	selector: 'part',
	template: '<loan-not-approved  [statusPart]="statusPart" [loanId]="loanId" [investId]="investId" (onHide)="onHide($event)" (statusInvestor1)="statusInvestor1($event)"></loan-not-approved>',
})

export class PartComponent{ 
	@Input() statusPart:string;
	@Input() loanId:string;
	@Input() investId:string;
	@Output() onHide2 = new EventEmitter<string>();
	onHide(status: string) {
    this.onHide2.emit(status);
  }

	@Output() statusInvestor = new EventEmitter<string>();
  statusInvestor1(status:any){
    this.statusInvestor.emit(status);
  }

}