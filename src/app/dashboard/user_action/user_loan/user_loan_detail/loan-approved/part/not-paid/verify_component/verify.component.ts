import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';

// import { LoanNotApprovedComponent } from './../loan-not-approved';

declare var jQuery:any;

@Component({
	selector: 'verify',
	templateUrl: 'verify.component.html',
})

export class VerifyComponent{ 
	constructor(private router:Router, private http:Http) { }
	
	ngOnInit(){
		this.getOtp();
		// jQuery("#verifyInstallmentForm").validate({
		//   rules: {
		//     password: {
		//       required: true
		//     },
		//     otp: {
		//       required: true
		//     },
		//   }
		// });
		if(this.dataDetailInstallment != null) {
			// this.dataVerify.loan_id = 
			this.dataVerify.history_payment_id = this.dataDetailInstallment.dataInstallment.history_payment_id;
			this.dataVerify.investor_id = this.dataDetailInstallment.dataInvestor;
			this.dataVerify.loan_id = this.dataDetailInstallment.dataLoan;
		}
		// this.dataVerify.history_payment_id = this.dataDetailInstallment.dataInvestor.history_payment_id;
	}
	// set header
	public headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});
	public options = new RequestOptions({ headers: this.headers });

	public loaderVerify = 0;
	public access_token = JSON.parse(localStorage.getItem("access_token")); // get access_token in local storage

	dataVerify = {
		access_token: this.access_token,
    loan_id: null,
    investor_id: null,
    history_payment_id: null,
    otp: null,
    password: null
	}
	
	@Input() dataDetailInstallment = {
		dataLoan : null,
		dataInvestor : null,
		dataInstallment : { 
			history_payment_id : null,
		},
	};

	@Output() onHide = new EventEmitter<number>();
	hideInstallmentNotPaid(status:number){
		this.onHide.emit(status);
	}

	@Output() showLoader = new EventEmitter<any>();
	submitVerifyInstallment(data:any){
		if(jQuery("#verifyInstallmentForm").valid()) {
			// this.showLoader.emit(0);
			this.postPaidInstallment();
		
		}else{
			alert("Data tidak valid");
		}
	}

	paidInstallmentUrl = 'https://masscredit-api.stagingapps.net/user/loan/payment';
	postPaidInstallment(){
	  this.http.post(this.paidInstallmentUrl,this.dataVerify,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			let message = response.meta.message // object get meta
			alert(message);
			this.hideInstallmentNotPaid(0);
		},(err:any) => {
			var error   = JSON.parse(err._body)
			var message = error.meta.message
			var code = error.meta.code
			if(message == "unauthorized") {
				alert("Maaf session anda telah habis silahkan login kembali")
				return this.router.navigateByUrl('/dashboard/sign-out')					
			
			}if(message == "Password salah!") {
				alert("Password salah!")
				this.loaderVerify = 1;				
			}
		});	
	}

	private otpUrl = "https://masscredit-api.stagingapps.net/user/loan/payment-otp";
	public dataConfirm = 0;
	public otp = {
		access_token : this.access_token,
	}
	getOtp(){
		this.http.post(this.otpUrl,this.otp,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				this.loaderVerify = 1;
				this.dataVerify.otp = response.data.otp;
			},(err : any) => {
				var error   = JSON.parse(err._body)
        var code = error.meta.code;
        var message = error.meta.message;
      });	
	}
}