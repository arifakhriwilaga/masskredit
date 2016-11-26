import { Routes, RouterModule } from '@angular/router';
// import { NoContentComponent }   from './no-content';
// import { AuthResolve }          from './authguard/auth-resolve.service';
import { HomeComponent }              from './../home';
import { ContentComponent }           from './../home/content';
import { PendanaanComponent }         from './../home/pendanaan';
import { PinjamanComponent }          from './../home/pinjaman';

//  Base Auth
import { AuthComponent }              from './../auth';
import { LoginComponent }             from './../auth/login';
// import { RegisterComponent }          from './../auth/register';
import { Step1RegisterComponent }     from './../auth/register/step1';
import { Step2RegisterComponent }     from './../auth/register/step2';
import { Step3RegisterComponent }     from './../auth/register/step3';
import { Step4RegisterComponent }     from './../auth/register/step4';


import { DataResolver }               from './../app.resolver';


export const ROUTESAUTH: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'content-home', pathMatch :'full' },
      { path: 'content-home', component: ContentComponent },
      { path: 'pendanaan',    component: PendanaanComponent },
      { path: 'pinjaman',     component: PinjamanComponent },

    ] 
  },
  { path: 'auth', component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login',     component: LoginComponent },
      { path: 'register',     component: RegisterComponent}
    ]  
   },
  // { path: '**',    component: NoContentComponent },
];
