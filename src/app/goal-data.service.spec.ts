import { TestBed } from '@angular/core/testing';

import { GoalDataService } from './goal-data.service';

describe('GoalDataService', () => {
  let service: GoalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
