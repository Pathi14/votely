import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { VoteService } from 'src/app/shared/services/vote.service';

export const HasNotVotedGuard: CanActivateFn = async () => {
  const voteService = inject(VoteService);
  const authService = inject(AuthService);
  const router = inject(Router);

  const currentUser = authService.user;

  if (!currentUser) {
    return true;
  }

  const votes = await firstValueFrom(voteService.hasUserVoted(currentUser.id));

  if (votes.length > 0) {
    alert("Vous avez déjà voté ! Explorez les statistiques de l'élection.");
    return false;
  }

  return true;
};
