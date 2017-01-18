import { Component, OnInit } 	from '@angular/core';
import { ComplementComponent }	from './../complement.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'collateral',
	templateUrl: 'collateral.component.html'
})

export class CollateralComponent{ 

	constructor(private complement:ComplementComponent) {
	// initial objek in complement data
	// this.data = this.complement.data;
	}

	ngOnInit(){ }

	public data = {
		access_token : null,
		// objek jaminan
		deskripsi_jaminan	: null,
		taksiran_harga_jaminan : null,
		foto_jaminan_satu 	: null,
		foto_jaminan_dua 		: null,
		foto_jaminan_tiga 	: null,
	}
	public counter = 1;

	submitCollateral(data){
		this.encodeImages()

		// var check = document.getElementById("TextBoxCollateralDiv");
		// 	if(check == null) {

		// 		// jaminan.push({
		// 		// 	jumlah_angsuran : "",
		// 		// 	description_angsuran : "",
		// 		// })
		// 		// this.addCollateral()
		// 		return false;
		// 	}else{


		// 		// get value data angsuran
		// 		// jQuery(".blockElementCollateral").each(function(){
		// 		// 		// angsuran.push({
		// 		// 		// 	jumlah_angsuran : jQuery(".jumlah-angsuran").find('input[type=text],select'),
		// 		// 		// 	description_angsuran : jQuery(".description-angsuran").val().find('input[type=text],select')
		// 		// 		// })
		// 		// 		jaminan.push({
		// 		// 			deskripsi_jaminan	: jQuery(this).find('.deskripsi-jaminan').val() ,
		// 	 //        jenis_jaminan			: jQuery(this).find('.jenis-jaminan').val(),
		// 		// 	    taksiran_harga_jaminan: jQuery(this).find('.taksiran-harga-jaminan').val(),
		// 	 //        foto_jaminan_satu	: jQuery(this).find('.foto-jaminan-satu').val(),
		// 	 //        foto_jaminan_dua	: jQuery(this).find('.foto-jaminan-dua').val(),
		// 	 //        foto_jaminan_tiga	: jQuery(this).find('.foto-jaminan-tiga').val(), 
		// 		// 		})
		// 		// })
		// 		console.log(jaminan)
		// 		// this.addCollateral()
		// 			// this.data.jaminan = jaminan
		// 	}	
			// console.log(check)
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
			console.log(counterdua)
		// jQuery("#addCollateral").click(function(){
		// 	console.log("mantap")
		// 	if(counterdua > 5) {
		// 		alert("Only 5 textbox");
		// 		return false;
		// 	}
		// });

		// jQuery("#removeCollateral").click(function(){
		// 	if(counterdua <= 1){
		// 		alert("No more textbove remove");
		// 		return false;
		// 	}	
		// 	counterdua--;
		// 	jQuery("#TextBoxCollateralDiv" + counterdua).remove();

		// });
		// });
	}

	encodeImage(file){
		let readerFile = new FileReader();
		readerFile.readAsDataURL(file);
		return readerFile;
	}


	encodeImages(){
		let a : any = document.getElementById("foto_jaminan_satu");
		let x : any = document.getElementById("foto_jaminan_dua");
		let y : any = document.getElementById("foto_jaminan_tiga");
		
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
					this.data.foto_jaminan_satu = null
				}

				if(image != "AQID") {
				 this.data.foto_jaminan_satu = image;
				}
			}finally{
				this.encodeImage(file_x).onload = function(event, varty){
					try{
						let image = event.target.result.split(',')[1];
						
						if(image == "AQID") {
							this.data.foto_jaminan_dua = null
						}

						if(image != "AQID") {
						 this.data.foto_jaminan_dua = image;
						}
					}finally{
						this.encodeImage(file_y).onload = function(event, varty){
							try{
								let image = event.target.result.split(',')[1];
								
								if(image == "AQID") {
									this.data.foto_jaminan_tiga = null
								}

								if(image != "AQID") {
								 this.data.foto_jaminan_tiga = image;
								}
							}finally{
								console.log(this.data)
								// this.changeProfile();
							}
						}.bind(this);
					}
				}.bind(this);
			}
		}.bind(this);
	}
}