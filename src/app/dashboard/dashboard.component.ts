import { Component, ViewEncapsulation }  from '@angular/core';
import { ActivatedRoute, Router }                from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';



declare var jQuery: any;

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'dashboard',  // <dashboard></dashboard>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // providers: [
  //   Title
  // ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './dashboard.component.html',
  // styleUrls: ['dashboard.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  
  constructor(private http : Http, private router:Router) { }
  ngOnInit(){
    jQuery('li > a').click(function() {
      jQuery('li').removeClass();
      jQuery(this).parent().addClass('active');
   
    });

    let token = {
      'access_token' : JSON.parse(localStorage.getItem("access_token")),
    }
    
    let headers = new Headers({ 
       'Content-Type': 'application/json',
       'api_key' : '01b19716dfe44d0e9c656903429c3e9c65d0b243' 
     });

   
    console.log("Sedang mengambil data....")
      let options = new RequestOptions({ headers: headers });
      this.http.post('http://masscredit-api.stagingapps.net/user/credential/profile',token,options)
        .map(response => response.json())
        .subscribe(
          (response : any) => {
            // console.log(response);
            this.profile         = response.data.profile.name;
            this.account_summary = response.data.account_summary;

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


     jQuery('#datepicker').datepicker({
      format: 'mm/dd/yyyy',
      // startDate: '3d'
    });


    var perShapeGradient = {
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 0
    };

  }

  public profile         = [];
  public account_summary = {};

}    



