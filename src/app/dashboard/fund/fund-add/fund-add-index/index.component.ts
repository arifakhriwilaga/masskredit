import { Component } from '@angular/core';
import { Headers, Http, RequestOptions }	from '@angular/http';
import { Router }	from '@angular/router';

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
		private indexService : IndexService,
		private router:Router
	) {}

 	// access token
 	public access_token = {
	 	access_token : this.access_token
 	}

 	// objek for show data when request data
 	public acces_token = JSON.parse(localStorage.getItem("access_token"))
 	public funds:Fund[];
 	public current_page = null;

 	// paging
	public pages:any = []; 
 	public per_page = null;
 	public totalPages = null;
 	public limit = 10;
 	public page  = 1;
 	public currentPage:number;
 	public statusPaging:boolean;

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
		this.indexService.getFunds(this.dataListFund).then(dataResponse => {
			try {
				let message = dataResponse.meta.message;
	      let code = JSON.stringify(dataResponse.meta.code);
	      let data = dataResponse.data.fund;
	      let dataPages = dataResponse.data.paging;
	      
	      if(data.length == 0) {
						this.dataFundsNull = 1;
				
				} if(code.charAt(0) === '4') {
	        this.handleError(message);
	      
	      } if(code.charAt(0) === '2') {
	        this.handleSuccess(data,dataPages);
	      };
			} finally {
				this.statusDataFunds = 1;
			}
				
		});
	}

	handleError(message:any){
  if(message === 'unauthorized') {
      alert("Maaf akses token tidak terdaftar")            
      this.router.navigate(['/dashboard/sign-out']);
     }          
  }
  
  handleSuccess(data:any,pages:any){
  	this.delimiter(data);
    this.currentPage = pages.current_page;
    this.totalPages = pages.total/pages.per_page;
    
    for (var i = 1; i <= this.totalPages; i++) {
    	this.pages.push(i);
    }
  }

	delimiter(data:any) {
		try {
			for(let i = 0; i < data.length; i++){
				let funds = data[i]
				let amount = funds['amount'];
				let confirmDate = funds['confirm_date'];
				if(confirmDate === '') {
					funds['confirm_date'] = '-';
				}
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
				funds['amount'] = idr.concat(c);
			}
		} finally {
			this.funds = data;
		}
		
	}
		
	linkTo(id : any,status:number){
		// console.log(id)
		if(status === 0 && this.currentPage === 1) {
			return;
		
		} else if(status === -1 && this.currentPage === 1) {
			return;
		
		} else if(status === -2 && this.currentPage === this.totalPages) {
			return;
		
		} else if(status === -3 && this.currentPage === this.totalPages) {
			return;
		
		} else if(this.currentPage === id) {
			return;

		} else {
			this.dataListFund.page = id;
			this.indexService.getFunds(this.dataListFund).then(dataResponse => {
				try {
					let message = dataResponse.meta.message;
		      let code = JSON.stringify(dataResponse.meta.code);
		      let data = dataResponse.data.fund;
		      let dataPages = dataResponse.data.paging;

		      if(code.charAt(0) === '4') {
		        this.handleError(message);
		      } if(code.charAt(0) === '2') {
		      	this.currentPage = dataPages.current_page;
		        this.delimiter(data);
		      };
				} finally {
					console.log(this.currentPage,id)
					this.statusDataFunds = 1;
				}
					
			});
			
		}
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
