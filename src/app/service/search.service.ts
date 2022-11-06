import {Injectable} from '@angular/core';
import {TransactionDTO} from "../model/TransactionDTO";
import {Options} from "../SecurityAuthorization/Options";
import {HttpClient} from "@angular/common/http";
import {AccountDTO} from "../model/AccountDTO";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  private readonly apiUrl = 'http://localhost:8080';

  search(accountName: string) {
    return this.http.get<AccountDTO[]>(`${this.apiUrl}/searchByName/${accountName}`, Options.options)
  }

}
