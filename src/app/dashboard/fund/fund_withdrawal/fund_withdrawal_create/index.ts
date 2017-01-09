// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { CommonModule }          from '@angular/common';
// import { LocalStorageService }   from 'angular-2-local-storage';


// debugger;
// Component
import { CreateComponent }        from './create.component';

export const routes = [
  { path:'', component: CreateComponent},
] 

@NgModule({
  declarations: [
    CreateComponent, // declarations LoginComponent
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

