// Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoanNotBeenApprovedComponent } from './loan_not_been_approved.component';
import { VerifyComponent } from './verify_component';

export const routes = [
  { path:'', component: LoanNotBeenApprovedComponent},
] 

@NgModule({
  declarations: [
    LoanNotBeenApprovedComponent, // declarations LoginComponent
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

export default class LoanNotBeenApprovedModule { 
  static routes = routes;
}

