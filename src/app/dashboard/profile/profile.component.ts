import { Component } 		from '@angular/core';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router } from '@angular/router';
import { GlobalService } from './../../global.service';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'profile',
	templateUrl: 'profile.component.html'
})

export class ProfileComponent {
	// private enable:boolean;

	constructor(private http: Http, private router : Router, private globalService : GlobalService){ }

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
		jumlah_tanggungan : this.number,

	  	sumber_pendapatan	: 0,
	  	
		// objek pekerjaan
		nama_perusahaan : null,
		mulai_bekerja 	: null,
		jabatan  	 		  : null,
		pekerjaan  	 		: null,
		gaji_per_bulan 	: this.number,
		
		nama_usaha 	  	: null,
		tahun_perusahaan_berdiri : null,
		jenis_perusahaan 		  	: null,
		pendapatan_bersih_perusahaan: this.number,

		pengeluaran_per_bulan : this.number,
		
		tlp_perusahaan : null,

		// objek kontak kerabat
		nama_lengkap_keluarga : null,
		hubungan : null,
		no_tlp : null,
		pekerjaan_kerabat : null,
	  	
	  	// objek pendapatan lain 1
	  	
	  pendapatan_lain_1	: 0,
		sumber_pendapatan_lain_1 : null,
		jumlah_pendapatan_lain_1 : this.number,
	  	
	  	// objek pendapatan lain 2
	  pendapatan_lain_2	: 0,
		sumber_pendapatan_lain_2 : null,
		jumlah_pendapatan_lain_2 : this.number,
		// step4
		foto_identitas	: null,
		foto_npwp 		  : null,
		foto_diri	 	  	: null,

		// objek data bank
		foto_tabungan		: null,
		no_rekening			: null,

