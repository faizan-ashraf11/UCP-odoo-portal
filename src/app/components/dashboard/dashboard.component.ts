import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SubjectTeacherService } from '../../services/subject-teacher.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NzIconModule , CommonModule , NzTableModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  subjects: any[] = [];

  ngOnInit(): void {
    this.getSubjects();
  }
  constructor(
    private router: Router,
    private subjectTeacherService: SubjectTeacherService
  ){}
  getSubjects(){
    this.subjects = this.subjectTeacherService.getSubjectsDetail();
  }
  viewSubjectDetails(subjectId: any , teacherId: any){
    this.router.navigate(['./dashboard/subject-detail' , subjectId , teacherId ])
  }
}
