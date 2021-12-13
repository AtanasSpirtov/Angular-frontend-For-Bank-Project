import {Account} from "./Account";

export interface Transaction {
  sourceAccount: Account;
  recipientAccount: Account;
  transactionAmount: number;
}
