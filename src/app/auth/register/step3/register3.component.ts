import { Component } 						from '@angular/core';
import { RegisterService }					from './../register.service';
import { Headers, Http, RequestOptions }	from '@angular/http';

declare var jQuery: any;
@Component({
	//moduleId: module.id,
	selector: 'step3',
	templateUrl: 'register3.component.html'
})

export class Step3RegisterComponent { 

	constructor(private registerService: RegisterService, private http : Http) { }


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

	nextStepFour(register) {
		this.register.tanggal_mulai_kerja = jQuery("#tanggal_mulai_kerja").datepicker("getDate");
		// debugger

		if(register) {
			console.log(register)
			this.registerService.Step4();

		// debugger;
		// 	this.router.navigateByUrl('register','step-4');
		// 	console.log('ini dari register => lanjutkan yaa', this.registerThree);
		}
		else{
			console.log(register);
		}
	}

	ngAfterViewInit() {
		jQuery('.datepicker').datepicker({
	      format: 'yyyy-mm-dd',
	      startDate: '-3d'
	    });

	}

	prevStepTwo(register){
		console.log(register);
		this.registerService.Step2();
		// this.registerService.Step1();
	}

	sendDataStepThree(){
		return this.register;
	}
}