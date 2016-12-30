import { Component } 		from '@angular/core';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router }        					   from '@angular/router';

declare var jQuery:any;
@Component({
	//moduleId: module.id,
	selector: 'edit',
	templateUrl: 'edit.component.html'
})

export class EditComponent {
	// private enable:boolean;

	constructor(private http: Http, private router : Router){ }

	// Default Objek
	private image:void;
	private number:number;

	// Objek Request
	public data = {


		access_token		: null,
		// objek data diri
		nama_lengkap		: null,
		alamat_email		: null,
		phone_number		: null,

		// objek keluarga
		status_perkawinan	: 0,
		jumlah_anak 	  	: this.number,
		jumlah_tanggungan 	: this.number,

	  	sumber_pendapatan	: 0,
	  	

		// objek pekerjaan
		nama_perusahaan 	  : null,
		lama_bekerja 	  	  : null,
		jabatan  	 		  : null,
		pekerjaan  	 		  : null,
		gaji_per_bulan 		  : this.number,
		
		nama_usaha 	  				: null,
		tahun_perusahaan_berdiri 	: null,
		jenis_perusahaan 		  	: null,
		pendapatan_bersih_perusahaan: this.number,

		pengeluaran_per_bulan 	: this.number,
		
		tlp_perusahaan			: null,

		// objek kontak kerabat
		nama_lengkap_keluarga 	: null,
		hubungan	 			: null,
		no_tlp	  				: null,
		pekerjaan_kerabat 		: null,
	  	
	  	// objek pendapatan lain 1
	  	
	  	pendapatan_lain_1			: 0,
		sumber_pendapatan_lain_1 	: null,
		jumlah_pendapatan_lain_1 	: this.number,
	  	
	  	// objek pendapatan lain 2
	  	pendapatan_lain_2	: 0,
		sumber_pendapatan_lain_2 	: null,
		jumlah_pendapatan_lain_2 	: this.number,
		// step4
		foto_identitas		: null,
		foto_npwp 		  	: null,
		foto_diri	 	  	: null,

		// objek data bank
		foto_tabungan		: null,
		no_rekening			: ''
	}

	// public copy_data = {
	// 	copy_foto_identitas : null,
	// 	copy_foto_npwp : null,
	// 	copy_foto_identitas : null,
	// }


	ngOnInit(){
		this.getProfile();
		// mask
		jQuery(function($){
			// mask keluarga
			// jQuery('#status_perkawinan').mask('000-000-000000');
			jQuery('#jumlah_anak').mask('00');
			jQuery('#jumlah_tanggungan').mask('000000000000');
			jQuery('#pengeluaran_per_bulan').mask('000000000000');
			jQuery('#sumber_pendapapatan').mask('000000000000');

			// mask pekerjaan
			// jQuery('#nama_perusahaan').mask('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');
			// jQuery('#lama_bekerja').mask('yyyy-mm-dd');
			// jQuery('#jabatan').mask('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');
			// jQuery('#pekerjaan').mask('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');
			jQuery('#gaji_per_bulan').mask('000000000000');
			// jQuery('#nama_usaha').mask('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');
			jQuery('#tahun_perusahaan_berdiri').mask('0000');
			// jQuery('#jenis_perusahaan').mask('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');
			jQuery('#pendapatan_bersih_perusahaan').mask('000000000000');
			jQuery('#phone_number').mask('000-0000-00000');
			jQuery('#tlp_perusahaan').mask('000-0000-00000');
			// jQuery('#gaji_per_bulan').mask('000000000000');
			
			// mask keluarga
			// jQuery('#nama_lengkap_keluarga').mask('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');
			// jQuery('#hubungan').mask('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');
			jQuery('#no_tlp').mask('000-0000-00000');
			// jQuery('#pekerjaan_kerabat').mask('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');

			// mask pendapatan lain 1
			// jQuery('#sumber_pendapatan_lain_1').mask('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');
			jQuery('#jumlah_pendapatan_lain_1').mask('000000000000');
			
			// mask pendapatan lain 2
			// jQuery('#sumber_pendapatan_lain_2').mask('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');
			jQuery('#jumlah_pendapatan_lain_2').mask('000000000000');
			jQuery('#no_rekening').mask('000000000000000');

			
		});
	}


