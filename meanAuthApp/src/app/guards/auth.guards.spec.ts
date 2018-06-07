import { TestBed, inject } from '@angular/core/testing';

import { Path.GuardService } from './path.guard.service';

describe('Path.GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Path.GuardService]
    });
  });

  it('should be created', inject([Path.GuardService], (service: Path.GuardService) => {
    expect(service).toBeTruthy();
  }));
});
