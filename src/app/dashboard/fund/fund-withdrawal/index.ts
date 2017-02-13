// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component fund-withdrawal
import { FundWithdrawalComponent } from './fund-withdrawal.component';

export const routes = [
  { 
    path: '', 
    component: FundWithdrawalComponent,
    children : [
      { path: '', redirectTo: 'index' },
      // { path: 'index', component: IndexComponent },
      {    
        path: 'index', 
        loadChildren: () => System.import('./fund-withdrawal-index').then((comp: any) => comp.default) 
      },
      {    
        path: 'create', 
        // canActivate : [ AuthGuardVerifyCode],
        loadChildren: () => System.import('./fund-withdrawal-create').then((comp: any) => comp.default) 
      },
      {    
        path: 'detail/:id', 
        // canActivate : [ AuthGuardVerifyCode],
        loadChildren: () => System.import('./fund-withdrawal-detail').then((comp: any) => comp.default) 
      },
      {    
        path: 'confirm', 
        // canActivate : [ AuthGuardVerifyCode],
        loadChildren: () => System.import('./fund-withdrawal-confirm').then((comp: any) => comp.default) 
      },
    ]      
  }     
] 

@NgModule({
  declarations: [FundWithdrawalComponent],
  imports: [ 
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})

export default class FundWithdrawalModule { 
  static routes = routes;
}

