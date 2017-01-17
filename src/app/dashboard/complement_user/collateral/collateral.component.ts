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
	this.data = this.complement.data;
	}

	ngOnInit(){
		// dynamic data jaminan
		var counterdua = 1;
		jQuery("#addCollateral").click(function(){
			console.log("mantap")
			if(counterdua > 5) {
				alert("Only 5 textbox");
				return false;
			}


			var newTextBoxDivCollateral = jQuery(document.createElement('div'))
			.attr("id",'TextBoxCollateralDiv' + counterdua).attr("class",'blockElementCollateral');

			newTextBoxDivCollateral.after().html(
				'<div class="form-group">' +
				'<div class="col-md-12">' +
				 '<span class="required">*</span>' +
				 '<label>Foto Jaminan Satu</label>' +
				  '<input type="file" name="foto_jaminan_satu' + counterdua + '" id="foto_jaminan_satu' + counterdua + '>' +
				'</div>' +
				'<div class="col-md-12">' +
				 '<span class="required">*</span>' +
				 '<label>Foto Jaminan Dua</label>' +
				  '<input type="file" name="foto_jaminan_dua' + counterdua + '" id="foto_jaminan_dua' + counterdua + '>' +
				 '</div>' +
				'<div class="col-md-12">' +
				 '<span class="required">*</span>' +
				 '<label>Foto Jaminan Tiga</label>' +
				  '<input type="file" name="foto_jaminan_tiga' + counterdua + '" id="foto_jaminan_tiga' + counterdua + '>' +
				 '</div>' +
				'</div>'+
				'<div class="form-group">' +
				 '<div class="col-xs-7">'+
					'<input type="text" placeholder="Taksiran Harga Jaminan" class="form-control input-md taksiran-jaminan" name="textboxjaminan1' + counterdua + 
					'" id="textboxjaminan1' + counterdua + '" value="">' +
				 '</div>' +
				 '<div class="col-xs-5">'+
					'<input type="text" placeholder="Jenis Jaminan" class="form-control input-md jenis-jaminan" name="textboxjaminan2' + counterdua + 
					'" id="textboxjaminan2' + counterdua + '" value="">' +
				'</div>' +
				 '<div class="col-xs-12">'+
					'<textarea type="text" placeholder="Deskripsi Jaminan" class="form-control input-md deskripsi-angsuran" name="textboxjaminan3' + counterdua + 
					'" id="textboxjaminan3' + counterdua + '" value=""></textarea>' +
				 '</div>' + 
				'</div>'
			);
			newTextBoxDivCollateral.appendTo("#TextBoxesGroupCollateral");
			counterdua++;
			console.log(counterdua)
		});

		jQuery("#removeCollateral").click(function(){
			if(counterdua <= 1){
				alert("No more textbove remove");
				return false;
			}	
			counterdua--;
			jQuery("#TextBoxCollateralDiv" + counterdua).remove();

		});
	}

	public data = { }

}