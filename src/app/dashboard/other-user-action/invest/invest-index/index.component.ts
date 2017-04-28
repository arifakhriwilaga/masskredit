import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

import { Invest } from './invest';

import { IndexService } from './index.service'

declare var Offline:any;
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
    limit:999999
	}

	invest : Invest[];
	private dataListInvest = 0;
	private dataArrayNull = 0;
	private timer;
	ngOnInit(){
		this.timedCount();
	}

	private number = 0;
	timedCount(){
		var numberTwo = this.number += 1;
		// console.log(numberTwo)

		if (numberTwo == 130 && this.invest == undefined) {
        window.clearTimeout(this.timer);
        this.dataListInvest = -1;
        return false;
    }

		this.timer = setTimeout(() => {
			if (this.invest != undefined) {
				this.dataListInvest = 1;
        return false;
			}
				// console.log(this.invest)
				this.getListInvests()
		    this.timedCount();
    }, 200);  
	}

	handleError(message:any){
  if(message === 'unauthorized') {        
      this.router.navigate(['/dashboard/sign-out']);
     }          
  }
  
  handleSuccess(data:any){
  	try {
	  	this.invest = data.loans;

			if(data == null) {
				this.dataArrayNull = 1;
			}		
			for(let i = 0; i < this.invest.length; i++){
				let dataAmount = this.invest[i]
				let amount = dataAmount['amount'];
				let imageDefaultProfile = 'assets/img/default_profile.png';
				if(dataAmount['image_profile'] == '') {
					dataAmount['image_profile'] = imageDefaultProfile;
				}
				dataAmount['amount'] = this.delimiter(amount);
			}
  	} finally {
			this.dataListInvest = 1;  		
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
	getListInvests(){
		this.indexService.getListInvests(this.data).then(dataResponse => {
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

	linkCreateInvest(){
		this.indexService.toCreateInvest();
	}
}