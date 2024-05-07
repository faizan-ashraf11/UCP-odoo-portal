import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getMenu(): any[]{
    return [
      {name: 'Dashboard' , icon:'appstore' , menuNo: 1 , path: 'dashboard'},
      {name: 'Notification' , icon:'bell' , menuNo: 2 , path: 'notifications'},
      {name: 'Academic' , icon:'form' , menuNo: 3 , path: 'academic'},
      {name: 'Exam Result' , icon:'bar-chart' , menuNo: 4 , path: 'results'},
      {name: 'Invoices' , icon:'container' , menuNo: 5 , path: 'invoices'},
      {name: 'Time Table' , icon:'database' , menuNo: 6 , path: 'time-table'},
      {name: 'Live Chat' , icon:'comment' , menuNo: 7 , path: 'live-chat'},
      {name: 'Pending Tasks' , icon:'sync' , menuNo: 8 , path: 'pending-tasks'},
    ];
  }
}
