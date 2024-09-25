import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  get user() {
    return this.authService.user;
  }

  logout() {
    this.authService.logout();
  }
}
