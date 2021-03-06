import { Injectable }		  from '@angular/core';
import { CanActivate,Router } from '@angular/router'; 


@Injectable()
export class AuthGuard implements CanActivate  {
	constructor (private router : Router) { }
		
	canActivate (){
		var token = localStorage.getItem("access_token");
			if(token){
				return true;
			}
			else{ 
				this.router.navigateByUrl('');
				return false;
			}
	}

}