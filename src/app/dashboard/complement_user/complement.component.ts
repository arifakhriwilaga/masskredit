import { Component } 		from '@angular/core';
import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router }        					   from '@angular/router';

// import { IndexService }	from './index.service';
declare var jQuery:any;
@Component({
	//moduleId: module.id,
	selector: 'complement',
	templateUrl: 'complement.component.html'
})


export class ComplementComponent { 
	constructor(private http: Http, private router : Router) { }
// 

	ngOnInit(){
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
		// validation
		jQuery( "#complementForm" ).validate({
		  rules: {
  			// objek keluarga
			status_perkawinan	: {
				required :true
			},
			jumlah_anak 	  	: {
				required :true
			},
			jumlah_tanggungan 	: {
				required :true
			},
			pengeluaran_per_bulan: {
				required :true
			},
		  	sumber_pendapatan	: {
				required :true
		  	},
		  	
			// objek pekerjaan
			nama_perusahaan 	  : {
				required :true	
			},
			lama_bekerja 	  	  : {
				required :true
			},
			jabatan  	 		  : {
				required :true
			},
			pekerjaan  	 		  : {
				required :true
			},
			gaji_per_bulan 		  : {
				required :true
			},
			
			nama_usaha 	  				: {
				required :true
			},
			tahun_perusahaan_berdiri 	: {
				required :true
			},
			jenis_perusahaan 		  	: {
				required :true
			},
			pendapatan_bersih_perusahaan: {
				required :true
			},

			tlp_perusahaan			: {
				required :true
			},

			// objek kontak kerabat
			nama_lengkap_keluarga 	: {
				required :true
			},
			hubungan	 			: {
				required :true
			},
			no_tlp	  				: {
				required :true
			},
			pekerjaan_kerabat 		: {
				required :true
			},
		  	
		  	// objek pendapatan lain 1
		  	pendapatan_lain_1			: {
				required :true
		  	},
			sumber_pendapatan_lain_1 	: {
				required :true
			},
			jumlah_pendapatan_lain_1 	: {
				required :true
			},

			// objek pendapatan lain 2
			pendapatan_lain_2			: {
				required :true
		  	},
			sumber_pendapatan_lain_2 	: {
				required :true
			},
			jumlah_pendapatan_lain_2 	: {
				required :true
			},
	
			// objek penunjang
			foto_identitas		: {
				required :true
			},
			foto_npwp 		  	: {
				required :true
			},
			foto_diri	 	  	: {
				required :true
			},
	
		 	// Objek data bank
		 // 	foto_tabungan 	: {
			// 	required :true
			// },
			// no_rekening 	: {
			// 	required :true
			// },
		  	
		  	// objek pendapatan lain 2
		  	// pendapatan_lain_2	: 0,
			// step4
		  }
		});
			
	}