	public acces_token = JSON.parse(localStorage.getItem("access_token"));
    public token = {access_token : JSON.parse(localStorage.getItem("access_token"))} ;
    public sumber_pendapatan = { }
	public complement_data = { };
	public profile 		   = { };
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
						this.profile	= response.data.profile;
						this.complement_data	= response.data.profile.complement_user;
						this.sumber_pendapatan 	= response.data.profile.complement_user.sumber_pendapatan;
						this.data.nama_lengkap 	= response.data.profile.name;
						this.data.alamat_email 	= response.data.profile.email;						

						this.data.phone_number		= response.data.profile.phone_number,

						// objek keluarga
						this.data.status_perkawinan	= response.data.profile.complement_user.status_perkawinan,
						this.data.jumlah_anak 	  	= response.data.profile.complement_user.jumlah_anak,
						// this.data.jumlah_tanggungan 	= response.data.profile.jumlah_tanggungan,

					  	this.data.sumber_pendapatan	= response.data.profile.complement_user.sumber_pendapatan,
					  	

						// objek pekerjaan
						this.data.nama_perusahaan 	  = response.data.profile.complement_user.nama_perusahaan,
						this.data.lama_bekerja 	  	  = response.data.profile.complement_user.lama_bekerja,
						this.data.jabatan  	 		  =	response.data.profile.complement_user.jabatan,
						this.data.pekerjaan  	 	= response.data.profile.complement_user.pekerjaan,
						this.data.gaji_per_bulan 		  = response.data.profile.complement_user.gaji_per_bulan,
						
						this.data.nama_usaha 	  				= response.data.profile.complement_user.nama_usaha,
						this.data.tahun_perusahaan_berdiri 	= response.data.profile.complement_user.tahun_perusahaan_berdiri,
						this.data.jenis_perusahaan 		  	= response.data.profile.complement_user.jenis_perusahaan,
						this.data.pendapatan_bersih_perusahaan = response.data.profile.complement_user.pendapatan_bersih_perusahaan ,

						this.data.pengeluaran_per_bulan 	= response.data.profile.complement_user.pengeluaran_per_bulan,
						this.data.tlp_perusahaan			= response.data.profile.complement_user.tlp_perusahaan,

						// objek kontak kerabat
						this.data.nama_lengkap_keluarga 	= response.data.profile.complement_user.nama_lengkap_keluarga,
						this.data.hubungan	 			= response.data.profile.complement_user.hubungan,
						this.data.no_tlp	  				= response.data.profile.complement_user.no_tlp,
						this.data.pekerjaan_kerabat 		= response.data.profile.complement_user.pekerjaan_kerabat,
					  	
					  	// objek pendapatan lain 1
					  	
					  	this.data.pendapatan_lain_1			= response.data.profile.complement_user.pendapatan_lain_1,
						this.pendapatanLainFirst 		= response.data.profile.complement_user.pendapatan_lain_1,
						this.data.sumber_pendapatan_lain_1 	= response.data.profile.complement_user.sumber_pendapatan_lain_1,
						this.data.jumlah_pendapatan_lain_1 	= response.data.profile.complement_user.jumlah_pendapatan_lain_1,
					  	
					  	// objek pendapatan lain 2
					  	this.data.pendapatan_lain_2	= response.data.profile.complement_user.pendapatan_lain_2,
						this.pendapatanLainSecond 		= response.data.profile.complement_user.pendapatan_lain_2,
						
						this.data.sumber_pendapatan_lain_2 	= response.data.profile.complement_user.sumber_pendapatan_lain_1,
						this.data.jumlah_pendapatan_lain_2 	= response.data.profile.complement_user.jumlah_pendapatan_lain_1;
						
