import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { VoteComponent } from './election/vote/vote.component';
import { ConfirmationComponent } from './shared/components/confirmation/confirmation.component';
import { CandidateComponent } from './election/candidate/candidate.component';
import { ElectionComponent } from './election/election.component';
import { StatisticComponent } from './election/statistic/statistic.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MaxLengthPipe } from './shared/pipes/max-length.pipe';
import { TooltipDirective } from './shared/directives/tooltip.directive';
import { HoverEffectDirective } from './shared/directives/hover-effect.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    VoteComponent,
    ConfirmationComponent,
    CandidateComponent,
    ElectionComponent,
    StatisticComponent,
    HeaderComponent,
    FooterComponent,
    MaxLengthPipe,
    TooltipDirective,
    HoverEffectDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
