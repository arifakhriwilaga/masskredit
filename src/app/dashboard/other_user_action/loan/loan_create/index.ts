// Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component
import { CreateComponent } from './create.component';
import { DueDateComponent } from './datepicker_component';
import { VerifyComponent } from './verify_component';
import { NameOtherCategoryComponent } from './name-other-category';


export const routes = [
  { path:'', component: CreateComponent},
] 

@NgModule({
  declarations: [
    CreateComponent,
    DueDateComponent,
    VerifyComponent,
    NameOtherCategoryComponent
  ],
  imports: [ 
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ]
})

export default class CreateModule { 
  static routes = routes;
}


