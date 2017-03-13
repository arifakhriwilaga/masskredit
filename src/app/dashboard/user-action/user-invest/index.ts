// module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule  } from '@angular/common';

// component
import { UserInvestComponent } from './user-invest.component';

export const routes = [
  { 
      path: '', 
      component: UserInvestComponent,
      children : [
        { path: '', redirectTo: 'index' },
        {    
          path: 'index', 
          loadChildren: () => System.import('./user-invest-index').then((comp: any) => comp.default) 
        },
        {    
          path: 'create', 
          loadChildren: () => System.import('./user-invest-create').then((comp: any) => comp.default) 
        },
        {    
          path: 'detail/:id', 
          loadChildren: () => System.import('./user-invest-detail').then((comp: any) => comp.default) 
        },
      ]      
  }     
];


@NgModule({
  declarations: [ UserInvestComponent ],
  imports: [ 
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ ]
})

export default class UserInvestModule { 
  static routes = routes;
}