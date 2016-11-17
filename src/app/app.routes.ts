import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent } from './no-content';

import { HomeComponent } from './home';
import { ContentComponent } from './home/content';
import { PendanaanComponent } from './home/pendanaan';
import { PinjamanComponent } from './home/pinjaman';

import { AuthComponent } from './auth';
import { LoginComponent } from './auth/login';
import { RegisterComponent } from './auth/register';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent,
    children: [
      { path: '',         redirectTo: 'content' },
      { path: 'content',  component: ContentComponent },
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
  
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];
