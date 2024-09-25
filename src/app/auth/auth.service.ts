import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from 'src/app/shared/models/login-data.model';
import { RegisterData } from 'src/app/shared/models/register-data.model';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | undefined = undefined;

  constructor(private http: HttpClient) {
    const storedUserId = localStorage.getItem('user');

    if (!storedUserId) return;

    this.getUserById(storedUserId).subscribe((user) => {
      this.user = user;
    });
  }

  addUser(user: RegisterData) {
    return this.http.post('http://localhost:3000/users', user).subscribe();
  }

  getUserById(id: User['id']) {
    return this.http.get<User>('http://localhost:3000/users/' + id);
  }

  login(user: LoginData): Observable<User[]> {
    return this.http.get<User[]>(
      'http://localhost:3000/users?email=' +
        user.email +
        '&password=' +
        user.password
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.user = undefined;
  }

  saveUser(user: User) {
    localStorage.setItem('user', '' + user?.id);
  }
}
