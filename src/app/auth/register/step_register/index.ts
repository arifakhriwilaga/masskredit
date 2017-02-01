// Module
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

// Component Register
import { RegisterStepComponent }     from './register_step.component';

export const routes = [ { path: '', component: RegisterStepComponent } ]

@NgModule({
  declarations: [
    RegisterStepComponent, // declarations RegisterComponent
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // AuthResolve,
    FormBuilder
    
  ],
})

export default class RegisterStepModule { 
  static routes = routes
}

