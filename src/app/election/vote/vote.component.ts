import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Candidate } from 'src/app/shared/models/candidate-model';
import { CandidateService } from 'src/app/shared/services/candidate.service';
import { VoteService } from 'src/app/shared/services/vote.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent {
  voteForm!: FormGroup;
  showConfirm = false;
  candidate!: Candidate;
  hasAlreadyVoted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private voteService: VoteService,
    private authService: AuthService,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.initializeVoteForm();
    this.getCandidate();
    this.checkUserVotingStatus();
  }

  validateVote() {
    this.showConfirm = true;
  }

  confirmationClosed(hasConfirmed: boolean) {
    if (!hasConfirmed) return (this.showConfirm = false);

    if (this.voteForm.valid) {
      const voteData = {
        userId: this.authService.user?.id,
        candidateId: this.candidate.id,
        qualities: this.voteForm.value.qualities,
        program: this.voteForm.value.program,
        representation: this.voteForm.value.representation,
        profitable: this.voteForm.value.profitable,
        listening: this.voteForm.value.listening,
        voteTime: new Date().toISOString(),
      };

      this.voteService.submitVote(voteData);
      this.router.navigate(['/statistic']);
    }
    return undefined;
  }

  get getErrorLabel() {
    if (this.voteForm.errors?.['required'])
      return 'Les champs sont obligatoires';
    if (!!this.voteForm.controls?.['qualities']?.errors?.['minlength'])
      return `La longueur minimale de vos réponses est ${this.voteForm.controls?.['qualities']?.errors?.['minlength']?.requiredLength}`;
    if (!!this.voteForm.controls?.['representation']?.errors?.['minlength'])
      return `La longueur minimale de vos réponses est ${this.voteForm.controls?.['representation']?.errors?.['minlength']?.requiredLength}`;
    if (this.voteForm.invalid)
      'Veuillez remplir convenablement tous les champs';

    return null;
  }

  private initializeVoteForm() {
    this.voteForm = this.fb.group({
      qualities: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      program: new FormControl('', Validators.required),
      representation: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      profitable: new FormControl('', Validators.required),
      listening: new FormControl('', Validators.required),
    });
  }

  private getCandidate() {
    this.route.params.subscribe((params) => {
      const candidateId = params['candidateId'];
      this.candidateService
        .getCandidateById(candidateId)
        .subscribe((candidate) => {
          this.candidate = candidate;
        });
    });
  }

  private checkUserVotingStatus() {
    if (!this.authService.user) {
      this.router.navigate(['/login']);
      return;
    }

    this.voteService
      .hasUserVoted(this.authService.user.id)
      .subscribe((votes: any[]) => {
        this.hasAlreadyVoted = votes.length > 0;
      });
  }
}
