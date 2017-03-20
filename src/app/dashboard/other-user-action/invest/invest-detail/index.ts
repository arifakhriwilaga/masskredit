// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component
import { DetailComponent } from './detail.component';
import { FormDetailComponent } from './form-detail';
import { VerifyComponent } from './part/verify';
import { FormVerifyComponent } from './part/verify/form';

// import { FormLoanComponent } from './part/form-loan';
// import { CalculationComponent } from './part/calculation';

export const routes = [
  { path:'', component: DetailComponent},
] 

@NgModule({
  declarations: [
    DetailComponent,
    FormDetailComponent,
    VerifyComponent,
    FormVerifyComponent
    // FormLoanComponent,
    // CalculationComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ]
})

export default class DetailModule { 
  static routes = routes;
}

