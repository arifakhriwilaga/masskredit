import { Component }										from '@angular/core';
import { ValidationServiceInvestasi }						from './validationservice.component';
import { Headers, Http, RequestOptions, URLSearchParams }	from '@angular/http';
import { Router }        									from '@angular/router';
// import { IndexService }	from './index.service';
declare var jQuery:any;
@Component({
	//moduleId: module.id,
	selector: 'index',
	templateUrl: 'index.component.html'
})


export class IndexComponent { 
	constructor (private router : Router, private http : Http) {}

	 // declare object url get list-fund
	private listfundUrl = 'https://masscredit-api.stagingapps.net/user/fund/get-list';
	private confirmfundUrl = 'https://masscredit-api.stagingapps.net/user/fund/confirm';
	
	// declare headers
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

 	// access token
 	public access_token = {
	 	access_token : JSON.parse(localStorage.getItem("access_token"))
 	}

 	// objek for show data when request data
 	public funds = []
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
 		page : this.page,
 		limit : this.limit
 	}

 	private dataArrayNull = 0;

 	public dataListFundAdd = 0;

 	// objek investasi
	public data = {
		access_token: this.acces_token,
		fund_id: null,
  	struct_image: null,
  	confirm_date: null,	
	}

	ngOnInit(){
		this.getListFundAdd()
	}
	linkCreateFund(){
		this.router.navigateByUrl("/dashboard/fund/create");
	}

	getListFundAdd(){
		this.http.post(this.listfundUrl, this.data_get_list_fund, this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				if(response.data.fund == '') {
					this.dataArrayNull = 1;
				}		
				// console.log(response)
				// for rr
				var kosong:null;
				var code = response.meta.code;
				var message = response.meta.message;
				var funds = response.data.fund;
				var current_page = response.data.paging.current_page;
				var per_page = response.data.paging.per_page;
				var total = response.data.paging.total;

				this.funds = funds;
				// console.log(this.funds)
				for(let i = 0; i < this.funds.length; i++){
					let dataAmount = this.funds[i]
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
				}

				// page
				this.current_page	= current_page;
				this.dataListFundAdd = 1;
				// this.per_page 		= per_page;
				// this.total 			= total;
				// console.log(this.current_page)
				if(code == 200) {
					var total_pagination = Math.ceil(total/this.limit) //round up
					this.total_pagination = total_pagination
					for (var i = 1; i <= total_pagination; i++) {
						this.array_total.push(i)
					}
					// // var convert_string	 = String(total_pagination)
					// var convert_string	 = total_pagination.valueOf()
					// array_total 	 = JSON.parse("[" + convert_string +"]");
					
				}
			},(err:any) => {
          var error   = JSON.parse(err._body)
          var message = error.meta.message
          if(message == "unauthorized") {
            alert("Maaf session anda telah habis silahkan login kembali")
            return this.router.navigateByUrl('/dashboard/sign-out')
            
          } 
      });
	}
	
	linkTo(id : any){
		// console.log(id)
		let data_get_list_fund = { 
	 		access_token : this.acces_token,
	 		page : id,
	 		limit : this.limit
	 	}

		this.http.post('https://masscredit-api.stagingapps.net/user/fund/get-list',data_get_list_fund, this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// for rr
				var kosong:null;
				var code 		= response.meta.code;
				var message 	= response.meta.message;
				var funds		= response.data.fund;
				var current_page= response.data.paging.current_page;
				var per_page 	= response.data.paging.per_page;
				var total		= response.data.paging.total;;
				this.funds 			= funds;
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
			},(err:any) => {
        var error   = JSON.parse(err._body)
        var message = error.meta.message
        if(message == "unauthorized") {
          alert("Maaf session anda telah habis silahkan login kembali")
          return this.router.navigateByUrl('/dashboard/sign-out')
          
        } 
      });
	}

	public loaderDana = 0;
	public loaderConfirmFund = 1;
	public dataDetailDana = {
		access_token : JSON.parse(localStorage.getItem("access_token")),
		fund_id : '',
	}

	public dataDetailBorrower = {};
	public detail = { };
	public bank = { };
	public dataAmount = { }

	showDetailDana(id:any){
		this.dataDetailDana.fund_id = id;
		jQuery('#myModal').modal({backdrop: 'static', keyboard: false});
		// API detail invest
    this.http.post('https://masscredit-api.stagingapps.net/user/fund/get-detail',this.dataDetailDana,this.options)
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

	showConfirmFund(id:any){
		this.data.fund_id = id;
		jQuery('#modalFormConfirm').modal({backdrop: 'static', keyboard: false});
	}

	postConfirmAddFund(){
		this.http.post(this.confirmfundUrl,this.data,this.options)
    .map(response => response.json())
    .subscribe((response : any) => {
      var code        = response.meta.code;
      var message     = response.meta.message;
      alert("Konfirmasi penambahan dana berhasil")
      this.loaderConfirmFund = 1;
			jQuery('#modalFormConfirm').modal('toggle');
      this.router.navigateByUrl('/dashboard/fund');
 		},(err:any) => {
      var error   = JSON.parse(err._body)
      var message = error.meta.message
      if(message == "unauthorized") {
        alert("Maaf session anda telah habis silahkan login kembali")
        return this.router.navigateByUrl('/dashboard/sign-out')       
      }       
    });  
	}

	cancelConfirmFund(){
		jQuery('#modalFormConfirm').modal('toggle');
    // this.router.navigateByUrl('/dashboard/fund');
	}

	submitConfirmFund(){
		if(jQuery("#confirmForm").valid()) {
			this.loaderConfirmFund = 0;
			let a : any = document.getElementById("struct_image");

			var file_a =	a.files[0];

			var objectBlob	= new Uint8Array([1,2,3]);
			var arrayBlob	= objectBlob.buffer;
			var image_default = new Blob([arrayBlob]);

			if(file_a == undefined) {
				file_a = image_default;
			}
			this.encodeImage(file_a).onload = function(event, varty){
				try{
					let image = event.target.result.split(',')[1];
					
					if(image == "AQID") {
						this.data.struct_image = null
					}

					if(image != "AQID") {
					 this.data.struct_image = image;
					}
				}finally{
					// console.log(this.data)
					this.postConfirmAddFund()	
				}
			}.bind(this);
		}else{
			alert("Data tidak valid")
		}

	}

	// function for read image file
	encodeImage(file){
		let readerFile = new FileReader();
		readerFile.readAsDataURL(file);
		return readerFile;
	}
}
