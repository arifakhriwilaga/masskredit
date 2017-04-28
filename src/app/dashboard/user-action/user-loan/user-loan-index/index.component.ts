import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Observable';

import { Loans } from './invest';

import { IndexService } from './index.service'

@Component({
	selector: 'index',
	templateUrl: 'index.component.html'
})


export class IndexComponent { 
	constructor(
		private indexService:IndexService,
		private router:Router
	) { }
	
	private data = {
		access_token : JSON.parse(localStorage.getItem("access_token")),
		page:1,
    limit:999999
	}

	private loans:Loans[];
	private statusInvests = 0;
	private dataInvestsNull = 0;

	ngOnInit(){
		this.getListInvest();
	}

	getListInvest(){
		this.indexService.getListInvests(this.data).then(dataResponse => {
				if(dataResponse.data.length == 0) {
					this.dataInvestsNull = 1;
				}
				let message = dataResponse.meta.message;
	      let code = JSON.stringify(dataResponse.meta.code);
	      let data = dataResponse.data.loans;

				if(code.charAt(0) === '4') {
	        this.handleError(message);
	      } if(code.charAt(0) === '2') {
	        this.handleSuccess(data);
	      };
		});
	}

	handleError(message:any){
  if(message === 'unauthorized') {
      alert("Maaf akses token tidak terdaftar")            
      this.router.navigate(['/dashboard/sign-out']);
     }          
  }
  
  handleSuccess(data:any){
		try {
			for(let i = 0; i < data.length; i++){
				let dataLoans = data[i]
				let type_invest = dataLoans['type_invest'];
				let loan_category = dataLoans['loan_category'];
				if(type_invest == "") {
					dataLoans['type_invest'] = "-";
				}if(loan_category == "") {
					dataLoans['loan_category'] = "-";
				}
				let imageDefault = 'assets/img/default_image.jpg';
				if(dataLoans['image_loan'] == '') {
					dataLoans['image_loan'] = imageDefault;
				}
				let amount = dataLoans['amount'];
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
				dataLoans['amount'] = idr.concat(c);
			}
	    this.loans = data;
		} finally {
			this.statusInvests = 1;
		}
  }

	detailAddLoan(loanId:number){		
		this.indexService.detailAddLoan(loanId);
	}

	detailGiveLoan(loanId:number,investorId:number){
		this.indexService.detailGiveLoan(loanId,investorId);
	}

}