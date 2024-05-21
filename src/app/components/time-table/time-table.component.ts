import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TimeTableService } from '../../services/time-table.service';

@Component({
  selector: 'app-time-table',
  standalone: true,
  imports: [NzIconModule , RouterModule , FormsModule , CommonModule , NzTableModule],
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.scss'
})
export class TimeTableComponent {

  columns: any[] = [];
  subscription!: Subscription;
  days: any[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  screenWidth = false;
  timePerWeek: any[] = [];
  constructor(
    private loginService: LoginService,
    private timeTbaleService: TimeTableService
  ){}

  ngOnInit(): void {
    this.getTimeTable();
    this.subscription = this.loginService.actionObservable.subscribe(action => {
      this.screenWidth = action;
  });
  }

  getTimeTable(){
    this.timePerWeek = this.timeTbaleService.getTimeTable();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
