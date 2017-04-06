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
		  },
		  messages: {
		  	struct_image : "File dibutuhkan."
		  }
		});
	}

	checkFile(data:any){
    let image = data.srcElement.value.toString();
    var x = "File tidak valid";
    
    if(image.match(/.jpg|png/)) {
    	jQuery("#struct_image").valid();
      document.getElementById("error").innerHTML = null;
    } else {
      data.srcElement.value = null
      document.getElementById("error").innerHTML = x;
      return data.srcElement.value;

    }
  }
}