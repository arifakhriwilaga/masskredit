import { Component } 		from '@angular/core';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router }        					   from '@angular/router';

// import { IndexService }	from './index.service';
@Component({
	//moduleId: module.id,
	selector: 'index',
	templateUrl: 'index.component.html'
})


export class IndexLoanComponent { 
	constructor(private http: Http) { }


	ngOnInit(){
		this.listPinjaman();
			
	}

	// private acces_token = localStorage.getItem("access_token");
    public token = {access_token : JSON.parse(localStorage.getItem("access_token"))} ;
	public pinjaman = [];
	listPinjaman() {
		console.log("Sedang mengambil data....")
		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

	    let options = new RequestOptions({ headers: headers });

		this.http.post('http://masscredit-api.stagingapps.net/user/investment/getlist',this.token,options)
				.map(response => response.json())
				.subscribe((response : any) => {
					console.log(response);
					// for message
					// var code 		= response.meta.code;
					// var message 	= response.meta.message;
					this.pinjaman = response.data.investments;
				
					// console.log(code,message);
					// get data

					// this.pinjaman 	= response.data.investments;
					// console.log("Pinjaman",this.pinjaman)

				
				});
		// return this.investasiservice.Index();
	}

	getDetail(value){
		console.log(value);
	}

}