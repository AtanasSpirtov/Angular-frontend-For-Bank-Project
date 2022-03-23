import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from 'rxjs';
import {Message} from "../model/response/Message";
import {Account} from "../model/Account";
import {Options} from "../SecurityAuthorization/Options";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {
  }
  private readonly apiUrl = 'http://localhost:8080';

  // createAccount$ = (account: Account) => <Observable<Message>>this.http.post<Message>
  // (`${this.apiUrl}/accountManaging/create` , account , Options.options);
  //
  // deleteAccount$ = (name: string) => <Observable<Message>>this.http.post<Message>
  // (`${this.apiUrl}/accountManaging/delete` , name , Options.options);
  //
  // accountById$ = (id: number) => <Observable<Message>>this.http.get<Message>
  // (`${this.apiUrl}/accountManaging/accountById?${id}` , Options.options);

  getAccountByName(accountName: string) {
    return this.http.get<Account>(`${this.apiUrl}/accountManaging/accountByName/${accountName}`, Options.options)
  }
}
