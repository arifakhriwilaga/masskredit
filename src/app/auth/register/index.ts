// Module
import { BrowserModule }                                       from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { RouterModule, Routes, ActivatedRoute }                from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { HttpModule }                                          from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder }                    from '@angular/forms';
import { RegisterService }                                     from './register.service';
import { JqueryService }                                     from './jquery.register';
import { CommonModule  }              from '@angular/common';


// Component Register
import { RegisterComponent }        from './register.component';

// Component Verify
import { Step1RegisterComponent }          from './step1/register1.component';
import { Step2RegisterComponent }          from './step2/register2.component';
import { Step3RegisterComponent }          from './step3/register3.component';
// import { Step1RegisterComponent }          from './step1/register1.component';

// Guard Dashboard
import { AuthGuardVerify }       from './../../authguard/auth-guard-verify.service';
import { AuthGuardVerifyCode }   from './../../authguard/auth-guard-verify-code.service';

// Guard Verify
import { AuthGuardVerifyCodeHandphone }   from './../../authguard/auth-guard-verify-code-handphone.service';
import { AuthGuardVerifyHandphone }   from './../../authguard/auth-guard-verify-handphone.service';
console.log("dari register")
export const routes = [
  { 
    path: '', 
    component: RegisterComponent,
    children : [
      { path: '', redirectTo: 'verify' },
      {    
        path: 'verify', 
        canActivate : [ AuthGuardVerifyCode, AuthGuardVerifyCodeHandphone ],
        loadChildren: () => System.import('./verify_handphone').then((comp: any) => comp.default) 
      },
      {    
        path: 'verify-code', 
        canActivate : [ AuthGuardVerifyCode, AuthGuardVerifyHandphone ],
        loadChildren: () => System.import('./verify_code').then((comp: any) => comp.default) 
      },       
      {    
        path: 'step-1', 
        canActivate : [ AuthGuardVerify ],
        loadChildren: () => System.import('./step1').then((comp: any) => comp.default) 
      }          
    ]

  }

];  

@NgModule({
  declarations: [
    RegisterComponent, // declarations RegisterComponent
    // Step1RegisterComponent

  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // AuthResolve,
    AuthGuardVerify,
    AuthGuardVerifyCode,
    RegisterService,
    JqueryService,
    Step1RegisterComponent,
    Step2RegisterComponent,
    Step3RegisterComponent,
    AuthGuardVerifyHandphone,
    AuthGuardVerifyCodeHandphone,
    FormBuilder
  ],
})

export default class RegisterModule { 
  static routes = routes
}

