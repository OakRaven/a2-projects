import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { RepoComponent } from '../repo/repo.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  private user: any;
  private repos: Array<any>;


  constructor(private githubService: GithubService) {
    this.user = false;
   }

  ngOnInit() {
  }

  searchUser() {
    this.githubService.updateUser(this.username);

    this.githubService.getUser().subscribe(user => {
       this.user = user;
      });

      this.githubService.getRepos().subscribe(repos => {
        this.repos = repos;
      });
  }

}
