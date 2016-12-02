import { Component, OnInit } 						  from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } from './validationservice.component';

@Component({
	//moduleId: module.id,
	selector: 'create',
	templateUrl: 'create.component.html',
})

export class CreateComponent { 
	public createForm: any;
	constructor(private formBuilder: FormBuilder) { 
		this.createForm = this.formBuilder.group({
			'nama_investasi' : [
				'', 
				[Validators.required, ValidationServiceInvestasi.namainvestasiValidator]]
		})


	}

	// ngOinit() {
		// we'll initialize our form model here 
	// 	this.createForm = this.formBuilder.group({
	// 		nama_investasi: ['', Validators.required ]  
	// 	});
	// }

  createInvestasi() {
  	console.log(this.createForm.value);
    if (this.createForm.dirty && this.createForm.valid) {
      alert('Nama: ${this.createForm.value.nama_investasi}');
    }
  }
}
