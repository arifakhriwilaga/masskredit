import { Component,EventEmitter,Input,Output, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ScoringFormService } from './scoring-form.service';

declare var jQuery:any;

@Component({
	selector: 'scoring-form',
  templateUrl: 'scoring-form.component.html',
  providers: [ ScoringFormService]
})

export class ScoringFormComponent implements OnInit{
	private rate: number;
  private rate2: number;
  private customRate: number;

  statusRate:number;
  
  constructor(private scoringService:ScoringFormService) { }
 
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
    this.scoringService.rateUser(this.dataRate).then( dataResponse => {
      let message = dataResponse.meta.message;
      let code = JSON.stringify(dataResponse.meta.code);
      let data = dataResponse.data;

      if(code.charAt(0) === '4') {
        this.handleError(message);
      } if(code.charAt(0) === '2') {
        this.handleSuccess(data);
      };
    })
  }	

  handleError(message:any){
    console.log(message);
    // if(message === 'unauthorized') {
    //   alert("Maaf akses token tidak terdaftar")            
    // }          
  }
  
  handleSuccess(data:any){
    console.log(data)
  }
}