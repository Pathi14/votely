import { Component, Input, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/shared/services/candidate.service';
import { Candidate } from 'src/app/shared/models/candidate-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  candidate!: Candidate;
  candidateId!: string;

  constructor(
    private candidateService: CandidateService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.candidateId = params['candidateId'];
    });
    this.candidateService.getCandidateById(this.candidateId).subscribe((candidate: Candidate) => {
      this.candidate = candidate;
    });
  }

  goToVotePage(candidateId: string) {
    this.router.navigate(['/vote', candidateId]);
  }
}
