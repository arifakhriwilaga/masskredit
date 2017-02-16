import { Component } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

declare var jQuery:any;

@Component({
	selector: 'profile',
	templateUrl: 'profile.component.html'
})

export class ProfileComponent {
	
	constructor(private http: Http, private router : Router){ }

	// default Objek
	private number:number;
	public acces_token = JSON.parse(localStorage.getItem("access_token"));
  public token = {access_token : JSON.parse(localStorage.getItem("access_token"))} ;
  public sumber_pendapatan = { }
	public complement_data = { };
	public profile = { };
	public is_complete = { };
	public editDataProfile = 0;
	public banks = []

	// declare object url
	private profileUrl = 'https://masscredit-api.stagingapps.net/user/credential/profile';
	private updateprofileUrl = 'https://masscredit-api.stagingapps.net/user/credential/update-profile';
	private bankUrl = 'https://masscredit-api.stagingapps.net/master/bank';
	
	// declare headers
	private headers = new Headers({ 
	 	'Content-Type': 'application/json',
	 	'API_KEY' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
	});    
  private options = new RequestOptions({ headers: this.headers });

	// object update profile
	public data = {
		access_token : null,
		
		// object data personal
		nama_lengkap : null,
		alamat_email : null,
		phone_number : null,
		jenis_kelamin : 0,
		tempat_lahir : null,
		tanggal_lahir : null,
		alamat : null,
		nama_gadis_ibu_kandung : null,

		// object data personal family
		status_perkawinan	: 0,
		jumlah_anak : this.number,
		jumlah_tanggungan : this.number,

	  sumber_pendapatan	: 0,
	  	
		// object data job [work || business]
		// if work
		nama_perusahaan : null,
		mulai_bekerja : null,
		jabatan : null,
		pekerjaan : null,
		gaji_per_bulan : this.number,
		// if business
		nama_usaha : null,
		tahun_perusahaan_berdiri : null,
		jenis_perusahaan : null,
		pendapatan_bersih_perusahaan: this.number,

		pengeluaran_per_bulan : this.number,
		
		tlp_perusahaan : null,

		// object data family
		nama_lengkap_keluarga : null,
		hubungan : null,
		no_tlp : null,
		pekerjaan_kerabat : null,
	  	
	  // object data other-income-1
	  pendapatan_lain_1	: 2,
		sumber_pendapatan_lain_1 : null,
		jumlah_pendapatan_lain_1 : this.number,
	  	
	  // object data other-income-2
	  pendapatan_lain_2	: 2,
		sumber_pendapatan_lain_2 : null,
		jumlah_pendapatan_lain_2 : this.number,
		
		// object data penunjang
		foto_identita : null,
		foto_npwp : null,
		foto_diri	: null,

		// object data bank
		foto_tabungan : null,
		bank : 0,
		no_rekening	: null,
	}

	public enable:number
	public dataProfile = 0;
	private buttonProfile = 0;

	ngOnInit(){
		// function get data bank
		this.getBank()
		// function get profile
		this.getProfile();
	}	

		// get id bank name
	private bank = 0;
	getBankName(id){
		this.data.bank = id;
		this.bank = id;
		// console.log(this.lastBank)
	}

	enableEditProfile(){
		jQuery("#profile").prop("disabled", false);
		this.buttonProfile = 1;
	}

