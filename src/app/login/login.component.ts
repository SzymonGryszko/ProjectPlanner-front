import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/shared/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    console.log('login');
    this.authService.login();
  }


}
