import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Fund } from './fund';

import { DetailService } from './detail.service';

declare var jQuery:any;

@Component({
	selector: 'detail',
	templateUrl: 'detail.component.html',
	providers: [DetailService]
})

export class DetailComponent implements OnInit{ 
	constructor (private detailService : DetailService) { }
	
	ngOnInit(){
		jQuery('#FormDetail').modal({backdrop: 'static', keyboard: false});
		if(this.dataFundId != null) {
			this.dataDetailFund.withdrawal_id = this.dataFundId
			if(this.dataDetailFund.withdrawal_id != null) {
				this.getFund();
			}		
		}
	}
	
	fund:Fund;
	@Input() dataFundId : number;
	public dataDetailFund = {
		access_token : JSON.parse(localStorage.getItem("access_token")),
		withdrawal_id : null,
	}
	public statusDataFund = 0;
	public dataAmount = { }

	public bank = { };

	getFund(){
		this.detailService.getFund(this.dataDetailFund).then(dataFund => {
				
				let bank_name = dataFund.bank;
				
				if(bank_name == 1) {
					this.bank = "BCA";
				}
				if(bank_name == 2) {
					this.bank = "Mandiri";
				}
				if(bank_name == 3) {
					this.bank = "Danamon";
				}
				if(bank_name == 4) {
					this.bank = "Sinarmas";
				}
				if(bank_name == 5) {
					this.bank = "BNI";
				}
				if(bank_name == 6) {
					this.bank = "Niaga";
				}
				if(bank_name == 'undefined') {
					this.bank = "";
				}

				this.delimiter(dataFund.amount);
				this.fund = dataFund;
			});
	}

	delimiter(amount:any){
		try{
			var _minus = false;
			var b:any = amount.toString();
			if (b<0) _minus = true;
				b=b.replace(".","");
				b=b.replace("-","");
				let c = "";
				let panjang = b.length;
				let j = 0;
			for (let i = panjang; i > 0; i--){
				j = j + 1;
				if (((j % 3) == 1) && (j != 1)){
					c = b.substr(i-1,1) + "." + c;

				} else {
					c = b.substr(i-1,1) + c;
				}
			}
			if (_minus) c = "-" + c ;
			let idr = "Rp.";
			this.dataAmount = idr.concat(c);

		}finally{
			this.statusDataFund = 1;
		}
	}

	@Output() hideFormDetail = new EventEmitter<number>();
	hideDetailFund(){
		jQuery('#FormDetail').modal("toggle");
		this.hideFormDetail.emit(0);
	}

}