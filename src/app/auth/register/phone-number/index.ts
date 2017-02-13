// module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// component phone-number
import { PhoneNumberComponent } from './phone-number.component';

export const routes = [{ path: '', component: PhoneNumberComponent}]

@NgModule({
  declarations: [PhoneNumberComponent],
  imports: [
    RouterModule.forChild(routes),
    HttpModule,
    FormsModule,
  ],
  providers: [ ],
})

export default class PhoneNumberModule { 
  static routes = routes
}

