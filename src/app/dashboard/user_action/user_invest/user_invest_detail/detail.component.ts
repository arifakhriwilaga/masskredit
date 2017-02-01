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

		public dataBorrower = [];
		private dataDetailListMyInvest = 0;

	ngOnInit(){
	// Objek for get id on route
	let param = this.activatedRoute.params.subscribe( params => {
		let id = params['id'];
		this.data_detail_invest.invest_id = id
  });
	// API list borrower
	this.getListBorrower();
	// API list borrower
	this.getDetailMyInvest();
	}

	backFund(){
		this.router.navigateByUrl('/dashboard/fund')
	}

	getListBorrower(){
		// API detail invest
	    this.http.post('https://masscredit-api.stagingapps.net/user/borrower/getlist',this.data_detail_invest,this.options)
				.map(response => response.json())
				.subscribe((response : any) => {
					this.dataBorrower = response.data.borrower;
					// console.log(this.dataBorrower)
				});
	}

	getDetailMyInvest(){
		// API detail invest
	    this.http.post('https://masscredit-api.stagingapps.net/user/investment/detail',this.data_detail_invest,this.options)
				.map(response => response.json())
				.subscribe((response : any) => {
					// console.log(response);
					
			// console.log(response);
					this.dataDetailListMyInvest = 1;
					this.data = response.data;
					// console.log(this.data)
				});	
	}

	cancelDetailInvest(){
		this.router.navigateByUrl("/dashboard/user-action/user-invest");
	}

	showForm(){
		jQuery("#formDetail").show();
	}
}
