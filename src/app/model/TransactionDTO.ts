import {AccountDTO} from "./AccountDTO";

export class TransactionDTO {
  sourceAccount: AccountDTO;
  recipientAccount: AccountDTO;
  transactionAmount: number;
}
