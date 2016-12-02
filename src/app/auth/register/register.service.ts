import { Injectable }		from '@angular/core';
import { Headers, Http }	from '@angular/http';
import { Observable }     	from 'rxjs/Observable';
import { Router }			from '@angular/router';
import { JqueryService }	from'./jquery.register';

declare var jQuery:any;

@Injectable ()
export class RegisterService {
	private headers  	= new Headers ({'Content-Type' : 'application/json'}); //URL to web API
	private loggedinUrl = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/register'; //URL API REGISTER

	constructor(private jqueryService : JqueryService) { }

	public register = {
		nama_lengkap 	 : '',
		alamat_email 	 : '',
		no_handphone	 : '',
		password	 	 : '',
		confirm_password : '',
		jenis_kelamin	 : '',
		agama 		  	 : '',
		tempat_lahir  	 : '',
		tanggal_lahir 	 : '',
		alamat 			 : '',
		provinsi 		 : '',
		kota 			 : '',
		kode_pos 		 : '',
		status_rumah 	 : '',
		luas_tanah 		 : '',
		luas_bangunan 	 : '',
		tipe_identitas 	 : '',
		nomor_identitas  : '',
		status			 : '',
		nomor_npwp 		 : '',
		tipe_bank 		 : '',
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
		pekerjaan 	 		  : '',
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
		foto_ktp_depan 	  : '',
		foto_ktp_belakang : '',
		foto_diri	 	  : '',
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

