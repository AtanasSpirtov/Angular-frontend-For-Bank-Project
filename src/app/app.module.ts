import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TransactionComponent } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';
import {TransactionService} from "./service/transaction.service";

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
