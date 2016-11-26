// Module
import { BrowserModule }                                       from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { RouterModule, Routes }                                from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { HttpModule }                                          from '@angular/http';
import { FormsModule, ReactiveFormsModule }                    from '@angular/forms';
// import { AuthResolve }     from './authguard/auth-resolve.service';


// Component Register
import { RegisterComponent }        from './register.component';
import { step1Directive }           from './step1/step1.directive';
import { Step1RegisterComponent }   from './step1';
import { Step2RegisterComponent }   from './step2';
import { Step3RegisterComponent }   from './step3'
import { Step4RegisterComponent }   from './step4';



@NgModule({
  declarations: [
    RegisterComponent, // declarations RegisterComponent
    Step1RegisterComponent,
    Step2RegisterComponent,
    Step3RegisterComponent,
    Step4RegisterComponent,
    step1Directive 

  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // AuthResolve,
  ],
})

export default class RegisterModule { }

