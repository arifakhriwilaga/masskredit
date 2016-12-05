// Module
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';

// Guard Dashboard
import { AuthGuardDashboard }   from './../authguard/auth-guard-dashboard.service';

// Home Component
import { HomeComponent }  		  from './home.component';
import { FooterComponent }      from './shared/footer/footer.component';
import { HeaderComponent }      from './shared/header/header.component';
import { ContentComponent }     from './content';
import { PendanaanComponent }   from './pendanaan';
import { PinjamanComponent }    from './pinjaman';


// Routes Home Base
export const routes = [
	{ path: '', component: HomeComponent,
  canActivate : [ AuthGuardDashboard ],
	    children: [
	      { path: '',           redirectTo: 'content' },
	      { path: 'content', 	  component: ContentComponent },
	      { path: 'pendanaan',  component: PendanaanComponent },
	      { path: 'pinjaman',   component: PinjamanComponent }, 

	    ]
  }
];


@NgModule({
  declarations: [ // declare component for base home
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    PendanaanComponent,
    PinjamanComponent
  ],
  imports: [ // import Angular's modules
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
})

export default class HomeModule {
	public routes = routes;
}