	cancelEditProfile(){
		jQuery("#profile").prop("disabled", false);
		this.dataProfile = 0;
		this.getProfile();
	}
  // request get profile	
	getProfile() {
		this.http.post(this.profileUrl,this.token,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// console.log(response);
				let pendapatan_lain_1 = response.data.profile.complement_user.pendapatan_lain_1;
			  let pendapatan_lain_2 = response.data.profile.complement_user.pendapatan_lain_2; 
		  	if(pendapatan_lain_1 == null) {
			  	this.data.pendapatan_lain_1	= 2;
			  	this.data.pendapatan_lain_2	= 2
		  	}
				// entry data to object, before edit profile
				// object personal
				this.profile = response.data.profile;
				this.complement_data = response.data.profile.complement_user;
				this.data.nama_lengkap 	= response.data.profile.name;
				this.data.jenis_kelamin = response.data.profile.jenis_kelamin;
				this.data.tempat_lahir = response.data.profile.tempat_lahir;
				this.data.tanggal_lahir = response.data.profile.tanggal_lahir;
				this.data.alamat	= response.data.profile.alamat;
				this.data.nama_gadis_ibu_kandung = response.data.profile.complement_user.nama_gadis_ibu_kandung,
				this.data.alamat_email = response.data.profile.email;						
				this.data.phone_number = response.data.profile.phone_number;

				// object data personal family
				this.data.status_perkawinan	= response.data.profile.complement_user.status_perkawinan;
				this.data.jumlah_anak = response.data.profile.complement_user.jumlah_anak;

				// object data job
			  this.data.sumber_pendapatan	= response.data.profile.complement_user.sumber_pendapatan;

				// if work
				this.data.nama_perusahaan = response.data.profile.complement_user.nama_perusahaan;
				this.data.mulai_bekerja = response.data.profile.complement_user.mulai_bekerja;
				this.data.jabatan =	response.data.profile.complement_user.jabatan;
				this.data.pekerjaan = response.data.profile.complement_user.pekerjaan;
				this.data.gaji_per_bulan = response.data.profile.complement_user.gaji_per_bulan;
				// if business
				this.data.nama_usaha = response.data.profile.complement_user.nama_usaha,
				this.data.tahun_perusahaan_berdiri 		= response.data.profile.complement_user.tahun_perusahaan_berdiri;
				if(response.data.profile.complement_user.tahun_perusahaan_berdiri == 0) {
			  	this.data.tahun_perusahaan_berdiri	= null;
		  	}
				this.data.jenis_perusahaan = response.data.profile.complement_user.jenis_perusahaan;
				this.data.pendapatan_bersih_perusahaan	= response.data.profile.complement_user.pendapatan_bersih_perusahaan;

				// this.data.pengeluaran_per_bulan = response.data.profile.complement_user.pengeluaran_per_bulan;
				this.data.tlp_perusahaan = response.data.profile.complement_user.tlp_perusahaan;

				// object data family
				this.data.nama_lengkap_keluarga = response.data.profile.complement_user.nama_lengkap_keluarga;
				this.data.hubungan = response.data.profile.complement_user.hubungan;
				this.data.no_tlp = response.data.profile.complement_user.no_tlp;
				this.data.pekerjaan_kerabat = response.data.profile.complement_user.pekerjaan_kerabat;
			  	
			  	// object data other-income-1
				this.data.pendapatan_lain_1 = response.data.profile.complement_user.pendapatan_lain_1;
				this.pendapatanLainFirst = response.data.profile.complement_user.pendapatan_lain_1;
			  this.convertIdr(response.data.profile.complement_user.jumlah_pendapatan_lain_1)	
				this.data.sumber_pendapatan_lain_1 = response.data.profile.complement_user.sumber_pendapatan_lain_1;
				this.data.jumlah_pendapatan_lain_1 = response.data.profile.complement_user.jumlah_pendapatan_lain_1;
			  	// object other-income-2
				this.data.pendapatan_lain_2 = response.data.profile.complement_user.pendapatan_lain_2;
				this.pendapatanLainSecond = response.data.profile.complement_user.pendapatan_lain_2;
				
				this.data.sumber_pendapatan_lain_2 = response.data.profile.complement_user.sumber_pendapatan_lain_2;
				this.data.jumlah_pendapatan_lain_2 = response.data.profile.complement_user.jumlah_pendapatan_lain_2;
				
				// object data bank
				this.data.bank = response.data.profile.complement_user.bank;
				this.data.no_rekening = response.data.profile.complement_user.no_rekening;
				this.dataProfile = 1;
				this.buttonProfile = 0;
				jQuery("#profile").prop("disabled", true);
				
			},(err:any) => {
        var error   = JSON.parse(err._body)
        var message = error.meta.message
          if(message == "unauthorized") {
            alert("Maaf session anda telah habis silahkan login kembali")
            return this.router.navigateByUrl('/dashboard/sign-out')
            
          }  
	    });
	}

	// request get data bank
  getBank(){
	this.http.get(this.bankUrl,this.options)
		.map(response => response.json())
		.subscribe((response : any) => {
			this.banks 		= response.data.tipe_bank;
			this.banks.pop();
			// this.listData = 2;
			// let lengthBank = this.banks.length;
			// this.lastBank = this.banks.length+1;
			// let newBank = {
			// 	id_tipe_bank : lengthBank+1,
			// 	desc_tipe_bank : "Lainnya"
			// };
			// for (let i = 0; i < lengthBank; i++) {
			// 	if(i == lengthBank-1) {
			// 		this.banks.push(newBank);
			// 	}
			// }
		},(err:any) => {
			var error   = JSON.parse(err._body);
			var message = error.meta.message;
			if(message == "unauthorized") {
				alert("Maaf session anda telah habis silahkan login kembali");
				this.router.navigateByUrl('/dashboard/sign-out');
			}	
		});
  }

	// function for read image file
	encodeImage(file){
		let readerFile = new FileReader();
		readerFile.readAsDataURL(file);
		return readerFile;
	}

	convertIdr(data:any){
		// condition make delimiter
		var _minus = false;
		var b:any = data.toString();
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
			} else {
				c = b.substr(i-1,1) + c;
			}
		}
		if (_minus) c = "-" + c ;
		let idr = "Rp.";
		return idr.concat(c);
	}

  // request post update-profile
	updateProfile(){
		// console.log(this.data)
		this.data.access_token = this.acces_token;
		this.http.put(this.updateprofileUrl,this.data,this.options)
			.map(response => response.json())
			.subscribe((response : any) => {
				// for message
				var kosong:null;
				var code 		= response.meta.code;
				var message 	= response.meta.message;
				if(code == 200) {
					alert("Profile berhasil diupate, harap menunggu konfirmasi")
					this.getProfile();
				}
				else{
					alert("Profile gagal diupdate")
				}
			},(err:any) => {
        var error   = JSON.parse(err._body)
        var message = error.meta.message;
        var code = error.meta.code;
        if(message == "unauthorized") {
          alert("Maaf session anda telah habis silahkan login kembali")
          return this.router.navigateByUrl('/dashboard/sign-out')
        
        }if(code == "500") {
          alert("Update profile yang sebelumnya masih dalam proses persetujuan")
          return this.dataProfile = 1;  
        } 
	    });
	}

	// condition for section data pribadi
	private editDataPribadiPhoto = 0;
	enableDataDiriPhoto(){
		
		this.editDataPribadiPhoto = 1;
	}

	cancelDataPribadiPhoto(){
		this.editDataPribadiPhoto = 0;
		this.dataProfile = 0;
		this.getProfile();
	}

	submitEditProfile(data){
		this.dataProfile = 0;
		if(this.data.pendapatan_lain_1 == 0) {
			// objek pendapatan lain 1
			this.data.pendapatan_lain_1 = 0;
			this.data.sumber_pendapatan_lain_1 	= "";
			this.data.jumlah_pendapatan_lain_1 	= 0;	

			// objek pendapatan lain 2
			this.data.pendapatan_lain_2 = 0;
			this.data.sumber_pendapatan_lain_2 	= "";
			this.data.jumlah_pendapatan_lain_2 	= 0;
		}

		if(this.data.pendapatan_lain_1 == 0) {
			// objek pendapatan lain 1	
			this.data.sumber_pendapatan_lain_1 	= "";
			this.data.jumlah_pendapatan_lain_1 	= 0;	

			// objek pendapatan lain 2
			this.data.pendapatan_lain_2 = 0;
			this.data.sumber_pendapatan_lain_2 	= "";
			this.data.jumlah_pendapatan_lain_2 	= 0;

		}if(this.data.pendapatan_lain_2 == 0) {
			this.data.sumber_pendapatan_lain_2 	= "";
			this.data.jumlah_pendapatan_lain_2 	= 0;		
		}

		if(this.data.sumber_pendapatan == 2){
			this.data.nama_perusahaan = "";
			this.data.mulai_bekerja = "";
			this.data.jabatan =	"";
			this.data.pekerjaan = "";
			this.data.gaji_per_bulan = 0;
			
			this.data.nama_usaha = "",
			this.data.tahun_perusahaan_berdiri = "";
			this.data.jenis_perusahaan = "";
			this.data.pendapatan_bersih_perusahaan = 0;

			// this.data.pengeluaran_per_bulan = 0;
			this.data.tlp_perusahaan = "";
		}

		if(this.data.sumber_pendapatan == 1) {
			this.data.nama_usaha = "",
			this.data.tahun_perusahaan_berdiri = "";
			this.data.jenis_perusahaan = "";
			this.data.pendapatan_bersih_perusahaan = 0;
		}

		if(this.data.sumber_pendapatan == 0) {
			this.data.nama_perusahaan = "";
			this.data.mulai_bekerja = "";
			this.data.jabatan =	"";
			this.data.pekerjaan = "";
			this.data.gaji_per_bulan = 0;
			this.data.tlp_perusahaan = "";
		}

		let value_date = jQuery("#mulai_bekerja").val();
		this.data.mulai_bekerja = value_date;

		let x : any = document.getElementById("foto_identitas");
		let y : any = document.getElementById("foto_npwp");
		let z : any = document.getElementById("foto_diri");
		let a : any = document.getElementById("foto_tabungan");
		
		
		var file_x =	x.files[0];
		var file_y =	y.files[0];
		var file_z =	z.files[0];
		var file_a =	a.files[0];

		var objectBlob	= new Uint8Array([1,2,3]);
		var arrayBlob	= objectBlob.buffer;
		var image_default = new Blob([arrayBlob]);

		if(file_x == undefined) {
			file_x = image_default;
		}if(file_y == undefined) {
			file_y = image_default;
		}if(file_z == undefined) {
			file_z = image_default;
		}if(file_a == undefined) {
			file_a = image_default;
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
										// console.log(this.data)
										this.updateProfile()	
									}
								}.bind(this);
							}
						}.bind(this);
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
	}

	// condition for get other_income_one data
	private pendapatanLainFirst:any;
	getPendapatanLainFirst(id){
		this.pendapatanLainFirst = id;
		this.data.pendapatan_lain_1 = id;
		// console.log(this.data.pendapatan_lain_1)
	}

	private pendapatanLainSecond:any;
	getPendapatanLainSecond(id){
		this.pendapatanLainSecond = id;
		this.data.pendapatan_lain_2 = id;
		// console.log(this.data.pendapatan_lain_2)
	}
}