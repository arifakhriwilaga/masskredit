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
// @Input('dataBank') banks = [];
// @Input('dataLastBank') lastBank = null;

	constructor(
		private router : Router, 
		private http : Http, 
		private createService:CreateService, 
		private createComponent : CreateComponent
	) { }

	private data = this.createComponent.data;
	
	ngOnInit() {
		// get date
		let date = jQuery("#date").datepicker("setDate", new Date());
		let value_date = jQuery("#date").val();
		this.data.date = value_date;
		// function jquery datepicker
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy-mm-dd'
	  });

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

	// get id bank name
	private bank = 0;
	getBankName(id){
		this.createComponent.data.bank_name = id;
		this.bank = id;
	}

  cancelFund(){
  this.router.navigateByUrl('/dashboard/fund');
  }

  createWithdrawal(data) {
	
		if(jQuery("#createForm").valid()) {
			this.createService.postFundWithdrawal(data);
		}
		else{
			alert("Data tidak valid");
		}
  }

}
