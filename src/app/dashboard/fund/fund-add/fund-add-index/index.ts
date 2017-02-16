// module
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule }  from '@angular/common';
// import { PaginationModule } from 'ng2-bootstrap';
// import { LocalStorageService }   from 'angular-2-local-storage';

// component
import { IndexComponent } from './index.component';
import { FormConfirmComponent } from './form-confirm';


export const routes = [
  { path:'', component: IndexComponent }
] 

@NgModule({
  declarations: [
    IndexComponent,
    FormConfirmComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ]
})

export default class IndexModule { 
  static routes = routes;
}
