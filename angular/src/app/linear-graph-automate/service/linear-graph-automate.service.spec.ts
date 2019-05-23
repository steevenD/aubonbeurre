import { TestBed } from '@angular/core/testing';

import { LinearGraphAutomateService } from './linear-graph-automate.service';

describe('LinearGraphAutomateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinearGraphAutomateService = TestBed.get(LinearGraphAutomateService);
    expect(service).toBeTruthy();
  });
});
