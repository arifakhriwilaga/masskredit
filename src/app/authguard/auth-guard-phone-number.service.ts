import { Injectable }		  from '@angular/core';
import { CanActivate,Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthGuardVerifyCodeHandphone implements CanActivate  {
	// protected verify = '';
	constructor (private router : Router) { 
	// console.log(this.verify);
	}
	// token = this.activatedRoute.snapshot.data;

	canActivate (){	
		var handphone = localStorage.getItem("verify_handphone");
			if(!handphone){
				return true;
			}else{ 
				console.log("Maaf anda tidak mengakses halaman ini")
				this.router.navigateByUrl('/auth/register/verify-code');
				return false;
			}
	}

}