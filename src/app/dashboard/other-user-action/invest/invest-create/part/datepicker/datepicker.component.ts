import { Component, OnInit } from '@angular/core';
import { CreateComponent } from './../../create.component';

declare var jQuery:any;

@Component({
	selector: 'due-date',
	template: ` 
	<div class="form-group">
    <div class="row">
      <div class="col-md-10">
      <span class="required">*</span>
      <input type="text" placeholder="Batas Penawaran" class="form-control input-md datepicker" name="due_date" id="due_date" [(ngModel)]="invest.due_date">
    </div>
    </div>
  </div>
	`
})

export class DueDateComponent implements OnInit{ 
	constructor(private create:CreateComponent) { }
	private invest = this.create.invest;

	ngOnInit(){
		jQuery("#due_date").datepicker({
      format	: 'dd-mm-yyyy',
      startDate: "today",
	    autoclose: true,
	    todayHighlight: true
	  });
	}
}