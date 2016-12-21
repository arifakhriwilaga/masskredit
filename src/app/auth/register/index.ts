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
import { FinishStep1Component }          from './finish_step_1';

// Guard Dashboard
import { AuthGuardVerify }       from './../../authguard/auth-guard-verify.service';
import { AuthGuardVerifyCode }   from './../../authguard/auth-guard-verify-code.service';

// Guard Verify
import { AuthGuardVerifyCodeHandphone }   from './../../authguard/auth-guard-verify-code-handphone.service';
import { AuthGuardVerifyHandphone }   from './../../authguard/auth-guard-verify-handphone.service';



export const routes = [
  { 
    path: '', 
    component: RegisterComponent,
    children : [
      { path: '', redirectTo: 'verify' },
      {    
        path: 'verify', 
        canActivate : [ AuthGuardVerifyCode],
        loadChildren: () => System.import('./verify_handphone').then((comp: any) => comp.default) 
      },
      {    
        path: 'verify-code', 
        canActivate : [ AuthGuardVerifyCode ],
        loadChildren: () => System.import('./verify_code').then((comp: any) => comp.default) 
      },       
      {    
        path: 'step-1', 
        canActivate : [ AuthGuardVerify ],
        loadChildren: () => System.import('./step1').then((comp: any) => comp.default) 
      },
      {    
        path: 'finish', 
        // canActivate : [ AuthGuardVerify ],
        component   : FinishStep1Component, 
      },

       
    ]

  }

];  

@NgModule({
  declarations: [
    RegisterComponent, // declarations RegisterComponent
    FinishStep1Component

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
    AuthGuardVerifyHandphone,
    AuthGuardVerifyCodeHandphone,
    FormBuilder
  ],
})

export default class RegisterModule { 
  static routes = routes
}

