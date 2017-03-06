import { Component, Input, OnInit } 	from '@angular/core';

@Component({
	selector: 'header-third',
	templateUrl: 'third.component.html'
})

export class ThirdComponent implements OnInit{
	ngOnInit(){
		console.log(this.incomingDataName);	
	} 
// recieve data from dashboard 
	@Input('incomingDataName') incomingDataName: string	
	@Input('incomingDataLastLogin') incomingDataLastLogin: string	
	@Input('incomingDataUserClass') incomingDataUserClass: string	
	@Input('incomingDataUserStatus') incomingDataUserStatus: string	
	@Input('incomingDataAccountSummary') incomingDataAccountSummary: string
	@Input('incomingDataFundHistory') incomingDataFundHistory: string
	@Input('incomingDataProfileImage') incomingDataProfileImage


}