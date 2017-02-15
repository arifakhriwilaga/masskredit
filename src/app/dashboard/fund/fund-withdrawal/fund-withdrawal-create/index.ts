// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { CommonModule }          from '@angular/common';

// component create
import { CreateComponent } from './create.component';
import { FormComponent } from './form';

export const routes = [{ path:'', component: CreateComponent}] 

@NgModule({
  declarations: [ 
    CreateComponent, 
    FormComponent 
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

