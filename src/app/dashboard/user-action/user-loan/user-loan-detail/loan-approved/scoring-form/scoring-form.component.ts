import { Component,EventEmitter,Input,Output, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ScoringFormService } from './scoring-form.service';

declare var jQuery:any;

@Component({
	selector: 'scoring-form',
  templateUrl: 'scoring-form.component.html',
  providers: [ScoringFormService]
})

export class ScoringFormComponent implements OnInit{
	private rate: number;
  private rate2: number;
  private customRate: number;
  
  constructor(private scoringFormService:ScoringFormService) { }
  
	ngOnInit(){
    var dataRate = this.dataRate;
    if(this.dataScoring !== null) {
      this.dataRate.target_user_id = this.dataScoring.id_investor;
      this.dataRate.access_token = this.dataScoring.access_token;
    }
		jQuery('#ScoringForm').modal({backdrop: 'static', keyboard: false});
    jQuery(function () {
      var that = this;
      var toolitup = jQuery("#jRate").jRate({
        startColor: '#FFC300',
        endColor: '#FFC300',
        rating: 0,
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
    });
	}

	@Output() statusForm = new EventEmitter();
	hideForm(){
		jQuery('#ScoringForm').modal("toggle");
		this.statusForm.emit(0);
	}

  @Input() dataScoring:any;

  dataRate = {
    access_token: null,
    target_user_id: null,
    rate_value: null
  }

  rateUser(){
    if(this.dataRate.rate_value === 0) {
      this.scoringFormService.rateUser(this.dataRate).then(dataResponse => {
        console.log(dataResponse);
      })
    } else {
      alert("Masukan jumlah bintang");
    }
  }	
}