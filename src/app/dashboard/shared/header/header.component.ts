import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router }	from '@angular/router';

@Component({
	selector: 'header-dashboard',
	template: `		
		<header-first></header-first>
		<header-second></header-second>
		<header-third [incomingDataUser]="incomingDataUser" ></header-third>
		
	`,
	providers: []
})

export class HeaderComponent implements OnInit{
	// recieve data from dashboard 
	@Input('dataUser') incomingDataUser: any;

	dataComplete:number;
	ngOnInit(){	}

	constructor (
		private http : Http,
		private router : Router,
	){ }

	public userShare = null;
}