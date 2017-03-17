import { Component, ViewEncapsulation } from '@angular/core';

import { AppState }   from './app.service';

@Component({
  selector: 'app',
  // encapsulation: ViewEncapsulation.None,
  // styleUrls: ['./app.component.css'],
  template: '<router-outlet></router-outlet>',
})

export class AppComponent {

  angularclassLogo = '';
  name = 'Mass Credit';
  url = '';

  constructor(public appState: AppState) { }
  
  ngOnInit() { console.log('Initial App State', this.appState.state); }

}
