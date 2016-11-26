// Module
import { CommonModule } 		   from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }            from '@angular/core';
import { RouterModule }        from '@angular/router';

// Component
import { AuthComponent }       from './auth.component';
import { FooterComponent }     from './shared/footer/footer.component';
import { HeaderComponent }     from './shared/header/header.component';
import { LoginComponent }      from './login/login.component';
import { RegisterComponent }   from './register/register.component';


export const routes = [
  { path: '', component: AuthComponent,
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


