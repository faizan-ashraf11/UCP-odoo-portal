import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isAuthenticated: any = false;

  getMenu(): any[]{
    return [
      {name: 'Dashboard' , icon:'appstore' , menuNo: 1 , path: 'dashboard'},
      {name: 'Notification' , icon:'bell' , menuNo: 2 , path: 'notification'},
      {name: 'Exam Result' , icon:'bar-chart' , menuNo: 4 , path: 'exam-result'},
      {name: 'Invoices' , icon:'container' , menuNo: 5 , path: 'invoices'},
      {name: 'Time Table' , icon:'database' , menuNo: 6 , path: 'time-table'},
      {name: 'Live Chat' , icon:'comment' , menuNo: 7 , path: 'live-chat'},
      {name: 'Pending Tasks' , icon:'sync' , menuNo: 8 , path: 'pending-tasks'},
    ];
  }
  actionSubject = new Subject<any>();
  actionObservable: Observable<any> = this.actionSubject.asObservable();

  emitAction(action: any) {
    this.actionSubject.next(action);
  }
}
