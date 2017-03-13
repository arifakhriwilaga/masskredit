import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Data } from './data';
import { ConfirmService } from './confirm.service';

declare var jQuery:any;

@Component({
	selector: 'form-confirm',
	templateUrl: 'form-confirm.component.html',
	providers: []
})

export class FormConfirmComponent {
	constructor(
		private router:Router, 
		private http:Http,
		private confirmService:ConfirmService
	) { }

	// object
	public data = {
		access_token: JSON.parse(localStorage.getItem("access_token")),
		id: this.incomingDataId,
		verification_code: this.incomingDataVerificationCode,
		password: null
	};

	private dataConfirm = 1;
	// recieve data from dashboard 
	@Input('dataId') incomingDataId:any;
	@Input('dataVerificationCode') incomingDataVerificationCode:any;


	ngOnInit() { 
		jQuery('#FormConfirm').modal({backdrop: 'static', keyboard: false});
  }

  confirmWithdrawal(data) {
		if(jQuery("#confirmForm").valid()) {
			this.confirmService.postConfirm(this.data).catch(error => {
	  		console.log(error);
	  	}).then(metaConfirm => {
	  		console.log(metaConfirm)
	  	})
			// this.dataConfirm = 0;
	  // 	this.data.id = this.incomingDataId;
	  // 	this.data.verification_code = this.incomingDataVerificationCode
			//  // API request data confirm
	  //   this.http.post(this.confirmwithdrawalUrl,this.data,this.options)
   //     	.map(response => response.json())
   //     	.subscribe((response : any) => {
			// 		jQuery('#modalFormConfirm').modal("toggle");
   //        alert("Penarikan dana berhasil")
   //        this.router.navigateByUrl('/dashboard/fund/fund-withdrawal');
   //     	},(err:any) => {
   //       	var error   = JSON.parse(err._body)
   //       	var message = error.meta.message
   //       	var code = error.meta.code
   //       	if(message == "unauthorized") {
   //         	alert("Maaf session anda telah habis silahkan login kembali")
   //         	return this.router.navigateByUrl('/dashboard/sign-out')     
         	
   //       	}if(message == "Password salah") {
   //       		this.dataConfirm = 1;
   //          alert("Password salah")
   //       	}       
   //     	});
		}
		else{
			alert("Data tidak valid");
		}
  }

  cancelWithdrawal(){
  localStorage.removeItem("id_verification")
	localStorage.removeItem("verification_code")
	jQuery('#modalFormConfirm').modal("toggle");

	return this.router.navigateByUrl('/dashboard/fund/fund-withdrawal')
  }
}
