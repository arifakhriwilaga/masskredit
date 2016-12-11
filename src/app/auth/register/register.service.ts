import { Injectable }		from '@angular/core';
import { Headers, Http }	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';
import { Router }			from '@angular/router';
import { JqueryService }	from'./jquery.register';

declare var jQuery:any;
// declare var image : void;

@Injectable ()
export class RegisterService {
	private headers  	= new Headers ({'Content-Type' : 'application/json'}); //URL to web API
	private loggedinUrl = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/register'; //URL API REGISTER

	constructor(private jqueryService : JqueryService) { }

	private image:any;

	public register = {
		access_token	 : '',

		nama_lengkap 	 : '',
		alamat_email 	 : '',
		no_handphone	 : '',
		password	 	 : '',
		confirm_password : '',
		jenis_kelamin	 : '0',
		id_agama 		 : '0',
		tempat_lahir  	 : '',
		tanggal_lahir 	 : '',
		alamat 			 : '',
		id_provinsi 	 : '0',
		id_kota 		 : '0',
		kode_pos 		 : '',
		id_status_rumah  : '0',
		luas_tanah 		 : '',
		luas_bangunan 	 : '',
		id_tipe_identitas: '0',
		nomor_identitas  : '',
		id_status	 	 : '0',
		nomor_npwp 		 : '',
		id_tipe_bank     : '0',
		nomor_rekening 	 : '',
		telepon  	 	 : '',

		// step2
		nama_lengkap_keluarga 	: '',
		hubungan_keluarga	 	: '',
		alamat_keluarga	  		: '',
		nomor_telepon_keluarga 	: '',
		jumlah_anak 	  		: '',
		jumlah_tanggungan 		: '',

		// step3
		id_pekerjaan 	 	  : '0',
		nama_perusahaan 	  : '',
		alamat_perusahaan	  : '',
		telepon_perusahaan 	  : '',
		jenis_usaha 		  : '',
		jabatan  	 		  : '',
		tanggal_mulai_kerja   : '',
		gaji_per_bulan 		  : '',
		pendapatan_lain 	  : '',
		pengeluaran_per_bulan : '',
		sumber_dana 		  : '',

		// step4
		foto_ktp_depan 	  : this.image,
		foto_ktp_belakang : this.image,
		foto_diri	 	  : this.image,
	}

	dataRegister(){
		return this.register;
	}

	Step1(){
		this.jqueryService.showStep1();
	}

	Step2(){
		this.jqueryService.showStep2();
	}

	Step3(){
		this.jqueryService.showStep3();
	}

	Step4(){
		this.jqueryService.showStep4();
	}
}

