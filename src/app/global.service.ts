import { Injectable }		from '@angular/core';
import { Headers, Http }	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';
import { Router }			from '@angular/router';

@Injectable ()
export class GlobalService {
	data:any;
	dataChange : Observable<any>;
	
	constructor () {
		// this.dataChange = new Observable((observer:Observer){
		// 	this.
		// })

	}

	setData(data:any){
		this.data = data;
	}
	
	// loggedin(email,password) : Observable<any> {
	// 	let user = { email: email, password: password };
	// 	// return this.http.post(this.loggedinUrl, user, this.headers);
	// }
}

class ClassName extends GlobalService {
	data:any ;
	dataChange : Observable<any>;

	setData(data:any){
		this.data = data;
		this.dataChange
	}
}

