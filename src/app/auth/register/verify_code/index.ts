// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule, FormBuilder, ReactiveFormsModule  }           from '@angular/forms';
import {CommonModule} from "@angular/common";



// Component Verify
import { VerifyCodeComponent }       from './verify_code.component';

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
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // AuthResolve,
    FormBuilder
  ],
})

export default class VerifyCodeModule { 
  static routes = routes
}

