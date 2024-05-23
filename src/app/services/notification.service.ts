import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  getNotifications(){
    return [
      {teacherName: 'Nabeel Sabir Khan' , announcement: 'Quiz 2 on Upcoming Monday' , notificationDate: new Date() , isNew: true , subject: 'DSA' , subjectId: 1 , teacherId: 1001},
      {teacherName: 'Nabeel Sabir Khan' , announcement: 'Quiz 1 Marks Uploaded' , notificationDate: new Date() , isNew: true , subject: 'DSA' , subjectId: 1 , teacherId: 1001},
      {teacherName: 'Aasma Abdul Waheed' , announcement: 'Assignment 2 Marks Has Been Uploaded' , notificationDate: new Date() , isNew: true , subject: 'Web Engineering' , subjectId: 5 , teacherId: 1005},
      {teacherName: 'Aasma Abdul Waheed' , announcement: 'Assignment 2 Submission is Expired' , notificationDate: new Date() , isNew: false , subject: 'Web Engineering' , subjectId: 5 , teacherId: 1005},
      {teacherName: 'Lalaen Sultan' , announcement: 'Mid Term on Upcoming Class' , notificationDate: new Date() , isNew: false , subject: 'DSA - Lab' , subjectId: 2 , teacherId: 1002},
    ]
  }
  getNewNotification(){
    var data: any[] = [];
    this.getNotifications().forEach((f: any)=>{
      if(f?.isNew){
        data.push(f);
      }
    });
    return data;
  }
}
