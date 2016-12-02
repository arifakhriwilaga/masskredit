import { Component, OnInit } 				from '@angular/core';
import { RegisterService }					from './../register.service';
import { Headers, Http, RequestOptions }	from '@angular/http';
import { FileUploader }						from 'ng2-file-upload';

declare var jQuery : any;

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
	moduleId: module.id,
	selector: 'step4',
	templateUrl: 'register4.component.html'
})

export class Step4RegisterComponent implements OnInit {
	constructor(
		private registerService: RegisterService, 
		private http: Http,
		// private uploader: FileUploader
	) {	}



	private headers  	= new Headers ({'Content-Type' : 'application/json'}); //URL to web API
	private register = this.registerService.dataRegister();
	private a;



	
	// getFoto(event) {
	// 		var foto_ktp_depan: any = event.target || event.srcElement;
	// 		console.log(foto_ktp_depan.files);
	// 		// console.log(d)
	// 		// return x;
	// }

	ngOnInit(){

		// console.log(this.register);
		// return this.register;
	}

	stepFinish() {

		let readerFile = new FileReader();
		readerFile.onload = function(event, varty) {
			this.a = event.target.result.split(',')[1];
			console.log(this.a);
		}.bind(this);

		// var img = preg_replace('#^data:image/[^;]+;base64#','', $s['image']);

		let x : any = document.getElementById("foto_ktp_depan");
		let y : any = document.getElementById("foto_ktp_belakang");
		let z : any = document.getElementById("foto_diri");

		var file_x =	x.files[0];

		var encode_x  = readerFile.readAsDataURL(file_x);
		// console.log(encode_x);
		
		// var file_x   = x.files[0];

		// console.log(encode_x);
		// consol
		// var decode_x = atob(encode_x);
		// var decode_x = atob(string_x);
		// console.log(encode_x);
		// console.log([x.files[0],y.files[0],z.files[0]]);
		// this.register.foto_ktp_depan	= JSON.stringify(x.files[0]);
		// this.register.foto_ktp_belakang = JSON.stringify(y.files[0]);
		// this.register.foto_diri			= JSON.stringify(z.files[0]);
		let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });



		// this.register;
		// console.log(this.register)
			// this.http.post('http://masscredit-backend.stagingapps.net:9000/user/credential/register',
			// 	this.register, 
			// 	options)
			// .map(response => response.json())
			// .subscribe((response : any) => {
			// 	console.log(response);
				// var token 	 = data.json();
				// localStorage.setItem('access_token', JSON.stringify(token.data.access_token));
				// debugger;
				// console.log(token.meta.code,token.meta.message, user);
				// if(token.meta.code == "200") {
					// return this.router.navigateByUrl('dashboard');
				// }
				// else{
					// return this.router.navigateByUrl('/')
				// }
			// });
	}

	ngAfterViewInit(){
		function readURL(input){
			if(input.files && input.filse[0]) {
				var reader = new FileReader();
				reader.onload = function(e) {
					jQuery('#foto_ktp_depan')
					.attr('src', e.target)
					.width(150)
					.height(200);
				};
				reader.readAsDataURL(input.files[0]);
			}
		}
	}
	
	prevStepThree(){
		console.log();
		this.registerService.Step3();
	}


}