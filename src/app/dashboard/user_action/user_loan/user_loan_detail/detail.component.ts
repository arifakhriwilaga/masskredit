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
		public  fund_id	    = ''; 
		

		// objek for save data when after request detail
		public detail = { };
		public bank = { };
		public data_get_detail_fund = {
			access_token : this.access_token,
			fund_id : '',
		}

		public dataDetailListMyInvest = 0;

	ngOnInit(){

	// Objek for get id on route
	let param = this.activatedRoute.params.subscribe( params => {
	let id = params['id'];
		// console.log(id)
		this.data_get_detail_fund.fund_id = id
		// console.log(this.data_detail)
  	});
			  	// API detail fund
		  this.http.post('http://masscredit-api.stagingapps.net/user/fund/get-detail',this.data_get_detail_fund,this.options)
				.map(response => response.json())
				.subscribe((response : any) => {
					let data = response.data;
					let bank_name = response.data.bank;
		
					if(bank_name == 1) {
						this.bank = "BCA";
					}
					if(bank_name == 2) {
						this.bank = "Mandiri";
					}
					if(bank_name == 3) {
						this.bank = "Danamon";
					}
					if(bank_name == 4) {
						this.bank = "Sinarmas";
					}
					if(bank_name == 5) {
						this.bank = "BNI";
					}
					if(bank_name == 6) {
						this.bank = "Niaga";
					}
					if(bank_name == 'undefined') {
						this.bank = "";
					}

					this.detail = data
					// this.image = response.data.images[0];
					// console.log(this.image);
					
					// console.log(this.detail);
				});	
	}

	backFund(){
		this.router.navigateByUrl('/dashboard/fund')
	}

}
