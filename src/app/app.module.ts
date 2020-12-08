import { APP_BASE_HREF } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PageFooterComponent } from '../components/page-footer/page-footer.component';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { AppComponent } from './app.component';

import { HomeComponent } from '../pages/home/home.component';
import { ApiInterceptor } from './api-interceptor';
import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, HttpClientModule, routing],
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    HomeComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
