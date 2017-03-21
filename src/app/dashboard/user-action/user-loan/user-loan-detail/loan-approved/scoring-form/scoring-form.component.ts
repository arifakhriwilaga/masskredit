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
    var dataRate = this.dataRate;
		jQuery('#ScoringForm').modal({backdrop: 'static', keyboard: false});
    jQuery(function () {
      var that = this;
      var toolitup = jQuery("#jRate").jRate({
        startColor: '#FFC300',
        endColor: '#FFC300',
        rating: 1,
        strokeColor: 'black',
        precision: 1,
        minSelected: 1,
        onChange: function(rating) {
          //console.log("OnChange: Rating: "+rating);
        },
        onSet: function(rating) {
          dataRate.rate_value = rating;
          // console.log("OnSet: Rating: "+rating);
        }
      });
      
      jQuery('#btn-click').on('click', function() {
        toolitup.setRating(0);        
      });
      
    });
	}

	@Output() statusForm = new EventEmitter();
	hideForm(){
		jQuery('#ScoringForm').modal("toggle");
		this.statusForm.emit(0);
	}

  dataRate = {
    access_token: null,
    target_user_id: null,
    rate_value: null
  }

  rateUser(){
    console.log(this.dataRate);
  }	
}