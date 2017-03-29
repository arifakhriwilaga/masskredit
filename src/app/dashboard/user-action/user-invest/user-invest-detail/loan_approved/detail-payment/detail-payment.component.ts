import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

declare var jQuery:any;

@Component({
	selector: 'detail-payment',
	templateUrl: 'detail-payment.component.html',
	providers: []
})

export class DetailPaymentComponent{
	showPart:string;
	
	constructor(private http: Http, private router:Router) { }

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

	public dataDetailInvestor = { }
	loaderInstallmentPaid = 0;
	
	loaderDetailInvestor = 0;
	@Input() dataDetailPayment = {
		payment_date : null
	};

	ngOnInit(){
		jQuery('#FormDetailPayment').modal({backdrop: 'static', keyboard: false});
		if(this.dataDetailPayment != null) {
			console.log(this.dataDetailPayment)
			try {
				if(this.dataDetailPayment.payment_date == null) {
					this.dataDetailPayment.payment_date = '-';
				} else {
					this.dataDetailPayment.payment_date;
				}
			} finally {
				this.loaderInstallmentPaid = 1;
			}
		}
	}

	@Output() onHide = new EventEmitter<number>();
	hideDetailPayment(status:any){
		jQuery('#FormDetailPayment').modal("toggle");
		this.onHide.emit(status);
	}
}
