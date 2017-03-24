import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Data } from './data';

import { CreateComponent } from './../../create.component';

import { CreateService } from './../../create.service';

declare var jQuery:any;

@Component({
	selector: 'form-add-fund',
	templateUrl: 'form.component.html',
	providers: [CreateService]
})

export class FormComponent {
	data = this.createComponent.data;
	@Input('dataBanks') banks = [];
	@Input('dataBankMasscredits') bankMassCredits = [];

	constructor(
		private router : Router, 
		private http : Http, 
		private createService:CreateService, 
		private createComponent : CreateComponent
	) { }

	
	ngOnInit() {
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
		this.createComponent.data.bank_id = id;
		this.bank = id;
	}

	// get id tujuan-bank
	private idBankMasscredit = 0;
	getTujuanBank(id){
		this.createComponent.data.id_bank_masscredit = id;
		this.idBankMasscredit = id;
	}

  cancelFund(){
  	return this.router.navigateByUrl('/dashboard/fund');
  }

	createFund() {
		if(jQuery("#createForm").valid()) {
			this.createService.postFundAdd(this.data);
		}
		else{
			alert("Data tidak valid");
		}
  }

}
