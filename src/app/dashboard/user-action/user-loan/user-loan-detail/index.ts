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
import { VerifyComponent } from './part/verify_component';

export const routes = [
  { path:'', component: DetailComponent},
  {    
    path: 'loan-approved/:investorId', 
    loadChildren: () => System.import('./loan-approved').then((comp: any) => comp.default) 
  },
  // {    
  //   path: 'loan-not-approved/:loanId', 
  //   loadChildren: () => System.import('./loan-not-approved').then((comp: any) => comp.default) 
  // },
] 

@NgModule({
  declarations: [ 
    DetailComponent, 
    PartComponent,
    LoanNotApprovedComponent,
    VerifyComponent
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

