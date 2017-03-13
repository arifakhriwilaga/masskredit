// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component create
import { CreateComponent } from './create.component';
import { FormComponent } from './part/form';
import { MessageComponent } from './part/message';
import { FormConfirmComponent } from './part/form-confirm';

import { CreateService } from './create.service';


export const routes = [{ path:'', component: CreateComponent}] 

@NgModule({
  declarations: [ 
    CreateComponent, 
    FormComponent,
    MessageComponent,
    FormConfirmComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ CreateService ]
})

export default class CreateModule { 
  static routes = routes;
}

