import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { FormService } from './form.service';
import { CreateComponent } from './../../create.component';


declare var jQuery:any;

@Component({
	selector: 'form-add-withdrawal',
	templateUrl: 'form.component.html',
	providers: [FormService]
})

export class FormComponent {
@Input('dataBank') bank:string;

	constructor(
		private router : Router, 
		private http : Http, 
		private formService:FormService, 
		private createComponent : CreateComponent
	) { }

	private data = this.createComponent.data;

	public statusFormConfirm = 0;

	private idWithdrawal = null;
	private verificationCode = null;

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
		  let $this = jQuery("#load");
    	$this.button('loading');
    	this.formService.postCreate(this.data).then(dataResponse => {
    		try {
    			this.idWithdrawal = dataResponse.id;
    			this.verificationCode = JSON.parse(dataResponse.verification_code);
    		} finally {
    			this.statusFormConfirm = 1;
    		}
    	})
		}
		else{
			alert("Data tidak valid");
		}
  }
}
