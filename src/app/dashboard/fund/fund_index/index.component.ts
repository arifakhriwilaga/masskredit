import { Component }										from '@angular/core';
import { ValidationServiceInvestasi }						from './validationservice.component';
import { Headers, Http, RequestOptions, URLSearchParams }	from '@angular/http';
import { Router }        									from '@angular/router';
// import { IndexService }	from './index.service';
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
 	public funds = []
 	public current_page = null;
 	public per_page 	 = null;
 	public total 		 = null;
	public array_total = []
 	public param = new URLSearchParams();
 	public acces_token = JSON.parse(localStorage.getItem("access_token"))
 	public limit = 10;
 	public page  = 1;

	ngOnInit(){

 	

		this.http.get('http://masscredit-api.stagingapps.net/user/fund/get-list/' + this.acces_token + '/funds.json?limit=' + this.limit + '&page=' + this.page, this.options)
							.map(response => response.json())
							.subscribe(
								(response : any) => {
									// for rr
									var kosong:null;
									var code 		= response.meta.code;
									var message 	= response.meta.message;
									var funds		= response.data.fund;
									var current_page= response.data.paging.current_page;
									var per_page 	= response.data.paging.per_page;
									var total		= response.data.paging.total;;
									this.funds 			= funds;
									console.log(status)
									// this.current_page	= current_page;
									// this.per_page 		= per_page;
									// this.total 			= total;
									if(code == 200) {
										var total_pagination = Math.ceil(total/this.limit) //round up
										// var object_array	 = Array.from()
										
										for (var i = 1; i <= total_pagination; i++) {
											this.array_total.push(i)
										}
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
	linkCreateFund(){
		this.router.navigateByUrl("/dashboard/fund/create");
	}

	linkAttractFund(){
		// alert("tada")
		this.router.navigateByUrl("/dashboard/fund/withdraw")	
	}
	linkTo(id : any){
		// console.log(id)
		let page = id;

		this.http.get('http://masscredit-api.stagingapps.net/user/fund/get-list/' + this.acces_token + '/funds.json?limit=' + this.limit + '&page=' + page, this.options)
							.map(response => response.json())
							.subscribe(
								(response : any) => {
									// for rr
									var kosong:null;
									var code 		= response.meta.code;
									var message 	= response.meta.message;
									var funds		= response.data.fund;
									var current_page= response.data.paging.current_page;
									var per_page 	= response.data.paging.per_page;
									var total		= response.data.paging.total;;
									this.funds 			= funds;
									console.log(status)
									// this.current_page	= current_page;
									// this.per_page 		= per_page;
									// this.total 			= total;
									if(code == 200) {
										console.log("Success get list")
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


}