		angsuran : []
	}

	private enable:number
	ngOnInit(){
		// jQuery("input").prop("disabled", true);
		// jQuery("#batal").hide();
		this.getProfile();
		// this.enableField();	
		// this.disableField();	

		// dynamic data angsuran
		var counter = 1;
		jQuery("#addButton").click(function(){
			if(counter > 5) {
				alert("Only 5 textbox");
				return false;
			}


			var newTextBoxDiv = jQuery(document.createElement('div'))
			.attr("id",'TextBoxDiv' + counter).attr("class",'blockElement');

			newTextBoxDiv.after().html(
				'<label>Angsuran</label>' +
				'<input type="text" placeholder="Jumlah Angsuran" class="form-control input-md jumlah-angsuran" name="textbox1' + counter + 
				'" id="textbox1' + counter + '" value="">' +
				'<input type="text" placeholder="Deskripsi Angsuran" class="form-control input-md description-angsuran" name="textbox2' + counter + 
				'" id="textbox2' + counter + '" value="">'
			);
			newTextBoxDiv.appendTo("#TextBoxesGroup");
			counter++;
			console.log(counter)
		});

		jQuery("#removeButton").click(function(){
			if(counter <= 1){
				alert("No more textbove remove");
				return false;
			}	
			counter--;
			console.log(counter)
			jQuery("#TextBoxDiv" + counter).remove();

		});

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


	// condition for section data kerabat
	private editDataAngsuran = 0;
	showFormAngsuran(){
		jQuery(".data-angsuran").prop("disabled", false);
		this.editDataAngsuran = 1;
	}

	cancelDataAngsuran(){
		jQuery(".data-angsuran").prop("disabled", true);
		this.editDataAngsuran = 0;
		this.getProfile();
	}

	submitDataAngsuran(data){
		let angsuran = [];
		jQuery(".blockElement").each(function(){
				// angsuran.push({
				// 	jumlah_angsuran : jQuery(".jumlah-angsuran").find('input[type=text],select'),
				// 	description_angsuran : jQuery(".description-angsuran").val().find('input[type=text],select')
				// })
				angsuran.push({
					deskripsi_angsuran	: jQuery(this).find('.deskripsi-angsuran').val() ,
	        jumlah_angsuran			: jQuery(this).find('.jumlah-angsuran').val(),
	        // taksiran_harga_jaminan: jQuery(this).find('.taksiran-harga-jaminan').val(),
	        // foto_jaminan_satu	: jQuery(this).find('.jumlah-angsuran').val(),
	        // foto_jaminan_dua	: jQuery(this).find('.jumlah-angsuran').val(),
	        // foto_jaminan_tiga	: jQuery(this).find('.jumlah-angsuran').val(), 
				})
		})
		this.data.angsuran = angsuran
		this.updateProfile();
	}

	// condition for section data pribadi
	private editDataPribadiPhoto = 0;
	enableDataDiriPhoto(){
		this.editDataPribadiPhoto = 1;
	}

	cancelDataPribadiPhoto(){
		this.editDataPribadiPhoto = 0;
	}

	updateDataPribadiPhoto(){
		let z : any = document.getElementById("foto_diri");
		var file_z =	z.files[0];
		var objectBlob	= new Uint8Array([1,2,3]);
		var arrayBlob	= objectBlob.buffer;
		var image_default = new Blob([arrayBlob]);

		if(file_z == undefined) {
			file_z = image_default;
		}

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
					this.updateProfile();
				}
			}.bind(this);
	}

	// condition for section data kerabat
	private editDataKerabat = 0;
	enableDataKerabat(){
		jQuery(".data-kerabat").prop("disabled", false);
		this.editDataKerabat = 1;
	}

	cancelDataKerabat(){
		jQuery(".data-kerabat").prop("disabled", true);
		this.editDataKerabat = 0;
		this.getProfile();
	}

	updateDataKerabat(data){
		// jQuery(".data-diri").prop("disabled", true);
		this.updateProfile();
	}

	// condition for section data jaminan
	public editDataJaminan = 0;
	enableDataJaminan(){
		jQuery(".data-angsuran").prop("disabled", false);
		this.editDataAngsuran= 1;
	}

	cancelDataJaminan(){
		jQuery(".data-angsuran").prop("disabled", true);
		this.editDataAngsuran = 0;
		this.getProfile();
	}

	updateDataJaminan(data){
		// jQuery(".data-diri").prop("Profile, true);
		// this.updaprofile();
	}

	// condition for section data Bank
	private editDataBank = 0;
	enableDataBank(){
		jQuery("#bank").prop("disabled", false);
		this.editDataBank = 1;
	}

	cancelDataBank(){
		jQuery("#bank").prop("disabled", true);
		this.editDataBank = 0;
	}

	updateDataBank(data){
		// jQuery(".data-bank").prop("disabled", true);
		let a : any = document.getElementById("foto_tabungan");
		
		var file_a =	a.files[0];
		var objectBlob	= new Uint8Array([1,2,3]);
		var arrayBlob	= objectBlob.buffer;
		var image_default = new Blob([arrayBlob]);

		if(file_a == undefined) {
			file_a = image_default;
		}
		// call function encodeImage for read file before encode
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
				this.updateProfile()	
			}

		}.bind(this);
	}

	// condition for section data penunjang
	private editDataPenunjang = 0;

	enableDataPenunjang(){
		this.editDataPenunjang = 1;
	}

	cancelDataPenunjang(){
		this.editDataPenunjang = 0;
		this.getProfile();
	}

	updateDataPenunjang(data){
		let x : any = document.getElementById("foto_identitas");
		let y : any = document.getElementById("foto_npwp");
		
		var file_x =	x.files[0];
		var file_y =	y.files[0];
		var objectBlob	= new Uint8Array([1,2,3]);
		var arrayBlob	= objectBlob.buffer;
		var image_default = new Blob([arrayBlob]);


		if(file_x == undefined) {
			file_x = image_default;
		}
		if(file_y == undefined) {
			file_y = image_default;
		}

		// call function encodeImage for read file before encode
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
						this.updateProfile()
					}
				}.bind(this);
			}
		}.bind(this);		
	}

	// condition for section data pekerjaan
	private editDataPekerjaan = 0;

	public sumberPendapatan:any;
	getSumberPendapatan(id){
		this.sumberPendapatan = id;
		this.data.sumber_pendapatan = id;
		console.log(this.sumberPendapatan)
	}

	enableDataPekerjaan(){
		jQuery("#job").prop("disabled", false);
		this.editDataPekerjaan = 1;
	}

	cancelDataPekerjaan(){
		if(this.data.sumber_pendapatan == 1){
			this.sumberPendapatan = null;
		}
		if(this.data.sumber_pendapatan == 2){
			this.sumberPendapatan = null;
		}
		jQuery("#job").prop("disabled", true);
		this.editDataPekerjaan = 0;
		this.getProfile();
	}

	updateDataPekerjaan(data){
		if(this.data.sumber_pendapatan == 0){
			this.data.nama_perusahaan = "";
			this.data.mulai_bekerja = "";
			this.data.jabatan =	"";
			this.data.pekerjaan = "";
			this.data.gaji_per_bulan = 0;
			
			this.data.nama_usaha = "",
			this.data.tahun_perusahaan_berdiri = "";
			this.data.jenis_perusahaan = "";
			this.data.pendapatan_bersih_perusahaan = 0;

			this.data.pengeluaran_per_bulan = 0;
			this.data.tlp_perusahaan = "";
		}

		if(this.data.sumber_pendapatan == 1) {
			this.data.nama_usaha = "",
			this.data.tahun_perusahaan_berdiri = "";
			this.data.jenis_perusahaan = "";
			this.data.pendapatan_bersih_perusahaan = 0;
		}

		if(this.data.sumber_pendapatan == 2) {
			this.data.nama_perusahaan = "";
			this.data.mulai_bekerja = "";
			this.data.jabatan =	"";
			this.data.pekerjaan = "";
			this.data.gaji_per_bulan = 0;
		}
		
		this.updateProfile()
	}

	getProfile() {
		// alert("get profile")
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
						console.log(response)
						let pendapatan_lain_1 = response.data.profile.complement_user.pendapatan_lain_1;
					  let pendapatan_lain_2 = response.data.profile.complement_user.pendapatan_lain_2; 
					  	if(pendapatan_lain_1 == null) {
						  	this.data.pendapatan_lain_1	= 2
						  	this.data.pendapatan_lain_2	= 2
					  			
					  	}
						// entry data to object, before edit profile
						this.profile			= response.data.profile;
						this.complement_data	= response.data.profile.complement_user;
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
						this.data.pendapatan_lain_1 	= response.data.profile.complement_user.pendapatan_lain_1;
						this.pendapatanLainFirst 			= response.data.profile.complement_user.pendapatan_lain_1;
						this.data.sumber_pendapatan_lain_1 	= response.data.profile.complement_user.sumber_pendapatan_lain_1;
						this.data.jumlah_pendapatan_lain_1 	= response.data.profile.complement_user.jumlah_pendapatan_lain_1;
					  	
					  	// object pendapatan lain 2
						this.data.pendapatan_lain_2 	= response.data.profile.complement_user.pendapatan_lain_2;
						this.pendapatanLainSecond 			= response.data.profile.complement_user.pendapatan_lain_2;
						
						this.data.sumber_pendapatan_lain_2 	= response.data.profile.complement_user.sumber_pendapatan_lain_2;
						this.data.jumlah_pendapatan_lain_2 	= response.data.profile.complement_user.jumlah_pendapatan_lain_2;
						
						// object bank
						this.data.no_rekening 	= response.data.profile.complement_user.no_rekening;
						
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

	// condition for get other_income_one data
	private pendapatanLainFirst:any;
	getPendapatanLainFirst(id){
		this.pendapatanLainFirst = id;
		if(id == 2) {
			this.data.pendapatan_lain_1 = 2;		
		}
		else{
		  this.data.pendapatan_lain_1 = 1;
		}
	}

	private pendapatanLainSecond:any;
	getPendapatanLainSecond(id){
		this.pendapatanLainSecond = id;
		if(id == 2) {
			// objek pendapatan lain 1
			this.data.pendapatan_lain_2 = 2;
		}
		else{
			this.data.pendapatan_lain_2 = 1;
		}
	}

	// condition for section data pribadi
	private editDataPendapatanLain = 0;
	enableDataPendapatanLain(){
		jQuery("#other-income").prop("disabled", false);
		this.editDataPendapatanLain = 1;
	}

	cancelDataPendapatanLain(){
		jQuery("#other-income").prop("disabled", true);
		this.editDataPendapatanLain = 0;
	}

	updateDataPendapatanLain(){
		if(this.data.pendapatan_lain_1 == 0) {
			// objek pendapatan lain 1
			this.data.pendapatan_lain_1 = 2;
			this.data.sumber_pendapatan_lain_1 	= "";
			this.data.jumlah_pendapatan_lain_1 	= 0;	

			// objek pendapatan lain 2
			this.data.pendapatan_lain_2 = 2;
			this.data.sumber_pendapatan_lain_2 	= "";
			this.data.jumlah_pendapatan_lain_2 	= 0;
		}

		if(this.data.pendapatan_lain_1 == 2) {
			// objek pendapatan lain 1	
			this.data.sumber_pendapatan_lain_1 	= "";
			this.data.jumlah_pendapatan_lain_1 	= 0;	

			// objek pendapatan lain 2
			this.data.pendapatan_lain_2 = 2;
			this.data.sumber_pendapatan_lain_2 	= "";
			this.data.jumlah_pendapatan_lain_2 	= 0;

		}if(this.data.pendapatan_lain_2 == 2) {
			this.data.sumber_pendapatan_lain_2 	= "";
			this.data.jumlah_pendapatan_lain_2 	= 0;		
		}
		this.updateProfile();
		// this.updateProfile()
	}



	// function for get data image by id
	encodeImages(){
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

		// console.log(file_a,file_x,file_y,file_z)

		// if(file_a == undefined) {
		// 	file_a = image_default;
		// }
		// if(file_x == undefined) {
		// 	file_x = image_default;
		// }
		// if(file_y == undefined) {
		// 	file_y = image_default;
		// }
		if(file_z == undefined) {
			file_z = image_default;
		}

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
					this.updateProfile();
				}
			}.bind(this);

		// // call function encodeImage for read file before encode
		// this.encodeImage(file_a).onload = function(event, varty){
		// 	try{
		// 		let image = event.target.result.split(',')[1];
				
		// 		if(image == "AQID") {
		// 			this.data.foto_tabungan = null
		// 		}

		// 		if(image != "AQID") {
		// 		 this.data.foto_tabungan = image;
		// 		}
		// 	}finally{
		// 		this.encodeImage(file_x).onload = function(event, varty){
		// 			try{
		// 				let image = event.target.result.split(',')[1];
						
		// 				if(image == "AQID") {
		// 					this.data.foto_identitas = null
		// 				}

		// 				if(image != "AQID") {
		// 				 this.data.foto_identitas = image;
		// 				}
		// 			}finally{
		// 				this.encodeImage(file_y).onload = function(event, varty){
		// 					try{
		// 						let image = event.target.result.split(',')[1];
								
		// 						if(image == "AQID") {
		// 							this.data.foto_npwp = null
		// 						}

		// 						if(image != "AQID") {
		// 						 this.data.foto_npwp = image;
		// 						}
		// 					}finally{
		// 						this.encodeImage(file_z).onload = function(event, varty){
		// 							try{
		// 								let image = event.target.result.split(',')[1];
										
		// 								if(image == "AQID") {
		// 									this.data.foto_diri = null
		// 								}

		// 								if(image != "AQID") {
		// 								 this.data.foto_diri = image;
		// 								}
		// 							}finally{
		// 								this.updateProfile();
		// 							}
		// 						}.bind(this);
		// 					}
		// 				}.bind(this);
		// 			}
		// 		}.bind(this);
		// 	}
		// }.bind(this);
		// }
	}

	// function for read image file
	encodeImage(file){
		let readerFile = new FileReader();
		readerFile.readAsDataURL(file);
		return readerFile;
	}


	// for request change profile data to server
	updateProfile(){
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
								this.getProfile();
								// this.editDataPribadi = 0;
								// return this.router.navigateByUrl('/dashboard/profile')
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

	// edit(){
	// 	return this.router.navigateByUrl('/dashboard/profile/edit')
	// }

}