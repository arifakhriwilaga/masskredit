import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } from './validationservice.component';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'loan-approved',
	templateUrl: 'loan_approved.html',
})

export class LoanApprovedComponent {
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

	public data = { };
	public loaderDetailBorrower = 0;

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
					this.getListPayment();
				}
			}
		});	
	}

	dataBorrower = {
		access_token : this.access_token,
		borrower_id : null,
		invest_id : null
	}

	backIndexInvest(){
		this.router.navigateByUrl('/dashboard/user-action/user-invest/detail/', this.data_detail_invest.invest_id)
	}

	public dataDetailBorrower = {};

	private getDetailBorrowerUrl = 'https://masscredit-api.stagingapps.net/user/borrower/detail';
	getDetailBorrower(){
    this.http.post(this.getDetailBorrowerUrl,this.dataBorrower,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			let code = response.meta.code
				this.dataDetailBorrower = response.data;
				this.dataSalary = response.data.amount
				this.dataBorrowerAmount = response.data.borrower_amount
				this.delimiterSalary(this.dataSalary);
		},(err:any) => {
			var error   = JSON.parse(err._body)
			var message = error.meta.message
			var code = error.meta.code
			if(message == "unauthorized") {
				alert("Maaf session anda telah habis silahkan login kembali")
				return this.router.navigateByUrl('/dashboard/sign-out')					
			}
		});
	}

	public dataSalary = { };
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
			this.dataSalary = idr.concat(c);
		}finally{
			this.loaderDetailBorrower = 1;
		}
	}

	private listPaymentUrl = 'https://masscredit-api.stagingapps.net/user/payment-history/get-list';

	dataListPayment = {
		access_token : this.access_token,
		invest_id : '',
		borrower_id : '',
		page:1,
    limit:10
	}

	dataPayment = []
	getListPayment(){
    this.http.post(this.listPaymentUrl,this.dataListPayment,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				let code = response.meta.code;
				this.dataPayment = response.data.history_payment;
			},(err:any) => {
				var error   = JSON.parse(err._body)
				var message = error.meta.message
				var code = error.meta.code
				if(message == "unauthorized") {
					alert("Maaf session anda telah habis silahkan login kembali")
					return this.router.navigateByUrl('/dashboard/sign-out')					
				}
			});
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

}
