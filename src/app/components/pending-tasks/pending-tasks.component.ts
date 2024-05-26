import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ExamService } from '../../services/exam.service';
import { SubjectTeacherService } from '../../services/subject-teacher.service';

@Component({
  selector: 'app-pending-tasks',
  standalone: true,
  imports: [NzIconModule , RouterModule , FormsModule , CommonModule , NzTableModule , MatExpansionModule , NzProgressModule ],
  templateUrl: './pending-tasks.component.html',
  styleUrl: './pending-tasks.component.scss'
})
export class PendingTasksComponent {

  pendingTasks: any[]= [
    { subjectName: 'Datastructure and Algorithm' , teacher: 'Dr. Nabeel Sabir Khan' , task: 'Assignment 2' , deadline: new Date()},
    { subjectName: 'Datastructure and Algorithm - Lab' , teacher: 'Lalaen Sultan' , task: 'Upload File of Recursion Lab Tasks' , deadline: new Date()},
    { subjectName: 'Software Requirement Engineering' , teacher: 'Saira Latif' , task: 'SRS Phase 2 Submission Created' , deadline: new Date()},
    { subjectName: 'Web Engineering' , teacher: 'Aasma Abdul Waheed' , task: 'Project Submission' , deadline: new Date()},
    { subjectName: 'Probability and Statistics' , teacher: 'Auroj Butt' , task: 'Assignment 3' , deadline: new Date()},
  ];

  constructor(
    private subjectTeacherService: SubjectTeacherService,
    private examService: ExamService,
    private router: Router
  ){}

  ngOnInit(): void {
  }
  viewSubjectDetails(subjectId: any , teacherId: any){
    this.router.navigate(['./dashboard/subject-detail' , subjectId , teacherId ])
  }
}
