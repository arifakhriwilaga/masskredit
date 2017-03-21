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

	dataCalculation = {
		access_token:this.access_token,
  	jumlah: null,
    bunga: null,
    tenor: null
  }

	ngOnInit(){

		// Objek for get id on route
		let param = this.activatedRoute.params.subscribe( params => {
			let id = params['id'];
			// console.log(id);
			this.invest.loan_id = id;
			this.dataReqLoan.invest_id = id;
		});
		this.getDetailInvest();
		// jQuery('#loan_amount').mask('000000000000');

	}

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

	    if(code.charAt(0) === '4') {
	      this.handleError(message);
	    } if(code.charAt(0) === '2') {
	      this.handleSuccess(data);
	    };
		})
	}

	makeInvest(invest){
		this.dataDetailInvest = 1;
	}

	postInvestUrl = 'https://masscredit-api.stagingapps.net/other-user/investment/new';
	// postInvest(){
	// 	// console.log(this.loan);
	// 	this.http.post(this.postInvestUrl,this.invest,this.options)
	// 		.map(response => response.json())
	// 		.subscribe(
	// 			(response : any) => {
	// 			this.data = response.data;
	// 			this.dataDetailInvest = 0;
	// 				alert("Investasi berhasil, harap menunggu konfirmasi borrower");
	// 				this.router.navigateByUrl('/dashboard/other-user-action/loan');
	// 			},
	// 			(err:any) => {
	// 				var error   = JSON.parse(err._body)
	// 				var message = error.meta.message
	// 				var code = error.meta.code
	// 					// if(code == "400") {
	// 					// 	alert("Maaf saldo anda tidak mencukupi");				
	// 					// }
	// 					if(message == "unauthorized") {
	// 						alert("Maaf session anda telah habis silahkan login kembali")
	// 						return this.router.navigateByUrl('/dashboard/sign-out')					
						
	// 					}if(message == "Anda harus mempunyai jaminan untuk melakukan pinjaman.") {
	// 						alert("Anda harus mempunyai jaminan untuk melakukan pinjaman")				
	// 						this.dataDetailInvest = 1;
						
	// 					}if(message == "Jumlah yang anda masukan melebihi jumlah pinjaman.") {
	// 						alert("Jumlah investasi melebihi jumlah pinjaman")				
	// 						this.dataDetailInvest = 1;
						
	// 					}if(message == "Password salah!") {
	// 						this.dataDetailInvest = 1;
	// 						alert("Password salah!")

	// 					}if(message == "Saldo Anda tidak mencukupi.") {
	// 						this.dataDetailInvest = 1;
	// 						alert("Saldo Anda tidak mencukupi.")				
	// 					}

	// 			}
	// 		);	
	// }

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


}
