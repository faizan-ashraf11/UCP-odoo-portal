import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommingSoonComponent
  ],
  exports:[
    CommingSoonComponent
  ]
})
export class SharedModule { }
