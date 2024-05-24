import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-live-chat',
  standalone: true,
  imports: [ NzAvatarModule , FormsModule , CommonModule , NzIconModule ],
  templateUrl: './live-chat.component.html',
  styleUrl: './live-chat.component.scss'
})
export class LiveChatComponent implements OnInit{

  tableWidth: any = false;
  subscription!: Subscription;
  message: any;
  chatUrl: any = '/assets/bot1.png';
  contactName: any = 'Lalaen Sultan';
  constactSubject: any = 'Datastructure and Algorithm - Lab';
  constact : any[] = [
    { name: 'Lalaen Sultan' , lastMessage: '' , lastSeen: new Date() , imageUrl: '/assets/bot1.png' , chatId: 1},
    { name: 'Dr Nabeel Sabir Khan' , lastMessage: '' , lastSeen: new Date() , imageUrl: '/assets/bot2.jpg' , chatId: 2 },
    { name: 'Nadia Urooj' , lastMessage: '' , lastSeen: new Date() , imageUrl: '/assets/bot3.jpg' , chatId: 3 },
    { name: 'Saira Latif' , lastMessage: '' , lastSeen: new Date() , imageUrl: '/assets/bot4.webp' , chatId: 4 },
    { name: 'Aasma Abdul Waheed' , lastMessage: '' , lastSeen: new Date() , imageUrl: '/assets/bot5.png' , chatId: 5 },
    { name: 'Aurooj Butt' , lastMessage: '' , lastSeen: new Date() , imageUrl: '/assets/bot6.jpg' , chatId: 6 },
  ]

  constructor(
    private loginService: LoginService
  ){

  }

  ngOnInit(): void {
    this.subscription = this.loginService.actionObservable.subscribe(action => {
      this.tableWidth = action;
  });
  }
}
