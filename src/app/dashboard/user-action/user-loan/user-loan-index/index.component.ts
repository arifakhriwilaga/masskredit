import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Loans } from './invest';

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

	private loans:Loans[];
	private statusInvests = 0;
	private dataInvestsNull = 0;

	ngOnInit(){
		this.getListInvest();
	}

	getListInvest(){
		this.indexService.getListInvests(this.data).then(dataLoans => {
			try {
				if(dataLoans.length == 0) {
					this.dataInvestsNull = 1;
				}
									
				console.log(dataLoans);
				// for(let i = 0; i < dataLoans.length; i++){
				// 	let data = dataLoans[i]
				// 	let type_invest = data['type_invest'];
				// 	let loan_category = data['loan_category'];
				// 	if(type_invest == "") {
				// 		data['type_invest'] = "-";
				// 	}if(loan_category == "") {
				// 		data['loan_category'] = "-";
				// 	}
				// 	let imageDefault = 'assets/img/default_image.jpg';
				// 	if(data['image_invest'] == '') {
				// 		data['image_invest'] = imageDefault;
				// 	}
				// 	let amount = data['amount'];
				// 	// condition make delimiter
				// 	var _minus = false;
				// 	var b:any = amount.toString();
				// 	if (b<0) _minus = true;
				// 		b=b.replace(".","");
				// 		b=b.replace("-","");
				// 		let c = "";
				// 		let panjang = b.length;
				// 		let j = 0;
				// 	for (let i = panjang; i > 0; i--){
				// 		j = j + 1;
				// 		if (((j % 3) == 1) && (j != 1)){
				// 			c = b.substr(i-1,1) + "." + c;
				// 			// console.log(c)
				// 		} else {
				// 			c = b.substr(i-1,1) + c;
				// 		}
				// 	}
				// 	if (_minus) c = "-" + c ;
				// 	let idr = "Rp.";
				// 	data['amount'] = idr.concat(c);
				// }
			} finally {
				this.loans = dataLoans;
				this.statusInvests = 1;
			}
		});
	}

	detailAddLoan(loanId:number){		
		this.indexService.detailAddLoan(loanId);
	}

	detailGiveLoan(loanId:number,investorId:number){
		this.indexService.detailGiveLoan(loanId,investorId);
	}

}