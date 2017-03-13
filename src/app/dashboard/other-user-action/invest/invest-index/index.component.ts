import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Invest } from './invest';

import { IndexService } from './index.service'

@Component({
	selector: 'index',
	templateUrl: 'index.component.html',
	providers: [IndexService]
})

export class IndexComponent implements OnInit { 
	constructor(private indexService:IndexService) { }
	
	private data = {
		access_token : JSON.parse(localStorage.getItem("access_token")),
		page:1,
    limit:10
	}

	invest : Invest[];
	private dataListInvest = 0;
	private dataArrayNull = 0;

	ngOnInit(){
		setTimeout(() => {this.getListInvests()},0.500);
	}

	getListInvests(){
		this.indexService.getListInvests(this.data)
    .then(dataInvests => {
    	this.invest = dataInvests;

			if(dataInvests == null) {
				this.dataArrayNull = 1;
			}		
			for(let i = 0; i < this.invest.length; i++){
				let dataAmount = this.invest[i]
				let amount = dataAmount['amount'];
				let imageDefaultProfile = 'assets/img/default_profile.png';
				if(dataAmount['image_profile'] == '') {
					dataAmount['image_profile'] = imageDefaultProfile;
				}
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

					} else {
						c = b.substr(i-1,1) + c;
					}
				}
				if (_minus) c = "-" + c ;
				let idr = "Rp.";
				dataAmount['amount'] = idr.concat(c);
			}
				this.dataListInvest = 1;
    });
	}

	linkCreateInvest(){
		this.indexService.toCreateInvest();
	}
}