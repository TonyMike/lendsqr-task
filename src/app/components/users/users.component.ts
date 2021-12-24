import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from './../../services/user.types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService],
})
export class UsersComponent implements OnInit {
  showfilter = false;
  filteredUsers: IUser[] = [];
  usersArray: IUser[] = [];
  constructor(private users: UsersService) {}
  filterForm = new FormGroup({
    organization: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    date: new FormControl(''),
    tel: new FormControl(''),
    status: new FormControl(''),
  });

  ngOnInit() {
    this.users.fetchUsers().subscribe((data: any) => {
      this.filteredUsers = [...data];
      this.usersArray = [...data];
    });
  }
  reset() {
    this.filteredUsers = [...this.usersArray];
    this.filterForm.reset();
  }
  filterUser() {
    const fields: Array<keyof IUser> = [
      'email',
      'organization',
      'tel',
      'username',
      'status',
      'dateJoin',
    ];
    this.filteredUsers = this.usersArray.filter((user) => {
      for (let field of fields) {
        let value = user[field]?.toLowerCase();
        if (value && value === this.filterForm.value[field]?.toLowerCase()) {
          return true;
        }
      }
      return false;
    });
    this.toggleFilter();
  }
  toggleFilter() {
    this.showfilter = !this.showfilter;
  }
}
