import { Component } 							from '@angular/core';
import { FormGroup, FormBuilder, Validators }  	from '@angular/forms';
import { RegisterService }						from './../register.service';
import { Router }  								from '@angular/router';
import { Headers, Http, RequestOptions }	   from '@angular/http';
// import { RegisterUser }								from './../register';



declare var jQuery:any;
@Component({
	moduleId: module.id,
	selector: "step-1",

	templateUrl: 'register1.component.html',
	providers:[RegisterService]
})



export class Step1RegisterComponent  { 
	constructor(
		private registerService : RegisterService, 
		private router : Router, 
		private http : Http
	) { }

	private register = this.registerService.dataRegister();


	ngOnInit(){
	
	let headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
 	});

    let options = new RequestOptions({ headers: headers });

    // Get data Agama
	this.http.get('http://masscredit-backend.stagingapps.net:9000/master/agama',options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// return response.data;
				console.log(response.data)
			});
		

	// Get data Provinsi
	this.http.get('http://masscredit-backend.stagingapps.net:9000/master/provinsi',options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// return response.data;
				console.log(response.data)

			});
		
	// Get data Kota
	this.http.get('http://masscredit-backend.stagingapps.net:9000/master/kota',options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// return response.data;
				console.log(response.data)

			});

	// Get data Status Rumah
	this.http.get('http://masscredit-backend.stagingapps.net:9000/master/status_rumah',options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// return response.data;
				console.log(response.data)

			});

	// Get data Identitas
	this.http.get('http://masscredit-backend.stagingapps.net:9000/master/identitas',options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// return response.data;
				console.log(response.data)

			});

	// Get data Status
	this.http.get('http://masscredit-backend.stagingapps.net:9000/master/status',options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// return response.data;
				console.log(response.data)

			});
	
	// Get data Bank
	this.http.get('http://masscredit-backend.stagingapps.net:9000/master/bank',options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// return response.data;
				console.log(response.data)

			});

	// Get data Pekerjaan
	this.http.get('http://masscredit-backend.stagingapps.net:9000/master/pekerjaan',options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// return response.data;
				console.log(response.data)

			});

	}

		
	

	nextStepTwo(register) {
		this.register.tanggal_lahir = jQuery("#tanggal_lahir").datepicker("getDate");
		// debugger
		if(register) {
			console.log(register);

			this.registerService.Step2();
					
		}
		else{
			console.log('data gagal disimpan');
		}
	}

	cancelRegister() {
		localStorage.removeItem("access_code");
		this.router.navigateByUrl('');
	}

	ngAfterViewInit() {
		jQuery('.datepicker').datepicker({
	      format: 'yyyy-mm-dd',
	      startDate: '-3d'
	    });
		// jQuery('#step-1').show("step-1");
		jQuery('#step-2').hide();
		jQuery('#step-3').hide();
		jQuery('#step-4').hide();

	}

	// service send data step1


}
	
