import { Component, Input, OnInit, DoCheck } 	from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'header-third',
	templateUrl: 'third.component.html'
})

export class ThirdComponent{
	constructor(private router:Router) { }
	// recieve data from dashboard 
	@Input('incomingDataName') incomingDataName:any	
	@Input('incomingDataLastLogin') incomingDataLastLogin: string	
	@Input('incomingDataAccountSummary') incomingDataAccountSummary: any
	@Input('incomingDataUserClass') incomingDataUserClass: string	
	@Input('incomingDataUserStatus') incomingDataUserStatus: string	
	@Input('incomingDataUserInvestor') incomingDataUserInvestor:any
	@Input('incomingDataUserBorrower') incomingDataUserBorrower: any	
	@Input('incomingDataFundHistory') incomingDataFundHistory: string
	@Input('incomingDataProfileImage') incomingDataProfileImage

	listFund(){
		this.router.navigateByUrl('dashboard/fund');
	}
}