import { TestBed, inject } from '@angular/core/testing';

import { FireDateService } from './fire-date.service';

describe('FireDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireDateService]
    });
  });

  it('should be created', inject([FireDateService], (service: FireDateService) => {
    expect(service).toBeTruthy();
  }));
});
