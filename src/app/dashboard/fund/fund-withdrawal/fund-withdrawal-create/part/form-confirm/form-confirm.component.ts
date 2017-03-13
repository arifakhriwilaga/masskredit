import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Data } from './data';
import { ConfirmService } from './confirm.service';

declare var jQuery:any;

@Component({
	selector: 'form-confirm',
	templateUrl: 'form-confirm.component.html',
	providers: [ConfirmService]
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

	private statusDataConfirm = 1;
	// recieve data after create withdrawal 
	@Input('dataId') incomingDataId:any;
	@Input('dataVerificationCode') incomingDataVerificationCode:any;


	ngOnInit() { 
		jQuery('#FormConfirm').modal({backdrop: 'static', keyboard: false});
		if(this.incomingDataId != null && this.incomingDataVerificationCode != null) {
			this.data.id = this.incomingDataId;
			this.data.verification_code = this.incomingDataVerificationCode;
		}
  }

  confirmWithdrawal(data) {
		if(jQuery("#confirmForm").valid()) {
			this.statusDataConfirm = 0;
			this.confirmService.postConfirm(this.data)
	  	.then(metaConfirm => {
	  		let message = metaConfirm.meta.message;
	  		let code = JSON.stringify(metaConfirm.meta.code);
	  		
	  		if(code.charAt(0) == '4') {
	  			this.handleError(message);
	  		} if(code.charAt(0) == '2') {
	  			this.handleSuccess();
	  		}
	  	})
			
		}
		else{
			alert("Data tidak valid");
		}
  }

  handleError(message:any){
		if(message == 'unauthorized') {
			alert("Maaf session anda telah habis silahkan login kembali")
			this.router.navigateByUrl('/dashboard/sign-out')					
		
		} if(message == 'Password salah') {
      alert("Password salah")
   		this.statusDataConfirm = 1;
   	}					
  }

  handleSuccess(){
  	alert("Penarikan berhasil, harap menunggu konfirmasi admin");
		jQuery('#FormConfirm').modal("toggle");
		this.router.navigateByUrl('/dashboard/fund/fund-withdrawal');
  }
  cancelWithdrawal(){
		jQuery('#FormConfirm').modal("toggle");
	  this.router.navigateByUrl('/dashboard/fund/fund-withdrawal')
  }
}
