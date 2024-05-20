import { NgModule } from '@angular/core';
import { ExamResultComponent } from './exam-result.component';
import { Route, RouterModule } from '@angular/router';
import { SubjectDetailsComponent } from '../dashboard/subject-details/subject-details.component';

const routes: Route[] = [
  {path: '' , component:ExamResultComponent},
  {path:'subject-detail/:subjectId/:teacherId' , component: SubjectDetailsComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class ExamResultModule { }
