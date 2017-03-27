import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { LoanApprovedService } from './loan_approved.service';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'loan-approved',
	templateUrl: 'loan_approved.html',
	providers: [ LoanApprovedService]
})

export class LoanApprovedComponent {
	constructor(
		private http: Http, 
		private router:Router, 
		private activatedRoute:ActivatedRoute,
		private loanApprovedService:LoanApprovedService
	) { }

			
	ngOnInit(){
		let param = this.activatedRoute.params.subscribe( params => {
			let investId = params['id'];
			let borrowerId = params['borrowerId'];
			if(investId != null && borrowerId != null) {
				this.dataBorrower.invest_id = investId;
				this.dataBorrower.borrower_id = borrowerId;
				this.dataListPayment.invest_id = investId;
				this.dataListPayment.borrower_id = borrowerId;
				if(this.dataBorrower.invest_id != null && this.dataBorrower.borrower_id != null) {
					this.getDetailBorrower();
				}
			}
		});	
	}
	
	public access_token = JSON.parse(localStorage.getItem("access_token"));

	// objek for save data when after request detail
	public data_detail_invest = {
		access_token : this.access_token,
		invest_id : '',
	}

	dataBorrower = {
		access_token : this.access_token,
		borrower_id : null,
		invest_id : null
	}

	public data = { };
	public loaderDetailBorrower = 0;

	imageRate25:number;
	imageRate50:number;
	imageRate75:number;
	imageRate100 = [];
	imageRate0 = [];

	public dataDetailBorrower = {};

  dataScoring ={
		access_token: this.access_token,
		borrower_id : null
	};

	getDetailBorrower(){
		this.loanApprovedService.getDetailBorrower(this.dataBorrower).then(dataResponse => {
			let message = dataResponse.meta.message;
      let code = JSON.stringify(dataResponse.meta.code);
      let data = dataResponse.data;
      // console.log(data)
      this.dataScoring.borrower_id = data.borrower_id;
      if(code.charAt(0) === '4') {
        this.handleError(message);
      } if(code.charAt(0) === '2') {
        this.handleSuccess(data);
      };
		})
	}

	handleError(message:any){
  	if(message === 'unauthorized') {          
      this.router.navigate(['/dashboard/sign-out']);
    }          
  }
  
  handleSuccess(data:any){
		let imageDefault = 'assets/img/default_profile.png';
		if(data.borrower_image == '') {
			data.borrower_image = imageDefault;
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

		this.dataDetailBorrower = data;
		let amount = data.borrower_amount;
		this.delimiterSalary(amount)
  }

	public dataBorrowerAmount = { };


	delimiterSalary(dataSalary:any){
		try{
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
			this.dataBorrowerAmount = idr.concat(c);
		}finally{
			this.getListPayment();
		}
	}

	dataArrayNull:number; // if response listPayment === null

	dataListPayment = {
		access_token : this.access_token,
		invest_id : '',
		borrower_id : '',
		page:1,
    limit:10
	}

	dataPayment = []
	getListPayment(){
    this.loanApprovedService.getListPayment(this.dataListPayment).then(dataResponse => {
			let message = dataResponse.meta.message;
      let code = JSON.stringify(dataResponse.meta.code);
      let data = dataResponse.data.history_payment;
      
      if(data.length === 0) {
      	this.dataArrayNull = 1;
      	this.loaderDetailBorrower = 1;
      } else {
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
						console.log(this.dataPayment)
						try {
							this.dataPayment = data;
						} finally {
							this.loaderDetailBorrower = 1;	
						}
					}
				}
      }
		})
	}

	showDetailPayment:number;
	detailPayment:any;

	showNotPaidForm(id:any){
		for (let dataPayment of this.dataPayment) {
			if(dataPayment.history_payment_id == id) {
				this.detailPayment = dataPayment;
			}
		}
		this.showDetailPayment = 1;
	}

	showPaidForm(id:any){
		for (let dataPayment of this.dataPayment) {
			if(dataPayment.history_payment_id == id) {
				this.detailPayment = dataPayment;
			}
		}
		this.showDetailPayment = 1;
	}

	onHide(status: number) {
		this.showDetailPayment = status
  }

  scoringForm:number;
  hideForm(status:number) {
  	this.scoringForm = status;
  }

  showScoringForm(){
  	this.scoringForm = 1;
  }
}
