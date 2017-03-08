import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router }	from '@angular/router';
import { LoginService } from './../../../auth/login/login.service';
import { Global } from './../../../global.service';

@Component({
	selector: 'header-dashboard',
	template: `		
		<header-first></header-first>
		<header-second></header-second>
		<header-third [incomingDataName]="incomingDataName" [incomingDataLastLogin]="incomingDataLastLogin" [incomingDataUserClass]="incomingDataUserClass" [incomingDataUserStatus]="incomingDataUserStatus" [incomingDataUserInvestor]="incomingDataUserInvestor" [incomingDataUserBorrower]="incomingDataUserBorrower" [incomingDataAccountSummary]="incomingDataAccountSummary" [incomingDataFundHistory]="incomingDataFundHistory" [incomingDataProfileImage]="incomingDataProfileImage"></header-third>
		
	`,
	providers: [LoginService, Global]
})

export class HeaderComponent implements OnInit{
	// recieve data from dashboard 
	@Input('dataName') incomingDataName: any	
	@Input('dataLastLogin') incomingDataLastLogin: string	
	@Input('dataProfileImage') incomingDataProfileImage
	
	@Input('dataAccountSummary') incomingDataAccountSummary: string
	@Input('dataUserClass') incomingDataUserClass: string	
	@Input('dataUserStatus') incomingDataUserStatus: string	
	@Input('dataUserInvestor') incomingDataUserInvestor: string
	@Input('dataUserBorrower') incomingDataUserBorrower: string
	@Input('dataFundHistory') incomingDataFundHistory: string

	private imageDefaultProfile = 'assets/img/default_profile.png';
	ngOnInit(){
		if(this.incomingDataProfileImage == '') {
			this.incomingDataProfileImage = this.imageDefaultProfile;
		}
	}
	constructor (
		private http : Http,
		private router : Router,
	){ }

	public userShare = null;
}