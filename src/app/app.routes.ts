import { Routes } from '@angular/router';

// Guard Dashboard
import { AuthGuardEntryDashboard }   from './authguard/auth-guard-entry-dashboard.service';

// Verify Email
import { VerifyEmailComponent }          from './verify_email';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', 	   
    loadChildren: () => System.import('./home').then((comp: any) => comp.default) 
  },
  { path: 'auth',
    loadChildren: () => System.import('./auth').then((comp: any) => comp.default) 
  },
  { 
  	path: 'dashboard', 
  	loadChildren: () => System.import('./dashboard').then((comp: any) => comp.default) 
  },

  //route for verify-email 
  // { path: 'verify-email/:access_code', component: VerifyEmailComponent },

];