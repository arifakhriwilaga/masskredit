import { Component, Inject } 				   from '@angular/core';
import { LoginService }						   from './login.service';
import { LocalStorageService } 				   from 'angular-2-local-storage';
import { FormGroup, FormBuilder, Validators }  from '@angular/forms';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router }        					   from '@angular/router';
import { Observable }     					   from 'rxjs/Observable';


declare var jQuery:any
@Component({
	//moduleId: module.id
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

	ngOnInit(){
		jQuery(function($){
			jQuery('#username').mask('000-000-000000');
		});
	}

	public login(user){

	 	let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});
	    
	    let options = new RequestOptions({ headers: headers });
			console.log("Authentication user");
			this.http.post('https://masscredit-api.stagingapps.net/user/credential/login', user , options)
			.subscribe(
				(data : any) => {
				var data 	 = data.json();
				console.log(data);
				localStorage.setItem('access_token', JSON.stringify(data.data.access_token));
					if(data.meta.code == "200") {
						this.router.navigateByUrl('dashboard');
					}
					else{
						this.router.navigateByUrl('/')
					}	
				},
				(err:any) => {
					var error   = JSON.parse(err._body)
					var message = error.meta.message
						if(message == "Account not found") {
							alert("Akun tidak ditemukan")
						}
						if(message == "Account already suspend") {
							alert("Akun belum diaktivasi")
						}
				}

			);
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