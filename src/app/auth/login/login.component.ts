import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  loginForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  
  login() {
    this.authService.login(this.loginForm.value).subscribe((user: User[]) => {
      if (user.length === 0) alert('Erreur dans le pseudo ou le mot de passe');
      this.authService.user = user[0];
      if (!this.authService.user) return;
      this.authService.saveUser();
      this.navigateTohome();
    }, (error) => {
      alert('Erreur dans la requête');
    });    
  }

  navigateTohome() {
    this.router.navigate(['/election', this.authService.user?.name]);
  }

}
