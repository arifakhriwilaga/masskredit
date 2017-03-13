import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Invest } from './invest';

import { IndexService } from './index.service'

@Component({
	selector: 'index',
	templateUrl: 'index.component.html'
})


export class IndexComponent { 
	constructor(private indexService:IndexService) { }
	
	private data = {
		access_token : JSON.parse(localStorage.getItem("access_token")),
		page:1,
    limit:10
	}

	private invests:Invest[];
	private statusInvests = 0;
	private dataInvestsNull = 0;

	ngOnInit(){
		this.getListInvest();
	}

	getListInvest(){
		this.indexService.getListInvests(this.data).then(dataInvests => {
			try {
				if(dataInvests.length == 0) {
					this.dataInvestsNull = 1;
				}
									
				for(let i = 0; i < dataInvests.length; i++){
					let data = dataInvests[i]
					let type_invest = data['type_invest'];
					let loan_category = data['loan_category'];
					if(type_invest == "") {
						data['type_invest'] = "-";
					}if(loan_category == "") {
						data['loan_category'] = "-";
					}
					let imageDefault = 'assets/img/default_image.jpg';
					if(data['image_invest'] == '') {
						data['image_invest'] = imageDefault;
					}
					let amount = data['amount'];
					// condition make delimiter
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
							// console.log(c)
						} else {
							c = b.substr(i-1,1) + c;
						}
					}
					if (_minus) c = "-" + c ;
					let idr = "Rp.";
					data['amount'] = idr.concat(c);
				}
			} finally {
				this.invests = dataInvests;
				this.statusInvests = 1;
			}
		});
	}

	detailAddInvest(investId:number){
		this.indexService.detailAddInvest(investId);
	}

	detailGiveInvest(investId:number,borrowerId:number){
		this.indexService.detailGiveInvest(investId,borrowerId);
	}

}