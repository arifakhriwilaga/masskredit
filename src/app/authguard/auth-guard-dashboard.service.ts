import { Injectable }		from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router'; 
import { LoginComponent }      from './../auth/login/login.component';

@Injectable()
export class AuthGuardDashboard implements CanActivate  {
	constructor (private router : Router, private loginComponent : LoginComponent) { }

	// private activate = this.loginService.loggedin();
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

	// canActivate (){
	// 		if(this.activate){
	// 			// debugger;
	// 			// this.router.navigateByUrl('dashboard');
	// 			// debugger;
	// 			this.router.navigateByUrl('dashboard');
	// 			return false;
	// 		}
	// 		else{
	// 			// this.router.navigateByUrl('');
	// 			// return true;
	// 		}
	// }

}