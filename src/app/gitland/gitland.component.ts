import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-gitland',
  templateUrl: './gitland.component.html',
  styleUrls: ['./gitland.component.css'],
  providers: [UserService]
})
export class GitlandComponent implements OnInit {
  user: any = [];
  repos: any = [];
  username: string;
  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.userService.getRepos().subscribe(repos => {
      // console.log(user);
      this.repos = repos;
    });
  }
  ngOnInit() {
  }
  searchUser() {
    this.userService.updateUser(this.username);
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
    // Console.log('It works');
    this.userService.getRepos().subscribe(repos => {
      // Console.log(user);
      this.repos = repos;
    });

  }
}
