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

		this.step1Form = this.formBuilder.group({
		'nama_lengkap' 			: ["", Validators.required],
		'alamat_email' 	 		: ["", Validators.required], // email
		'no_handphone'	 		: ["", Validators.required], // number
		'password'	 	 		: ["", Validators.required],
		'confirm_password' 		: ["", Validators.required],
		'jenis_kelamin'	 		: [0, Validators.required],
		'id_agama'	 			: [0, Validators.required],
		'tempat_lahir'  	 	: ["", Validators.required],
		'tanggal_lahir' 	 	: [""],
		'alamat'	 			: ["", Validators.required],
		'id_provinsi'	 		: [0],
		'id_kota'		 		: [0, Validators.required],
		'kode_pos'		 		: ["", Validators.required], // number
		'id_status_rumah'  		: [0], //
		'luas_tanah'		 	: [""], // 
		'luas_bangunan' 	 	: [""],// 
		'id_tipe_identitas'		: [0, Validators.required],
		'nomor_identitas'  		: ["", Validators.required],
		'id_status'	 			: [0], //
		'nomor_npwp'		 	: [""], // 
		'id_tipe_bank'     		: [0, Validators.required],
		'nomor_rekening' 	 	: ["", Validators.required], 
		'telepon' 				: ["", Validators.required], 

		});

	}



	
	// Objek for master data
	public agama 			= [];
	public province 		= [];
	public status_rumah 	= [];
	public tipe_identitas 	= [];
	public status 			= [];
	public tipe_bank 		= [];



	ngOnInit(){
	
		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

	    let options = new RequestOptions({ headers: headers });

	    // Get data Agama
		this.http.get('http://masscredit-backend.stagingapps.net:9000/master/agama',options)
				.map(responseRegion => responseRegion.json())
				.subscribe((responseRegion : any) => {
					this.agama = responseRegion.data.agama;
					console.log("Agama",this.agama)
				
				});
			

		// Get data Provinsi
		this.http.get('http://masscredit-backend.stagingapps.net:9000/master/provinsi',options)
				.map(responseProvince => responseProvince.json())
				.subscribe((responseProvince : any) => {
					this.province = responseProvince.data.province
					console.log("Provinsi",this.province)
				});
			
		// Get data Status Rumah
		this.http.get('http://masscredit-backend.stagingapps.net:9000/master/status_rumah',options)
				.map(responseStatus_rumah => responseStatus_rumah.json())
				.subscribe((responseStatus_rumah : any) => {
					this.status_rumah = responseStatus_rumah.data.status_rumah
					console.log("Status Rumah",this.status_rumah)


				});

		// Get data Identitas
		this.http.get('http://masscredit-backend.stagingapps.net:9000/master/identitas',options)
				.map(responseTipe_identitas => responseTipe_identitas.json())
				.subscribe((responseTipe_identitas : any) => {
					this.tipe_identitas = responseTipe_identitas.data.tipe_identitas
					console.log("Tipe Identitas",this.tipe_identitas)

				});

		// Get data Status
		this.http.get('http://masscredit-backend.stagingapps.net:9000/master/status',options)
				.map(responseStatus => responseStatus.json())
				.subscribe((responseStatus : any) => {
					this.status = responseStatus.data.status
					console.log("Status",this.status)

				});
		
		// Get data Bank
		this.http.get('http://masscredit-backend.stagingapps.net:9000/master/bank',options)
				.map(responseBank => responseBank.json())
				.subscribe((responseBank : any) => {
					this.tipe_bank = responseBank.data.tipe_bank
					console.log("Tipe Bank",this.tipe_bank)

				});

	}

		
	
	private register = this.registerService.dataRegister();


	nextStepTwo(value) {		

		value.id_provinsi = this.id_provinsi
		value.tanggal_lahir =  jQuery("#tanggal_lahir").datepicker("getDate")
		this.register.tanggal_lahir 	= value.tanggal_lahir,
		this.register.nama_lengkap 		= value.nama_lengkap,
		
		this.register.alamat_email 		= value.alamat_email,
		this.register.no_handphone 		= value.no_handphone,
		this.register.password	   		= value.password ,
		this.register.confirm_password 	= value.confirm_password ,
		this.register.jenis_kelamin		= value.jenis_kelamin ,
		this.register.id_agama 		 	= value.id_agama ,
		this.register.tempat_lahir 		= value.tempat_lahir  	 ,
		this.register.tanggal_lahir 	= value.tanggal_lahir ,
		this.register.alamat 			= value.alamat ,
		this.register.id_provinsi 	 	= value.id_provinsi ,
		this.register.id_kota 		 	= value.id_kota,
		this.register.kode_pos 		 	= value.kode_pos,
		this.register.id_status_rumah  	= value.id_status_rumah,
		this.register.luas_tanah 		= value.luas_tanah,
		this.register.luas_bangunan 	= value.luas_bangunan,
		this.register.id_tipe_identitas	= value.id_tipe_identitas,
		this.register.nomor_identitas  	= value.nomor_identitas,
		this.register.id_status	 	 	= value.id_status,
		this.register.nomor_npwp 		= value.nomor_npwp,
		this.register.id_tipe_bank     	= value.id_tipe_bank,
		this.register.nomor_rekening 	= value.nomor_rekening,
		this.register.telepon  	 		= value.telepon,


		this.registerService.Step2();
		// this.register = register;


		// debugger
		// if(this.register) {
		// 	console.log(this.register);	
		// }
		// else{
		// 	console.log('data gagal disimpan');
		// }
	}

	checkValid(value){

		if(value) {
			var count = parseInt(value);
			console.log(count);
			console.log("Data divalidasi")
			for (let a of value) {

				console.log(a);
			} 

		}
		else{
			console.log("Data Valid")
		}
		// console.log(value)
		// if(value.nama_lengkap == "") {
		// 	console.log("Data tidak valid");
			// value.nama_lengkap.hasError('required');
			// return Validators.required;
             // step1Form.controls['alamat_email'].hasError('required') && step1Form.controls['alamat_email'].touched
			// jQuery.click();
		// }
		// else{
		// 	console.log("Data Valid");
		// }
			// this.nextStepTwo(value);

			
		// value.tanggal_lahir =  jQuery("#tanggal_lahir").datepicker("getDate")
		// value.id_provinsi 	= jQuery("#provinsi").val();
		// console.log(value.id_provinsi)
		// console.log(value.tanggal_lahir)
		// this.step1Form.tanggal_lahir

		// this.register.tanggal_lahir = jQuery("#tanggal_lahir").datepicker("getDate");

		// console.log(value)
		// this.nextStepTwo(value);
		// let x: undefined;
	}

	cancelRegister(register) {
		document.getElementById("registerForm");		
		localStorage.removeItem("access_code");
		// debugger;
		this.router.navigateByUrl('');
	}

	ngAfterViewInit() {
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy-mm-dd',
	      setDate	: '12/12/2000'
	    });
		jQuery('#step-2').hide();
		jQuery('#step-3').hide();
		jQuery('#step-4').hide();

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
	
