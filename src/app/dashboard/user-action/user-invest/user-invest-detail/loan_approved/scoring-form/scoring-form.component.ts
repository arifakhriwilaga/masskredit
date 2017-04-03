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
      this.dataRate.investment_id = this.dataScoring.investment_id;
      this.dataRate.history_investment_id = this.dataScoring.history_payment_id;
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
        onChange: function(rating) { },
        onSet: function(rating) {
          dataRate.rate_value = rating;
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
    investment_id: null,
    history_investment_id:null,
    rate_value: null
  }

  rateUser(){
    if(this.dataRate.rate_value !== null) {
      this.scoringFormService.rateUser(this.dataRate).then(dataResponse => {
        let code = JSON.stringify(dataResponse.meta.code);
        
        if(code.charAt(0) === '2') {
          alert("Berhasil melakukan rating")
          this.hideForm();
        } else {
          alert("Gagal melakukan rating")
          this.hideForm();
        }
      })
    } else {
      alert("Masukan jumlah bintang");
    }
  }  
}