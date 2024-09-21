import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'home/:name',
    component: HomeComponent
  },
  {
    path: 'vote/:candidateId',
    component: VoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
