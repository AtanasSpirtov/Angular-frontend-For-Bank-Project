import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Message} from "../model/response/Message";
import {Observable} from "rxjs";
import {Options} from "../SecurityAuthorization/Options";
import {LoggedUser, User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  private readonly apiUrl = 'http://localhost:8080';

  login(username: string, password: string, email: string): Observable<string> {
    let user = new LoggedUser(username, password, email)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'User-Information': JSON.stringify(user)
    })
    return this.http.get<string>(`${this.apiUrl}/login`, {headers})
  }

  logout() {
    window.localStorage.clear();
    return this.http.get<Message>(`${this.apiUrl}/loggingOut`, Options.options).subscribe(data => console.log(data));
  }

  signUp(user: User) {
    const JSONObject = JSON.stringify(user);
    return this.http.post<Message>(`${this.apiUrl}/user/create`, JSONObject, Options.options);
  }
}
