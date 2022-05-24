import { TestBed } from '@angular/core/testing';

import { GitHistoryService } from './git-history.service';

describe('GitHistoryService', () => {
  let service: GitHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
