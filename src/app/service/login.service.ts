import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Message} from "../model/response/Message";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  private readonly apiUrl = 'http://localhost:8080';

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    })
    return this.http.get<Message>(`${this.apiUrl}/`, {headers}).pipe(map(
        userData => {
          localStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          localStorage.setItem('basicauth', authString);

          let expDate = new Date(Date.now());
          expDate.setHours(expDate.getHours() + 1);
          localStorage.setItem('expirationTime', `${expDate}`);
          return userData;
        }
      )
    )
  }
}
