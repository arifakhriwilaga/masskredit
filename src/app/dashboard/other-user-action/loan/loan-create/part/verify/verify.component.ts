import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateComponent } from './../../create.component';
import { VerifyService } from'./verify.service';

declare var jQuery:any;
@Component({
	selector: 'verify',
	templateUrl: 'verify.component.html',
	providers: [ VerifyService]
})

export class VerifyComponent implements OnInit{ 
	constructor(
		private create:CreateComponent, 
		private router:Router,
		private verifyService:VerifyService
	) { }
	private loan = this.create.loan;
	public dataConfirmInvest = 0;

	ngOnInit(){
		jQuery('#ModalForm').modal({backdrop: 'static', keyboard: false});
	}

	public statusConfirm = 1;


	@Input() dataLoan:any = {
		access_token: null,
	  loan_name: null,
	  loan_category: 0,
	  other_category: null,
		image: null,
	  description: null,
  	amount: null,
  	due_date: '',
  	interest: null,
  	tenor: null,
  	otp:null,
  	password: null
	}

  @Output() statusForm = new EventEmitter<any>()

	cancelConfirmLoan(){
		jQuery('#ModalForm').modal("toggle");
		this.router.navigateByUrl('dashboard/other-user-action/loan');
	}

	confirmLoan(){
		if(jQuery("#confirmLoanForm").valid()) {
			this.statusConfirm = 0;
			this.verifyService.createInvest(this.dataLoan).then(dataResponse => {
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
	   	} else {
				alert("Password anda salah")
			}
		} finally {
			this.statusConfirm = 1;
		}
  }
  
  handleSuccess(){
  	alert("Pinjaman berhasil dibuat");
		jQuery('#ModalForm').modal("toggle");
		this.router.navigateByUrl('/dashboard/other-user-action/loan');
  }

  hideModal(){
		this.statusForm.emit(0);	
	}
}