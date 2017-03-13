// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// component
import { IndexComponent } from './index.component';
import { DetailComponent } from './part/fund-add-detail';
import { FormConfirmComponent } from './part/form-confirm';
import { StructComponent } from './part/form-confirm/part/struct';

import { IndexService } from './index.service';
export const routes = [
  { path:'', component: IndexComponent }
] 

@NgModule({
  declarations: [
    IndexComponent,
    DetailComponent,
    FormConfirmComponent,
    StructComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [IndexService]
})

export default class IndexModule { 
  static routes = routes;
}
