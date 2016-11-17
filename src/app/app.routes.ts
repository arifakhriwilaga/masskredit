import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';

// Base Home
import { HomeComponent } from './home';
import { ContentComponent } from './home/content';
import { PendanaanComponent } from './home/pendanaan';
import { PinjamanComponent } from './home/pinjaman';

//  Base Auth
import { AuthComponent } from './auth';
import { LoginComponent } from './auth/login';
import { RegisterComponent } from './auth/register';

// Base Dashboard
import { DashboardComponent } from './dashboard';
import { ContentDashboardComponent } from './dashboard/content';
import { InvestasiComponent } from './dashboard/investasi';
import { PenarikanDanaComponent } from './dashboard/penarikan_dana';
import { PinjamanDashboardComponent } from './dashboard/pinjaman';
import { TambahDanaComponent } from './dashboard/tambah_dana';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent,
    children: [
      { path: '',         redirectTo: 'content-home' },
      { path: 'content-home',  component: ContentComponent },
      { path: 'pendanaan',  component: PendanaanComponent },
      { path: 'pinjaman',  component: PinjamanComponent },

    ] 
  },
  { path: 'auth', component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
   },

   { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'content-dashboard', pathMatch: 'full' },
      { path: 'content-dashboard', component: ContentDashboardComponent },
      { path: 'investasi', component: InvestasiComponent },
      { path: 'penarikan-dana', component: PenarikanDanaComponent },
      { path: 'pinjaman', component: PinjamanDashboardComponent },
      { path: 'tambah-dana', component: TambahDanaComponent }
    ]
   },
  
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];
