import { Component,EventEmitter,Input,Output, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'be-paid',
	templateUrl: 'be-paid.component.html',
	providers: []
})

export class BePaidComponent{
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

	public dataDetailInvestor = { }
	loaderInstallmentPaid = 0;
	
	loaderDetailInvestor = 0;
	@Input() dataDetailInstallment = {
		dataInstallment : { 
			avg_review_payment : null
		},
		dataLoan : null,
		dataInvestor : null,
	};

	imagePaymentRate25:number;
  imagePaymentRate50:number;
  imagePaymentRate75:number;
  imagePaymentRate100 = [];
  imagePaymentRate0 = [];

	ngOnInit(){
		jQuery('#PaidForm').modal({backdrop: 'static', keyboard: false});
		if(this.dataDetailInstallment != null) {
			try {
				let rate = [1,1.5,2,2.5,3,3.5,4,4.5,5];
		    let avarage = Number(this.dataDetailInstallment.dataInstallment.avg_review_payment);
		    // let avarage = 0;
		    if(avarage === 0) {
		      for (var arithmetic = 5; arithmetic >= 1; arithmetic--) {
		        this.imagePaymentRate0.push(arithmetic);
		      }
		    } else {
		      for(let i of rate) {
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
		              this.imagePaymentRate0.push(arithmetic);
		            }
		            for (var arithmetic = 1; arithmetic <= number; arithmetic++) {
		              this.imagePaymentRate100.push(arithmetic)
		            }
		            
		            if(data.match(/^[\d]\.5/)) { // condition if decimal
		              this.imagePaymentRate50 = 1;
		            } 

		            // condition if rate change to 25


		            // if(data.match(/^[\d]\.25/)) { // condition if decimal
		            //   this.imageRate25 = 1;
		            
		            // } else if(data.match(/^[\d]\.50/)) { // condition if decimal
		            //   this.imageRate50 = 1;

		            // } else { // condition if decimal
		            //   this.imageRate75 = 1;
		            // }
		          
		          } else {
		            
		            let numberNull = maxRate - number;
		            for (var arithmetic = 1; arithmetic <= number; arithmetic++) {
		              this.imagePaymentRate100.push(arithmetic)
		            }

		            for (var arithmetic = 1; arithmetic <= numberNull; arithmetic++) {
		              this.imagePaymentRate0.push(arithmetic);
		            }
		          }
		        }
		      }
		    }
			} finally {
				this.loaderInstallmentPaid = 1;
			}
		}
		
	}

	@Output() onHide = new EventEmitter<number>();
	hideInstallmentPaid(status:any){
		jQuery('#PaidForm').modal("toggle");
		this.onHide.emit(status);
	}
}
