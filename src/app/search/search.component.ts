import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import {Account} from "../model/Account";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {}

  accounts : Account[] = [];

  loginForm(name: string) {
    this.searchService.search(name).subscribe(returnedAccounts =>{
      for (let key in returnedAccounts) {
        this.accounts.push(returnedAccounts[key])
      }
    });
    console.log(this.accounts);
  }
}
