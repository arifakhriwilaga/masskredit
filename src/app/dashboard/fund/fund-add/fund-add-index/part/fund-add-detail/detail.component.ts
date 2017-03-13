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
			this.dataDetailFund.fund_id = this.dataFundId
			if(this.dataDetailFund.fund_id != null) {
				this.getFund();
			}		
		}
	}
	
	fund:Fund;
	@Input() dataFundId : number;
	public dataDetailFund = {
		access_token : JSON.parse(localStorage.getItem("access_token")),
		fund_id : null,
	}
	public statusDataFund = 0;
	public dataAmount = { }

	public bank = { };

	getFund(){
		this.detailService.getFund(this.dataDetailFund).then(dataFund => {
			let idBank = dataFund.bank;
			if(idBank == 1) {
				this.bank = "BCA";
			}
			if(idBank == 2) {
				this.bank = "Mandiri";
			}
			if(idBank == 3) {
				this.bank = "Danamon";
			}
			if(idBank == 4) {
				this.bank = "Sinarmas";
			}
			if(idBank == 5) {
				this.bank = "BNI";
			}
			if(idBank == 6) {
				this.bank = "Niaga";
			}
			if(idBank == 'undefined') {
				this.bank = "";
			}
			if(idBank == -1) {
				this.bank = "Lainnya";
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