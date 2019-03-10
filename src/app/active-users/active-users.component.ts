import { Component, OnInit } from '@angular/core';
import { StatusAccountService } from '../status-account.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private statusAccountService: StatusAccountService) {}

  ngOnInit() {
    this.users = this.statusAccountService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.statusAccountService.onSetToInactive(id);
  }
}
