// Module
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';
import { UserService } from './user.service';


// Auth Guard Dashboard
import { AuthGuard } from './../authguard/auth-guard.service';

// Component
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './shared/sidebar';
import { HeaderComponent } from './shared/header';
import { LoaderComponent } from './loader';
import { SignOutComponent } from './sign-out';

export const routes = [
  { path: '', component: DashboardComponent,
    // canActivate : [ AuthGuard ],
    children: [
      { path: '', component: LoaderComponent },
      { path: 'profile',         loadChildren: () => System.import('./profile').then((comp: any) => comp.default) },
      { path: 'fund',            loadChildren: () => System.import('./fund').then((comp: any) => comp.default) },
      { path: 'complement-user', loadChildren: () => System.import('./complement_user').then((comp: any) => comp.default) },
      { path: 'user-action', loadChildren: () => System.import('./user_action').then((comp: any) => comp.default) },
      { path: 'other-user-action', loadChildren: () => System.import('./other_user_action').then((comp: any) => comp.default) },  
      { path: 'sign-out',       component: SignOutComponent},       
    ]
  },
];
 
@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    LoaderComponent,
    SignOutComponent, 
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [UserService]
})	

export default class DashboardModule {
  static routes = routes;
}