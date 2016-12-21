import { Component } 		from '@angular/core';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router, ActivatedRoute, Params }	   from '@angular/router';

// import { IndexService }	from './index.service';
@Component({
	//moduleId: module.id,
	selector: 'detail',
	templateUrl: 'detail.component.html'
})


export class DetailComponent { 
	constructor(
		private http: Http,
	    private route: ActivatedRoute,
	) { }


	ngOnInit(){


		let param = this.route.params.subscribe( params => {
			let id =params['id'];
			// console.log(id);

		
		let data_detail = {
			'access_token' : JSON.parse(localStorage.getItem("access_token")),
			'invest_id'	   : id 
		}

		// console.log(data_detail);
		
		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});
      	let options = new RequestOptions({ headers: headers });
		// API detail investor
		console.log("Sedang mengambil data....")
      	this.http.post('http://masscredit-api.stagingapps.net/user/credential/profile',this.token,options)
		        .map(response => response.json())
		        .subscribe((response : any) => {
		          // console.log(response);
		          this.name         	= response.data.profile.name;
		          // this.last_login       = response.data.profile.last_login;
		          // this.user_class       = response.data.profile.user_class;
		          this.profile_image    = response.data.profile.profile_image;
		          // this.account_summary 	= response.data.account_summary.balance;
        });

		// API detail pinjaman
		console.log("Sedang mengambil data....")
	    this.http.post('http://masscredit-api.stagingapps.net/user/investment/detail',data_detail,options)
				.map(response => response.json())
				.subscribe((response : any) => {
					// console.log(response);
					this.detail = response.data;
					this.image = response.data.images[0];
					console.log(this.image);
					
					console.log(this.detail);
				});
		
		});





		// console.log(a)
		// this.listPinjaman();
			
	}

	// objek for detail investor
	private name 			= { };
	private last_login 		= { };
	private user_class 		= { };
	private profile_image 	= { };
	private account_summary = { };

	// private acces_token = localStorage.getItem("access_token");
    public token 	= {access_token : JSON.parse(localStorage.getItem("access_token"))} ;
	public detail 	= { };
	public image 	= [];
	listPinjaman() {

		// return this.investasiservice.Index();
	}

	// getHero(id: number) {
	    // const url = `${this.heroesUrl}/${id}`;
	  //   return this.http.get(url)
	  //     .toPromise()
	  //     .then(response => response.json().data as Hero)
	  //     .catch(this.handleError);
  	// }

}