// Module
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { RouterModule }        from '@angular/router';

// Guard Dashboard
import { AuthGuardDashboard }   from './../authguard/auth-guard-dashboard.service';

// Component
import { AuthComponent }       from './auth.component';
import { FooterComponent }     from './shared/footer';
import { HeaderComponent }     from './shared/header';
import { LoginComponent }      from './login/login.component';
import { RegisterComponent }   from './register/register.component';


export const routes = [
  { path: '', component: AuthComponent,
  canActivate : [ AuthGuardDashboard ],
    children: [
      { path: '',         redirectTo: 'login', pathMatch: 'full' },
      { path: 'login',    component: LoginComponent },
      { path: 'register', component: RegisterComponent}, 

    ]
  },
];
 

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [ // import Angular's modules
  	CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})	




export default class AuthModule {
  static routes = routes;
}


