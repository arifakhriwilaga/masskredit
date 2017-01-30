import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { LoginService } from './../../../auth/login/login.service';
import { DashboardComponent } from './../../dashboard.component';
import { ProfileComponent } from './../../profile/profile.component';
import { Global } from './../../../global.service';


import { Router }	   from '@angular/router';


@Component({
	selector: 'header-dashboard',
	templateUrl: 'header.component.html',
	providers: [LoginService, Global]
})


export class HeaderComponent implements OnInit{
	// recieve data from dashboard 
	@Input('dataName') incomingDataName: string	
	@Input('dataLastLogin') incomingDataLastLogin: string	
	@Input('dataUserClass') incomingDataUserClass: string	
	@Input('dataUserStatus') incomingDataUserStatus: string	
	@Input('dataAccountSummary') incomingDataAccountSummary: string
	@Input('dataFundHistory') incomingDataFundHistory: string
	// @Input('dashboardData') incomingDataName: string	


	constructor (
		// private loginService:LoginService, 
		private http : Http,
		private dashboardComponent : DashboardComponent,
		private router : Router,
		private dataUser:Global
		// private globalService : GlobalService
	){ }

	private data = this.dataUser.data;
	
	getDataGlobal(){
		console.log(this.data)
	    // console.log(this.globalService.data);
 	}

 	ngOnInit(){	}	
 	
	// public incomingDataName = "";
	private last_login 		= { };
	private user_class 		= { };
	private user_status 	= { };
	private profile_image 	= { };
	private investor		= { };
	private borrower 		= { };
	private avg_reviews		= { };
	private fund_history	= { };
	private account_summary = { };
	private is_complete 	= { };

}