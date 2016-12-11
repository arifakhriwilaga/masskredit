// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule  }            from '@angular/http';
import { FormsModule, FormBuilder, ReactiveFormsModule }           from '@angular/forms';
import {CommonModule} from "@angular/common";

// import { ValidationComponent }  from './validation';

// import { verifyHandphoneValidation }  from './validation.service';
// import { ControlMessagesVerifyHandphone } from './control.message.service';


// Component Verify
import { VerifyComponent }       from './verify.component';


console.log("dari verify")

export const routes = [
  { path: '', component: VerifyComponent}
]

@NgModule({
  declarations: [
    VerifyComponent,
    // ValidationComponent
    // ControlMessagesVerifyHandphone
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // AuthResolve,
    // verifyHandphoneValidation,
    FormBuilder
  ],
})

export default class VerifyModule { 
  static routes = routes
}

