import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { TransactionComponent } from './transaction/transaction.component';
import { LoginComponent } from './login/login.component';
import {BasicHttpInterceptorService} from "./service/basic-http-interceptor.service";
import { SearchComponent } from './search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SuccessfulLoggedInComponent } from './succesfull-logged-in/successful-logged-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    LoginComponent,
    SearchComponent,
    SuccessfulLoggedInComponent,
    SignUpComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:BasicHttpInterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
