import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;

  constructor(private http: Http) {
  }

  getUser() {
    return this.http
      .get('https://api.github.com/users/' + this.username)
      .map(res => res.json());
  }

  getRepos() {
    return this.http
      .get('https://api.github.com/users/' + this.username + '/repos')
      .map(res => res.json());
  }

  updateUser(username): void {
    this.username = username;
  }

}
