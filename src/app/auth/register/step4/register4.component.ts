import { Component, OnInit } 				from '@angular/core';
import { RegisterService }					from './../register.service';
import { Headers, Http, RequestOptions }	from '@angular/http';
import { FileUploader }						from 'ng2-file-upload';
import { Router }  								from '@angular/router';

import { Step1RegisterComponent } 				from './../step1/register1.component';
import { FormGroup, FormBuilder, Validators }  	from '@angular/forms';

declare var jQuery : any;

// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
	//moduleId: module.id,
	selector: 'step4',
	templateUrl: 'register4.component.html'
})

export class Step4RegisterComponent {
	// constructor(
	// 	private registerService: RegisterService, 
	// 	private http: Http,
	// 	private router : Router,
	// 	private step1 : Step1RegisterComponent, 
	// 	private formBuilder: FormBuilder) { 
			
	// 		var register = this.registerService.dataRegister();
	
	// 		this.step4Form = this.formBuilder.group({


	// 		// step4
			
	// 		'foto_ktp_depan' 	  	: '', //required
	// 		'foto_ktp_belakang' 	: '', //required
	// 		'foto_diri'				: '', //required
	// 		}); 
	// 	}

	// private step4Form = this.step1.step1Form;


	// private register = this.registerService.dataRegister();

	// stepFinish() {
	// 	// this.register.foto_ktp_depan 	= value.foto_ktp_depan,
	// 	// this.register.foto_ktp_belakang	= value.foto_ktp_belakang,
	// 	// this.register.foto_diri 		= value.foto_diri,
		
	// 	console.log(this.register);

	// let a;
	// let b;
	// let c;

	// 	let readerFileA = new FileReader();
	// 	readerFileA.onload = function(event, varty) {
	// 		let fileA = event.target.result.split(',')[1];
	// 		this.register.foto_ktp_depan = fileA;
	// 		console.log(this.register.foto_ktp_depan);
			
	// 		// return fileA;
	// 	}.bind(this);

	// 	let readerFileB = new FileReader();
	// 	readerFileB.onload = function(event, varty) {
	// 		let fileB = event.target.result.split(',')[1];
	// 		this.register.foto_ktp_belakang	= fileB;
	// 		// console.log(this.register.foto_ktp_belakang);

	// 		// return b;
	// 	}.bind(this)

	// 	let readerFileC = new FileReader();
	// 	readerFileC.onload = function(event, varty) {
	// 		var registerService : RegisterService;
	// 		let fileC = event.target.result.split(',')[1];
	// 		this.register.foto_diri			=	fileC;
	// 		// console.log(this.register);
		
	// 		// Set Headers
	// 		let headers = new Headers({ 
	// 		 	'Content-Type': 'application/json',
	// 		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	// 	 	});

	// 	    let options = new RequestOptions({ headers: headers });

	// 		//API Register 
	// 		this.register;
	// 		console.log(this.register)
	// 			this.http.post('http://masscredit-api.stagingapps.net/user/credential/register',
	// 			dataRegister, 
	// 			options)
	// 			.map(response => response.json())
	// 			.subscribe((response : any) => {
	// 				var message 	= response.meta.message;
	// 				var code 		= response.meta.code;
					
	// 				console.log(message);
	// 				if(code == "200") {
	// 					localStorage.removeItem("access_code");
	// 					return this.router.navigateByUrl('/');
	// 				}
	// 				else{
	// 					return this.router.navigateByUrl('/auth/register/step-1')
	// 				}
	// 			});
	// 	}.bind(this)

	// 	let x : any = document.getElementById("foto_ktp_depan");
	// 	let y : any = document.getElementById("foto_ktp_belakang");
	// 	let z : any = document.getElementById("foto_diri");
	// 	var file_x =	x.files[0];
	// 	var file_y =	y.files[0];
	// 	var file_z =	z.files[0];

	// 	// console.log(file_x);
	// 	var encode_x  = readerFileA.readAsDataURL(file_x);
	// 	var encode_y  = readerFileB.readAsDataURL(file_y);
	// 	var encode_z  = readerFileC.readAsDataURL(file_z);

	// 	this.register.access_token 		= localStorage.getItem("access_code");
	// 	var dataRegister = this.register;
		
	


	// }
	
	// prevStepThree(value){
	// 	this.register.foto_ktp_depan 	= value.foto_ktp_depan;
	// 	this.register.foto_ktp_belakang	= value.foto_ktp_belakang;
	// 	this.register.foto_diri 		= value.foto_diri;
	// 	console.log(value);
	// 	this.registerService.Step3();
	// }


}