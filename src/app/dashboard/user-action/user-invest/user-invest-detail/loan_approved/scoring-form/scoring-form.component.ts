import { Component,EventEmitter,Input,Output, OnInit, OnDestroy } from '@angular/core';
// import { Rating } from './rating';
import { FormGroup } from '@angular/forms';

declare var jQuery:any;

@Component({
	selector: 'scoring-form',
  templateUrl: 'scoring-form.component.html',
})

export class ScoringFormComponent implements OnInit{
	private rate: number;
  private rate2: number;
  private customRate: number;
  
  constructor() {
    this.rate = 2;
    this.rate2 = 3;
    this.customRate = this.rate2 * 20;
    // this.customRate2 = 0.2;
  }
  
  onRate(value) {
    this.customRate = value * 20;
  }
  
  onRate2(value) {
    // this.customRate2 = value / 5;
  }
	ngOnInit(){
		jQuery('#ScoringForm').modal({backdrop: 'static', keyboard: false});
	}

	@Output() statusForm = new EventEmitter();
	hideForm(){
		jQuery('#ScoringForm').modal("toggle");
		this.statusForm.emit(0);
	}

	
}