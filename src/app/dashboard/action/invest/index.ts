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
import { InvestComponent }        from './invest.component';
// import { IndexComponent }        from './index/index.component';

export const routes = [
  { 
      path: '', 
      component: InvestComponent,
      children : [
        { path: '', redirectTo: 'index' },
        // { path: 'index', component: IndexComponent },
        {    
          path: 'index', 
          loadChildren: () => System.import('./invest_index').then((comp: any) => comp.default) 
        },
        {    
          path: 'create', 
          // canActivate : [ AuthGuardVerifyCode],
          loadChildren: () => System.import('./invest_create').then((comp: any) => comp.default) 
        },
        {    
          path: 'detail/:id', 
          // canActivate : [ AuthGuardVerifyCode],
          loadChildren: () => System.import('./invest_detail').then((comp: any) => comp.default) 
        },
      ]      
  }     
];


@NgModule({
  declarations: [
    InvestComponent, // declarations LoginComponent
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

export default class InvestModule { 
  static routes = routes;
}