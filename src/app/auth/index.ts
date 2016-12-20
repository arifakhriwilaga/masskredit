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



const routes = [
  { 
    path: '', 
    component: AuthComponent,
    canActivate : [ AuthGuardDashboard ],
    children: [
      {  
        path: 'login', 
        loadChildren: () => System.import('./login').then((comp: any) => comp.default) 
      },
      {  
        path: 'register', 
        loadChildren: () => System.import('./register').then((comp: any) => comp.default) 
      },
 
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
    // RegisterComponent,
    // VerifyComponent,
    // Step1RegisterComponent
  ],
  imports: [ // import Angular's modules
  	CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
})	




export default class AuthModule {
  public routes = routes;
}


