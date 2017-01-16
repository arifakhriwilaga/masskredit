import { Component } 							from '@angular/core';
import { FormGroup, FormBuilder, Validators }  	from '@angular/forms';
import { RegisterService }						from './../register.service';
import { Router }  								from '@angular/router';
import { Headers, Http, RequestOptions }	   from '@angular/http';
// import { RegisterUser }								from './../register';



declare var jQuery:any;
@Component({
	//moduleId: module.id,
	selector: "step-1",

	templateUrl: 'register1.component.html',
	providers:[RegisterService]
})



export class Step1RegisterComponent  { 
	step1Form : FormGroup;
	constructor(
		private registerService : RegisterService, 
		private router : Router, 
		private http : Http,
		// ) {
		
		private formBuilder: FormBuilder) {

		// this.step1Form = this.formBuilder.group({
		// 'nama_lengkap' 			: ["", Validators.required],
		// 'alamat_email' 	 		: ["", Validators.required], // email
		// 'no_handphone'	 		: ["", Validators.required], // number
		// 'password'	 	 		: ["", Validators.required],
		// 'confirm_password' 		: ["", Validators.required],
		// 'jenis_kelamin'	 		: [0, Validators.required],
		// 'id_agama'	 			: [0, Validators.required],
		// 'tempat_lahir'  	 	: ["", Validators.required],
		// 'tanggal_lahir' 	 	: [""],
		// 'alamat'	 			: ["", Validators.required],
		// 'id_provinsi'	 		: [0],
		// 'id_kota'		 		: [0, Validators.required],
		// 'kode_pos'		 		: ["", Validators.required], // number
		// 'id_status_rumah'  		: [0], //
		// 'luas_tanah'		 	: [""], // 
		// 'luas_bangunan' 	 	: [""],// 
		// 'id_tipe_identitas'		: [0, Validators.required],
		// 'nomor_identitas'  		: ["", Validators.required],
		// 'id_status'	 			: [0], //
		// 'nomor_npwp'		 	: [""], // 
		// 'id_tipe_bank'     		: [0, Validators.required],
		// 'nomor_rekening' 	 	: ["", Validators.required], 
		// 'telepon' 				: ["", Validators.required], 

		// });

	}



	
	// Objek for master data
	public agama 			= [];
	public province 		= [];
	public status_rumah 	= [];
	public tipe_identitas 	= [];
	public status 			= [];
	public tipe_bank 		= [];


