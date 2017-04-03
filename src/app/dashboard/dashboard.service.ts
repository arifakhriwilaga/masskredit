import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Injectable ()
export class DashboardService {
	
	constructor (
		private http:Http,
		private router:Router
	) { }
	// set header
	headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});

	options = new RequestOptions({ headers: this.headers });

	private profileUrl = "https://masscredit-api.stagingapps.net/user/credential/profile";
	private dataProfile 

	private token = JSON.parse(localStorage.getItem("access_token"))

	getProfile(token:any): Promise<any>{
	 	return this.http.post(this.profileUrl,token,this.options)
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError)	
	}

	handleError(err){
		var error = JSON.parse(err._body);
    return error;
	}

	private data = new Subject<any>();
	data$ = this.data.asObservable();

	sendData(data:string){
		this.data.next(data);
	}

}