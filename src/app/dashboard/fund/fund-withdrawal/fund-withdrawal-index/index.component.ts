import { Component }										from '@angular/core';
import { ValidationServiceInvestasi }						from './validationservice.component';
import { Headers, Http, RequestOptions, URLSearchParams }	from '@angular/http';
import { Router }        									from '@angular/router';


declare var jQuery:any;
@Component({
	//moduleId: module.id,
	selector: 'index',
	templateUrl: 'index.component.html'
})


export class IndexComponent { 
	constructor (private router : Router, private http : Http) {}
	// headers
	public headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

 	public options = new RequestOptions({ headers: this.headers });

 	// access token
 	public access_token = {
	 	access_token : JSON.parse(localStorage.getItem("access_token"))
 	}

 	// objek for show data when request data
 	public withdrawals = []
 	public current_page = null;
 	public per_page 	 = null;
 	public total 		 = null;
	public array_total = []
	public total_pagination
 	public param = new URLSearchParams();
 	public acces_token = JSON.parse(localStorage.getItem("access_token"))
 	public limit = 10;
 	public page  = 1;

 	public data_get_list_fund = { 
 		access_token : this.acces_token,
 		page 		 : this.page,
 		limit 		 : this.limit

 	}

 	public dataListFundWithdrawal = 0;
 	private dataArrayNull = 0;


	ngOnInit(){
		this.http.post('https://masscredit-api.stagingapps.net/user/withdrawal/get-list', this.data_get_list_fund, this.options)
			.map(response => response.json())
			.subscribe(
				(response : any) => {
					// for rr
					var kosong:null;
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					var withdrawal	= response.data.withdrawal;
					var current_page= response.data.paging.current_page;
					var per_page 	= response.data.paging.per_page;
					var total		= response.data.paging.total;;
					this.withdrawals = withdrawal;
					for(let i = 0; i < this.withdrawals.length; i++){
						let dataAmount = this.withdrawals[i]
						let amount = dataAmount['amount'];
						// condition make delimiter
						var _minus = false;
						var b:any = amount.toString();
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
						dataAmount['amount'] = idr.concat(c);
						// this.collateral = 1;
					}
					
					this.dataListFundWithdrawal = 1;
					this.current_page	= current_page;
					// this.per_page 		= per_page;
					// this.total 			= total;
					// console.log(response)
					if(code == 200) {
						var total_pagination = Math.ceil(total/this.limit) //round up
						this.total_pagination = total_pagination
						
						for (var i = 1; i <= total_pagination; i++) {
							this.array_total.push(i)
						}
					}
					// console.log(code)
					// console.log('current page', this.current_page,'per page', this.per_page,'total',this.total)
					// if(code == 200) {
					// 	alert("Profile berhasil diupate")
					// 	// return this.router.navigateByUrl('/dashboard/profile')
					// }
					// else{
					// 	alert("Profile gagal diupdate")
					// }
				},
				(err:any) => {
		            var error   = JSON.parse(err._body)
		            var message = error.meta.message
		              if(message == "unauthorized") {
		                alert("Maaf session anda telah habis silahkan login kembali")
		                return this.router.navigateByUrl('/dashboard/sign-out')
		                
		              } 
		        }
			);
	}

	linkFundWithdrawal(){
		this.router.navigateByUrl("/dashboard/fund/fund-withdrawal/create")	
	}

	linkTo(id : any){
		// console.log(id)
		let page = id;

		this.http.get('https://masscredit-api.stagingapps.net/user/fund/get-list/' + this.acces_token + '/funds.json?limit=' + this.limit + '&page=' + page, this.options)
					.map(response => response.json())
					.subscribe(
						(response : any) => {
							if(response.data.withdrawal == '') {
								this.dataArrayNull = 1;
							}	
							var kosong:null;
							var code 		= response.meta.code;
							var message 	= response.meta.message;
							var withdrawal		= response.data.withdrawal;
							var current_page= response.data.paging.current_page;
							var per_page 	= response.data.paging.per_page;
							var total		= response.data.paging.total;;
							this.withdrawals 			= withdrawal;
							this.current_page	= current_page;
							// this.per_page 		= per_page;
							// this.total 			= total;
							// console.log(this.current_page)
							if(code == 200) {
								// console.log("Success get list")
								// // var convert_string	 = String(total_pagination)
								// var convert_string	 = total_pagination.valueOf()
								// array_total 	 = JSON.parse("[" + convert_string +"]");
								
							}
							// console.log(code)
							// console.log('current page', this.current_page,'per page', this.per_page,'total',this.total)
							// if(code == 200) {
							// 	alert("Profile berhasil diupate")
							// 	// return this.router.navigateByUrl('/dashboard/profile')
							// }
							// else{
							// 	alert("Profile gagal diupdate")
							// }
						},
						(err:any) => {
				            var error   = JSON.parse(err._body)
				            var message = error.meta.message
				              if(message == "unauthorized") {
				                alert("Maaf session anda telah habis silahkan login kembali")
				                return this.router.navigateByUrl('/dashboard/sign-out')
				                
				              } 
				        }
					);
	}

	public loaderDana = 0;
	public dataDetailDana = {
		access_token : JSON.parse(localStorage.getItem("access_token")),
		withdrawal_id : '',
	}

	public dataDetailBorrower = {};
	public detail = { };
	public bank = { };
	public dataAmount = { }

	showDetailDana(id:any){
		this.dataDetailDana.withdrawal_id = id;
		jQuery('#myModal').modal({backdrop: 'static', keyboard: false});
		// API detail invest
	    this.http.post('https://masscredit-api.stagingapps.net/user/withdrawal/get-detail',this.dataDetailDana,this.options)
				.map(response => response.json())
				.subscribe((response : any) => {
					let data = response.data;
					let bank_name = response.data.bank;
					
					if(bank_name == 1) {
						this.bank = "BCA";
					}
					if(bank_name == 2) {
						this.bank = "Mandiri";
					}
					if(bank_name == 3) {
						this.bank = "Danamon";
					}
					if(bank_name == 4) {
						this.bank = "Sinarmas";
					}
					if(bank_name == 5) {
						this.bank = "BNI";
					}
					if(bank_name == 6) {
						this.bank = "Niaga";
					}
					if(bank_name == 'undefined') {
						this.bank = "";
					}
					this.dataAmount = response.data.amount;
					this.delimiterAmount(this.dataAmount);

					this.detail = data
					// console.log(data);
					// this.image = response.data.images[0];
					// console.log(this.image);
					
					// console.log(this.detail);
				});	
	}

	delimiterAmount(dataAmount:any){
		try{
			// condition make delimiter
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
			this.dataAmount = idr.concat(c);
		}finally{
			this.loaderDana = 1;
			return true;
		}
	}

	hideDetailDana(){
		jQuery('#myModal').modal('toggle');
		this.loaderDana = 0;
	}


}