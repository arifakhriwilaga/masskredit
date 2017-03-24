import { Component, ViewEncapsulation } from '@angular/core';

import { AppState }   from './app.service';

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
})

export class AppComponent {

  angularclassLogo = '';
  name = 'Mass Credit';
  url = '';

  constructor(public appState: AppState) { }
  
  ngOnInit() { console.log('Initial App State', this.appState.state); }

}
