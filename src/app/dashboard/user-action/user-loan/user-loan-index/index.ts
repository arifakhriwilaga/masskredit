// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component
import { IndexComponent } from './index.component';

import { IndexService } from './index.service';
export const routes = [
  { path:'', component: IndexComponent }
] 

@NgModule({
  declarations: [ IndexComponent ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ IndexService ]
})

export default class IndexModule { 
  static routes = routes;
}
