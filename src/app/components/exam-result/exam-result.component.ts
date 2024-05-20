import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SubjectTeacherService } from '../../services/subject-teacher.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-exam-result',
  standalone: true,
  imports: [NzIconModule , RouterModule , FormsModule , CommonModule , NzTableModule , MatExpansionModule , NzProgressModule ],
  templateUrl: './exam-result.component.html',
  styleUrl: './exam-result.component.scss'
})
export class ExamResultComponent implements OnInit{
  tabs: any[] = [
    {tabName: 'Active Courses' , tab : 1},
    {tabName: 'Previous Courses' , tab : 2},
  ];
  selectedTab: any = 1;
  activeSubjects: any[]= [];
  columns: any = {
    courseColumn: [
      {label: 'Sr.' , variable: 'Sr.' , width: '50px',class:'text-center'},
      {label: 'Course Name' , variable: 'courseName' , class: 'font-semibold' },
      {label: 'Credit Hours' , variable: 'courseCreditHours' ,  class: 'text-center' , width: '150px'},
      {label: 'Grade Pts' , variable: 'courseGradePoints' ,  class: 'text-center' , width: '150px'},
      {label: 'Final Grade' , variable: 'courseFinalGrade' ,  class: 'text-center' , width: '150px'},
    ],
  }
  previousCourses: any[] = [];
  panelOpenState: any[] = [];

  constructor(
    private subjectTeacherService: SubjectTeacherService,
    private examService: ExamService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getSubjects();
    this.getPreviousCourses();
  }

  getSubjects(){
    this.activeSubjects = this.subjectTeacherService.getSubjectsDetail();
  }
  getPreviousCourses(){
    this.previousCourses = this.examService.getPreviousCourses();
  }
  viewSubjectDetails(subjectId: any , teacherId: any){
    this.router.navigate(['./dashboard/subject-detail' , subjectId , teacherId ])
  }
}
