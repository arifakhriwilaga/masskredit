// Module
import { BrowserModule }                                       from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { RouterModule, Routes, ActivatedRoute }                from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { HttpModule }                                          from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder }       from '@angular/forms';
import { CommonModule  }                                       from '@angular/common';

// Component
import { UserActionComponent }     from './user_action.component';

import { UserActionService }     from './user_action.service';

// routing
export const routes = [
  { path: '',    component: UserActionComponent ,
      children: [
        { path: '', redirectTo: 'user-invest' },
        {    
          path: 'user-invest', 
          loadChildren: () => System.import('./user_invest').then((comp: any) => comp.default) 
        },
        {    
          path: 'user-loan', 
          loadChildren: () => System.import('./user_loan').then((comp: any) => comp.default) 
        },
      ]
  },
];
 

/* modul */
@NgModule({
  declarations: [ UserActionComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [ UserActionService ]
})	


export default class UserActionModule {
  static routes = routes;
}


