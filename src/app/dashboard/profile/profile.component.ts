import { Component } 		from '@angular/core';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router }        					   from '@angular/router';


@Component({
	//moduleId: module.id,
	selector: 'profile',
	templateUrl: 'profile.component.html'
})

export class ProfileComponent {
	// private enable:boolean;

	constructor(private http: Http, private router : Router){ }

	// Default Objek
	private image:void;
	private number:number;

	private enable:number
	ngOnInit(){
		jQuery("input").prop("disabled", true);
		jQuery("#batal").hide();
		this.getProfile();
		this.enableField();	
		this.disableField();	

	}

	disableField(){
		jQuery("#batal").click(function(){
			jQuery("input").prop("disabled", true);
			jQuery("#batal").hide();
		});
	}

	enableField(){
		jQuery("#edit").click(function(){
			jQuery("input").prop("disabled", false);
			jQuery("#batal").show();
		});

	}

	public acces_token = JSON.parse(localStorage.getItem("access_token"));
    public token = {access_token : JSON.parse(localStorage.getItem("access_token"))} ;
    public sumber_pendapatan = { }
	public complement_data = { };
	public profile 		   = { };
	public is_complete		= { };

	getProfile() {
		alert("get profile")
		console.log("Sedang mengambil data....")
		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

	    let options = new RequestOptions({ headers: headers });

		this.http.post('http://masscredit-api.stagingapps.net/user/credential/profile',this.token,options)
				.map(response => response.json())
				.subscribe(
					(response : any) => {
						// for message
						this.complement_data	= response.data.profile.complement_user;
						this.profile			= response.data.profile;
						this.sumber_pendapatan 	= response.data.profile.complement_user.sumber_pendapatan;
						this.is_complete 		= response.data.profile.is_complete;
						console.log(response)
						// this.data.alamat_email 	= response.data.profile.email;

					
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
		// return this.investasiservice.Index();
	}

	edit(){
		return this.router.navigateByUrl('/dashboard/profile/edit')
	}

}