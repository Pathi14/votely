import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './election/vote/vote.component';
import { CandidateComponent } from './election/candidate/candidate.component';
import { ElectionComponent } from './election/election.component';
import { StatisticComponent } from './election/statistic/statistic.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { GuestGuard } from 'src/app/shared/guards/guest.guard';
import { HasNotVotedGuard } from 'src/app/shared/guards/has-not-voted.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [GuestGuard],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'election',
    component: ElectionComponent,
  },
  {
    path: 'candidate/:candidateId',
    component: CandidateComponent,
  },
  {
    path: 'vote/:candidateId',
    component: VoteComponent,
    canActivate: [AuthGuard, HasNotVotedGuard],
  },
  {
    path: 'statistic',
    component: StatisticComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
