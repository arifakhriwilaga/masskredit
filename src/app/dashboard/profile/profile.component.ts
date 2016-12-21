import { Component } 		from '@angular/core';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router }        					   from '@angular/router';

@Component({
	//moduleId: module.id,
	selector: 'profile',
	templateUrl: 'profile.component.html'
})

export class ProfileComponent {
	constructor(private http: Http){ }


	ngOnInit(){
		this.getProfile();
			
	}

	// private acces_token = localStorage.getItem("access_token");
    public token = {access_token : JSON.parse(localStorage.getItem("access_token"))} ;
	public profile = { };
	getProfile() {
		console.log("Sedang mengambil data....")
		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

	    let options = new RequestOptions({ headers: headers });

		this.http.post('http://masscredit-api.stagingapps.net/user/credential/profile',this.token,options)
				.map(response => response.json())
				.subscribe((response : any) => {
					// for message
					this.profile	= response.data.profile.complement_user;
					console.log(this.profile);
					var kosong:null;
					var code 		= response.meta.code;
					var message 	= response.meta.message;
					// if(kosong == response.data.investments) {
					// 	alert("Data list investasi masih kosong")
					// }
					// if(code == 200) {
					// 	alert("Data list investasi berhasil ditampilkan")
						
					// }
					// else{
					// 	alert("Data list investasi gagal ditampilkan")
					// }
				
					// console.log(code,message);
					// get data

					// this.pinjaman 	= response.data.investments;
					// console.log("Pinjaman",this.pinjaman)

				
				});
		// return this.investasiservice.Index();
	}

}