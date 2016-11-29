
// Module
import { CommonModule } 	   		  from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup }         		from '@angular/forms';
import { NgModule }            		from '@angular/core';
import { RouterModule }        		from '@angular/router';
import { DataResolver }           from './app.resolver';

// Auth Guard Dashboard
import { AuthGuard }   from './../authguard/auth-guard.service';

// Component
import { DashboardComponent }   	from './dashboard.component';
import { SidebarComponent }     	from './shared/sidebar';
import { HeaderComponent }     		from './shared/header';
import { ContentComponent }     	from './content';
import { PenarikanDanaComponent } from './penarikan_dana';
import { PinjamanComponent }      from './pinjaman';
import { TambahDanaComponent }    from './tambah_dana';

import { InvestasiComponent }   	from './investasi/investasi.component';
import { IndexComponent }         from './investasi/index/index.component';
import { CreateComponent }        from './investasi/create/create.component';

// Control message create investasi
import { ControlMessagesCreateInvestasi } from './investasi/create/controlmessage.component';
import { ValidationServiceInvestasi } from './investasi/create/validationservice.component';



// Service
import { InvestasiService }     from './investasi/investasi.service';


export const routes = [

  { path: '', component: DashboardComponent,
    canActivate : [ AuthGuard ],
    children: [
      { path: '',             redirectTo: 'content', pathMatch: 'full' },
      { path: 'content',      component: ContentComponent },
      // { path: 'investasi',    component: InvestasiComponent } ,
      { path: 'investasi',    component: InvestasiComponent ,
          children: [
              { path: '',        redirectTo: 'index', pathMatch: 'full' },
              { path: 'index',   component: IndexComponent },
              { path: 'create',  component: CreateComponent },
              
          ]
      },
      // { path: 'content', load: () => System.import('./investasi')
      //   .then((comp: any) => comp.default) 
      // },
      
      // { path: 'investasi', load: () => System.import('./investasi')
      //   .then((comp: any) => comp.default) 
      // },
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
    PenarikanDanaComponent,
    PinjamanComponent,
    TambahDanaComponent,

    InvestasiComponent,
    IndexComponent,
    CreateComponent,

    // message error create investasi
    ControlMessagesCreateInvestasi

  ],
  imports: [ // import Angular's modules
  	// ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [InvestasiService, ValidationServiceInvestasi]
})	


export default class DashboardModule {
  static routes = routes;
}


