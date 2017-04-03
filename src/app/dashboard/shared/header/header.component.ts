import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router }	from '@angular/router';

@Component({
	selector: 'header-dashboard',
	template: `		
		<header-first></header-first>
		<header-second></header-second>
		<header-third *ngIf="dataComplete == 1" [incomingDataUser]="incomingDataUser" ></header-third>
		
	`,
	providers: []
})

export class HeaderComponent implements OnInit{
	// recieve data from dashboard 
	@Input('dataUser') incomingDataUser: any;

	dataComplete:number;
	private imageDefaultProfile = 'assets/img/default_profile.png';
	ngOnInit(){
		try {
			// console.log(this.incomingDataUser);         
			if(this.incomingDataUser.profile_image == '') {
			this.incomingDataUser.profile_image = this.imageDefaultProfile;
			}
		} finally {
			this.dataComplete = 1;
		}
	}

	constructor (
		private http : Http,
		private router : Router,
	){ }

	public userShare = null;
}