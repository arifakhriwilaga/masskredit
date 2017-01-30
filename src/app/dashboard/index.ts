// Module
import { CommonModule } 	   		  from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup }         		from '@angular/forms';
import { NgModule }            		from '@angular/core';
import { RouterModule }        		from '@angular/router';
import { DataResolver }           from './app.resolver';

// Auth Guard Dashboard
import { AuthGuard }   from './../authguard/auth-guard.service';

// import { GlobalService }                 from './../global.service';

// Component
import { DashboardComponent }   	from './dashboard.component';
import { SidebarComponent }     	from './shared/sidebar';
import { HeaderComponent }     		from './shared/header';
import { ContentComponent }     	from './content';
import { SignOutComponent }       from './sign-out';

// Pinjaman
// import { PinjamanComponent }      from './pinjaman';
// import { IndexLoanComponent }     from './pinjaman/index/index.component';
// import { DetailComponent }     from './pinjaman/detail';
// import { CreateLoanComponent }    from './pinjaman/create/create.component';

// Completement USer
// import { ComplementComponent }     from './complement_user';
import { JobComponent }     from './complement_user/job';
import { BusinessComponent }     from './complement_user/business';

export const routes = [

  { path: '', component: DashboardComponent,
    // canActivate : [ AuthGuard ],
    children: [
      { path: '', component: ContentComponent },
      // { path: 'content',       },
      { path: 'profile',         loadChildren: () => System.import('./profile').then((comp: any) => comp.default) },
      { path: 'fund',            loadChildren: () => System.import('./fund').then((comp: any) => comp.default) },
      { path: 'complement-user', loadChildren: () => System.import('./complement_user').then((comp: any) => comp.default) },
      { path: 'action', loadChildren: () => System.import('./action').then((comp: any) => comp.default) },
      { path: 'user-action', loadChildren: () => System.import('./user_action').then((comp: any) => comp.default) },
      
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
    SignOutComponent, 
   
    // message error create investasi
  ],
  imports: [ // import Angular's modules
  	// ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: []
})	


export default class DashboardModule {
  static routes = routes;
}


