import { Component, OnInit } 		from '@angular/core';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router }        					   from '@angular/router';
import {Observable} from 'rxjs/Observable';

declare var jQuery:any;
@Component({
	//moduleId: module.id,
	selector: 'edit',
	templateUrl: 'edit.component.html'
})

export class EditComponent implements OnInit {
	private fileReader:FileReader;
	private base64Encode:String;

	constructor(private http: Http, private router : Router){ }

	// encodeFile(file : File) {
	// 	let z : any = document.getElementById("foto_diri");
			
	// 		var file_a =	a.files[0];
	// 		var file_x =	x.files[0];
	// 		var file_y =	y.files[0];
	// 		var file_z =	z.files[0];
 //        this.fileReader.readAsDataURL(file_z);
 //    }

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
		mulai_bekerja 	  	  : null,
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
		foto_identitas		: this.foto_identitas,
		foto_npwp 		  	: this.foto_npwp,
		foto_diri	 	  	: this.foto_diri,

		// objek data bank
		foto_tabungan		: this.foto_tabungan,
		no_rekening			: null
	}
		public foto_identitas		= null;
		public foto_npwp 		  	= null;
		public foto_diri	 	  	= null;

		// objek data bank
		public foto_tabungan		= null;
		public check_image = [];
		// public setEncodeImage = setTimeout(this.encodeImages, 3000)

	ngOnInit(){
	
		// this.fileReader.onload = function(event, varty) {
		// 	let fileA = event.target.result.split(',')[1];
		// 	if(fileA == "AQID") {
		// 		this.data.foto_tabungan = null
		// 	}
		// 	else{
		// 		return this.data.foto_tabungan = fileA;
		// 	}
		// 	// console.log(fileB)
		// }

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
					  	let pendapatan_lain_1 = response.data.profile.complement_user.pendapatan_lain_1;
					  	let pendapatan_lain_2 = response.data.profile.complement_user.pendapatan_lain_2; 
					  	if(pendapatan_lain_1 == null) {
						  	this.data.pendapatan_lain_1	= 2
						  	this.data.pendapatan_lain_2	= 2
					  			
					  	}
						// entry data to object, before edit profile
						this.profile			= response.data.profile;
						this.complement_data	= response.data.profile.complement_user;
						this.sumber_pendapatan 	= response.data.profile.complement_user.sumber_pendapatan;
						this.data.nama_lengkap 	= response.data.profile.name;
						this.data.alamat_email 	= response.data.profile.email;						

						this.data.phone_number	= response.data.profile.phone_number;

						// object keluarga
						this.data.status_perkawinan	= response.data.profile.complement_user.status_perkawinan;
						this.data.jumlah_anak 	  	= response.data.profile.complement_user.jumlah_anak;

					  	this.data.sumber_pendapatan	= response.data.profile.complement_user.sumber_pendapatan;
					  	

						// object pekerjaan
						this.data.nama_perusahaan 	  = response.data.profile.complement_user.nama_perusahaan;
						this.data.mulai_bekerja 	  = response.data.profile.complement_user.mulai_bekerja;
						this.data.jabatan  	 		  =	response.data.profile.complement_user.jabatan;
						this.data.pekerjaan  	 	  = response.data.profile.complement_user.pekerjaan;
						this.data.gaji_per_bulan 	  = response.data.profile.complement_user.gaji_per_bulan;
						
						this.data.nama_usaha 	  				= response.data.profile.complement_user.nama_usaha,
						this.data.tahun_perusahaan_berdiri 		= response.data.profile.complement_user.tahun_perusahaan_berdiri;
						this.data.jenis_perusahaan 		  		= response.data.profile.complement_user.jenis_perusahaan;
						this.data.pendapatan_bersih_perusahaan	= response.data.profile.complement_user.pendapatan_bersih_perusahaan;

						this.data.pengeluaran_per_bulan 	= response.data.profile.complement_user.pengeluaran_per_bulan;
						this.data.tlp_perusahaan			= response.data.profile.complement_user.tlp_perusahaan;

						// object kontak kerabat
						this.data.nama_lengkap_keluarga 	= response.data.profile.complement_user.nama_lengkap_keluarga;
						this.data.hubungan	 				= response.data.profile.complement_user.hubungan;
						this.data.no_tlp	  				= response.data.profile.complement_user.no_tlp;
						this.data.pekerjaan_kerabat 		= response.data.profile.complement_user.pekerjaan_kerabat;
					  	
					  	// object pendapatan lain 1
						this.pendapatanLainFirst 			= response.data.profile.complement_user.pendapatan_lain_1;
						this.data.sumber_pendapatan_lain_1 	= response.data.profile.complement_user.sumber_pendapatan_lain_1;
						this.data.jumlah_pendapatan_lain_1 	= response.data.profile.complement_user.jumlah_pendapatan_lain_1;
					  	
					  	// object pendapatan lain 2
						this.data.sumber_pendapatan_lain_2 	= response.data.profile.complement_user.sumber_pendapatan_lain_1;
						this.data.jumlah_pendapatan_lain_2 	= response.data.profile.complement_user.jumlah_pendapatan_lain_1;
						
						// object bank
						this.data.no_rekening 	= response.data.profile.complement_user.no_rekening;
						
						// console.log(response.data.profile.complement_user.nama_perusahaa)
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
	}

	updateProfile(data){
			if(data) {
				this.encodeImages();	
			}
		}

	encodeImages(){
		let a : any = document.getElementById("foto_tabungan");
		let x : any = document.getElementById("foto_identitas");
		let y : any = document.getElementById("foto_npwp");
		let z : any = document.getElementById("foto_diri");
		
		var file_a =	a.files[0];
		var file_x =	x.files[0];
		var file_y =	y.files[0];
		var file_z =	z.files[0];
		var objectBlob	= new Uint8Array([1,2,3]);
		var arrayBlob	= objectBlob.buffer;
		var image_default = new Blob([arrayBlob]);

		// console.log(file_a,file_x,file_y,file_z)

		if(file_a == undefined) {
			file_a = image_default;
		}
		if(file_x == undefined) {
			file_x = image_default;
		}
		if(file_y == undefined) {
			file_y = image_default;
		}
		if(file_z == undefined) {
			file_z = image_default;
		}

		// console.log(file_z)

		this.encodeImage(file_a).onload = function(event, varty){
			try{
				let image = event.target.result.split(',')[1];
				
				if(image == "AQID") {
					this.data.foto_tabungan = null
				}

				if(image != "AQID") {
				 this.data.foto_tabungan = image;
				}
			}finally{
				this.encodeImage(file_x).onload = function(event, varty){
					try{
						let image = event.target.result.split(',')[1];
						
						if(image == "AQID") {
							this.data.foto_identitas = null
						}

						if(image != "AQID") {
						 this.data.foto_identitas = image;
						}
					}finally{
						this.encodeImage(file_y).onload = function(event, varty){
							try{
								let image = event.target.result.split(',')[1];
								
								if(image == "AQID") {
									this.data.foto_npwp = null
								}

								if(image != "AQID") {
								 this.data.foto_npwp = image;
								}
							}finally{
								this.encodeImage(file_z).onload = function(event, varty){
									try{
										let image = event.target.result.split(',')[1];
										
										if(image == "AQID") {
											this.data.foto_diri = null
										}

										if(image != "AQID") {
										 this.data.foto_diri = image;
										}
									}finally{
										this.changeProfile();
									}
								}.bind(this);
							}
						}.bind(this);
					}
				}.bind(this);
			}
		}.bind(this);
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

	encodeImage(file){
		let readerFile = new FileReader();
		readerFile.readAsDataURL(file);
		return readerFile;
	}

	changeProfile(){
		this.data.access_token = this.acces_token
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
								// this.getNewProfile();
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