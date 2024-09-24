import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VoteService } from 'src/app/shared/services/vote.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent {
  voteForm! : FormGroup;
  showConfirm = false;
  userId! : string | null;
  candidateId! : string;
  hasAlreadyVoted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private voteService: VoteService
  ) { }

  ngOnInit(): void {
    this.initializeVoteForm();
    this.getCandidateId();
    this.checkUserVotingStatus();
  }

  
  validateVote() {
    this.showConfirm = true;
  }
  
  confirmationClosed(hasConfirmed: boolean) {
    if (!hasConfirmed) return this.showConfirm = false;
    
    if (this.voteForm.valid) {
      const voteData = {
        userId: this.userId, 
        candidateId: this.candidateId,     
        qualities: this.voteForm.value.qualities,
        program: this.voteForm.value.program,
        representation: this.voteForm.value.representation,
        profitable: this.voteForm.value.profitable,
        listening: this.voteForm.value.listening,
        voteTime: new Date().toISOString() 
      };
      
      this.voteService.submitVote(voteData);
      this.router.navigate(['/statistic']);
    }
    return undefined;
  }
  
  close() {
    this.showConfirm = false;
  }
  
  get getErrorLabel() {
    if (this.voteForm.errors?.['required']) return 'Les champs sont obligatoires';
    if (!!this.voteForm.controls?.['qualities']?.errors?.['minlength']) return `La longueur minimal pour votre mot de passe est ${this.voteForm.controls?.['qualities']?.errors?.['minlength']?.requiredLength}`;
    if (!!this.voteForm.controls?.['representation']?.errors?.['minlength']) return `La longueur minimal pour votre mot de passe est ${this.voteForm.controls?.['representation']?.errors?.['minlength']?.requiredLength}`;
    return 'Veuillez remplir convenablement tous les champs';
  }
  
  private initializeVoteForm() {
    this.voteForm = this.fb.group({
      qualities: new FormControl('', [Validators.required, Validators.minLength(10)]),
      program: new FormControl('', Validators.required),
      representation: new FormControl('', [Validators.required, Validators.minLength(10)]),
      profitable: new FormControl('', Validators.required),
      listening: new FormControl('', Validators.required)
    });
  }
  
  private getCandidateId() {
    this.route.params.subscribe(params => {
      this.candidateId = params['candidateId'];
    });
  }
  
  private checkUserVotingStatus() {
    const storedUserId = localStorage.getItem('user');
  
    if (!storedUserId) {
      this.router.navigate(['/login']);
      return;
    }
  
    this.userId = storedUserId;
    this.voteService.hasUserVoted(this.userId).subscribe((votes: any[]) => {
      this.hasAlreadyVoted = votes.length > 0;
    });
  }

}
