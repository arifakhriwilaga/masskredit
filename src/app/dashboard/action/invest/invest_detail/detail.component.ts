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
			invest_id : '',
		}

		public data = { };
		public loan = {
			access_token: this.access_token,
			// invest_id: this.data_detail_invest.invest_id,
			invest_id: null,
			loan_amount : null,
			collateral_type: 0

		}

	ngOnInit(){

	// Objek for get id on route
	let param = this.activatedRoute.params.subscribe( params => {
	let id = params['id'];
		// console.log(id)
		this.loan.invest_id = id;
		this.data_detail_invest.invest_id = id;
		// console.log(this.data_detail)
  	});
			  	// API detail fund
	    this.http.post('http://masscredit-api.stagingapps.net/user/investment/detail',this.data_detail_invest,this.options)
				.map(response => response.json())
				.subscribe((response : any) => {
					this.data = response.data;
				});	
	}

	backFund(){
		this.router.navigateByUrl('/dashboard/fund')
	}

	makeLoan(loan){
		this.postLoan()
	}

	postLoan(){
		// console.log(this.loan);
		this.http.post('http://masscredit-api.stagingapps.net/other-user/loan/new',this.loan,this.options)
				.map(response => response.json())
				.subscribe(
					(response : any) => {
					this.data = response.data;
						alert("Peminjaman berhasil, harap menunggu konfirmasi investor");
						this.router.navigateByUrl('/dashboard/action/invest');
					},
					(err:any) => {
						var error   = JSON.parse(err._body)
						var message = error.meta.message
							if(message == "unauthorized") {
								alert("Maaf session anda telah habis silahkan login kembali")
								return this.router.navigateByUrl('/dashboard/sign-out')					
							}
							if(message == "unauthorized") {
								alert("Maaf session anda telah habis silahkan login kembali")
								return this.router.navigateByUrl('/dashboard/sign-out')					
							}
					}
				);	
	}

}
