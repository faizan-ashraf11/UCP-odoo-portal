import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommingSoonComponent } from './shared/comming-soon/comming-soon.component';

export const routes: Routes = [
  {path: '' , redirectTo: 'dashboard' , pathMatch: 'full'},
  { path: 'dashboard', data:{title: 'Dashboard'} , loadChildren:() => import("./components/dashboard/dashboard.module").then(m=>m.DashboardModule) },
  { path: 'notification' , data:{title: 'Notification'} , component: CommingSoonComponent},
  { path: 'academic' , data:{title: 'Academic'} , component: CommingSoonComponent},
  { path: 'exam-result' , data:{title: 'Exam Result'} , component: CommingSoonComponent},
  { path: 'invoices' , data:{title: 'Invoices'} , component: CommingSoonComponent},
  { path: 'time-table' , data:{title: 'Time Table'} , component: CommingSoonComponent},
  { path: 'live-chat' , data:{title: 'Live Chat'} , component: CommingSoonComponent},
  { path: 'pending-tasks' , data:{title: 'Pending Tasks'} , component: CommingSoonComponent},
  { path: '**' , component: CommingSoonComponent}
];
