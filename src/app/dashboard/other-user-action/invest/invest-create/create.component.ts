import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { ValidationServiceInvestasi } from './validationservice.component';
import { VerifyComponent } from './verify_component';

import { CreateService } from './create.service';

declare var jQuery:any;

@Component({
	selector: 'create',
	templateUrl: 'create.component.html',
	providers: [CreateService]
})

export class CreateComponent {
	constructor(
		private http: Http, 
		private router:Router,
		private fb:FormBuilder,
		private createService:CreateService
	) { }

	status:FormGroup;
	dataInvest:number;
	formVerify:number

	ngOnInit() {
		this.status = this.fb.group({
      agreement: ['', Validators.required],
    });

		// console.log(this.status.agreement)
		// validation
    jQuery( "#investForm" ).validate({
		  rules: {
		    invest_name: {
		    	required:true
		    },
		    invest_type: {
		      required: true,
		    },
		    due_date: {
		      required: true
		    },
		    amount: {
		      required: true
		    },
		    tenor: {
		      required: true
		    },
		    description: {
		      required: true
		    },
		  },
		  // messages:{
		  // 	invest_name : "Invest nama dibutuhkan"
		  // }
		});
		jQuery('#due_date').mask("99-99-9999");
		jQuery('#interest').mask('00000');
		jQuery('#tenor').mask('00');
		jQuery('#amount').mask('0000000000');

	}
	
	// object invest
	public invest = {
		access_token: JSON.parse(localStorage.getItem("access_token")),
	  invest_name: null,
	  invest_type: 0,
	  description: null,
		images: null,
  	due_date: '',
  	amount: null,
  	interest: null,
  	tenor: null,
  	password: null	
	}
	
  private tipeInvest:any;
  getTipeInvestasi(id){
  	this.tipeInvest = id;
  }

  dataIsOn = [
    { value: 1 },
    { value: 0 },
  ];

	isOn = 0;
	createInvest(){
		if(jQuery('#investForm').valid()) {
			if(this.isOn === 0) {
				return;
			} else {
				try { 
				  let due_date = jQuery('#due_date').val();
				  this.invest.due_date = due_date;
				
				} finally {
					this.formVerify = 1;
				}
			}
		} else {
			alert("Data tidak valid");
		}
  }
  
  hideVerify(status:number){
  	this.formVerify = status;
  }

	simulation = {
		nominal : null,
    pokok: null,
    bunga: null,
    cicilan_perbulan: null,
    denda: null,
    sucess_fee: null
	}

  dataCalculation = {
  	jumlah: null,
    bunga: null,
    tenor: null
  }

  calculationInvest(){
		if(jQuery('#investForm').valid()) {
			this.dataCalculation.bunga = this.invest.interest;
			this.dataCalculation.jumlah = this.invest.amount;
			this.dataCalculation.tenor = this.invest.tenor;

		  let due_date = jQuery('#due_date').val();
		  let image : any = document.getElementById('images');
			var fileImage =	image.files[0];
			
			// object image null
			var objectBlob	= new Uint8Array([1,2,3]);
			var arrayBlob	= objectBlob.buffer;
			var image_default = new Blob([arrayBlob]);

			if(fileImage == undefined) {
				fileImage = image_default;
			}

			this.encodeImage(fileImage).onload = function(event, varty){
				try {
					let image = event.target.result.split(',')[1];
					
					if(image != "AQID") {
					 this.invest.images = image;

					} else {
						this.invest.images = null
					}

				} finally {
					this.createService.calculationInvest(this.dataCalculation).then(dataResponse => {
						try {
							this.simulation = dataResponse.data.simulation_result;
						} finally {
							this.dataInvest = 1;
						}
					})
				}
			}.bind(this);

		} else {
			alert("Data tidak valid");
		}
  }

	encodeImage(image:any){
		let readerFile = new FileReader();
		readerFile.readAsDataURL(image);
		return readerFile;
	}
}
