import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent }   from './no-content';
import { AuthGuard }          from './authguard/auth-guard.service';
import { AuthGuardDashboard }          from './authguard/auth-guard-dashboard.service';
// Base Home
import { HomeComponent }              from './home';
import { ContentComponent }           from './home/content';
import { PendanaanComponent }         from './home/pendanaan';
import { PinjamanComponent }          from './home/pinjaman';

 // Base Auth
import { AuthComponent }              from './auth';
import { LoginComponent }             from './auth/login';
import { RegisterComponent }          from './auth/register';
import { Step1RegisterComponent }     from './auth/register/step1';
import { Step2RegisterComponent }     from './auth/register/step2';
import { Step3RegisterComponent }     from './auth/register/step3';
import { Step4RegisterComponent }     from './auth/register/step4';

// Base Dashboard
import { DashboardComponent }         from './dashboard';
import { ContentDashboardComponent }  from './dashboard/content';
import { InvestasiComponent }         from './dashboard/investasi';
import { CreateInvestasiComponent }   from './dashboard/investasi/create';
import { PenarikanDanaComponent }     from './dashboard/penarikan_dana';
import { PinjamanDashboardComponent } from './dashboard/pinjaman';
import { TambahDanaComponent }        from './dashboard/tambah_dana';

import { DataResolver }               from './app.resolver';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  
    component: HomeComponent,
    canActivate : [ AuthGuardDashboard ],
    children: [
      { path: '', redirectTo: 'content-home', pathMatch :'full' },
      { path: 'content-home', component: ContentComponent },
      { path: 'pendanaan',    component: PendanaanComponent },
      { path: 'pinjaman',     component: PinjamanComponent },

    ] 
  },
  { path: 'auth', component: AuthComponent,
    canActivate : [ AuthGuardDashboard ],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login',        component: LoginComponent },
      { path: 'register',     component: RegisterComponent, 
        children: [
          { path: '', redirectTo: 'step-1', pathMatch: 'full' },
          { path: 'step-1', component : Step1RegisterComponent },
          { path: 'step-2', component : Step2RegisterComponent },
          { path: 'step-3', component : Step3RegisterComponent },
          { path: 'step-4', component : Step4RegisterComponent },

        ]
      }
    ]
   },
  { path: 'logout', redirectTo: 'home', pathMatch: 'full'},
  { path         : 'dashboard', 
    component: DashboardComponent,
    canActivate : [ AuthGuard ],
        children: [
          { path: '', redirectTo: 'content-dashboard', pathMatch: 'full' },
          { path: 'content-dashboard', component: ContentDashboardComponent },
          { path: 'investasi',         component: InvestasiComponent },
          { path: 'create-investasi',  component: CreateInvestasiComponent },
          { path: 'penarikan-dana',    component: PenarikanDanaComponent },
          { path: 'pinjaman',          component: PinjamanDashboardComponent },
          { path: 'tambah-dana',       component: TambahDanaComponent }
        ]
  },

  { path: '**',    component: NoContentComponent },
];

// Fail Partial Route
// export * from './routes/app.home.routes';
// export * from './routes/app.dashboard.routes';
// export * from './routes/app.auth.routes';