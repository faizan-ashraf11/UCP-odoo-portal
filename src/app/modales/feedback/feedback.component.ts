import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ FormsModule , CommonModule , NzRadioModule , NzInputModule ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  name: any;
  registrationNumber: any;
  phoneNumber: any;
  gender: any;
  studentEmail: any;
  feedback: any;
}
