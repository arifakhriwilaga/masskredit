// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component
import { DetailComponent } from './detail.component';
import { PartComponent } from './part';
import { LoanNotApprovedComponent } from './part/loan-not-approved';
import { VerifyComponent } from './part/verify-component';

export const routes = [
  { path:'', component: DetailComponent },
  {    
    path: 'loan-approved/:borrowerId', 
    loadChildren: () => System.import('./loan_approved').then((comp: any) => comp.default) 
  }
] 

@NgModule({
  declarations: [ 
    DetailComponent, 
    PartComponent,
    LoanNotApprovedComponent,
    VerifyComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [ ]
})

export default class DetailModule { 
  static routes = routes;
}

