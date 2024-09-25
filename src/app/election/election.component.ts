import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from '../shared/services/candidate.service';
import { Candidate } from '../shared/models/candidate-model';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.scss'],
})
export class ElectionComponent {
  candidates: Candidate[] = [];
  username!: string;

  constructor(
    private router: Router,
    private candidateService: CandidateService
  ) {}

  ngOnInit() {
    this.candidateService.getCandidates().subscribe((data: Candidate[]) => {
      this.candidates = data;
    });
  }
}
