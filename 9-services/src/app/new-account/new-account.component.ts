import { Component } from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountService} from "../_service/account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService : LoggingService, private accountService : AccountService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    /*this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });*/
    this.accountService.addAccount(accountName,accountStatus);



    // console.log('A server status changed, new status: ' + accountStatus);

/*  Not recommended to create instance of a service
    const service = new LoggingService();
    service.logStatusChange(accountStatus);*/

    // this.loggingService.logStatusChange(accountStatus);


  }
}
