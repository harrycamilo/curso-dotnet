import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = environment.apiUrl;
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
