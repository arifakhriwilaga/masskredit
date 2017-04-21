import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { ReportProblemService } from './report-problem.service';

declare var jQuery:any;

@Component({
	selector: 'report-problem',
	templateUrl: 'report-problem.component.html',
})

export class ReportProblemComponent implements OnInit{ 
	constructor(
		private router : Router, 
		private http : Http,
		private reportProblemService : ReportProblemService
	) { }

	public statusDataAddFund = 0;
	
	access_token = JSON.parse(localStorage.getItem("access_token"));

	// object request Add Fund
	public data = {
		access_token: this.access_token,
    subject: null,
    device_type: null,
    device_os: null,
    description: null
	};

	ngOnInit(){	
    jQuery("#reportForm").validate({
      rules: {
        device_type: {
          required: true
        },
        device_os: {
          required: true
        },
        subject: {
          required: true
        },
        description: {
          required: true
        },
      },
      messages: {
        device_type: "Data dibutuhkan",
        device_os: "Data dibutuhkan",
        subject: "Data dibutuhkan",
        description: "Data dibutuhkan"
      }
    });
  }

	cancelReport(){
		this.router.navigateByUrl('/dashboard')
	}

  createReport(){
    if(jQuery("#reportForm").valid()) {

  		this.reportProblemService.postReport(this.data).then(dataResponse => {
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