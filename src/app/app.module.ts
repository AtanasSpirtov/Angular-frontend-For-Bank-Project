import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { TransactionComponent } from './transaction/transaction.component';
import {TransactionService} from "./service/transaction.service";
import { LoginComponent } from './login/login.component';
import {CookieService} from "ngx-cookie-service";
import {BasicHttpInterceptorService} from "./service/basic-http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:BasicHttpInterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
