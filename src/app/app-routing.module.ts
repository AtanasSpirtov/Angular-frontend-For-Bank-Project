import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionComponent} from "./transaction/transaction.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full',
},
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'transaction',
    component:TransactionComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
