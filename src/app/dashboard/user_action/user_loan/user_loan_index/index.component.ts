import { Component } 		from '@angular/core';
import { Headers, Http, RequestOptions }	   				from '@angular/http';
import { Router }        					   from '@angular/router';

@Component({
	//moduleId: module.id,
	selector: 'index',
	templateUrl: 'index.component.html'
})


export class IndexComponent { 
	constructor(private router:Router) { }
	listInvestasi() {
		// return this.investasiservice.Index();
	}

	linkFormCreate(){
		this.router.navigateByUrl("/dashboard/loan/create");
	}

}