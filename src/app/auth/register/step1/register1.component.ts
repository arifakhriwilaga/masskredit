import { Component } 							from '@angular/core';
import { FormGroup, FormBuilder, Validators }  	from '@angular/forms';
import { RegisterService }						from './../register.service';
import { Router }  								from '@angular/router';
// import { RegisterUser }								from './../register';



declare var jQuery:any;
@Component({
	moduleId: module.id,
	selector: "step-1",

	templateUrl: 'register1.component.html',
	providers:[RegisterService]
})



export class Step1RegisterComponent  { 
	constructor(private registerService : RegisterService, private router : Router) { }

	private register = this.registerService.dataRegister();


	ngOnInit(){
		
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
	
