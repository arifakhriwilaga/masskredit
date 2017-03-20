import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { DetailComponent } from './../../detail.component';

declare var jQuery:any;

@Component({
	selector: 'calculation',
	templateUrl: 'calculation.component.html'
})

export class CalculationComponent implements OnInit{ 
	constructor(private detail:DetailComponent, private router:Router) { }
	
	ngOnInit(){
		jQuery('#loan_amount').mask('000000000000');
		jQuery('#FormSimulation').validate({
		  rules: {
		    jumlah: { required:true }
		  }
		});

		if(this.dataDetailInvest !== undefined) {
			this.dataCalculation.bunga = this.dataDetailInvest.interest;
			this.dataCalculation.tenor = this.dataDetailInvest.tenor;
		}
	}

	@Input() dataDetailInvest:any;

	listInvestUrl = '#/dashboard/other-user-action/invest';

	dataCalculation = {
  	jumlah: null,
    bunga: null,
    tenor: null
  }

@Output() amount = new EventEmitter();
  calculationInvest(){
		if(jQuery('#FormSimulation').valid()) {
			this.amount.emit(this.dataCalculation.jumlah);
		} else {
			alert("Data tidak valid");
		}
  }

	// cancelConfirmInvest(){
	// 	this.router.navigateByUrl("/dashboard/other-user-action/invest");
	// }

	// confirmInvest(){
	// 	if(jQuery("#confirmInvestForm").valid()) {
	// 		this.detail.dataDetailInvest = 3;
	// 		this.detail.postLoan();
	// 	}
	// 	else{
	// 		alert("Harap masukan password");
	// 	}
	// }
}