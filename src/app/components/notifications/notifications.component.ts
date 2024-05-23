import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NzIconModule , RouterModule , FormsModule , CommonModule , NzTableModule , NzTimelineModule , NzAvatarModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit{
  notification: any[] = [];
  constructor(
    private notificationService : NotificationService
  ){}
  ngOnInit(): void {
    this.loadNotifications();
  }
  loadNotifications(){
    this.notification = this.notificationService.getNotifications();
  }
}
