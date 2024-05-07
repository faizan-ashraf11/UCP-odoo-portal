import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectTeacherService {

  constructor() { }
  getSubjectsDetail():any{
    return [
      {name: 'Data Structures and Algoritms' , cgpa: 2.50 , teacherName: 'Dr Nabeel Sabir Khan' , attendence: 100 ,  subjectId: 1 , teacherId: 1001},
      {name: 'Data Structures and Algoritms - Lab' , cgpa: 4.00 , teacherName: 'Lalaen Sultan' , attendence: 75 ,  subjectId: 2 , teacherId: 1002},
      {name: 'English III' , cgpa: 3.50 , teacherName: 'Naida Urooj' , attendence: 100 ,  subjectId: 3 , teacherId: 1003},
      {name: 'Software Requirement Engineering' , cgpa: 4.00 , teacherName: 'Saira Latif' , attendence: 90 ,  subjectId: 4 , teacherId: 1004},
      {name: 'Web Engineering' , cgpa: 3.00 , teacherName: 'Aasma Abdul Waheed' , attendence: 100 ,  subjectId: 5 , teacherId: 1005},
      {name: 'Probability and Statistics' , cgpa: 2.50 , teacherName: 'Aurooj Butt' , attendence: 75 ,  subjectId: 6 , teacherId: 1006},
    ];
  }
  getTimeTable(): any{
    return [
      {subject: 'Web Engineering' , time: '12:00 - 1:00 PM' , venue: 'A-103'},
      {subject: 'Web Engineering' , time: '12:00 - 1:00 PM' , venue: 'A-103'},
      {subject: 'Web Engineering' , time: '12:00 - 1:00 PM' , venue: 'A-103'},
      {subject: 'Web Engineering' , time: '12:00 - 1:00 PM' , venue: 'A-103'},
      {subject: 'Web Engineering' , time: '12:00 - 1:00 PM' , venue: 'A-103'},
      {subject: 'Web Engineering' , time: '12:00 - 1:00 PM' , venue: 'A-103'},
      {subject: 'Web Engineering' , time: '12:00 - 1:00 PM' , venue: 'A-103'},
    ];
  }
}
