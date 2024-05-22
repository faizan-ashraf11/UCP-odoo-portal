import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NzIconModule , FormsModule , CommonModule , NzUploadModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  userProfile: any = {
    name: 'Faizan Ashraf',
    imageUrl: 'assets/ProfilePic.png',
    address: 'Lahore , Pakistan',
    career: 'Software Engineer'
  }
  personalDetails:any = {
    firstName: 'Faizan',
    lastName: 'Ashraf',
    department: 'FOIT',
    emailAddress: 'l1f22bsse0385@ucp.edu.pk',
    password: 'abc@12345',
    samplePassword: '*********',
    phone: '03204498095',
    isShow: false
  }
  file: any;
}
