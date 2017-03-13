// module
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';

import { DashboardService } from './dashboard.service';
// Auth Guard Dashboard
// import { AuthGuard } from './../authguard/auth-guard.service';

// Component
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './shared/header';
import { FirstComponent } from './shared/header/first';
import { SecondComponent } from './shared/header/second';
import { ThirdComponent } from './shared/header/third';
import { LoaderComponent } from './loader';
import { SignOutComponent } from './sign-out';

export const routes = [
  { path: '', component: DashboardComponent,
    // canActivate : [ AuthGuard ],
    children: [
      { path: '', component: LoaderComponent },
      { path: 'market', loadChildren: () => System.import('./market').then((comp: any) => comp.default) },
      { path: 'profile', loadChildren: () => System.import('./profile').then((comp: any) => comp.default) },
      { path: 'fund', loadChildren: () => System.import('./fund').then((comp: any) => comp.default) },
      { path: 'user-action', loadChildren: () => System.import('./user-action').then((comp: any) => comp.default) },
      { path: 'other-user-action', loadChildren: () => System.import('./other-user-action').then((comp: any) => comp.default) },  
      { path: 'sign-out', component: SignOutComponent},       
    ]
  },
];
 
@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    LoaderComponent,
    SignOutComponent, 
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [DashboardService]
})	

export default class DashboardModule {
  static routes = routes;
}