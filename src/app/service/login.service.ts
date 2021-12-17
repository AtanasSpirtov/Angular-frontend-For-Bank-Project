import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = 'http://localhost:8080';

  login(username: string, password: string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    })
    return this.http.get(`${this.apiUrl}/`,{
      headers,
      responseType:'text' as 'json'
    })
  }
}
