import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transaction} from "../model/Transaction";
import {Options} from "../SecurityAuthorization/Options";
import {Message} from "../model/response/Message";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http: HttpClient) {
  }

  private readonly apiUrl = 'http://localhost:8080';

  getAllTransactions(accountId: number) {
    return this.http
      .get<Transaction[]>(`${this.apiUrl}/transaction/allTransactionsByAccount/${accountId}`, Options.options);
  }

  createTransactions(transaction: Transaction) {
    const JSONObject = JSON.stringify(transaction);
    return this.http.post<Message>(`${this.apiUrl}/transaction/create`, JSONObject, Options.options
    ).subscribe(data => data)
  }
}
