import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionComponent} from "./transaction/transaction.component";
import {LoginComponent} from "./login/login.component";
import { SearchComponent } from './search/search.component';
import {SuccessfulLoggedInComponent} from "./succesfull-logged-in/successful-logged-in.component";

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'transaction',
    component:TransactionComponent,
  },
  {
    path: 'search',
    component:SearchComponent,
  },
  {
    path: 'successfulLoggedIn',
    component:SuccessfulLoggedInComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
