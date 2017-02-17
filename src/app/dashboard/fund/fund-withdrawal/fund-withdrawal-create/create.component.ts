import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { CreateService } from './create.service';
// import { ValidationServiceInvestasi }	from './validationservice.component';

declare var jQuery:any;

@Component({
	selector: 'create',
	templateUrl: 'create.component.html',
})

export class CreateComponent implements OnInit{ 
	constructor(
		private router : Router, 
		private http : Http
	) { }

	public dataFundWithdrawal = 0;

	// set headers
  private headers = new Headers({ 
		'Content-Type': 'application/json',
		'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	})
	private options = new RequestOptions({ headers: this.headers })

	// get access_token in localstorage
	access_token = JSON.parse(localStorage.getItem("access_token"));
	
	// objek request Get No Reference
	private data_access_token = {
		access_token : this.access_token
	}

	// object request Add Fund
	public data = {
		access_token : this.access_token,
  	no_reference : null,
  	nama_lengkap : null,
  	bank_id : null,
		no_rekening	: null,
		amount : null,
  	// date : null,
		// other_bank : null
	}

	// object save data bank when success get data bank on API
	public banks = [];

	private formConfirm = 0;

	private listData = 0;
	private lastBank = null;
	public bank = null;

	// declare object url bank
	private bankUrl = 'https://masscredit-api.stagingapps.net/master/bank';
	
	// declare object url profile
	private profileUrl = 'https://masscredit-api.stagingapps.net/user/credential/profile';
	
	// declare object url no-reference
	private noreferenceUrl = 'https://masscredit-api.stagingapps.net/user/fund/no-reference';


	ngOnInit(){
		// request get profile
 		 this.getProfile();
 		 // request get no reference
 		 this.getNoReference();
	}

	// request get no reference
  getNoReference(){
	this.http.post(this.noreferenceUrl,this.data,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			var code 		= response.meta.code;
			var message 	= response.meta.message;
			var no_reference= response.data.no_reference;
			this.data.no_reference = no_reference;
			this.listData = 3;
			// console.log(this.listData)
			if(this.listData == 3) {
				this.dataFundWithdrawal = 1;
			}
		},(err:any) => {
			var error   = JSON.parse(err._body);
			var message = error.meta.message;
				if(message == "unauthorized") {
					alert("Maaf session anda telah habis silahkan login kembali");
					this.router.navigateByUrl('/dashboard/sign-out');
				}	
		});
  }

  // request get profile
  getProfile(){
		this.http.post(this.profileUrl,this.data_access_token,this.options)
      .map(response => response.json())
      .subscribe((response : any) => {
        // console.log(response);
        this.data.nama_lengkap	= response.data.profile.name;
        let bank	= response.data.profile.complement_user.bank;
        let no_rekening	= response.data.profile.complement_user.no_rekening;
        this.data.bank_id = bank;
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
        	this.bank = "BNI";
        }if(bank == 5) {
        	this.bank = "Niaga";
        };
        if(no_rekening == "") {
        	this.data.no_rekening = "Belum diisi";
        }else{
        	this.data.no_rekening = no_rekening;
        }
	    },(err:any) => {
	      var error   = JSON.parse(err._body);
	      var message = error.meta.message;
	      if(message == "unauthorized") {
	        alert("Maaf session anda telah habis silahkan login kembali");
	        this.router.navigateByUrl('/dashboard/sign-out');
	      }  
	    });
  }
}