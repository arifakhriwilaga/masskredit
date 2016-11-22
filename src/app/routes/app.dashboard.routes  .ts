import { Routes, RouterModule } from '@angular/router';
// import { NoContentComponent }   from './no-content';
// import { AuthResolve }          from './authguard/auth-resolve.service';

// Base Dashboard
import { DashboardComponent }         from './../dashboard';
import { ContentDashboardComponent }  from './../dashboard/content';
import { InvestasiComponent }         from './../dashboard/investasi';
import { CreateInvestasiComponent }   from './../dashboard/investasi/create';
import { PenarikanDanaComponent }     from './../dashboard/penarikan_dana';
import { PinjamanDashboardComponent } from './../dashboard/pinjaman';
import { TambahDanaComponent }        from './../dashboard/tambah_dana';

import { DataResolver }               from './../app.resolver';


export const ROUTESDASHBOARD: Routes = [
  { path: 'logout', redirectTo: 'home', pathMatch: 'full'},
  { path         : 'dashboard', component: DashboardComponent,
    // canActivate : [ AuthResolve ],
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

  // { path: '**',    component: NoContentComponent },
];
