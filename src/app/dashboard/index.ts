
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
import { TambahDanaComponent }    from './tambah_dana';
import { SignOutComponent }       from './sign-out';

// Investasi
import { InvestasiComponent }     from './investasi/investasi.component';
import { IndexInvestComponent }         from './investasi/index/index.component';
import { CreateInvestComponent }        from './investasi/create/create.component';


// Investasi
import { PinjamanComponent }      from './pinjaman';
import { IndexLoanComponent }     from './pinjaman/index/index.component';
import { DetailComponent }     from './pinjaman/detail';
// import { CreateLoanComponent }    from './pinjaman/create/create.component';


// Control message create investasi
import { ControlMessagesCreateInvestasi } from './investasi/create/controlmessage.component';
import { ValidationServiceInvestasi } from './investasi/create/validationservice.component';



// Service
import { InvestasiService }     from './investasi/investasi.service';


export const routes = [

  { path: '', component: DashboardComponent,
    // canActivate : [ AuthGuard ],
    children: [
      { path: '',             redirectTo: 'content', pathMatch: 'full' },
      { path: 'content',      component: ContentComponent },
      // { path: 'investasi',    component: InvestasiComponent } ,
      { path: 'investasi',    component: InvestasiComponent ,
          children: [
              { path: '',        redirectTo: 'index', pathMatch: 'full' },
              { path: 'index',   component: IndexInvestComponent },
              { path: 'create',  component: CreateInvestComponent },
              
          ]
      },
      // { path: 'content', load: () => System.import('./investasi')
      //   .then((comp: any) => comp.default) 
      // },
      
      // { path: 'investasi', load: () => System.import('./investasi')
      //   .then((comp: any) => comp.default) 
      // },
      { path: 'pinjaman', 		  component: PinjamanComponent,
        children: [
              { path: '',          redirectTo: 'index', pathMatch: 'full' },
              { path: 'index',     component: IndexLoanComponent },
              { path: 'detail/:id',component: DetailComponent },
              
              // { path: 'create',  component: CreateComponent },
              
        ]
      }, 
      { path: 'penarikan-dana', component: PenarikanDanaComponent}, 
      { path: 'tambah-dana', 	  component: TambahDanaComponent}, 
      { path: 'sign-out',       component: SignOutComponent}, 

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
    SignOutComponent, 
    InvestasiComponent,
    IndexInvestComponent,
    CreateInvestComponent,
    IndexLoanComponent,
    DetailComponent,

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


