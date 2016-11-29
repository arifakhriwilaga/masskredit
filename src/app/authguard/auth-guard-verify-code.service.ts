import { Injectable }		  from '@angular/core';
import { CanActivate,Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthGuardVerifyCode implements CanActivate  {
	// protected verify = '';
	constructor (private router : Router) { 
	// console.log(this.verify);
	}
	// token = this.activatedRoute.snapshot.data;

	canActivate (){	
		var token = localStorage.getItem("access_code");
		// console.log(verify);
		// debugger

			if(!token){
				return true;
			}
			else{ 
				console.log("Maaf anda tidak mengakses halaman ini")
				this.router.navigateByUrl('/auth/register/step-1');
				return false;
			}
	}

}