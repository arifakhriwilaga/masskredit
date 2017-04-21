import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { HelpCenterService } from './help-center.service';

declare var jQuery:any;

@Component({
	selector: 'help-center',
	templateUrl: 'help-center.component.html',
})

export class HelpCenterComponent implements OnInit{ 
	constructor(
		private router : Router, 
		private http : Http,
		private helpCenterService : HelpCenterService
	) { }

	public statusDataAddFund = 0;
	
	access_token = JSON.parse(localStorage.getItem("access_token"));

	// object request Add Fund
	public data = {
		access_token: this.access_token,
    subject: null,
    description: null
	};

	ngOnInit(){	
		jQuery("#helpForm").validate({
		  rules: {
        subject: {
          required: true
        },
        description: {
          required: true
        },
		  },
		  messages: {
		  	subject: "Data dibutuhkan",
		  	description: "Data dibutuhkan"
		  }
		});
	}

	cancelHelp(){
		this.router.navigateByUrl('/dashboard')
	}

  createHelp(){
    if(jQuery("#helpForm").valid()) {

			this.helpCenterService.postHelp(this.data).then(dataResponse => {
				let message = dataResponse.meta.message;
	      let code = JSON.stringify(dataResponse.meta.code);
	      let data = dataResponse.data;
	      if(code.charAt(0) === '4') {
	        this.handleError(message);
	      } if(code.charAt(0) === '2') {
	        this.handleSuccess(data);
	      };
			})
		} else {
			alert("Data tidak valid")
		}
  }

  handleError(message:any){
  if(message === 'unauthorized') {      
      this.router.navigate(['/dashboard/sign-out']);
     }          
  }
  
  handleSuccess(data:any){
  	alert("Berhasil terkirim");
		this.router.navigateByUrl('/dashboard');
  }
}