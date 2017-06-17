import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GithubService , HttpModule ]
})
export class AppComponent {
  title = 'app';
}
