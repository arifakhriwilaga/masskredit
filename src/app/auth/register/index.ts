// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// component register
import { RegisterComponent } from './register.component';

// guard dashboard
import { AuthGuardVerify } from './../../auth-guard/auth-guard-verify.service';
import { AuthGuardVerifyCode } from './../../auth-guard/auth-guard-verify-code.service';

// guard verify
import { AuthGuardVerifyHandphone } from './../../authguard/auth-guard-verify-handphone.service';

export const routes = [
  { 
    path: '', 
    component: RegisterComponent,
    children : [   
      {    
        path: 'step-register/:access_code', 
        // canActivate : [ AuthGuardVerify ],
        loadChildren: () => System.import('./step-register').then((comp: any) => comp.default) 
      },
      {    
        path: 'new-password/:token',
        loadChildren: () => System.import('./new-password').then((comp: any) => comp.default) 
      }
    ]
  }
];  

@NgModule({
  declarations: [ RegisterComponent ],
  imports: [
    HttpModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  providers: [
  ],
})

export default class RegisterModule { 
  static routes = routes
}

