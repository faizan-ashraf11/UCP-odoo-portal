import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NzAvatarModule , FormsModule , CommonModule , NzIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  email: any;
  password: any;
  isInvalid: any = false;
  isLoading : boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){

  }
  ngOnInit(): void {

  }

  loginUser(){
    if(this.email == 'faizan@ucp.edu.pk' && this.password == '12345'){
      this.isInvalid = false;
      this.isLoading = true;
      setTimeout(() => {
        this.router.navigate(['./dashboard']);
      this.loginService.emitLogin(true);
      }, 2500);
    }else{
      this.isInvalid = true;
    }
  }
}
