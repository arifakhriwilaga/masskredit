import { Injectable }             	from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } 	from '@angular/router';

@Injectable()
export class AuthResolve implements Resolve<any> {
	
	constructor(private router : Router) {}
	resolve(route:ActivatedRouteSnapshot) {
		var token = localStorage.getItem("access_token");
		if(token) {
			return true;
		}
		else{
			return false;
		}

	}
}
