import { Component, OnInit } 						  	   from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } 					   from './validationservice.component';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router, ActivatedRoute }        					   from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'loan-not-been-approved',
	templateUrl: 'loan_not_been_approved.component.html',
})

export class LoanNotBeenApprovedComponent {
	constructor(private http: Http, private router:Router, private activatedRoute :ActivatedRoute) { }

			
		// set header
		public headers = new Headers({ 
			 	'Content-Type': 'application/json',
			 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
		});
  	public options = new RequestOptions({ headers: this.headers });

  		// param url
		public access_token = JSON.parse(localStorage.getItem("access_token"));
		// public  invest_id	    = ''; 
		

		// objek for save data when after request detail
		public data_borrower = {
			access_token : this.access_token,
			borrower_id : '',
		}

		public otp ={
			access_token : this.access_token,
		}

		public dataDetailBorrower = 0;
		public data = { };
		public dataApprove = {
			access_token: this.access_token,
      borrower_id: null,
      invest_id: null,
      approval_status: null, 
      password: null,
      otp: null,
		}
		private formConfirm = 0;
		public dataSalary = { };
		public dataBorrowerAmount = { };

		public dataApproveBorrower = 0;

	ngOnInit(){
		// Objek for get id on route
		let param = this.activatedRoute.params.subscribe( params => {
		let id = params['id'];
			// console.log(id)
			this.data_borrower.borrower_id = id;
			this.dataApprove.borrower_id = id;
			// console.log(this.data_detail)
	  	});
				// API detail fund
		    this.http.post('https://masscredit-api.stagingapps.net/user/borrower/detail',this.data_borrower,this.options)
					.map(response => response.json())
					.subscribe((response : any) => {
						// console.log(response);
						this.data = response.data;
						this.dataApprove.invest_id = response.data.invest_id;
						this.dataSalary = response.data.amount;
						this.dataBorrowerAmount = response.data.borrower_amount;
						this.delimiterSalary(this.dataSalary)
					});	
	}

	approveInvest(){
		this.dataApprove.approval_status = 1;
		this.getOtp()
	}

	rejectInvest(){
		this.dataApprove.approval_status = 0;
		this.getOtp()
	}

	sendDataApprove(){
		// console.log(this.dataApprove);
		// API approve
    this.http.post('https://masscredit-api.stagingapps.net/user/myinvestment/approve',this.dataApprove,this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					// console.log(response);
					let code = response.meta.code
					if(code == "200") {
						alert("Investasi berhasil");
						jQuery('#modalFormConfirm').modal("toggle");
						this.router.navigateByUrl("/dashboard/user-action/user-invest");
					}
				},
				(err : any) => {
					var error   = JSON.parse(err._body)
          var code = error.meta.code
          var message = error.meta.message
            if(message == "Password salah!") {
              alert("Password salah!")              
            }if(message == "Verifikasi salah.") {
              alert("Verifikasi salah.")              
            }  
            
          }
			);	
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
			this.dataDetailBorrower = 1;
			return true;
		}
	}

	private otpUrl = "https://masscredit-api.stagingapps.net/user/investment/approval-otp";
	public dataConfirm = 0;
	getOtp(){
		this.http.post(this.otpUrl,this.otp,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				this.dataApprove.otp = response.data.otp
				this.formConfirm = 1;
			},(err : any) => {
				var error   = JSON.parse(err._body)
        var code = error.meta.code
        var message = error.meta.message
          if(message == "Password salah!") {
            alert("Password salah!")              
          }  
      });	
	}
}
