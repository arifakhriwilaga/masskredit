// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Component Register
import { RegisterComponent } from './register.component';

// Component Verify
import { FinishStep1Component } from './finish_step_1';

// Guard Dashboard
import { AuthGuardVerify } from './../../authguard/auth-guard-verify.service';
import { AuthGuardVerifyCode } from './../../authguard/auth-guard-verify-code.service';

// Guard Verify
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
        path: 'step-register', 
        // canActivate : [ AuthGuardVerify ],
        loadChildren: () => System.import('./step-register').then((comp: any) => comp.default) 
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
    RouterModule.forChild(routes),
    FormsModule,
    // CommonModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
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

