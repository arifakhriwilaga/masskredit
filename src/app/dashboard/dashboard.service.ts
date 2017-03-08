import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable ()
export class DashboardService {
	
	constructor (private http:Http) { }
	// set header
	headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});

	options = new RequestOptions({ headers: this.headers });

	private profileUrl = "https://masscredit-api.stagingapps.net/user/credential/profile";
	private dataProfile 

	private token = JSON.parse(localStorage.getItem("access_token"))

	getProfile(token:any): Promise<User>{
	 	return this.http.post(this.profileUrl,token,this.options)
		.toPromise()
		.then(response => response.json().data as User)
		.catch(this.handleError)	
	}

	mapData(response){
		var data = response.json()
	}

	handleError(err){
		var error   = JSON.parse(err._body)
    var code = error.meta.code
    var message = error.meta.message
    console.log(error);
      // if(message == "Password salah!") {
      //   alert("Password salah!")              
      // }if(message == "Verifikasi salah.") {
      //   alert("Verifikasi salah.")              
      // } 
	}


}