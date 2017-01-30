// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { CommonModule }  from '@angular/common';
// import { LocalStorageService }   from 'angular-2-local-storage';


// debugger;
// Component
import { DetailComponent }        from './detail.component';

export const routes = [
  { path:'', component: DetailComponent},
  {    
    path: 'loan-approved/:id', 
    loadChildren: () => System.import('./loan_approved').then((comp: any) => comp.default) 
  },
  {    
    path: 'loan-not-been-approved/:id', 
    loadChildren: () => System.import('./loan_not_been_approved').then((comp: any) => comp.default) 
  },

] 

@NgModule({
  declarations: [
    DetailComponent, // declarations LoginComponent
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  // exports: [LoginComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // LocalStorageService,
    // LoginComponent,
  ]
})

export default class DetailModule { 
  static routes = routes;
}

