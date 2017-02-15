import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { CreateService } from './../create.service';
import { CreateComponent } from './../create.component';


declare var jQuery:any;

@Component({
	selector: 'form-add-fund',
	templateUrl: 'form.component.html',
	providers: [CreateService]
})

export class FormComponent {
@Input('dataBank') banks = [];
@Input('dataBankMasscredit') bank_masscredit = [];
@Input('dataLastBank') lastBank = null;

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
		    bank_name: {
		      required: true
		    },
		    no_rekening: {
		      required: true
		    },
		    amount: {
		      required: true
		    },
		    tujuan_bank: {
		      required: true
		    },
		  }
		});

		// function jquery mask
		jQuery('#amount').mask('000000000000');
		jQuery('#no_rekening').mask('000000000000000');		

	}

	// get id bank name
	private bank = 0;
	getBankName(id){
		this.createComponent.data.bank_name = id;
		this.bank = id;
		// console.log(this.lastBank)
	}

	// get id tujuan-bank
	private idBankMasscredit = 0;
	getTujuanBank(id){
		this.createComponent.data.tujuan_bank = id;
		this.idBankMasscredit = id;
		// console.log(this.tujuan_bank_masscredit)
	}

  cancelFund(){
  	return this.router.navigateByUrl('/dashboard/fund');
  }

	createFund(data) {
		if(jQuery("#createForm").valid()) {
			this.createService.postFundAdd(data);
		}
		else{
			alert("Data tidak valid");
		}
  }

}
