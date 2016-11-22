import { Routes, RouterModule } from '@angular/router';
// import { NoContentComponent }   from './no-content';
// import { AuthResolve }          from './authguard/auth-resolve.service';

//  Base Auth
import { AuthComponent }              from './../auth';
import { LoginComponent }             from './../auth/login';
import { RegisterComponent }          from './../auth/register';
import { Step1RegisterComponent }     from './../auth/register/step1';
import { Step2RegisterComponent }     from './../auth/register/step2';
import { Step3RegisterComponent }     from './../auth/register/step3';
import { Step4RegisterComponent }     from './../auth/register/step4';


import { DataResolver }               from './../app.resolver';


export const ROUTESHOME: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'auth', component: AuthComponent,
    children: [
      { path: 'register',     component: RegisterComponent, 
        children: [
          { path: 'login',        component: LoginComponent },
          { path: '', redirectTo: 'step-1', pathMatch: 'full' },
          { path: 'step-1', component : Step1RegisterComponent },
          { path: 'step-2', component : Step2RegisterComponent },
          { path: 'step-3', component : Step3RegisterComponent },
          { path: 'step-4', component : Step4RegisterComponent },

        ]
      }
    ]
   },
  // { path: '**',    component: NoContentComponent },
];
