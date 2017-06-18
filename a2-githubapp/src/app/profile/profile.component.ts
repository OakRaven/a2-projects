import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user: Array<any>;
  private repos: Array<any>;


  constructor(private githubService: GithubService) {
    this.githubService.getUser().subscribe(user => {
       this.user = user;
      });

      this.githubService.getRepos().subscribe(repos => {
        this.repos = repos;
      });
   }

  ngOnInit() {
  }

}
