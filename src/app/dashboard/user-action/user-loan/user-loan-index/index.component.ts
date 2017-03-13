import { Component } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Component({
	selector: 'index',
	templateUrl: 'index.component.html'
})


export class IndexComponent { 
	constructor(private router:Router, private http:Http) { }
	
	private headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	});

	private options = new RequestOptions({ headers: this.headers });
	
	private access_token = {
		access_token : JSON.parse(localStorage.getItem("access_token"))
	}

	private loans = [];
	private dataListMyLoan = 0;
	private dataArrayNull = 0;

	ngOnInit(){
		this.getListInvest();
	}

	getListInvest(){
		this.http.post('https://masscredit-api.stagingapps.net/user/myloan/getlist',
		this.access_token,
		this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			// this.dataListMyInvest = 1
			if(response.data.loans == '') {
				this.dataArrayNull = 1;
			}
			let code 		= response.meta.code;
			let message 	= response.meta.message;					
			this.loans = response.data.loans;
			for(let i = 0; i < this.loans.length; i++){
			let data = this.loans[i]
			let type_invest = data['type_invest'];
			let loan_category = data['loan_category'];
			if(type_invest == "") {
				data['type_invest'] = "-";
			}if(loan_category == "") {
				data['loan_category'] = "-";
			}
			let imageDefault = 'assets/img/default_image.jpg';
			if(data['image_loan'] == '') {
				data['image_loan'] = imageDefault;
			}
			let amount = data['amount'];
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
			data['amount'] = idr.concat(c);
			}
			this.dataListMyLoan = 1;
		},(err:any) => {
			var error   = JSON.parse(err._body)
			var message = error.meta.message
				if(message == "unauthorized") {
					alert("Maaf session anda telah habis silahkan login kembali")
					return this.router.navigateByUrl('/dashboard/sign-out')					
				}
		});
	}

	detailAddLoan(loanId:number){
		this.router.navigateByUrl('/dashboard/user-action/user-loan/detail/'+loanId)
	}

	detailGiveLoan(loanId:number,investorId:number){
		// console.log(loanId,investorId);
		this.router.navigateByUrl('/dashboard/user-action/user-loan/detail/'+loanId+'/loan-approved/'+investorId)
	}

}