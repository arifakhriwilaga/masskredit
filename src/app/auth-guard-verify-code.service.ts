import { Injectable }		  from '@angular/core';
import { CanActivate,Router, ActivatedRoute } from '@angular/router';
import {Subscription } from 'rxjs'; 


@Injectable()
export class AuthGuardVerify implements CanActivate  {
	// protected verify = '';
	constructor (private router : Router, private activatedRoute : ActivatedRoute) { 
	// console.log(this.verify);
	}
	// token = this.activatedRoute.snapshot.data;

	canActivate (){	
		var token = localStorage.getItem("access_code");

			if(token){
				return true;
			}
			else{ 
				console.log("Anda belum mengirim no handphone");
				this.router.navigateByUrl('');
				return false;
			}
	}

}