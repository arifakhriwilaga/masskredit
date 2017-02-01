import { Injectable }		from '@angular/core';
import { Headers, Http }	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';

// Declare Token
const localtoken 	= JSON.parse(localStorage.getItem('access_token'));
const token_tambah 	= '34g35g3';

// URL API
const createURL = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/investloan/new'; 
const indexURL  = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/investment/getlist';

@Injectable ()
export class LoanService {
	private headers  		= new Headers ({'Content-Type' : 'application/json'}); //URL to web API
	private token = localtoken + token_tambah ;

	constructor (private http:Http) { }

	Index(){
		debugger;
		if(this.token == "51ef25d29I34Ln1341451adV351534g35g3") {
			console.log("Berhasil ari")
			return this.http
			.post(indexURL,this.token)
			.subscribe((data: any) => {
				var getdata = data.json();
				console.log(getdata);
			})
		}
		else{
			console.log("data gagal coy",localtoken);
		}
	}
	
	Create(data) {
		// code...
	}

	Update(data){
		// code...
	}


}
		// console.log(token) 
		// debugger;
