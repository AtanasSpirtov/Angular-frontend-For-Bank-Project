import {Component} from '@angular/core';
import {SearchService} from '../service/search.service';
import {Account} from "../model/Account";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  accounts: Account[] = [];
  searchEvent: string

  constructor(private searchService: SearchService, private router: Router) {
  }

  eventController(input: string) {
    this.searchEvent = input;
    this.accountList(input);
  }

  accountList(name: string) {
    console.log(this.accounts, name);
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
