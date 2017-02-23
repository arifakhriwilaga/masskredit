import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DetailComponent } from './../detail.component';

declare var jQuery:any;

@Component({
	selector: 'verify',
	template: ` 
		<form name="confirmInvestForm" id="confirmInvestForm">
	    <div class="form-group">
        <input type="password" name="password" placeholder="Password" class="form-control input-md" id="password" [(ngModel)]="invest.password">
	    </div>
  	</form>
	    <div class="form-group">
          <button class="btn btn-default" (click)="cancelConfirmInvest()">Batal</button>
          <button class="btn btn-red" (click)="confirmInvest(invest)"style="background-color: #e74c3c;">
          	<font style="color:white">Verifikasi</font>
          </button> 
	    </div>
  `
})

export class VerifyComponent implements OnInit{ 
	constructor(private detail:DetailComponent, private router:Router) { }
	private invest = this.detail.invest;

	ngOnInit(){
		jQuery( "#confirmInvestForm" ).validate({
		  rules: {
		    password: {
		      required: true
		    },
		  }
		});
	}

	cancelConfirmInvest(){
		this.router.navigateByUrl("/dashboard/other-user-action/loan");
	}

	confirmInvest(){
		if(jQuery("#confirmInvestForm").valid()) {
			this.detail.dataDetailInvest = 3;
			this.detail.postInvest();
			// alert("data valid")
			// this.sendDataInvest();
		}
		else{
			alert("Harap masukan password");
		}
	}
}