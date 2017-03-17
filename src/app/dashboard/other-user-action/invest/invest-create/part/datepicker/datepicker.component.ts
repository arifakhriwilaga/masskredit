import { Component, OnInit } from '@angular/core';
import { CreateComponent } from './../../create.component';

declare var jQuery:any;

@Component({
	selector: 'due-date',
	template: ` 
	<div class="form-group">
    <div class="col-md-8">
    <span class="required">*</span>
    <input  type="text" placeholder="Batas Akhir Penawaran " name="masa_berlaku" class="form-control input-md datepicker" id="masa_berlaku" [(ngModel)]="invest.masa_berlaku">
    </div>
  </div>
	`
})

export class DueDateComponent implements OnInit{ 
	constructor(private create:CreateComponent) { }
	private invest = this.create.invest;

	ngOnInit(){
		jQuery("#masa_berlaku").datepicker({
	      format	: 'yyyy-mm-dd',
	  });
	}
}