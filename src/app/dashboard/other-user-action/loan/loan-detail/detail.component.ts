import { Component, OnInit } 						  	   from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } 					   from './validationservice.component';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router, ActivatedRoute }        					   from '@angular/router';

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
	public  invest_id	    = ''; 
	

	// objek for save data when after request detail
	public data_detail_loan = {
		access_token : this.access_token,
		invest_id : null,
	}

	public data = { };
	public invest = {
		access_token: this.access_token,
		loan_id: null,
		invest_amount : null,
		password: null
		// collateral_type: 0
	}

	public dataAmount = { };
	public dataRestAmount = { };

	public dataDetailInvest = 0;
	public dataDetailListInvest = 0;

	ngOnInit(){

		// Objek for get id on route
		let param = this.activatedRoute.params.subscribe( params => {
			let id = params['id'];
			// console.log(id);
			this.invest.loan_id = id;
			this.data_detail_loan.invest_id = id;
		});
		this.getDetailInvest();
		// jQuery('#loan_amount').mask('000000000000');

	}

	cancelDetailInvest(){
		this.router.navigateByUrl("/dashboard/other-user-action/loan");
	}

	getDetailInvest(){
	// API detail invest
  this.http.post('https://masscredit-api.stagingapps.net/user/investment/detail',this.data_detail_loan,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			let imageDefault = 'assets/img/default_image.jpg';
			if(response.data.images == '') {
				response.data.images = imageDefault;
			}
			this.data = response.data;
			this.dataAmount = response.data.amount;
			this.dataRestAmount = response.data.sisa;
			this.delimiterAmount(this.dataAmount);
		});
	}

	makeInvest(invest){
		this.dataDetailInvest = 1;
	}

	postInvestUrl = 'https://masscredit-api.stagingapps.net/other-user/investment/new';
	postInvest(){
		// console.log(this.loan);
		this.http.post(this.postInvestUrl,this.invest,this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
				this.data = response.data;
				this.dataDetailInvest = 0;
					alert("Investasi berhasil, harap menunggu konfirmasi borrower");
					this.router.navigateByUrl('/dashboard/other-user-action/loan');
				},
				(err:any) => {
					var error   = JSON.parse(err._body)
					var message = error.meta.message
					var code = error.meta.code
						// if(code == "400") {
						// 	alert("Maaf saldo anda tidak mencukupi");				
						// }
						if(message == "unauthorized") {
							alert("Maaf session anda telah habis silahkan login kembali")
							return this.router.navigateByUrl('/dashboard/sign-out')					
						
						}if(message == "Anda harus mempunyai jaminan untuk melakukan pinjaman.") {
							alert("Anda harus mempunyai jaminan untuk melakukan pinjaman")				
							this.dataDetailInvest = 1;
						
						}if(message == "Jumlah yang anda masukan melebihi jumlah pinjaman.") {
							alert("Jumlah investasi melebihi jumlah pinjaman")				
							this.dataDetailInvest = 1;
						
						}if(message == "Password salah!") {
							this.dataDetailInvest = 1;
							alert("Password salah!")

						}if(message == "Saldo Anda tidak mencukupi.") {
							this.dataDetailInvest = 1;
							alert("Saldo Anda tidak mencukupi.")				
						}

				}
			);	
	}

	delimiterAmount(dataAmount:any){
		try{
			// condition make delimiter
			var _minus = false;
			var b:any = dataAmount.toString();
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
			this.dataAmount = idr.concat(c);
		}finally{
			this.delimiterRestAmount(this.dataRestAmount);
		}
	}

	delimiterRestAmount(dataRestAmount:any){
		try{
			// condition make delimiter
			var _minus = false;
			var b:any = dataRestAmount.toString();
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
			this.dataRestAmount = idr.concat(c);
		}finally{
			this.dataDetailListInvest = 1;
			return true;
		}
	}


}
