import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from 'rxjs';
import {Message} from "../entities/response/Message";
import {Account} from "../entities/Account";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http: HttpClient) {
  }
  private readonly apiUrl = 'http://localhost:8080';
  createAccount$ = (account: Account) => <Observable<Message>>this.http.post<Message>
  (`${this.apiUrl}/accountManaging/create` , account);

  deleteAccount$ = (name: string) => <Observable<Message>>this.http.post<Message>
  (`${this.apiUrl}/accountManaging/delete` , name);

  accountById$ = (id: number) => <Observable<Message>>this.http.get<Message>
  (`${this.apiUrl}/accountManaging/accountById?${id}`);

}