						// this.data.foto_diri 	= response.data.profile.profile_image;
						// alert("Data berhasil diambil")
					
					
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

	updateProfile(data){

		// console.log(data);
		if(this.data.sumber_pendapatan == 1) {
			this.data.nama_usaha 	  				= "";
			this.data.tahun_perusahaan_berdiri 		= "";
			this.data.pendapatan_bersih_perusahaan 	= 0;

		}
		if(this.data.sumber_pendapatan == 2) {
			this.data.nama_perusahaan 	= "";
			this.data.lama_bekerja 	  	= "";
			this.data.jabatan  	 		= "";
			this.data.pekerjaan  	 	= "";
			this.data.jenis_perusahaan  = "";
			this.data.gaji_per_bulan 	= 0;
			this.data.nama_usaha 	  				= "";
			this.data.tahun_perusahaan_berdiri 		= "";
			this.data.pendapatan_bersih_perusahaan 	= 0;

		}
					
		this.data.access_token 	= this.acces_token;
		// console.log(data)

		// let readerFileA = new FileReader();
		// readerFileA.onload = function(event, varty) {
		// 	let fileA = event.target.result.split(',')[1];
		// 	if(fileA == "AQID") {
		// 		this.data.foto_tabungan = null
		// 	}
		// 	else{
		// 		return this.data.foto_tabungan = fileA;
		// 	}
		// 	// console.log(fileB)
		// }.bind(this)

		// let readerFileX = new FileReader();
  		
		// readerFileX.onload = function(event, varty) {
		// 	let fileX = event.target.result.split(',')[1];
		// 	if(fileX == "AQID") {
		// 		this.data.foto_identitas = null
		// 	}
		// 	else{
		// 		return this.data.foto_identitas = fileX;
		// 	}
		// 	// console.log(fileA);
		// }.bind(this);

		// let readerFileY = new FileReader();
		// readerFileY.onload = function(event, varty) {
		// 	let fileY = event.target.result.split(',')[1];
		// 	if(fileY == "AQID") {
		// 		this.data.foto_npwp = null
		// 	}
		// 	else{
		// 		return this.data.foto_npwp = fileY;
		// 	}
			
			
		// 	// console.log(fileB)
		// }.bind(this)


		let readerFileZ = new FileReader();
		readerFileZ.onload = function(event, varty) {
			let fileZ = event.target.result.split(',')[1];
				if(fileZ == "AQID") {
				this.data.foto_diri = null
				}
				if(fileZ != "AQID") {
				this.data.foto_diri = fileZ;
				}
				
				console.log(this.data);
				console.log("Sedang mengirim data....")
				
				let headers = new Headers({ 
				 	'Content-Type': 'application/json',
				 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
			 	});

			    let options = new RequestOptions({ headers: headers });

				this.http.put('http://masscredit-api.stagingapps.net/user/credential/update-profile',this.data,options)
						.map(response => response.json())
						.subscribe(
							(response : any) => {
								// for message
								var kosong:null;
								var code 		= response.meta.code;
								var message 	= response.meta.message;
								if(code == 200) {
									alert("Profile berhasil diupate")
									return this.router.navigateByUrl('/dashboard/profile')
								}
								else{
									alert("Profile gagal diupdate")
								}
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

		}.bind(this)



			// let a : any = document.getElementById("foto_tabungan");
			// let x : any = document.getElementById("foto_identitas");
			// let y : any = document.getElementById("foto_npwp");
			let z : any = document.getElementById("foto_diri");
			
			// var file_a =	a.files[0];
			// var file_x =	x.files[0];
			// var file_y =	y.files[0];
			var file_z =	z.files[0];
			var objectBlob	= new Uint8Array([1,2,3]);
			var arrayBlob	= objectBlob.buffer;
			var image_default = new Blob([arrayBlob]);

			if(file_z == undefined) {
				file_z = image_default;
			}
			// if(file_y == null) {
			// 	file_y = image_default;
			// }
			// if(file_x == undefined) {
			// 	file_x = image_default;
			// }
			// if(file_a == undefined) {
			// 	file_a = image_default;
			// }
			// var encode_a  = readerFileA.readAsDataURL(file_a);
			// var encode_x  = readerFileX.readAsDataURL(file_x);
			// var encode_y  = readerFileY.readAsDataURL(file_y);
			var encode_z  = readerFileZ.readAsDataURL(file_z);
			// this.data.foto_tabungan		= encode_a;
			// this.data.foto_identitas	= encode_x;
			// this.data.foto_npwp 		= encode_y;
			this.data.foto_diri			= encode_z;
	}

	private statusMarried:any;
	getStatusMarried(id){
		this.statusMarried = id;
		if(id == 2) {
			this.data.status_perkawinan = 0;
			this.data.jumlah_anak		= 0;
			this.data.jumlah_tanggungan = 0;
		}
		if(id == 1) {
			this.data.status_perkawinan = null;
			this.data.jumlah_anak		= null;
			this.data.jumlah_tanggungan = null;
		}
	  	console.log(id)
	}

	private sumberPendapatan:any;
	getSumberPendapatan(id){
		this.sumberPendapatan = id;
		if(id == 2) {
			console.log(id)
			this.data.gaji_per_bulan = 0;
			// this.data.pendapatan_bersih_perusahaan = null;
			this.sumber_pendapatan = 2;

			// objek pekerjaan
			// this.data.nama_usaha 	  				= "",
			// this.data.tahun_perusahaan_berdiri 		= 0,
			// this.data.jenis_perusahaan 		  		= "",
			// this.data.pendapatan_bersih_perusahaan	= 0,

			// this.data.pengeluaran_per_bulan 		= 0,
			// this.data.tlp_perusahaan				= 0,


			
		}
		if(id == 1) {
			console.log(id)
			// this.data.gaji_per_bulan = null;
			this.data.pendapatan_bersih_perusahaan = 0;
			this.sumber_pendapatan = 1;
			
			// this.data.nama_perusahaan 	= "",
			// this.data.lama_bekerja 	  	= "",
			// this.data.jabatan  	 		= "",
			// this.data.pekerjaan  	 	= "",
			// this.data.gaji_per_bulan 	= 0,
			
		}
	}

	private pendapatanLainFirst:any;
	getPendapatanLainFirst(id){
		this.pendapatanLainFirst = id;
		if(id == 2) {
			console.log(id)
		  	
		  	// objek pendapatan lain 1
			this.data.pendapatan_lain_1 = 0;
			this.data.sumber_pendapatan_lain_1 	= '';
			this.data.jumlah_pendapatan_lain_1 	= 0;			
		}
		else{
		  	console.log(id)
			this.data.pendapatan_lain_1 = 1;
		}
	}


	private pendapatanLainSecond:any;
	getPendapatanLainSecond(id){
		this.pendapatanLainSecond = id;
	  	if(id == 2) {

	  		// objek pendapatan lain 2
			this.data.pendapatan_lain_2 = 0;
			this.data.sumber_pendapatan_lain_2 	= '';
			this.data.jumlah_pendapatan_lain_2 	= 0;
		}
		else{
		  	console.log(id)
			this.data.pendapatan_lain_2 = 1;
		}
	}

	changeProfile(){
		let headers = new Headers({ 
		 	'Content-Type': 'application/json',
		 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	 	});

	 	let options = new RequestOptions({ headers: headers });

		this.http.put('http://masscredit-api.stagingapps.net/user/credential/update-profile',this.data,options)
							.map(response => response.json())
							.subscribe(
								(response : any) => {
									// for message
									var kosong:null;
									var code 		= response.meta.code;
									var message 	= response.meta.message;
									if(code == 200) {
										alert("Profile berhasil diupate")
										return this.router.navigateByUrl('/dashboard/profile')
									}
									else{
										alert("Profile gagal diupdate")
									}
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

	cancelUpdateProfile(){
		return this.router.navigateByUrl('/dashboard/profile')
	}

}