// Module
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { HttpModule }                                          from '@angular/http';
import { FormsModule, ReactiveFormsModule }                    from '@angular/forms';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG }   from 'angular-2-local-storage';
// import { AuthResolve }     from './authguard/auth-resolve.service';




// Configuration Angular Webpack 
// Platform and Environment providers/directives/pipes
import { ENV_PROVIDERS }     from './../../environment';
// import { ROUTESAUTH }        from './../../routes/app.auth.routes';
// import { ROUTESHOME }        from './../../routes/app.home.routes';
// import { ROUTESDASHBOARD }   from './../../routes/app.dashboard.routes';

// App is our top level component
import { APP_RESOLVER_PROVIDERS }      from './../../app.resolver';
import { AppState, InternalStateType } from './../../app.service';



// Component
// Register
import { RegisterComponent }  from './register.component';
import { Step1RegisterComponent }     from './step1';
import { Step2RegisterComponent }     from './step2';
import { Step3RegisterComponent }     from './step3';
import { Step4RegisterComponent }     from './step4';
import { AuthComponent }              from './../auth.component';
import { FooterAuthComponent } from './../shared/footer/footer.component';
import { HeaderAuthComponent } from './../shared/header/header.component';
import { XLargeAuth } from './../x-large/x-large.directive';

// Config LocalStorage
let localStorageServiceConfig = {
  prefix: 'my-app',
  storageType : 'sessionStorage' 
}

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ RegisterComponent ],
  declarations: [
    RegisterComponent, // declarations LoginComponent
    Step1RegisterComponent,
    Step2RegisterComponent,
    Step3RegisterComponent,
    Step4RegisterComponent,
    AuthComponent,
    XLargeAuth,
    HeaderAuthComponent,
    FooterAuthComponent,

  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    FormsModule,
    // RouterModule.forRoot(ROUTESAUTH, { useHash: true })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    LocalStorageService,
    // AuthResolve,
      {
          provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
      }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class RegisterModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

