import { Routes } from '@angular/router';
import { CommingSoonComponent } from './shared/comming-soon/comming-soon.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
  { path: '' , redirectTo: 'dashboard' , pathMatch: 'full'},
  { path: 'dashboard', data:{title: 'Dashboard'} , loadChildren:() => import("./components/dashboard/dashboard.module").then(m=>m.DashboardModule) },
  { path: 'notification' , data:{title: 'Notification'} , loadChildren:() => import("./components/notifications/notifications.module").then(m=>m.NotificationsModule) },
  { path: 'exam-result' , data:{title: 'Exam Result'} , loadChildren:() => import("./components/exam-result/exam-result.module").then(m=>m.ExamResultModule) },
  { path: 'invoices' , data:{title: 'Invoices'} , loadChildren:() => import("./components/invoices/invoices.module").then(m=>m.InvoicesModule) },
  { path: 'time-table' , data:{title: 'Time Table'} , loadChildren:() => import("./components/time-table/time-table.module").then(m=>m.TimeTableModule) },
  { path: 'live-chat' , data:{title: 'Live Chat'} , loadChildren:() => import("./components/live-chat/live-chat.module").then(m=> m.LiveChatModule)},
  { path: 'pending-tasks' , data:{title: 'Pending Tasks'} , component: CommingSoonComponent},
  { path: 'user-profile' , data:{title: 'Profile'} , loadChildren:() => import("./components/user-profile/user-profile.module").then(m=>m.UserProfileModule) },
  { path: 'login' , data:{title: 'Login'} , loadChildren:() => import("./components/login/login.module").then(m=>m.LoginModule) },
  { path: '**' , component: NotFoundComponent}
];
