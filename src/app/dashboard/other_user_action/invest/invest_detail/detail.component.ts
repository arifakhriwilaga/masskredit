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
	public data_detail_invest = {
		access_token : this.access_token,
		loan_id : '',
	}

	public data = { };
	public loan = {
		access_token: this.access_token,
		invest_id: null,
		loan_amount : null,
		password: null
		// collateral_type: 0

	}

	public dataDetailInvest = 0;
	public dataDetailListInvest = 0;

	ngOnInit(){

	// Objek for get id on route
	let param = this.activatedRoute.params.subscribe( params => {
		let id = params['id'];
		this.loan.invest_id = id;
		this.data_detail_invest.loan_id = id;
	});
		this.getDetailInvest();
	}

	cancelDetailInvest(){
		this.router.navigateByUrl("/dashboard/other-user-action/invest");
	}

	getDetailInvest(){
	// API detail invest
  this.http.post('https://masscredit-api.stagingapps.net/user/loan/detail',this.data_detail_invest,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			// console.log(response)
			this.data = response.data;
			this.dataDetailListInvest = 1;
		});
	}

	makeLoan(loan){
		this.dataDetailInvest = 1;
	}

	postLoan(){
		// console.log(this.loan);
		this.http.post('https://masscredit-api.stagingapps.net/other-user/loan/new',this.loan,this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
				this.data = response.data;
				this.dataDetailInvest = 0;
					alert("Peminjaman berhasil, harap menunggu konfirmasi investor");
					this.router.navigateByUrl('/dashboard/other-user-action/invest');
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
						}
						if(message == "Anda harus mempunyai jaminan untuk melakukan pinjaman.") {
							alert("Anda harus mempunyai jaminan untuk melakukan pinjaman")				
							this.dataDetailInvest = 1;
						}
						if(message == "Jumlah yang anda masukan melebihi jumlah invest.") {
							alert("Jumlah pinjaman melebihi jumlah investasi")				
							this.dataDetailInvest = 1;
						}
						if(message == "Password salah!") {
							this.dataDetailInvest = 1;
							alert("Password salah!")				
						}

				}
			);	
	}


}
