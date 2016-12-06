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

	public pinjaman = [];

	ngOnInit(){
		this.listInvestasi();
			
	}

	// private acces_token = localStorage.getItem("access_token");
    public token = { access_token : JSON.parse(localStorage.getItem("access_token")) };
	listInvestasi() {
		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

	    let options = new RequestOptions({ headers: headers });



	    console.log(this.token);	    

	    // Get data Agama
		this.http.post('http://masscredit-api.stagingapps.net/user/investment/getlist',this.token,options)
				.map(response => response.json())
				.subscribe((response : any) => {
					// for message
					var code 		= response.meta.code;
					var message 	= response.meta.message;
			
					console.log(response);
					console.log(code,message);
					// get data

					this.pinjaman 	= response.data.investments;
					console.log("Pinjaman",this.pinjaman)

				
				});
		// return this.investasiservice.Index();
	}

}