import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }
  
  logIn() {
    this.accountService.logIn(this.model).subscribe(res => {
    }, err => {
      console.log(err);
    });
  }

  logOut() {
    this.accountService.logOut();
  }
}
