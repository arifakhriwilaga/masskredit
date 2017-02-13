// Module
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Component Register
import { StepRegisterComponent }     from './step-register.component';

export const routes = [ { path: '', component: StepRegisterComponent } ]

@NgModule({
  declarations: [
    StepRegisterComponent, // declarations RegisterComponent
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
    // CommonModule,
    // ReactiveFormsModule
  ],
  providers: [ ],
})

export default class StepRegisterModule { 
  static routes = routes
}

