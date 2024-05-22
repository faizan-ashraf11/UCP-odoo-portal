import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '' , component:UserProfileComponent},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class UserProfileModule { }
