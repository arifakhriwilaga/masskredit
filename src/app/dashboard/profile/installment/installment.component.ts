import { Component, OnInit, AfterContentInit, ElementRef } 	from '@angular/core';
import { ProfileComponent }	from './../profile.component';

declare var jQuery:any;

@Component({
	//moduleId: module.id,
	selector: 'installment',
	templateUrl: 'installment.component.html'
})

export class InstallmentComponent { 

	constructor(private profileComponent : ProfileComponent) {}

	much(id:any){
		
	}

	private node :any;
	private node1 :any;
	private formInstallment = 0;

	ngOnInit(){
		// dynamic data angsuran
		var counter = 1;
		jQuery("#addButton").click(function(){
			if(counter > 5) {
				alert("Only 5 textbox");
				return false;
			}


			var newTextBoxDiv = jQuery(document.createElement('div'))
			.attr("id",'TextBoxDiv' + counter).attr("class",'blockElement');

			newTextBoxDiv.after().html(
				'<label>Angsuran</label>' +
				'<input type="text" placeholder="Jumlah Angsuran" class="form-control input-md jumlah-angsuran" name="textbox1' + counter + 
				'" id="textbox1' + counter + '" value="">' +
				'<input type="text" placeholder="Deskripsi Angsuran" class="form-control input-md description-angsuran" name="textbox2' + counter + 
				'" id="textbox2' + counter + '" value="">'
			);
			newTextBoxDiv.appendTo("#TextBoxesGroup");
			counter++;
			console.log(counter)
		});

		jQuery("#removeButton").click(function(){
			if(counter <= 1){
				alert("No more textbove remove");
				return false;
			}	
			counter--;
			console.log(counter)
			jQuery("#TextBoxDiv" + counter).remove();

		});
	}


	// condition for section data jaminan
	public editDataAngsuran = 0;
	enableDataJaminan(){
		jQuery(".data-angsuran").prop("disabled", false);
		this.editDataAngsuran= 1;
	}

	cancelDataJaminan(){
		jQuery(".data-angsuran").prop("disabled", true);
		this.editDataAngsuran = 0;
		this.profileComponent.getProfile();
	}

	updateDataJaminan(data){
		// jQuery(".data-diri").prop("Profile, true);
		// this.updaprofile();
	}

}