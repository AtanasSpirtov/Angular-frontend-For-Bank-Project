import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {User} from "../model/User";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private router: Router, private userService: UserService) {
  }

  private user: User = <User>{};
  errorMessage = null
  createUser(username: string, email: string, password: string) {
    if(username.length == 0 || email.length == 0 || password.length == 0){

    }
    this.user.username = username;
    this.user.email = email;
    this.user.password = password;

    this.userService.signUp(this.user).subscribe(() => this.router.navigate(['/login']), error => {
      console.log("error")
      this.errorMessage = error.message;
    });
  }
}
