// module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// guard dashboard
import { AuthGuardDashboard } from './../auth-guard/auth-guard-dashboard.service';

// home component
import { HomeComponent } from './home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContentComponent } from './content';
import { PendanaanComponent } from './pendanaan';
import { PinjamanComponent } from './pinjaman';

// routes home base
export const routes = [
	{ path: '', component: HomeComponent,
    canActivate : [ AuthGuardDashboard ],
	    children: [
	      { path: '', redirectTo: 'content' },
	      { path: 'content', component: ContentComponent },
	      { path: 'pendanaan', component: PendanaanComponent },
	      { path: 'pinjaman', component: PinjamanComponent }, 

	    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    PendanaanComponent,
    PinjamanComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
})

export default class HomeModule {
	public routes = routes;
}