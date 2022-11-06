import {Component, OnInit} from '@angular/core';
import {TransactionDTO} from "../model/TransactionDTO";
import {TransactionService} from "../service/transaction.service";
import {Router} from "@angular/router";
import {AccountService} from "../service/AccountService";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  listOfTransactions: TransactionDTO[] = [];
  selectedTransaction = <TransactionDTO>{};
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

  private transactionServed: TransactionDTO = <TransactionDTO>{};

  add(sourceAccountName: string, recipientAccountName: string, amountOfTransactions: string): void {
    if (isNaN(Number(amountOfTransactions))) {
      console.log("this is not a number")
      return;
    }
    let transAmountToNum = Number(amountOfTransactions);
    sourceAccountName = sourceAccountName.trim();
    recipientAccountName = recipientAccountName.trim();
    this.accountService.getAccountByName(sourceAccountName).subscribe(
      sourceAccount => {
        this.transactionServed.sourceAccount = sourceAccount
        this.accountService.getAccountByName(recipientAccountName).subscribe(
          recipientAccount => {
            this.transactionServed.recipientAccount = recipientAccount
            this.transactionServed.transactionAmount = transAmountToNum;
            this.transactionService.createTransactions(this.transactionServed).subscribe(data => data);
          }
        );
      }
    );
  }
}
