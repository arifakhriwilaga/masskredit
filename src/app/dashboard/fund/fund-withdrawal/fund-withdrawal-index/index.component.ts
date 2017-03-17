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

	funds:Fund[];
 	statusFundsWithdrawal = 0;
	// headers
	public headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

 	public options = new RequestOptions({ headers: this.headers });

 	// access token
 	public access_token = {
	 	access_token : JSON.parse(localStorage.getItem("access_token"))
 	}

 	// objek for show data when request data
 	public withdrawals = []
 	public current_page = null;
 	public per_page 	 = null;
 	public total 		 = null;
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


	ngOnInit(){
		this.getListFund();
		// this.http.post('https://masscredit-api.stagingapps.net/user/withdrawal/get-list', this.data_get_list_fund, this.options)
		// 	.map(response => response.json())
		// 	.subscribe(
		// 		(response : any) => {					
		// 			if(response.data.withdrawal == '') {
		// 				this.dataArrayNull = 1;
		// 			}	
		// 			var kosong:null;
		// 			var code 		= response.meta.code;
		// 			var message 	= response.meta.message;
		// 			var withdrawal	= response.data.withdrawal;
		// 			var current_page= response.data.paging.current_page;
		// 			var per_page 	= response.data.paging.per_page;
		// 			var total		= response.data.paging.total;
		// 			this.withdrawals = withdrawal;
					// for(let i = 0; i < this.withdrawals.length; i++){
					// 	let dataAmount = this.withdrawals[i]
					// 	let amount = dataAmount['amount'];
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
					// 	dataAmount['amount'] = idr.concat(c);
					// 	// this.collateral = 1;
					// }
					
		// 			this.dataListFundWithdrawal = 1;
		// 			this.current_page	= current_page;
		// 			// this.per_page 		= per_page;
		// 			// this.total 			= total;
		// 			// console.log(response)
		// 			if(code == 200) {
		// 				var total_pagination = Math.ceil(total/this.limit) //round up
		// 				this.total_pagination = total_pagination
						
		// 				for (var i = 1; i <= total_pagination; i++) {
		// 					this.array_total.push(i)
		// 				}
		// 			}
		// 			// console.log(code)
		// 			// console.log('current page', this.current_page,'per page', this.per_page,'total',this.total)
		// 			// if(code == 200) {
		// 			// 	alert("Profile berhasil diupate")
		// 			// 	// return this.router.navigateByUrl('/dashboard/profile')
		// 			// }
		// 			// else{
		// 			// 	alert("Profile gagal diupdate")
		// 			// }
		// 		},
		// 		(err:any) => {
		//             var error   = JSON.parse(err._body)
		//             var message = error.meta.message
		//               if(message == "unauthorized") {
		//                 alert("Maaf session anda telah habis silahkan login kembali")
		//                 return this.router.navigateByUrl('/dashboard/sign-out')
		                
		//               } 
		//         }
		// 	);
	}

	getListFund(){ 
		this.indexService.getFunds(this.dataListFund)
			.then(dataFunds => {
				try {
					if(dataFunds.length == 0) {
						this.dataFundsNull = 1;
					}	
					this.funds = dataFunds;
					// this.dataListFundWithdrawal = 1;
					// this.current_page	= current_page;
					// // this.per_page 		= per_page;
					// // this.total 			= total;
					// // console.log(response)
					// var total_pagination = Math.ceil(total/this.limit) //round up
					// this.total_pagination = total_pagination
					
					// for (var i = 1; i <= total_pagination; i++) {
					// 	this.array_total.push(i)
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
					this.statusFundsWithdrawal = 1;
				}
			});
	}

	linkFundWithdrawal(){
		this.indexService.toCreateWithdrawal();
	}

	linkTo(id : any){
		// console.log(id)
		let page = id;

		this.http.get('https://masscredit-api.stagingapps.net/user/fund/get-list/' + this.acces_token + '/funds.json?limit=' + this.limit + '&page=' + page, this.options)
					.map(response => response.json())
					.subscribe(
						(response : any) => {

							if(response.data.withdrawal == '') {
								this.dataFundsNull = 1;
							}	
							var kosong:null;
							var code 		= response.meta.code;
							var message 	= response.meta.message;
							var withdrawal		= response.data.withdrawal;
							var current_page= response.data.paging.current_page;
							var per_page 	= response.data.paging.per_page;
							var total		= response.data.paging.total;;
							this.withdrawals 			= withdrawal;
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
						},
						(err:any) => {
				            var error   = JSON.parse(err._body)
				            var message = error.meta.message
				              if(message == "unauthorized") {
				                alert("Maaf session anda telah habis silahkan login kembali")
				                // return this.router.navigateByUrl('/dashboard/sign-out')
				                
				              } 
				        }
					);
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