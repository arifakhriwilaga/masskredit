import { Component, ViewEncapsulation, OnInit }  from '@angular/core';
import { ActivatedRoute, Router }        from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HeaderComponent }               from './shared/header';
import { Global }                 from './../global.service';

declare var jQuery: any;

@Component({
  selector: 'dashboard',  // <dashboard></dashboard>
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{  
  constructor(private http : Http, private router:Router) { 
    // this.name = this.globalService.data
    // this.globalService.data = this.name
  }

  public data_user : Global;

    // object for pass to header dashboard
    // name : string ;
    // last_login : string    = "";
    // user_class : string    = "";
    // user_status : string   = "";
    // profile_image : string = "";
    // investor : string      = "";
    // borrower : string      = "";
    // avg_reviews : string   = "";
    // fund_history : string  = "";
    // account_summary : string = "";
    // is_complete : string = "";

  ngOnInit(){
    this.getProfile();
    jQuery('li > a').click(function() {
      jQuery('li').removeClass();
      jQuery(this).parent().addClass('active');
   
    });
    // set datepicker
    jQuery('#datepicker').datepicker({
      format: 'mm/dd/yyyy'
    });

    var perShapeGradient = {
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 0
    };
  }

  public profile         = [];
  // public account_summary = {};
  getProfile(){
    // object for get token
    let token = {
      'access_token' : localStorage.getItem("access_token")
    }
    
    // set header
    let headers = new Headers({ 
       'Content-Type': 'application/json',
       'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
     });
    let options = new RequestOptions({ headers: headers });
    // console.log(token)
   
    console.log("Sedang mengambil data....")
    // http request data
    this.http.post('http://masscredit-api.stagingapps.net/user/credential/profile',token,options)
      .map(response => response.json())
      .subscribe(
        (response : any) => {
          this.data_user = response;
          console.log(this.data_user)
          // alert("get profile")
          // console.log(response);
          // this.profile         = response.data.profile.name;
          // this.account_summary = response.data.account_summary;

          // this.name = response.data.profile.name;  
          // // this.name           = this.globalService.data;
          // this.last_login     = response.data.profile.last_login;
          // this.user_class     = response.data.profile.user_score.user_class;
          // this.user_status    = response.data.profile.user_score.user_status;
          // this.profile_image  = response.data.profile.profile_image;
          // this.account_summary= response.data.account_summary.balance;
          // this.investor     = response.data.profile.user_score.investor;
          // this.borrower     = response.data.profile.user_score.borrower;
          // this.avg_reviews  = response.data.profile.user_score.avg_reviews;
          // this.fund_history = response.data.profile.user_score.fund_history;
          // this.is_complete  = response.data.profile.is_complete;

          // console.log(this.profile);
        },
        (err:any) => {
          var error   = JSON.parse(err._body)
          var message = error.meta.message
            if(message == "unauthorized") {
              alert("Maaf session anda telah habis silahkan login kembali")
              return this.router.navigateByUrl('/dashboard/sign-out')
              
            }  
        }
      );
  }
}    



