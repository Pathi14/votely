import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from '../shared/services/candidate.service';
import { Candidate } from '../shared/models/candidate-model';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.scss']
})
export class ElectionComponent {
  candidates: Candidate[] = [];
  username!: string;
  
  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private candidateService: CandidateService
  ){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['name'];
    });
    this.candidateService.getCandidates().subscribe((data: Candidate[]) => {
      this.candidates = data;
    });
  }
  
  viewDetails(candidate: Candidate) {
    this.router.navigate(['/candidate', candidate.id]);
  }

  goToVotePage(candidateId: string) {
    this.router.navigate(['/vote', candidateId]);
  }
}
