// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { CommonModule }          from '@angular/common';

// component
import { CreateComponent }        from './create.component';
import { DueDateComponent }        from './datepicker_component';
import { VerifyComponent }        from './verify_component';


export const routes = [
  { path:'', component: CreateComponent},
] 

@NgModule({
  declarations: [
    CreateComponent, // declarations LoginComponent
    DueDateComponent,
    VerifyComponent
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  // exports: [LoginComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // LocalStorageService,
    // LoginComponent,
  ]
})

export default class CreateModule { 
  static routes = routes;
}


