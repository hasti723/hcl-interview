import { Text } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './users.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public userService: UserService) {}

  name = 'Angular';
  username: string;
  userlist: User[];
  filteruserlist: User[];

  ngOnInit() {
    this.userService.getUsers().subscribe((list: any) => {
      this.userlist = this.filteruserlist = list.data;
    });
  }

  search(text: string) {
    if (text.length >= 2) { // added length condition
      this.filteruserlist = this.userlist.filter((x) => {
        return x.email.includes(text) || x.first_name.includes(text);
      });
    } else {
      this.filteruserlist = this.userlist;
    }
  }
}
