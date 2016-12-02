import { Component, Inject } 				   from '@angular/core';
import { LoginService }						   from './login.service';
import { LocalStorageService } 				   from 'angular-2-local-storage';
import { FormGroup, FormBuilder, Validators }  from '@angular/forms';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router }        					   from '@angular/router';
import { Observable }     					   from 'rxjs/Observable';



@Component({
	moduleId   : module.id,
	selector   : 'login',
	templateUrl: 'login.component.html',
	providers  : [LoginService] 
})

export class LoginComponent {

	// intance 
	constructor(private http : Http, private loginService : LoginService, private router:Router){ }

	private user = { 
		username 	: "", 
		password	: "" 
	};

	public login(user){

 	let headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
 	});
    
    let options = new RequestOptions({ headers: headers });
		console.log(user);
		this.http.post('http://masscredit-backend.stagingapps.net:9000/user/credential/login', user , options)
		.subscribe((data : any) => {
			var data 	 = data.json();
			console.log(data);
			localStorage.setItem('access_token', JSON.stringify(data.data.access_token));
				if(data.meta.code == "200") {
					return this.router.navigateByUrl('dashboard');
				}
				else{
					return this.router.navigateByUrl('/')
				}
			
		});
			// debugger;
			// console.log(token.meta.code,token.meta.message, user);

	}

	// private extractData(res:Response) {
	// 	let body = res.json();
	// 	return body.data || { };
	// }

 }
			
			// if(response.data = "200") {
			// 	// redirect()	
			// }
			// elseif(response.data = "400"){

			// }
			// else{

			// }


		// this.loginService.loggedin(user.email,user.password)
		// .map(response => response.json().data.acces_token)
		// .subscribe((response : any) => {
		// 	debugger();
		// }, (error) => {

		// }, () => {
		// 	console.log(user);
		// 	// console.log(this.data);
		// 	// @LocalStorage(user);
		// });