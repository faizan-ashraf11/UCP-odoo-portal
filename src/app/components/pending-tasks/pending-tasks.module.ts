import { NgModule } from '@angular/core';
import { PendingTasksComponent } from './pending-tasks.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '' , component:PendingTasksComponent},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class PendingTasksModule { }
