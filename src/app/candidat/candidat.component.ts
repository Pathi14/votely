import { Component, OnInit } from '@angular/core';
import { CandidateService, Candidate } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss']
})
export class CandidateComponent implements OnInit {

  candidat: Candidate[] = [];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe(data => {
      this.candidat = data;
    });
  }

  vote(candidate: Candidate): void {
    alert(`You voted for ${candidate.name}`);
  }

  showDetails(candidate: Candidate): void {
    alert(`Details of ${candidate.name}: Age ${candidate.age}, Email: ${candidate.email}`);
  }
}
