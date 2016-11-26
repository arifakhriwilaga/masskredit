import { Injectable }		from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router'; 
// import { LoginComponent }      from './../auth/login/login.component';


@Injectable()
export class AuthGuard implements CanActivate  {
	// constructor (private router : Router, private loginComponent : LoginComponent) {  }
		// private user = {
		// 	handphone : '',
		// 	password  : ''
		// }
		// private activate = this.loginComponent.login(this.user);
		
	canActivate (){
		var token = localStorage.getItem("access_token");
			if(token){
				// debugger;
				// this.router.navigateByUrl('dashboard');
				return true;
			}
			else{ 
				// this.router.navigateByUrl('/');
				return false;
			}
	}

}


// export class AuthGuardDashboard implements CanActivate  {
// 	constructor (private router : Router) { }
// 	activate = '';
// 	canActivate (activate){
// 			if(activate == 'false'){
// 				// debugger;
// 				// this.router.navigateByUrl('dashboard');
// 				this.router.navigateByUrl('/');
// 				return false;
// 			}
// 			else {
// 				return true;
// 			}
// 	}

// }
	
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


