// module
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule  } from '@angular/common';

// component fund add
import { FundAddComponent } from './fund-add.component';

export const routes = [
  { 
    path: '', 
    component: FundAddComponent,
    children : [
      { path: '', redirectTo: 'index' },
      {    
        path: 'index', 
        loadChildren: () => System.import('./fund-add-index').then((comp: any) => comp.default) 
      },
      {    
        path: 'create', 
        loadChildren: () => System.import('./fund-add-create').then((comp: any) => comp.default) 
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