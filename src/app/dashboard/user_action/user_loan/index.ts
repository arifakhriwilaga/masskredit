// Module
import { BrowserModule }                                       from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { RouterModule, Routes, ActivatedRoute }                from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { HttpModule }                                          from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder }       from '@angular/forms';
import { CommonModule  }                                       from '@angular/common';
// import { RegisterService }                                     from './register.service';
// import { JqueryService }                                     from './jquery.register';


// Component
import { UserLoanComponent }        from './user_loan.component';
// import { IndexComponent }        from './index/index.component';

export const routes = [
  { 
      path: '', 
      component: UserLoanComponent,
      children : [
        { path: '', redirectTo: 'index' },
        {    
          path: 'index', 
          loadChildren: () => System.import('./user_loan_index').then((comp: any) => comp.default) 
        },
        {    
          path: 'create', 
          loadChildren: () => System.import('./user_loan_create').then((comp: any) => comp.default) 
        },
        {    
          path: 'detail/:id', 
          loadChildren: () => System.import('./user_loan_detail').then((comp: any) => comp.default) 
        },
      ]      
  }     
];


@NgModule({
  declarations: [ UserLoanComponent ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ]
})

export default class UserLoanModule { 
  static routes = routes;
}