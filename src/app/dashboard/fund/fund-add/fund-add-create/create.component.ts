import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Bank } from './bank';
import { BankMassCredit } from './bank-masscredit';
import { User } from './user';
import { NoReference } from './no-reference';
import { Data } from './data';

import { CreateService } from './create.service';

declare var jQuery:any;

@Component({
	selector: 'create',
	templateUrl: 'create.component.html',
})

export class CreateComponent implements OnInit{ 
	constructor(
		private router : Router, 
		private http : Http,
		private createService : CreateService
	) { }

	public statusDataAddFund = 0;
	
	access_token = JSON.parse(localStorage.getItem("access_token"));
	// objek request Get No Reference
	private dataNoReferenceProfile = { access_token : this.access_token }

	// object request Add Fund
	public data:Data = {
		access_token:this.access_token,
		date:"",
		no_reference:"",
		nama_lengkap:"",
		bank_id:0,
		no_rekening:"",
		amount:"",
		nama_bank_lainnya:"",
		id_bank_masscredit:0,
	};

	public banks:Bank[];
	public bankMassCredits:BankMassCredit[];

	ngOnInit(){
		// request get profile
		this.getProfile();
		// request get bank
		this.getBank();
		// request get no reference
		this.getNoReference();
		// request get bank masscredit
		this.getBankMasscredit();
	}

  getBankMasscredit(){
		this.createService.getBankMasscredit().then(dataBankMassCredit => {
			this.bankMassCredits = dataBankMassCredit;
			this.statusDataAddFund = 1
		})
  }

  getNoReference(){
		this.createService.getNoReference(this.dataNoReferenceProfile).then(dataNoReference => {
			this.data.no_reference = dataNoReference;
		});
  }

  getBank(){
		this.createService.getBank().then(dataBank => {
			this.banks = dataBank;
		})
  }


  getProfile(){
		this.createService.getProfile(this.dataNoReferenceProfile).then(dataProfile => {
			this.data.nama_lengkap = dataProfile;
		})
  }

  dataCreate:any;
  statusDataFundCreate:number;
  dataFundCreate(data:any){
  	if (data) {
	  	this.createService.getOtp(this.dataNoReferenceProfile).then(dataOtp => {
	  		let message = dataOtp.meta.message;
	      let code = JSON.stringify(dataOtp.meta.code);
	      // console.log(dataOtp.data);

	      if(code.charAt(0) === '4') {
	        this.handleError(message);
	      } if(code.charAt(0) === '2') {
	        this.handleSuccess(data);
	      };
			})
  	} else {
  		alert("Penambahan dana gagal");
  	}
  }

  handleError(message:any){
  	if(message === 'unauthorized') {      
      this.router.navigate(['/dashboard/sign-out']);
    }          
  }

  handleSuccess(data:any){
  	this.dataCreate = data
  	this.statusDataFundCreate = 1;
  }
}
