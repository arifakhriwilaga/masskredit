// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// component register
import { RegisterComponent } from './register.component';

// component verify
import { FinishStep1Component } from './finish_step_1';

// guard dashboard
import { AuthGuardVerify } from './../../auth-guard/auth-guard-verify.service';
import { AuthGuardVerifyCode } from './../../auth-guard/auth-guard-verify-code.service';

// guard verify
// import { AuthGuardVerifyCodeHandphone } from './../../authguard/auth-guard-verify-code-handphone.service';
import { AuthGuardVerifyHandphone } from './../../authguard/auth-guard-verify-handphone.service';

export const routes = [
  { 
    path: '', 
    component: RegisterComponent,
    children : [
      { path: '', redirectTo: 'phone-number' },
      {    
        path: 'phone-number', 
        // canActivate : [ AuthGuardVerifyCode],
        loadChildren: () => System.import('./phone-number').then((comp: any) => comp.default) 
      },
      {    
        path: 'verify-code', 
        // canActivate : [ AuthGuardVerifyCode ],
        loadChildren: () => System.import('./verify-code').then((comp: any) => comp.default) 
      },       
      {    
        path: 'step-register/:access_code', 
        // canActivate : [ AuthGuardVerify ],
        loadChildren: () => System.import('./step-register').then((comp: any) => comp.default) 
      },
      {    
        path: 'new-password/:token',
        loadChildren: () => System.import('./new-password').then((comp: any) => comp.default) 
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
    RegisterComponent,
    FinishStep1Component

  ],
  imports: [
    HttpModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [
    AuthGuardVerify,
    AuthGuardVerifyCode,
    // AuthGuardVerifyHandphone,
    // AuthGuardVerifyCodeHandphone,
    // AuthResolve,
    // RegisterService,
    // FormBuilder
  ],
})

export default class RegisterModule { 
  static routes = routes
}

