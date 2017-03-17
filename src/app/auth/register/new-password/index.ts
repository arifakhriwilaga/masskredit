// module
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NewPasswordComponent }     from './new-password.component';

export const routes = [ { path: '', component: NewPasswordComponent } ]

@NgModule({
  declarations: [NewPasswordComponent],
  imports: [
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [ ],
})

export default class StepRegisterModule { 
  static routes = routes
}

