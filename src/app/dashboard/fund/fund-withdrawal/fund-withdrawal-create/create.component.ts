import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

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

	public statusDataWithdrawalFund = 0;

	access_token = JSON.parse(localStorage.getItem("access_token"));
	
	private dataNoReferenceProfile = { access_token : this.access_token }

	public data = {
		access_token : this.access_token,
  	no_reference : null,
  	nama_lengkap : null,
  	bank_id : null,
		no_rekening	: null,
		amount : "",
	}


	public bank = null;

	ngOnInit(){
 		 this.getProfile();
 		 this.getNoReference();
	}

	getNoReference(){
		this.createService.getNoReference(this.dataNoReferenceProfile).then(dataNoReference => {
			this.data.no_reference = dataNoReference;
		});
  }

  getProfile(){
		this.createService.getProfile(this.dataNoReferenceProfile).then(dataProfile => {
			let bank = dataProfile.profile.complement_user.bank;
			let no_rekening = dataProfile.profile.complement_user.no_rekening;
			if(bank == 0) {
      	this.bank = "Belum diisi";
      	this.data.no_rekening = "Belum diisi";
      }if(bank == 1) {
      	this.bank = "BCA";
      }if(bank == 2) {
      	this.bank = "Mandiri";
      }if(bank == 3) {
      	this.bank = "Danamon";
      }if(bank == 4) {
      	this.bank = "Sinarmas";
      }if(bank == 5) {
      	this.bank = "BNI";
      }if(bank == 6) {
      	this.bank = "Niaga";
      };
      if(no_rekening == "") {
      	this.data.no_rekening = "Belum diisi";
      }else{
      	this.data.no_rekening = no_rekening;
      }
			this.data.nama_lengkap = dataProfile.profile.name;
			this.data.bank_id = dataProfile.profile.complement_user.bank;
			this.statusDataWithdrawalFund = 1;
		})
  }
}