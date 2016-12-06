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

		nama_lengkap 	 : 'Ari Fakhri Wilaga',
		alamat_email 	 : 'arifakhri97@gmail.com',
		no_handphone	 : '0897654357897',
		password	 	 : 'Handsome100',
		confirm_password : 'Handsome100',
		jenis_kelamin	 : '1',
		id_agama 		 : '1',
		tempat_lahir  	 : 'Bandung',
		tanggal_lahir 	 : '1997-06-02',
		alamat 			 : 'St. lorem ipsum',
		id_provinsi 	 : '9',
		id_kota 		 : '1',
		kode_pos 		 : '40552',
		id_status_rumah  : '1',
		luas_tanah 		 : '123',
		luas_bangunan 	 : '123',
		id_tipe_identitas: '1',
		nomor_identitas  : '1',
		id_status	 	 : '1',
		nomor_npwp 		 : '1234567',
		id_tipe_bank     : '1',
		nomor_rekening 	 : '1234567',
		telepon  	 	 : '1234567',

		// step2
		nama_lengkap_keluarga 	: 'Agus Ramdhani',
		hubungan_keluarga	 	: 'Ayah',
		alamat_keluarga	  		: 'St. lorem ipsum',
		nomor_telepon_keluarga 	: '123456',
		jumlah_anak 	  		: '0',
		jumlah_tanggungan 		: '1',

		// step3
		id_pekerjaan 	 	  : '3',
		nama_perusahaan 	  : 'Warung lontong',
		alamat_perusahaan	  : 'St. lorem ipsum',
		telepon_perusahaan 	  : '12345',
		jenis_usaha 		  : 'Warung',
		jabatan  	 		  : 'Pegawai',
		tanggal_mulai_kerja   : '2016-12-12',
		gaji_per_bulan 		  : '1234567',
		pendapatan_lain 	  : '1234567',
		pengeluaran_per_bulan : '1234567',
		sumber_dana 		  : '1',

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

