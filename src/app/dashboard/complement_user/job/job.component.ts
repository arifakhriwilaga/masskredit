import { Component, OnInit } 	from '@angular/core';
import { ComplementComponent }	from './../complement.component';

declare var jQuery:any;

@Component({
	selector: 'job',
	templateUrl: 'job.component.html'
})

export class JobComponent implements OnInit { 

	constructor(private complement : ComplementComponent) {
	// initial objek in complement data
	this.data = this.complement.data;
		
	}

	ngOnInit(){
		jQuery('.datepicker').datepicker({
	      format	: 'yyyy-mm-dd',
	      // startDate : '2015-01-01',
	      // minDate	: '01/01/2015'

	    });
	}
	public data = { }

}