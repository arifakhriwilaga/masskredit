import { Component, OnInit } 						  	   from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } 					   from './validationservice.component';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router, ActivatedRoute }        					   from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'detail',
	templateUrl: 'detail.component.html',
})

export class DetailComponent {
	constructor(private http: Http, private router:Router, private activatedRoute :ActivatedRoute) { }

			
		// set header
		public headers = new Headers({ 
			 	'Content-Type': 'application/json',
			 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
		});
  	public options = new RequestOptions({ headers: this.headers });

  		// param url
		public access_token = JSON.parse(localStorage.getItem("access_token"));
		public  invest_id	    = ''; 
		

		// objek for save data when after request detail
		public data_detail_invest = {
			access_token : this.access_token,
			invest_id : '',
		}

		public data_history_payment = {
			access_token : this.access_token,
			invest_id : '',
			borrower_id : '',
			page:1,
      limit:10
		}

		public data = { };
		// public dataAmount = [];
		public dataSalary = { };
		public dataBorrowerAmount = { };

		public dataBorrower = [];
		private dataDetailListMyInvest = 0;
		public dataAmount = { }
		public dataPayment = [];

	ngOnInit(){
		// Objek for get id on route
		let param = this.activatedRoute.params.subscribe( params => {
			let id = params['id'];
			this.data_detail_invest.invest_id = id;
	  	this.data_history_payment.invest_id = id;
	  });
		// API list borrower
		this.getListBorrower();
		// API list borrower
		this.getDetailMyInvest();
		// // API list history payment
		// this.getHistoryPayment();
	}

	backFund(){
		this.router.navigateByUrl('/dashboard/fund')
	}

	getListBorrower(){
		// API detail invest
	    this.http.post('https://masscredit-api.stagingapps.net/user/borrower/getlist',this.data_detail_invest,this.options)
				.map(response => response.json())
				.subscribe((response : any) => {
					this.dataBorrower = response.data.borrower;
					for(let i = 0; i < this.dataBorrower.length; i++){
						let dataAmount = this.dataBorrower[i]
						let amount = dataAmount['loan_amount'];
						// console.log(amount)
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
						dataAmount['loan_amount'] = idr.concat(c);
					}
				});
	}

	getDetailMyInvest(){
		// API detail invest
	    this.http.post('https://masscredit-api.stagingapps.net/user/investment/detail',this.data_detail_invest,this.options)
				.map(response => response.json())
				.subscribe((response : any) => {
					this.data = response.data;
					this.dataDetailListMyInvest = 1;
					let amount = response.data.amount;
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
					this.dataAmount =  idr.concat(c);
				});	
	}

	cancelDetailInvest(){
		this.router.navigateByUrl("/dashboard/user-action/user-invest");
	}

	showForm(){
		jQuery("#formDetail").show();
	}

	public loaderBorrowerApproved = 0;
	public getDetailBorrower = {
		access_token : this.access_token,
		borrower_id : null
	}

	public dataDetailBorrower = {};

	showDetailBorrowerApproved(id:any){
		this.getDetailBorrower.borrower_id = id;
		jQuery('#myModal').modal({backdrop: 'static', keyboard: false});
		// API detail invest
	    this.http.post('https://masscredit-api.stagingapps.net/user/borrower/detail',this.getDetailBorrower,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// this.dataAmount.push(response.data.amount,response.data.borrower_amount);	
				this.dataDetailBorrower = response.data;
				this.dataSalary = response.data.amount
				this.dataBorrowerAmount = response.data.borrower_amount
				this.getHistoryPayment(id);
				this.delimiterSalary(this.dataSalary);
			});	
	}
	hideDetailBorrowerApproved(){
		jQuery('#myModal').modal('toggle');
		this.loaderBorrowerApproved = 0;
	}

	delimiterSalary(dataSalary:any){
		try{
			// condition make delimiter
			var _minus = false;
			var b:any = dataSalary.toString();
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
			this.dataSalary = idr.concat(c);
		}finally{
			this.delimiterBorrowerAmount(this.dataBorrowerAmount);
		}
	}

	delimiterBorrowerAmount(dataBorrowerAmount:any){
		try{
			// condition make delimiter
			var _minus = false;
			var b:any = dataBorrowerAmount.toString();
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
			this.dataBorrowerAmount = idr.concat(c);
		}finally{
			this.loaderBorrowerApproved = 1;
			return true;
		}
	}

	getHistoryPayment(id:any){
		this.data_history_payment.borrower_id = id;
		// API history payment
    this.http.post('https://masscredit-api.stagingapps.net/user/payment-history/get-list',this.data_history_payment,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				this.dataPayment = response.data.history_payment;
			});
	}
}
