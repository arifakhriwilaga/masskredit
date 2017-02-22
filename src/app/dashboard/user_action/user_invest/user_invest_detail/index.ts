// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { LocalStorageService }   from 'angular-2-local-storage';

// component
import { DetailComponent } from './detail.component';
import { VerifyComponent } from './verify_component';

export const routes = [
  { path:'', component: DetailComponent },
  {    
    path: 'loan-approved/:id', 
    loadChildren: () => System.import('./loan_approved').then((comp: any) => comp.default) 
  },
  {    
    path: 'loan-not-been-approved/:id', 
    loadChildren: () => System.import('./loan_not_been_approved').then((comp: any) => comp.default) 
  },

] 

@NgModule({
  declarations: [ 
    DetailComponent, 
    VerifyComponent 
  ],
  imports: [
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [ ]
})

export default class DetailModule { 
  static routes = routes;
}

