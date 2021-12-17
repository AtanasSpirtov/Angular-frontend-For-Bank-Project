import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {Message} from "../model/response/Message";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router , private cookieService: CookieService) {
  }

  message: string = 'shit';

  ngOnInit(): void {
  }

  loginForm(username: string, password: string) {
    this.loginService.login(username, password)
      .subscribe(
        data => {
          this.message = data.message;
        })
    console.log(this.message);
    if (this.message === 'Authenticated Successfully') {
      let successfulUrl = "http://localhost:8080/transaction";
      this.router.navigate([successfulUrl])
    }
  }
}
