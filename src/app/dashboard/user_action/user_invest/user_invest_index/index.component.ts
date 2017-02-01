import { Component } 		from '@angular/core';
import { Headers, Http, RequestOptions }	   				from '@angular/http';
import { Router }        					   from '@angular/router';

@Component({
	//moduleId: module.id,
	selector: 'index',
	templateUrl: 'index.component.html'
})


export class IndexComponent { 
	constructor(private router:Router, private http:Http) { }
	
	private headers = new Headers({ 
			'Content-Type': 'application/json',
			'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243'
	});

	private options = new RequestOptions({ headers: this.headers });
	
	private access_token = {
		access_token : JSON.parse(localStorage.getItem("access_token"))
	}

	private invest = [];
	private dataListMyInvest = 0;

	ngOnInit(){
		this.getListInvest();
	}

	getListInvest(){
		this.http.post('https://masscredit-api.stagingapps.net/user/investment/getlist',
		this.access_token,
		this.options)
		.map(response => response.json())
		.subscribe(
			(response : any) => {
				let code 		= response.meta.code;
				let message 	= response.meta.message;					
				this.invest = response.data.investments;
				this.dataListMyInvest = 1;
				// console.log(response);
				// console.log(code,message);
				// this.router.navigateByUrl('/dashboard/invest');
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