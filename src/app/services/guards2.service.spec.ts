import { TestBed } from '@angular/core/testing';

import { Guards2Service } from './guards2.service';

describe('Guards2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Guards2Service = TestBed.get(Guards2Service);
    expect(service).toBeTruthy();
  });
});
