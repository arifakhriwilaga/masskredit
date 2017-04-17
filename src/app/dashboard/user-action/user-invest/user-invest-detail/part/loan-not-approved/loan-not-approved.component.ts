import { Component,EventEmitter,Input,Output, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DetailComponent } from './../../detail.component';
// import { DetailService } from './../../detail.service';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'loan-not-approved',
	templateUrl: 'loan-not-approved.component.html',
	// providers: [DetailService]
})

export class LoanNotApprovedComponent{
	subscription: Subscription;
	showPart:string;
	
	constructor(
		private http: Http, 
		private router:Router,
		private detail:DetailComponent,
		// private detailService:DetailService
	) { }

	// set header
	public headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});
	public options = new RequestOptions({ headers: this.headers });

	public access_token = JSON.parse(localStorage.getItem("access_token")); // get access_token in local storage

	public dataDetailInvestor = { }
	
	ngOnInit(){
		jQuery('#FormApprove').modal({backdrop: 'static', keyboard: false});
		if(this.incomingBorrowerId != undefined && this.incomingInvestId != undefined) {
			this.dataApprove.invest_id = this.incomingInvestId;
			this.dataApprove.borrower_id = this.incomingBorrowerId;
			this.dataBorrower.invest_id = this.incomingInvestId;
			this.dataBorrower.borrower_id = this.incomingBorrowerId;
			if(this.dataBorrower.invest_id != null && this.dataBorrower.borrower_id != null) {
				this.getDetailBorrower();
			}
		}
	}

	@Input() incomingBorrowerId:string;
	@Input() incomingInvestId:string;

	@Output() onHide = new EventEmitter<number>();
	hideDetailBorrower(status:number){
		jQuery('#FormApprove').modal("toggle");
		this.onHide.emit(status);
	}

	private formConfirm = 0;
	private loaderDetailBorrower = 0;

	private dataBorrower = {
		access_token: this.access_token,
    borrower_id: null,
    invest_id: null
	}
	private getDetailBorrowerUrl = 'https://masscredit-api.stagingapps.net/user/borrower/detail';
	public dataDetailBorrower = {};
	public dataSalary:any; //object after amount convert to idr
	public dataBorrowerAmount:any; // object after borrower-amount convert to idr

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

	public dataApprove = {
		access_token: this.access_token,
    borrower_id: null,
    invest_id: null,
    approval_status: null, 
    password: null,
    otp: null,
	}

	private postApproveUrl = 'https://masscredit-api.stagingapps.net/user/investment/approve';
	sendDataApprove(){
    this.http.post(this.postApproveUrl,this.dataApprove,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			// console.log(response);
			let code = response.meta.code
			alert("Investasi berhasil");
			this.router.navigateByUrl("/dashboard/user-action/user-invest");
		},(err : any) => {
			var error   = JSON.parse(err._body)
      var code = error.meta.code
      var message = error.meta.message
      if(message == "Password salah!") {
        alert("Password salah!")              
      }if(message == "Verifikasi salah.") {
        alert("Verifikasi salah.")              
      }
    });	
	}

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
				} else {
					c = b.substr(i-1,1) + c;
				}
			}
			if (_minus) c = "-" + c ;
			let idr = "Rp.";
			this.dataBorrowerAmount = idr.concat(c);
		}finally{
			this.loaderDetailBorrower = 1;
			return true;
		}
	}

	dataIsOn = [
    { value: 1 },
    { value: 0 },
  ];

	isOn = 0;
	

	approveInvest(){
		if(this.isOn === 0) {
			return;
		} else {
			this.loaderDetailBorrower = 0;
			this.dataApprove.approval_status = 1;
			this.getOtp()
		}
	}

	rejectInvest(){
		this.loaderDetailBorrower = 0;
		this.dataApprove.approval_status = 0;
		this.getOtp()
	}

	private otpUrl = "https://masscredit-api.stagingapps.net/user/investment/approval-otp";
	public dataConfirm = 0;

	public otp ={
		access_token : this.access_token,
	}
	getOtp(){
		this.http.post(this.otpUrl,this.otp,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				this.dataApprove.otp = response.data.otp
				this.loaderDetailBorrower = 2;
			},(err : any) => {
				var error   = JSON.parse(err._body)
        var code = error.meta.code
        var message = error.meta.message
          // if(message == "Password salah!") {
          //   alert("Password salah!")              
          // }  
      });	
	}
}
