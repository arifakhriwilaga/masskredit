// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component
import { CreateComponent } from './create.component';
import { DueDateComponent } from './part/datepicker';
import { VerifyComponent } from './part/verify';
import { FormVerifyComponent } from './part/verify/form';


export const routes = [
  { path:'', component: CreateComponent},
] 

@NgModule({
  declarations: [
    CreateComponent,
    DueDateComponent,
    VerifyComponent,
    FormVerifyComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
})

export default class CreateModule { 
  static routes = routes;
}


