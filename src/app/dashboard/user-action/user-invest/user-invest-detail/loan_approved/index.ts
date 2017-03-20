// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component
import { LoanApprovedComponent } from './loan_approved.component';
import { DetailPaymentComponent } from './detail-payment';
import { ScoringFormComponent } from './scoring-form';
import { RatingComponent } from './scoring-form/rating';

export const routes = [
  { path:'', component: LoanApprovedComponent},
] 

@NgModule({
  declarations: [ 
    LoanApprovedComponent,
    DetailPaymentComponent,
    ScoringFormComponent,
    RatingComponent
  ],
  imports: [ 
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ]
})

export default class LoanApprovedModule { 
  static routes = routes;
}

