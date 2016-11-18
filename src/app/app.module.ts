import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

// Component Auth
import { AuthComponent } from './auth';
import { LoginComponent }      from './auth/login';
import { RegisterComponent }   from './auth/register';
import { FooterAuthComponent } from './auth/shared/footer';
import { HeaderAuthComponent } from './auth/shared/header';
import { XLargeAuth } from './auth/x-large';

// Component Home
import { NoContentComponent } from './no-content';
import { HomeComponent } from './home';
import { ContentComponent } from './home/content';
import { PendanaanComponent } from './home/pendanaan';
import { PinjamanComponent } from './home/pinjaman';
import { FooterComponent } from './home/shared/footer';
import { HeaderComponent } from './home/shared/header';
import { XLarge } from './home/x-large';

// Base Dashboard
import { DashboardComponent } from './dashboard';
import { ContentDashboardComponent } from './dashboard/content';
import { InvestasiComponent } from './dashboard/investasi';
import { CreateInvestasiComponent }   from './dashboard/investasi/create';
import { PenarikanDanaComponent } from './dashboard/penarikan_dana';
import { PinjamanDashboardComponent } from './dashboard/pinjaman';
import { TambahDanaComponent } from './dashboard/tambah_dana';
import { SidebarDashboardComponent } from './dashboard/shared/sidebar';
import { HeaderDashboardComponent } from './dashboard/shared/header';
import { XLargeDashboard } from './dashboard/x-large';


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
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,

    // Home Component
    HomeComponent,
    NoContentComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    PendanaanComponent,
    PinjamanComponent,

    // Auth Component
    AuthComponent,
    XLargeAuth,
    HeaderAuthComponent,
    FooterAuthComponent,
    LoginComponent,
    RegisterComponent,

    //  DashboardComponent,
    DashboardComponent,
    XLargeDashboard,
    HeaderDashboardComponent,
    SidebarDashboardComponent,
    ContentDashboardComponent,
    InvestasiComponent,
    CreateInvestasiComponent,
    PenarikanDanaComponent,
    PinjamanDashboardComponent,
    TambahDanaComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
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

