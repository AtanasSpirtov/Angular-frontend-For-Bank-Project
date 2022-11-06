import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransactionComponent} from "./transaction/transaction.component";
import {LoginComponent} from "./login/login.component";
import {SearchComponent} from './search/search.component';
import {SuccessfulLoggedInComponent} from "./succesfull-logged-in/successful-logged-in.component";
import {SignUpComponent} from './sign-up/sign-up.component';
import {ErrorPageComponent} from "./error-page/error-page.component";

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
    component: TransactionComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'successfulLoggedIn',
    component: SuccessfulLoggedInComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'errorPage',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
