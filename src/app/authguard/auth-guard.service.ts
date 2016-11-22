import { Injectable }		from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'; 
import { AuthService }      from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate  {
	constructor (private authService : AuthService, private router : Router) { }
	canActivate (){
		var token = localStorage.getItem("access_token");
			if(token){ 
				this.router.navigate(['dashboard']);
			}
			else{ 
				this.router.navigate(['']);
				return false;
			}

	}

}
	
	// public resolve() {	
	// 	var token = localStorage.getItem('access_token') 
	// 	if(token) {
	// 		return token;
	// 	}
	// 	else{
	// }

	// constructor(private loginService : LoginService, private router : Router) {}
	
	// CanActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
	// 	let url: string = state.url;
	// }


