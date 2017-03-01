// inject modul angular
import { Component } from '@angular/core';
import { Router }	from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';

// inject service login
import { PhoneNumberService }	from './phone-number.service';

// inject object login
import { PhoneNumber } from './phone-number';

// declare object jQuery for usage function jQuery
declare var jQuery:any;

@Component({
	selector: 'phone-number',
	templateUrl: 'phone-number.component.html',
	providers  : [PhoneNumberService] 
})

export class PhoneNumberComponent {
	constructor(private router : Router, private http : Http, private phonenumberService: PhoneNumberService) { }	
	
	private nomor = { PhoneNumber	};

	ngOnInit() {
		// call function jquery mask
		jQuery('#phone').mask('000-000-000000');
		// call function jquery validate
		jQuery( "#verifyForm" ).validate({
		  rules: {
		    phone: {
		      required: true
		    }
		  },
		  messages: {
		  	phone: "Data dibutuhkan"
		  }
		});
  }

    // send nomor handphone	
	sendHandphone(nomor:any){
		let $this = jQuery("#load");
		if(jQuery("#verifyForm").valid()) {
	    $this.button('loading');
	    this.phonenumberService.postPhoneNumber(nomor);
		}else{
			alert("Data tidak valid");
		}
	}

}