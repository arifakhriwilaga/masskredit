import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

import { Loan } from './loan';

import { IndexService } from './index.service'

@Component({
	selector: 'index',
	templateUrl: 'index.component.html',
	providers: [IndexService]
})

export class IndexComponent implements OnInit { 
	constructor(private indexService:IndexService, private router:Router) { }
	
	private data = {
		access_token : JSON.parse(localStorage.getItem("access_token")),
		page:1,
    limit:10
	}

	loans : Loan[];
	private dataListLoan = 0;
	private dataArrayNull = 0;
	
	ngOnInit(){
		setTimeout(() => {this.getListInvests()},0.500);
	}

	getListInvests(){
		this.indexService.getListLoans(this.data).then(dataResponse => {
			let message = dataResponse.meta.message;
      let code = JSON.stringify(dataResponse.meta.code);
      let data = dataResponse.data;
      // console.log(data)
      if(code.charAt(0) === '4') {
        this.handleError(message);
      } if(code.charAt(0) === '2') {
        this.handleSuccess(data);
      };
    });
	}

	handleError(message:any){
  if(message === 'unauthorized') {        
      this.router.navigate(['/dashboard/sign-out']);
     }          
  }
  
  handleSuccess(data:any){
  	try {
	  	this.loans = data.investments;
			if(data == null) {
				this.dataArrayNull = 1;
			}		
			for(let i = 0; i < this.loans.length; i++){
				let dataAmount = this.loans[i]
				let amount = dataAmount['amount'];
				let imageDefaultProfile = 'assets/img/default_profile.png';
				if(dataAmount['image_profile'] == '') {
					dataAmount['image_profile'] = imageDefaultProfile;
				}
				dataAmount['amount'] = this.delimiter(amount);
			}
  	} finally {
			this.dataListLoan = 1;  		
  	}
  }

	 delimiter(data){
  	var _minus = false;
		var b:any = data.toString();
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
		return idr.concat(c);
  }

	linkCreateLoan(){
		this.indexService.toCreateLoan();
	}
}