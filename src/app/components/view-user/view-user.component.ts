import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  constructor() {}
  showMenu = false;
  ngOnInit(): void {}
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
