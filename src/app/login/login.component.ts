import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
  }

  message: any;

  ngOnInit(): void {
  }

  loginForm(username: string, password: string) {
    this.loginService.login(username, password)
      .subscribe(
        data => {
          console.log('Success: ', data);
        },
        error => {
          console.log('Error: ', error);
        })
    if (this.message.equal("authenticated successfully")) {
      let successfulUrl = "http://localhost:8080/transaction";
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([successfulUrl]);
      });
    }
  }
}
