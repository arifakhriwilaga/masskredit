import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } from './validationservice.component';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from './detail.service';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'detail',
	templateUrl: 'detail.component.html',
	providers: [DetailService]
})

export class DetailComponent {

	constructor(
		private http: Http, 
		private router:Router, 
		private activatedRoute :ActivatedRoute,
		private detailService:DetailService
	) {	
		detailService.Part$.subscribe(statusPart2 => {
			this.showPart = 'false';
		} )
	}


	statusPart:string;

	// set header
	public headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});
	public options = new RequestOptions({ headers: this.headers });

	public access_token = JSON.parse(localStorage.getItem("access_token"));
	
	public data_history_payment = {
		access_token : this.access_token,
		invest_id : null,
		borrower_id : null,
		page : 1,
    limit : 10
	}

	public data = { };
	public dataSalary = { };
	public dataBorrowerAmount = { };

	public dataPayment = [];

	public statusChanges:null;

	ngOnInit(){
		// object for get id on route
		let param = this.activatedRoute.params.subscribe( params => {
			let id = params['id'];
			this.data_detail_invest.invest_id = id;
			this.data_list_investor.loan_id = id;
	  	this.data_history_payment.invest_id = id;
	  });
		// API list borrower
		this.getListInvestor();
		// API list borrower
		this.getDetailMyLoan();
	}

	ngDoCheck(){
		if(this.statusChanges == 1) {
			this.getListInvestor();
		}
	}

	statusInvestor(status:any){
		// console.log(status);
		this.statusChanges = status;
	}

	private listInvestorUrl = 'https://masscredit-api.stagingapps.net/user/investor/getlist';
	public data_list_investor = {
		access_token : this.access_token,
		loan_id : '',
	}
	public dataInvestor = [];
	public dataArrayNull = 0;
	getListInvestor(){
    this.http.post(this.listInvestorUrl,this.data_list_investor,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// this.statusChanges = null;
				if(response.data.investor == '') {
					this.dataArrayNull = 1;
				}
				if(this.statusChanges == 1) {
					this.statusChanges = null;
				}
				this.dataInvestor = response.data.investor;
				let code = response.meta.code
				if(code == 200) {
					for(let i = 0; i < this.dataInvestor.length; i++){
						let dataAmount = this.dataInvestor[i]
						let amount = dataAmount['invest_amount'];
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
								}else{
									c = b.substr(i-1,1) + c;
								}
							}
						if (_minus) c = "-" + c ;
						let idr = "Rp.";
						dataAmount['loan_amount'] = idr.concat(c);
					}
				}else{
					alert("Gagal get list Investor");
				}

			},(err:any) => {
				var error   = JSON.parse(err._body);
				var message = error.meta.message;
				var code = error.meta.code;
				if(message == "unauthorized") {
					alert("Maaf session anda telah habis silahkan login kembali")
					return this.router.navigateByUrl('/dashboard/sign-out')					
				}
			});
	}

	private detailLoanUrl= 'https://masscredit-api.stagingapps.net/user/investment/detail';
	public data_detail_invest = {
		access_token : this.access_token,
		invest_id : '',
	}
	private dataDetailListMyInvest = 0;
	public dataAmount = { }

	getDetailMyLoan(){
		// API detail invest
    this.http.post(this.detailLoanUrl,this.data_detail_invest,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				this.data = response.data;
				let code = response.meta.code;
				if(code == 200) {
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
					this.dataDetailListMyInvest = 1;
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

	showDetailInvestorApproved(loanId:any,investorId:any){
		this.router.navigate(['/dashboard/user-action/user-loan/detail/',loanId,'loan-approved',investorId])
	}

	public loaderBorrowerApproved = 0;
	public getDetailBorrower = {
		access_token : this.access_token,
		borrower_id : null,
		invest_id : null
	}

	public loanId:number;
	public investId:number;

	public dataDetailBorrower = {};
	showPart = 'false';
	showDetailInvestorNotApproved(loanId:any,investorId:any){
		let partTrue = 'true';
		this.statusPart = 'true';
		this.showPart = partTrue;
		this.loanId = loanId;
		this.investId = investorId;
	}

	onHide2(agreed: string) {
		this.showPart = agreed;
  }
}
