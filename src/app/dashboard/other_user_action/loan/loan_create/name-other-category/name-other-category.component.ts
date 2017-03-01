import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateComponent } from './../create.component';

declare var jQuery:any;

@Component({
	selector: 'name-other-category',
	template: ` 
	<div class="form-group">
     <div class="col-md-12">
        <span class="required">*</span>
        <input type="text" id="other_category" name="other_category" [(ngModel)]="loan.other_category" placeholder="Nama Category" class="form-control input-md">
     </div>
  </div>
	`
})

export class NameOtherCategoryComponent { 
	constructor(private create:CreateComponent) { }
	private loan = this.create.loan;
}