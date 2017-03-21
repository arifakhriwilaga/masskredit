// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component
import { LoanApprovedComponent } from './loan-approved.component';
import { PartComponent } from './part';
import { BePaidComponent } from './part/be-paid';
import { NotPaidComponent } from './part/not-paid';
import { VerifyComponent } from './part/not-paid/verify_component';
import { FormVerifyComponent } from './part/not-paid/verify_component/form-verify';

// component scoring
import { ScoringFormComponent } from './scoring-form';
import { RatingComponent } from './scoring-form/rating';


// service
import { LoanApprovedService } from './loan-approved.service.ts';

export const routes = [
  { path:'', component: LoanApprovedComponent},
] 

@NgModule({
  declarations: [ 
    LoanApprovedComponent, 
    PartComponent, 
    BePaidComponent, 
    NotPaidComponent,
    VerifyComponent,
    FormVerifyComponent,
    ScoringFormComponent, // component scoring
    RatingComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ LoanApprovedService ]
})

export default class LoanApprovedModule { 
  static routes = routes;
}

