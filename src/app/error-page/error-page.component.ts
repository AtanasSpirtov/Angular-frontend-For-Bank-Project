import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent{

  constructor(private userService: UserService, private router: Router) { }

  toLoginPage() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
