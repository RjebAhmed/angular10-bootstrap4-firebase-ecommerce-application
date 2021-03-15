import { TestBed } from '@angular/core/testing';

import { guardService } from './guard.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: guardService = TestBed.get(guardService);
    expect(service).toBeTruthy();
  });
});
