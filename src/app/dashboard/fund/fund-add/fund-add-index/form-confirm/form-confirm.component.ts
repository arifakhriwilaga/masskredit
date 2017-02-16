import { Component } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams }	from '@angular/http';
import { Router } from '@angular/router';
import { ValidationServiceInvestasi } from './validationservice.component';
import { IndexComponent }	from './../index.component';

declare var jQuery:any;
@Component({
	selector: 'form-confirm',
	templateUrl: 'form-confirm.component.html',
	providers: [ ]
})

export class FormConfirmComponent { 
	constructor (private router : Router, private http : Http, private indexComponent:IndexComponent) {}

	 // declare object url get list-fund
	private listfundUrl = 'https://masscredit-api.stagingapps.net/user/fund/get-list';
	private confirmfundUrl = 'https://masscredit-api.stagingapps.net/user/fund/confirm';
	
	// declare headers
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

 	// objek for show data when request data
 	public acces_token = JSON.parse(localStorage.getItem("access_token"))
 	
	public loaderConfirmFund = 1;
 	
 	// objek investasi
	public data = {
		access_token: this.acces_token,
		fund_id: null,
  	struct_image: null,
  	confirm_date: null,	
	}

	ngOnInit(){
		jQuery( "#confirmForm" ).validate({
		  rules: {
		  	struct_image: {
		  		required: true
		  	}
		  }
		});
	}	
}