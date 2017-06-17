import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user: any;

  constructor(private githubService: GithubService) {
    this.githubService.getUser().subscribe(user => {
       this.user = user;
      });
   }

  ngOnInit() {
  }

}
