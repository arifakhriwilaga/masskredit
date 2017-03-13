import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';


declare var jQuery:any;

@Component({
	selector: 'message',
	templateUrl: 'message.component.html',
})

export class MessageComponent {
	constructor(private router:Router) { }

	ngOnInit() { 
		jQuery('#myModal').modal({backdrop: 'static', keyboard: false});
  }

  cancelComplement(){
  	jQuery('#myModal').modal('toggle');
		this.router.navigateByUrl('/dashboard/fund/fund-withdrawal');
  }

  submitComplement() {
		jQuery('#myModal').modal('toggle');	
		this.router.navigateByUrl('/dashboard');	
  }

}
