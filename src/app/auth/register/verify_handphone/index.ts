// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';



// Component Verify
import { VerifyComponent }       from './verify.component';


console.log("dari verify")

export const routes = [
  { path: '', component: VerifyComponent}
]

@NgModule({
  declarations: [
    VerifyComponent,
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

export default class VerifyModule { 
  static routes = routes
}

