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
		<header-third [incomingDataName]="incomingDataName" [incomingDataLastLogin]="incomingDataLastLogin" [incomingDataUserClass]="incomingDataUserClass" [incomingDataUserStatus]="incomingDataUserStatus" [incomingDataAccountSummary]="incomingDataAccountSummary" [incomingDataFundHistory]="incomingDataFundHistory" [incomingDataProfileImage]="incomingDataProfileImage"></header-third>
	`,
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
	@Input('dataProfileImage') incomingDataProfileImage

	private imageDefaultProfile = 'assets/img/default_profile.png';
	ngOnInit(){
		if(this.incomingDataProfileImage == '') {
			this.incomingDataProfileImage = this.imageDefaultProfile;
		}
	}
	// @Input() incomingDataUser:User;
	
	// @Input('dashboardData') incomingDataName: string	
	constructor (
		private http : Http,
		private router : Router,
		// private userService:UserService,
	){ }

	public userShare = null;
}