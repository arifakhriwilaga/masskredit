// module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// guard dashboard
import { AuthGuardDashboard } from './../auth-guard/auth-guard-dashboard.service';

// component
import { AuthComponent } from './auth.component';
import { FooterComponent } from './shared/footer';

const routes = [
  { 
    path: '', 
    component: AuthComponent,
    // canActivate : [ AuthGuardDashboard ],
    children: [
      {  
        path: 'register', 
        loadChildren: () => System.import('./register').then((comp: any) => comp.default) 
      },
 
    ]
  },
];
 
@NgModule({
  declarations: [
    AuthComponent,
    FooterComponent,
  ],
  imports: [
  	CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
})	

export default class AuthModule {
  public routes = routes;
}


