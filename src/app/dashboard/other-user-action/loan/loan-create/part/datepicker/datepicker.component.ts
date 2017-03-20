import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateComponent } from './../../create.component';

declare var jQuery:any;

@Component({
	selector: 'due-date',
	template: ` 
	<div class="form-group">
    <div class="col-md-12">
    <span class="required">*</span>
    <input  type="text" placeholder="Batas Akhir Penawaran " name="due_date" class="form-control input-md datepicker" id="due_date" [(ngModel)]="loan.due_date">
    </div>
  </div>
	`
})

export class DueDateComponent implements OnInit{ 
	constructor(private create:CreateComponent) { }
	private loan = this.create.loan;

	ngOnInit(){
		// validation
		jQuery("#due_date").datepicker({
	      format	: 'yyyy-mm-dd',
	      startDate: "today",
		    autoclose: true,
		    todayHighlight: true
	  });
	}
}