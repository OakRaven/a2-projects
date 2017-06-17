import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;

  constructor(private http: Http) {
    this.username = 'OakRaven';
  }

  getUser() {
    return this.http
      .get('https://api.github.com/users/' + this.username)
      .map(res => res.json());
  }

}
