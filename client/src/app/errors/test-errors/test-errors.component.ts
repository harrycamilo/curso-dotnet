import { Component, OnInit } from '@angular/core';
import { ServerConstants } from '../../constants/server.constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = ServerConstants.BaseUrL;
  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(this.baseUrl + 'bug/not-found').subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  get400Error() {
    this.http.get(this.baseUrl + 'bug/bad-request').subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  get500Error() {
    this.http.get(this.baseUrl + 'bug/server-error').subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  get401Error() {
    this.http.get(this.baseUrl + 'bug/auth').subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  getValidationError() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(res => {
      console.log(res);
    }, err => {
      this.validationErrors = err;
      console.log(err);
    });
  }
}
