import { NgModule } from '@angular/core';
import { InvoicesComponent } from './invoices.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '' , component:InvoicesComponent},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class InvoicesModule { }
