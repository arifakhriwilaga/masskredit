import { Component, Input, OnInit, DoCheck } 	from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'header-third',
	templateUrl: 'third.component.html'
})

export class ThirdComponent{
	constructor(private router:Router) { }
	imageRate25:number;
	imageRate50:number;
	imageRate75:number;
	imageRate100 = [];
	imageRate0 = [];
	// recieve data from dashboard 
	@Input('incomingDataUser') incomingDataUser:any = {
		profile_image:null
	};
	dataComplete:number;
	// @Input('incomingDataLastLogin') incomingDataLastLogin: string	
	// @Input('incomingDataAccountSummary') incomingDataAccountSummary: any
	// @Input('incomingDataUserClass') incomingDataUserClass: string	
	// @Input('incomingDataUserStatus') incomingDataUserStatus: string	
	// @Input('incomingDataUserInvestor') incomingDataUserInvestor:any
	// @Input('incomingDataUserBorrower') incomingDataUserBorrower: any	
	// @Input('incomingDataFundHistory') incomingDataFundHistory: string
	// @Input('incomingDataProfileImage') incomingDataProfileImage;
	// @Input('incomingDataAvgReviews') incomingDataAvgReviews:any;

	listFund(){
		this.router.navigateByUrl('dashboard/fund');
	}

	rate = [1,1.5,2,2.5,3,3.5,4,4.5,5];
	private imageDefaultProfile = 'assets/img/default_profile.png';

		ngOnInit(){
			try{
				let avarage = Number(this.incomingDataUser.avg_review);
				if(this.incomingDataUser.profile_image == null) {
					this.incomingDataUser.profile_image = this.imageDefaultProfile;
				}
				if(avarage === 0) {
					for (var arithmetic = 5; arithmetic >= 1; arithmetic--) {
						this.imageRate0.push(arithmetic);
					}
				} else {
					for(let i of this.rate) {
						if(i === avarage) {

							// let data = '3.25'; // for dummy
							let data = i.toString();
							let number = Number(data); // object if data rate number not decimal
							let maxRate = 5;
							
							// if(data.match(/^[\d]\.[\d+\d]{2}$/)) {
							if(data.match(/^[\d]\.\d$/)) {
								let number = Number(data.split('.')[0]);
								let numberNull = 4 - number;
								
								for (var arithmetic = 1; arithmetic <= numberNull; arithmetic++) {
									this.imageRate0.push(arithmetic);
								}
								for (var arithmetic = 1; arithmetic <= number; arithmetic++) {
									this.imageRate100.push(arithmetic)
								}
								
								if(data.match(/^[\d]\.5/)) { // condition if decimal
									this.imageRate50 = 1;
								} 

								// condition if rate change to 25


								// if(data.match(/^[\d]\.25/)) { // condition if decimal
								// 	this.imageRate25 = 1;
								
								// } else if(data.match(/^[\d]\.50/)) { // condition if decimal
								// 	this.imageRate50 = 1;

								// } else { // condition if decimal
								// 	this.imageRate75 = 1;
								// }
							
						} else {
								
								let numberNull = maxRate - number;
								for (var arithmetic = 1; arithmetic <= number; arithmetic++) {
									this.imageRate100.push(arithmetic)
								}

								for (var arithmetic = 1; arithmetic <= numberNull; arithmetic++) {
									this.imageRate0.push(arithmetic);
								}
							}
						}
					}
				} 
				
			} finally {
				this.dataComplete = 1;
			}
		
		}
		
}