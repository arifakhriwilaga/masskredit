import { Component, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from'./detail.service';

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
		private activatedRoute :ActivatedRoute,
		private detailService:DetailService

	) { }

	// set header
	public headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});
	public options = new RequestOptions({ headers: this.headers });

		// param url
	public access_token = JSON.parse(localStorage.getItem("access_token"));
	public  invest_id	    = ''; 
	

	// objek for save data when after request detail
	public dataReqLoan = {
		access_token : this.access_token,
		invest_id : null,
	}

	public invest = {
		access_token: this.access_token,
		loan_id: null,
		invest_amount : null,
		password: null
		// collateral_type: 0
	}

	public detailInvest:any;

	public amount = { };
	public restAmount = { };

	public dataDetailInvest = 0;
	public statusDataDetail = 0;

	simulation = {
		nominal : null,
    pokok: null,
    bunga: null,
    cicilan_perbulan: null,
    denda: null,
    sucess_fee: null
	}

	listLoanUrl = '#/dashboard/other-user-action/loan';

	ngOnInit(){
		jQuery('#FormSimulation').validate({
		  rules: {
		    jumlah: { required:true }
		  }
		});

		// Objek for get id on route
		let param = this.activatedRoute.params.subscribe( params => {
			let id = params['id'];
			this.invest.loan_id = id;
			this.dataReqLoan.invest_id = id;
		});
		this.getDetailInvest();
	}

	// controller calculation
	dataCalculation = {
		access_token:this.access_token,
  	jumlah: null,
    bunga: null,
    tenor: null
  }

	listInvestUrl = '#/dashboard/other-user-action/invest';

	cancelDetailInvest(){
		this.router.navigateByUrl("/dashboard/other-user-action/loan");
	}

	handleError(message:any){
  	if(message === 'unauthorized') {
      alert("Maaf akses token tidak terdaftar")            
      this.router.navigate(['/dashboard/sign-out']);
    }          
  }

  
  handleSuccess(data:any){
  	let imageDefault = 'assets/img/default_image.jpg';
		if(data.images == '') {
			data.images = imageDefault;
		}
		this.dataCalculation.bunga = data.interest;
		this.dataCalculation.tenor = data.tenor;
		this.detailInvest = data;
		let amount  = data.amount;
		let restAmount = data.sisa
		this.delimiterAmount(amount);
  	this.delimiterRestAmount(restAmount);
  }

	getDetailInvest(){
		this.detailService.getDetail(this.dataReqLoan).then(dataResponse => {
			let message = dataResponse.meta.message;
	    let code = JSON.stringify(dataResponse.meta.code);
	    let data = dataResponse.data;
	    // console.log(data);

	    // set to object dataCalculation
			this.dataCalculation.bunga = dataResponse.data.interest;
			this.dataCalculation.tenor = dataResponse.data.tenor;

	    if(code.charAt(0) === '4') {
	      this.handleError(message);
	    } if(code.charAt(0) === '2') {
	      this.handleSuccess(data);
	    };
		})
	}

	formVerify:number;
	createInvest(){
		if(jQuery("#FormSimulation").valid()) {
			if(this.isOn === 0) {
				return;
			} else {
				this.formVerify = 1;
			}
		} else {
			alert("Data tidak valid");
		}
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
		// condition make delimiter
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

	dataIsOn = [
    { value: 1 },
    { value: 0 },
  ];

	isOn = 0;

	statusCalculation:number;
	calculationInvest(){
		if(jQuery('#FormSimulation').valid()) {
			// console.log(this.dataCalculation)
			this.invest.invest_amount = this.dataCalculation.jumlah;
			this.detailService.calculationInvest(this.dataCalculation).then(dataResponse => {
				// console.log(dataResponse)
				this.simulation = dataResponse.data.simulation_result;
				this.statusCalculation = 1;
			})
		} else {
			alert("Data tidak valid");
		}
  }

	hideVerify(status:number) {
		this.formVerify = status;
	}
}
