// module
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule }  from '@angular/common';

// component
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
