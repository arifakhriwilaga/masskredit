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
import { FundAddComponent }        from './fund_add.component';
// import { IndexComponent }        from './index/index.component';

export const routes = [
  { 
      path: '', 
      component: FundAddComponent,
      children : [
        { path: '', redirectTo: 'index' },
        // { path: 'index', component: IndexComponent },
        {    
          path: 'index', 
          loadChildren: () => System.import('./fund_add_index').then((comp: any) => comp.default) 
        },
        {    
          path: 'create', 
          // canActivate : [ AuthGuardVerifyCode],
          loadChildren: () => System.import('./fund_add_create').then((comp: any) => comp.default) 
        },
        {    
          path: 'confirm/:id', 
          // canActivate : [ AuthGuardVerifyCode],
          loadChildren: () => System.import('./fund_add_confirm').then((comp: any) => comp.default) 
        },
        {    
          path: 'detail/:id', 
          // canActivate : [ AuthGuardVerifyCode],
          loadChildren: () => System.import('./fund_add_detail').then((comp: any) => comp.default) 
        },
      ]      
  }     
];


@NgModule({
  declarations: [
    FundAddComponent, // declarations LoginComponent
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

export default class FundAddModule { 
  static routes = routes;
}

// export * from './fund.component'; 
