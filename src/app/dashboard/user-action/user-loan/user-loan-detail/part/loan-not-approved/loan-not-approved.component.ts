import { Component,EventEmitter,Input,Output, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailComponent } from './../../detail.component';
import { DetailService } from './../../detail.service';

declare var jQuery:any;

@Component({
	selector: 'loan-not-approved',
	templateUrl: 'loan-not-approved.component.html',
	providers: [DetailService]
})

export class LoanNotApprovedComponent{
	showPart:string;
	
	constructor(
		private http: Http, 
		private router:Router, 
		private activatedRoute :ActivatedRoute,
		private detail:DetailComponent,
		private detailService:DetailService
	) { }

	// set header
	public headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});
	public options = new RequestOptions({ headers: this.headers });

	public access_token = JSON.parse(localStorage.getItem("access_token")); // get access_token in local storage

	// objek for save data when after request detail
	public dataInvestor = {
		access_token : this.access_token,
		investor_id : null,
		loan_id: null
	}

	public dataDetailInvestor = { }
	
	loaderDetailInvestor = 0;
	// showPart = this.detail.showPart;

	ngOnInit(){
		jQuery('#FormApprove').modal({backdrop: 'static', keyboard: false});
		if(this.loanId != undefined && this.investId != undefined) {
			this.dataApprove.loan_id = this.investId;
			this.dataApprove.investor_id = this.loanId;
			this.dataInvestor.loan_id = this.investId;
			this.dataInvestor.investor_id = this.loanId;
			if(this.dataInvestor.investor_id != null && this.dataInvestor.loan_id != null) {
				this.getDetailInvestor();
			}
		}
	}

	@Input() statusPart:string;
	@Input() loanId:string;
	@Input() investId:string;

	@Output() statusInvestor1 = new EventEmitter<any>();
	@Output() onHide = new EventEmitter<string>();
	hideDetailInvestor(status:string){
		jQuery('#FormApprove').modal("toggle");
		this.onHide.emit(status);
	}

	showLoader(status:any){
		this.loaderDetailInvestor = status;
	}

	detailInvestorUrl = 'https://masscredit-api.stagingapps.net/user/investor/detail';
	public dataInvestorAmount = { }; // object set idr
	getDetailInvestor(){
	  this.http.post(this.detailInvestorUrl,this.dataInvestor,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			let code = response.meta.code // object get meta
			let amount = response.data.amount; //object get data
			this.dataDetailInvestor = response.data; // insert object then send to view
			this.delimiterAmount(amount);
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

	delimiterAmount(amount:any){
		try{
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
			this.dataInvestorAmount = idr.concat(c);
		}finally{
			this.loaderDetailInvestor = 1;
		}
	}

	private formConfirm = 0; //if 1 verify will show
	approveInvest(){
		this.dataApprove.approval_status = 1;
		this.loaderDetailInvestor = 0;
		this.getOtp()
	}

	rejectInvest(){
		this.dataApprove.approval_status = 0;
		this.loaderDetailInvestor = 0;
		this.getOtp()
	}

	private otpUrl = "https://masscredit-api.stagingapps.net/user/loan/approval-otp";
	public dataConfirm = 0;
	public otp ={
		access_token : this.access_token,
	}
	getOtp(){
		this.http.post(this.otpUrl,this.otp,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				this.dataApprove.otp = response.data.otp
				this.loaderDetailInvestor = 2;
			},(err : any) => {
				var error   = JSON.parse(err._body)
        var code = error.meta.code;
        var message = error.meta.message;
      });	
	}

	postApproveUrl = 'https://masscredit-api.stagingapps.net/user/investor/approval';
	public dataApprove = {
		access_token: this.access_token,
    investor_id: null,
    loan_id: null,
    approval_status: null, 
    password: null,
    otp: null,
	}

	sendDataApprove(){
		// API approve
    this.http.post(this.postApproveUrl,this.dataApprove,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				let code = response.meta.code
				alert("Investasi berhasil");
				jQuery('#FormApprove').modal("toggle");
				this.onHide.emit("false");
				this.statusInvestor1.emit(1);

			},(err : any) => {
				var error   = JSON.parse(err._body)
        var code = error.meta.code
        var message = error.meta.message
        if(message == "Password salah!") {
          alert("Password salah!")
          this.loaderDetailInvestor = 2;    
        }if(message == "Verifikasi salah.") {
          alert("Verifikasi salah.")              
        	this.loaderDetailInvestor = 2;
        }
      });	
	}
}
