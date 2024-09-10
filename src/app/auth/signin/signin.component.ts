import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserAuth } from 'src/shared/models/user-auth.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      name: ['', [Validators.required, this.noSpecialCharacters]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      age: ['', Validators.required],
      sexe: ['', Validators.required],
      profilePictureUrl: ['', Validators.required]
    }, { validators: this.checkPasswords });
  }

  addUser() {
    if (this.signinForm.invalid) return;

    const newUser: UserAuth = {
      email: this.signinForm.value.email,
      name: this.signinForm.value.name,
      password: this.signinForm.value.password,
      age: this.signinForm.value.age,
      sexe: this.signinForm.value.sexe,
      profilePictureUrl: this.signinForm.value.profilePictureUrl,
    };
    
    this.authService.addUser(newUser);
    this.router.navigate(['/login']);
  }

  private checkPasswords(control: FormGroup) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password?.value !== confirmPassword?.value ? { missMatch: true } : null;
  }

  private noSpecialCharacters(control: FormGroup) {
    const forbiddenCharacters = /[^a-zA-Z0-9 ]/g;
    return forbiddenCharacters.test(control.value) ? { specialChars: true } : null;
  }

  get getErrorLabel() {
    if (this.signinForm.errors?.['required']) return 'Les champs sont obligatoires';
    if (!!this.signinForm.controls?.['password']?.errors?.['minlength']) return `La longueur minimal pour votre mot de passe est ${this.signinForm.controls?.['password']?.errors?.['minlength']?.requiredLength}`;
    if (this.signinForm.errors?.['missMatch']) return 'Les mots de passe ne correspondent pas';
    if (this.signinForm.get('name')?.hasError('specialChars')) return 'Le nom ne doit pas contenir de caractères spéciaux';
    if (this.signinForm.get('email')?.hasError('email')) return 'L\'adresse e-mail n\'est pas valide';
    return 'Un problème est survenu';
  }

}
