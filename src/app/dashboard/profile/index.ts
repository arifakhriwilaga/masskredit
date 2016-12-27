// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { LocalStorageService }   from 'angular-2-local-storage';
import { CommonModule }          from '@angular/common';


// debugger;
// Component
import { ProfileComponent }        from './profile.component';
// alert("Dari Profile");
export const routes = [
  { path:'', component: ProfileComponent},
  { path:'edit', loadChildren: () => System.import('./edit').then((comp: any) => comp.default)} 

] 

@NgModule({
  declarations: [
    ProfileComponent, // declarations LoginComponent
  ],
  imports: [ // import Angular's modules
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),

  ],
  // exports: [LoginComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    LocalStorageService,
    // LoginComponent,
  ]
})

export default class ProfileModule { 
  public routes = routes;
}

