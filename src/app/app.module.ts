import { NgModule, ApplicationRef }                            from '@angular/core';
import { BrowserModule }                                       from '@angular/platform-browser';
import { RouterModule, ActivatedRoute, PreloadAllModules }                        from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG }   from 'angular-2-local-storage';
import { HttpModule }                                          from '@angular/http';
import { FormsModule, ReactiveFormsModule }                    from '@angular/forms';
import { CustomFormsModule }                                   from 'ng2-validation'


// Authentication
import { AuthGuard  }                  from './authguard/auth-guard.service';
import { AuthGuardDashboard }          from './authguard/auth-guard-dashboard.service';

// Guard Dashboard
import { AuthGuardEntryDashboard }   from './authguard/auth-guard-entry-dashboard.service';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS }               from './environment';
import { ROUTES }                      from './app.routes';

// App is our top level component
import { AppComponent }                from './app.component';
import { APP_RESOLVER_PROVIDERS }      from './app.resolver';
import { AppState, InternalStateType } from './app.service';

// Verify Email
import { VerifyEmailComponent }          from './verify_email';
import { GlobalService }                 from './global.service';


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
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    VerifyEmailComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules  }),
  ],
  exports: [RouterModule],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    LocalStorageService,
    AuthGuard,
    AuthGuardDashboard,
    AuthGuardEntryDashboard,
    GlobalService,
    
      {
          provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
      }
  ]
})

export class AppModule {
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

