import { Injectable }		  from '@angular/core';
import { CanActivate,Router } from '@angular/router'; 

@Injectable()
export class AuthGuardDashboard implements CanActivate  {
	constructor (private router : Router) { }

	canActivate (){
		var token = localStorage.getItem("access_token");
			if(!token){
				return true;
			}
			else {
				this.router.navigateByUrl('dashboard');
				return false;
			}

	}
}