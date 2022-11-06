import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from 'rxjs';
import {Message} from "../model/response/Message";
import {AccountDTO} from "../model/AccountDTO";
import {Options} from "../SecurityAuthorization/Options";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {
  }
  private readonly apiUrl = 'http://localhost:8080';

  getAccountByName(accountName: string) {
    return this.http.get<AccountDTO>(`${this.apiUrl}/accountManaging/accountByName/${accountName}`, Options.options)
  }
}
