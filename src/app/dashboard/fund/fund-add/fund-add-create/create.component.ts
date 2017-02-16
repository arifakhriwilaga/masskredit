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

	public dataFundAdd = 0;

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
  	date : null,
  	no_reference : null,
  	nama_lengkap : null,
  	bank_id : 0,
		no_rekening	: null,
		amount : null,
		nama_bank_lainnya : null,
		id_bank_masscredit: 0,
	}

	// object save data bank when success get data bank on API
	public banks = [];

	// object save data bank when success get data bank on API
	public bank_masscredit = [];

	private listData = 0;
	private lastBank = null;

	// declare object url bank
	private bankUrl = 'https://masscredit-api.stagingapps.net/master/bank';
	

	// declare object url bank
	private bankmasscreditkUrl = "https://masscredit-api.stagingapps.net/master/bank-masscredit";
	
	// declare object url profile
	private profileUrl = 'https://masscredit-api.stagingapps.net/user/credential/profile';
	
	// declare object url no-reference
	private noreferenceUrl = 'https://masscredit-api.stagingapps.net/user/fund/no-reference';


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

  // request get data bank masscredit
  getBankMasscredit(){
	this.http.get(this.bankmasscreditkUrl,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			this.bank_masscredit 		= response.data.tipe_bank;
		},(err:any) => {
			var error   = JSON.parse(err._body);
			var message = error.meta.message;
			if(message == "unauthorized") {
				alert("Maaf session anda telah habis silahkan login kembali");
				this.router.navigateByUrl('/dashboard/sign-out');
			}	
		});
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
				this.dataFundAdd = 1;
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

  // request get data bank
  getBank(){
	this.http.get(this.bankUrl,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			// console.log(response)
			this.banks 		= response.data.tipe_bank;
			// this.listData = 2;
			// let lengthBank = this.banks.length;
			// this.lastBank = this.banks.length+1;
			// let newBank = {
			// 	id_tipe_bank : lengthBank+1,
			// 	desc_tipe_bank : "Lainnya"
			// };
			// for (let i = 0; i < lengthBank; i++) {
			// 	if(i == lengthBank-1) {
			// 		this.banks.push(newBank);
			// 	}
			// }
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