	private nomor = "";
	ngOnInit(){
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy-mm-dd',
	      // startDate : '2015-01-01',
	      // minDate	: '01/01/2015'

	    });

		jQuery(function($){
			jQuery('#kode_pos').mask('00000');
		});
		jQuery( "#registerForm" ).validate({
		  rules: {
		    nama_lengkap: {
		      required: true
		    },
		    alamat_email: {
		      required: true,
		      email	  : true
		    },
		    password: {
		      required: true
		    },
		    confirm_password: {
		      required: true
		    },
		    jenis_kelamin: {
		      required: true
		    },
		    kode_pos: {
		      required: true
		    },
		    tempat_lahir: {
		      required: true
		    },
		    tanggal_lahir: {
		      required: true
		    },
		    alamat: {
		      required: true
		    },
		    status_rumah: {
		      required: true
		    },
		    luas_tanah: {
		      required: true
		    },
		    luas_bangunan: {
		      required: true
		    },
		  }
		});

		this.nomor = JSON.parse(localStorage.getItem("verify_handphone"));

		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

	    let options = new RequestOptions({ headers: headers });

	    // Get data Agama
		// this.http.get('http://masscredit-backend.stagingapps.net:9000/master/agama',options)
		// 		.map(responseRegion => responseRegion.json())
		// 		.subscribe((responseRegion : any) => {
		// 			this.agama = responseRegion.data.agama;
		// 			console.log("Agama",this.agama)
				
		// 		});
			

		// Get data Provinsi
		// this.http.get('http://masscredit-backend.stagingapps.net:9000/master/provinsi',options)
		// 		.map(responseProvince => responseProvince.json())
		// 		.subscribe((responseProvince : any) => {
		// 			this.province = responseProvince.data.province
		// 			console.log("Provinsi",this.province)
		// 		});
			
		// Get data Status Rumah
		// this.http.get('http://masscredit-backend.stagingapps.net:9000/master/status_rumah',options)
		// 		.map(responseStatus_rumah => responseStatus_rumah.json())
		// 		.subscribe((responseStatus_rumah : any) => {
		// 			this.status_rumah = responseStatus_rumah.data.status_rumah
		// 			console.log("Status Rumah",this.status_rumah)
		// 		});

		// Get data Identitas
		// this.http.get('http://masscredit-backend.stagingapps.net:9000/master/identitas',options)
		// 		.map(responseTipe_identitas => responseTipe_identitas.json())
		// 		.subscribe((responseTipe_identitas : any) => {
		// 			this.tipe_identitas = responseTipe_identitas.data.tipe_identitas
		// 			console.log("Tipe Identitas",this.tipe_identitas)

		// 		});

		// Get data Status
		// this.http.get('http://masscredit-backend.stagingapps.net:9000/master/status',options)
		// 		.map(responseStatus => responseStatus.json())
		// 		.subscribe((responseStatus : any) => {
		// 			this.status = responseStatus.data.status
		// 			console.log("Status",this.status)

		// 		});
		
		// Get data Bank
		// this.http.get('http://masscredit-backend.stagingapps.net:9000/master/bank',options)
		// 		.map(responseBank => responseBank.json())
		// 		.subscribe((responseBank : any) => {
		// 			this.tipe_bank = responseBank.data.tipe_bank
		// 			console.log("Tipe Bank",this.tipe_bank)

		// 		});

	}

		
	
	private register = this.registerService.dataRegister();


	sendRegister(register) {	
		if(jQuery("#registerForm").valid()) {	
			let x : any = document.getElementById("phone_number");
			let phone_number = x.value;
				// this.register.no_handphone		= document.getElementById("no_handphone")
				let tanggal_lahir 	= jQuery("#tanggal_lahir").val();
				this.register.tanggal_lahir = tanggal_lahir;
				this.register.phone_number		= phone_number;
					let headers = new Headers({ 
					 	'Content-Type': 'application/json',
					 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
				 		});

				    let options = new RequestOptions({ headers: headers });

					//API Register 
					this.register;
					// console.log(this.register)
						this.http.post('http://masscredit-api.stagingapps.net/user/credential/register',
						register, 
						options)
						.map(response => response.json())
						.subscribe(
							(response:any) => { 
								// console.log(response)
								var code 		= response.meta.code;
												
								if(code == "200") {
									localStorage.removeItem("access_code");
									localStorage.removeItem("verify_handphone");
									// alert("Registrasi berhasil, cek email untuk verifikasi")
									return this.router.navigateByUrl('/auth/register/finish');
								}else{
									alert("Register gagal")
									return this.router.navigateByUrl('/auth/register/step-1')
								}

							},
							(err:any) => {
								var error   = JSON.parse(err._body)
								var message = error.meta.message
									if(message == "Email sudah terdaftar") {
										alert("Maaf Email sudah terdaftar")
									}
									if(message == "Password dan Confirm Password tidak sama") {
										alert("Password dan Confirm Password tidak sama")
									}
									if(message == "No Handphone sudah terdaftar") {
										alert("No Handphone sudah terdaftar")
									}
									else{
										// console.log(message)
									}
							}
						);
				
		}
		
		else{
			alert("Data tidak valid")
		}
	}

	cancelRegister() {
		localStorage.removeItem("access_code");
		localStorage.removeItem("verify_handphone");
		this.router.navigateByUrl('/auth/register');

			// let data = {
			// 	phone_number : JSON.parse(localStorage.getItem("verify_handphone"))
			// }		
			// 		let headers = new Headers({ 
			// 		 	'Content-Type': 'application/json',
			// 		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
			// 	 		});

			// 	    let options = new RequestOptions({ headers: headers });

			// 		// API Cancel Register 
			// 		console.log(this.register)
			// 			this.http.post('http://masscredit-api.stagingapps.net/user/credential/delete-verification-code',
			// 			data, options)
			// 			.map(response => response.json())
			// 			.subscribe(
			// 				(response:any) => { 
			// 					// console.log(response)
			// 					var code 		= response.meta.code;
												
			// 					if(code == "200") {
			// 						localStorage.removeItem("access_code");
			// 						localStorage.removeItem("verify_handphone");
			// 						return this.router.navigateByUrl('#');
			// 					}

			// 				},
			// 			);
	}

	ngAfterViewInit() {
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy/mm/dd',
	      // setDate	: '12/12/2000'
	    });

	}

	public kota =[];
	public id_provinsi = "";
	getProvinsi(id){

		this.id_provinsi = id;
		console.log(id);
		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});



		var provinsi = JSON.parse(id);
		let Dataprovinsi = {	
				id_provinsi	 : provinsi,
		}

		
		// console.log(id_provinsi);
	    let options = new RequestOptions({ headers: headers });

		// Get data Kota
		this.http.post('http://masscredit-api.stagingapps.net/master/kota',
			Dataprovinsi,
			options)
				.map(responseKota => responseKota.json())
				.subscribe((responseKota : any) => {
					this.kota = responseKota.data.kota
					console.log("Kota",this.kota)

				});

			
				return provinsi;
			
	}

}