import { Injectable }				from '@angular/core';
import { Step1RegisterComponent }	from './register1.component';

@Injectable ()
export class LoginService {
	// private headers  	= new Headers ({'Content-Type' : 'application/json'}); //URL to web API
	// private loggedinUrl = 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/login'; //URL API LOGIN
	// private logoutUrl	= 'https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/logout';
	constructor (private  Step1Register : Step1RegisterComponent) { }
	
	// loggedin(email,password) : Observable<any> {
	// 	let user = { email: email, password: password };
	// 	return this.http.post(this.loggedinUrl, user, this.headers);
	// }
private registerOne = {
		nama_lengkap 	 : 'Jajang Permana',
		alamat_email 	 : 'jajang_jangkung@gmail.com',
		password	 	 : 'Handsome',
		confirm_password : 'Handsome',
		jenis_kelamin	 : 'Laki-laki',
		agama 		  	 : 'Islam',
		tempat_lahir  	 : 'Tasikmalaya',
		tanggal_lahir 	 : '02/06/1997',
		alamat 			 : 'St. Lorem ipsum',
		provinsi 		 : 'Jawa Barat',
		kota 			 : 'Bandung',
		kode_pos 		 : '40552',
		status_rumah 	 : 'Ikut Orang Tua',
		luas_tanah 		 : '500',
		luas_bangunan 	 : '500',
		identitas 		 : 'KTP',
		nomor_identitas  : '3217060206970001',
		status			 : 'Belum Kawin',
		npwp 			 : '123456789',
		bank 			 : 'BCA',
		nomor_rekening 	 : '123456789',
		nomor_telepon  	 : '123456789'
	}

	nextStepTwo(registerOne) {
		if(this.registerOne) {		
			console.log('ini dari register1 => lanjutkan yaa', this.registerOne);
			this.registerService.Step2();
			// jQuery('#step-1').hide();
			// jQuery('#step-2').show();
			
		}
		else{
			console.log('data gagal disimpan');
		}
	}
	public logout() {
		var token = localStorage.getItem("access_token");
		return this.http
		.post('https://private-f1c97-masscredit.apiary-mock.com/mobile/user/credential/logout',token)
		.subscribe((data: any) => {
			var token = data.json();
			console.log(token.meta.code,token.meta.message);
			if(token.meta.code == "200") {
				localStorage.removeItem("access_token");
				// this.isloggedin = true;
				return this.router.navigateByUrl('/');
			}
			else{
				return this.router.navigateByUrl('dashboard')
		}
		});
	}

}

