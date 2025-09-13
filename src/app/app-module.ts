import { inject, NgModule, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { DataService } from './svcs/data';
import { Login } from './routes/login/login';
import { Home } from './routes/home/home';

export function initData(ds: DataService) {
  // If init() is async (Promise/Observable), just return it.
  return () => ds.init();
}

@NgModule({
  declarations: [
    App,
    Navbar,
    Login,
    Home,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    DataService,
    provideAppInitializer(() => {
      inject(DataService);
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
