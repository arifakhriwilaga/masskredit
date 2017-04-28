import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Data } from './data';
import { ConfirmService } from './form-confirm.service';

declare var jQuery:any;

@Component({
	selector: 'form-confirm',
	templateUrl: 'form-confirm.component.html',
	providers: [ ConfirmService ]
})

export class FormConfirmComponent { 
	constructor (private confirmService:ConfirmService) {}

	public statusConfirm = 1;
 	
	public data:Data = {
		access_token: JSON.parse(localStorage.getItem("access_token")),
		fund_id: null,
  	struct_image: "",
  	confirm_date: "",
	}

	@Input() dataFundId : number;

	hideDetailDana(){
		jQuery('#FormConfirm').modal('toggle');
	}

	ngOnInit(){
		if(this.dataFundId != null) {
			try {
				this.data.fund_id = this.dataFundId;
			} finally {
					jQuery('#FormConfirm').modal({backdrop: 'static', keyboard: false});
			}
		}
	}

	@Output() hideFormConfirm = new EventEmitter<number>();
	cancelConfirm(){
		jQuery('#FormConfirm').modal("toggle");
		this.hideFormConfirm.emit(0);
	}
	
	submitConfirm(){
		if(jQuery("#StructForm").valid()) {
			this.statusConfirm = 0;
			let image : any = document.getElementById("struct_image");
			this.encodeImage(image);
		}else{
			alert("Data tidak valid")
		}
	}

	readImage(file:any){
		let readerFile = new FileReader();
		readerFile.readAsDataURL(file);
		return readerFile;
	}

	encodeImage(image:any){
		var file =	image.files[0];
		var objectBlob	= new Uint8Array([1,2,3]);
		var arrayBlob	= objectBlob.buffer;
		var image_default = new Blob([arrayBlob]);

		if(file == undefined) {
			file = image_default;
		}
		this.readImage(file).onload = function(event, varty){
			try{
				let image = event.target.result.split(',')[1];
				
				if(image == "AQID") {
					this.data.struct_image = null
				}

				if(image != "AQID") {
				 this.data.struct_image = image;
				}
			}finally{
				this.confirmFund()	
			}
		}.bind(this);
	}

	confirmFund(){
		// console.log(this.data)
		this.confirmService.postConfirm(this.data).then(dataConfirm => {
			alert("Penambahan berhasil, harap menunggu konfirmasi admin")
			this.cancelConfirm();
		})
	}

}