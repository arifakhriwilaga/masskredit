import { Injectable }		  from '@angular/core';
import { CanActivate,Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthGuardVerifyHandphone implements CanActivate  {
	constructor (private router : Router) { }

	canActivate (){	
		var verify_handphone = localStorage.getItem("verify_handphone");

			if(verify_handphone){
				return true;
			}
			else{ 
				console.log("Maaf anda tidak mengakses halaman ini");
				alert("Maaf anda tidak bisa mengakses halaman ini");
				this.router.navigateByUrl('/auth/register');
				return false;
			}
	}

}