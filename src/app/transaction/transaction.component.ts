import {Component, OnInit} from '@angular/core';
import {Transaction} from "../model/Transaction";
import {TransactionService} from "../service/transaction.service";
import {Router} from "@angular/router";
import {AccountService} from "../service/AccountService";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  listOfTransactions: Transaction[] = [];
  selectedTransaction = <Transaction>{};
  wantedAccountId: number = 0;
  error: any;

  constructor(private transactionService: TransactionService, private router: Router, private accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  getAccountId(accountId: any) {
    this.wantedAccountId = Number(accountId);
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  getTransaction(): void {
    this.transactionService.getAllTransactions(this.wantedAccountId)
      .subscribe(
        transactions => {
          for (let key in transactions) {
            this.listOfTransactions.push(transactions[key])
          }
        },
      )
    console.log(this.listOfTransactions)
  }

  private transactionServed: Transaction = <Transaction>{};

  add(sourceAccountName: string, recipientAccountName: string, amountOfTransactions: string): void {
    if (isNaN(Number(amountOfTransactions))) {
      console.log("this is not a number")
      return;
    }
    let transAmountToNum = Number(amountOfTransactions);
    sourceAccountName = sourceAccountName.trim();
    recipientAccountName = recipientAccountName.trim();
    this.accountService.getAccountByName(sourceAccountName).subscribe(
      data => {
        this.transactionServed.sourceAccount = data
      }
    );
    this.accountService.getAccountByName(recipientAccountName).subscribe(
      data => {
        this.transactionServed.recipientAccount = data
      }
    );
    this.transactionServed.transactionAmount = transAmountToNum;
    console.log(this.transactionServed)
    console.log(localStorage.length)
    this.transactionService.createTransactions(this.transactionServed);
  }
}
