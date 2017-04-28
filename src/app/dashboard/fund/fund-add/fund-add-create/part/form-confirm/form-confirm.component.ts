import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Data } from './data';
import { CreateService } from './../../create.service';


declare var jQuery:any;

@Component({
	selector: 'form-confirm-fund',
	templateUrl: 'form-confirm.component.html',
	providers: [CreateService]
})

export class FormConfirmFundComponent {
	constructor(
		private router:Router, 
		private http:Http,
		private createService:CreateService
	) { }

	// object
	public data = {
		access_token:null,
		date:"",
		no_reference:"",
		nama_lengkap:"",
		bank_id:0,
		no_rekening:null,
		amount:null,
		nama_bank_lainnya:"",
		id_bank_masscredit:0,
		otp:"",
		password:""
	};


	private statusDataConfirm = 1;
	// recieve data after create withdrawal 
	@Input('dataId') incomingDataId:any;
	@Input('dataFundCreate') dataFund:any;
		

	ngOnInit() { 
		jQuery('#FormConfirm').modal({backdrop: 'static', keyboard: false});
		this.data.access_token = this.dataFund.access_token;
		this.data.date = this.dataFund.date;
		this.data.no_reference = this.dataFund.no_reference;
		this.data.nama_lengkap = this.dataFund.nama_lengkap;
		this.data.bank_id = this.dataFund.bank_id;
		this.data.no_rekening = this.dataFund.no_rekening;
		this.data.amount = this.dataFund.amount;
		this.data.nama_bank_lainnya = this.dataFund.nama_bank_lainnya;
		this.data.id_bank_masscredit = this.dataFund.id_bank_masscredit;
  }

  confirmAddFund() {
		if(jQuery("#confirmForm").valid()) {
			// console.log(this.data)

			this.createService.postFundAdd(this.data).then(dataResponse => {
				
				let message = dataResponse.meta.message;
	      let code = JSON.stringify(dataResponse.meta.code);
	      let data = dataResponse.data;

	      if(code.charAt(0) === '4') {
	        this.handleError(message);
	      } if(code.charAt(0) === '2') {
	        this.handleSuccess();
	      };
			})
		}
		else{
			alert("Data tidak valid");
		}
  }

  handleError(message:any){
		// console.log(message)
		if(message == 'unauthorized') {
			alert("Maaf session anda telah habis silahkan login kembali")
			this.router.navigateByUrl('/dashboard/sign-out')					
		
		} if(message == 'Password salah') {
      alert("Password salah")
   		this.statusDataConfirm = 1;
   	}	else{
      alert("Verifikasi salah")
   		this.statusDataConfirm = 1;
   	}		
  }

  handleSuccess(){
  	alert("Penambahan berhasil, harap konfirmasi dana.");
		jQuery('#FormConfirm').modal("toggle");
		this.router.navigateByUrl('/dashboard/fund/fund-add');
  }
  cancelAddFund(){
		jQuery('#FormConfirm').modal("toggle");
	  this.router.navigateByUrl('/dashboard/fund/fund-add')
  }
}
