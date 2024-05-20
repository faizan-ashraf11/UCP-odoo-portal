import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NzIconModule , RouterModule , FormsModule , CommonModule , NzTableModule , NzTimelineModule , NzAvatarModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  notification: any[] = [
    {teacherName: 'Nabeel Sabir Khan' , announcement: 'Quiz 2 on Upcoming Monday' , notificationDate: new Date() , isNew: true},
    {teacherName: 'Nabeel Sabir Khan' , announcement: 'Quiz 1 Marks Uploaded' , notificationDate: new Date() , isNew: true},
    {teacherName: 'Aasma Abdul Waheed' , announcement: 'Assignment 2 Marks Has Been Uploaded' , notificationDate: new Date() , isNew: true},
    {teacherName: 'Aasma Abdul Waheed' , announcement: 'Assignment 2 Submission is Expired' , notificationDate: new Date() , isNew: false},
    {teacherName: 'Lalaen Sultan' , announcement: 'Mid Term on Upcoming Class' , notificationDate: new Date() , isNew: false},
  ];
}
