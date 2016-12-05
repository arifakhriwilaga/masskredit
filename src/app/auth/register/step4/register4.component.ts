import { Component, OnInit } 				from '@angular/core';
import { RegisterService }					from './../register.service';
import { Headers, Http, RequestOptions }	from '@angular/http';
import { FileUploader }						from 'ng2-file-upload';
import { Router }  								from '@angular/router';


declare var jQuery : any;

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
	//moduleId: module.id,
	selector: 'step4',
	templateUrl: 'register4.component.html'
})

export class Step4RegisterComponent {
	constructor(
		private registerService: RegisterService, 
		private http: Http,
		private router : Router
		// private uploader: FileUploader
	) {	}



	private register = this.registerService.dataRegister();
	private a;
	private b;
	private c;

	stepFinish() {

		let readerFileA = new FileReader();
		readerFileA.onload = function(event, varty) {
			this.a = event.target.result.split(',')[1];
			debugger
			// console.log(this.a);
		}.bind(this);

		let readerFileB = new FileReader();
		readerFileB.onload = function(event, varty) {
			this.b = event.target.result.split(',')[1];
			debugger
			// console.log(this.b)
		}.bind(this)

		let readerFileC = new FileReader();
		readerFileC.onload = function(event, varty) {
			this.c = event.target.result.split(',')[1];
			// console.log(this.c)
		}.bind(this)

		let x : any = document.getElementById("foto_ktp_depan");
		let y : any = document.getElementById("foto_ktp_belakang");
		let z : any = document.getElementById("foto_diri");
		var file_x =	x.files[0];
		var file_y =	y.files[0];
		var file_z =	z.files[0];

		console.log(file_x, file_y, file_z);
		var encode_x  = readerFileA.readAsDataURL(file_x);
		var encode_y  = readerFileB.readAsDataURL(file_y);
		var encode_z  = readerFileC.readAsDataURL(file_z);
		this.register.foto_ktp_depan	= encode_x;
		this.register.foto_ktp_belakang = encode_y;
		this.register.foto_diri			= encode_z;

		this.register.access_token 		= localStorage.getItem("access_code");

		console.log(this.register);

		// Set Headers
		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

	    let options = new RequestOptions({ headers: headers });

		//API Register 
		this.register;
		console.log(this.register)
			this.http.post('http://masscredit-backend.stagingapps.net:9000/user/credential/register',
			this.register, 
			options)
			.map(response => response.json())
			.subscribe((response : any) => {
				var message 	= response.meta.message;
				var code 		= response.meta.code;
				
				console.log(message);
				if(code == "200") {
					localStorage.removeItem("access_code");
					return this.router.navigateByUrl('/');
				}
				else{
					return this.router.navigateByUrl('/auth/register/step-1')
				}
			});
	}
	
	prevStepThree(){
		console.log();
		this.registerService.Step3();
	}


}