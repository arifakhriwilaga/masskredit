import { Component, OnInit } 	from '@angular/core';
import { ComplementComponent }	from './../complement.component';

import { Headers, Http, RequestOptions }	   from '@angular/http';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'bank',
	templateUrl: 'bank.component.html'
})

export class BankComponent { 

	constructor(private complement:ComplementComponent, private http : Http) {
	// initial objek in complement data
	this.data = this.complement.data;
		
	}

	// objek for save data bang when success get data bank on API
	private banks = [];

	private headers = new Headers({ 
			 	'Content-Type': 'application/json',
			 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
		 	});

	private options = new RequestOptions({ headers: this.headers });

	ngOnInit(){
		// Request for get data bank
		this.http.get('http://masscredit-api.stagingapps.net/master/bank',this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					var banks 		= response.data.tipe_bank;
					this.banks 		= banks;
					console.log(response);
					// this.router.navigateByUrl('/dashboard/fund');
				},
				(err:any) => {
					var error   = JSON.parse(err._body)
					var message = error.meta.message
						// if(message == "unauthorized") {
						// 	alert("Maaf session anda telah habis silahkan login kembali")
						// 	return this.router.navigateByUrl('/dashboard/sign-out')
							
						// }	
				}
			);			
		
	}

	public data = { }

	// get id bank name
	getBankName(id){
		this.complement.data.bank = id;
	}
}