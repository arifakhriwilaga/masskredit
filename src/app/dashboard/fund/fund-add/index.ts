// module
// import { BrowserModule }                                       from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule  } from '@angular/common';
// import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
// import { RegisterService }                                     from './register.service';
// import { JqueryService }                                     from './jquery.register';


// component fund add
import { FundAddComponent }        from './fund-add.component';

export const routes = [
  { 
    path: '', 
    component: FundAddComponent,
    children : [
      { path: '', redirectTo: 'index' },
      // { path: 'index', component: IndexComponent },
      {    
        path: 'index', 
        loadChildren: () => System.import('./fund-add-index').then((comp: any) => comp.default) 
      },
      {    
        path: 'create', 
        // canActivate : [ AuthGuardVerifyCode],
        loadChildren: () => System.import('./fund-add-create').then((comp: any) => comp.default) 
      },
      {    
        path: 'confirm/:id', 
        // canActivate : [ AuthGuardVerifyCode],
        loadChildren: () => System.import('./fund-add-confirm').then((comp: any) => comp.default) 
      },
      {    
        path: 'detail/:id', 
        // canActivate : [ AuthGuardVerifyCode],
        loadChildren: () => System.import('./fund-add-detail').then((comp: any) => comp.default) 
      },
    ]      
  }     
];

@NgModule({
  declarations: [ FundAddComponent ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ]
})

export default class FundAddModule { 
  static routes = routes;
}