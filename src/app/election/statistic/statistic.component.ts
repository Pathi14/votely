import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/shared/models/candidate-model';
import { CandidateVoteResult } from 'src/app/shared/models/candidate-vote-result';
import { voteResult } from 'src/app/shared/models/vote-result.model';
import { CandidateService } from 'src/app/shared/services/candidate.service';
import { VoteService } from 'src/app/shared/services/vote.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  candidatesVoteCounts: CandidateVoteResult[] = [];

  constructor(private candidateService: CandidateService, private voteService: VoteService) { }

  ngOnInit(): void {
    this.loadCandidatesWithVotes();
  }

  private loadCandidatesWithVotes() {
    this.candidateService.getCandidates().subscribe((candidates: Candidate[]) => {
      this.voteService.getVote().subscribe((votes: voteResult[]) => {
        const totalVotes = votes.length;

        this.candidatesVoteCounts = candidates.map(candidate => {
          const candidateVotes = votes.filter(vote => vote.candidateId === candidate.id).length / totalVotes;

          return {
            candidateId: candidate.id,
            name: candidate.name,
            profilePictureUrl: candidate.profilePictureUrl,
            votes: candidateVotes
          };
        });

        this.candidatesVoteCounts.sort((a, b) => b.votes - a.votes);
      });
    });
  }
}
