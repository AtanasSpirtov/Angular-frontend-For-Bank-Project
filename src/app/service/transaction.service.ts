import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TransactionDTO} from "../model/TransactionDTO";
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
      .get<TransactionDTO[]>(`${this.apiUrl}/transaction/allTransactionsByAccount/${accountId}`, Options.options);
  }

  createTransactions(transaction: TransactionDTO) {
    return this.http.post<Message>(`${this.apiUrl}/transaction/create`, transaction, Options.options
    )
  }
}
