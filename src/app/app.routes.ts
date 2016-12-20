import { Routes, RouterModule } from '@angular/router';
import { NoContentComponent }   from './no-content';
import { DataResolver }         from './app.resolver';

// Verify Email
import { VerifyEmailComponent }          from './verify_email';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'coba', component: CobaComponent },
  { path: 'home', 	   loadChildren: () => System.import('./home').then((comp: any) => comp.default), },
  { path: 'auth', 	   loadChildren: () => System.import('./auth').then((comp: any) => comp.default), },
  { path: 'dashboard', loadChildren: () => System.import('./dashboard').then((comp: any) => comp.default), },
  { path: 'verify-email/:access_code', component: VerifyEmailComponent },

];