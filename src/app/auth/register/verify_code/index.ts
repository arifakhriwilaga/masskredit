// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';



// Component Verify
import { VerifyCodeComponent }       from './verify_code.component';


console.log("dari verify")

export const routes = [
  { path: '', component: VerifyCodeComponent}
]

@NgModule({
  declarations: [
    VerifyCodeComponent,
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)

  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // AuthResolve,
  ],
})

export default class VerifyCodeModule { 
  static routes = routes
}

