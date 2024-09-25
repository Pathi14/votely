import { Component } from '@angular/core';
import { Candidate } from 'src/app/shared/models/candidate-model';
import { CandidateService } from 'src/app/shared/services/candidate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) {
    this.candidateService.getCandidates().subscribe((data: Candidate[]) => {
      // Pick 4 random candidates
      this.candidates = data.sort(() => 0.5 - Math.random()).slice(0, 4);
    });
  }
}
