import { Component, OnInit } from '@angular/core';
import { StatusAccountService } from '../status-account.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private statusAccountService: StatusAccountService) {}

  ngOnInit() {
    this.users = this.statusAccountService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.statusAccountService.onSetToActive(id);
  }
}
