// Module
import { BrowserModule }                                       from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { RouterModule, Routes, ActivatedRoute }                from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { HttpModule }                                          from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder }       from '@angular/forms';
import { CommonModule  }                                       from '@angular/common';

// Component
import { ActionComponent }     from './action.component';

import { ActionService }     from './action.service';

// routing
export const routes = [
  { path: '',    component: ActionComponent ,
      children: [
        { path: '', redirectTo: 'invest' },
        {    
          path: 'invest', 
          loadChildren: () => System.import('./invest').then((comp: any) => comp.default) 
        },
        {    
          path: 'loan', 
          // canActivate : [ AuthGuardVerifyCode],
          loadChildren: () => System.import('./loan').then((comp: any) => comp.default) 
        },
      ]
  },
];
 

/* modul */
@NgModule({
  declarations: [
    ActionComponent
  ],
  imports: [ // import Angular's modules
  	// ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  // providers: [InvestasiService, ValidationServiceInvestasi]
  
  providers: [ActionService]
})	


export default class ActionModule {
  static routes = routes;
}


