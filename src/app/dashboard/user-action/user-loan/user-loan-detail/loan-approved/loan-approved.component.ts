import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationServiceInvestasi } from './validationservice.component';
import { dataDetailInvestor } from './loan-approved';
import { LoanApprovedService } from './loan-approved.service';

declare var jQuery:any;

@Component({
	selector: 'loan-approved',
	templateUrl: 'loan-approved.html',
})

export class LoanApprovedComponent implements OnInit{
	constructor(
		private http: Http, 
		private router:Router, 
		private activatedRoute:ActivatedRoute,
		private loanApprovedService:LoanApprovedService
	) { }

	// set header
	headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});

	options = new RequestOptions({ headers: this.headers });

	// param url
	access_token = JSON.parse(localStorage.getItem("access_token"));

	data_investor = {
		access_token : this.access_token,
		investor_id : null,
		loan_id: null
	}
	data_list_installment = {
		access_token : this.access_token,
		investor_id : null,
		loan_id: null
	}

	dataDetailInvestor = { };
	loaderDetailInvestor = 0;

	dataInvestAmount:string;

	dataPayment = [];

	ngOnInit(){
		let param = this.activatedRoute.params.subscribe( params => {
			let loanId = params['id'];
			let investorId = params['investorId'];
			if(loanId != null && investorId != null) {
				this.data_list_installment.loan_id = loanId;
				this.data_list_installment.investor_id = investorId;
				this.data_investor.investor_id = investorId;
				this.data_investor.loan_id = loanId;
				this.detailInstallment.dataLoan = loanId; // for payment
				this.detailInstallment.dataInvestor = investorId; // for payment
				if(this.data_investor.investor_id != null && this.data_investor.loan_id != null) {
					this.getDetailInvestor();
				}
			}
		});
	}

	statusChanges:number;
	ngDoCheck(){
		if(this.statusChanges == 1) {
			this.getListInstallment();
		}
	}

	statusInvestor1(status:number){
		this.statusChanges = status;
	}

	detailInvestorUrl = 'https://masscredit-api.stagingapps.net/user/investor/detail';
	// getDetailInvestor(): void{
	// 	this.loanApprovedService.getDetailInvestor(this.data_investor)
	// 	.then(dataDetailInvestor => {
	// 		this.dataDetailInvestor = dataDetailInvestor
	// 		this.delimiterSalary(dataDetailInvestor.amount)
	// 	});
	// }
	// back up ori
	getDetailInvestor(){
		try{
		 	this.http.post(this.detailInvestorUrl,this.data_investor,this.options)
				.map(response => response.json())
				.subscribe((response : any) => {
					let imageDefault = 'assets/img/default_profile.png';
					if(response.data.investor_image == '') {
						response.data.investor_image = imageDefault;
					}
					this.dataDetailInvestor = response.data;
					this.loaderDetailInvestor = 1;
					// this.dataApprove.invest_id = response.data.invest_id;
					let amount = response.data.amount;
					this.delimiterSalary(amount)
				
				},(err : any) => {
					var error   = JSON.parse(err._body)
	        var code = error.meta.code
	        var message = error.meta.message
	        console.log(error);
	          // if(message == "Password salah!") {
	          //   alert("Password salah!")              
	          // }if(message == "Verifikasi salah.") {
	          //   alert("Verifikasi salah.")              
	          // }  
	      });	
		}finally{
			this.getListInstallment();
		}
	}

	delimiterSalary(amount:any){
		try{
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
			this.dataInvestAmount = idr.concat(c);
		}finally{
			this.getListInstallment();
		}
	}

	listInstallmentUrl = 'https://masscredit-api.stagingapps.net/user/loan/payment-history/get-list';
	getListInstallment(){
	 	this.http.post(this.listInstallmentUrl,this.data_list_installment,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				this.dataPayment = response.data.history_payment;
				if(this.statusChanges == 1) {
					this.statusChanges = null;
				}
				try{
					for(let i = 0; i < this.dataPayment.length; i++){
						let dataPokok = this.dataPayment[i]
						let pokok = dataPokok['pokok'];
						// condition make delimiter
						var _minus = false;
						var b:any = pokok.toString();
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
						dataPokok['pokok'] = idr.concat(c)
					};
					} finally {
						for(let i = 0; i < this.dataPayment.length; i++){
							let dataPokok = this.dataPayment[i] 
							let pokok = dataPokok['total_payment'];
							// condition make delimiter
							var _minus = false;
							var b:any = pokok.toString();
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
							dataPokok['total_payment'] = idr.concat(c)
							this.loaderDetailInvestor = 1;
						}
					}
			},(err : any) => {
				var error   = JSON.parse(err._body)
        var code = error.meta.code
        var message = error.meta.message
        console.log(error);
          // if(message == "Password salah!") {
          //   alert("Password salah!")              
          // }if(message == "Verifikasi salah.") {
          //   alert("Verifikasi salah.")              
          // }  
      });	
	}

	statusShowForm:number;
	showDetailInstallment:number;
	detailInstallment = {
		dataInstallment : { },
		dataLoan : null,
		dataInvestor : null,
	};

	showNotPaidForm(id:any){
		for (let dataInstallment of this.dataPayment) {
			if(dataInstallment.history_payment_id == id) {
				this.detailInstallment.dataInstallment = dataInstallment;
			}
		}
		this.statusShowForm = 0;
		this.showDetailInstallment = 1;
	}

	showPaidForm(id:any){
		for (let dataInstallment of this.dataPayment) {
			if(dataInstallment.history_payment_id == id) {
				this.detailInstallment.dataInstallment = dataInstallment;
			}
		}
		this.statusShowForm = 1;
		this.showDetailInstallment = 1;
	}

	onHide(status: number) {
		this.showDetailInstallment = status
  }


  scoringForm:number;
  hideForm(status:number) {
  	this.scoringForm = status;
  }

  showScoringForm(){
  	this.scoringForm = 1;
  }
}
