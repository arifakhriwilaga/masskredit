// Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail.component';
import { VerifyComponent } from './part/verify';
import { FormVerifyComponent } from './part/verify/form';
import { FormDetailLoanComponent } from './form-detail';

export const routes = [
  { path:'', component: DetailComponent},
] 

@NgModule({
  declarations: [
    DetailComponent,
    VerifyComponent,
    FormVerifyComponent,
    FormDetailLoanComponent
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

