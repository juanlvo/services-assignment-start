import { Component } from '@angular/core';
import { StatusAccountService } from './status-account.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StatusAccountService],
})
export class AppComponent {

}
