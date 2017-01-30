
// Module
import { BrowserModule }                                       from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { RouterModule, Routes, ActivatedRoute }                from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { HttpModule }                                          from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder }       from '@angular/forms';
import { CommonModule  }                                       from '@angular/common';

// Component
import { FundComponent }        from './fund.component';

export const routes = [
  { 
      path: '', 
      component: FundComponent,
      children : [
        { path: '', redirectTo: 'fund-add' },
        {    
          path: 'fund-add', 
          loadChildren: () => System.import('./fund_add').then((comp: any) => comp.default) 
        },
        {    
          path: 'fund-withdrawal', 
          loadChildren: () => System.import('./fund_withdrawal').then((comp: any) => comp.default) 
        },
      ]      
  }     
];


@NgModule({
  declarations: [
    FundComponent, // declarations LoginComponent
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

export default class FundModule { 
  static routes = routes;
}

// export * from './fund.component'; 
