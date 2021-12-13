import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders} from "@angular/common/http";
import {Transaction} from "../entities/Transaction";
import {map} from 'rxjs';
import {Options} from '../SecurityAuthorization/Options';
import {Account} from "../entities/Account";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http: HttpClient) {
  }

  private readonly apiUrl = 'http://localhost:8080';

  getAllTransactions(accountId: number)  {
    return this.http
      .get<Transaction[]>(`http://localhost:8080/transaction/allTransactionsByAccount/${accountId}` , Options.options);
  }

  createTransactions(transaction:Transaction) {
    const headers = {'content-type': 'application/json','Authorization': 'Basic bmFza286bmFza28='};
    const JSONObject = JSON.stringify(transaction);
    return this.http.post<Transaction>(`${this.apiUrl}/transaction/create`, JSONObject , {'headers': headers}
  ).subscribe(data => data)
  }

  getAccountByName(accountName: string){
    return this.http.get<Account>(`${this.apiUrl}/accountManaging/accountByName/${accountName}` , Options.options)
  }

}
