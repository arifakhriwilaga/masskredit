// Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { LocalStorageService }   from 'angular-2-local-storage';

// debugger;
// Component
import { DetailComponent } from './detail.component';
import { VerifyComponent } from './verify_component';

export const routes = [
  { path:'', component: DetailComponent},
] 

@NgModule({
  declarations: [
    DetailComponent, // declarations LoginComponent
    VerifyComponent
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  // exports: [LoginComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // LocalStorageService,
    // LoginComponent,
  ]
})

export default class DetailModule { 
  static routes = routes;
}

