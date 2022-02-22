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

  ngOnInit(): void {
  }

  loginForm(username: string, password: string) {
    this.loginService.login(username, password)
      .subscribe(
        () => {
          console.log("hello");
          let successfulUrl = '/transaction';
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([successfulUrl]);
          });
        })
  }
}
