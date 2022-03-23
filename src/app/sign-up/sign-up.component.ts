import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{

  constructor(private router: Router) { }


  createUser(username: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement) {
    String(username);String(email);String(password);
    this.router.navigate(['/login'])
  }
}
