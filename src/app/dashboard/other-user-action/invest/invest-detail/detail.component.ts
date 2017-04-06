import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationServiceInvestasi } from './validationservice.component';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from './detail.service';

declare var jQuery:any;
declare var image:void;

@Component({
	selector: 'detail',
	templateUrl: 'detail.component.html',
	providers: [DetailService]
})

export class DetailComponent {
	constructor(
		private http: Http, 
		private router:Router, 
		private activatedRoute:ActivatedRoute,
		private detailService:DetailService
	) { }

	// param url
	public access_token = JSON.parse(localStorage.getItem("access_token"));
	
	// objek for save data when after request detail
	public dataReqInvest = {
		access_token : this.access_token,
		loan_id : '',
	}

	public detailInvest:any;

	public amountLoan:number;
	public amount = { };
	public restAmount = { };

	public dataDetailInvest = 0;
	public statusDataDetail = 0;

	ngOnInit(){
		// validate FormSimulation 
		jQuery('#FormSimulation').validate({
		  rules: {
		    jumlah: { required:true }
		  }
		});

		// get id
		let param = this.activatedRoute.params.subscribe( params => {
			let id = params['id'];
			this.loan.invest_id = id;
			this.dataReqInvest.loan_id = id;
		});
		this.getDetailInvest();
		
	}

	public dataDetail = { }

	getDetailInvest(){
		this.detailService.getDetail(this.dataReqInvest).then(dataResponse => {
			let imageDefault = 'assets/img/default_image.jpg';
			if(dataResponse.data.images[0] == null) {
				dataResponse.data.images[0] = imageDefault;
			}
			// set to object dataCalculation
			this.dataCalculation.bunga = dataResponse.data.interest;
			this.dataCalculation.tenor = dataResponse.data.tenor;

			this.detailInvest = dataResponse.data;
			// console.log(this.detailInvest);
			let amount = dataResponse.data.amount;
			let restAmount = dataResponse.data.sisa;
			this.delimiterAmount(amount);
			this.delimiterRestAmount(restAmount);
		})
	}

	getAmount(amount:number){
		this.amountLoan = amount;
	}

	delimiterAmount(dataAmount:any){
		var _minus = false;
		var b:any = dataAmount.toString();
		if (b<0) _minus = true;
			b=b.replace(".","");
			b=b.replace("-","");
			let c = "";
			let panjang = b.length;
			let j = 0;
		for (let i = panjang; i > 0; i--){
			j = j + 1;
			if (((j % 3) == 1) && (j != 1)){
				c = b.substr(i-1,1) + "." + c;
				// console.log(c)
			} else {
				c = b.substr(i-1,1) + c;
			}
		}
		if (_minus) c = "-" + c ;
		let idr = "Rp.";
		this.amount = idr.concat(c);
	}

	delimiterRestAmount(dataRestAmount:any){
		var _minus = false;
		var b:any = dataRestAmount.toString();
		if (b<0) _minus = true;
			b=b.replace(".","");
			b=b.replace("-","");
			let c = "";
			let panjang = b.length;
			let j = 0;
		for (let i = panjang; i > 0; i--){
			j = j + 1;
			if (((j % 3) == 1) && (j != 1)){
				c = b.substr(i-1,1) + "." + c;
				// console.log(c)
			} else {
				c = b.substr(i-1,1) + c;
			}
		}
		if (_minus) c = "-" + c ;
		let idr = "Rp.";
		this.restAmount = idr.concat(c);
		this.statusDataDetail = 1;
	}

	delimiter(data:any){
		var _minus = false;
		var b:any = data.toString();
		if (b<0) _minus = true;
			b=b.replace(".","");
			b=b.replace("-","");
			let c = "";
			let panjang = b.length;
			let j = 0;
		for (let i = panjang; i > 0; i--){
			j = j + 1;
			if (((j % 3) == 1) && (j != 1)){
				c = b.substr(i-1,1) + "." + c;
				// console.log(c)
			} else {
				c = b.substr(i-1,1) + c;
			}
		}
		if (_minus) c = "-" + c ;
		let idr = "Rp.";
		return idr.concat(c);
	}

	// controller calculation
	dataCalculation = {
		access_token:this.access_token,
  	jumlah: null,
    bunga: null,
    tenor: null
  }
  statusCalculation:number;

	listInvestUrl = '#/dashboard/other-user-action/invest';

