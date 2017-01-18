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
	constructor(private http: Http, private router : Router) { 

	// this.data.angsuran = [];
	}

	// Objek
	private image:void;
	private number:number;
	public data = {
		access_token		: null,
		// objek keluarga
		status_perkawinan	: 0,
		jumlah_anak 	  	: null,
		jumlah_tanggungan 	: null,

	  	sumber_pendapatan	: 0,
	  	

		// objek pekerjaan
		nama_perusahaan 	  : null,
		mulai_bekerja 	  	  : null,
		jabatan  	 		  : null,
		pekerjaan  	 		  : null,
		gaji_per_bulan 		  : null,
		
		nama_usaha 	  				: null,
		tahun_perusahaan_berdiri 	: null,
		jenis_perusahaan 		  	: null,
		pendapatan_bersih_perusahaan: null,

		pengeluaran_per_bulan 	: null,
		tlp_perusahaan			: null,

		// objek kontak kerabat
		nama_lengkap_keluarga 	: null,
		hubungan	 			: null,
		no_tlp	  				: null,
		pekerjaan_kerabat 		: null,
	  	
	  	// objek pendapatan lain 1
	  	
	  	pendapatan_lain_1			: 0,
		sumber_pendapatan_lain_1 	: null,
		jumlah_pendapatan_lain_1 	: null,
	  	
	  	// objek pendapatan lain 2
	  	pendapatan_lain_2	: 0,
		sumber_pendapatan_lain_2 	: null,
		jumlah_pendapatan_lain_2 	: null,
		// step4
		foto_identitas		: null,
		foto_npwp 		  	: null,
		foto_diri	 	  	: null,

		// objek data bank
		foto_tabungan		: null,
		bank				: 0,
		no_rekening			: null,

		angsuran : [],
		jaminan: []
	}

	
	ngOnInit(){
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy-mm-dd',
	      // startDate : '2015-01-01',
	      // minDate	: '01/01/2015'

	    });
	    // let date = jQuery("#mulai_bekerja").datepicker("setDate", new Date());
		
		// mask
		jQuery(function($){
			// mask keluarga
			// jQuery('#status_perkawinan').mask('000-000-000000');
			jQuery('#jumlah_anak').mask('00');
			jQuery('#jumlah_tanggungan').mask('000000000000');
			jQuery('#pengeluaran_per_bulan').mask('000000000000');
			jQuery('#sumber_pendapapatan').mask('000000000000');
			jQuery('.jumlah-angsuran').mask('000000000000');
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
		// dynamic data angsuran
		// var counter = 1;
		// jQuery("#addButton").click(function(){
		// 	if(counter > 5) {
		// 		alert("Only 5 textbox");
		// 		return false;
		// 	}


		// 	var newTextBoxDiv = jQuery(document.createElement('div'))
		// 	.attr("id",'TextBoxDiv' + counter).attr("class",'blockElement');

		// 	newTextBoxDiv.after().html(
		// 		'<label>Angsuran</label>' +
		// 		'<input type="text" placeholder="Jumlah Angsuran" class="form-control input-md jumlah-angsuran" name="textbox1' + counter + 
		// 		'" id="textbox1' + counter + '" value="">' +
		// 		'<input type="text" placeholder="Deskripsi Angsuran" class="form-control input-md description-angsuran" name="textbox2' + counter + 
		// 		'" id="textbox2' + counter + '" value="">'
		// 	);
		// 	newTextBoxDiv.appendTo("#TextBoxesGroup");
		// 	counter++;
		// 	console.log(counter)
		// });

		// jQuery("#removeButton").click(function(){
		// 	if(counter <= 1){
		// 		alert("No more textbove remove");
		// 		return false;
		// 	}	
		// 	counter--;
		// 	console.log(counter)
		// 	jQuery("#TextBoxDiv" + counter).remove();

		// });
		
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
			mulai_bekerja 	  	  : {
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
		  	pendapatanLainFirst			: {
				required :true
		  	},
			sumber_pendapatan_lain_1 	: {
				required :true
			},
			jumlah_pendapatan_lain_1 	: {
				required :true
			},

			// objek pendapatan lain 2
			pendapatanLainSecond		: {
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
		 	foto_tabungan 	: {
				required :true
			},
			no_rekening 	: {
				required :true
			},
			bank 	: {
				required :true
			},

			// Objek data collateral
			deskripsi_jaminan :  {
				required : true
			},
	        jenis_jaminan: {
	        	required : true
	        },
	        taksiran_harga_jaminan: {
	        	required : true 
	        },
	        foto_jaminan_satu: {
	        	required : true
	        },
	        foto_jaminan_dua: {
	        	required : true
	        },
	        foto_jaminan_tiga: {
	        	required : true
	        }

		  }
		});		
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
		if(id == 1) {
			this.data.nama_usaha 	  				= null;
			this.data.tahun_perusahaan_berdiri 		= null;
			this.data.jenis_perusahaan 		  		= null;
			this.data.pendapatan_bersih_perusahaan	= null;
			this.data.pengeluaran_per_bulan 		= null;
			this.data.tlp_perusahaan				= null;

		}

		else if(id == 2) {
			this.data.nama_perusahaan	= null;
			this.data.mulai_bekerja		= null;
			this.data.jabatan  	 		= null;
			this.data.pekerjaan  	 	= null;
			this.data.gaji_per_bulan 	= null;
			this.data.pengeluaran_per_bulan = null;
			this.data.tlp_perusahaan		= null;

		}
	}

	private pendapatanLainFirst:any;
	getPendapatanLainFirst(id){
		this.pendapatanLainFirst = id;
		if(id == 2) {
			console.log(id)
			this.data.pendapatan_lain_1 = 2;
			this.data.pendapatan_lain_2 = 2;

		}
		if(id == 1) {
			console.log(id)
			this.data.pendapatan_lain_1 = 1;
		}
		else{
		  	console.log(id)
		}
	}


	private pendapatanLainSecond:any;
	getPendapatanLainSecond(id){
		this.pendapatanLainSecond = id;
	  	if(id == 2) {
			this.data.pendapatan_lain_2 = 2;
		}
		else{
		  	console.log(id)
		}
	}
	private collateral:any;
	getCollateral(id){
		this.collateral = id;
	 //  	if(id == 2) {
		// 	this.data.jaminan = 2;
		// }
		// else{
		//   	// console.log(id)
		// }
	}

	private classPersonal 	= "";
	private classFamily 	= "";
	private classJob 		= "";
	private classCollateral = "";
	private classSupport 	= "";

	tabPersonal(id : any){
		if(id == 1) {
			this.classPersonal 	 = "active";
			this.classFamily 	 = "";
			this.classJob 		 = "";
			this.classCollateral = "";
			this.classSupport 	 = "";
		}
	}

	tabFamily(id : any){
		if(id == 1) {
			this.classPersonal 	 = "";
			this.classFamily 	 = "active";
			this.classJob 		 = "";
			this.classCollateral = "";
			this.classSupport 	 = "";
		}
	}

	tabJob(id : any){
		if(id == 1) {
			this.classPersonal 	 = "";
			this.classFamily 	 = "";
			this.classJob 		 = "active";
			this.classCollateral = "";
			this.classSupport 	 = "";
		}
	}

	tabCollateral(id : any){
		if(id == 1) {
			this.classPersonal 	 = "";
			this.classFamily 	 = "";
			this.classJob 		 = "";
			this.classCollateral = "active";
			this.classSupport 	 = "";
		}
	}

	tabSupport(id : any){
		if(id == 1) {
			this.classPersonal 	 = "";
			this.classFamily 	 = "";
			this.classJob 		 = "";
			this.classCollateral = "";
			this.classSupport 	 = "active";
		}
	}

	submitCollateral(){
		// get value data angsuran
		let jaminan = [];
		jQuery(".blockElement").each(function(){
				// angsuran.push({
				// 	jumlah_angsuran : jQuery(".jumlah-angsuran").find('input[type=text],select'),
				// 	description_angsuran : jQuery(".description-angsuran").val().find('input[type=text],select')
				// })
				jaminan.push({
					deskripsi_jaminan	: jQuery(this).find('.deskripsi-jaminan').val() ,
	        jenis_jaminan			: jQuery(this).find('.jenis-jaminan').val(),
	        taksiran_harga_jaminan: jQuery(this).find('.taksiran-harga-jaminan').val(),
	        // foto_jaminan_satu	: jQuery(this).find('.jumlah-angsuran').val(),
	        // foto_jaminan_dua	: jQuery(this).find('.jumlah-angsuran').val(),
	        // foto_jaminan_tiga	: jQuery(this).find('.jumlah-angsuran').val(), 
				})
		})
			this.data.jaminan = jaminan
			console.log(jaminan)
	}

	// addCollateral(){
	// 	var counterdua = 1;
	// 	jQuery("#addCollateral").click(function(){
	// 		console.log("mantap")
	// 		if(counterdua > 5) {
	// 			alert("Only 5 textbox");
	// 			return false;
	// 		}


	// 		var newTextBoxDivCollateral = jQuery(document.createElement('div'))
	// 		.attr("id",'TextBoxCollateralDiv' + counterdua).attr("class",'blockElementCollateral');

	// 		newTextBoxDivCollateral.after().html(
	// 			'<div class="form-group">' +
	// 			'<div class="col-md-12">' +
	// 			 '<label>Foto Jaminan Satu</label>' +
	// 			  '<input type="file" name="foto_jaminan_satu' + counterdua + '" id="foto_jaminan_satu' + counterdua + '>' +
	// 			'</div>' +
	// 			'<div class="col-md-12">' +
	// 			 '<label>Foto Jaminan Dua</label>' +
	// 			  '<input type="file" name="foto_jaminan_dua' + counterdua + '" id="foto_jaminan_dua' + counterdua + '>' +
	// 			 '</div>' +
	// 			'<div class="col-md-12">' +
	// 			 // '<span class="required">*</span>' +
	// 			 // '<span class="required">*</span>' +
	// 			 // '<span class="required">*</span>' +
	// 			 '<label>Foto Jaminan Tiga</label>' +
	// 			  '<input type="file" name="foto_jaminan_tiga' + counterdua + '" id="foto_jaminan_tiga' + counterdua + '>' +
	// 			 '</div>' +
	// 			'</div>'+
	// 			'<div class="form-group">' +
	// 			 '<div class="col-xs-7">'+
	// 				'<input type="text" placeholder="Taksiran Harga Jaminan" class="form-control input-md taksiran-harga-jaminan" name="textboxjaminan1' + counterdua + 
	// 				'" id="textboxjaminan1' + counterdua + '" value="">' +
	// 			 '</div>' +
	// 			 '<div class="col-xs-5">'+
	// 				'<input type="text" placeholder="Jenis Jaminan" class="form-control input-md jenis-jaminan" name="textboxjaminan2' + counterdua + 
	// 				'" id="textboxjaminan2' + counterdua + '" value="">' +
	// 			'</div>' +
	// 			 '<div class="col-xs-12">'+
	// 				'<textarea type="text" placeholder="Deskripsi Jaminan" class="form-control input-md deskripsi-jaminan" name="textboxjaminan3' + counterdua + 
	// 				'" id="textboxjaminan3' + counterdua + '" value=""></textarea>' +
	// 			 '</div>' + 
	// 			'</div>'
	// 		);
	// 		newTextBoxDivCollateral.appendTo("#TextBoxesGroupCollateral");
	// 		counterdua++;
	// 		console.log(counterdua)
	// 	});

	// 	// jQuery("#removeCollateral").click(function(){
	// 	// 	if(counterdua <= 1){
	// 	// 		alert("No more textbove remove");
	// 	// 		return false;
	// 	// 	}	
	// 	// 	counterdua--;
	// 	// 	jQuery("#TextBoxCollateralDiv" + counterdua).remove();

	// 	// });
	// 	// });
	// }

	submitData(data){
		if(data) {
		// if(jQuery("#complementForm").valid()) {

			// get value mulai_bekerja
			let value_date = jQuery("#mulai_bekerja").val();
			this.data.mulai_bekerja = value_date;
		
			// get value access_token
			let acces_token = JSON.parse(localStorage.getItem("access_token"));
			this.data.access_token = acces_token;
		    var angsuran = [];

			// set value data angsuran if null
			var check = document.getElementById("TextBoxDiv1");
			if(check == null) {
				angsuran.push({
					jumlah_angsuran : "",
					description_angsuran : "",
				})
			}

		    // get value data angsuran
			jQuery(".blockElement").each(function(){
					// angsuran.push({
					// 	jumlah_angsuran : jQuery(".jumlah-angsuran").find('input[type=text],select'),
					// 	description_angsuran : jQuery(".description-angsuran").val().find('input[type=text],select')
					// })
					angsuran.push({		
						// jumlah_angsuran : jQuery(this).find('.jumlah-angsuran').val(),
						// description_angsuran : jQuery(this).find('.description-angsuran').val()
					})
			})
			this.data.angsuran = angsuran;
			
			console.log(this.data); // end get angsuran
			
			let readerFileA = new FileReader();
			readerFileA.onload = function(event, varty) {
				let fileA = event.target.result.split(',')[1];
				this.data.foto_tabungan = fileA;
			}.bind(this)

			let readerFileX = new FileReader();
			readerFileX.onload = function(event, varty) {
				let fileX = event.target.result.split(',')[1];
				this.data.foto_identitas = fileX;
			}.bind(this)

			let readerFileY = new FileReader();
			readerFileY.onload = function(event, varty) {
				let fileY = event.target.result.split(',')[1];
				this.data.foto_npwp = fileY;
			}.bind(this)

			let readerFileZ = new FileReader();
			readerFileZ.onload = function(event, varty) {
			let fileZ = event.target.result.split(',')[1];
			this.data.foto_diri = fileZ;

			// console.log("foto_diri",this.data.foto_diri)
			// console.log("foto_npwp",this.data.foto_npwp)
			// console.log("foto_tabungan",this.data.foto_tabungan)
			// console.log("foto_identitas",this.data.foto_identitas)
			console.log("Sedang mengirim data....")
			let headers = new Headers({ 
			 	'Content-Type': 'application/json',
			 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
		 	});

		    let options = new RequestOptions({ headers: headers });


			// console.log(this.data)
			this.http.post('http://masscredit-api.stagingapps.net/user/credential/status-verification',this.data,options)
					.map(response => response.json())
					.subscribe(
						(response : any) => {
							var code = response.meta.code;
							console.log(response);
							if(code == 200) {
								alert("Terimakasih telah melengkapi data anda")
								return this.router.navigateByUrl('/dashboard')
							}
							else{
								alert("Gagal melengkapi data")
								return this.router.navigateByUrl('/dashboard')
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

			let a : any = document.getElementById("foto_tabungan")
			let x : any = document.getElementById("foto_identitas")
			let y : any = document.getElementById("foto_npwp")
			let z : any = document.getElementById("foto_diri")
			
			var file_a =	a.files[0]
			var file_x =	x.files[0]
			var file_y =	y.files[0]
			var file_z =	z.files[0]

			var encode_a  = readerFileA.readAsDataURL(file_a)
			var encode_x  = readerFileX.readAsDataURL(file_x)
			var encode_y  = readerFileY.readAsDataURL(file_y)
			var encode_z  = readerFileZ.readAsDataURL(file_z)

			this.data.foto_tabungan		= encode_a
			this.data.foto_identitas	= encode_x
			this.data.foto_npwp 		= encode_y
			this.data.foto_diri			= encode_z
			
		}
		else{
			alert("Data tidak valid")	
		}
	}

}