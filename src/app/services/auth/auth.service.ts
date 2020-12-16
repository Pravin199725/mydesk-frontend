import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  login (userInfo) {
    return this.apiService.postByBody('auth/login/', userInfo);
  }

  registration(userInfo) {
    return this.apiService.post('auth/registration/', userInfo);
  }

  getClasses() {
    return this.apiService.get('classes/', {});
  }

}