  calculationInvest(){
		if(jQuery('#FormSimulation').valid()) {
			this.loan.loan_amount = this.dataCalculation.jumlah;
			this.detailService.calculationLoan(this.dataCalculation).then(dataResponse => {
				try {
					this.simulation.success_fee = this.delimiter(dataResponse.data.simulation_result.sucess_fee);
					this.simulation.cicilan_perbulan = this.delimiter(dataResponse.data.simulation_result.cicilan_perbulan);
					this.simulation.denda = this.delimiter(dataResponse.data.simulation_result.denda);
					this.simulation.nominal = this.delimiter(dataResponse.data.simulation_result.nominal);
					this.simulation.pokok = this.delimiter(dataResponse.data.simulation_result.pokok);
					this.simulation.pokok_plus_bunga = this.delimiter(dataResponse.data.simulation_result.pokok_plus_bunga);
					
				} finally {
					this.statusCalculation = 1;
				}
			})
		} else {
			alert("Data tidak valid");
		}
  }

  // controller form-loan
  public loan = {
		access_token: this.access_token,
		invest_id: null,
		loan_amount : null,
	}

	simulation = {
		nominal : null,
    pokok: null,
    success_fee:null,
    cicilan_perbulan: null,
    denda: null,
    pokok_plus_bunga:null
	}

	formVerify:number;

	createLoan(){
		if(jQuery("#FormSimulation").valid()) {
			if(this.isOn === 0) {
				return;
			} else {
				this.formVerify = 1;
			}
		}
		else{
			alert("Data tidak valid!");
		}
	}

	dataIsOn = [
    { value: 1 },
    { value: 0 },
  ];

	isOn = 0;
	agreement(){

	}

	hideVerify(status:any){
		this.formVerify = status;
	}


	tandaPemisahTitik(b){
		var _minus = false;
		var b:any = b.toString();
		if (b<0) _minus = true;
			b=b.replace(".","");
			b=b.replace("-","");
			let c = "";
			let panjang = b.length;
			let j = 0;
		for (let i = panjang; i > 0; i--){
			j = j + 1;
			if (((j % 3) == 1) && (j != 1)){
				c = b.substr(i-1,1) + "." + c;
				// console.log(c)
			} else {
				c = b.substr(i-1,1) + c;
			}
		}
		if (_minus) c = "-" + c ;
		let idr = "Rp.";
		return idr.concat(c);
	}
	

	numbersonly(ini, e){
		return e.keyCode
		// console.log(e.keyCode)
		// if (e>=49){
		// if(e<=57){
		// var a = ini.value.toString().replace(".","");
		// var b = a.replace(/[^\d]/g,"");
		// b = (b=="0")?String.fromCharCode(e.keyCode):b + String.fromCharCode(e.keyCode);
		// ini.value = this.tandaPemisahTitik(b);
		// return false;
		// }
		// else if(e.keyCode<=105){
		// if(e.keyCode>=96){
		// //e.keycode = e.keycode - 47;
		// a = ini.value.toString().replace(".","");
		// b = a.replace(/[^\d]/g,"");
		// b = (b=="0")?String.fromCharCode(e.keyCode-48):b + String.fromCharCode(e.keyCode-48);
		// ini.value = this.tandaPemisahTitik(b);
		// //alert(e.keycode);
		// return false;
		// }
		// else {return false;}
		// }
		// else {
		// return false; }
		// }else if (e.keyCode==48){
		// a = ini.value.replace(".","") + String.fromCharCode(e.keyCode);
		// b = a.replace(/[^\d]/g,"");
		// if (parseFloat(b)!=0){
		// ini.value = this.tandaPemisahTitik(b);
		// return false;
		// } else {
		// return false;
		// }
		// }else if (e.keyCode==95){
		// a = ini.value.replace(".","") + String.fromCharCode(e.keyCode-48);
		// b = a.replace(/[^\d]/g,"");
		// if (parseFloat(b)!=0){
		// ini.value = this.tandaPemisahTitik(b);
		// return false;
		// } else {
		// return false;
		// }
		// }else if (e.keyCode==8 || e.keycode==46){
		// a = ini.value.replace(".","");
		// b = a.replace(/[^\d]/g,"");
		// b = b.substr(0,b.length -1);
		// if (this.tandaPemisahTitik(b)!=""){
		// ini.value = this.tandaPemisahTitik(b);
		// } else {
		// ini.value = "";
		// }

		// return false;
		// } else if (e.keyCode==9){
		// return true;
		// } else if (e.keyCode==17){
		// return true;
		// } else {
		// //alert (e.keyCode);
		// return false;
		// }

		// }
		}
}
