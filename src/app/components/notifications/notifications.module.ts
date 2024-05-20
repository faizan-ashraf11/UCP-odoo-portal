import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '' , component:NotificationsComponent},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class NotificationsModule { }
