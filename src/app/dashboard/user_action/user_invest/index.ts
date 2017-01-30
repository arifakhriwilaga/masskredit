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
import { UserInvestComponent }        from './user_invest.component';
// import { IndexComponent }        from './index/index.component';

export const routes = [
  { 
      path: '', 
      component: UserInvestComponent,
      children : [
        { path: '', redirectTo: 'index' },
        {    
          path: 'index', 
          loadChildren: () => System.import('./user_invest_index').then((comp: any) => comp.default) 
        },
        {    
          path: 'create', 
          loadChildren: () => System.import('./user_invest_create').then((comp: any) => comp.default) 
        },
        {    
          path: 'detail/:id', 
          loadChildren: () => System.import('./user_invest_detail').then((comp: any) => comp.default) 
        },
      ]      
  }     
];


@NgModule({
  declarations: [
    UserInvestComponent, // declarations LoginComponent
    // IndexComponent
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
      // 
  ]
})

export default class UserInvestModule { 
  static routes = routes;
}