// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
import { CommonModule }          from '@angular/common';
// import { LocalStorageService }   from 'angular-2-local-storage';


// debugger;
// Component
import { FundWithdrawalComponent }        from './fund_withdrawal.component';

export const routes = [
  { 
      path: '', 
      component: FundWithdrawalComponent,
      children : [
        { path: '', redirectTo: 'index' },
        // { path: 'index', component: IndexComponent },
        {    
          path: 'index', 
          loadChildren: () => System.import('./fund_withdrawal_index').then((comp: any) => comp.default) 
        },
        {    
          path: 'create', 
          // canActivate : [ AuthGuardVerifyCode],
          loadChildren: () => System.import('./fund_withdrawal_create').then((comp: any) => comp.default) 
        },
        {    
          path: 'detail/:id', 
          // canActivate : [ AuthGuardVerifyCode],
          loadChildren: () => System.import('./fund_withdrawal_detail').then((comp: any) => comp.default) 
        },
        {    
          path: 'confirm', 
          // canActivate : [ AuthGuardVerifyCode],
          loadChildren: () => System.import('./fund_withdrawal_confirm').then((comp: any) => comp.default) 
        },
      ]      
  }     
] 

@NgModule({
  declarations: [
    FundWithdrawalComponent, // declarations LoginComponent
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  // exports: [LoginComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // LocalStorageService,
    // LoginComponent,
  ]
})

export default class FundWithdrawalModule { 
  static routes = routes;
}

