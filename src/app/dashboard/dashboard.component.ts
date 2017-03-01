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
    name : string ;
    last_login : string    = "";
    user_class : string    = "";
    user_status : string   = "";
    profile_image : string = "";
    investor : string      = "";
    borrower : string      = "";
    avg_reviews : string   = "";
    fund_history : string  = "";
    account_summary : string = "";
    is_complete : string = "";
    // profile_image : null;

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
 
  // object for get token
  private token = {
    'access_token' : JSON.parse(localStorage.getItem("access_token"))
  }
  
  private profileUrl = "https://masscredit-api.stagingapps.net/user/credential/profile";
  
  // set header
  private headers = new Headers({ 
     'Content-Type': 'application/json',
     'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
   });
  private options = new RequestOptions({ headers: this.headers });

   
  getProfile(){
    this.http.post(this.profileUrl,this.token,this.options)
      .map(response => response.json())
      .subscribe((response : any) => {
        this.profile         = response.data.profile.name;
        this.account_summary = response.data.account_summary;

        this.name = response.data.profile.name;  
        // this.name           = this.globalService.data;
        this.last_login     = response.data.profile.last_login;
        this.user_class     = response.data.profile.user_score.user_class;
        this.user_status    = response.data.profile.user_score.user_status;
        this.profile_image  = response.data.profile.profile_image;
        this.account_summary= response.data.account_summary.balance;
        var _minus = false;
        var b:any = this.account_summary.toString();
        if (b<0) _minus = true;
          b=b.replace(".","");
          b=b.replace("-","");
          let c = "";
          let panjang = b.length;
          let j = 0;
        for (let i = panjang; i > 0; i--){
          j = j + 1;
          if (((j % 3) == 1) && (j != 1)){
            c = b.substr(i-1,1) + "." + c;
            // console.log(c)
          } else {
            c = b.substr(i-1,1) + c;
          }
        }
        if (_minus) c = "-" + c ;
        let idr = "Rp.";
        this.account_summary = idr.concat(c);
        this.investor     = response.data.profile.user_score.investor;
        this.borrower     = response.data.profile.user_score.borrower;
        this.avg_reviews  = response.data.profile.user_score.avg_reviews;
        this.fund_history = response.data.profile.user_score.fund_history;
        this.is_complete  = response.data.profile.is_complete;
        
        },(err:any) => {
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



