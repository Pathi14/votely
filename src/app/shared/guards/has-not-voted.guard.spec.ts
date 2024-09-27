import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hasNotVotedGuard } from './has-not-voted.guard';

describe('hasNotVotedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hasNotVotedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