	private image:void;
	private number:number;
	public data = {
		access_token		:'',
		// objek keluarga
		status_perkawinan	: 0,
		jumlah_anak 	  	: this.number,
		jumlah_tanggungan 	: this.number,

	  	sumber_pendapatan	: 0,
	  	

		// objek pekerjaan
		nama_perusahaan 	  : '',
		lama_bekerja 	  	  : '',
		jabatan  	 		  : '',
		pekerjaan  	 		  : '',
		gaji_per_bulan 		  : this.number,
		
		nama_usaha 	  				: '',
		tahun_perusahaan_berdiri 	: '',
		jenis_perusahaan 		  	: '',
		pendapatan_bersih_perusahaan: this.number,

		pengeluaran_per_bulan 	: this.number,
		tlp_perusahaan			: '',

		// objek kontak kerabat
		nama_lengkap_keluarga 	: '',
		hubungan	 			: '',
		no_tlp	  				: '',
		pekerjaan_kerabat 		: '',
	  	
	  	// objek pendapatan lain 1
	  	
	  	pendapatan_lain_1			: 0,
		sumber_pendapatan_lain_1 	: '',
		jumlah_pendapatan_lain_1 	: this.number,
	  	
	  	// objek pendapatan lain 2
	  	pendapatan_lain_2	: 0,
		sumber_pendapatan_lain_2 	: '',
		jumlah_pendapatan_lain_2 	: this.number,
		// step4
		foto_identitas		: this.image,
		foto_npwp 		  	: this.image,
		foto_diri	 	  	: this.image,

		// objek data bank
		foto_tabungan		: this.image,
		no_rekening			: ''
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
			this.data.pendapatan_bersih_perusahaan = null;
			
		}
		if(id == 1) {
			console.log(id)
			this.data.gaji_per_bulan = null;
			this.data.pendapatan_bersih_perusahaan = 0;
		}
	}

	private pendapatanLainFirst:any;
	getPendapatanLainFirst(id){
		this.pendapatanLainFirst = id;
		if(id == 2) {
			console.log(id)
			this.data.pendapatan_lain_1 = 0;
		}
		else{
		  	console.log(id)
		}
	}


	private pendapatanLainSecond:any;
	getPendapatanLainSecond(id){
		this.pendapatanLainSecond = id;
	  	if(id == 2) {
			this.data.pendapatan_lain_2 = 0;
		}
		else{
		  	console.log(id)
		}
	}


	submitData(data){
		if(jQuery("#complementForm").valid()) {	
			let acces_token = JSON.parse(localStorage.getItem("access_token"));
			this.data.access_token = acces_token;
			console.log(this.data);

			let readerFileA = new FileReader();
			readerFileA.onload = function(event, varty) {
				let fileA = event.target.result.split(',')[1];
				this.data.foto_tabungan = fileA;
				
				// console.log(fileB)
			}.bind(this)

			let readerFileX = new FileReader();
	  		
			readerFileX.onload = function(event, varty) {
				let fileX = event.target.result.split(',')[1];
				this.data.foto_identitas = fileX;
				// console.log(fileA);
			}.bind(this);

			let readerFileY = new FileReader();
			readerFileY.onload = function(event, varty) {
				let fileY = event.target.result.split(',')[1];
				this.data.foto_npwp = fileY;
				
				// console.log(fileB)
			}.bind(this)

			let readerFileZ = new FileReader();
			readerFileZ.onload = function(event, varty) {
				let fileZ = event.target.result.split(',')[1];
				this.data.foto_diri = fileZ;

				console.log(this.data)
				console.log("Sedang mengirim data....")
				let headers = new Headers({ 
				 	'Content-Type': 'application/json',
				 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
			 	});

			    let options = new RequestOptions({ headers: headers });

				this.http.post('http://masscredit-api.stagingapps.net/user/credential/status-verification',this.data,options)
						.map(response => response.json())
						.subscribe(
							(response : any) => {
								var code = response.meta.code;
								console.log(response);
								if(code == 200) {
									alert("Terimakasih telah melengkapi data anda")
										return this.router.navigateByUrl('dashboard')
								}
								else{
									alert("Gagal melengkapi data")
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

		

			}.bind(this);



			let a : any = document.getElementById("foto_tabungan");
			let x : any = document.getElementById("foto_identitas");
			let y : any = document.getElementById("foto_npwp");
			let z : any = document.getElementById("foto_diri");
			
			var file_a =	a.files[0];
			var file_x =	x.files[0];
			var file_y =	y.files[0];
			var file_z =	z.files[0];

			// debugger
			
			var encode_a  = readerFileA.readAsDataURL(file_a);
			var encode_x  = readerFileX.readAsDataURL(file_x);
			var encode_y  = readerFileY.readAsDataURL(file_y);
			var encode_z  = readerFileZ.readAsDataURL(file_z);
			this.data.foto_tabungan		= encode_a;
			this.data.foto_identitas	= encode_x;
			this.data.foto_npwp 		= encode_y;
			this.data.foto_diri			= encode_z;



		}
		else{
			alert("Data tidak valid")	
		}
	}

}