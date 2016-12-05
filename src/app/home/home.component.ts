import { Component, ViewEncapsulation }    from '@angular/core';
import { ActivatedRoute }                  from '@angular/router';


declare var jQuery : any;

@Component({

  // //moduleId: module.id,
  selector: 'home',  // <home></home>
  templateUrl: './home.component.html',
  // styleUrls: ['home.component.css'], //component for styleUrls (Masih gagal)
  // styles: [require('./home.component.css')] //component for styleUrls (Masih gagal)
  // encapsulation: ViewEncapsulation.None,
})


export class HomeComponent { 


	ngOnInit(){
		// nav
      jQuery("document").ready(function($){
      var headNav = $('.navbar-head');
       $(window).scroll(function () {
           if ($(this).scrollTop() > 40) {
               headNav.addClass("fixed");
           } else {
               headNav.removeClass("fixed");
           } 
       });
      });
	}
}