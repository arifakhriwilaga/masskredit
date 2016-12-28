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

	// Objek Request
	// public data = {


	// 	access_token		:'',
	// 	// objek data diri
	// 	nama_lengkap		:'',
	// 	alamat_email		:'',
	// 	phone_number		:'',

	// 	// objek keluarga
	// 	status_perkawinan	: 0,
	// 	jumlah_anak 	  	: this.number,
	// 	jumlah_tanggungan 	: this.number,

	//   	sumber_pendapatan	: 0,
	  	

	// 	// objek pekerjaan
	// 	nama_perusahaan 	  : '',
	// 	lama_bekerja 	  	  : '',
	// 	jabatan  	 		  : '',
	// 	pekerjaan  	 		  : '',
	// 	gaji_per_bulan 		  : this.number,
		
	// 	nama_usaha 	  				: '',
	// 	tahun_perusahaan_berdiri 	: '',
	// 	jenis_perusahaan 		  	: '',
	// 	pendapatan_bersih_perusahaan: this.number,

	// 	pengeluaran_per_bulan 	: this.number,
		
	// 	tlp_perusahaan			: '',

	// 	// objek kontak kerabat
	// 	nama_lengkap_keluarga 	: '',
	// 	hubungan	 			: '',
	// 	no_tlp	  				: '',
	// 	pekerjaan_kerabat 		: '',
	  	
	//   	// objek pendapatan lain 1
	  	
	//   	pendapatan_lain_1			: 0,
	// 	sumber_pendapatan_lain_1 	: '',
	// 	jumlah_pendapatan_lain_1 	: this.number,
	  	
	//   	// objek pendapatan lain 2
	//   	pendapatan_lain_2	: 0,
	// 	sumber_pendapatan_lain_2 	: '',
	// 	jumlah_pendapatan_lain_2 	: this.number,
	// 	// step4
	// 	foto_identitas		: this.image,
	// 	foto_npwp 		  	: this.image,
	// 	foto_diri	 	  	: this.image,

	// 	// objek data bank
	// 	foto_tabungan		: this.image,
	// 	no_rekening			: ''
	// }


	private enable:number;
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