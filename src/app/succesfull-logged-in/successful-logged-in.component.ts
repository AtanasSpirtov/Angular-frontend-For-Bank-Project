import { Component } from '@angular/core';

@Component({
  selector: 'app-successful-logged-in',
  templateUrl: './successful-logged-in.component.html',
  styleUrls: ['./successful-logged-in.component.css']
})
export class SuccessfulLoggedInComponent {

  constructor() {}

  logout() {
    window.localStorage.clear();
  }
}
