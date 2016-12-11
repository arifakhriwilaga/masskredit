import { Component } 						from '@angular/core';
import { RegisterService }					from './../register.service';
import { Headers, Http, RequestOptions }	from '@angular/http';
import { Step1RegisterComponent } 				from './../step1/register1.component';
import { FormGroup, FormBuilder, Validators }  	from '@angular/forms';

declare var jQuery: any;
@Component({
	//moduleId: module.id,
	selector: 'step3',
	templateUrl: 'register3.component.html'
})

export class Step3RegisterComponent { 

	constructor(
		private registerService: RegisterService, 
		private http : Http,
		private step1 : Step1RegisterComponent, 
		
		private formBuilder: FormBuilder) { 
		this.step3Form = this.formBuilder.group({
	

			// step3
			'id_pekerjaan'			: [0, Validators.required],
			'nama_perusahaan'  		:  "",
			'alamat_perusahaan'	  	:  "",
			'telepon_perusahaan' 	:  "", // number
			'jenis_usaha'  			:  "",
			'jabatan'	  			:  "",
			'tanggal_mulai_kerja'   :  "",
			'gaji_per_bulan'	  	: ["", Validators.required],
			'pendapatan_lain'  		: ["", Validators.required],
			'pengeluaran_per_bulan' : ["", Validators.required],
			'sumber_dana' 			:  "",

			}); 
	}

	private step3Form = this.step1.step1Form;

	private register = this.registerService.dataRegister();

	// Objek master data
	public pekerjaan = [];

	ngOnInit() {
		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});
	    let options = new RequestOptions({ headers: headers });

		// Get data Pekerjaan
		this.http.get('http://masscredit-backend.stagingapps.net:9000/master/pekerjaan',options)
				.map(responsePekerjaan => responsePekerjaan.json())
				.subscribe((responsePekerjaan : any) => {
					this.pekerjaan = responsePekerjaan.data.pekerjaan
				});
	}

	nextStepFour(value) {
		value.tanggal_mulai_kerja = jQuery("#tanggal_mulai_kerja").datepicker("getDate")
		
		this.register.id_pekerjaan 			= value.id_pekerjaan,
		this.register.nama_perusahaan 		= value.nama_perusahaan,
		
		this.register.alamat_perusahaan 	= value.alamat_perusahaan
		this.register.telepon_perusahaan 	= value.telepon_perusahaan,
		this.register.jenis_usaha	   		= value.jenis_usaha,
		this.register.jabatan 				= value.jabatan,
		this.register.tanggal_mulai_kerja 	= value.tanggal_mulai_kerja
		this.register.gaji_per_bulan 		= value.gaji_per_bulan,
		this.register.pendapatan_lain	   	= value.pendapatan_lain,
		this.register.pengeluaran_per_bulan = value.pengeluaran_per_bulan ,
		this.register.sumber_dana 			= value.sumber_dana;
		
		console.log(this.register);
		this.registerService.Step4();
		
		// debugge

		// if(this.register) {
		// 	console.log()

		// debugger;
		// 	this.router.navigateByUrl('register','step-4');
		// 	console.log('ini dari register => lanjutkan yaa', this.registerThree);
		// }
		// else{
		// 	console.log("Data gagal coy");
		// }

	}
	ngAfterViewInit() {
		jQuery('.datepicker').datepicker({
	      format: 'yyyy-mm-dd',
	      startDate: '-3d'
	    });

	}

	prevStepTwo(value){
		this.register.id_pekerjaan 			= value.id_pekerjaan,
		this.register.nama_perusahaan 		= value.nama_perusahaan,
		
		this.register.alamat_perusahaan 	= value.alamat_perusahaan
		this.register.telepon_perusahaan 	= value.telepon_perusahaan,
		this.register.jenis_usaha	   		= value.jenis_usaha,
		this.register.jabatan 				= value.jabatan,
		this.register.tanggal_mulai_kerja 	= value.tanggal_mulai_kerja
		this.register.gaji_per_bulan 		= value.gaji_per_bulan,
		this.register.pendapatan_lain	   	= value.pendapatan_lain,
		this.register.pengeluaran_per_bulan = value.pengeluaran_per_bulan ,
		this.register.sumber_dana 			= value.sumber_dana;
		this.registerService.Step2();
		// console.log(value);
		// this.register.id_pekerjaan 			= value.id_pekerjaan,
		// this.register.nama_perusahaan 		= value.nama_perusahaan,
		
		// this.register.alamat_perusahaan 	= value.alamat_perusahaan
		// this.register.telepon_perusahaan 	= value.telepon_perusahaan,
		// this.register.jenis_usaha	   		= value.jenis_usaha,
		// this.register.jabatan 				= value.jabaran,
		// this.register.tanggal_mulai_kerja 	= value.tanggal_mulai_kerja
		// this.register.gaji_per_bulan 		= value.gaji_per_bulan,
		// this.register.pendapatan_lain	   	= value.pendapatan_lain,
		// this.register.pengeluaran_per_bulan = value.pengeluaran_per_bulan ,
		// this.register.sumber_dana 			= value.sumber_dana;
		// this.registerService.Step1();
	}

	sendDataStepThree(){
		return this.register;
	}
}