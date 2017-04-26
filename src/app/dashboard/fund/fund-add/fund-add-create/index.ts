// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component create fund
import { CreateComponent } from './create.component';
import { FormComponent } from './part/form';
import { FormConfirmFundComponent } from './part/form-confirm';

// service
import { CreateService } from './create.service';

export const routes = [
  { path:'', component: CreateComponent},
] 

@NgModule({
  declarations: [
    CreateComponent,
    FormComponent,
    FormConfirmFundComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [CreateService]
})

export default class CreateModule { 
  static routes = routes;
}

