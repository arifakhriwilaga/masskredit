// Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule  } from '@angular/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

// Component Verify
import { VerifyHandphoneComponent } from './verify_handphone.component';

export const routes = [{ path: '', component: VerifyHandphoneComponent}]

@NgModule({
  declarations: [VerifyHandphoneComponent],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // AuthResolve,
    // verifyHandphoneValidation,
    FormBuilder
  ],
})

export default class VerifyHandphoneModule { 
  static routes = routes
}

