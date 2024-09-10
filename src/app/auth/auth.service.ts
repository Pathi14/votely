import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from 'src/shared/models/user-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }
  
  addUser(user: UserAuth) {
    return this.http.post<UserAuth>('http://localhost:3000/users', user).subscribe();
  }

}
