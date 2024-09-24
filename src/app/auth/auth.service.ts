import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuth } from 'src/app/shared/models/user-auth.model';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | undefined;

  constructor(private http: HttpClient) {}

  addUser(user: UserAuth) {
    return this.http
      .post<UserAuth>('http://localhost:3000/users', user)
      .subscribe();
  }

  login(user: UserAuth): Observable<User[]> {
    return this.http.get<User[]>(
      'http://localhost:3000/users?email=' +
        user.email +
        '&password=' +
        user.password
    );
  }

  saveUser() {
    localStorage.setItem('user', '' + this.user?.id);
  }
}
