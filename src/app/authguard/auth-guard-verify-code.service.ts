import { Injectable }	from '@angular/core';
import { CanActivate,Router } from '@angular/router';


@Injectable()
export class AuthGuardVerifyCode implements CanActivate  {
	constructor (private router : Router) { }

	canActivate (){	
		var token = localStorage.getItem("access_code");
			if(!token){
				return true;
			}else{ 
				console.log("Maaf anda tidak mengakses halaman ini");
				alert("Maaf anda tidak bisa mengakses halaman ini");
				this.router.navigateByUrl('/auth/register/step-register');
				return false;
			}
	}

}