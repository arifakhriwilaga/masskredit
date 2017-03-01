import { Component, OnInit } 	from '@angular/core';
import { ProfileComponent }	from './../profile.component';

import { Headers, Http, RequestOptions }	   from '@angular/http';
import { Router }        					   from '@angular/router';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'collateral',
	templateUrl: 'collateral.component.html'
})

export class CollateralComponent{ 

	constructor(
		private profileComponent:ProfileComponent, 
		private router : Router, 
		private http: Http
	) { }

	ngOnInit(){ 
		this.getDataCollateral();
		this.getDataCollateralType();
		jQuery('#collateral_estimate_price').mask('000000000000');
	}

	public token =  JSON.parse(localStorage.getItem("access_token"))
	// object add collateral
	public data = {
		access_token : this.token,
		// objek jaminan
		collateral_description: null,
		collateral_type : 0,
		collateral_estimate_price: null,
		// collateral_image_one 	: null,
		// collateral_image_two 	: null,
		// collateral_image_three: null,
	}

	// object remove collateral
	public dataRemove = {
		access_token : this.token,
		collateral_id : null
	}

	// object detail collateral
	public dataDetail = {
		access_token : this.token,
		collateral_id : null
	}

	public access_token = {
		access_token : this.token,
		page : 1,
		limit : 10
	}
	public collateral = [];
	public counter = 1;
	public formCollateral = 0;

	submitCollateral(data){
		// console.log();
		if(data.collateral_type == 0) {
			alert("Silahkan pilih tipe jaminan")
		}else{
			this.encodeImages()
		}
	}

	addCollateral(){
		var counterdua = this.counter;


			var newTextBoxDivCollateral = jQuery(document.createElement('div'))
			.attr("id",'TextBoxCollateralDiv' + counterdua).attr("class",'blockElementCollateral');

			newTextBoxDivCollateral.after().html(
				'<div class="form-group">' +
				'<div class="col-md-12">' +
				 '<label>Foto Jaminan Satu</label>' +
				  '<input type="file" name="foto_jaminan_satu' + counterdua + '" id="foto_jaminan_satu' + counterdua + '>' +
				'</div>' +
				'<div class="col-md-12">' +
				 '<label>Foto Jaminan Dua</label>' +
				  '<input type="file" name="foto_jaminan_dua' + counterdua + '" id="foto_jaminan_dua' + counterdua + '>' +
				 '</div>' +
				'<div class="col-md-12">' +
				 // '<span class="required">*</span>' +
				 // '<span class="required">*</span>' +
				 // '<span class="required">*</span>' +
				 '<label>Foto Jaminan Tiga</label>' +
				  '<input type="file" name="foto_jaminan_tiga' + counterdua + '" id="foto_jaminan_tiga' + counterdua + '>' +
				 '</div>' +
				'</div>'+
				'<div class="form-group">' +
				'</div>'+
				'<div class="form-group">' +
				 '<div class="col-xs-7">'+
					'<input type="text" placeholder="Taksiran Harga Jaminan" class="form-control input-md taksiran-harga-jaminan" name="textboxjaminan1' + counterdua + 
					'" id="textboxjaminan1' + counterdua + '" value="">' +
				 '</div>' +
				 '<div class="col-xs-5">'+
					'<input type="text" placeholder="Jenis Jaminan" class="form-control input-md jenis-jaminan" name="textboxjaminan2' + counterdua + 
					'" id="textboxjaminan2' + counterdua + '" value="">' +
				'</div>' +
				 '<div class="col-xs-12">'+
					'<textarea type="text" placeholder="Deskripsi Jaminan" class="form-control input-md deskripsi-jaminan" name="textboxjaminan3' + counterdua + 
					'" id="textboxjaminan3' + counterdua + '" value=""></textarea>' +
				 '</div>' + 
				'</div>'
			);
			newTextBoxDivCollateral.appendTo("#TextBoxesGroupCollateral");
			counterdua++;
			// console.log(counterdua)
	}

	encodeImage(file){
		let readerFile = new FileReader();
		readerFile.readAsDataURL(file);
		return readerFile;
	}


	encodeImages(){
		let a : any = document.getElementById("collateral_image_one");
		let x : any = document.getElementById("collateral_image_two");
		let y : any = document.getElementById("collateral_image_three");
		
		var file_a =	a.files[0];
		var file_x =	x.files[0];
		var file_y =	y.files[0];

		var objectBlob	= new Uint8Array([1,2,3]);
		var arrayBlob	= objectBlob.buffer;
		var image_default = new Blob([arrayBlob]);

		if(file_a == undefined) {
			file_a = image_default;
		}
		if(file_x == undefined) {
			file_x = image_default;
		}
		if(file_y == undefined) {
			file_y = image_default;
		}

		this.encodeImage(file_a).onload = function(event, varty){
			try{
				let image = event.target.result.split(',')[1];
				
				if(image == "AQID") {
					this.data.collateral_file_one = null
				}

				if(image != "AQID") {
				 this.data.collateral_file_one = image;
				}
			}finally{
				this.encodeImage(file_x).onload = function(event, varty){
					try{
						let image = event.target.result.split(',')[1];
						
						if(image == "AQID") {
							this.data.collateral_file_two = null
						}

						if(image != "AQID") {
						 this.data.collateral_file_two = image;
						}
					}finally{
						this.encodeImage(file_y).onload = function(event, varty){
							try{
								let image = event.target.result.split(',')[1];
								
								if(image == "AQID") {
									this.data.collateral_file_three = null
								}

								if(image != "AQID") {
								 this.data.collateral_file_three = image;
								}
							}finally{
								// console.log(this.data)
								this.sendDataCollateral();
							}
						}.bind(this);
					}
				}.bind(this);
			}
		}.bind(this);
	}

