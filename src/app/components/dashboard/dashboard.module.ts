import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';

const routes: Route[] = [
  {path: '' , component:DashboardComponent},
  {path:'subject-detail/:subjectId/:teacherId' , component: SubjectDetailsComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
