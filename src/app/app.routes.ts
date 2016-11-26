import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent }   from './no-content';
import { AuthGuard }          from './authguard/auth-guard.service';
import { AuthGuardDashboard }          from './authguard/auth-guard-dashboard.service';

import { HomeComponent }              from './home/home.component';
import { AuthComponent }              from './auth/auth.component';
import { DashboardComponent }         from './dashboard';

import { DataResolver }               from './app.resolver';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent }
  { path: 'home', 	   loadChildren: () => System.import('./home').then((comp: any) => comp.default), },
  { path: 'auth', 	   loadChildren: () => System.import('./auth').then((comp: any) => comp.default), },
  { path: 'dashboard', loadChildren: () => System.import('./dashboard').then((comp: any) => comp.default), },

];