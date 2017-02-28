import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

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
		public  invest_id = ''; 

		public data = { };
		public dataSalary = { };
		public dataBorrowerAmount = { };

		public dataBorrower = [];
		private loaderDetailInvest = 0;
		public dataAmount = { }
		public dataPayment = [];
		public dataArrayNull = 0;

	ngOnInit(){
		// Objek for get id on route
		let param = this.activatedRoute.params.subscribe( params => {
			let id = params['id'];
			this.data_detail_invest.loan_id = id;
			this.data_list_borrower.invest_id = id;
	  });
		// API list borrower
		this.getListBorrower();
		// API list borrower
		this.getDetailMyInvest();
	}

	backFund(){
		this.router.navigateByUrl('/dashboard/fund')
	}

	public data_list_borrower = {
		access_token : this.access_token,
		invest_id : '',
	}
	listBorrowerUrl = 'https://masscredit-api.stagingapps.net/user/borrower/getlist';
	getListBorrower(){
		// API detail invest
    this.http.post(this.listBorrowerUrl,this.data_list_borrower,this.options)
    	.map(response => response.json())
			.subscribe((response : any) => {
				// alert(response.data.borrower)
				if(response.data.borrower == '') {
					this.dataArrayNull = 1;
				}
				this.dataBorrower = response.data.borrower;
				let code = response.meta.code
				for(let i = 0; i < this.dataBorrower.length; i++){
					let dataAmount = this.dataBorrower[i]
					let amount = dataAmount['loan_amount'];
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

	// objek for save data when after request detail
	public data_detail_invest = {
		access_token : this.access_token,
		loan_id : '',
	}
	detailInvestUrl = 'https://masscredit-api.stagingapps.net/user/loan/detail';
	getDetailMyInvest(){
		// API detail invest
    this.http.post(this.detailInvestUrl,this.data_detail_invest,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// console.log(response)
				// this.dataApprove.invest_id = response.data.id;
				this.data = response.data;
				let code = response.meta.code;
				let amount = response.data.amount;
				// condition make delimiter
				try {
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
				} finally {
					this.loaderDetailInvest = 1;
				}

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

	cancelDetailInvest(){
		this.router.navigateByUrl("/dashboard/user-action/user-invest");
	}

	public loaderBorrowerApproved = 0;

	showDetailBorrowerApproved(borrowerId:any,investId:any){
		this.router.navigate(['/dashboard/user-action/user-invest/detail/',investId,'loan-approved',borrowerId])	
	}

	public borrowerId:number;
	public investId:number;
	public statusPart:number;

	public dataDetailBorrower = {};
	showPart = 0;
	showDetailBorrowerNotApproved(borrowerId:any,investId:any){
		let partTrue = 1;
		this.statusPart = 1;
		this.showPart = partTrue;
		this.borrowerId = borrowerId;
		this.investId = investId;
	}

	onHide2(status: number) {
		this.showPart = status;
  }
}
