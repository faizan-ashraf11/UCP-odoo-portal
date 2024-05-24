import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LiveChatComponent } from './live-chat.component';

const routes : Route[] = [
  { path: '' , component: LiveChatComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class LiveChatModule { }
