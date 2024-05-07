import { NzIconModule } from 'ng-zorro-antd/icon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SubjectTeacherService } from '../../../services/subject-teacher.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-subject-details',
  standalone: true,
  imports: [NzIconModule , RouterModule , FormsModule , CommonModule , NzTableModule],
  templateUrl: './subject-details.component.html',
  styleUrl: './subject-details.component.scss'
})
export class SubjectDetailsComponent implements OnInit{

  teacherId: any = '';
  subjectId: any = '';
  subjectName: any = '';
  tabs : any[] = [
    {tabName: 'Announcement' , tab : 1},
    {tabName: 'Course Outline' , tab : 2},
    {tabName: 'Course Material' , tab : 3},
    {tabName: 'Assessments' , tab : 4},
    {tabName: 'Submission' , tab : 5},
    {tabName: 'Grade Book' , tab : 6},
    {tabName: 'Attendance' , tab : 7},
  ]
  selectedTab: any = 1;
  announcementData: any[] = [
    {subjectName: 'On Leave' , date: new Date() , description: 'None'}
  ];
  courseOutline: any = {
    requirement: `Prerequisites:  Reasonable programming skills with proven track in ITC, PF and OOP courses`,
    objective: '',
    methodology: '',
    learningOutcome: '',
    title: [],
    description: [],
    textBooks: [],
    refBooks: [],
    webSources: [],
    assessmentEvaluation: [],
    clo: [],
    calendarActivities: []
  }
  columns: any = {
    announcementColumn: [
      {label: 'Sr.' , variable: 'Sr.' , width: '50px',class:'text-center'},
      {label: 'Subject' , variable: 'subjectName' },
      {label: 'Date' , variable: 'date' ,class:'text-center'},
      {label: 'Description' , variable: 'description' },
      {label: 'Attachment' , variable: 'attachmentFile' , width:'100px' , class:'text-center'},
    ]
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private subjectTeacherService: SubjectTeacherService
  ){
    this.activatedRoute.params.subscribe(param=>{
      if(param['subjectId']){
        this.subjectId = param['subjectId'];
      }
      if(param['teacherId']){
        this.teacherId = param['teacherId'];
      }
    })
  }
  ngOnInit(): void {
    this.subjectName = this.subjectTeacherService.getSubjectsDetail().filter((r : any)=> r.subjectId == this.subjectId)[0].name;
  }
}
