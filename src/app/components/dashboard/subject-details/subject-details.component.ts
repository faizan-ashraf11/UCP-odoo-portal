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
    objective: ['Understand the properties of various data structures.' , 'Identify the strengths and weaknesses of different data structures.' , 'Design and employ appropriate data structures for solving computing problems' , 'Possess the knowledge of various existing algorithms.' , 'Analyze and compare the efficiency of algorithms.'],
    methodology: 'Interactive Lecturing',
    learningOutcome: ['Describe the characteristics and use cases of various data structures.' , 'Examine the time and space complexity of different data structures and algorithms.' , ' Implement a range of data structures and algorithms. '],
    title: [],
    description: [],
    textBooks: [ {bookTitle: 'Data Structures and Algorithms' , bookAuthor: 'D. S. Malik' , bookEdition: '5th' , bookPublisher: 'Text Publishers' , bookYear: '2021' , bookDescription: 'None'}],
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
    ],
    recommendedColumns: [
      {label: 'Sr.' , variable: 'Sr.' , width: '50px',class:'text-center'},
      {label: 'Title' , variable: 'bookTitle' },
      {label: 'Author' , variable: 'bookAuthor'},
      {label: 'Edition' , variable: 'bookEdition' },
      {label: 'Publisher' , variable: 'bookPublisher' },
      {label: 'Year' , variable: 'bookYear' },
      {label: 'Description' , variable: 'bookDescription' },
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
