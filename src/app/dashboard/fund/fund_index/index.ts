// export * from './index.component';
// // Module
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule }  from '@angular/common';
// import { PaginationModule } from 'ng2-bootstrap';
// import { LocalStorageService }   from 'angular-2-local-storage';

 
// debugger;
// Component
import { IndexComponent } from './index.component';

export const routes = [
  { path:'', component: IndexComponent }
] 

@NgModule({
  declarations: [
    IndexComponent, // declarations LoginComponent
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    // PaginationModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  // exports: [LoginComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // 
  ]
})

export default class IndexModule { 
  static routes = routes;
}
