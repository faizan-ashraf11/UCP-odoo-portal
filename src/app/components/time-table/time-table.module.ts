import { NgModule } from '@angular/core';
import { TimeTableComponent } from './time-table.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '' , component:TimeTableComponent},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class TimeTableModule { }
