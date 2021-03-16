import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  
  logIn() {
    this.accountService.logIn(this.model).subscribe(res => {
      this.router.navigateByUrl('/members');
    }, err => {
      console.log(err);
      this.toastr.error(err.error);
    });
  }

  logOut() {
    this.accountService.logOut();
    this.router.navigateByUrl('/');
  }
}
