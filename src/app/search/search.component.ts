import {Component} from '@angular/core';
import {SearchService} from '../service/search.service';
import {AccountDTO} from "../model/AccountDTO";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  accounts: AccountDTO[] = [];
  searchEvent: string

  constructor(private searchService: SearchService, private router: Router) {
  }

  eventController(input: string) {
    this.searchEvent = input;
    this.accountList(input);
  }

  accountList(name: string) {
    this.accounts = [];
    this.searchService.search(name).subscribe(returnedAccounts => {
      for (let key in returnedAccounts) {
        this.accounts.push(returnedAccounts[key])
      }
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