	sendDataCollateral(){
		let headers = new Headers({ 
			 	'Content-Type': 'application/json',
			 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
		 	});

		    let options = new RequestOptions({ headers: headers });


			// console.log(this.data)
			this.http.post('https://masscredit-api.stagingapps.net/user/collateral/add',this.data,options)
					.map(response => response.json())
					.subscribe(
						(response : any) => {
							var code = response.meta.code;
							// console.log(response);
							if(code == 200) {
								alert("Jaminan berhasil ditambahkan, harap menunggu konfirmasi")
								this.formCollateral = 0;
								return this.router.navigateByUrl('/dashboard')
								// this.getDataCollateral()
								
							}
							else{
								alert("Gagal menambahkan data")
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
							if(message == "Add Collateral tidak dapat dilakukan, masih dalam proses persetujuan.") {
								alert("Perubahan collateral yang sebelumnya, masih dalam proses persetujuan.")
								// return this.router.navigateByUrl('/dashboard/sign-out')
								
							}	
						
						}
					);
	}

	showFormCollateral(){
		this.formCollateral = 1;
	}

	cancelCollateral(){
		this.formCollateral = 0;
		this.data.collateral_description = null;
		this.data.collateral_type = null;
		this.data.collateral_estimate_price = null;
		
	}

	getDetailCollateral(id){
		// console.log(id)
		// jQuery('#myModal').modal('show') 
	}

	removeCollateral(id){
		this.dataRemove.collateral_id = id;

		let headers = new Headers({ 
			 	'Content-Type': 'application/json',
			 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
		 	});

		let options = new RequestOptions({ headers: headers });


			// console.log(this.data)
			this.http.post('https://masscredit-api.stagingapps.net/user/collateral/delete',this.dataRemove,options)
					.map(response => response.json())
					.subscribe(
						(response : any) => {
							var code = response.meta.code;
							// console.log(response);
							if(code == 200) {
								alert("List Jaminan berhasil dihapus, harap menunggu konfirmasi")
								return this.router.navigateByUrl('/dashboard')
								// this.getDataCollateral()
							}
							else{
								alert("Gagal menambahkan data")
								// return this.router.navigateByUrl('/dashboard')
							}
						},
						(err:any) => {
							var error   = JSON.parse(err._body)
							var message = error.meta.message
							if(message == "unauthorized") {
								alert("Maaf session anda telah habis silahkan login kembali")
								return this.router.navigateByUrl('/dashboard/sign-out')
							}	
							if(message == "Delete collateral tidak dapat dilakukan, masih dalam proses persetujuan.") {
								alert("Perubahan collateral yang sebelumnya, masih dalam proses persetujuan.")
								// return this.router.navigateByUrl('/dashboard/sign-out')
								
							}	
						
						}
					);
	}

	getDataCollateral(){
		let headers = new Headers({ 
			 	'Content-Type': 'application/json',
			 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
		 	});

		let options = new RequestOptions({ headers: headers });
		// console.log(this.data)
		this.http.post('https://masscredit-api.stagingapps.net/user/collateral/get-list',this.access_token,options)
				.map(response => response.json())
				.subscribe(
					(response : any) => {
						var code = response.meta.code;
						if(code == 200) {
							this.collateral = response.data.collateral;
							for(let i = 0; i < this.collateral.length; i++){
								let dataEstimate = this.collateral[i]
								let estimate = dataEstimate['collateral_estimate_price'];

								var url_default = "assets/img/default_image.jpg";
								if(dataEstimate['collateral_file_one'] == '') {
									dataEstimate['collateral_file_one'] = url_default;
								
								}if(dataEstimate['collateral_file_two'] == '') {
									dataEstimate['collateral_file_two'] = url_default;
								}
								if(dataEstimate['collateral_file_three'] == '') {
									dataEstimate['collateral_file_three'] = url_default;
								}		

								// condition make delimiter
								var _minus = false;
								var b:any = estimate.toString();
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
										// console.log(c)
									} else {
										c = b.substr(i-1,1) + c;
									}
								}
								if (_minus) c = "-" + c ;
								let idr = "Rp.";
								dataEstimate['collateral_estimate_price'] = idr.concat(c);
								// this.collateral = 1;
								}
						}
						else{
							alert("Gagal menambahkan data")
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
	getCollateralType(id){
		this.data.collateral_type = id;
		// console.log(id)
	}

	public dataCollateralType = [];
	getDataCollateralType(){
		let headers = new Headers({ 
			 	'Content-Type': 'application/json',
			 	'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
		 	});

		let options = new RequestOptions({ headers: headers });
		// console.log(this.data)
		this.http.get('https://masscredit-api.stagingapps.net//master/collateral-type',options)
				.map(response => response.json())
				.subscribe(
					(response : any) => {						
						// console.log(response)
						var code = response.meta.code;
						if(code == 200) {
							this.dataCollateralType = response.data.collateral_type;
						}
						else{
							alert("Gagal menambahkan data");
						}
					}
				);
	}


}