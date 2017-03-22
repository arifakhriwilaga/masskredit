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

	// param url
	access_token = JSON.parse(localStorage.getItem("access_token"));

	dataInvestor = {
		access_token : this.access_token,
		investor_id : null,
		loan_id: null
	}

	dataListInstallment = {
		access_token : this.access_token,
		investor_id : null,
		loan_id: null
	}

	dataDetailInvestor = { };
	loaderDetailInvestor = 0;

	dataInvestAmount:string;

	dataPayment = [];

	dataScoring ={
		access_token: this.access_token,
		id_investor : null
	};

	imageRate25:number;
	imageRate50:number;
	imageRate75:number;
	imageRate100 = [];
	imageRate0 = [];

	ngOnInit(){
		let param = this.activatedRoute.params.subscribe( params => {
			let loanId = params['id'];
			let investorId = params['investorId'];
			if(loanId != null && investorId != null) {
				this.dataListInstallment.loan_id = loanId;
				this.dataListInstallment.investor_id = investorId;
				this.dataInvestor.investor_id = investorId;
				this.dataInvestor.loan_id = loanId;
				this.detailInstallment.dataLoan = loanId; // for payment
				this.detailInstallment.dataInvestor = investorId; // for payment
				if(this.dataInvestor.investor_id != null && this.dataInvestor.loan_id != null) {
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

	getDetailInvestor(){
		try{
			this.loanApprovedService.getDetailInvestor(this.dataInvestor).then(dataResponse => {
				let message = dataResponse.meta.message;
	      let code = JSON.stringify(dataResponse.meta.code);
	      let data = dataResponse.data;
	      // console.log(data)
	      this.dataScoring.id_investor = data.investor_id;
	      if(code.charAt(0) === '4') {
	        this.handleError(message);
	      } if(code.charAt(0) === '2') {
	        this.handleSuccess(data);
	      };
			})
		}finally{
			this.getListInstallment();
		}
	}

	handleError(message:any){
  	if(message === 'unauthorized') {
      alert("Maaf akses token tidak terdaftar")            
      this.router.navigate(['/dashboard/sign-out']);
    }          
  }
  
  handleSuccess(data:any){
		let imageDefault = 'assets/img/default_profile.png';
		if(data.investor_image == '') {
			data.investor_image = imageDefault;
		}

		let rate = [1,1.5,2,2.5,3,3.5,4,4.5,5];
		let avarage = Number(data.avg_reviews);
		// let avarage = 0;
		if(avarage === 0) {
			for (var arithmetic = 5; arithmetic >= 1; arithmetic--) {
				this.imageRate0.push(arithmetic);
			}
		} else {
			for(let i of rate) {
				if(i === avarage) {

					// let data = '3.25'; // for dummy
					let data = i.toString();
					let number = Number(data); // object if data rate number not decimal
					let maxRate = 5;
					
					// if(data.match(/^[\d]\.[\d+\d]{2}$/)) {
					if(data.match(/^[\d]\.\d$/)) {
						let number = Number(data.split('.')[0]);
						let numberNull = 4 - number;
						
						for (var arithmetic = 1; arithmetic <= numberNull; arithmetic++) {
							this.imageRate0.push(arithmetic);
						}
						for (var arithmetic = 1; arithmetic <= number; arithmetic++) {
							this.imageRate100.push(arithmetic)
						}
						
						if(data.match(/^[\d]\.5/)) { // condition if decimal
							this.imageRate50 = 1;
						} 

						// condition if rate change to 25


						// if(data.match(/^[\d]\.25/)) { // condition if decimal
						// 	this.imageRate25 = 1;
						
						// } else if(data.match(/^[\d]\.50/)) { // condition if decimal
						// 	this.imageRate50 = 1;

						// } else { // condition if decimal
						// 	this.imageRate75 = 1;
						// }
					
					} else {
						
						let numberNull = maxRate - number;
						for (var arithmetic = 1; arithmetic <= number; arithmetic++) {
							this.imageRate100.push(arithmetic)
						}

						for (var arithmetic = 1; arithmetic <= numberNull; arithmetic++) {
							this.imageRate0.push(arithmetic);
						}
					}
				}
			}
		}

		this.dataDetailInvestor = data;
		let amount = data.amount;
		this.delimiterSalary(amount)
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

	getListInstallment(){
		this.loanApprovedService.getListInstallment(this.dataListInstallment).then(dataResponse => {
			let message = dataResponse.meta.message;
      let code = JSON.stringify(dataResponse.meta.code);
      let data = dataResponse.data.history_payment;

			if(this.statusChanges == 1) {
				this.statusChanges = null;
			}

			try{
				for(let i = 0; i < data.length; i++){
					let dataPokok = data[i]
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
				try {
					for(let i = 0; i < data.length; i++){
						let dataPokok = data[i] 
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
						dataPokok['total_payment'] = idr.concat(c);
					} 
				} finally {
					try {
						this.dataPayment = data;
					} finally {
						this.loaderDetailInvestor = 1;	
					}
				}
			}
		})
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
