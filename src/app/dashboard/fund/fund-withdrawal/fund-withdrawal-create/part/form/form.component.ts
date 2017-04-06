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
		  },
		  messages: {
		  	amount: "Data dibutuhkan"
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
    	this.formService.postCreate(this.data).then(dataResponse => {
  		let message = dataResponse.meta.message;
	    let code = JSON.stringify(dataResponse.meta.code);
      let data = dataResponse.data;
    		if(code.charAt(0) === '4') {
	        this.handleError(message);
	      } if(code.charAt(0) === '2') {
	        this.handleSuccess(data);
	    		
	      };
    	})
		}
		else{
			alert("Data tidak valid");
		}
  }

  handleError(message:any){
  	// console.log(message);
  	if(message == "unauthorized") {
			alert("Maaf session anda telah habis silahkan login kembali")
			this.router.navigateByUrl('/dashboard/sign-out')
  	} else {
  		alert(message)
  	}
  }
  
  handleSuccess(data:any){
   	try {
			this.idWithdrawal = data.id;
			this.verificationCode = JSON.parse(data.verification_code);
		} finally {
			this.statusFormConfirm = 1;
		}
  }
}
