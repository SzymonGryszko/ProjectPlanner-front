import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;
  
  constructor(private httpClient:HttpClient) { }

  login() {
    window.open(this.baseUrl + 'oauth2/authorization/google', '_self');
  }
}
