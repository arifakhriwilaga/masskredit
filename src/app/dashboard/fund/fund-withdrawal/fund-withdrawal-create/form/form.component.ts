import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { CreateService } from './../create.service';
import { CreateComponent } from './../create.component';


declare var jQuery:any;

@Component({
	selector: 'form-add-withdrawal',
	templateUrl: 'form.component.html',
	providers: [CreateService]
})

export class FormComponent {
@Input('dataBank') bank:string;
// @Input('dataLastBank') lastBank = null;

	constructor(
		private router : Router, 
		private http : Http, 
		private createService:CreateService, 
		private createComponent : CreateComponent
	) { }

	private data = this.createComponent.data;
	// set headers
  private headers = new Headers({ 
		'Content-Type': 'application/json',
		'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	})
	private options = new RequestOptions({ headers: this.headers })
	
	// declare object url bank
	private postFundUrl = 'https://masscredit-api.stagingapps.net/user/withdrawal/add';
	
	// object for condition incomingDataBank || incomingDataNoRekening is null
	private dataBank = null;
	private dataNoRekening = null;
	public formConfirm = 0;

	private id = null;
	private verification_code = null;

	ngOnInit() {
		// console.log(this.incomingDataNoRekening)
		// get date
		// let date = jQuery("#date").datepicker("setDate", new Date());
		// let value_date = jQuery("#date").val();
		// this.data.date = value_date;
		// // function jquery datepicker
		// jQuery('.datepicker').datepicker({
	 //      format	: 'yyyy-mm-dd'
	 //  });

		// function jquery validation
	  jQuery( "#createForm" ).validate({
		  rules: {
		  	amount: {
		      required: true
		    }
		  }
		});

		// function jquery mask
		jQuery('#amount').mask('000000000000');
	}

  cancelWithdrawal(){
  	this.router.navigateByUrl('/dashboard/fund');
  }

  createWithdrawal(data) {
		if(jQuery("#createForm").valid()) {
			this.postFundWithdrawal(data);
		}
		else{
			alert("Data tidak valid");
		}
  }

	// request post fund
  postFundWithdrawal(data:any){
		this.http.post(this.postFundUrl,data,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			this.id = response.data.id;
			this.verification_code = JSON.parse(response.data.verification_code);
			this.formConfirm = 1;
		},(err:any) => {
			var error   = JSON.parse(err._body);
			var message = error.meta.message;
			if(message == "unauthorized") {
				alert("Maaf session anda telah habis silahkan login kembali");
				this.router.navigateByUrl('/dashboard/sign-out');
			}	
		});	
  }

}
