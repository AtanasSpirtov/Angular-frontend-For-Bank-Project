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
  createUser(username: string, email: string, password: string) {
    if(username.length == 0 || email.length == 0 || password.length == 0){

    }
    this.user.username = username;
    this.user.email = password;
    this.user.password = email;

    console.log(this.user);
    this.userService.signUp(this.user).subscribe(data => console.log(data));
    // this.router.navigate(['/login'])
  }
}
