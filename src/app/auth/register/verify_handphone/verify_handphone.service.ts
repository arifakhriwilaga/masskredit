import { Injectable }		from '@angular/core';
import { Headers, Http }	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';
import { Router }			from '@angular/router';


const verifyHandphoneURL = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/getverificationcode';
@Injectable ()
export class VerifyService {
	constructor(private router : Router, private http: Http) { }

	storeHandphone(phone_number) {
		return this.http
		.post(verifyHandphoneURL,phone)
		.subscribe((data: any) => {
			// var token = data.json();
			// console.log(token.meta.code,token.meta.message);

			// if(token.meta.code == "200") {
			// 	localStorage.removeItem("access_token");
			// 	return this.router.navigateByUrl('/');
			// }
			// else{
			// 	return this.router.navigateByUrl('dashboard')
			// }
		});
	}


	
}