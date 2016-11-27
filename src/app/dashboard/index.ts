
// Module
import { CommonModule } 	   		from '@angular/common';
import { FormsModule }         		from '@angular/forms';
import { NgModule }            		from '@angular/core';
import { RouterModule }        		from '@angular/router';

// Auth Guard Dashboard
import { AuthGuard }   from './../authguard/auth-guard.service';

// Component
import { DashboardComponent }   	from './dashboard.component';
import { SidebarComponent }     	from './shared/sidebar';
import { HeaderComponent }     		from './shared/header';
import { ContentComponent }     	from './content';
import { InvestasiComponent }   	from './investasi';
import { PenarikanDanaComponent }   from './penarikan_dana';
import { PinjamanComponent }   		from './pinjaman';
import { TambahDanaComponent }   from './tambah_dana';


export const routes = [
  { path: '', component: DashboardComponent,
  	canActivate : [ AuthGuard ],
    children: [
      { path: '',         	    redirectTo: 'content', pathMatch: 'full' },
      { path: 'content',    	component: ContentComponent },
      { path: 'investasi', 		component: InvestasiComponent}, 
      { path: 'pinjaman', 		component: PinjamanComponent}, 
      { path: 'penarikan-dana', component: PenarikanDanaComponent}, 
      { path: 'tambah-dana', 	component: TambahDanaComponent}, 
    ]
  },
];
 

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    InvestasiComponent,
    PenarikanDanaComponent,
    PinjamanComponent,
    TambahDanaComponent


  ],
  imports: [ // import Angular's modules
  	CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})	


export default class DashboardModule {
  static routes = routes;
}


