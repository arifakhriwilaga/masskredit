import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'not-paid',
	templateUrl: 'not-paid.component.html',
	providers: []
})

export class NotPaidComponent{
	showPart:string;
	
	constructor(
		private http: Http, 
		private router:Router, 
	) { }

	// set header
	public headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});
	public options = new RequestOptions({ headers: this.headers });

	public access_token = JSON.parse(localStorage.getItem("access_token")); // get access_token in local storage

	// objek for save data when after request detail
	public dataInvestor = {
		access_token : this.access_token,
		investor_id : null,
		loan_id: null
	}

	loaderInstallmentNotPaid = 0;
	@Input() dataDetailInstallment = {
		dataInstallment : { },
		dataLoan : null,
		dataInvestor : null,
	};
	
	ngOnInit(){
		jQuery('#NotPaidForm').modal({backdrop: 'static', keyboard: false});
		if(this.dataDetailInstallment != null) {
			this.loaderInstallmentNotPaid = 1;
		}
	}
	public dataInvestorAmount = { }; // object set idr

	paidInstallment(){
		this.loaderInstallmentNotPaid = 2;
	}

	@Output() statusInvestor = new EventEmitter<number>();
	statusInvestor1(status:number){
		this.statusInvestor.emit(status);
	}

	@Output() onHide = new EventEmitter<number>();
	hideInstallmentNotPaid(status:any){
		jQuery('#NotPaidForm').modal("toggle");
		this.onHide.emit(status);
	}
}
