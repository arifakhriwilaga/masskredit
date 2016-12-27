// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { LocalStorageService }   from 'angular-2-local-storage';
import { CommonModule }            from '@angular/common';


// debugger;
// Component
import { EditComponent }        from './edit.component';
// alert("Dari Profile");
export const routes = [
  { path:'', component: EditComponent}
] 

@NgModule({
  declarations: [
    EditComponent, // declarations LoginComponent
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

export default class EditModule { 
  public routes = routes;
}

