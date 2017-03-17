import { Component } from '@angular/core';
import { Headers, Http, RequestOptions }	from '@angular/http';

import * as _ from 'underscore';

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
	 	access_token : this.access_token
 	}

 	// objek for show data when request data
 	public acces_token = JSON.parse(localStorage.getItem("access_token"))
 	public funds:Fund[];
 	public current_page = null;

 	// paging
	public pages:any = {}; 
 	public per_page = null;
 	public total = null;
 	public limit = 1;
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
				let paging = dataFunds.paging;
				let data = dataFunds.fund;
				this.handlePaging(paging);
				this.handleData(data);
				// console.log(dataFunds);
				// this.funds = dataFunds;
				// 	// this.dataListFundWithdrawal = 1;
				// 	// this.current_page	= current_page;
				// 	// // this.per_page 		= per_page;
				// 	// // this.total 			= total;
				// 	// // console.log(response)
				// 	// if(code == 200) {
				// 
				// 	// }
				// for(let i = 0; i < this.funds.length; i++){
				// 	let amounts = this.funds[i]
				// 	let amount = amounts['amount'];
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

				// 		} else {
				// 			c = b.substr(i-1,1) + c;
				// 		}
				// 	}
				// 	if (_minus) c = "-" + c ;
				// 	let idr = "Rp.";
				// 	amounts['amount'] = idr.concat(c);

				// }
			} finally {
				this.statusDataFunds = 1;
			}
		});
	}

	// calculate total pages
	handlePaging(paging:any){
		console.log(paging);
		let perPage = paging.per_page;
		let total = paging.total;
		let currentPage = paging.current_page;
		var totalPages = Math.ceil(total/this.limit) //round off
		console.log(totalPages)
    
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * this.limit;
    let endIndex = Math.min(startIndex + this.limit - 1, this.limit - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = _.range(startPage, endPage + 1);
    console.log(pages)

      this.pages = {
      	totalItems: total,
	      currentPage: currentPage,
	      pageSize: this.limit,
	      totalPages: totalPages,
	      startPage: startPage,
	      endPage: endPage,
	      startIndex: startIndex,
	      endIndex: endIndex,
	      pages: pages
	    }
	}

	handleData(data:any){

	}
	
	linkTo(id : any){
		console.log(id);
		// console.log(id)
		// let data_get_list_fund = { 
	 // 		access_token : this.acces_token,
	 // 		page : id,
	 // 		limit : this.limit
	 // 	}

		// this.http.post('https://masscredit-api.stagingapps.net/user/fund/get-list',data_get_list_fund, this.options)
		// 	.map(response => response.json())
		// 	.subscribe((response : any) => {
		// 		// for rr
		// 		var kosong:null;
		// 		var code 		= response.meta.code;
		// 		var message 	= response.meta.message;
		// 		var funds		= response.data.fund;
		// 		var current_page= response.data.paging.current_page;
		// 		var per_page 	= response.data.paging.per_page;
		// 		var total		= response.data.paging.total;;
		// 		this.funds 			= funds;
		// 		this.current_page	= current_page;
		// 		// this.per_page 		= per_page;
		// 		// this.total 			= total;
		// 		// console.log(this.current_page)
		// 		if(code == 200) {
		// 			// console.log("Success get list")
		// 			// // var convert_string	 = String(total_pagination)
		// 			// var convert_string	 = total_pagination.valueOf()
		// 			// array_total 	 = JSON.parse("[" + convert_string +"]");
					
		// 		}
		// 		// console.log(code)
		// 		// console.log('current page', this.current_page,'per page', this.per_page,'total',this.total)
		// 		// if(code == 200) {
		// 		// 	alert("Profile berhasil diupate")
		// 		// 	// return this.router.navigateByUrl('/dashboard/profile')
		// 		// }
		// 		// else{
		// 		// 	alert("Profile gagal diupdate")
		// 		// }
		// 	},(err:any) => {
  //       var error   = JSON.parse(err._body)
  //       var message = error.meta.message
  //       if(message == "unauthorized") {
  //         alert("Maaf session anda telah habis silahkan login kembali")
  //         // return this.router.navigateByUrl('/dashboard/sign-out')
          
  //       } 
  //     });
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
