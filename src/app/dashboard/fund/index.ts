// Module
import { NgModule }              from '@angular/core';
import { RouterModule }          from '@angular/router';
import { HttpModule }            from '@angular/http';
import { FormsModule }           from '@angular/forms';
// import { LocalStorageService }   from 'angular-2-local-storage';


// debugger;
// Component
import { FundComponent }        from './fund.component';

export const routes = [
  { 
      path: '', 
      component: FundComponent,
      children : [
        { path: '', redirectTo: 'index' },
        {    
          path: 'index', 
          // canActivate : [ AuthGuardVerifyCode],
          loadChildren: () => System.import('./index').then((comp: any) => comp.default) 
        },
        // {    
        //   path: 'create', 
        //   // canActivate : [ AuthGuardVerifyCode],
        //   loadChildren: () => System.import('./create').then((comp: any) => comp.default) 
        // },
        
        { path:'', redirectTo: 'index' },
      ]      
  }
       
]


@NgModule({
  declarations: [
    FundComponent, // declarations LoginComponent
  ],
  imports: [ // import Angular's modules
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  // exports: [LoginComponent],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // LocalStorageService,
    // LoginComponent,
  ]
})

export default class FundModule { 
  public routes = routes;
}

