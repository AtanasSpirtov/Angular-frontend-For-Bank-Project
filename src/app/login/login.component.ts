import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: UserService, private router: Router) {
  }

  loginForm(username: string, password: string, email: string) {
    if (window.localStorage.getItem("token") != null) {
      window.localStorage.clear()
    }
    this.loginService.login(username, password, email)
      .subscribe(
        () => {
          let successfulUrl = '/successfulLoggedIn';
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([successfulUrl]);
          });
        })

  }
}
