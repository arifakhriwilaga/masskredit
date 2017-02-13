// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// component verify
import { VerifyCodeComponent }       from './verify-code.component';

export const routes = [{ path: '', component: VerifyCodeComponent}]

@NgModule({
  declarations: [VerifyCodeComponent,],
  imports: [
    RouterModule.forChild(routes),
    HttpModule,
    FormsModule,
  ],
  providers: [ ],
})

export default class VerifyCodeModule { 
  static routes = routes
}

