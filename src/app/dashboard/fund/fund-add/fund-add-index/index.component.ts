import { Component } from '@angular/core';
import { Headers, Http, RequestOptions }	from '@angular/http';

import { Fund } from './fund';

import { IndexService } from './index.service'

declare var jQuery:any;

@Component({
	selector: 'index',
	templateUrl: 'index.component.html'
})


export class IndexComponent { 
	constructor (
		private http : Http,
		private indexService : IndexService
	) {}

	 // declare object url get list-fund
	private listfundUrl = 'https://masscredit-api.stagingapps.net/user/fund/get-list';
	private confirmfundUrl = 'https://masscredit-api.stagingapps.net/user/fund/confirm';
	
	// declare headers
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

 	// access token
 	public access_token = {
	 	access_token : JSON.parse(localStorage.getItem("access_token"))
 	}

 	// objek for show data when request data
 	public funds:Fund[];
 	public current_page = null;
 	public per_page = null;
 	public total = null;
	public array_total = []
	public total_pagination
 	public acces_token = JSON.parse(localStorage.getItem("access_token"))
 	public limit = 10;
 	public page  = 1;

 	public dataListFund = { 
 		access_token : this.acces_token,
 		page : this.page,
 		limit : this.limit
 	}

 	private dataFundsNull = 0;

 	public statusDataFunds = 0;

 	// objek investasi
	public data = {
		access_token: this.acces_token,
		fund_id: null,
  	struct_image: null,
  	confirm_date: null,	
	}

	ngOnInit(){
		this.getListFunds()
	}

	linkCreateFund(){
		this.indexService.toCreateAdd();
	}

	getListFunds(){
		this.indexService.getFunds(this.dataListFund).then(dataFunds => {
			try { 
				this.funds = dataFunds;
					// this.dataListFundWithdrawal = 1;
					// this.current_page	= current_page;
					// // this.per_page 		= per_page;
					// // this.total 			= total;
					// // console.log(response)
					// if(code == 200) {
					// 	var total_pagination = Math.ceil(total/this.limit) //round up
					// 	this.total_pagination = total_pagination
						
					// 	for (var i = 1; i <= total_pagination; i++) {
					// 		this.array_total.push(i)
					// 	}
					// }
				for(let i = 0; i < this.funds.length; i++){
					let amounts = this.funds[i]
					let amount = amounts['amount'];
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
					amounts['amount'] = idr.concat(c);

				}
			} finally {
				this.statusDataFunds = 1;
			}
		});
	}
	
	linkTo(id : any){
		// console.log(id)
		let data_get_list_fund = { 
	 		access_token : this.acces_token,
	 		page : id,
	 		limit : this.limit
	 	}

		this.http.post('https://masscredit-api.stagingapps.net/user/fund/get-list',data_get_list_fund, this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// for rr
				var kosong:null;
				var code 		= response.meta.code;
				var message 	= response.meta.message;
				var funds		= response.data.fund;
				var current_page= response.data.paging.current_page;
				var per_page 	= response.data.paging.per_page;
				var total		= response.data.paging.total;;
				this.funds 			= funds;
				this.current_page	= current_page;
				// this.per_page 		= per_page;
				// this.total 			= total;
				// console.log(this.current_page)
				if(code == 200) {
					// console.log("Success get list")
					// // var convert_string	 = String(total_pagination)
					// var convert_string	 = total_pagination.valueOf()
					// array_total 	 = JSON.parse("[" + convert_string +"]");
					
				}
				// console.log(code)
				// console.log('current page', this.current_page,'per page', this.per_page,'total',this.total)
				// if(code == 200) {
				// 	alert("Profile berhasil diupate")
				// 	// return this.router.navigateByUrl('/dashboard/profile')
				// }
				// else{
				// 	alert("Profile gagal diupdate")
				// }
			},(err:any) => {
        var error   = JSON.parse(err._body)
        var message = error.meta.message
        if(message == "unauthorized") {
          alert("Maaf session anda telah habis silahkan login kembali")
          // return this.router.navigateByUrl('/dashboard/sign-out')
          
        } 
      });
	}

	statusFormConfirm:number;
	showFormConfirm(id:number){
		this.statusFormConfirm = 1;
		this.fundId = id;
	}

	hideDetailConfirm(status:number){
		this.statusFormConfirm = status;
	}	

	statusDetailFund:number;
	fundId:number;
	showDetailFund(id:number){
		this.fundId = id;
		this.statusDetailFund = 1;
	}

	hideDetailFund(status:number){
		this.statusDetailFund = status;
	}
}
