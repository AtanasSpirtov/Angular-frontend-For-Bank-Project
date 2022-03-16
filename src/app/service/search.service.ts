import { Injectable } from '@angular/core';
import {Transaction} from "../model/Transaction";
import {Options} from "../SecurityAuthorization/Options";
import {HttpClient} from "@angular/common/http";
import {Account} from "../model/Account";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  private readonly apiUrl = 'http://localhost:8080';

  search(accountName : string) {
    return this.http.get<Account[]>(`${this.apiUrl}/searchForKeyword/${accountName}` , Options.options)
  }

}
