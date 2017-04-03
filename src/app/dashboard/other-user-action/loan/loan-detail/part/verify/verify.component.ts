import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyService } from './verify.service';

declare var jQuery:any;
@Component({
	selector: 'verify',
	templateUrl: 'verify.component.html',
	providers:[VerifyService]
})

export class VerifyComponent implements OnInit{ 
	constructor(
		private verifyService:VerifyService, 
		private router:Router
	) { }
	
	public statusConfirm = 1;

	ngOnInit(){
		jQuery('#ModalForm').modal({backdrop: 'static', keyboard: false});
	}

	@Input() dataInvest:any = { 
		access_token: null,
		loan_id: null,
		invest_amount : null,
		password: null
	};

  @Output() statusForm = new EventEmitter<any>()
	hideModal(){
		this.statusForm.emit(0);
	}
  cancelConfirmInvest(){
		jQuery('#ModalForm').modal("toggle");
		this.router.navigateByUrl('dashboard/other-user-action/loan');
	}

	confirmInvest(){
		if(jQuery("#confirmInvestForm").valid()) {
			this.statusConfirm = 0;
			this.verifyService.createLoan(this.dataInvest).then(dataResponse => {
				let message = dataResponse.meta.message;
				let code = JSON.stringify(dataResponse.meta.code);
				// console.log(dataResponse)
				if(code.charAt(0) == '4') {
					this.handleError(message);
				} if(code.charAt(0) == '2') {
					this.handleSuccess();
				};
			})
		}
		else{
			alert("Harap masukan password");
		}
	}

	handleError(message:any){
		try {
			if(message == 'Saldo Anda tidak mencukupi.') {
	      alert("Saldo Anda tidak mencukupi.");

	    } else if (message == 'Jumlah yang anda masukan melebihi jumlah pinjaman.') {
	    	alert("Jumlah yang anda masukan melebihi jumlah pinjaman.");
	   	
	   	} else {
				alert("Password anda salah")
			}
		} finally {
			this.statusConfirm = 1;
		}
  }
  
  handleSuccess(){
  	alert("Pinjaman berhasil dibuat, harap menunggu konfirmasi investor");
		jQuery('#ModalForm').modal("toggle");
		this.router.navigateByUrl('/dashboard/other-user-action/loan');
  }


}