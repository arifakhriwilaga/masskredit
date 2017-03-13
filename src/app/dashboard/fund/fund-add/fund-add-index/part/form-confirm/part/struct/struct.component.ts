import { Component } from '@angular/core';

declare var jQuery:any;
@Component({
	selector: 'struct',
	templateUrl: 'struct.component.html'
})

export class StructComponent { 
	constructor () {}

	ngOnInit(){
		jQuery('#StructForm').validate({
		  rules: {
		  	struct_image: {
		  		required: true
		  	}
		  }
		});
	}	
}